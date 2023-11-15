(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{1449:function(t,a,_){"use strict";_.r(a);var s=_(65),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"计算机软件架构发展历史"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#计算机软件架构发展历史"}},[t._v("#")]),t._v(" 计算机软件架构发展历史")]),t._v(" "),_("p"),_("div",{staticClass:"table-of-contents"},[_("ul",[_("li",[_("a",{attrs:{href:"#软件架构初识"}},[t._v("软件架构初识")]),_("ul",[_("li",[_("a",{attrs:{href:"#概述"}},[t._v("概述")])]),_("li",[_("a",{attrs:{href:"#基本概念"}},[t._v("基本概念")])])])]),_("li",[_("a",{attrs:{href:"#软件架构演进过程"}},[t._v("软件架构演进过程")]),_("ul",[_("li",[_("a",{attrs:{href:"#单体架构初步设计"}},[t._v("单体架构初步设计")])]),_("li",[_("a",{attrs:{href:"#web服务与数据库分开"}},[t._v("Web服务与数据库分开")])]),_("li",[_("a",{attrs:{href:"#本地缓存和分布式缓存"}},[t._v("本地缓存和分布式缓存")])]),_("li",[_("a",{attrs:{href:"#反向代理与负载均衡设计"}},[t._v("反向代理与负载均衡设计")])]),_("li",[_("a",{attrs:{href:"#数据库读写分离设计"}},[t._v("数据库读写分离设计")])]),_("li",[_("a",{attrs:{href:"#数据库按业务进行分库"}},[t._v("数据库按业务进行分库")])]),_("li",[_("a",{attrs:{href:"#大表拆分为小表"}},[t._v("大表拆分为小表")])]),_("li",[_("a",{attrs:{href:"#lvs或f5让多个nginx负载均衡"}},[t._v("LVS或F5让多个Nginx负载均衡")])]),_("li",[_("a",{attrs:{href:"#dns轮询实现机房的负载均衡"}},[t._v("DNS轮询实现机房的负载均衡")])]),_("li",[_("a",{attrs:{href:"#大应用拆分成小应用"}},[t._v("大应用拆分成小应用")])]),_("li",[_("a",{attrs:{href:"#抽离微服务实现工程复用"}},[t._v("抽离微服务实现工程复用")])]),_("li",[_("a",{attrs:{href:"#容器化技术设计及应用"}},[t._v("容器化技术设计及应用")])]),_("li",[_("a",{attrs:{href:"#云平台服务部署"}},[t._v("云平台服务部署")])])])]),_("li",[_("a",{attrs:{href:"#总结-summary"}},[t._v("总结(Summary)")]),_("ul",[_("li",[_("a",{attrs:{href:"#重难点分析"}},[t._v("重难点分析")])]),_("li",[_("a",{attrs:{href:"#faq分析"}},[t._v("FAQ分析")])])])])])]),_("p"),t._v(" "),_("h2",{attrs:{id:"软件架构初识"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#软件架构初识"}},[t._v("#")]),t._v(" 软件架构初识")]),t._v(" "),_("h3",{attrs:{id:"概述"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),_("p",[t._v("为了更好理解互联网软件架构，我们现在介绍一下，一百万到千万级并发情况下服务端的架构的演进过程，同时列举出每个演进阶段会遇到的相关技术，让大家对架构的演进有一个整体的认知。")]),t._v(" "),_("h3",{attrs:{id:"基本概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),_("p",[t._v("在介绍架构之前，为了避免初学者对架构设计中的一些概念不了解，下面对几个最基础的概念进行介绍。")]),t._v(" "),_("blockquote",[_("p",[t._v("分布式")])]),t._v(" "),_("p",[t._v("系统中的多个模块在不同服务器上部署，即可称为分布式系统，如Tomcat和数据库分别部署在不同的服务器上，或两个相同功能的Tomcat分别部署在不同服务器上。")]),t._v(" "),_("blockquote",[_("p",[t._v("高可用")])]),t._v(" "),_("p",[t._v("系统中部分节点失效时，其他节点能够接替它继续提供服务，则可认为系统具有高可用性。保证系统的高可用性，可从如下几个9说起，如图所示：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/d6dc19831cd64aec868a826fcef86311.png",alt:"在这里插入图片描述"}})]),t._v(" "),_("p",[t._v("为了提高可用性，我们要么提高系统的无故障时间，要么减少系统的故障恢复时间，这就需要我们知道故障的原因。这个原因通常分为两大部分：")]),t._v(" "),_("ul",[_("li",[t._v("无计划的系统故障\n1)系统级故障：包括主机、操作系统、中间件、数据库、网络、电源以及外围设备。\n2)自然灾害、人为破坏，以及供电问题等。")]),t._v(" "),_("li",[t._v("有计划的日常任务：\n1)运维相关：数据库维护、应用维护、中间件维护、操作系统维护、网络维护。\n2)升级相关：数据库、应用、中间件、操作系统、网络，包括硬件升级。")])]),t._v(" "),_("blockquote",[_("p",[t._v("我们再对这些故障做个归类：")])]),t._v(" "),_("ol",[_("li",[t._v("网络问题：网络链接出现问题，网络带宽出现拥塞等")]),t._v(" "),_("li",[t._v("性能问题：慢 SQL、Java Full GC、硬盘 IO 过大、CPU 飙高、内存不足等")]),t._v(" "),_("li",[t._v("安全问题：被网络攻击，如 DDoS 等。")]),t._v(" "),_("li",[t._v("运维问题：系统总是在被更新和修改，架构也在不断地被调整，监控问题等")]),t._v(" "),_("li",[t._v("管理问题：没有梳理关键服务及服务的依赖关系，运行信息没有和控制系统同步等")]),t._v(" "),_("li",[t._v("硬件问题：硬盘损坏、网卡出问题、交换机出问题、机房掉电、挖掘机问题等")])]),t._v(" "),_("p",[t._v("总之，我们要正确认识故障，故障不可避免。尤其是在大型分布式系统中，出现故障是一种常态。有时出现故障根本就不知道出现在了什么地方。所以我们要对故障原因先有一个认识，与此同时我们要基于故障有应对的策略，也就是我们所说的“弹力设计”，就类似三国中的赵云猛将，在搏杀中能进能退。")]),t._v(" "),_("blockquote",[_("p",[t._v("集群")])]),t._v(" "),_("p",[t._v("一个特定领域的软件部署在多台服务器上并作为一个整体提供一类服务，这个整体称为集群。在常见的集群中，客户端往往能够连接任意一个节点获得服务，并且当集群中一个节点掉线时，其他节点往往能够自动的接替它继续提供服务，这时候说明集群具有高可用性。")]),t._v(" "),_("ul",[_("li",[t._v("负载均衡\n请求发送到系统时，通过某些方式把请求均匀分发到多个节点上，使系统中每个节点能够均匀的处理请求负载，则可认为系统是负载均衡的。")]),t._v(" "),_("li",[t._v("正向代理和反向代理\n系统内部要访问外部网络时，统一通过一个代理服务器把请求转发出去，在外部网络看来就是代理服务器发起的访问，此时代理服务器实现的是正向代理；当外部请求进入系统时，代理服务器把该请求转发到系统中的某台服务器上，对外部请求来说，与之交互的只有代理服务器，此时代理服务器实现的是反向代理。简单来说，正向代理是代理服务器代替系统内部来访问外部网络的过程，反向代理是外部请求访问系统时通过代理服务器转发到内部服务器的过程。如图所示：")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/3cde6fbb47ec4748912c9cabc06715a8.png",alt:"在这里插入图片描述"}})]),t._v(" "),_("h2",{attrs:{id:"软件架构演进过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#软件架构演进过程"}},[t._v("#")]),t._v(" 软件架构演进过程")]),t._v(" "),_("h3",{attrs:{id:"单体架构初步设计"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#单体架构初步设计"}},[t._v("#")]),t._v(" 单体架构初步设计")]),t._v(" "),_("p",[t._v("在互联网应用初期，互联网用户数相对都较少，可以把web服务器(例如Tomcat)和数据库部署在同一台服务器上。浏览器往www.taobao.com发起请求时，首先经过DNS服务器（域名系统）把域名转换为实际IP地址10.102.4.1，浏览器转而访问该IP对应的Tomcat。如图所示：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210708132559108.png",alt:"在这里插入图片描述"}})]),t._v(" "),_("p",[t._v("在单体架构下，所有功能模块（例如用户，商品，社区等）都会部署到一个web服务器(例如tomcat)中，所有用户都对同一个web服务进行访问，随着用户数的增长，这个web服务器的并发压力就会越来越大，Tomcat和数据库之间还要竞争计算机资源，单机性能就会越来越差，不足以支撑更加庞大业务。")]),t._v(" "),_("h3",{attrs:{id:"web服务与数据库分开"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#web服务与数据库分开"}},[t._v("#")]),t._v(" Web服务与数据库分开")]),t._v(" "),_("p",[t._v("Web服务器(Tomcat)和数据库器放在同一个计算机上时，tomcat和数据库会竞争CPU，内存等资源，web服务的性能就会相对较差。此时可以将tomcat和数据库进行独立部署，独占服务器资源，显著提高两者各自性能。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/2021070813263459.png",alt:"在这里插入图片描述"}})]),t._v(" "),_("p",[t._v("在这种架构下，随着用户数的增长，并发读写数据库的操作也会越来越多，此时数据库的读写方面就产生性能瓶颈问题（数据库支持的连接数是有限的，连接用尽时，其它用户就会阻塞，同时频繁磁盘读写也会使系统性越来越差）,并发读写数据库成为瓶颈。")]),t._v(" "),_("h3",{attrs:{id:"本地缓存和分布式缓存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#本地缓存和分布式缓存"}},[t._v("#")]),t._v(" 本地缓存和分布式缓存")]),t._v(" "),_("p",[t._v("如何降低数据库的访问压力呢，无非就是减少对数据库的访问。此时，我们可以考虑应用缓存（cache）。例如，在Tomcat同服务器上增加本地缓存，并在外部增加分布式缓存，缓存一些相对热门的数据（热门商品信息或热门商品的html页面等）。通过缓存把绝大多数请求在读写数据库前拦截掉，这样降低数据库的访问频次，读写压力。提高请求响应速度。如图所示：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210708132654435.png",alt:"在这里插入图片描述"}})]),t._v(" "),_("p",[t._v("其中Cache这块，涉及的技术包括：基于JVM等技术的为本地缓存，使用Redis作为分布式缓存等。当然，引入缓存以后，性能方面可以得到一定程度的改善，但也会带来一些问题，例如缓存一致性、缓存穿透/击穿、缓存雪崩等问题。\n缓存虽然抗住了大部分的访问请求，但随着用户数的增长，并发压力主要落在单机的Tomcat上。还有， 一个Tomcat的并发处理能力是有限的，请求越来越多时，部分请求的响应就会越来越慢，还有就是可靠性比较差，一旦这个tomcat服务宕机了，所有资源就不能访问了。")]),t._v(" "),_("h3",{attrs:{id:"反向代理与负载均衡设计"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#反向代理与负载均衡设计"}},[t._v("#")]),t._v(" 反向代理与负载均衡设计")]),t._v(" "),_("p",[t._v("在多台服务器上分别部署Tomcat，使用反向代理软件（Nginx）把请求均匀分发到每个Tomcat中。此处假设Tomcat最多支持100个并发，Nginx最多支持50000个并发，那么理论上Nginx把请求分发到500个Tomcat上，就能抗住50000个并发。其中涉及的技术包括：Nginx、HAProxy，如图所示：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/202107081327194.png",alt:"在这里插入图片描述"}})]),t._v(" "),_("p",[t._v("反向代理使应用服务器可支持的并发量大大增加，但并发量的增长也意味着更多请求穿透到数据库，单机的数据库最终成为瓶颈。")]),t._v(" "),_("h3",{attrs:{id:"数据库读写分离设计"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据库读写分离设计"}},[t._v("#")]),t._v(" 数据库读写分离设计")]),t._v(" "),_("p",[t._v("当一个tomcat服务无法处理更多并发时，我们就使用多个tomcat，分别部署在多台服务器上。然后，使用反向代理软件（Nginx）把请求均匀分发到每个Tomcat中。此处假设Tomcat最多支持100个并发，Nginx最多支持50000个并发，那么理论上Nginx把请求分发到500个Tomcat上，就能抗住50000个并发。如图所示：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/2021070813273320.png",alt:"在这里插入图片描述"}})]),t._v(" "),_("p",[t._v("其中涉及的技术包括：Mycat，它是数据库中间件，可通过它来组织数据库的分离读写和分库分表，客户端通过它来访问下层数据库，还会涉及数据同步，数据一致性的问题。业务逐渐变多，不同业务之间的访问量差距较大，不同业务直接竞争数据库，相互影响性能。")]),t._v(" "),_("h3",{attrs:{id:"数据库按业务进行分库"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据库按业务进行分库"}},[t._v("#")]),t._v(" 数据库按业务进行分库")]),t._v(" "),_("p",[t._v("把不同业务的数据保存到不同的数据库中，使业务之间的资源竞争降低，对于访问量大的业务，可以部署更多的服务器来支撑。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210708132749353.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21haXRpYW5fMjAwOA==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),_("p",[t._v("这样同时导致跨业务的表无法直接做关联分析，需要通过其他途径来解决，但这不是本文讨论的重点，有兴趣的可以自行搜索解决方案。对于这种方案，随着用户数的增长，单机的写库会逐渐会达到性能瓶颈。")]),t._v(" "),_("h3",{attrs:{id:"大表拆分为小表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#大表拆分为小表"}},[t._v("#")]),t._v(" 大表拆分为小表")]),t._v(" "),_("p",[t._v("比如针对评论数据，可按照商品ID进行hash，路由到对应的表中存储；针对支付记录，可按照小时创建表，每个小时表继续拆分为小表，使用用户ID或记录编号来路由数据。只要实时操作的表数据量足够小，请求能够足够均匀的分发到多台服务器上的小表，那数据库就能通过水平扩展的方式来提高性能。其中前面提到的Mycat也支持在大表拆分为小表情况下的访问控制。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210708132815531.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21haXRpYW5fMjAwOA==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),_("p",[t._v("这种做法显著的增加了数据库运维的难度，对DBA的要求较高。数据库设计到这种结构时，已经可以称为分布式数据库，但是这只是一个逻辑的数据库整体，数据库里不同的组成部分是由不同的组件单独来实现的，如分库分表的管理和请求分发，由Mycat实现，SQL的解析由单机的数据库实现，读写分离可能由网关和消息队列来实现，查询结果的汇总可能由数据库接口层来实现等等，这种架构其实是MPP（大规模并行处理）架构的一类实现。")]),t._v(" "),_("p",[t._v("数据库和Tomcat都能够水平扩展，可支撑的并发大幅提高，随着用户数的增长，最终单机的Nginx会成为瓶颈。")]),t._v(" "),_("h3",{attrs:{id:"lvs或f5让多个nginx负载均衡"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#lvs或f5让多个nginx负载均衡"}},[t._v("#")]),t._v(" LVS或F5让多个Nginx负载均衡")]),t._v(" "),_("p",[t._v("由于瓶颈在Nginx，因此无法通过两层的Nginx来实现多个Nginx的负载均衡。此时采用LVS和F5作为网络负载均衡解决方案，如图所示：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210708132849957.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21haXRpYW5fMjAwOA==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),_("p",[t._v("其中LVS是软件，运行在操作系统内核态，可对TCP请求或更高层级的网络协议进行转发，因此支持的协议更丰富，并且性能也远高于Nginx，可假设单机的LVS可支持几十万个并发的请求转发；F5是一种负载均衡硬件，与LVS提供的能力类似，性能比LVS更高，但价格昂贵。由于LVS是单机版的软件，若LVS所在服务器宕机则会导致整个后端系统都无法访问，因此需要有备用节点。可使用keepalived软件模拟出虚拟IP，然后把虚拟IP绑定到多台LVS服务器上，浏览器访问虚拟IP时，会被路由器重定向到真实的LVS服务器，当主LVS服务器宕机时，keepalived软件会自动更新路由器中的路由表，把虚拟IP重定向到另外一台正常的LVS服务器，从而达到LVS服务器高可用的效果。\n此种方案中，由于LVS也是单机的，随着并发数增长到几十万时，LVS服务器最终会达到瓶颈，此时用户数达到千万甚至上亿级别，用户分布在不同的地区，与服务器机房距离不同，导致了访问的延迟会明显不同。")]),t._v(" "),_("h3",{attrs:{id:"dns轮询实现机房的负载均衡"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#dns轮询实现机房的负载均衡"}},[t._v("#")]),t._v(" DNS轮询实现机房的负载均衡")]),t._v(" "),_("p",[t._v("在DNS服务器中可配置一个域名对应多个IP地址，每个IP地址对应到不同的机房里的虚拟IP。当用户访问www.taobao.com时，DNS服务器会使用轮询策略或其他策略，来选择某个IP供用户访问。此方式能实现机房间的负载均衡，至此，系统可做到机房级别的水平扩展，千万级到亿级的并发量都可通过增加机房来解决，系统入口处的请求并发量不再是问题。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210708132904228.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21haXRpYW5fMjAwOA==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),_("p",[t._v("随着数据的丰富程度和业务的发展，检索、分析等需求越来越丰富，单单依靠数据库无法解决如此丰富的需求")]),t._v(" "),_("h3",{attrs:{id:"大应用拆分成小应用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#大应用拆分成小应用"}},[t._v("#")]),t._v(" 大应用拆分成小应用")]),t._v(" "),_("p",[t._v("按照业务板块来划分应用代码，使单个应用的职责更清晰，相互之间可以做到独立升级迭代。这时候应用之间可能会涉及到一些公共配置，可以通过分布式配置中心Zookeeper来解决。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210708132917541.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21haXRpYW5fMjAwOA==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),_("p",[t._v("不同应用之间存在共用的模块，由应用单独管理会导致相同代码存在多份，导致公共功能升级时全部应用代码都要跟着升级。")]),t._v(" "),_("h3",{attrs:{id:"抽离微服务实现工程复用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#抽离微服务实现工程复用"}},[t._v("#")]),t._v(" 抽离微服务实现工程复用")]),t._v(" "),_("p",[t._v("如用户管理、订单、支付、鉴权等功能在多个应用中都存在，那么可以把这些功能的代码单独抽取出来形成一个单独的服务来管理，这样的服务就是所谓的微服务，应用和服务之间通过HTTP、TCP或RPC请求等多种方式来访问公共服务，每个单独的服务都可以由单独的团队来管理。此外，可以通过Dubbo、SpringCloud等框架实现服务治理、限流、熔断、降级等功能，提高服务的稳定性和可用性。如图所示：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210708132933570.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21haXRpYW5fMjAwOA==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),_("p",[t._v("个人理解，微服务架构更多是指把系统里的公共服务抽取出来单独运维管理的思想")]),t._v(" "),_("h3",{attrs:{id:"容器化技术设计及应用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#容器化技术设计及应用"}},[t._v("#")]),t._v(" 容器化技术设计及应用")]),t._v(" "),_("p",[t._v("目前最流行的容器化技术是Docker，最流行的容器管理服务是Kubernetes(K8S)，应用/服务可以打包为Docker镜像，通过K8S来动态分发和部署镜像。Docker镜像可理解为一个能运行你的应用/服务的最小的操作系统，里面放着应用/服务的运行代码，运行环境根据实际的需要设置好。把整个“操作系统”打包为一个镜像后，就可以分发到需要部署相关服务的机器上，直接启动Docker镜像就可以把服务起起来，使服务的部署和运维变得简单。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210708132943656.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21haXRpYW5fMjAwOA==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),_("p",[t._v("在大促的之前，可以在现有的机器集群上划分出服务器来启动Docker镜像，增强服务的性能，大促过后就可以关闭镜像，对机器上的其他服务不造成影响（在3.14节之前，服务运行在新增机器上需要修改系统配置来适配服务，这会导致机器上其他服务需要的运行环境被破坏）。")]),t._v(" "),_("h3",{attrs:{id:"云平台服务部署"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#云平台服务部署"}},[t._v("#")]),t._v(" 云平台服务部署")]),t._v(" "),_("p",[t._v("系统可部署到公有云上，利用公有云的海量机器资源，解决动态硬件资源的问题，在大促的时间段里，在云平台中临时申请更多的资源，结合Docker和K8S来快速部署服务，在大促结束后释放资源，真正做到按需付费，资源利用率大大提高，同时大大降低了运维成本。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210708132956198.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21haXRpYW5fMjAwOA==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),_("p",[t._v("所谓的云平台，就是把海量机器资源，通过统一的资源管理，抽象为一个资源整体，在之上可按需动态申请硬件资源（如CPU、内存、网络等），并且之上提供通用的操作系统，提供常用的技术组件（如Hadoop技术栈，MPP数据库等）供用户使用，甚至提供开发好的应用，用户不需要关系应用内部使用了什么技术，就能够解决需求（如音视频转码服务、邮件服务、个人博客等）。")]),t._v(" "),_("h2",{attrs:{id:"总结-summary"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总结-summary"}},[t._v("#")]),t._v(" 总结(Summary)")]),t._v(" "),_("h3",{attrs:{id:"重难点分析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#重难点分析"}},[t._v("#")]),t._v(" 重难点分析")]),t._v(" "),_("ul",[_("li",[t._v("发展历程中的关键设计及技能点。")]),t._v(" "),_("li",[t._v("架构发展过程中暴露出的问题以及解决方案。")])]),t._v(" "),_("h3",{attrs:{id:"faq分析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#faq分析"}},[t._v("#")]),t._v(" FAQ分析")]),t._v(" "),_("ul",[_("li",[t._v("单体架构你觉得存在什么缺陷？（容量、计算、故障）")]),t._v(" "),_("li",[t._v("为什么要使用分布式架构？(增加容量、高并发、高性能、高可用)")]),t._v(" "),_("li",[t._v("分布式架构有什么劣势？(设计的难度、维护成本)")]),t._v(" "),_("li",[t._v("为什么要使用缓存？(减少数据库访问压力、提高性能)")]),t._v(" "),_("li",[t._v("使用缓存时要注意什么问题？(一致性、淘汰算法、击穿、雪崩)")]),t._v(" "),_("li",[t._v("如何理解反向代理？(服务端代理，是服务端服务器的一种代理机制，请求转发)")]),t._v(" "),_("li",[t._v("反向代理如何实现负载均衡？(轮询，轮询+权重，哈希IP)")]),t._v(" "),_("li",[t._v("什么是读写分离、读写分离的目的是什么？(单机数据库有瓶颈、读写频次，并发能力)")]),t._v(" "),_("li",[t._v("读写分离后可能会带来什么问题？（数据同步）")]),t._v(" "),_("li",[t._v("当我们向写库写数据时还要做什么？(写缓存、数据同步到读库)")]),t._v(" "),_("li",[t._v("为什么要进行分库、分表，有哪些分表策略？(业务数据可靠性、查询性能)")]),t._v(" "),_("li",[t._v("何为服务，有什么是微服务？(服务-软件要解决的问题，可以提供的功能。微服务-服务中的共性再抽象，以实现更好的重用)")]),t._v(" "),_("li",[t._v("哪种互联网架构设计最好？(没有最好，只有更好，脱离业务谈就够就是耍流氓)")])])])}),[],!1,null,null,null);a.default=r.exports}}]);