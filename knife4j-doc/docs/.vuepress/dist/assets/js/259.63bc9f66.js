(window.webpackJsonp=window.webpackJsonp||[]).push([[259],{363:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"基于nginx反向代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于nginx反向代理"}},[t._v("#")]),t._v(" 基于Nginx反向代理")]),t._v(" "),a("p",[t._v("在静态部署预览Swagger JSON章节中我们已经讲过如何通过nginx来部署静态文件预览文档，但此时我们会发现存在一个问题，即无法进行接口的调试。")]),t._v(" "),a("p",[t._v("我们借助于nginx的反向代理功能,帮助我们实现接口的调试功能")]),t._v(" "),a("p",[t._v("假设还是提供静态JSON的方式,我们只需要在nginx的配置节点中添加一层location即可")]),t._v(" "),a("p",[t._v("如下：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        listen       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18001")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        server_name  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.112"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#charset koi8-r;")]),t._v("\n\n        location / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            root /mnt/application/swagger-static"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        location /api/ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        \t// Swagger JSON文件中所有以api开头的接口全部走8999的代理\n            proxy_pass http://127.0.0.1:8999/api/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            client_max_body_size   200m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("通过以上配置,我们即可预览及调试我们的接口文档")]),t._v(" "),a("p",[a("strong",[t._v("但是")])]),t._v(" "),a("p",[t._v("我们又会发现问题,很多时候,我们所写的接口可能并不规范,并非所有的接口都是以/api开头的,或者以固定的其他格式开头的接口,那此时如果我们以上面的配置方式来配置,当我们的接口以"),a("code",[t._v("/admin/test")]),t._v("这种形式出现时,我们就无法调试该接口")]),t._v(" "),a("p",[t._v("那或许我们可以换一种方式,我们将该服务下的所有接口理解为一个服务,我们给一个服务取一个特点的名称,然后通过聚合服务的方式,将文档聚合显示出来,这样既可进行调试")]),t._v(" "),a("p",[t._v("例如：")]),t._v(" "),a("p",[t._v("将"),a("code",[t._v("127.0.0.1:8999")]),t._v("理解为"),a("code",[t._v("service1")])]),t._v(" "),a("p",[t._v("我们在访问该服务的接口时加上服务前缀："),a("code",[t._v("/service1/api/xxx")]),t._v(",此时,不管我们的接口又多么不规范,只要是service1下的接口,nginx都会将它转发到"),a("code",[t._v("127.0.0.1:8999")]),t._v("这台服务上,这样我们也完成了接口的调试")]),t._v(" "),a("p",[t._v("nginx配置：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        listen       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18001")]),t._v(";\n        server_name  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.112")]),t._v(";\n        #charset koi8-r;\n\n        location / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            root /mnt/application/swagger-static;\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        location /service1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            proxy_pass http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//127.0.0.1:8999/;")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\tlocation /service2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            proxy_pass http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//127.0.0.1:8998/;")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("很显然,通过以上配置,最终能达到我们的预期,但是在我们的文档界面中,没有"),a("code",[t._v("service1")]),t._v("这样的basePath属性供我们配置,此时,我们应该如何处理")]),t._v(" "),a("p",[t._v("针对这种情况，"),a("code",[t._v("swagger-bootstrap-ui")]),t._v("在分组属性中,扩展了一个"),a("code",[t._v("basePath")]),t._v("属性值")]),t._v(" "),a("p",[t._v("此时，我们的"),a("code",[t._v("group.json")]),t._v("文件如下：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"微服务-用户模块"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/service1/v2/api-docs?group=分组接口"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"swaggerVersion"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"location"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/service1/v2/api-docs?group=分组接口"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"basePath"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/service1"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"微服务-订单模块"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/service2/v2/api-docs?group=默认接口"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"swaggerVersion"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"location"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/service2/v2/api-docs?group=默认接口"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"basePath"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/service2"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("此时,我们的Swagger的JSON路径地址,我们也可以使用我们服务提供给我们的接口地址，只需要加上为服务名称,分组名称即可得到该服务的Swagger JSON文件")]),t._v(" "),a("p",[t._v("通过这种方式,我们可以在"),a("code",[t._v("group.json")]),t._v("文件中聚合所有后端的Swagger服务接口,最终一致输出显示")]),t._v(" "),a("p",[t._v("效果如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/knife4j/images/front-1.png",alt:""}})]),t._v(" "),a("comment-comment")],1)}),[],!1,null,null,null);s.default=e.exports}}]);