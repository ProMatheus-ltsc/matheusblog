(window.webpackJsonp=window.webpackJsonp||[]).push([[291],{1655:function(l,v,a){"use strict";a.r(v);var _=a(65),e=Object(_.a)({},(function(){var l=this,v=l.$createElement,a=l._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[a("h1",{attrs:{id:"jvm中常用垃圾回收器分析与实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jvm中常用垃圾回收器分析与实践"}},[l._v("#")]),l._v(" JVM中常用垃圾回收器分析与实践")]),l._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#serial收集器"}},[l._v("Serial收集器")])]),a("li",[a("a",{attrs:{href:"#parallel收集器"}},[l._v("Parallel收集器")])]),a("li",[a("a",{attrs:{href:"#cms-收集器"}},[l._v("CMS 收集器")])]),a("li",[a("a",{attrs:{href:"#g1收集器"}},[l._v("G1收集器")])])])]),a("p"),l._v(" "),a("p",[l._v("JVM系统为了对内存中的垃圾进行回收，基于GC算法，开发了一些垃圾回收器，例如：")]),l._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/dd52da6e7daf40a8a8ffa88be90352c7.png",alt:"在这里插入图片描述"}})]),l._v(" "),a("p",[l._v("其中：")]),l._v(" "),a("ol",[a("li",[l._v("年轻代和老年代的串行收集器： Serial GC)")]),l._v(" "),a("li",[l._v("年轻代和老年代的并行收集器：(Parallel GC)")]),l._v(" "),a("li",[l._v("年轻代的并行收集器 (Parallel New) + 老年代的并发收集器（CMS-Concurrent Mark and Sweep）。")]),l._v(" "),a("li",[l._v("年轻代和老年代的G1收集器, 负责回收年轻代和老年代。\n说明：除了以上几种组合方式外，其它的组合方式要么现在已经不支持，要么不推荐。如何对这些组合进行选择，要结合系统的特点。例如系统是追求高吞吐量还是响应时间，还是两者都要兼顾。总之，对于GC组合的选择没有最好，只有更好。知己知彼，才能百战不殆。结合当前系统的环境配置，性能指标以及GC器特点，不断进行GC日志分析，定位系统问题，才是一般是选择哪种GC的关键。")])]),l._v(" "),a("h1",{attrs:{id:"常用垃圾回收器分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用垃圾回收器分析"}},[l._v("#")]),l._v(" 常用垃圾回收器分析")]),l._v(" "),a("h2",{attrs:{id:"serial收集器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serial收集器"}},[l._v("#")]),l._v(" Serial收集器")]),l._v(" "),a("p",[l._v("Serial GC是最古老也是最基本的收集器，但是现在依然广泛使用，JAVA SE5和JAVA SE6中客户端虚拟机采用的默认配置。\n"),a("strong",[l._v("1. Serial GC（串行收集器）应用特点：")])]),l._v(" "),a("ol",[a("li",[l._v("内部只使用一个线程执行垃圾回收(不能充分利用CPU的多核特性),无法并行化。")]),l._v(" "),a("li",[l._v("GC时所有正在执行的用户线程暂停并且可能会产生较长时间的停顿(Stop the world)。")])]),l._v(" "),a("p",[a("strong",[l._v("2. Serial GC（串行收集器）场景应用：")])]),l._v(" "),a("ol",[a("li",[l._v("一般可工作在JVM的客户端模式。")]),l._v(" "),a("li",[l._v("适用于CPU个数或核数较少且内存空间较小（越大可能停顿时间越长）的场景。")])]),l._v(" "),a("p",[a("strong",[l._v("3. Serial GC（串行收集器）算法应用")])]),l._v(" "),a("ol",[a("li",[a("p",[l._v("新生代使用 mark-copy(标记-复制) 算法(新生代存活对象较少)。")])]),l._v(" "),a("li",[a("p",[l._v("老年代使用 mark-sweep-compact(标记-清除-整理)算法(老年代对象回收较少，容易产生碎片)。")]),l._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/be7bb53e849e4e9eade3bc83ee361ab0.png",alt:"在这里插入图片描述"}})]),l._v(" "),a("p",[l._v("其应用参数配置：-XX:+UseSerialGC\n总之，Serial GC一个单线程的收集器，在进行垃圾收集时，必须暂停其他所有的工作线程。适合单CPU小应用，实时性要求不是那么高场景。一般在JVM的客户端模式下应用比较好。")])])]),l._v(" "),a("h2",{attrs:{id:"parallel收集器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parallel收集器"}},[l._v("#")]),l._v(" Parallel收集器")]),l._v(" "),a("p",[l._v("Parallel 收集器为并行收集器，它可利用多个或多核CPU优势实现多线程并行GC操作，其目标是减少停顿时间，实现更高的吞吐量（Throughput）。")]),l._v(" "),a("p",[a("strong",[l._v("1. Parallel GC（并行收集器）应用特点：")])]),l._v(" "),a("ol",[a("li",[l._v("可利用CPU的多核特性执行多线程下的并行化GC操作。")]),l._v(" "),a("li",[l._v("GC期间, 所有 CPU 内核都在并行清理垃圾, 所以暂停时间较短。")]),l._v(" "),a("li",[l._v("最大优势是可实现可控的吞吐量与停顿时间。")])]),l._v(" "),a("p",[a("strong",[l._v("2. Parallel GC（并行收集器）场景应用：")])]),l._v(" "),a("ol",[a("li",[l._v("GC操作仍需暂停应用程序（也有可能暂停时间比较长，因为GC阶段不能被打断），所以不适合要求低延迟的场景。")]),l._v(" "),a("li",[l._v("因其高吞吐GC(throughput GC)量的特性，适用于后台计算、后台处理的弱交互场景而不是web交互场景。")])]),l._v(" "),a("p",[a("strong",[l._v("3. Parallel GC（并行收集器）算法应用：")])]),l._v(" "),a("ol",[a("li",[a("p",[l._v("在年轻代使用标记-复制(mark-copy)算法，对应的是Parallel Scavenge收集器。")])]),l._v(" "),a("li",[a("p",[l._v("在老年代使用标记-清除-整理(mark-sweep-compact)算法，对应的是Parallel Old收集器。")]),l._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/7287f68e89e94681886ad23e5ba09edf.png",alt:"在这里插入图片描述"}})]),l._v(" "),a("p",[l._v("使用Parallel GC的参数配置：-XX:+UseParallelGC ，默认开启-XX:+UseParallelOldGC")])])]),l._v(" "),a("p",[l._v("其它参数配置：")]),l._v(" "),a("ol",[a("li",[l._v("-XX:ParallelGCThreads=20：设置并行收集器的线程数，即：同时多少个线程一起进行垃圾回收。此值最好配置与处理器数目相等。")]),l._v(" "),a("li",[l._v("-XX:MaxGCPauseMillis=100:设置每次年轻代垃圾回收的最长时间，如果无法满足此时间，JVM会自动调整年轻代大小，以满足此值。")]),l._v(" "),a("li",[l._v("-XX:+UseAdaptiveSizePolicy 设置并行收集器自动选择年轻代区大小和相应的Survivor区比例，以达到目标系统规定的最低响应时间或者收集频率等，此值建议使用并行收集器时，一直打开。")]),l._v(" "),a("li",[l._v("-XX:GCTimeRatio=99，设置吞吐量大小，默认值就是99，也就是将垃圾回收的时间设置成了总时间的1%。它的值是一个 0-100 之间的整数。假设 GCTimeRatio 的值为 n，那么系统将花费不超过 1/(1+n) 的时间用于垃圾收集。")])]),l._v(" "),a("p",[l._v("总之，Parallel GC是一种并行收集器，可利用多CPU优势，执行并行GC操作，吞吐量较高，并可有效降低工作线程暂停时长。但是因为垃圾收集的所有阶段都不能被打断，所以Parallel GC还是有可能导致长时间的应用暂停。所以Parallel GC适合于需要高吞吐量而对暂停时间不敏感的场合，比如批处理任务。\n说明：所谓吞吐量就是CPU用于运行用户代码的时间与CPU总消耗时间的比值，即吞吐量＝运行用户代码时间／（运行用户代码时间＋垃圾收集时间）")]),l._v(" "),a("h2",{attrs:{id:"cms-收集器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cms-收集器"}},[l._v("#")]),l._v(" CMS 收集器")]),l._v(" "),a("p",[l._v("CMS的官方名称为 “Mostly Concurrent Mark and Sweep Garbage Collector”，其设计目标是追求更快的响应时间。\n"),a("strong",[l._v("1. CMS (并发收集器)应用特点：")])]),l._v(" "),a("ol",[a("li",[l._v("使用空闲列表(free-lists)管理内存空间的回收，不对老年代进行碎片整理，减少用户线程暂停时间。")]),l._v(" "),a("li",[l._v("在标记-清除阶段的大部分工作和用户线程一起并发执行。")]),l._v(" "),a("li",[l._v("最大优点是可减少停顿时间（可提高服务的响应速度）,最大缺陷是老年代的内存碎片。")])]),l._v(" "),a("p",[a("strong",[l._v("2. CMS (并发收集器)场景应用：")])]),l._v(" "),a("ol",[a("li",[l._v("应用于多个或多核处理器，目标降低延迟，缩短停顿时间,响应时间优先。")]),l._v(" "),a("li",[l._v("CPU受限场景下，因与用户线程竞争CPU，吞吐量会减少。")])]),l._v(" "),a("p",[a("strong",[l._v("3. CMS (并发收集器)算法应用：")])]),l._v(" "),a("ol",[a("li",[l._v("年轻代采用并行方式的 mark-copy (标记-复制)算法。")]),l._v(" "),a("li",[l._v("老年代主要使用并发 mark-sweep (标记-清除)算法。")])]),l._v(" "),a("p",[a("strong",[l._v("4. CMS (并发收集器)关键步骤分析：")])]),l._v(" "),a("ol",[a("li",[a("p",[l._v("初始标记(initial mark)阶段标记一下GC Roots能直接关联到的对象，速度很快。")])]),l._v(" "),a("li",[a("p",[l._v("并发标记(concurrent mark)阶段就是进行GC Roots Tracing的过程，从直接关联对象遍历所有可达对象，然后进行标记。")])]),l._v(" "),a("li",[a("p",[l._v("重新标记(final remark)阶段要修正并发标记期间，因用户程序继续运作而导致标记产生变动的那一部分对象的标记记录。")])]),l._v(" "),a("li",[a("p",[l._v("并发清除(concurrent sweep)阶段与应用程序并发执行,不需要STW停顿。目的是删除未使用的对象,并收回他们占用的空间。")])]),l._v(" "),a("li",[a("p",[l._v("并发重置 (concurrent Reset) 阶段与应用程序并发执行,重置CMS算法相关的内部数据，同时GC线程切换到用户线程。")]),l._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/cc1528fa6a9b4f05bcd5c61ad77ae4df.png",alt:"在这里插入图片描述"}})]),l._v(" "),a("p",[l._v("使用CMS的参数配置：-XX:+UseConcMarkSweepGC，默认开启-XX:+UseParNewGC\n其它参数配置：")])]),l._v(" "),a("li",[a("p",[l._v("-XX:+ UseCMSCompactAtFullCollection 执行Full GC后，进行一次碎片整理；整理过程是独占的，会引起停顿时间变长。")])]),l._v(" "),a("li",[a("p",[l._v("-XX:+CMSFullGCsBeforeCompaction 设置进行几次Full GC后，进行一次碎片整理。")])]),l._v(" "),a("li",[a("p",[l._v("-XX:ParallelCMSThreads 设定CMS的线程数量（一般情况约等于可用CPU数量）。")])])]),l._v(" "),a("p",[l._v("总之, CMS垃圾收集器在减少停顿时间上做了很多给力的工作, 大量并发执行的工作并不需要暂停应用线程。如果服务器是多核CPU，并且主要调优目标是降低延迟, 那么使用CMS是个很明智的选择。 CMS垃圾收集可减少每一次GC停顿的时间,这样会直接影响到终端用户对系统的体验, 用户会认为系统非常灵敏。 但是因为多数时候都有部分CPU资源被GC消耗, 所以在CPU资源受限的情况下,CMS会比并行GC的吞吐量差一些。还有就是老年代内存碎片问题, 在某些情况下GC会造成不可预测的暂停时间, 特别是堆内存较大的情况下。")]),l._v(" "),a("h2",{attrs:{id:"g1收集器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#g1收集器"}},[l._v("#")]),l._v(" G1收集器")]),l._v(" "),a("p",[l._v("G1(Garbage-First )收集器是一种工作于服务端模式的垃圾回收器，主要面向多核，大内存的服务器。G1 在实现高吞吐的同时，也最大限度满足了GC 停顿时间可控的目标。在Oracle JDK7 update 4 后续的版本中已全面支持G1 回收器功能。G1收集器主要为有如下需求的程序设计：")]),l._v(" "),a("ol",[a("li",[l._v("可以像CMS 收集器一样能同时和应用线程一起并发的执行。")]),l._v(" "),a("li",[l._v("减少整理内存空间时的停顿时间。")]),l._v(" "),a("li",[l._v("要满足可预测的GC停顿时间需求。")]),l._v(" "),a("li",[l._v("不能牺牲太多的吞吐性能。")])]),l._v(" "),a("p",[l._v("未来 G1 计划要全面取代CMS。G1相比CMS有更多的优势，G1是压缩型收集器，可以实现更有效的空间压缩，消除大部分潜在的内存碎片问题。G1提供了更精准的可预测的垃圾停顿时间设置，可满足用户在指定垃圾回收时间上的需求。\n在G1中，堆不再分成连续的年轻代和老年代空间，而是划分为多个(通常是2048个)可以存放对象的小堆区(smaller heap regions)。每个小堆区都可能是Eden区, Survivor区或者Old区. 在逻辑上, 所有的Eden区和Survivor区合起来就是年轻代, 所有的Old区拼在一起那就是老年代，如图所示：")]),l._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/fd2b3d18c5c54a148ee5f4a35b894a57.png",alt:"在这里插入图片描述"}})]),l._v(" "),a("p",[l._v("这样的划分使得GC不必每次都去收集整个堆空间, 而是以增量的方式来处理。GC时每次只处理一部分小堆区,称为此次的回收集(collection set). GC事件的每次暂停都会收集所有年轻代的小堆区, 同时也可能包含一部分老年代小堆区，如图所示：")]),l._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/532436cff6d84640956cb025d45c8a65.png",alt:"在这里插入图片描述"}})]),l._v(" "),a("p",[l._v("G1在并发阶段估算每个小堆区存活对象的总数，垃圾最多的小堆区会被优先收集，这也是G1名称的由来。")]),l._v(" "),a("p",[l._v("G1以一种和CMS 相似的方式执行垃圾回收。G1在并发标记阶段估算每个小堆区存活对象的总数，垃圾最多的小堆区会被优先收集，这也是G1名称的由来。顾名思义，G1将其收集和压缩活动集中在堆中可能充满可回收对象（即垃圾）的区域上。G1通过用停顿预测模型来满足用户自定义的停顿时间目标，它基于设定的停顿时间来选择要回收的regions数量。")]),l._v(" "),a("p",[l._v("G1基于标记，清理对应的regions时,会将对象从一个或多个region里复制到另一个region里，在这个过程中会伴随着压缩和释放内存。清理过程在多核机器上都采用并行执行，来降低停顿时间，增加吞吐量。因此 G1在持续的运行中能减少碎片，满足用户自定义停顿时间需求。这种能力是以往的回收器所不具备的（例如 CMS回收器不能进行碎片压缩，ParallelOld 只能进行整堆的压缩，会导致较长的停顿时间）。")]),l._v(" "),a("p",[l._v("再次强调：G1不是一个实时的收集器，它只是最大可能的来满足设定的停顿时间。G1会基于以往的收集数据，来评估用户指定的停顿时间可以回收多少regions，需要花费的时间，然后确定停顿时间内可以回收多少个regions。")]),l._v(" "),a("p",[a("strong",[l._v("1. G1收集器特点：")])]),l._v(" "),a("ol",[a("li",[l._v("将java堆均分成大小相同的多个区域（region，1M-32M，最多2000个，最大支持堆内存64G）。")]),l._v(" "),a("li",[l._v("内存应用具备极大地弹性(一个或多个不连续的区域共同组成eden、survivor或old区，但大小不再固定。)")]),l._v(" "),a("li",[l._v("相对CMS有着更加可控的暂停时间(pause time) 和 更大的吞吐量(throughput)以及更少的碎片（标记整理）。")]),l._v(" "),a("li",[l._v("支持并行与并发，可充分利用多CPU，多核优势，降低延迟，提高响应速度。")])]),l._v(" "),a("p",[a("strong",[l._v("2. G1场景应用分析:")])]),l._v(" "),a("ol",[a("li",[l._v("FullGC发生相对比较频繁或消耗的总时长过长。")]),l._v(" "),a("li",[l._v("对象分配率或对象升级至老年代的比例波动较大。")]),l._v(" "),a("li",[l._v("较长时间的内存整理停顿。\n说明：如果你现在用CMS 或者 ParallelOldGC ，并且你的程序运行很好，没有经历长时间垃圾回收停顿，建议就不用迁移。")])]),l._v(" "),a("p",[a("strong",[l._v("3. G1算法应用分析：")])]),l._v(" "),a("ol",[a("li",[l._v("年轻代标记复制算法。")]),l._v(" "),a("li",[l._v("老年代标记清除整理算法。")])]),l._v(" "),a("p",[a("strong",[l._v("4. G1 关键步骤应用分析： （Old Generation）")])]),l._v(" "),a("ol",[a("li",[a("p",[l._v("初始标记(Initial Mark): 属于Young GC范畴，是stop-the-world活动。对持有老年代对象引用的Survivor区（Root区）进行标记。")])]),l._v(" "),a("li",[a("p",[l._v("根区扫描(Root Region Scan)：并发执行，扫描那些对old区有引用的Survivor区，在yongGC 发生之前该阶段必须完成。")])]),l._v(" "),a("li",[a("p",[l._v("并发标记(Concurrent Mark)：并发执行，找出整个堆中存活的对象，将空区域标记为”X”,此阶段也可能会被Young GC中断。")])]),l._v(" "),a("li",[a("p",[l._v("再次标记(Remark)：完全完成对heap存活对象的标记。采用snapshot-at-the-beginning (SATB) 算法完成，比CMS用的算法更快。")])]),l._v(" "),a("li",[a("p",[l._v("清理(cleanup)：并发执行，统计小堆区中所有存活的对象, 并对小堆区进行排序,优先清理垃圾多的小堆区，释放内存。")])]),l._v(" "),a("li",[a("p",[l._v("复制/清理(copy/clean)：对小堆区未被清理对象对象进行复制，然后再清理。")]),l._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/4b675b727eee4b64b836d001ebe3263d.png",alt:"在这里插入图片描述"}})])])]),l._v(" "),a("p",[a("strong",[l._v("5.G1参数配置应用分析")])]),l._v(" "),a("p",[l._v("1)-XX:+UseG1GC 表示启用GC收集器")]),l._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[l._v("-XX:MaxGCPauseMillis=200 - 设置最大GC停顿时间(GC pause time)指标(target). 这是一个软性指标(soft goal), JVM 会尽力去达成这个目标. 所以有时候这个目标并不能达成. 默认值为 200 毫秒。")])]),l._v(" "),a("li",[a("p",[l._v("-XX:InitiatingHeapOccupancyPercent=45 - 启动并发GC时的堆内存占用百分比. G1用它来触发并发GC周期,基于整个堆的使用率,而不只是某一代内存的使用比例。值为 0 则表示“一直执行GC循环)'. 默认值为 45 (表示堆使用了45%)。")])])]),l._v(" "),a("p",[l._v("总之：HotSpot 工程师正在逐步改进GC回收器, 在新的java版本中,将会带来新的功能和优化。")]),l._v(" "),a("h1",{attrs:{id:"章节面试分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#章节面试分析"}},[l._v("#")]),l._v(" 章节面试分析")]),l._v(" "),a("ul",[a("li",[a("p",[l._v("你了解JVM中哪些常用垃圾回收器？")])]),l._v(" "),a("li",[a("p",[l._v("JVM中的垃圾回收器分别有什么特点？")])])])])}),[],!1,null,null,null);v.default=e.exports}}]);