/*
 * Copyright (C) 2018 Zhejiang xiaominfo Technology CO.,LTD.
 * All rights reserved.
 * Official Web Site: http://www.xiaominfo.com.
 * Developer Web Site: http://open.xiaominfo.com.
 */

package com.github.xiaoymin.swaggerbootstrapui.configuration;

import com.github.xiaoymin.swaggerbootstrapui.filter.ProductionSecurityFilter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;

/***
 *
 * @since:swagger-bootstrap-ui 1.0
 * @author <a href="mailto:xiaoymin@foxmail.com">xiaoymin@foxmail.com</a> 
 * 2019/01/18 17:31
 */
@Configuration
public class SecurityConfiguration {

    Logger logger= LoggerFactory.getLogger(SecurityConfiguration.class);

    private final Environment environment;

    @Autowired
    public SecurityConfiguration(Environment environment) {
        this.environment = environment;
    }


    @Bean
    public ProductionSecurityFilter productionSecurityFilter(){
        boolean prod=false;
        if (environment!=null){
            String prodStr=environment.getProperty("swagger.production");
            if (logger.isDebugEnabled()){
                logger.debug("swagger.production:{}",prodStr);
            }
            prod=Boolean.valueOf(prodStr);
        }
        ProductionSecurityFilter p=new ProductionSecurityFilter(prod);
        return p;
    }
}