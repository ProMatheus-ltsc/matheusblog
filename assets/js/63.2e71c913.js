(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{1556:function(s,a,t){"use strict";t.r(a);var n=t(24),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"linux下的帮助命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#linux下的帮助命令"}},[s._v("#")]),s._v(" Linux下的帮助命令")]),s._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#内建命令与外建命令"}},[s._v("内建命令与外建命令")])]),n("li",[n("a",{attrs:{href:"#帮助命令的使用"}},[s._v("帮助命令的使用")]),n("ul",[n("li",[n("a",{attrs:{href:"#help命令"}},[s._v("help命令")])]),n("li",[n("a",{attrs:{href:"#man命令"}},[s._v("man命令")])]),n("li",[n("a",{attrs:{href:"#info命令"}},[s._v("info命令")])])])])])]),n("p"),s._v(" "),n("h2",{attrs:{id:"内建命令与外建命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#内建命令与外建命令"}},[s._v("#")]),s._v(" 内建命令与外建命令")]),s._v(" "),n("p",[s._v("什么是内建命令，什么是外部命令呢？这和帮助命令又有什么关系呢？")]),s._v(" "),n("p",[s._v("因为有一些查看帮助的工具在内建命令与外建命令上是有区别对待的。")]),s._v(" "),n("blockquote",[n("p",[n("strong",[s._v("内建命令")]),s._v("实际上是 shell 程序的一部分，其中包含的是一些比较简单的 Linux 系统命令，这些命令是写在 bash 源码的 builtins 里面的，由 shell 程序识别并在 shell 程序内部完成运行，通常在 Linux 系统加载运行时 shell 就被加载并驻留在系统内存中。而且解析内部命令 shell 不需要创建子进程，因此其执行速度比外部命令快。比如：history、cd、exit 等等。")])]),s._v(" "),n("blockquote",[n("p",[n("strong",[s._v("外部命令")]),s._v("是 Linux 系统中的实用程序部分，因为实用程序的功能通常都比较强大，所以其包含的程序量也会很大，在系统加载时并不随系统一起被加载到内存中，而是在需要时才将其调入内存。虽然其不包含在 shell 中，但是其命令执行过程是由 shell 程序控制的。外部命令是在 Bash 之外额外安装的，通常放在/bin，/usr/bin，/sbin，/usr/sbin 等等。比如：ls、vi 等。")])]),s._v(" "),n("p",[s._v("简单来说就是：一个是天生自带的天赋技能，一个是后天得来的附加技能。我们可以使用 type 命令来区分命令是内建的还是外部的。例如这两个得出的结果是不同的")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("得到的是两种结果，若是对 ls 你还能得到第三种结果")]),s._v(" "),n("p",[n("img",{attrs:{src:t(600),alt:"image-20220531195342153"}})]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 得到这样的结果说明是内建命令，正如上文所说内建命令都是在 bash 源码中的 builtins 的.def中")]),s._v("\nxxx is a shell "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("builtin")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 得到这样的结果说明是外部命令，正如上文所说，外部命令在/usr/bin or /usr/sbin等等中")]),s._v("\nxxx is /usr/bin/xxx\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 若是得到alias的结果，说明该指令为命令别名所设定的名称；")]),s._v("\nxxx is an "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" xx --xxx\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h2",{attrs:{id:"帮助命令的使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#帮助命令的使用"}},[s._v("#")]),s._v(" 帮助命令的使用")]),s._v(" "),n("h3",{attrs:{id:"help命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#help命令"}},[s._v("#")]),s._v(" help命令")]),s._v(" "),n("p",[s._v("本实验环境是 zsh，而 zsh 中内置并没有 help 命令，我们可以进入 bash 中，在 bash 中内置有该命令")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("做好了以上的准备，我们就可以愉快的使用 help 命令了，我们可以尝试下这个命令:")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("得到的结果如图所示，为什么是这样的结果？")]),s._v(" "),n("p",[n("img",{attrs:{src:t(601),alt:"image-20220531195347726"}})]),s._v(" "),n("p",[s._v("因为 help 命令是用于显示 shell 内建命令的简要帮助信息。帮助信息中显示有该命令的简要说明以及一些参数的使用以及说明，一定记住 help 命令只能用于显示内建命令的帮助信息，不然就会得到你刚刚得到的结果。")]),s._v(" "),n("p",[s._v("那如果是外部命令怎么办，不能就这么抛弃它呀。其实外部命令基本上都有一个参数 "),n("code",[s._v("--help")]),s._v("，这样就可以得到相应的帮助，看到你想要的东西了。试试下面这个命令是不是能看到你想要的东西了。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" --help\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("img",{attrs:{src:t(602),alt:"image-20220531195353148"}})]),s._v(" "),n("h3",{attrs:{id:"man命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#man命令"}},[s._v("#")]),s._v(" man命令")]),s._v(" "),n("p",[s._v("你可以尝试下这个命令")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("man")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("img",{attrs:{src:t(603),alt:"image-20220531195358021"}})]),s._v(" "),n("p",[s._v("得到的内容比用 help 更多更详细，而且 man 没有内建与外部命令的区分，因为 man 工具是显示系统手册页中的内容，也就是一本电子版的字典，这些内容大多数都是对命令的解释信息，还有一些相关的描述。通过查看系统文档中的 man 也可以得到程序的更多相关信息和 Linux 的更多特性。")]),s._v(" "),n("p",[s._v("是不是好用许多，当然也不代表 help 就没有存在的必要，当你非常紧急只是忘记该用哪个参数的时候，help 这种显示简单扼要的信息就特别实用，若是不太紧急的时候就可以用 man 这种详细描述的查询方式")]),s._v(" "),n("p",[s._v("在尝试上面这个命令时我们会发现最左上角显示“ LS （1）”，在这里，“ LS ”表示手册名称，而“（1）”表示该手册位于第一章节。这个章节又是什么？在 man 手册中一共有这么几个章节")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("章节数")]),s._v(" "),n("th",[s._v("说明")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[n("code",[s._v("1")])]),s._v(" "),n("td",[s._v("Standard commands （标准命令）")])]),s._v(" "),n("tr",[n("td",[n("code",[s._v("2")])]),s._v(" "),n("td",[s._v("System calls （系统调用）")])]),s._v(" "),n("tr",[n("td",[n("code",[s._v("3")])]),s._v(" "),n("td",[s._v("Library functions （库函数）")])]),s._v(" "),n("tr",[n("td",[n("code",[s._v("4")])]),s._v(" "),n("td",[s._v("Special devices （设备说明）")])]),s._v(" "),n("tr",[n("td",[n("code",[s._v("5")])]),s._v(" "),n("td",[s._v("File formats （文件格式）")])]),s._v(" "),n("tr",[n("td",[n("code",[s._v("6")])]),s._v(" "),n("td",[s._v("Games and toys （游戏和娱乐）")])]),s._v(" "),n("tr",[n("td",[n("code",[s._v("7")])]),s._v(" "),n("td",[s._v("Miscellaneous （杂项）")])]),s._v(" "),n("tr",[n("td",[n("code",[s._v("8")])]),s._v(" "),n("td",[s._v("Administrative Commands （管理员命令）")])]),s._v(" "),n("tr",[n("td",[n("code",[s._v("9")])]),s._v(" "),n("td",[s._v("其他（Linux 特定的）， 用来存放内核例行程序的文档。")])])])]),s._v(" "),n("p",[s._v("打开手册之后我们可以通过 pgup 与 pgdn 或者上下键来上下翻看，可以按 q 退出当前页面")]),s._v(" "),n("h3",{attrs:{id:"info命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#info命令"}},[s._v("#")]),s._v(" info命令")]),s._v(" "),n("p",[s._v("要是你觉得 man 显示的信息都还不够，满足不了你的需求，那试试 info 命令，注意实验楼的环境中没有安装 info，可以手动安装，安装和操作步骤如下：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 info")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" info\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看 ls 命令的 info")]),s._v("\ninfo "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[n("img",{attrs:{src:t(604),alt:"image-20220531195404561"}})]),s._v(" "),n("p",[s._v("得到的信息是不是比 man 还要多了，info 来自自由软件基金会的 GNU 项目，是 GNU 的超文本帮助系统，能够更完整的显示出 GNU 信息。所以得到的信息当然更多")]),s._v(" "),n("p",[s._v("man 和 info 就像两个集合，它们有一个交集部分，但与 man 相比，info 工具可显示更完整的 GNU 工具信息。若 man 页包含的某个工具的概要信息在 info 中也有介绍，那么 man 页中会有“请参考 info 页更详细内容”的字样。")])])}),[],!1,null,null,null);a.default=e.exports},600:function(s,a,t){s.exports=t.p+"assets/img/image-20220531195342153.9af7aad5.png"},601:function(s,a,t){s.exports=t.p+"assets/img/image-20220531195347726.1c2e421a.png"},602:function(s,a,t){s.exports=t.p+"assets/img/image-20220531195353148.6defcf76.png"},603:function(s,a,t){s.exports=t.p+"assets/img/image-20220531195358021.457caf1c.png"},604:function(s,a,t){s.exports=t.p+"assets/img/image-20220531195404561.a91459c2.png"}}]);