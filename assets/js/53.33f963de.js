(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{1378:function(s,a,t){"use strict";t.r(a);var e=t(24),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"数据流重定向"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据流重定向"}},[s._v("#")]),s._v(" 数据流重定向")]),s._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#简单的重定向"}},[s._v("简单的重定向")])]),e("li",[e("a",{attrs:{href:"#标准错误重定向"}},[s._v("标准错误重定向")])]),e("li",[e("a",{attrs:{href:"#使用-tee-命令同时重定向到多个文件"}},[s._v("使用 tee 命令同时重定向到多个文件")])]),e("li",[e("a",{attrs:{href:"#永久重定向"}},[s._v("永久重定向")])]),e("li",[e("a",{attrs:{href:"#创建输出文件描述符"}},[s._v("创建输出文件描述符")])]),e("li",[e("a",{attrs:{href:"#关闭文件描述符"}},[s._v("关闭文件描述符")])]),e("li",[e("a",{attrs:{href:"#完全屏蔽命令的输出"}},[s._v("完全屏蔽命令的输出")])]),e("li",[e("a",{attrs:{href:"#使用-xargs-分割参数列表"}},[s._v("使用 xargs 分割参数列表")])])])]),s._v("\n你可能对重定向这个概念感到些许陌生，但你应该在前面的课程中多次见过 "),e("code",[s._v(">")]),s._v(" 或 "),e("code",[s._v(">>")]),s._v(" 操作了，并知道他们分别是将标准输出导向一个文件或追加到一个文件中。这其实就是重定向，将原本输出到标准输出的数据重定向到一个文件中，因为标准输出("),e("code",[s._v("/dev/stdout")]),s._v(")本身也是一个文件，我们将命令输出导向另一个文件自然也是没有任何问题的。"),e("p"),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello shiyanlou'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" redirect\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'www.shiyanlou.com'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" redirect\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" redirect\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("blockquote",[e("p",[s._v("当然前面没有用到的 "),e("code",[s._v("<")]),s._v(" 和 "),e("code",[s._v("<<")]),s._v(" 操作也是没有问题的，如你理解的一样，它们的区别在于重定向的方向不一致而已，"),e("code",[s._v(">")]),s._v(" 表示是从左到右，"),e("code",[s._v("<")]),s._v(" 右到左。")])]),s._v(" "),e("h3",{attrs:{id:"简单的重定向"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简单的重定向"}},[s._v("#")]),s._v(" 简单的重定向")]),s._v(" "),e("p",[s._v("在更多了解 Linux 的重定向之前，我们需要先知道一些基本的东西，前面我们已经提到过 Linux 默认提供了三个特殊设备，用于终端的显示和输出，分别为 "),e("code",[s._v("stdin")]),s._v("（标准输入，对应于你在终端的输入），"),e("code",[s._v("stdout")]),s._v("（标准输出，对应于终端的输出），"),e("code",[s._v("stderr")]),s._v("（标准错误输出，对应于终端的输出）。")]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("文件描述符")]),s._v(" "),e("th",[s._v("设备文件")]),s._v(" "),e("th",[s._v("说明")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[e("code",[s._v("0")])]),s._v(" "),e("td",[e("code",[s._v("/dev/stdin")])]),s._v(" "),e("td",[s._v("标准输入")])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("1")])]),s._v(" "),e("td",[e("code",[s._v("/dev/stdout")])]),s._v(" "),e("td",[s._v("标准输出")])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("2")])]),s._v(" "),e("td",[e("code",[s._v("/dev/stderr")])]),s._v(" "),e("td",[s._v("标准错误")])])])]),s._v(" "),e("blockquote",[e("p",[s._v("文件描述符：文件描述符在形式上是一个非负整数。实际上，它是一个索引值，指向内核为每一个进程所维护的该进程打开文件的记录表。当程序打开一个现有文件或者创建一个新文件时，内核向进程返回一个文件描述符。在程序设计中，一些涉及底层的程序编写往往会围绕着文件描述符展开。但是文件描述符这一概念往往只适用于 UNIX、Linux 这样的操作系统。")])]),s._v(" "),e("p",[s._v("我们可以这样使用这些文件描述符。例如默认使用终端的标准输入作为命令的输入和标准输出作为命令的输出：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 按 Ctrl+C 退出")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("将 cat 的连续输出（heredoc 方式）重定向到一个文件：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" Documents\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Documents/test.c "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('EOF\n#include <stdio.h>\n\nint main()\n{\n    printf("hello world'),e("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('");\n    return 0;\n}\n\nEOF')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("将一个文件作为命令的输入，标准输出作为命令的输出：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" Documents/test.c\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("将 echo 命令通过管道传过来的数据作为 cat 命令的输入，将标准输出作为命令的输出：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hi'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("将 echo 命令的输出从默认的标准输出重定向到一个普通文件：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello shiyanlou'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" redirect\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" redirect\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[e("img",{attrs:{src:t(581),alt:"image-20220531195758927"}})]),s._v(" "),e("p",[s._v("初学者这里要注意不要将管道和重定向混淆，"),e("strong",[s._v("管道默认是连接前一个命令的输出到下一个命令的输入")]),s._v("，而重定向通常是需要一个文件来建立两个命令的连接，你可以仔细体会一下上述第三个操作和最后两个操作的异同点。")]),s._v(" "),e("h3",{attrs:{id:"标准错误重定向"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标准错误重定向"}},[s._v("#")]),s._v(" 标准错误重定向")]),s._v(" "),e("p",[s._v("重定向标准输出到文件，这是一个很实用的操作，另一个很实用的操作是将标准错误重定向，标准输出和标准错误都被指向伪终端的屏幕显示，所以我们经常看到的一个命令的输出通常是同时包含了标准输出和标准错误的结果的。比如下面的操作：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用cat 命令同时读取两个文件，其中一个存在，另一个不存在")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" Documents/test.c hello.c\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 你可以看到除了正确输出了前一个文件的内容，还在末尾出现了一条错误信息")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下面我们将输出重定向到一个文件")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" Documents/test.c hello.c "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" somefile\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[e("img",{attrs:{src:t(582),alt:"image-20220531195804471"}})]),s._v(" "),e("p",[s._v("遗憾的是，这里依然出现了那条错误信息，这正是因为如我上面说的那样，标准输出和标准错误虽然都指向终端屏幕，实际它们并不一样。那有的时候我们就是要隐藏某些错误或者警告，那又该怎么做呢。这就需要用到我们前面讲的文件描述符了：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将标准错误重定向到标准输出，再将标准输出重定向到文件，注意要将重定向到文件写到前面")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" Documents/test.c hello.c "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("somefile  "),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 或者只用bash提供的特殊的重定向符号"&"将标准错误和标准输出同时重定向到文件')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" Documents/test.c hello.c "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v("somefilehell\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[e("strong",[s._v("注意你应该在输出重定向文件描述符前加上"),e("code",[s._v("&")]),s._v("，否则 shell 会当做重定向到一个文件名为 1 的文件中")])]),s._v(" "),e("p",[e("img",{attrs:{src:t(583),alt:"image-20220531195809768"}})]),s._v(" "),e("h3",{attrs:{id:"使用-tee-命令同时重定向到多个文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-tee-命令同时重定向到多个文件"}},[s._v("#")]),s._v(" 使用 "),e("code",[s._v("tee")]),s._v(" 命令同时重定向到多个文件")]),s._v(" "),e("p",[s._v("你可能还有这样的需求，除了需要将输出重定向到文件，也需要将信息打印在终端。那么你可以使用 "),e("code",[s._v("tee")]),s._v(" 命令来实现：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello shiyanlou'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" hello\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:t(584),alt:"image-20220531195816854"}})]),s._v(" "),e("h3",{attrs:{id:"永久重定向"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#永久重定向"}},[s._v("#")]),s._v(" 永久重定向")]),s._v(" "),e("p",[s._v("你应该可以看出我们前面的重定向操作都只是临时性的，即只对当前命令有效，那如何做到永久有效呢，比如在一个脚本中，你需要某一部分的命令的输出全部进行重定向，难道要让你在每个命令上面加上临时重定向的操作嘛？")]),s._v(" "),e("p",[s._v("当然不需要，我们可以使用 "),e("code",[s._v("exec")]),s._v(" 命令实现永久重定向。"),e("code",[s._v("exec")]),s._v(" 命令的作用是使用指定的命令替换当前的 Shell，即使用一个进程替换当前进程，或者指定新的重定向：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 先开启一个子 Shell")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("zsh")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用exec替换当前进程的重定向，将标准输出重定向到一个文件")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v("somefile\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 后面你执行的命令的输出都将被重定向到文件中，直到你退出当前子shell，或取消exec的重定向（后面将告诉你怎么做）")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" somefile\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[e("img",{attrs:{src:t(585),alt:"image-20220531195822124"}})]),s._v(" "),e("h3",{attrs:{id:"创建输出文件描述符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建输出文件描述符"}},[s._v("#")]),s._v(" 创建输出文件描述符")]),s._v(" "),e("p",[s._v("在 Shell 中有 9 个文件描述符。上面我们使用了也是它默认提供的 0，1，2 号文件描述符。另外我们还可以使用 3-8 的文件描述符，只是它们默认没有打开而已。你可以使用下面命令查看当前 Shell 进程中打开的文件描述符：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /dev/fd/"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -Al\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("同样使用 "),e("code",[s._v("exec")]),s._v(" 命令可以创建新的文件描述符：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("zsh")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("3")]),s._v(">")]),s._v("somefile\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 先进入目录，再查看，否则你可能不能得到正确的结果，然后再回到上一次的目录")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /dev/fd/"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -Al"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" -\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意下面的命令>与&之间不应该有空格，如果有空格则会出错")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"this is test"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&3")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" somefile\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[e("img",{attrs:{src:t(586),alt:"image-20220531195828094"}})]),s._v(" "),e("h3",{attrs:{id:"关闭文件描述符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关闭文件描述符"}},[s._v("#")]),s._v(" 关闭文件描述符")]),s._v(" "),e("p",[s._v("如上面我们打开的 3 号文件描述符，可以使用如下操作将它关闭：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("3")]),s._v(">&")]),s._v("-\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /dev/fd"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -Al"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" -\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"完全屏蔽命令的输出"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#完全屏蔽命令的输出"}},[s._v("#")]),s._v(" 完全屏蔽命令的输出")]),s._v(" "),e("p",[s._v("在 Linux 中有一个被称为黑洞的设备文件，所有导入它的数据都将被吞噬。")]),s._v(" "),e("blockquote",[e("p",[s._v("在类 UNIX 系统中，/dev/null，或称空设备，是一个特殊的设备文件，它通常被用于丢弃不需要的输出流，或作为用于输入流的空文件，这些操作通常由重定向完成。读取它则会立即得到一个 EOF。")])]),s._v(" "),e("p",[s._v("我们可以利用 "),e("code",[s._v("/dev/null")]),s._v(" 屏蔽命令的输出：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" Documents/test.c "),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v("/dev/null "),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("上面这样的操作将使你得不到任何输出结果。")]),s._v(" "),e("h3",{attrs:{id:"使用-xargs-分割参数列表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-xargs-分割参数列表"}},[s._v("#")]),s._v(" 使用 xargs 分割参数列表")]),s._v(" "),e("blockquote",[e("p",[s._v("xargs 是一条 UNIX 和类 UNIX 操作系统的常用命令。它的作用是将参数列表转换成小块分段传递给其他命令，以避免参数列表过长的问题。")])]),s._v(" "),e("p",[s._v("这个命令在有些时候十分有用，特别是当用来处理产生大量输出结果的命令如 "),e("code",[s._v("find")]),s._v("，"),e("code",[s._v("locate")]),s._v(" 和 "),e("code",[s._v("grep")]),s._v(" 的结果，详细用法请参看 man 文档。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -d: -f1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" /etc/passwd "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("上面这个命令用于将 "),e("code",[s._v("/etc/passwd")]),s._v(" 文件按 "),e("code",[s._v(":")]),s._v(" 分割取第一个字段排序后，使用 "),e("code",[s._v("echo")]),s._v(" 命令生成一个列表。")])])}),[],!1,null,null,null);a.default=n.exports},581:function(s,a,t){s.exports=t.p+"assets/img/image-20220531195758927.70b50021.png"},582:function(s,a,t){s.exports=t.p+"assets/img/image-20220531195804471.281f13aa.png"},583:function(s,a,t){s.exports=t.p+"assets/img/image-20220531195809768.0ecbcc05.png"},584:function(s,a,t){s.exports=t.p+"assets/img/image-20220531195816854.2211e495.png"},585:function(s,a,t){s.exports=t.p+"assets/img/image-20220531195822124.2bdd5610.png"},586:function(s,a,t){s.exports=t.p+"assets/img/image-20220531195828094.7971ffba.png"}}]);