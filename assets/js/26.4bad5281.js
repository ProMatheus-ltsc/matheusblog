(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{1389:function(t,s,a){"use strict";a.r(s);var e=a(24),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"linux进程管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux进程管理"}},[t._v("#")]),t._v(" Linux进程管理")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#进程的查看"}},[t._v("进程的查看")]),e("ul",[e("li",[e("a",{attrs:{href:"#top-工具的使用"}},[t._v("top 工具的使用")])]),e("li",[e("a",{attrs:{href:"#ps-工具的使用"}},[t._v("ps 工具的使用")])]),e("li",[e("a",{attrs:{href:"#pstree-工具的使用"}},[t._v("pstree 工具的使用")])])])]),e("li",[e("a",{attrs:{href:"#进程的管理"}},[t._v("进程的管理")]),e("ul",[e("li",[e("a",{attrs:{href:"#kill-命令的掌握"}},[t._v("kill 命令的掌握")])]),e("li",[e("a",{attrs:{href:"#进程的执行顺序"}},[t._v("进程的执行顺序")])])])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"进程的查看"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进程的查看"}},[t._v("#")]),t._v(" 进程的查看")]),t._v(" "),e("p",[t._v("不管在测试的时候、在实际的生产环境中，还是自己的使用过程中，难免会遇到一些进程异常的情况，所以 Linux 为我们提供了一些工具来查看进程的状态信息。我们可以通过 "),e("code",[t._v("top")]),t._v(" 实时的查看进程的状态，以及系统的一些信息（如 CPU、内存信息等），我们还可以通过 "),e("code",[t._v("ps")]),t._v(" 来静态查看当前的进程信息，同时我们还可以使用 "),e("code",[t._v("pstree")]),t._v(" 来查看当前活跃进程的树形结构。")]),t._v(" "),e("h3",{attrs:{id:"top-工具的使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#top-工具的使用"}},[t._v("#")]),t._v(" top 工具的使用")]),t._v(" "),e("p",[e("code",[t._v("top")]),t._v(" 工具是我们常用的一个查看工具，能实时的查看我们系统的一些关键信息的变化:")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("top")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:a(591),alt:"image-20220531200321807"}})]),t._v(" "),e("p",[t._v("top 是一个在前台执行的程序，所以执行后便进入到这样的一个交互界面，正是因为交互界面我们才可以实时的获取到系统与进程的信息。在交互界面中我们可以通过一些指令来操作和筛选。在此之前我们先来了解显示了哪些信息。")]),t._v(" "),e("p",[t._v("我们看到 top 显示的第一排，")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("内容")]),t._v(" "),e("th",[t._v("解释")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("top")]),t._v(" "),e("td",[t._v("表示当前程序的名称")])]),t._v(" "),e("tr",[e("td",[t._v("11:05:18")]),t._v(" "),e("td",[t._v("表示当前的系统的时间")])]),t._v(" "),e("tr",[e("td",[t._v("up 8 days,17:12")]),t._v(" "),e("td",[t._v("表示该机器已经启动了多长时间")])]),t._v(" "),e("tr",[e("td",[t._v("1 user")]),t._v(" "),e("td",[t._v("表示当前系统中只有一个用户")])]),t._v(" "),e("tr",[e("td",[t._v("load average: 0.29,0.20,0.25")]),t._v(" "),e("td",[t._v("分别对应 1、5、15 分钟内 cpu 的平均负载")])])])]),t._v(" "),e("p",[t._v("load average 在 wikipedia 中的解释是 the system load is a measure of the amount of work that a computer system is doing 也就是对当前 CPU 工作量的度量，具体来说也就是指运行队列的平均长度，也就是等待 CPU 的平均进程数相关的一个计算值。")]),t._v(" "),e("p",[t._v("我们该如何看待这个 load average 数据呢？")]),t._v(" "),e("p",[t._v("假设我们的系统是单 CPU、单内核的，把它比喻成是一条单向的桥，把 CPU 任务比作汽车。")]),t._v(" "),e("ul",[e("li",[t._v("load = 0 的时候意味着这个桥上并没有车，cpu 没有任何任务；")]),t._v(" "),e("li",[t._v("load < 1 的时候意味着桥上的车并不多，一切都还是很流畅的，cpu 的任务并不多，资源还很充足；")]),t._v(" "),e("li",[t._v("load = 1 的时候就意味着桥已经被车给占满了，没有一点空隙，cpu 已经在全力工作了，所有的资源都被用完了，当然还好，这还在能力范围之内，只是有点慢而已；")]),t._v(" "),e("li",[t._v("load > 1 的时候就意味着不仅仅是桥上已经被车占满了，就连桥外都被占满了，cpu 已经在全力工作，系统资源的用完了，但是还是有大量的进程在请求，在等待。若是这个值大于 2 表示进程请求超过 CPU 工作能力的 2 倍。而若是这个值大于 5 说明系统已经在超负荷运作了。")])]),t._v(" "),e("p",[t._v("这是单个 CPU 单核的情况，而实际生活中我们需要将得到的这个值除以我们的核数来看。我们可以通过以下的命令来查看 CPU 的个数与核心数：")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看物理 CPU 的个数")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /proc/cpuinfo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"physical id"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sort")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("uniq")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("wc")]),t._v(" -l\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#每个 cpu 的核心数")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /proc/cpuinfo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"physical id"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("wc")]),t._v(" -l\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("p",[t._v("通过上面的指数我们可以得知 load 的临界值为 1 ，但是在实际生活中，比较有经验的运维或者系统管理员会将临界值定为 0.7。这里的指数都是除以核心数以后的值，不要混淆了")]),t._v(" "),e("ul",[e("li",[t._v("若是 load < 0.7 并不会去关注他；")]),t._v(" "),e("li",[t._v("若是 0.7< load < 1 的时候我们就需要稍微关注一下了，虽然还可以应付但是这个值已经离临界不远了；")]),t._v(" "),e("li",[t._v("若是 load = 1 的时候我们就需要警惕了，因为这个时候已经没有更多的资源的了，已经在全力以赴了；")]),t._v(" "),e("li",[t._v("若是 load > 5 的时候系统已经快不行了，这个时候你需要加班解决问题了")])]),t._v(" "),e("p",[t._v("通常我们都会先看 15 分钟的值来看这个大体的趋势，然后再看 5 分钟的值对比来看是否有下降的趋势。")]),t._v(" "),e("p",[t._v("查看 busybox 的代码可以知道，数据是每 5 秒钟就检查一次活跃的进程数，然后计算出该值，然后 load 从 "),e("code",[t._v("/proc/loadavg")]),t._v(" 中读取的。而这个 load 的值是如何计算的呢，这是 load 的计算的源码")]),t._v(" "),e("div",{staticClass:"language-c line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token macro-name"}},[t._v("FSHIFT")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token expression"}},[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v("          ")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* nr of bits of precision */")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token macro-name"}},[t._v("FIXED_1")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token expression"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v("FSHIFT"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 1.0 as fixed-point(定点) */")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token macro-name"}},[t._v("LOAD_FREQ")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token expression"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("HZ"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("      ")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 5 sec intervals，每隔5秒计算一次平均负载值 */")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token macro-name function"}},[t._v("CALC_LOAD")]),e("span",{pre:!0,attrs:{class:"token expression"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("load"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("     ")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n         "),e("span",{pre:!0,attrs:{class:"token expression"}},[t._v("load "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*=")]),t._v(" exp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("               ")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n         "),e("span",{pre:!0,attrs:{class:"token expression"}},[t._v("load "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FIXED_1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" exp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" ")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n         "),e("span",{pre:!0,attrs:{class:"token expression"}},[t._v("load "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>=")]),t._v(" FSHIFT"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" avenrun"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("EXPORT_SYMBOL")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("avenrun"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n* calc_load - given tick count, update the avenrun load estimates.\n* This is called while holding a write_lock on xtime_lock.\n*/")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("inline")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("calc_load")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" ticks"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" active_tasks"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* fixed-point */")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" count "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" LOAD_FREQ"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        count "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),t._v(" ticks"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                count "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" LOAD_FREQ"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                active_tasks "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("count_active_tasks")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("CALC_LOAD")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("avenrun"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" EXP_1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" active_tasks"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("CALC_LOAD")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("avenrun"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" EXP_5"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" active_tasks"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("CALC_LOAD")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("avenrun"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" EXP_15"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" active_tasks"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br"),e("span",{staticClass:"line-number"},[t._v("23")]),e("br"),e("span",{staticClass:"line-number"},[t._v("24")]),e("br"),e("span",{staticClass:"line-number"},[t._v("25")]),e("br"),e("span",{staticClass:"line-number"},[t._v("26")]),e("br"),e("span",{staticClass:"line-number"},[t._v("27")]),e("br"),e("span",{staticClass:"line-number"},[t._v("28")]),e("br"),e("span",{staticClass:"line-number"},[t._v("29")]),e("br")])]),e("blockquote",[e("p",[t._v("有兴趣的朋友可以研究一下，是如何计算的。代码中的后面这部分相当于它的计算公式。")])]),t._v(" "),e("p",[t._v("我们回归正题，来看 top 的第二行数据，基本上第二行是进程的一个情况统计：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("内容")]),t._v(" "),e("th",[t._v("解释")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Tasks: 26 total")]),t._v(" "),e("td",[t._v("进程总数")])]),t._v(" "),e("tr",[e("td",[t._v("1 running")]),t._v(" "),e("td",[t._v("1 个正在运行的进程数")])]),t._v(" "),e("tr",[e("td",[t._v("25 sleeping")]),t._v(" "),e("td",[t._v("25 个睡眠的进程数")])]),t._v(" "),e("tr",[e("td",[t._v("0 stopped")]),t._v(" "),e("td",[t._v("没有停止的进程数")])]),t._v(" "),e("tr",[e("td",[t._v("0 zombie")]),t._v(" "),e("td",[t._v("没有僵尸进程数")])])])]),t._v(" "),e("p",[t._v("来看 top 的第三行数据，这一行基本上是 CPU 的一个使用情况的统计了：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("内容")]),t._v(" "),e("th",[t._v("解释")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("Cpu(s): 1.0%us")])]),t._v(" "),e("td",[t._v("用户空间进程占用 CPU 百分比")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("1.0% sy")])]),t._v(" "),e("td",[t._v("内核空间运行占用 CPU 百分比")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("0.0%ni")])]),t._v(" "),e("td",[t._v("用户进程空间内改变过优先级的进程占用 CPU 百分比")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("97.9%id")])]),t._v(" "),e("td",[t._v("空闲 CPU 百分比")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("0.0%wa")])]),t._v(" "),e("td",[t._v("等待输入输出的 CPU 时间百分比")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("0.1%hi")])]),t._v(" "),e("td",[t._v("硬中断(Hardware IRQ)占用 CPU 的百分比")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("0.0%si")])]),t._v(" "),e("td",[t._v("软中断(Software IRQ)占用 CPU 的百分比")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("0.0%st")])]),t._v(" "),e("td",[t._v("(Steal time) 是 hypervisor 等虚拟服务中，虚拟 CPU 等待实际 CPU 的时间的百分比")])])])]),t._v(" "),e("p",[t._v("CPU 利用率是对一个时间段内 CPU 使用状况的统计，通过这个指标可以看出在某一个时间段内 CPU 被占用的情况，而 Load Average 是 CPU 的 Load，它所包含的信息不是 CPU 的使用率状况，而是在一段时间内 CPU 正在处理以及等待 CPU 处理的进程数情况统计信息，这两个指标并不一样。")]),t._v(" "),e("p",[t._v("来看 top 的第四行数据，这一行基本上是内存的一个使用情况的统计了：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("内容")]),t._v(" "),e("th",[t._v("解释")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("8176740 total")]),t._v(" "),e("td",[t._v("物理内存总量")])]),t._v(" "),e("tr",[e("td",[t._v("8032104 used")]),t._v(" "),e("td",[t._v("使用的物理内存总量")])]),t._v(" "),e("tr",[e("td",[t._v("144636 free")]),t._v(" "),e("td",[t._v("空闲内存总量")])]),t._v(" "),e("tr",[e("td",[t._v("313088 buffers")]),t._v(" "),e("td",[t._v("用作内核缓存的内存量")])])])]),t._v(" "),e("p",[e("strong",[t._v("注意：")])]),t._v(" "),e("blockquote",[e("p",[t._v("系统中可用的物理内存最大值并不是 free 这个单一的值，而是 free + buffers + swap 中的 cached 的和。")])]),t._v(" "),e("p",[t._v("来看 top 的第五行数据，这一行基本上是交换区的一个使用情况的统计了：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("内容")]),t._v(" "),e("th",[t._v("解释")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("total")]),t._v(" "),e("td",[t._v("交换区总量")])]),t._v(" "),e("tr",[e("td",[t._v("used")]),t._v(" "),e("td",[t._v("使用的交换区总量")])]),t._v(" "),e("tr",[e("td",[t._v("free")]),t._v(" "),e("td",[t._v("空闲交换区总量")])]),t._v(" "),e("tr",[e("td",[t._v("cached")]),t._v(" "),e("td",[t._v("缓冲的交换区总量，内存中的内容被换出到交换区，而后又被换入到内存，但使用过的交换区尚未被覆盖")])])])]),t._v(" "),e("p",[t._v("再下面就是进程的一个情况了")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("列名")]),t._v(" "),e("th",[t._v("解释")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("PID")]),t._v(" "),e("td",[t._v("进程 id")])]),t._v(" "),e("tr",[e("td",[t._v("USER")]),t._v(" "),e("td",[t._v("该进程的所属用户")])]),t._v(" "),e("tr",[e("td",[t._v("PR")]),t._v(" "),e("td",[t._v("该进程执行的优先级 priority 值")])]),t._v(" "),e("tr",[e("td",[t._v("NI")]),t._v(" "),e("td",[t._v("该进程的 nice 值")])]),t._v(" "),e("tr",[e("td",[t._v("VIRT")]),t._v(" "),e("td",[t._v("该进程任务所使用的虚拟内存的总数")])]),t._v(" "),e("tr",[e("td",[t._v("RES")]),t._v(" "),e("td",[t._v("该进程所使用的物理内存数，也称之为驻留内存数")])]),t._v(" "),e("tr",[e("td",[t._v("SHR")]),t._v(" "),e("td",[t._v("该进程共享内存的大小")])]),t._v(" "),e("tr",[e("td",[t._v("S")]),t._v(" "),e("td",[t._v("该进程进程的状态: S=sleep R=running Z=zombie")])]),t._v(" "),e("tr",[e("td",[t._v("%CPU")]),t._v(" "),e("td",[t._v("该进程 CPU 的利用率")])]),t._v(" "),e("tr",[e("td",[t._v("%MEM")]),t._v(" "),e("td",[t._v("该进程内存的利用率")])]),t._v(" "),e("tr",[e("td",[t._v("TIME+")]),t._v(" "),e("td",[t._v("该进程活跃的总时间")])]),t._v(" "),e("tr",[e("td",[t._v("COMMAND")]),t._v(" "),e("td",[t._v("该进程运行的名字")])])])]),t._v(" "),e("p",[e("strong",[t._v("注意:")])]),t._v(" "),e("p",[e("strong",[t._v("NICE 值")]),t._v("叫做静态优先级，是用户空间的一个优先级值，其取值范围是 -20 至 19。这个值越小，表示进程”优先级”越高，而值越大“优先级”越低。nice 值中的 -20 到 19，中 -20 优先级最高， 0 是默认的值，而 19 优先级最低。")]),t._v(" "),e("p",[e("strong",[t._v("PR 值")]),t._v("表示 Priority 值叫动态优先级，是进程在内核中实际的优先级值，进程优先级的取值范围是通过一个宏定义的，这个宏的名称是 "),e("code",[t._v("MAX_PRIO")]),t._v("，它的值为 140。Linux 实际上实现了 140 个优先级范围，取值范围是从 "),e("code",[t._v("0-139")]),t._v("，这个值越小，优先级越高。而这其中的 "),e("code",[t._v("0-99")]),t._v(" 是实时进程的值，而 "),e("code",[t._v("100-139")]),t._v(" 是给用户的。")]),t._v(" "),e("p",[t._v("其中 PR 中的 "),e("code",[t._v("100 to 139")]),t._v(" 值部分有这么一个对应 "),e("code",[t._v("PR = 20 + (-20 to +19)")]),t._v("，这里的 "),e("code",[t._v("-20 to +19")]),t._v(" 便是 nice 值，所以说两个虽然都是优先级，而且有千丝万缕的关系，但是他们的值，他们的作用范围并不相同。")]),t._v(" "),e("p",[e("strong",[t._v("VIRT")]),t._v(" 任务所使用的虚拟内存的总数，其中包含所有的代码，数据，共享库和被换出 swap 空间的页面等所占据空间的总数。")]),t._v(" "),e("p",[t._v("在上文我们曾经说过 top 是一个前台程序，所以是一个可以交互的：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("常用交互命令")]),t._v(" "),e("th",[t._v("解释")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("q")]),t._v(" "),e("td",[t._v("退出程序")])]),t._v(" "),e("tr",[e("td",[t._v("I")]),t._v(" "),e("td",[t._v("切换显示平均负载和启动时间的信息")])]),t._v(" "),e("tr",[e("td",[t._v("P")]),t._v(" "),e("td",[t._v("根据 CPU 使用百分比大小进行排序")])]),t._v(" "),e("tr",[e("td",[t._v("M")]),t._v(" "),e("td",[t._v("根据驻留内存大小进行排序")])]),t._v(" "),e("tr",[e("td",[t._v("i")]),t._v(" "),e("td",[t._v("忽略闲置和僵死的进程，这是一个开关式命令")])]),t._v(" "),e("tr",[e("td",[t._v("k")]),t._v(" "),e("td",[t._v("终止一个进程，系统提示输入 PID 及发送的信号值。一般终止进程用 15 信号，不能正常结束则使用 9 信号。安全模式下该命令被屏蔽。")])])])]),t._v(" "),e("p",[t._v("好好的利用 top 能够很有效的帮助我们观察到系统的瓶颈所在，或者是系统的问题所在。")]),t._v(" "),e("h3",{attrs:{id:"ps-工具的使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ps-工具的使用"}},[t._v("#")]),t._v(" ps 工具的使用")]),t._v(" "),e("p",[t._v("ps 也是我们最常用的查看进程的工具之一，我们通过这样的一个命令来了解一下，它能给我们带来哪些信息：")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" aux\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:a(592),alt:"image-20220531200330511"}})]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" axjf\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:a(593),alt:"image-20220531200335953"}})]),t._v(" "),e("p",[t._v("我们来总体了解下会出现哪些信息给我们，这些信息又代表着什么（更多的 keywords 大家可以通过 "),e("code",[t._v("man ps")]),t._v(" 了解）。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("内容")]),t._v(" "),e("th",[t._v("解释")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("F")])]),t._v(" "),e("td",[t._v("进程的标志（process flags），当 flags 值为 1 则表示此子程序只是 fork 但没有执行 exec，为 4 表示此程序使用超级管理员 root 权限")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("USER")])]),t._v(" "),e("td",[t._v("进程的拥有用户")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("PID")])]),t._v(" "),e("td",[t._v("进程的 ID")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("PPID")])]),t._v(" "),e("td",[t._v("其父进程的 PID")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("SID")])]),t._v(" "),e("td",[t._v("session 的 ID")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("TPGID")])]),t._v(" "),e("td",[t._v("前台进程组的 ID")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("%CPU")])]),t._v(" "),e("td",[t._v("进程占用的 CPU 百分比")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("%MEM")])]),t._v(" "),e("td",[t._v("占用内存的百分比")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("NI")])]),t._v(" "),e("td",[t._v("进程的 NICE 值")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("VSZ")])]),t._v(" "),e("td",[t._v("进程使用虚拟内存大小")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("RSS")])]),t._v(" "),e("td",[t._v("驻留内存中页的大小")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("TTY")])]),t._v(" "),e("td",[t._v("终端 ID")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("S or STAT")])]),t._v(" "),e("td",[t._v("进程状态")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("WCHAN")])]),t._v(" "),e("td",[t._v("正在等待的进程资源")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("START")])]),t._v(" "),e("td",[t._v("启动进程的时间")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("TIME")])]),t._v(" "),e("td",[t._v("进程消耗 CPU 的时间")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("COMMAND")])]),t._v(" "),e("td",[t._v("命令的名称和参数")])])])]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("TPGID")]),t._v("栏写着-1 的都是没有控制终端的进程，也就是守护进程")])]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("STAT")]),t._v("表示进程的状态，而进程的状态有很多，如下表所示")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("状态")]),t._v(" "),e("th",[t._v("解释")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("R")])]),t._v(" "),e("td",[t._v("Running.运行中")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("S")])]),t._v(" "),e("td",[t._v("Interruptible Sleep.等待调用")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("D")])]),t._v(" "),e("td",[t._v("Uninterruptible Sleep.不可中断睡眠")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("T")])]),t._v(" "),e("td",[t._v("Stoped.暂停或者跟踪状态")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("X")])]),t._v(" "),e("td",[t._v("Dead.即将被撤销")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("Z")])]),t._v(" "),e("td",[t._v("Zombie.僵尸进程")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("W")])]),t._v(" "),e("td",[t._v("Paging.内存交换")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("N")])]),t._v(" "),e("td",[t._v("优先级低的进程")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("<")])]),t._v(" "),e("td",[t._v("优先级高的进程")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("s")])]),t._v(" "),e("td",[t._v("进程的领导者")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("L")])]),t._v(" "),e("td",[t._v("锁定状态")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("l")])]),t._v(" "),e("td",[t._v("多线程状态")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("+")])]),t._v(" "),e("td",[t._v("前台进程")])])])]),t._v(" "),e("blockquote",[e("p",[t._v("其中的 D 是不能被中断睡眠的状态，处在这种状态的进程不接受外来的任何 signal，所以无法使用 kill 命令杀掉处于 D 状态的进程，无论是 "),e("code",[t._v("kill")]),t._v("，"),e("code",[t._v("kill -9")]),t._v(" 还是 "),e("code",[t._v("kill -15")]),t._v("，一般处于这种状态可能是进程 I/O 的时候出问题了。")])]),t._v(" "),e("p",[t._v("ps 工具有许多的参数，下面给大家解释部分常用的参数。")]),t._v(" "),e("p",[t._v("使用 "),e("code",[t._v("-l")]),t._v(" 参数可以显示自己这次登录的 bash 相关的进程信息罗列出来：")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" -l\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:a(594),alt:"image-20220531200341761"}})]),t._v(" "),e("p",[t._v("相对来说我们更加常用下面这个命令，他将会罗列出所有的进程信息：")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" aux\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:a(595),alt:"image-20220531200346670"}})]),t._v(" "),e("p",[t._v("若是查找其中的某个进程的话，我们还可以配合着 "),e("code",[t._v("grep")]),t._v(" 和正则表达式一起使用：")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" aux "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("zsh")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:a(596),alt:"image-20220531200351513"}})]),t._v(" "),e("p",[t._v("此外我们还可以查看时，将连同部分的进程呈树状显示出来：")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" axjf\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:a(597),alt:"image-20220531200356038"}})]),t._v(" "),e("p",[t._v("当然如果你觉得使用这样的此时没有把你想要的信息放在一起，我们也可以是用这样的命令，来自定义我们所需要的参数显示：")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" -afxo user,ppid,pid,pgid,command\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:a(598),alt:"image-20220531200400443"}})]),t._v(" "),e("p",[t._v("这是一个简单而又实用的工具，想要更灵活的使用，想要知道更多的参数我们可以使用 man 来获取更多相关的信息。")]),t._v(" "),e("h3",{attrs:{id:"pstree-工具的使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pstree-工具的使用"}},[t._v("#")]),t._v(" pstree 工具的使用")]),t._v(" "),e("p",[t._v("通过 "),e("code",[t._v("pstree")]),t._v(" 可以很直接的看到相同的进程数量，最主要的还是我们可以看到所有进程之间的相关性。")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("pstree\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:a(599),alt:"image-20220531200405376"}})]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("pstree -up\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("table",[e("thead",[e("tr",[e("th",[t._v("参数选择")]),t._v(" "),e("th",[t._v("解释")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("-A")]),t._v(" "),e("td",[t._v("程序树之间以 ASCII 字符连接")])]),t._v(" "),e("tr",[e("td",[t._v("-p")]),t._v(" "),e("td",[t._v("同时列出每个 process 的 PID")])]),t._v(" "),e("tr",[e("td",[t._v("-u")]),t._v(" "),e("td",[t._v("同时列出每个 process 的所属账户名称")])])])]),t._v(" "),e("p",[e("img",{attrs:{src:a(600),alt:"image-20220531200410583"}})]),t._v(" "),e("h2",{attrs:{id:"进程的管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进程的管理"}},[t._v("#")]),t._v(" 进程的管理")]),t._v(" "),e("h3",{attrs:{id:"kill-命令的掌握"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kill-命令的掌握"}},[t._v("#")]),t._v(" kill 命令的掌握")]),t._v(" "),e("p",[t._v("上个实验中我们讲诉了进程之间是如何衍生，之间又有什么相关性，我们来回顾一下，当一个进程结束的时候或者要异常结束的时候，会向其父进程返回一个或者接收一个 SIGHUP 信号而做出的结束进程或者其他的操作，这个 SIGHUP 信号不仅可以由系统发送，我们可以使用 "),e("code",[t._v("kill")]),t._v(" 来发送这个信号来操作进程的结束或者重启等等。")]),t._v(" "),e("p",[t._v("上节课程我们使用 "),e("code",[t._v("kill")]),t._v(" 命令来管理我们的一些 job，这节课我们将尝试用 "),e("code",[t._v("kill")]),t._v(" 来操作下一些不属于 job 范畴的进程，直接对 pid 下手。")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 首先我们使用图形界面打开了 gedit、gvim，用 ps 可以查看到")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" aux\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用 9 这个信号强制结束 gedit 进程")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("kill")]),t._v(" -9 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1608")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 我们再查找这个进程的时候就找不到了")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" aux "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" gedit\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])]),e("p",[e("img",{attrs:{src:a(601),alt:"image-20220531200417017"}})]),t._v(" "),e("p",[e("img",{attrs:{src:a(602),alt:"image-20220531200421617"}})]),t._v(" "),e("h3",{attrs:{id:"进程的执行顺序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进程的执行顺序"}},[t._v("#")]),t._v(" 进程的执行顺序")]),t._v(" "),e("p",[t._v("我们在使用 ps 命令的时候可以看到大部分的进程都是处于休眠的状态，如果这些进程都被唤醒，那么该谁最先享受 CPU 的服务，后面的进程又该是一个什么样的顺序呢？进程调度的队列又该如何去排列呢？")]),t._v(" "),e("p",[t._v("当然就是靠该进程的优先级值来判定进程调度的优先级，而优先级的值就是上文所提到的 PR 与 nice 来控制与体现了")]),t._v(" "),e("p",[t._v("而 nice 的值我们是可以通过 nice 命令来修改的，而需要注意的是 nice 值可以调整的范围是 "),e("code",[t._v("-20 ~ 19")]),t._v("，其中 root 有着至高无上的权力，既可以调整自己的进程也可以调整其他用户的程序，并且是所有的值都可以用，而普通用户只可以调制属于自己的进程，并且其使用的范围只能是 "),e("code",[t._v("0 ~ 19")]),t._v("，因为系统为了避免一般用户抢占系统资源而设置的一个限制")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这个实验在环境中无法做，因为权限不够，可以自己在本地尝试")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打开一个程序放在后台，或者用图形界面打开")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("nice")]),t._v(" -n -5 "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 用 ps 查看其优先级")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" -afxo user,ppid,pid,stat,pri,ni,time,command "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])]),e("p",[t._v("我们还可以用 renice 来修改已经存在的进程的优先级，同样因为权限的原因在实验环境中无法尝试。")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("renice")]),t._v(" -5 pid\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])])}),[],!1,null,null,null);s.default=n.exports},591:function(t,s,a){t.exports=a.p+"assets/img/image-20220531200321807.3f8e157f.png"},592:function(t,s,a){t.exports=a.p+"assets/img/image-20220531200330511.06067700.png"},593:function(t,s,a){t.exports=a.p+"assets/img/image-20220531200335953.531a474b.png"},594:function(t,s,a){t.exports=a.p+"assets/img/image-20220531200341761.09e2bb96.png"},595:function(t,s,a){t.exports=a.p+"assets/img/image-20220531200346670.5cc2c0e1.png"},596:function(t,s,a){t.exports=a.p+"assets/img/image-20220531200351513.838a9e6f.png"},597:function(t,s,a){t.exports=a.p+"assets/img/image-20220531200356038.d013febf.png"},598:function(t,s,a){t.exports=a.p+"assets/img/image-20220531200400443.c4b43c1d.png"},599:function(t,s,a){t.exports=a.p+"assets/img/image-20220531200405376.7c9f604f.png"},600:function(t,s,a){t.exports=a.p+"assets/img/image-20220531200410583.a653f9fe.png"},601:function(t,s,a){t.exports=a.p+"assets/img/image-20220531200417017.c73121c1.png"},602:function(t,s,a){t.exports=a.p+"assets/img/image-20220531200421617.a237fcbe.png"}}]);