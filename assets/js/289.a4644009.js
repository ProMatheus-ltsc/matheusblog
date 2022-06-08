(window.webpackJsonp=window.webpackJsonp||[]).push([[289],{1659:function(a,t,v){"use strict";v.r(t);var _=v(65),r=Object(_.a)({},(function(){var a=this,t=a.$createElement,v=a._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h1",{attrs:{id:"gc简介"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#gc简介"}},[a._v("#")]),a._v(" GC简介")]),a._v(" "),v("p"),v("div",{staticClass:"table-of-contents"},[v("ul",[v("li",[v("a",{attrs:{href:"#何为gc"}},[a._v("何为GC")])]),v("li",[v("a",{attrs:{href:"#为何要学习gc"}},[a._v("为何要学习GC")])]),v("li",[v("a",{attrs:{href:"#引用计数法"}},[a._v("引用计数法")])]),v("li",[v("a",{attrs:{href:"#可达性分析法"}},[a._v("可达性分析法")])]),v("li",[v("a",{attrs:{href:"#标记清除"}},[a._v("标记清除")])]),v("li",[v("a",{attrs:{href:"#标记复制"}},[a._v("标记复制")])]),v("li",[v("a",{attrs:{href:"#标记整理"}},[a._v("标记整理")])]),v("li",[v("a",{attrs:{href:"#分代回收"}},[a._v("分代回收")])])])]),v("p"),a._v(" "),v("h2",{attrs:{id:"何为gc"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#何为gc"}},[a._v("#")]),a._v(" 何为GC")]),a._v(" "),v("p",[a._v("GC（Garbage Collection）称之为垃圾回收，是对内存中的垃圾对象,采用一定的算法进行内存回收的一个动作。比方说，java中的垃圾回收会对内存中的对象进行遍历，对存活的对象进行标记，其未标记对象可认为是垃圾对象，然后基于特定算法进行回收。")]),a._v(" "),v("h2",{attrs:{id:"为何要学习gc"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为何要学习gc"}},[a._v("#")]),a._v(" 为何要学习GC")]),a._v(" "),v("p",[a._v("深入理解GC的工作机制，可以帮你写出更好的Java应用，提高开发效率，同时也是进军大规模应用开发的一个前提。")]),a._v(" "),v("h1",{attrs:{id:"gc垃圾对象判定"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#gc垃圾对象判定"}},[a._v("#")]),a._v(" GC垃圾对象判定")]),a._v(" "),v("h2",{attrs:{id:"引用计数法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#引用计数法"}},[a._v("#")]),a._v(" 引用计数法")]),a._v(" "),v("p",[a._v("这个算法是给每一个对象设置一个引用计数器，每当有一个地方引用这个对象的时候，计数器就加 1，与之相反，每当引用失效的时候就减 1。也就是以计数来判断对象是否为垃圾。当某个对象的引用计数器的值为0时，表示这个对象不会在被实用，JVM中的GC被触发时，可回收这个对象。如图所示：")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/72aa3800db0445479e3b426a01300243.png",alt:"在这里插入图片描述"}})]),a._v(" "),v("p",[a._v("其中：")]),a._v(" "),v("ol",[v("li",[a._v("绿色云朵是内存中的根对象，表示程序中正在使用的对象。")]),a._v(" "),v("li",[a._v("蓝色圆圈是内存中的活动对象，其中的数字表示其引用计数。")]),a._v(" "),v("li",[a._v("灰色圆圈是内存中没有活动对象引用的对象，表示非活动对象。")])]),a._v(" "),v("p",[a._v("对于引用计数法，实现简单，垃圾对应也便于识别。但也有一些缺陷，我们每个对象都需要有一个单独的对象引用计数器，这个计数器的值还要经常更新，还有就是有一个最严重的循环引用问题，如图所示：")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/e3077641b6ce45d8820f8b1216925776.png",alt:"在这里插入图片描述"}})]),a._v(" "),v("p",[a._v("其中红色对象实际上是应用程序不使用的垃圾。但由于引用计数的限制，仍然存在内存泄漏。当然也有一些办法来应来对这种情况, 例如 “弱引用”(‘weak’ references)或者使用其它的算法来排查循环引用等。")]),a._v(" "),v("h2",{attrs:{id:"可达性分析法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#可达性分析法"}},[a._v("#")]),a._v(" 可达性分析法")]),a._v(" "),v("p",[a._v("这个算法的核心思路就是通过一系列的“GC Roots”对象作为起始点，从这些对象开始往下搜索，搜索所经过的路径称之为“引用链”。当一个对象到 GC Roots 没有任何引用链相连的时候，证明此对象是可以被回收的。否则，证明这个对象有用，不是垃圾。如图所示：")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/8bfe6f2149a541ccb7300ad0258daf43.png",alt:"在这里插入图片描述"}})]),a._v(" "),v("p",[a._v("在GC遍历(traverses)内存中整体的对象关系图(object graph)时，首先要确定根对象,那什么样的对象可作为根对象呢？GC规范中指出根对象可以是：")]),a._v(" "),v("p",[a._v("1）Java 虚拟机栈中的引用对象；")]),a._v(" "),v("p",[a._v("2）本地方法栈中 JNI（既一般说的 Native 方法）引用的对象；")]),a._v(" "),v("p",[a._v("3）方法区中类静态常量的引用对象；")]),a._v(" "),v("p",[a._v("4）方法区中常量的引用对象。")]),a._v(" "),v("p",[a._v("当确定了根对象以后，进而从根对象开始进行依赖查找，所有可访问到的对象都认为是存活对象，然后进行标记（mark）。")]),a._v(" "),v("p",[a._v("说明：标记可达对象需要暂停所有应用线程, 以确定对象的引用关系。其暂停的时间, 与堆内存大小、对象的总数没有直接关系, 而是由存活对象(alive objects)的数量来决定。")]),a._v(" "),v("h1",{attrs:{id:"常见gc算法分析"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#常见gc算法分析"}},[a._v("#")]),a._v(" 常见GC算法分析")]),a._v(" "),v("h2",{attrs:{id:"标记清除"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#标记清除"}},[a._v("#")]),a._v(" 标记清除")]),a._v(" "),v("p",[a._v("标记清除(Mark-Sweep)算法分为“标记”和“清除”阶段，它首先会标记出内存中所有不需要回收的对象，然后从内存中清除所有未标记的对象。 如图所示：")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/85992b7d5be04d4fab5de5b546c24fc0.png",alt:"在这里插入图片描述"}})]),a._v(" "),v("p",[a._v("标记清除算法的的优点是简单直接，缺点是效率低，并且可能会产生大量不连续的碎片。说它效率低是因为标记和清除两个过程都需要扫描内存空间（第一次：标记存活对象，第二次：清除没有标记的对象）。还有就是，清除后产生的大量不连续的内存碎片空间，无法满足较大对象的存储需求，这样就可能会再次触发垃圾回收。所以此垃圾回收算法，应该适合对象存活率较高的的内存区域(比方说JVM中的老年代)。")]),a._v(" "),v("h2",{attrs:{id:"标记复制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#标记复制"}},[a._v("#")]),a._v(" 标记复制")]),a._v(" "),v("p",[a._v("标记复制（Mark-Copy）算法是将内存分为大小相同的两块，当这一块使用完了，就把当前存活的对象复制到另一块，然后一次性清空当前区块。如图所示：")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/261e90e05a934e61b29f24b0e474d396.png",alt:"在这里插入图片描述"}})]),a._v(" "),v("p",[a._v("“标记-复制”算法的缺点显而易见，就是内存空间利用率低，适用于那些对象生命周期短、回收频率高的内存区域（比方说JVM中的年轻代）。")]),a._v(" "),v("h2",{attrs:{id:"标记整理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#标记整理"}},[a._v("#")]),a._v(" 标记整理")]),a._v(" "),v("p",[a._v("标记整理清除(Mark-Sweep-Compact)算法结合了“标记-清除”和“复制”两个算法的优点。第一阶段从根节点开始标记所有被引用对象，第二阶段遍历整个堆，把存活对象“压缩”复制到堆的其中一块空间中，按顺序排放。第三阶段清理掉存活边界以外的全部内存空间。如图所示：")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/b0af014b557e49e2a7aed2d8e6949e43.png",alt:"在这里插入图片描述"}})]),a._v(" "),v("p",[a._v("系统GC时每次执行清除(sweeping)操作, JVM 都必须保证“不可达对象“占用的内存能被回收然后重用。内存是被回收了，但这有可能会产生大量的内存碎片(类似于磁盘碎片), 进而引发两个问题:")]),a._v(" "),v("ol",[v("li",[a._v("对象创建时，执行写入操作越来越耗时, 因为寻找一块足够大的空闲内存会变得更加麻烦。")]),a._v(" "),v("li",[a._v("对象创建时, JVM需要在连续的内存块中为对象分配内存。如果碎片问题很严重, 直至没有空闲片段能存放新创建的对象,就会发生内存分配错误(allocation error)。")])]),a._v(" "),v("p",[a._v("为了解决碎片问题，JVM在启动GC执行垃圾收集的过程中, 不仅仅是标记和清除, 还需要执行 “内存碎片整理”。这个过程会让所有可达对象(reachable objects)进行依次移动,进而可以消除(或减少)内存碎片，并为新对象提供更大并且连续的内存空间。")]),a._v(" "),v("p",[a._v("标记整理算法避免了“标记-清除”的碎片问题，同时也避免了“复制”算法的空间问题,由于需要向一侧移动等一系列操作，其效率相对低一些，但对内存空间管理上十分优异。适用于那些生命周期长、回收频率低，但注重回收一次内存空间得到足够释放的场景。")]),a._v(" "),v("h2",{attrs:{id:"分代回收"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分代回收"}},[a._v("#")]),a._v(" 分代回收")]),a._v(" "),v("p",[a._v("我们知道垃圾收集要停止整个应用程序的运行，那么假如这个收集过程需要的时间很长，就会对应用程序产生很大性能问题，如何解决这个问题呢？通过实验发现内存中的对象通常可以将其分为两大类：")]),a._v(" "),v("ol",[v("li",[a._v("存活时间较短(这样的对象比较多)。")]),a._v(" "),v("li",[a._v("存活时间较长(这样的对象比较少)。")])]),a._v(" "),v("p",[a._v("基于对如上问题的分析，科学家提出了分代回收思路，将VM中内存分为年轻代(Young Generation)和老年代(Old Generation-老年代有时候也称为年老区(Tenured)。例如：")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/3fc45ab068cc4062b12b2e21de061ce8.png",alt:"在这里插入图片描述"}})]),a._v(" "),v("p",[a._v("Young区存储的就是那些生命周期短，使用一两次就不再使用的对象，回收一次基本上该区域十之有八的对象全部被回收清理掉，因此Young区采用的垃圾回收算法也就是“标记-复制”算法。Old区存储的是那些生命周期长，经过多次回收后仍然存活的对象，就把它们放到Old区中，Old区一般不去判断这些对象的可达性，直到Old区不够用为止，再进行一次统一的回收，释放出足够的连续的内存空间。所以我们选择“标记-清除”或“标记-整理”算法进行垃圾收集。")]),a._v(" "),v("p",[a._v("在分代回收过程中，垃圾收集事件(Garbage Collection events)通常分为:")]),a._v(" "),v("ol",[v("li",[a._v("Minor GC （小型GC）：年轻代GC事件，(新对象)分配频率越高, Minor GC 的频率就越高。")]),a._v(" "),v("li",[a._v("Major GC (大型GC): 老年代GC事件。")]),a._v(" "),v("li",[a._v("Full GC （完全GC）:整个堆的GC事件。\n说明：一般情况下可以将Major GC与Full GC看成是同一种GC。")])]),a._v(" "),v("h1",{attrs:{id:"章节面试分析"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#章节面试分析"}},[a._v("#")]),a._v(" 章节面试分析")]),a._v(" "),v("p",[a._v("1)何为GC？")]),a._v(" "),v("p",[a._v("2)为什么要GC？")]),a._v(" "),v("p",[a._v("3)如何判定内存中的对象是否为垃圾对象？")]),a._v(" "),v("p",[a._v("4)常用垃圾回收算法有哪些？")])])}),[],!1,null,null,null);t.default=r.exports}}]);