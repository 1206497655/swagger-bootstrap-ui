/*
 * Copy right © 2022 浙江力石科技股份有限公司 All Rights Reserved.
 * Official Web Site: http://lishiots.com
 */

package com.github.xiaoymin.knife4j.proxy.undertow;

import cn.hutool.core.collection.CollectionUtil;
import cn.hutool.core.util.StrUtil;
import com.github.xiaoymin.knife4j.aggre.core.RouteRepository;
import com.github.xiaoymin.knife4j.aggre.core.RouteRequestContext;
import com.github.xiaoymin.knife4j.aggre.core.RouteResponse;
import com.github.xiaoymin.knife4j.aggre.core.common.ExecutorEnum;
import com.github.xiaoymin.knife4j.aggre.core.common.RouteUtils;
import com.github.xiaoymin.knife4j.aggre.core.pojo.BasicAuth;
import com.github.xiaoymin.knife4j.aggre.core.pojo.SwaggerRoute;
import com.github.xiaoymin.knife4j.core.GlobalDesktopManager;
import com.github.xiaoymin.knife4j.handler.BlockingResponseHandler;
import com.github.xiaoymin.knife4j.proxy.AbstractProxyHttpClient;
import com.github.xiaoymin.knife4j.proxy.ProxyHttpClientRequest;
import com.github.xiaoymin.knife4j.proxy.ProxyHttpClientResponse;
import com.github.xiaoymin.knife4j.proxy.request.UndertowProxyHttpClientRequest;
import com.github.xiaoymin.knife4j.proxy.response.UndertowProxyHttpclientResponse;
import com.github.xiaoymin.knife4j.util.NetUtils;
import io.undertow.server.HttpServerExchange;
import io.undertow.util.HeaderMap;
import io.undertow.util.HeaderValues;
import io.undertow.util.HttpString;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.io.InputStream;
import java.net.URI;
import java.util.*;

/**
 * @author <a href="mailto:xiaoymin@foxmail.com">xiaoymin@foxmail.com</a>
 * 2022/5/8 19:49
 * @since:knife4j-aggregation-desktop 2.0
 */
public class UndertowProxyHttpClient extends AbstractProxyHttpClient {

    Logger logger= LoggerFactory.getLogger(UndertowProxyHttpClient.class);

    public UndertowProxyHttpClient(ExecutorEnum executorEnum, String rootPath) {
        super(executorEnum, rootPath);
    }

    @Override
    public ProxyHttpClientResponse proxy(ProxyHttpClientRequest request) {
        if (!(request instanceof UndertowProxyHttpClientRequest)){
            throw new IllegalArgumentException("Request not Undertow Instance");
        }
        UndertowProxyHttpClientRequest proxyHttpClientRequest=(UndertowProxyHttpClientRequest) request;
        boolean success=false;
        String message="";
        try{
            RouteRequestContext routeContext=new RouteRequestContext();
            this.buildContext(routeContext,proxyHttpClientRequest.getExchange(),proxyHttpClientRequest);
            RouteResponse routeResponse=this.routeExecutor.executor(routeContext);
            writeResponseHeader(routeResponse,proxyHttpClientRequest.getExchange());
            writeBody(routeResponse,proxyHttpClientRequest.getExchange());
            success=true;
            message="SUCCESS";
        }catch (Exception e){
            logger.error("has Error:{}",e.getMessage());
            logger.error(e.getMessage(),e);
            //write Default
            NetUtils.renderCommonJson(proxyHttpClientRequest.getExchange(),e.getMessage());
            message=e.getMessage();
        }
        return new UndertowProxyHttpclientResponse(success,message);
    }

