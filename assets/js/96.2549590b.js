(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{1391:function(t,a,s){"use strict";s.r(a);var i=s(24),e=Object(i.a)({},(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"zinx课程大纲"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#zinx课程大纲"}},[t._v("#")]),t._v(" Zinx课程大纲")]),t._v(" "),i("p"),i("div",{staticClass:"table-of-contents"},[i("ul",[i("li",[i("a",{attrs:{href:"#zinx-架构设计"}},[t._v("Zinx 架构设计")])])])]),i("p"),t._v(" "),i("h2",{attrs:{id:"zinx-架构设计"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#zinx-架构设计"}},[t._v("#")]),t._v(" Zinx 架构设计")]),t._v(" "),i("p",[t._v("我们先来模拟一下一个客户端请求服务器响应的过程：")]),t._v(" "),i("ol",[i("li",[t._v("要有一个客户端对服务器发起请求。")]),t._v(" "),i("li",[t._v("我们的服务器应该去启动对客户端的处理模块并打开工作池来提升并发量。")]),t._v(" "),i("li",[t._v("处理客户端的模块开启两个模块，一个负责读客户端请求，一个负责写客户端请求。")]),t._v(" "),i("li",[t._v("用于读的功能模块，去任务的消息队列里去请求读数据。用于写的功能模块，通过 API 接口，当然我们的 API 不可能只有一个，所以这里肯定是 APIS。")])]),t._v(" "),i("p",[t._v("这个过程就是 Zinx 官方架构图中的一个流程：")]),t._v(" "),i("p",[i("img",{attrs:{src:s(911),alt:"image-20220531170002802"}})]),t._v(" "),i("p",[t._v("Zinx 作为一个轻量级框架，虽然轻便，但是却可以满足以上的过程，所以是具生产力的框架。")]),t._v(" "),i("p",[t._v("我在下面整理了一个思维导图，这个导图中就是我们接下来的实验中要实现的功能。我们将从 0.1 版本开始，一直实现到 1.0 的完整版本。")]),t._v(" "),i("p",[i("img",{attrs:{src:s(912),alt:"image-20220531170009126"}})])])}),[],!1,null,null,null);a.default=e.exports},911:function(t,a,s){t.exports=s.p+"assets/img/image-20220531170002802.8e4c1a8e.png"},912:function(t,a,s){t.exports=s.p+"assets/img/image-20220531170009126.f86eea90.png"}}]);