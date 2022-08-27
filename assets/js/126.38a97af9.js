(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{1442:function(t,a,s){"use strict";s.r(a);var r=s(65),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"seatatcc模式-tcc模式介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#seatatcc模式-tcc模式介绍"}},[t._v("#")]),t._v(" SeataTCC模式-TCC模式介绍")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#tcc-基本原理"}},[t._v("TCC 基本原理")]),s("ul",[s("li",[s("a",{attrs:{href:"#第一阶段-try"}},[t._v("第一阶段 Try")])]),s("li",[s("a",{attrs:{href:"#第二阶段-confirm"}},[t._v("第二阶段 Confirm")])]),s("li",[s("a",{attrs:{href:"#第二阶段-cancel"}},[t._v("第二阶段 Cancel")])]),s("li",[s("a",{attrs:{href:"#多个事务并发的情况"}},[t._v("多个事务并发的情况")])])])]),s("li",[s("a",{attrs:{href:"#seata-tcc事务模式"}},[t._v("Seata TCC事务模式")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"tcc-基本原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcc-基本原理"}},[t._v("#")]),t._v(" TCC 基本原理")]),t._v(" "),s("p",[t._v("TCC 与 Seata AT 事务一样都是"),s("strong",[t._v("两阶段事务")]),t._v("，它与 AT 事务的主要区别为：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("TCC 对业务代码侵入严重")]),t._v("\n每个阶段的数据操作都要自己进行编码来实现，事务框架无法自动处理。")]),t._v(" "),s("li",[s("strong",[t._v("TCC 效率更高")]),t._v("\n不必对数据加"),s("strong",[t._v("全局锁")]),t._v("，允许多个事务同时操作数据。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/2020073022341983.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODMwNTQ0MA==,size_16,color_FFFFFF,t_70#pic_center",alt:"a"}})]),t._v(" "),s("h3",{attrs:{id:"第一阶段-try"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一阶段-try"}},[t._v("#")]),t._v(" 第一阶段 Try")]),t._v(" "),s("p",[t._v("以账户服务为例，当下订单时要扣减用户账户金额：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/2020073019240411.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODMwNTQ0MA==,size_16,color_FFFFFF,t_70#pic_center",alt:"a"}})]),t._v(" "),s("p",[t._v("假如用户购买 100 元商品，要扣减 100 元。")]),t._v(" "),s("p",[t._v("TCC 事务首先对这100元的扣减金额进行预留，或者说是先冻结这100元：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200730192602828.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODMwNTQ0MA==,size_16,color_FFFFFF,t_70#pic_center",alt:"a"}})]),t._v(" "),s("h3",{attrs:{id:"第二阶段-confirm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第二阶段-confirm"}},[t._v("#")]),t._v(" 第二阶段 Confirm")]),t._v(" "),s("p",[t._v("如果第一阶段能够顺利完成，那么说明“扣减金额”业务（分支事务）最终肯定是可以成功的。当全局事务提交时， TC会控制当前分支事务进行提交，如果提交失败，TC 会反复尝试，直到提交成功为止。")]),t._v(" "),s("p",[t._v("当全局事务提交时，就可以使用冻结的金额来最终实现业务数据操作：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200730214849953.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODMwNTQ0MA==,size_16,color_FFFFFF,t_70#pic_center",alt:"a"}})]),t._v(" "),s("h3",{attrs:{id:"第二阶段-cancel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第二阶段-cancel"}},[t._v("#")]),t._v(" 第二阶段 Cancel")]),t._v(" "),s("p",[t._v("如果全局事务回滚，就把冻结的金额进行解冻，恢复到以前的状态，TC 会控制当前分支事务回滚，如果回滚失败，TC 会反复尝试，直到回滚完成为止。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/2020073021565349.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODMwNTQ0MA==,size_16,color_FFFFFF,t_70#pic_center",alt:"a"}})]),t._v(" "),s("h3",{attrs:{id:"多个事务并发的情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多个事务并发的情况"}},[t._v("#")]),t._v(" 多个事务并发的情况")]),t._v(" "),s("p",[t._v("多个TCC全局事务允许并发，它们执行扣减金额时，只需要冻结各自的金额即可：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200730220743117.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODMwNTQ0MA==,size_16,color_FFFFFF,t_70#pic_center",alt:"a"}})]),t._v(" "),s("h2",{attrs:{id:"seata-tcc事务模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#seata-tcc事务模式"}},[t._v("#")]),t._v(" Seata TCC事务模式")]),t._v(" "),s("p",[t._v("Seata 支持 TCC 事务模式，与 AT 模式相同的，也需要以下组件来支持全局事务的控制：")]),t._v(" "),s("ul",[s("li",[t._v("TC 事务协调器")]),t._v(" "),s("li",[t._v("TM 事务管理器")]),t._v(" "),s("li",[t._v("RM 资源管理器")])]),t._v(" "),s("p",[t._v("下一节，我们还是以订单业务为例，来演示 Seata 如何实现 TCC 事务。")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://gitee.com/benwang6/seata-samples",target:"_blank",rel:"noopener noreferrer"}},[t._v("项目源码："),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);