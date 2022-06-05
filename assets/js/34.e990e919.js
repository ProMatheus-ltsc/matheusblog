(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1562:function(s,a,t){"use strict";t.r(a);var n=t(65),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"命令执行顺序控制与管道"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#命令执行顺序控制与管道"}},[s._v("#")]),s._v(" 命令执行顺序控制与管道")]),s._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#顺序执行多条命令"}},[s._v("顺序执行多条命令")])]),n("li",[n("a",{attrs:{href:"#有选择的执行命令"}},[s._v("有选择的执行命令")])]),n("li",[n("a",{attrs:{href:"#管道"}},[s._v("管道")]),n("ul",[n("li",[n("a",{attrs:{href:"#试用"}},[s._v("试用")])]),n("li",[n("a",{attrs:{href:"#_3-2-cut-命令-打印每一行的某一字段"}},[s._v("3.2 cut 命令，打印每一行的某一字段")])]),n("li",[n("a",{attrs:{href:"#_3-3-grep-命令-在文本中或-stdin-中查找匹配字符串"}},[s._v("3.3 grep 命令，在文本中或 stdin 中查找匹配字符串")])]),n("li",[n("a",{attrs:{href:"#_3-4-wc-命令-简单小巧的计数工具"}},[s._v("3.4 wc 命令，简单小巧的计数工具")])]),n("li",[n("a",{attrs:{href:"#_3-5-sort-排序命令"}},[s._v("3.5 sort 排序命令")])]),n("li",[n("a",{attrs:{href:"#_3-6-uniq-去重命令"}},[s._v("3.6 uniq 去重命令")])])])])])]),s._v("\n通常情况下，我们每次只能在终端输入一条命令，按下回车执行，执行完成后，我们再输入第二条命令，然后再按回车执行。当有时候我们会一次输入多条命令，这个时候的执行过程又是如何的呢？下面我们将为大家详细讲解下命令的执行顺序的控制问题。"),n("p"),s._v(" "),n("h2",{attrs:{id:"顺序执行多条命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#顺序执行多条命令"}},[s._v("#")]),s._v(" 顺序执行多条命令")]),s._v(" "),n("p",[s._v("当我们需要使用 "),n("code",[s._v("apt-get")]),s._v(" 安装一个软件，然后安装完成后立即运行安装的软件或命令工具，又恰巧你的主机才更换的软件源还没有更新软件列表（比如之前我们的环境中，每次重新开始实验就得 "),n("code",[s._v("sudo apt-get update")]),s._v("，否则可能会报错提示 404），那么你可能会有如下一系列操作：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 等待执行完毕，然后输入下面的命令")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" some-tool "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里 some-tool 需要替换成具体的软件包")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 等待安装完毕，然后输入软件包名称执行")]),s._v("\nsome-tool\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("这时你可能就会想：要是我可以一次性输入完，让它自己去依次执行各命令就好了，这就是我们这一小节要解决的问题。")]),s._v(" "),n("p",[s._v("简单的顺序执行你可以使用 "),n("code",[s._v(";")]),s._v(" 来完成，比如上述操作你可以：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" some-tool"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("some-tool "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 让它自己运行")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"有选择的执行命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#有选择的执行命令"}},[s._v("#")]),s._v(" 有选择的执行命令")]),s._v(" "),n("p",[s._v("关于上面的操作，不知你有没有思考过一个问题，如果我们在让它自动顺序执行命令时，前面的命令执行不成功，而后面的命令又依赖于上一条命令的结果，那么就会造成花了时间，最终却得到一个错误的结果，而且有时候直观的看你还无法判断结果是否正确。那么我们需要能够有选择性的来执行命令，比如上一条命令执行成功才继续下一条，或者不成功又该做出其它什么处理，比如我们使用 "),n("code",[s._v("which")]),s._v(" 来查找是否安装某个命令，如果找到就执行该命令，否则什么也不做，虽然这个操作没有什么实际意义，但可帮你更好的理解一些概念：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" cowsay"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/dev/null "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" cowsay -f head-in ohch~\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("你如果没有安装 "),n("code",[s._v("cowsay")]),s._v("，你可以先执行一次上述命令，你会发现什么也没发生，你再安装好之后你再执行一次上述命令，你也会发现一些惊喜。")]),s._v(" "),n("p",[s._v("上面的 "),n("code",[s._v("&&")]),s._v(" 就是用来实现选择性执行的，它表示如果前面的命令执行结果（不是表示终端输出的内容，而是表示命令执行状态的结果）返回 0 则执行后面的，否则不执行，你可以从 "),n("code",[s._v("$?")]),s._v(" 环境变量获取上一次命令的返回结果：")]),s._v(" "),n("p",[n("img",{attrs:{src:t(619),alt:"image-20220531195551796"}})]),s._v(" "),n("p",[s._v("学习过 C 语言的用户应该知道在 C 语言里面 "),n("code",[s._v("&&")]),s._v(" 表示逻辑与，而且还有一个 "),n("code",[s._v("||")]),s._v(" 表示逻辑或，同样 Shell 也有一个 "),n("code",[s._v("||")]),s._v("，它们的区别就在于，shell 中的这两个符号除了也可用于表示逻辑与和或之外，就是可以实现这里的命令执行顺序的简单控制。"),n("code",[s._v("||")]),s._v(" 在这里就是与 "),n("code",[s._v("&&")]),s._v(" 相反的控制效果，当上一条命令执行结果为 "),n("code",[s._v("≠0(\\$?≠0)")]),s._v(" 时则执行它后面的命令：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" cowsay"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/dev/null "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"cowsay has not been install, please run 'sudo apt-get install cowsay' to install\"")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("除了上述基本的使用之外，我们还可以结合着 "),n("code",[s._v("&&")]),s._v(" 和 "),n("code",[s._v("||")]),s._v(" 来实现一些操作，比如：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" cowsay"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/dev/null "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"exist"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"not exist"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("img",{attrs:{src:t(620),alt:"image-20220531195557975"}})]),s._v(" "),n("p",[s._v("我画个流程图来解释一下上面的流程：")]),s._v(" "),n("p",[n("img",{attrs:{src:t(621),alt:"image-20220531195604087"}})]),s._v(" "),n("h2",{attrs:{id:"管道"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#管道"}},[s._v("#")]),s._v(" 管道")]),s._v(" "),n("p",[s._v("管道是一种通信机制，通常用于进程间的通信（也可通过 socket 进行网络通信），它表现出来的形式就是将前面每一个进程的输出（stdout）直接作为下一个进程的输入（stdin）。")]),s._v(" "),n("p",[s._v("管道又分为匿名管道和具名管道（这里将不会讨论在源程序中使用系统调用创建并使用管道的情况，它与命令行的管道在内核中实际都是采用相同的机制）。我们在使用一些过滤程序时经常会用到的就是匿名管道，在命令行中由 "),n("code",[s._v("|")]),s._v(" 分隔符表示，"),n("code",[s._v("|")]),s._v(" 在前面的内容中我们已经多次使用到了。具名管道简单的说就是有名字的管道，通常只会在源程序中用到具名管道。下面我们就将通过一些常用的可以使用管道的过滤程序来帮助你熟练管道的使用。")]),s._v(" "),n("h3",{attrs:{id:"试用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#试用"}},[s._v("#")]),s._v(" 试用")]),s._v(" "),n("p",[s._v("先试用一下管道，比如查看 "),n("code",[s._v("/etc")]),s._v(" 目录下有哪些文件和目录，使用 "),n("code",[s._v("ls")]),s._v(" 命令来查看：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -al /etc\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("有太多内容，屏幕不能完全显示，这时候可以使用滚动条或快捷键滚动窗口来查看。不过这时候可以使用管道：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -al /etc "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("less")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("通过管道将前一个命令("),n("code",[s._v("ls")]),s._v(")的输出作为下一个命令("),n("code",[s._v("less")]),s._v(")的输入，然后就可以一行一行地看。")]),s._v(" "),n("h3",{attrs:{id:"_3-2-cut-命令-打印每一行的某一字段"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-cut-命令-打印每一行的某一字段"}},[s._v("#")]),s._v(" 3.2 cut 命令，打印每一行的某一字段")]),s._v(" "),n("p",[s._v("打印 "),n("code",[s._v("/etc/passwd")]),s._v(" 文件中以 "),n("code",[s._v(":")]),s._v(" 为分隔符的第 1 个字段和第 6 个字段分别表示用户名和其家目录：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("cut /etc/passwd -d ':' -f 1,6\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("img",{attrs:{src:t(622),alt:"image-20220531195612464"}})]),s._v(" "),n("p",[s._v("打印 "),n("code",[s._v("/etc/passwd")]),s._v(" 文件中每一行的前 N 个字符：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 前五个（包含第五个）")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" /etc/passwd -c -5\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 前五个之后的（包含第五个）")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" /etc/passwd -c "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("-\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 第五个")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" /etc/passwd -c "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2 到 5 之间的（包含第五个）")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" /etc/passwd -c "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("-5\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h3",{attrs:{id:"_3-3-grep-命令-在文本中或-stdin-中查找匹配字符串"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-grep-命令-在文本中或-stdin-中查找匹配字符串"}},[s._v("#")]),s._v(" 3.3 grep 命令，在文本中或 stdin 中查找匹配字符串")]),s._v(" "),n("p",[n("code",[s._v("grep")]),s._v(" 命令是很强大的，也是相当常用的一个命令，它结合正则表达式可以实现很复杂却很高效的匹配和查找，不过在学习正则表达式之前，这里介绍它简单的使用，而关于正则表达式后面将会有单独一小节介绍到时会再继续学习 "),n("code",[s._v("grep")]),s._v(" 命令和其他一些命令。")]),s._v(" "),n("p",[n("code",[s._v("grep")]),s._v(" 命令的一般形式为：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("命令选项"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". 用于匹配的表达式 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("文件"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("还是先体验一下，我们搜索"),n("code",[s._v("/home/shiyanlou")]),s._v('目录下所有包含"shiyanlou"的文本文件，并显示出现在文本中的行号：')]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -rnI "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shiyanlou"')]),s._v(" ~\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("img",{attrs:{src:t(623),alt:"image-20220531195618523"}})]),s._v(" "),n("p",[n("code",[s._v("-r")]),s._v(" 参数表示递归搜索子目录中的文件，"),n("code",[s._v("-n")]),s._v(" 表示打印匹配项行号，"),n("code",[s._v("-I")]),s._v(" 表示忽略二进制文件。这个操作实际没有多大意义，但可以感受到 "),n("code",[s._v("grep")]),s._v(" 命令的强大与实用。")]),s._v(" "),n("p",[s._v("当然也可以在匹配字段中使用正则表达式，下面简单的演示：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 查看环境变量中以 "yanlou" 结尾的字符串')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('".*yanlou$"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("img",{attrs:{src:t(624),alt:"image-20220531195623554"}})]),s._v(" "),n("p",[s._v("其中"),n("code",[s._v("$")]),s._v("就表示一行的末尾。")]),s._v(" "),n("h3",{attrs:{id:"_3-4-wc-命令-简单小巧的计数工具"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-wc-命令-简单小巧的计数工具"}},[s._v("#")]),s._v(" 3.4 wc 命令，简单小巧的计数工具")]),s._v(" "),n("p",[s._v("wc 命令用于统计并输出一个文件中行、单词和字节的数目，比如输出 "),n("code",[s._v("/etc/passwd")]),s._v(" 文件的统计信息：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" /etc/passwd\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("分别只输出行数、单词数、字节数、字符数和输入文本中最长一行的字节数：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 行数")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" -l /etc/passwd\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 单词数")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" -w /etc/passwd\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 字节数")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" -c /etc/passwd\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 字符数")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" -m /etc/passwd\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 最长行字节数")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" -L /etc/passwd\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[n("strong",[s._v("注意：对于西文字符来说，一个字符就是一个字节，但对于中文字符一个汉字是大于 2 个字节的，具体数目是由字符编码决定的。")])]),s._v(" "),n("p",[n("img",{attrs:{src:t(625),alt:"image-20220531195629118"}})]),s._v(" "),n("p",[s._v("再来结合管道来操作一下，下面统计 /etc 下面所有目录数：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -dl /etc/*/ "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" -l\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("img",{attrs:{src:t(626),alt:"image-20220531195634031"}})]),s._v(" "),n("h3",{attrs:{id:"_3-5-sort-排序命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-sort-排序命令"}},[s._v("#")]),s._v(" 3.5 sort 排序命令")]),s._v(" "),n("p",[s._v("这个命令前面我们也是用过多次，功能很简单就是将输入按照一定方式排序，然后再输出，它支持的排序有按字典排序，数字排序，按月份排序，随机排序，反转排序，指定特定字段进行排序等等。")]),s._v(" "),n("p",[s._v("默认为字典排序：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/passwd "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("反转排序：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/passwd "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" -r\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("按特定字段排序：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/passwd "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" -t"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("':'")]),s._v(" -k "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("上面的"),n("code",[s._v("-t")]),s._v('参数用于指定字段的分隔符，这里是以":"作为分隔符；'),n("code",[s._v("-k 字段号")]),s._v("用于指定对哪一个字段进行排序。这里"),n("code",[s._v("/etc/passwd")]),s._v("文件的第三个字段为数字，默认情况下是以字典序排序的，如果要按照数字排序就要加上"),n("code",[s._v("-n")]),s._v("参数：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/passwd "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" -t"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("':'")]),s._v(" -k "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" -n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("注意观察第二个冒号后的数字：")]),s._v(" "),n("p",[n("img",{attrs:{src:t(627),alt:"image-20220531195643464"}})]),s._v(" "),n("h3",{attrs:{id:"_3-6-uniq-去重命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-uniq-去重命令"}},[s._v("#")]),s._v(" 3.6 uniq 去重命令")]),s._v(" "),n("p",[n("code",[s._v("uniq")]),s._v(" 命令可以用于过滤或者输出重复行。")]),s._v(" "),n("ul",[n("li",[s._v("过滤重复行")])]),s._v(" "),n("p",[s._v("我们可以使用 "),n("code",[s._v("history")]),s._v(" 命令查看最近执行过的命令（实际为读取 "),n("code",[s._v("${SHELL}_history")]),s._v(" 文件，如我们环境中的 "),n("code",[s._v(".zsh_history")]),s._v(" 文件），不过你可能只想查看使用了哪个命令而不需要知道具体干了什么，那么你可能就会要想去掉命令后面的参数然后去掉重复的命令：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("history")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -c "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("- "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -d "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("' '")]),s._v(" -f "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("uniq")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("然后经过层层过滤，你会发现确是只输出了执行的命令那一列，不过去重效果好像不明显，仔细看你会发现它确实去重了，只是不那么明显，之所以不明显是因为 "),n("code",[s._v("uniq")]),s._v(" 命令只能去连续重复的行，不是全文去重，所以要达到预期效果，我们先排序：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("history")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -c "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("- "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -d "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("' '")]),s._v(" -f "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("uniq")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("history")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -c "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("- "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -d "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("' '")]),s._v(" -f "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" -u\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("这就是 Linux/UNIX 哲学吸引人的地方，大繁至简，一个命令只干一件事却能干到最好。")]),s._v(" "),n("ul",[n("li",[s._v("输出重复行")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出重复过的行（重复的只输出一个）及重复次数")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("history")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -c "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("- "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -d "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("' '")]),s._v(" -f "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("uniq")]),s._v(" -dc\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出所有重复的行")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("history")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -c "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("- "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -d "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("' '")]),s._v(" -f "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("uniq")]),s._v(" -D\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("文本处理命令还有很多，下一节将继续介绍一些常用的文本处理的命令。")]),s._v(" "),n("h4",{attrs:{id:"轻松一下"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#轻松一下"}},[s._v("#")]),s._v(" 轻松一下")]),s._v(" "),n("p",[s._v("使用以前介绍过的方法，安装"),n("code",[s._v("aview")]),s._v("和"),n("code",[s._v("imagemagick")]),s._v("，然后用"),n("code",[s._v("asciiview")]),s._v("命令显示图片，使用方法可以用 man 命令查看。")]),s._v(" "),n("p",[s._v("Linus 大神的照片地址 https://labfile.oss.aliyuncs.com/courses/1/Linus.png")]),s._v(" "),n("p",[n("img",{attrs:{src:t(628),alt:"image-20220531195652859"}})]),s._v(" "),n("p",[s._v("执行以下命令安装工具包并下载图片：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y aview imagemagick\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://labfile.oss.aliyuncs.com/courses/1/Linus.png\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("执行 "),n("code",[s._v("asciiview [图片文件名]")]),s._v(" 即可打开图片：")]),s._v(" "),n("p",[n("img",{attrs:{src:t(629),alt:"image-20220531195658474"}})])])}),[],!1,null,null,null);a.default=e.exports},619:function(s,a,t){s.exports=t.p+"assets/img/image-20220531195551796.d94e08b1.png"},620:function(s,a,t){s.exports=t.p+"assets/img/image-20220531195557975.332db632.png"},621:function(s,a,t){s.exports=t.p+"assets/img/image-20220531195604087.f5a79949.png"},622:function(s,a,t){s.exports=t.p+"assets/img/image-20220531195612464.876918de.png"},623:function(s,a,t){s.exports=t.p+"assets/img/image-20220531195618523.3b28c912.png"},624:function(s,a,t){s.exports=t.p+"assets/img/image-20220531195623554.978557c9.png"},625:function(s,a,t){s.exports=t.p+"assets/img/image-20220531195629118.7bbb79a8.png"},626:function(s,a){s.exports="data:image/png;base64,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"},627:function(s,a,t){s.exports=t.p+"assets/img/image-20220531195643464.3770fcd4.png"},628:function(s,a,t){s.exports=t.p+"assets/img/image-20220531195652859.09b6a8a7.png"},629:function(s,a,t){s.exports=t.p+"assets/img/image-20220531195658474.887e46f4.png"}}]);