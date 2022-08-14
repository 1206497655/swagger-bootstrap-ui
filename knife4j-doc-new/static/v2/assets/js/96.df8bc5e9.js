(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{446:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_2-6-版本说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-版本说明"}},[t._v("#")]),t._v(" 2.6 版本说明")]),t._v(" "),s("p",[t._v("在更名为"),s("code",[t._v("Knife4j")]),t._v("之前,原来的名称是叫"),s("code",[t._v("swagger-bootstrap-ui")]),t._v("，这是两种不一样风格的Ui,对比情况如下：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("软件")]),t._v(" "),s("th",[t._v("开发语言&框架")]),t._v(" "),s("th",[t._v("状态")]),t._v(" "),s("th",[t._v("最后版本")]),t._v(" "),s("th",[t._v("风格")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Knife4j")]),t._v(" "),s("td",[t._v("Java、JavaScript、Vue")]),t._v(" "),s("td",[t._v("持续更新中")]),t._v(" "),s("td",[t._v("无")]),t._v(" "),s("td",[t._v("黑色")])]),t._v(" "),s("tr",[s("td",[t._v("swagger-bootstrap-ui")]),t._v(" "),s("td",[t._v("Java、JavaScript、jQuery")]),t._v(" "),s("td",[t._v("停更")]),t._v(" "),s("td",[t._v("1.9.6")]),t._v(" "),s("td",[t._v("蓝色")])])])]),t._v(" "),s("p",[t._v("Knife4j从开源至今,目前主要经历版本的变化，分别如下：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("版本")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("1.9.6")]),t._v(" "),s("td",[t._v("蓝色皮肤风格,开始更名，增加更多后端模块")])]),t._v(" "),s("tr",[s("td",[t._v("2.0~2.0.5")]),t._v(" "),s("td",[t._v("Ui重写，底层依赖的springfox框架版本是"),s("code",[t._v("2.9.2")])])]),t._v(" "),s("tr",[s("td",[t._v("2.0.6~")]),t._v(" "),s("td",[t._v("底层springfox框架版本升级知"),s("code",[t._v("2.10.5")]),t._v(",OpenAPI规范是v2")])]),t._v(" "),s("tr",[s("td",[t._v("3.0~")]),t._v(" "),s("td",[t._v("底层依赖springfox框架版本升级至"),s("code",[t._v("3.0.3")]),t._v(",OpenAPI规范是v3")])])])]),t._v(" "),s("p",[t._v("需要注意的是，目前Knife4j的主版本依然是沿用2.x的版本号，也就是从2.0.6版本开始逐步升级，迭代发布时版本会随之升级，但同时3.x版本也会同步更新发布，主要是满足开发者对于springfox3以及OpenAPI3规范的使用")]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("特别注意")]),t._v(" "),s("p",[t._v("1、目前已经发行的Knife4j版本，Knife4j本身已经引入了springfox，开发者在使用时不用再单独引入Springfox的具体版本，否额会导致版本冲突。另外在网关层聚合(例如gateway)时，必须禁用Knife4j的增强模式")]),t._v(" "),s("p",[t._v("2、使用Knife4j2.0.6及以上的版本，Spring Boot的版本必须大于等于"),s("code",[t._v("2.2.x")])])]),t._v(" "),s("p",[t._v("自2.0.6版本开始，2.x与3.x的版本主要变化是底层springfox所引用的版本不同，但Knife4j提供的Ui其实是同一个，同时兼容OpenAPI2以及OpenAPI3规范，源码请参考"),s("a",{attrs:{href:"https://gitee.com/xiaoym/knife4j/tree/master/knife4j-vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("knife4j-vue"),s("OutboundLink")],1),t._v("，如果开发者依然想沿用以前Knife4j一直以来发布的2.x版本，请继续更随Knife4j的更新步伐使用2.x的版本即可，如果开发者想尝鲜，则可以考虑3.x的版本")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("3.x的版本依赖springfox3.0.0，springfox3.0目前也只更新发布了一个版本，从功能稳定性来说，可能不如2.x系列，所以开发者慎重使用，当然,如果是Ui上的一些功能性问题或者Bug，也欢迎开发者向Knife4j"),s("a",{attrs:{href:"https://gitee.com/xiaoym/knife4j/issues/new",target:"_blank",rel:"noopener noreferrer"}},[t._v("发起ISSUE"),s("OutboundLink")],1),t._v("，等springfox3版本趋于稳定后，knife4j的2.x版本就不会在更新，会并向3.x")])]),t._v(" "),s("p",[t._v("具体的对应关系如下：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("2.x版本")]),t._v(" "),s("th",[t._v("3.x版本")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("2.0.6")]),t._v(" "),s("td",[t._v("3.0")])]),t._v(" "),s("tr",[s("td",[t._v("2.0.7")]),t._v(" "),s("td",[t._v("3.0.1")])]),t._v(" "),s("tr",[s("td",[t._v("2.0.8")]),t._v(" "),s("td",[t._v("3.0.2")])]),t._v(" "),s("tr",[s("td",[t._v("以此类推...")]),t._v(" "),s("td",[t._v("以此类推...")])])])]),t._v(" "),s("p",[t._v("如果开发者底层框架使用的是springdoc-openapi框架而非springfox,则需要使用Knife4j提供的对应3.x版本,需要注意的是该版本没有Knife4j提供的部分增强功能，是一个纯Ui。")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.github.xiaoymin"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("knife4j-springdoc-ui"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--在引用时请在maven中央仓库搜索3.X最新版本号--\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("3.0.2"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("每一个版本的更详细的更新日志，开发者可参考"),s("a",{attrs:{href:"../changelog"}},[t._v("更新日志")])]),t._v(" "),s("comment-comment")],1)}),[],!1,null,null,null);a.default=e.exports}}]);