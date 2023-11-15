(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1591:function(s,a,t){"use strict";t.r(a);var e=t(65),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"虚拟机内存体系与垃圾回收"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#虚拟机内存体系与垃圾回收"}},[s._v("#")]),s._v(" 虚拟机内存体系与垃圾回收")]),s._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#java-虚拟机内存体系"}},[s._v("Java 虚拟机内存体系")]),e("ul",[e("li",[e("a",{attrs:{href:"#堆"}},[s._v("堆")])])])]),e("li",[e("a",{attrs:{href:"#垃圾回收"}},[s._v("垃圾回收")]),e("ul",[e("li",[e("a",{attrs:{href:"#垃圾回收区域"}},[s._v("垃圾回收区域")])]),e("li",[e("a",{attrs:{href:"#什么是垃圾"}},[s._v("什么是垃圾")])]),e("li",[e("a",{attrs:{href:"#如何确定垃圾"}},[s._v("如何确定垃圾")])]),e("li",[e("a",{attrs:{href:"#哪些对象可以当作-gc-roots"}},[s._v("哪些对象可以当作 GC Roots")])])])]),e("li",[e("a",{attrs:{href:"#实验-gc-roots-对象回收"}},[s._v("实验 GC Roots 对象回收")])])])]),e("p"),s._v(" "),e("p",[e("img",{attrs:{src:t(915),alt:""}})]),s._v(" "),e("h2",{attrs:{id:"java-虚拟机内存体系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java-虚拟机内存体系"}},[s._v("#")]),s._v(" Java 虚拟机内存体系")]),s._v(" "),e("p",[s._v("Java 虚拟机我们简称为 JVM（Java Virtual Machine）。")]),s._v(" "),e("p",[s._v("Java 虚拟机在执行 Java 程序的过程中，会管理几个不同的数据区域。如下图所示：")]),s._v(" "),e("p",[e("img",{attrs:{src:t(916),alt:"1-1"}})]),s._v(" "),e("p",[s._v("下面我会介绍这几个数据区的特点。")]),s._v(" "),e("h3",{attrs:{id:"堆"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#堆"}},[s._v("#")]),s._v(" 堆")]),s._v(" "),e("p",[s._v("堆区的几个特点：")]),s._v(" "),e("ul",[e("li",[s._v("线程共享。")]),s._v(" "),e("li",[s._v("启动时创建堆这个区。")]),s._v(" "),e("li",[s._v("基本上所有的对象实例都在这个区分配。")]),s._v(" "),e("li",[s._v("物理上不连接（大对象除外）。逻辑上不连接。")]),s._v(" "),e("li",[s._v("内存分为新生代和老年代。新生代分为 eden 区和两个大小一样的 survivor 区。")])]),s._v(" "),e("p",[s._v("内存细分：")]),s._v(" "),e("p",[s._v("Java 7 及之前内存逻辑上分为三部分：新生区 + 老年代 + 永久代。")]),s._v(" "),e("p",[e("img",{attrs:{src:t(917),alt:"1-2"}})]),s._v(" "),e("ul",[e("li",[s._v("新生区，又被划分为 Eden 区和 Survivor 区。")]),s._v(" "),e("li",[s._v("老年代。")]),s._v(" "),e("li",[s._v("永久代实现了方法区。")])]),s._v(" "),e("p",[s._v("Java 8 及之后内存逻辑上分为三部分：新生区 + 老年代 + 元空间。")]),s._v(" "),e("p",[e("img",{attrs:{src:t(918),alt:"1-3"}})]),s._v(" "),e("ul",[e("li",[s._v("新生区，又被划分为 Eden 区和 Survivor 区。")]),s._v(" "),e("li",[s._v("老年代。")]),s._v(" "),e("li",[s._v("废弃了永久代，使用元空间，它属于本地内存。")])]),s._v(" "),e("h4",{attrs:{id:"方法区"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方法区"}},[s._v("#")]),s._v(" 方法区")]),s._v(" "),e("ul",[e("li",[s._v("线程共享。")]),s._v(" "),e("li",[s._v("主要存储这几类信息。\n"),e("ul",[e("li",[s._v("类型信息。")]),s._v(" "),e("li",[s._v("常量。")]),s._v(" "),e("li",[s._v("静态变量。")]),s._v(" "),e("li",[s._v("即时编译器编译后的代码缓存。")])])])]),s._v(" "),e("h4",{attrs:{id:"虚拟机栈"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#虚拟机栈"}},[s._v("#")]),s._v(" 虚拟机栈")]),s._v(" "),e("ul",[e("li",[s._v("线程私有。")]),s._v(" "),e("li",[s._v("生命周期与线程相同。")]),s._v(" "),e("li",[s._v("一个线程中，每一个方法被执行的时候，创建一个栈帧。")]),s._v(" "),e("li",[s._v("栈帧 Stack Frame 的结构。\n"),e("ul",[e("li",[s._v("存储局部变量表。\n"),e("ul",[e("li",[s._v("基本数据类型。")]),s._v(" "),e("li",[s._v("对象引用。")]),s._v(" "),e("li",[s._v("返回地址（returnAddress）。")])])]),s._v(" "),e("li",[s._v("操作数栈。")]),s._v(" "),e("li",[s._v("动态连接。")]),s._v(" "),e("li",[s._v("方法出口。")])])])]),s._v(" "),e("h4",{attrs:{id:"本地方法栈"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地方法栈"}},[s._v("#")]),s._v(" 本地方法栈")]),s._v(" "),e("ul",[e("li",[s._v("线程私有。")]),s._v(" "),e("li",[s._v("虚拟机使用到的本地（Native）方法服务。")])]),s._v(" "),e("h4",{attrs:{id:"程序计数器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#程序计数器"}},[s._v("#")]),s._v(" 程序计数器")]),s._v(" "),e("ul",[e("li",[s._v("线程私有。")]),s._v(" "),e("li",[s._v("当前线程所执行的字节码的行号指示器。")])]),s._v(" "),e("p",[s._v("我将这几个数据区的特点整理成了思维导图，供大家参考学习。点击图片，然后鼠标右键点击在新标签页中打开图片。")]),s._v(" "),e("p",[e("img",{attrs:{src:t(919),alt:"1-4"}})]),s._v(" "),e("h2",{attrs:{id:"垃圾回收"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收"}},[s._v("#")]),s._v(" 垃圾回收")]),s._v(" "),e("h3",{attrs:{id:"垃圾回收区域"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收区域"}},[s._v("#")]),s._v(" 垃圾回收区域")]),s._v(" "),e("p",[s._v("垃圾回收主要关注方法区和堆中的垃圾收集。如下图所示，方法区和堆被高亮显示，用来说明垃圾收集器关心的收集区域。")]),s._v(" "),e("p",[e("img",{attrs:{src:t(920),alt:"1-5"}})]),s._v(" "),e("p",[s._v("收集堆区域是垃圾收集器的工作重点。上面我们也讲到了堆空间的划分，包含新生代和老年代，而垃圾收集器会频繁收集新生代，较少收集老年代。")]),s._v(" "),e("h3",{attrs:{id:"什么是垃圾"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是垃圾"}},[s._v("#")]),s._v(" 什么是垃圾")]),s._v(" "),e("p",[s._v("我们可以先想下现实生活中的垃圾，比如吃香蕉后的香蕉皮，我们不需要就扔到垃圾桶了，那么香蕉皮就属于垃圾，需要被环卫工人回收。 那 Java 虚拟机中，什么是垃圾呢？")]),s._v(" "),e("p",[s._v("垃圾是指在运行程序中没有任何指针指向的对象，这些对象被当作垃圾被垃圾收集器回收。")]),s._v(" "),e("h3",{attrs:{id:"如何确定垃圾"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何确定垃圾"}},[s._v("#")]),s._v(" 如何确定垃圾")]),s._v(" "),e("p",[s._v("有两种算法来确定哪些对象是垃圾：引用计数法和根节点可达性分析。")]),s._v(" "),e("ul",[e("li",[s._v("引用计数法")])]),s._v(" "),e("p",[s._v("原理：给对象添加一个引用计数器，每当有一个地方引用它，计数器的值就加一。每当有一个引用失效，计数器的值就减一。当计数器值为零时，这个对象被认为没有其他对象引用，可当作垃圾回收。")]),s._v(" "),e("p",[s._v("缺点：需要维护引用计数器，有一定的消耗。且较难处理循环引用的问题。（现在基本没有地方使用这种算法了，了解即可）。")]),s._v(" "),e("ul",[e("li",[s._v("可达性分析算法")])]),s._v(" "),e("p",[s._v("先想象一下生活中的场景，假设张三这个人有一条狗，狗被系着一条绳子。如下图所示：")]),s._v(" "),e("p",[e("img",{attrs:{src:t(921),alt:"1-6"}})]),s._v(" "),e("p",[s._v("如果张三把狗遗弃了，那么这条狗和绳子就没有关联关系了，狗会被抓狗队抓起来送到宠物收容所。这里可以把张三当作 GC Roots，张三和狗之间断了联系，那么狗和绳子都会被回收。如下图所示：")]),s._v(" "),e("p",[e("img",{attrs:{src:t(922),alt:"1-7"}})]),s._v(" "),e("p",[s._v("可达性分析算法原理：通过一系称为 "),e("code",[s._v("GC Roots")]),s._v(" 的对象作为起始点，从 "),e("code",[s._v("GC Roots")]),s._v(" 的对象出发，向下搜索，如果找到的对象和 "),e("code",[s._v("GC Roots")]),s._v(" 有直接引用或间接引用关系，则说明这个对象不是垃圾，否则，这个对象就是垃圾。")]),s._v(" "),e("h3",{attrs:{id:"哪些对象可以当作-gc-roots"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#哪些对象可以当作-gc-roots"}},[s._v("#")]),s._v(" 哪些对象可以当作 GC Roots")]),s._v(" "),e("ul",[e("li",[s._v("虚拟机栈中的引用对象。")]),s._v(" "),e("li",[s._v("方法区中的类静态属性引用的对象。")]),s._v(" "),e("li",[s._v("方法区中常量引用的对象。")]),s._v(" "),e("li",[s._v("本地方法栈中的 "),e("code",[s._v("JNI")]),s._v("（Native 方法）引用的对象。")])]),s._v(" "),e("p",[s._v("总结：除了堆空间外的一些结构，比如虚拟机栈、本地方法栈、方法区、字符串常量池等地方对堆空间进行引用的，都可以作为 "),e("code",[s._v("GC Roots")]),s._v(" 进行可达性分析。")]),s._v(" "),e("h2",{attrs:{id:"实验-gc-roots-对象回收"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实验-gc-roots-对象回收"}},[s._v("#")]),s._v(" 实验 GC Roots 对象回收")]),s._v(" "),e("p",[s._v("下面我们来用实验的方式讲解 GC Roots 根节点被回收的场景。")]),s._v(" "),e("p",[s._v("本次实验的内容如下：")]),s._v(" "),e("ul",[e("li",[s._v("创建一个 GCRootsDemo 类，定义了一个变量 bigSize 占用 2M 内存，定义一个类变量 gcRootsDemo 作为 GC Roots 指向 GCRootsDemo 类实例。")]),s._v(" "),e("li",[s._v("当主动调用垃圾回收后，GCRootsDemo 类实例不会被回收，我们只是看下第一次的内存情况。")]),s._v(" "),e("li",[s._v("将类变量 gcRootsDemo 与 GCRootsDemo 类实例的关联关系给断开，再次执行垃圾回收，看下内存情况，来观察类实例 GCRootsDemo 类实例是否作为垃圾被回收。期望结果：GCRootsDemo 类实例被回收。")])]),s._v(" "),e("p",[s._v("实验步骤：")]),s._v(" "),e("ul",[e("li",[s._v("在 WebIDE 上右键单击菜单，选择 New File 创建新文件。")])]),s._v(" "),e("p",[e("img",{attrs:{src:t(923),alt:"1-8"}})]),s._v(" "),e("ul",[e("li",[s._v("创建文件名为 "),e("code",[s._v("GCRootsDemo.java")]),s._v("。")])]),s._v(" "),e("p",[e("img",{attrs:{src:t(924),alt:"1-9"}})]),s._v(" "),e("ul",[e("li",[s._v("编写测试代码。")])]),s._v(" "),e("p",[s._v("在 WebIDE 上编写 "),e("code",[s._v("GCRootsDemo.java")]),s._v(" 代码。")]),s._v(" "),e("div",{staticClass:"language-JAVA line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GCRootsDemo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" _1MB "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("byte")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" bigSize "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("byte")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" _1MB"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GCRootsDemo")]),s._v(" gcRootsDemo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("InterruptedException")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        gcRootsDemo "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GCRootsDemo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//gcRootsDemo = null;")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("gc")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("ul",[e("li",[s._v("编译代码。")])]),s._v(" "),e("p",[s._v("在 WebIDE 的控制台窗口编译 "),e("code",[s._v("GCRootsDemo.java")]),s._v(" 代码。")]),s._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[s._v("javac "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GCRootsDemo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("java\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:t(925),alt:"1-10"}})]),s._v(" "),e("p",[s._v("编译之后，会在当前文件夹产生我们所编写的 "),e("code",[s._v("GCRootsDemo")]),s._v(" 类的 "),e("code",[s._v("GCRootsDemo.class")]),s._v(" 字节码文件。")]),s._v(" "),e("p",[e("img",{attrs:{src:t(926),alt:"1-11"}})]),s._v(" "),e("ul",[e("li",[s._v("运行代码。")])]),s._v(" "),e("p",[s._v("在 WebIDE 上运行 GCRootsDemo 代码。且带上打印 GC 日志的参数。当发生 GC 时会自动打印垃圾回收信息和堆内存信息。")]),s._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[s._v("java "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("XX"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("PrintGCDetails")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GCRootsDemo")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("程序运行结束后，打印出的 GC 日志如下图所示：")]),s._v(" "),e("p",[e("img",{attrs:{src:t(927),alt:"1-12"}})]),s._v(" "),e("p",[s._v("堆内存占用空间从 2497 KB 降到了 2321 KB。内存空间只回收了 176 KB。因类实例变量至少占用 2MB 内存空间，所以这里可以判断出回收的肯定不是类实例变量。")]),s._v(" "),e("ul",[e("li",[s._v("断开类实例引用。")])]),s._v(" "),e("p",[s._v("我们改写一下代码，将 gcRootsDemo 变量的值设为 null，这样类实例 GCRootsDemo 就没有被任何 GC Roots 所引用。如果执行垃圾回收，是会被垃圾收集器回收掉的。")]),s._v(" "),e("p",[s._v("代码如下：")]),s._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GCRootsDemo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" _1MB "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("byte")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" bigSize "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("byte")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" _1MB"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GCRootsDemo")]),s._v(" gcRootsDemo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("InterruptedException")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    gcRootsDemo "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GCRootsDemo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    gcRootsDemo "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("gc")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("ul",[e("li",[s._v("再次编译、运行程序，并打印 GC 日志。")])]),s._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[s._v("javac "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GCRootsDemo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("java\n\njava "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("XX"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("PrintGCDetails")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GCRootsDemo")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("实验结果如图所示：")]),s._v(" "),e("p",[e("img",{attrs:{src:t(928),alt:"1-13"}})]),s._v(" "),e("p",[s._v("从上面的结果可以看出堆内存占用空间从 2497 KB 降到了 273 KB。内存空间回收了 2 MB + 176 KB，和第一次相比正好是相差 2 MB。所以是类实例占用的 2 MB 被回收了。")]),s._v(" "),e("p",[s._v("我们从实验中可以得出结论：对象和 GC Roots 没有引用关系时（这里引用关系可以是间接或直接引用），即对象不可达，将会被垃圾收集器标记为垃圾，后期被回收掉。")])])}),[],!1,null,null,null);a.default=r.exports},915:function(s,a,t){s.exports=t.p+"assets/img/JVM.01b9671d.png"},916:function(s,a,t){s.exports=t.p+"assets/img/2466037bb9bf615119a0fd56d462be70-0.bb52dad9.png"},917:function(s,a,t){s.exports=t.p+"assets/img/f9d507cd467b570cc141a52ebb94bf41-0.533f72ae.png"},918:function(s,a,t){s.exports=t.p+"assets/img/80ae00bbdde8ebff74fd0dcb6a573963-0.3978ea0c.png"},919:function(s,a,t){s.exports=t.p+"assets/img/65b204ea1e9885e0adcd7eb6e22026ff-0.0b48a3e6.png"},920:function(s,a,t){s.exports=t.p+"assets/img/9035b1f0e0949b88d601ece073e51706-0.cdd6c4d2.png"},921:function(s,a,t){s.exports=t.p+"assets/img/ed097f2c7c7f66491e74b0d13a695851-0.a813e9eb.png"},922:function(s,a,t){s.exports=t.p+"assets/img/5622bc5551ef6bd9fca9a9be3a3bf0e8-0.d7356379.png"},923:function(s,a,t){s.exports=t.p+"assets/img/fcc66408521809eb47a59f25d923772c-0.5240871d.png"},924:function(s,a,t){s.exports=t.p+"assets/img/4f12e24bc5b7874b652d28efb8989743-0.340ab1e0.png"},925:function(s,a){s.exports="data:image/png;base64,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"},926:function(s,a,t){s.exports=t.p+"assets/img/f4020804b0b50741b2f0f16475810ae3-0.f64a27f6.png"},927:function(s,a,t){s.exports=t.p+"assets/img/5543bf969955f4c875f64085be95ccb1-0.4977517c.png"},928:function(s,a,t){s.exports=t.p+"assets/img/0c47233296bda227a08e506c55ffb1a6-0.9f781047.png"}}]);