    /**
     * 构建路由的请求上下文
     * @param routeRequestContext
     * @param http
     */
    protected void buildContext(RouteRequestContext routeRequestContext, HttpServerExchange http,UndertowProxyHttpClientRequest proxyHttpClientRequest) throws IOException {
        //当前请求是否basic请求
        HeaderMap headerValues=http.getRequestHeaders();
        //String basicHeader=headerValues.get(GlobalDesktopManager.ROUTE_PROXY_HEADER_BASIC_NAME);
        String basicHeader=NetUtils.getHeader(headerValues, GlobalDesktopManager.ROUTE_PROXY_HEADER_BASIC_NAME);
        String code=NetUtils.getHeader(headerValues,GlobalDesktopManager.ROUTE_PROXY_DOCUMENT_CODE);
        RouteRepository routeRepository=GlobalDesktopManager.me.repository(code);
        if (StrUtil.isNotBlank(code)&&StrUtil.isNotBlank(basicHeader)){
            BasicAuth basicAuth=routeRepository.getAuth(code,basicHeader);
            if (basicAuth!=null){
                //增加Basic请求头
                routeRequestContext.addHeader("Authorization", RouteUtils.authorize(basicAuth.getUsername(),basicAuth.getPassword()));
            }
        }
        //SwaggerRoute swaggerRoute=getRoute(request.getHeader(ROUTE_PROXY_HEADER_NAME));
        SwaggerRoute swaggerRoute=routeRepository.getRoute(code,NetUtils.getHeader(headerValues,GlobalDesktopManager.ROUTE_PROXY_HEADER_NAME));
        //有可能是Disk模式
        if (swaggerRoute==null){
            throw new UnsupportedOperationException("Unsupported Debug");
        }
        //String uri="http://knife4j.xiaominfo.com";
        String uri=swaggerRoute.getUri();
        if (StrUtil.isBlank(uri)){
            throw new UnsupportedOperationException("Unsupported Debug");
        }
        String host= URI.create(uri).getHost();
        String fromUri=http.getRequestURI();
        StringBuilder requestUrlBuilder=new StringBuilder();
        requestUrlBuilder.append(uri);
        //判断当前聚合项目的contextPath
        /*if (StrUtil.isNotBlank(this.rootPath)&&!StrUtil.equals(this.rootPath,ROUTE_BASE_PATH)){
            fromUri=fromUri.replaceFirst(this.rootPath,"");
        }*/
        //替换项目的code路径
        String projectContextPath="/"+code;
        fromUri=fromUri.replaceFirst(projectContextPath,"");
        //判断servicePath
        if (StrUtil.isNotBlank(swaggerRoute.getServicePath())&&!StrUtil.equals(swaggerRoute.getServicePath(),GlobalDesktopManager.ROUTE_BASE_PATH)){
            if (StrUtil.startWith(fromUri,swaggerRoute.getServicePath())){
                //实际在请求时,剔除servicePath,否则会造成404
                fromUri=fromUri.replaceFirst(swaggerRoute.getServicePath(),"");
            }
        }
        requestUrlBuilder.append(fromUri);
        //String requestUrl=uri+fromUri;
        String requestUrl=requestUrlBuilder.toString();
        logger.info("Target Request Url:{},Method:{},Host:{}",requestUrl,http.getRequestMethod().toString(),host);
        routeRequestContext.setOriginalUri(fromUri);
        routeRequestContext.setUrl(requestUrl);
        routeRequestContext.setMethod(http.getRequestMethod().toString());
        if (CollectionUtil.isNotEmpty(headerValues)){
            for (HeaderValues hv:headerValues){
                String key=hv.getHeaderName().toString();
                if (CollectionUtil.isNotEmpty(hv)){
                    String value=hv.getFirst();
                    if (!this.ignoreHeaders.contains(key.toLowerCase())){
                        routeRequestContext.addHeader(key,value);
                    }
                }
            }
        }
        routeRequestContext.addHeader("Host",host);
        Map<String, Deque<String>> parameters= http.getQueryParameters();
        if (CollectionUtil.isNotEmpty(parameters)){
            for (Map.Entry<String,Deque<String>> dequeEntry:parameters.entrySet()){
                String name=dequeEntry.getKey();
                Deque<String> deque=dequeEntry.getValue();
                if (CollectionUtil.isNotEmpty(deque)){
                    String value=deque.getFirst();
                    logger.info("param-name:{},value:{}",name,value);
                    routeRequestContext.addParam(name,value);
                }
            }
        }
        routeRequestContext.setRequestContent(NetUtils.getRequestInput(http));
    }

    /**
     * Write响应头
     * @param routeResponse
     * @param response
     */
    protected void writeResponseHeader(RouteResponse routeResponse,HttpServerExchange response){
        if (routeResponse!=null){
            if (CollectionUtil.isNotEmpty(routeResponse.getHeaders())){
                for (Map.Entry<String,String> entry:routeResponse.getHeaders().entrySet()){
                    //logger.info("{}:{}",entry.getKey(),entry.getValue());
                    if (!StrUtil.equalsIgnoreCase(entry.getKey(),"Transfer-Encoding")){
                        response.getResponseHeaders().add(new HttpString(entry.getKey()),entry.getValue());
                        //response.addHeader(entry.getKey(),entry.getValue());
                    }
                }
            }
            logger.info("ContentType:{},CharsetEncoding:{}",routeResponse.getContentType(),routeResponse.getCharsetEncoding());
            StringBuilder contentType=new StringBuilder();
            contentType.append(routeResponse.getContentType());
            if (routeResponse.getCharsetEncoding()!=null){
                contentType.append(";charset=").append(routeResponse.getCharsetEncoding().displayName());
            }
            response.getResponseHeaders().add(new HttpString("Content-Type"),contentType.toString());
            //response.setContentType(routeResponse.getContentType());
            if (routeResponse.getContentLength()>0){
                response.setResponseContentLength(routeResponse.getContentLength());
                //response.setContentLengthLong(routeResponse.getContentLength());
            }
        }
    }

    /**
     * 响应内容
     * @param routeResponse
     * @param response
     */
    protected void writeBody(RouteResponse routeResponse, HttpServerExchange response) throws IOException {
        if (routeResponse!=null){
            if (routeResponse.success()){
                InputStream inputStream=routeResponse.getBody();
                if (inputStream!=null){
                    if (response.isInIoThread()){
                        response.dispatch(new BlockingResponseHandler(inputStream));
                        return;
                    }
                }
            }else{
                String text=routeResponse.text();
                if (StrUtil.isNotBlank(text)){
                    response.getResponseSender().send(text);
                }
            }

        }
    }
}
