(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{212:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("主要应用场景：")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),s("p",[t._v("设计结构：")]),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),s("p",[t._v("假设某一个接口响应的JSON内容如下：")]),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._v(" "),s("comment-comment")],1)},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"afterscript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#afterscript","aria-hidden":"true"}},[this._v("#")]),this._v(" AfterScript")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[s("img",{attrs:{src:"/images/knife4j/afterScripts.gif",alt:"输入图片说明",title:"AfterScript.gif"}}),t._v(" "),s("code",[t._v("AfterScript")]),t._v("功能是"),s("code",[t._v("Knife4j")]),t._v("自"),s("code",[t._v("2.0.6")]),t._v("版本开始新增的一项特性功能，在每个接口进行调试Tab中,开发者可以根据"),s("code",[t._v("Knife4j")]),t._v("提供的全局变量,在接口调用之前编写一段"),s("code",[t._v("JavaScript")]),t._v("脚本,当接口调用成功后,"),s("code",[t._v("Knife4j")]),t._v("会执行该脚本。")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("针对JWT类型的接口,调用登录接口后,每个接口请求时带上Token参数,此时可以通过该脚本动态赋值全局token参数,省去复制粘贴的麻烦.")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"全局对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局对象","aria-hidden":"true"}},[this._v("#")]),this._v(" 全局对象")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("code",[this._v("Knife4j")]),this._v("目前主要提供"),a("code",[this._v("ke(Knife4j Environment)")]),this._v("对象来获取或者操作全局对象,主要包含的对象：")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[t._v("global:全局操作,可以获取或者设置目前的全局参数\n"),s("ul",[s("li",[t._v("setHeader("),s("code",[t._v("name")]),t._v(","),s("code",[t._v("value")]),t._v("):设置当前逻辑分组下的全局参数Header请求头")]),t._v(" "),s("li",[t._v("setAllHeader(name,value):设置所有逻辑分组下的全局参数Header请求头")]),t._v(" "),s("li",[t._v("setParameter("),s("code",[t._v("name")]),t._v(","),s("code",[t._v("value")]),t._v("):设置当前逻辑分组下，主要是针对"),s("code",[t._v("query")]),t._v("类型参数进行设置全局设置。")]),t._v(" "),s("li",[t._v("setAllParameter(name,value):设置所有逻辑分组下的全局参数，主要是"),s("code",[t._v("query")]),t._v("类型")])])]),t._v(" "),s("li",[t._v("response:当前请求接口响应内容\n"),s("ul",[s("li",[t._v("headers:服务端响应Header对象,注意,此处所有的header的名称全部进行小写转换")]),t._v(" "),s("li",[t._v("data:服务端响应数据(json/xml/text等等)")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("ke"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    global"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("setHeader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            \n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("setAllHeader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            \n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("setParameter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            \n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("setAllParameter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            \n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        headers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            \n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            \n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"代码示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码示例","aria-hidden":"true"}},[this._v("#")]),this._v(" 代码示例")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"获取服务端响应的header参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取服务端响应的header参数","aria-hidden":"true"}},[this._v("#")]),this._v(" 获取服务端响应的Header参数")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("当我们调用API接口后,开发者如果想拿到服务端写出的响应Header头-"),a("code",[this._v("Content-Type")]),this._v(",并且进行控制台输出打印,可以这样编写"),a("code",[this._v("AfterScript")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" contentType"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ke"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"content-type"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"响应ContentType:"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("contentType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"根据服务端响应的值设置全局header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#根据服务端响应的值设置全局header","aria-hidden":"true"}},[this._v("#")]),this._v(" 根据服务端响应的值设置全局Header")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"token"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1y1tn8tvw93fxixp79dcx0nugixkw4su"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("该接口是登录接口,每个接口请求都需要带上"),a("code",[this._v("token")]),this._v("的请求头,因此我们访问登录接口后,设置全局Header参数"),a("code",[this._v("token")]),this._v(",代码如下：")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" code"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ke"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("code"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("code"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//判断,如果服务端响应code是8200才执行操作")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取token")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" token"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ke"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1、如何参数是Header，则设置当前逻辑分组下的全局Header")]),t._v("\n    ke"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("global"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setHeader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"token"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2、如果全局参数是query类型,则设置当前逻辑分组下的全局Parameter,开发者自行选择")]),t._v("\n    ke"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("global"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setParameter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"token"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);a.default=e.exports}}]);