(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{1434:function(t,a,s){"use strict";s.r(a);var _=s(65),e=Object(_.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"seata分布式事务框架-at模式介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#seata分布式事务框架-at模式介绍"}},[t._v("#")]),t._v(" Seata分布式事务框架-AT模式介绍")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#业务场景"}},[t._v("业务场景")])])])]),s("p"),t._v(" "),s("h1",{attrs:{id:"seata介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#seata介绍"}},[t._v("#")]),t._v(" Seata介绍")]),t._v(" "),s("p",[t._v("Seata 是一款开源的分布式事务解决方案，致力于提供高性能和简单易用的分布式事务服务。Seata 将为用户提供了 AT、TCC、SAGA 和 XA 事务模式，为用户打造一站式的分布式解决方案。")]),t._v(" "),s("p",[t._v("2019 年 1 月，阿里巴巴中间件团队发起了开源项目 Fescar（Fast & EaSy Commit And Rollback），和社区一起共建开源分布式事务解决方案。Fescar 的愿景是让分布式事务的使用像本地事务的使用一样，简单和高效，并逐步解决开发者们遇到的分布式事务方面的所有难题。")]),t._v(" "),s("p",[t._v("Fescar 开源后，蚂蚁金服加入 Fescar 社区参与共建，并在 Fescar 0.4.0 版本中贡献了 TCC 模式。")]),t._v(" "),s("p",[t._v("为了打造更中立、更开放、生态更加丰富的分布式事务开源社区，经过社区核心成员的投票，大家决定对 Fescar 进行品牌升级，并更名为 Seata，意为：Simple Extensible Autonomous Transaction Architecture，是一套一站式分布式事务解决方案。")]),t._v(" "),s("p",[t._v("Seata 融合了阿里巴巴和蚂蚁金服在分布式事务技术上的积累，并沉淀了新零售、云计算和新金融等场景下丰富的实践经验，但要实现适用于所有的分布式事务场景的愿景，仍有很长的路要走。")]),t._v(" "),s("h1",{attrs:{id:"seata-at事务方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#seata-at事务方案"}},[t._v("#")]),t._v(" Seata AT事务方案")]),t._v(" "),s("p",[t._v("Seata 的 AT 模式（Automatic Transaction）是一种"),s("strong",[t._v("无侵入")]),t._v("的分布式事务解决方案。下面结合具体业务场景来分析其执行的原理。")]),t._v(" "),s("h3",{attrs:{id:"业务场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#业务场景"}},[t._v("#")]),t._v(" 业务场景")]),t._v(" "),s("p",[t._v("订单系统")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200725232213359.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODMwNTQ0MA==,size_16,color_FFFFFF,t_70#pic_center",alt:"业务"}})]),t._v(" "),s("p",[t._v("当用户下订单时，执行以下三步流程：")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("订单系统")]),t._v("保存订单")]),t._v(" "),s("li",[t._v("订单系统调用"),s("strong",[t._v("库存服务")]),t._v("，减少商品库存")]),t._v(" "),s("li",[t._v("订单系统调用"),s("strong",[t._v("账户服务")]),t._v("，扣减用户金额")])]),t._v(" "),s("p",[t._v("这三步要作为一个整体事务进行管理，要么整体成功，要么整体失败。")]),t._v(" "),s("h2",{attrs:{id:"seata-at基本原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#seata-at基本原理"}},[t._v("#")]),t._v(" Seata AT基本原理")]),t._v(" "),s("p",[t._v("Seata AT 事务分两个阶段来管理全局事务：\n"),s("strong",[t._v("第一阶段：")]),t._v(" 执行各分支事务\n"),s("strong",[t._v("第二阶段：")]),t._v(" 控制全局事务最终提交或回滚")]),t._v(" "),s("h3",{attrs:{id:"第一阶段-执行各分支事务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一阶段-执行各分支事务"}},[t._v("#")]),t._v(" 第一阶段：执行各分支事务")]),t._v(" "),s("p",[t._v("微服务系统中，各服务之间无法相互感知事务是否执行成功，这时就需要一个专门的服务，来协调各个服务的运行状态。这个服务称为 TC（Transaction Coordinator），事务协调器。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200725234150443.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODMwNTQ0MA==,size_16,color_FFFFFF,t_70#pic_center",alt:"tc"}})]),t._v(" "),s("p",[t._v("订单系统开始执行保存订单之前，首先启动 TM（Transaction Manager，事务管理器），由 TM 向 TC 申请开启一个全局事务：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200725234911823.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODMwNTQ0MA==,size_16,color_FFFFFF,t_70#pic_center",alt:"TM"}})]),t._v(" "),s("p",[t._v("这时TC会产生一个"),s("strong",[t._v("全局事务ID")]),t._v("，称为 "),s("strong",[t._v("XID")]),t._v("，并将 XID 传回 TM：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200726001410404.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODMwNTQ0MA==,size_16,color_FFFFFF,t_70#pic_center",alt:"xid"}})]),t._v(" "),s("p",[t._v("这样就开启了"),s("strong",[t._v("全局事务")]),t._v("！")]),t._v(" "),s("p",[t._v("全局事务开启后，开始执行创建订单的业务。首先执行保存订单，这时会先启动一个 RM（Resource Manager，资源管理器），并将 XID 传递给 RM。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200726001859187.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODMwNTQ0MA==,size_16,color_FFFFFF,t_70#pic_center",alt:"rm"}})]),t._v(" "),s("p",[t._v("RM 负责对分支事务（即微服务的本地事务）进行管理，并与 TC 通信，上报分支事务的执行状态、接收全局事务的提交或回滚指令。")]),t._v(" "),s("p",[t._v("RM 首先会使用 XID 向 TC 注册分支事务，将分支事务纳入对应的全局事务管辖。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200726002039831.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODMwNTQ0MA==,size_16,color_FFFFFF,t_70#pic_center",alt:"rm"}})]),t._v(" "),s("p",[t._v("现在可以执行保存订单的分支事务了。一旦分支事务执行成功，RM 会上报事务状态：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200726003557248.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODMwNTQ0MA==,size_16,color_FFFFFF,t_70#pic_center",alt:"tx"}})]),t._v(" "),s("p",[t._v("TC 收到后，会将该状态信息传递到 TM：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200726104528104.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODMwNTQ0MA==,size_16,color_FFFFFF,t_70",alt:"o"}})]),t._v(" "),s("p",[t._v("到此，保存订单过程结束。下面是调用库存服务，减少商品库存，与订单的执行过程相同。")]),t._v(" "),s("p",[t._v("首先调用库存服务，启动 RM，并传递 XID：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200726104702337.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODMwNTQ0MA==,size_16,color_FFFFFF,t_70#pic_center",alt:"s"}})]),t._v(" "),s("p",[t._v("库存服务的 RM 使用 XID 向 TC 进行注册，纳入全局事务管辖：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200726104836446.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODMwNTQ0MA==,size_16,color_FFFFFF,t_70#pic_center",alt:"s"}})]),t._v(" "),s("p",[t._v("执行本地事务成功后上报状态，TC会将状态发送给TM：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200726105128545.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODMwNTQ0MA==,size_16,color_FFFFFF,t_70#pic_center",alt:"s"}})]),t._v(" "),s("p",[t._v("相同的，完成账户分支事务：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200726105428261.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODMwNTQ0MA==,size_16,color_FFFFFF,t_70#pic_center",alt:"a"}})]),t._v(" "),s("h3",{attrs:{id:"第二阶段-控制全局事务最终提交"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第二阶段-控制全局事务最终提交"}},[t._v("#")]),t._v(" 第二阶段：控制全局事务最终提交")]),t._v(" "),s("p",[t._v("现在，TM（全局事务管理器）收集齐了全部分支事务的成功状态，它会进行决策，确定全局事务成功，向 TC 发送全局事务的提交请求：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200726110936560.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODMwNTQ0MA==,size_16,color_FFFFFF,t_70#pic_center",alt:"tm"}})]),t._v(" "),s("p",[t._v("然后，TC 会向所有 RM 发送提交操作指令，RM 会完成最终提交操作：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200726111513383.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODMwNTQ0MA==,size_16,color_FFFFFF,t_70#pic_center",alt:"tc"}})]),t._v(" "),s("p",[t._v("到此，全局事务全部提交完成！")]),t._v(" "),s("h3",{attrs:{id:"第二阶段-控制全局事务最终回滚"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第二阶段-控制全局事务最终回滚"}},[t._v("#")]),t._v(" 第二阶段：控制全局事务最终回滚")]),t._v(" "),s("p",[t._v("上面是全局事务执行成功的情况，下面再来看看事务执行失败的情况。")]),t._v(" "),s("p",[t._v("假设订单业务执行过程中，扣减账户金额这一步分支事务执行失败，那么失败状态对TC上报，然后再发送给TM：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200726113359673.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODMwNTQ0MA==,size_16,color_FFFFFF,t_70",alt:"a"}})]),t._v(" "),s("p",[t._v("TM 会进行决策，确定全局事务"),s("strong",[t._v("失败")]),t._v("，向 TC 发送全局事务的"),s("strong",[t._v("回滚")]),t._v("请求：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200726115232566.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODMwNTQ0MA==,size_16,color_FFFFFF,t_70#pic_center",alt:"tm"}})]),t._v(" "),s("p",[t._v("然后，TC 会向所有 RM 发送回滚操作指令，RM 会完成最终回滚操作：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200726120213144.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODMwNTQ0MA==,size_16,color_FFFFFF,t_70#pic_center",alt:"tc"}})]),t._v(" "),s("h2",{attrs:{id:"seata-at具体工作机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#seata-at具体工作机制"}},[t._v("#")]),t._v(" Seata AT具体工作机制")]),t._v(" "),s("p",[t._v("以上了解了 Seata AT 的基本原理、工作流程，那么 Seata 具体是如何实现全局事务的提交和回滚操作呢？下面来分析 Seata 的具体工作机制。")]),t._v(" "),s("h3",{attrs:{id:"第一阶段-执行分支事务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一阶段-执行分支事务"}},[t._v("#")]),t._v(" 第一阶段：执行分支事务")]),t._v(" "),s("p",[t._v("以全面订单业务中的库存服务为例，库存表中存在一条商品的库存信息：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200726160219330.png#pic_center",alt:"s"}})]),t._v(" "),s("p",[t._v("现在要执行业务操作减少库存，从50件减少到40件：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/2020072616034431.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODMwNTQ0MA==,size_16,color_FFFFFF,t_70#pic_center",alt:"s"}})]),t._v(" "),s("p",[t._v("执行修改库存业务操作前， 会先取出旧的库存信息：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200726160439346.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODMwNTQ0MA==,size_16,color_FFFFFF,t_70#pic_center",alt:"s"}})]),t._v(" "),s("p",[t._v("现在可以修改库存了：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200726160525175.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODMwNTQ0MA==,size_16,color_FFFFFF,t_70#pic_center",alt:"s"}})]),t._v(" "),s("p",[t._v("接着，取出更新后的新数据：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200726160608179.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODMwNTQ0MA==,size_16,color_FFFFFF,t_70#pic_center",alt:"s"}})]),t._v(" "),s("p",[t._v("接下来，会把旧数据和新数据合并起来，保存到一个事务回滚日志表：undo_log表：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200726160655484.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODMwNTQ0MA==,size_16,color_FFFFFF,t_70#pic_center",alt:"s"}})]),t._v(" "),s("p",[t._v("至此，第一阶段，分支事务完成，将状态上报给TC：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200726161105593.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODMwNTQ0MA==,size_16,color_FFFFFF,t_70#pic_center",alt:"a"}})]),t._v(" "),s("h3",{attrs:{id:"第二阶段-控制全局事务最终回滚-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第二阶段-控制全局事务最终回滚-2"}},[t._v("#")]),t._v(" 第二阶段：控制全局事务最终回滚")]),t._v(" "),s("p",[t._v("假如全局事务失败，那么第一阶段已提交的分支事务要执行回滚操作。")]),t._v(" "),s("p",[t._v("首先会收到来自 TC 的全局事务回滚指令：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200726161610408.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODMwNTQ0MA==,size_16,color_FFFFFF,t_70#pic_center",alt:"s"}})]),t._v(" "),s("p",[t._v("接下来，根据事务回滚日志（undo_log）表的记录，将商品恢复成旧的库存数据：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200726161735527.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODMwNTQ0MA==,size_16,color_FFFFFF,t_70#pic_center",alt:"s"}})]),t._v(" "),s("p",[t._v("然后删除事务日志，最终完成第二阶段回滚操作：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200726162101520.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODMwNTQ0MA==,size_16,color_FFFFFF,t_70#pic_center",alt:"s"}})]),t._v(" "),s("h3",{attrs:{id:"第二阶段-控制全局事务最终提交-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第二阶段-控制全局事务最终提交-2"}},[t._v("#")]),t._v(" 第二阶段：控制全局事务最终提交")]),t._v(" "),s("p",[t._v("上面是全局事务回滚操作。如果全局事务成功，要完成最终提交，AT模式最终提交操作非常简单，只需要删除日志数据即可。")]),t._v(" "),s("p",[t._v("首先接收到 TC 的全局事务提交指令：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200726162409754.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODMwNTQ0MA==,size_16,color_FFFFFF,t_70#pic_center",alt:"s"}})]),t._v(" "),s("p",[t._v("接着，直接删除事务日志，就完成了第二阶段提交操作：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200817175254193.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODMwNTQ0MA==,size_16,color_FFFFFF,t_70#pic_center",alt:"a"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);