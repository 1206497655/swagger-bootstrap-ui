(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{458:function(t,a,r){"use strict";r.r(a);var e=r(42),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"v1-9-6-2019-08-28-解决长整型精度丢失的问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#v1-9-6-2019-08-28-解决长整型精度丢失的问题"}},[t._v("#")]),t._v(" [v1.9.6-2019/08/28 解决长整型精度丢失的问题]")]),t._v(" "),r("p",[t._v("swagger-bootstrap-ui 1.9.6 发布了。swagger-bootstrap-ui是 Swagger 的增强UI 实现，使文档更友好一点儿")]),t._v(" "),r("p",[r("strong",[t._v("文档")]),t._v("：http://doc.xiaominfo.com")]),t._v(" "),r("p",[r("strong",[t._v("效果")]),t._v("：http://swagger-bootstrap-ui.xiaominfo.com/doc.html")]),t._v(" "),r("p",[r("strong",[t._v("Gitee:")]),r("a",{attrs:{href:"https://gitee.com/xiaoym/swagger-bootstrap-ui",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gitee.com/xiaoym/swagger-bootstrap-ui"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("strong",[t._v("GitHub:")]),r("a",{attrs:{href:"https://github.com/xiaoymin/swagger-bootstrap-ui",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/xiaoymin/swagger-bootstrap-ui"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("**示例:**https://gitee.com/xiaoym/swagger-bootstrap-ui-demo")]),t._v(" "),r("h2",{attrs:{id:"重要说明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#重要说明"}},[t._v("#")]),t._v(" 重要说明")]),t._v(" "),r("p",[r("strong",[t._v("这是swagger-bootstrap-ui的最后一个版本")])]),t._v(" "),r("p",[r("strong",[t._v("这是swagger-bootstrap-ui的最后一个版本")])]),t._v(" "),r("p",[r("strong",[t._v("这是swagger-bootstrap-ui的最后一个版本")])]),t._v(" "),r("p",[t._v("重要的事情说三遍!!!")]),t._v(" "),r("p",[t._v("一开始项目初衷是为了写一个增强版本的Swagger 前端UI,但是随着项目的发展,面对越来越多的个性化需求,不得不编写后端Java代码以满足新的需求,在swagger-bootstrap-ui的1.8.5~1.9.6版本之间,采用的是后端Java代码和Ui都混合在一个Jar包里面的方式提供给开发者使用.这种方式虽说对于集成swagger来说很方便,只需要引入jar包即可,但是在微服务架构下显得有些臃肿。")]),t._v(" "),r("p",[t._v("因此,项目正式更名为"),r("strong",[t._v("knife4j")]),t._v(",取名knife4j是希望她能像一把匕首一样小巧,轻量,并且功能强悍,更名也是希望把她做成一个为Swagger接口文档服务的通用性解决方案,不仅仅只是专注于前端Ui前端.")]),t._v(" "),r("p",[t._v("swagger-bootstrap-ui的所有特性都会集中在"),r("code",[t._v("knife4j-spring-ui")]),t._v("包中,并且后续也会满足开发者更多的个性化需求.")]),t._v(" "),r("p",[t._v("主要的变化是,项目的相关类包路径更换为"),r("code",[t._v("com.github.xiaoymin.knife4j")]),t._v("前缀,开发者使用增强注解时需要替换包路径")]),t._v(" "),r("p",[t._v("后端Java代码和ui包分离为多个模块的jar包,以面对在目前微服务架构下,更加方便的使用增强文档注解(使用SpringCloud微服务项目,只需要在网关层集成UI的jar包即可,因此分离前后端)")]),t._v(" "),r("p",[r("strong",[t._v("knife4j")]),t._v("沿用swagger-bootstrap-ui的版本号,第1个版本从1.9.6开始,关于使用方法,请参考文档")]),t._v(" "),r("p",[t._v("由于更名给大家带来的不便深表歉意~！")]),t._v(" "),r("h2",{attrs:{id:"特性-优化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#特性-优化"}},[t._v("#")]),t._v(" 特性&优化")]),t._v(" "),r("p",[t._v("1、解决Spring路由PathVariable不显示的情况，并优化交互体验")]),t._v(" "),r("p",[t._v("2、解决响应体中的长整型显示错误,精度丢失的问题"),r("a",{attrs:{href:"https://github.com/xiaoymin/swagger-bootstrap-ui/issues/135",target:"_blank",rel:"noopener noreferrer"}},[t._v("#135 @GitHub"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("3、优化请求头Header是中文的情况,如果包含中文则进行encodeURI函数处理,否则不做任何处理"),r("a",{attrs:{href:"https://github.com/xiaoymin/swagger-bootstrap-ui/issues/140",target:"_blank",rel:"noopener noreferrer"}},[t._v("#140 @GitHub"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("4、升级jQuery 1.X系列版本到最新版本"),r("code",[t._v("1.12.4")])]),t._v(" "),r("p",[t._v("5、初始化页面请求Swagger接口资源方式改为异步,在jQuery的ajax方法参数项"),r("code",[t._v("async:false")]),t._v("时,浏览器会抛出警告的问题(同步ajax请求会造成主线程阻塞,对用户体验不是很好,已被置为过时).")]),t._v(" "),r("p",[t._v("6、支持supportedSubmitMethods,后端配置"),r("code",[t._v("UiConfiguration")]),t._v("的Bean"),r("a",{attrs:{href:"https://gitee.com/xiaoym/swagger-bootstrap-ui/issues/IVCQ0",target:"_blank",rel:"noopener noreferrer"}},[t._v("#IVCQ0 @Gitee"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("7、优化下载中文乱码问题,后端需要指定filename值,并且对名称进行URLEncoder.encode处理,UI前端会进行decode成中文,保证下载正常")]),t._v(" "),r("p",[t._v("8、修复curl状态栏复制时内容被转义的bug"),r("a",{attrs:{href:"https://github.com/xiaoymin/swagger-bootstrap-ui/issues/136",target:"_blank",rel:"noopener noreferrer"}},[t._v("#136 @GitHub"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"ui效果展示"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ui效果展示"}},[t._v("#")]),t._v(" UI效果展示")]),t._v(" "),r("p",[r("img",{attrs:{src:"/images/blog/swagger-bootstrap-ui-1.9.5-issue/1.png",alt:"header-json.png"}}),t._v(" "),r("img",{attrs:{src:"/knife4j/images/blog/swagger-bootstrap-ui-1.9.5-issue/2.png",alt:""}}),t._v(" "),r("img",{attrs:{src:"/knife4j/images/blog/swagger-bootstrap-ui-1.9.5-issue/3.png",alt:""}}),t._v(" "),r("img",{attrs:{src:"/knife4j/images/blog/swagger-bootstrap-ui-1.9.5-issue/4.png",alt:""}}),t._v(" "),r("img",{attrs:{src:"/knife4j/images/blog/swagger-bootstrap-ui-1.9.5-issue/5.png",alt:""}})]),t._v(" "),r("h2",{attrs:{id:"项目地址"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#项目地址"}},[t._v("#")]),t._v(" 项目地址")]),t._v(" "),r("p",[r("strong",[t._v("Maven坐标")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("<dependency>\n   <groupId>com.github.xiaoymin</groupId>\n   <artifactId>swagger-bootstrap-ui</artifactId>\n   <version>1.9.6</version>\n</dependency>\n")])])]),r("h2",{attrs:{id:"star-issue"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#star-issue"}},[t._v("#")]),t._v(" Star & Issue")]),t._v(" "),r("p",[t._v("感谢各位朋友的支持,前往"),r("a",{attrs:{href:"https://gitee.com/xiaoym/swagger-bootstrap-ui",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gitee.com/xiaoym/swagger-bootstrap-ui"),r("OutboundLink")],1),t._v("点个Star吧~~ ：）")]),t._v(" "),r("h2",{attrs:{id:"关注"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#关注"}},[t._v("#")]),t._v(" 关注")]),t._v(" "),r("p",[t._v("关注我的微信公众号,实时了解"),r("code",[t._v("swagger-bootstrap-ui")]),t._v("的最新资讯~~~~")]),t._v(" "),r("p",[r("img",{attrs:{src:"/knife4j/images/blog/swagger-bootstrap-ui-1.9.4-issue/us.png",alt:""}})]),t._v(" "),r("comment-comment")],1)}),[],!1,null,null,null);a.default=s.exports}}]);