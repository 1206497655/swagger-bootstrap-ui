/*
 * Copy right © 2022 浙江力石科技股份有限公司 All Rights Reserved.
 * Official Web Site: http://lishiots.com
 */

package com.github.xiaoymin.knife4j.proxy.request;


import com.github.xiaoymin.knife4j.proxy.ProxyHttpClientRequest;
import io.undertow.server.HttpServerExchange;


/**
 * @author <a href="mailto:xiaoymin@foxmail.com">xiaoymin@foxmail.com</a>
 * 2022/5/8 19:50
 * @since:knife4j-aggregation-desktop 2.0
 */
public class UndertowProxyHttpClientRequest implements ProxyHttpClientRequest {


    private final HttpServerExchange exchange;

    public UndertowProxyHttpClientRequest(HttpServerExchange exchange) {
        this.exchange = exchange;
    }

    public HttpServerExchange getExchange() {
        return exchange;
    }
}
