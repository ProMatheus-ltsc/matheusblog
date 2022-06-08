(window.webpackJsonp=window.webpackJsonp||[]).push([[280],{1641:function(a,t,v){"use strict";v.r(t);var r=v(65),_=Object(r.a)({},(function(){var a=this,t=a.$createElement,v=a._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h1",{attrs:{id:"jvm-简介"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#jvm-简介"}},[a._v("#")]),a._v(" JVM 简介")]),a._v(" "),v("p"),v("div",{staticClass:"table-of-contents"},[v("ul",[v("li",[v("a",{attrs:{href:"#jvm是什么"}},[a._v("JVM是什么")])]),v("li",[v("a",{attrs:{href:"#市场主流jvm分析"}},[a._v("市场主流JVM分析")])]),v("li",[v("a",{attrs:{href:"#为什么要学习jvm"}},[a._v("为什么要学习JVM")])]),v("li",[v("a",{attrs:{href:"#jvm规范架构"}},[a._v("JVM规范架构")])]),v("li",[v("a",{attrs:{href:"#hotspot基本架构"}},[a._v("Hotspot基本架构")])]),v("li",[v("a",{attrs:{href:"#graalvm基本架构分析-了解"}},[a._v("Graalvm基本架构分析(了解)")])]),v("li",[v("a",{attrs:{href:"#面试faq分析"}},[a._v("面试FAQ分析")])]),v("li",[v("a",{attrs:{href:"#常见bug分析"}},[a._v("常见Bug分析")])])])]),v("p"),a._v(" "),v("h2",{attrs:{id:"jvm是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#jvm是什么"}},[a._v("#")]),a._v(" JVM是什么")]),a._v(" "),v("p",[a._v("JVM 是 Java Virtual Machine的缩写，顾名思义，它是一个可以执行JAVA字节码的虚拟计算机(有自己的指令集、内存区域、执行引擎等)，拥有自己独立的运行机制，是JAVA平台的一部分，如图所示：")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/8946218ad3194083a7a031679ec29481.png",alt:"在这里插入图片描述"}})]),a._v(" "),v("p",[a._v("其中，图中的:")]),a._v(" "),v("ul",[v("li",[a._v("JRE（Java Runtime Environment）Java程序运行时的一些基础类库，同时包含JVM。")]),a._v(" "),v("li",[a._v("JDK (Java Development Kit) Java程序开发工具包（包含了jre,jvm,工具）。")])]),a._v(" "),v("p",[a._v("JVM是 Java 程序能够实现跨平台的基础(Java的跨平台本质上是通过不同平台的JVM实现的)，它的作用是加载Java字节码（bytecode），然后翻译或解释成对应平台的机器码再交由 CPU 执行。如图-2所示：")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/d2ce553a9ac8448a9f48e1fc030d7114.png",alt:"在这里插入图片描述"}})]),a._v(" "),v("p",[a._v("程序在执行之前先要把 Java 代码（.java）转换成字节码（.class），JVM 通过类加载器 （ClassLoader）把字节码加载到内存中，但字节码文件是JVM 的一套指令集规范（每一条JAVA指令，Java虚拟机规范中都有详细定义，如怎么取操作数，怎么处理操作数，处理结果放在哪里。），并不能直接交给底 层操作系统去执行，因此需要特定的命令解析器执行引擎（Execution Engine） 将字节码翻译成底层机器码，再交由 CPU 去执行。")]),a._v(" "),v("h2",{attrs:{id:"市场主流jvm分析"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#市场主流jvm分析"}},[a._v("#")]),a._v(" 市场主流JVM分析")]),a._v(" "),v("p",[a._v("JVM是一种规范，基于这种规范，不同公司就对此规范做了具体实现，例如市场上的一些主流JVM如下：")]),a._v(" "),v("ol",[v("li",[a._v("HotSpot VM (Sun公司研发，后在2010年由Oracle公司收购)。")]),a._v(" "),v("li",[a._v("JRockit VM (BEA公司研发，后在2008年由Oracle公司收购)。")]),a._v(" "),v("li",[a._v("J9 VM （IBM 内部使用）。")]),a._v(" "),v("li",[a._v("TaobaoJVM(AliJVM团队开发,基于OpenJDK开发了AlibabaJDK)\n5)…\n说明：HotSpot目前是应用最官方，最主要的一款JVM虚拟机。")])]),a._v(" "),v("h2",{attrs:{id:"为什么要学习jvm"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么要学习jvm"}},[a._v("#")]),a._v(" 为什么要学习JVM")]),a._v(" "),v("p",[a._v("第一：深入理解JVM可以帮助我们从平台角度提高解决问题的能力，例如：")]),a._v(" "),v("ul",[v("li",[a._v("有效防止内存泄漏（Memory leak）。")]),a._v(" "),v("li",[a._v("优化线程锁的使用 (Thread Lock)。")]),a._v(" "),v("li",[a._v("科学进行垃圾回收 (Garbage collection)。")]),a._v(" "),v("li",[a._v("提高系统吞吐量 (throughput)。")]),a._v(" "),v("li",[a._v("降低延迟(Delay)，提高其性能(performance)。")])]),a._v(" "),v("p",[a._v("第二：企业面试需要(中高级程序员必备技能)，例如：")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/51e4b886c3784421892066d956fae99f.png",alt:"在这里插入图片描述"}})]),a._v(" "),v("p",[a._v("其实，我们学习一些java基础代码，可以不懂JVM。但是如果你想写一些比较精巧、效率比较高的代码，就需要懂一些JVM执行层面的知识了，比方说各种资源的分配，然后进行调优和故障排查。")]),a._v(" "),v("h1",{attrs:{id:"jvm体系结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#jvm体系结构"}},[a._v("#")]),a._v(" JVM体系结构")]),a._v(" "),v("h2",{attrs:{id:"jvm规范架构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#jvm规范架构"}},[a._v("#")]),a._v(" JVM规范架构")]),a._v(" "),v("p",[a._v("JVM规范中，JVM主要由如下几部分构成，如图所示：")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/e7fbb9aaae524337a94d5eedc39ac788.png",alt:"在这里插入图片描述"}})]),a._v(" "),v("ol",[v("li",[a._v("类加载系统 （ClassLoader System） ：负责加载类到内存。")]),a._v(" "),v("li",[a._v("运行时数据区 （Runtime Data Area）：负责存储数据信息(对象、方法等)。")]),a._v(" "),v("li",[a._v("执行引擎 （Execution Engine）:负责解释执行字节码、执行GC操作等。")]),a._v(" "),v("li",[a._v("本地库接口（Native Interface) 负责融合不同的编程语言为 Java 所用。")])]),a._v(" "),v("h2",{attrs:{id:"hotspot基本架构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#hotspot基本架构"}},[a._v("#")]),a._v(" Hotspot基本架构")]),a._v(" "),v("p",[a._v("Java Hotspot 虚拟机是基于JVM规范的一种基本实现，它在JDK8版本中的基本架构（Architecture）如下：")]),a._v(" "),v("p",[a._v("其中，JVM规范中的方法区，在JDK8的HotSpot虚拟机中称之为元空间Metaspace。")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/0dc056c34805452a9a6eadfd7c1e0762.png",alt:"在这里插入图片描述"}})]),a._v(" "),v("h2",{attrs:{id:"graalvm基本架构分析-了解"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#graalvm基本架构分析-了解"}},[a._v("#")]),a._v(" Graalvm基本架构分析(了解)")]),a._v(" "),v("p",[a._v("GraalVM是Oracle发布的下一代Java虚拟机，2019.05才发布了第一个release 版本，分别有社区版和企业版。例如：")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/e025d67a0d7c49258587bae02f313293.png",alt:"在这里插入图片描述"}})]),a._v(" "),v("p",[v("strong",[a._v("GraalVM有 三大特点")])]),a._v(" "),v("ol",[v("li",[a._v("高效能运行 Java（使用 GraalVM 执行 Java 程式可以变得更快）。")]),a._v(" "),v("li",[a._v("多语言并行（可以在 Java 里面同时使用多种语言，像是 JavaScript、R…）")]),a._v(" "),v("li",[a._v("快速启动（直接把 Java 应用编译成机器码，执行起来体积更小、启动速度更快）。")])]),a._v(" "),v("h1",{attrs:{id:"总结-summary"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结-summary"}},[a._v("#")]),a._v(" 总结(Summary)")]),a._v(" "),v("h2",{attrs:{id:"面试faq分析"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#面试faq分析"}},[a._v("#")]),a._v(" 面试FAQ分析")]),a._v(" "),v("ul",[v("li",[a._v("你用的什么JVM(JAVA虚拟机)？（HotSpot）")]),a._v(" "),v("li",[a._v("你了解市面上有哪些JVM？(HotSpot,JRockit,J9,TaobaoVM,Dalvik)")]),a._v(" "),v("li",[a._v("JDK,JRE,JVM之间是什么关系？(JDK>JRE>JVM)")]),a._v(" "),v("li",[a._v("你觉得下一代JVM的发展方向应该是怎样的?(支持更多编程语言)")]),a._v(" "),v("li",[a._v("JVM规范JVM由哪及部分构成？(类加载子系统，运行时数据区、执行引擎、本地方法接口)")]),a._v(" "),v("li",[a._v("为什么我们要学习JVM？")])]),a._v(" "),v("h2",{attrs:{id:"常见bug分析"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#常见bug分析"}},[a._v("#")]),a._v(" 常见Bug分析")])])}),[],!1,null,null,null);t.default=_.exports}}]);