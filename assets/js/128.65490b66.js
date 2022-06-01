(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{1503:function(s,a,e){"use strict";e.r(a);var n=e(24),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"bash介绍与入门"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bash介绍与入门"}},[s._v("#")]),s._v(" Bash介绍与入门")]),s._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#什么是-bash"}},[s._v("什么是 Bash")])]),e("li",[e("a",{attrs:{href:"#初步练习"}},[s._v("初步练习")])]),e("li",[e("a",{attrs:{href:"#思考练习"}},[s._v("思考练习")])])])]),e("p"),s._v(" "),e("h3",{attrs:{id:"什么是-bash"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是-bash"}},[s._v("#")]),s._v(" 什么是 Bash")]),s._v(" "),e("h4",{attrs:{id:"简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),e("p",[s._v("Bash（GNU Bourne-Again Shell）是一个为 GNU 计划编写的 Unix shell，它是许多 Linux 平台默认使用的 shell。")]),s._v(" "),e("p",[s._v("shell 是一个命令解释器，是介于操作系统内核与用户之间的一个绝缘层。准确地说，它也是能力很强的计算机语言，被称为解释性语言或脚本语言。它可以通过将系统调用、公共程序、工具和编译过的二进制程序”粘合“在一起来建立应用，这是大多数脚本语言的共同特征，所以有时候脚本语言又叫做“胶水语言”。")]),s._v(" "),e("p",[s._v("事实上，所有的 UNIX 命令和工具再加上公共程序，对于 shell 脚本来说，都是可调用的。Shell 脚本对于管理系统任务和其它的重复工作的例程来说，表现的非常好，根本不需要那些华而不实的成熟紧凑的编译型程序语言。")]),s._v(" "),e("h4",{attrs:{id:"为什么学-bash"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么学-bash"}},[s._v("#")]),s._v(" 为什么学 Bash")]),s._v(" "),e("p",[s._v("对于任何想适当精通一些系统管理知识的人来说，掌握 shell 脚本知识都是最基本的，即使这些人可能并不打算真正的编写一些脚本。")]),s._v(" "),e("h3",{attrs:{id:"初步练习"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初步练习"}},[s._v("#")]),s._v(" 初步练习")]),s._v(" "),e("h4",{attrs:{id:"hello-world"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hello-world"}},[s._v("#")]),s._v(" Hello World")]),s._v(" "),e("p",[s._v("Bash 之 Hello World")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("vim hello.sh\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("使用 vim 编辑 hello.sh，输入如下代码并保存：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# This is a comment")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" Hello World\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("ul",[e("li",[e("code",[s._v("vim")]),s._v(" 中插入按 "),e("code",[s._v("i")])]),s._v(" "),e("li",[s._v("保存并退出换行按 "),e("code",[s._v("esc")]),s._v(" 然后输入 "),e("code",[s._v(":wq")]),s._v(" 再按下 "),e("code",[s._v("enter")]),s._v("。")]),s._v(" "),e("li",[e("code",[s._v("#!")]),s._v(" 是说明 hello 这个文件的类型，有点类似于 Windows 系统下用不同文件后缀来表示不同文件类型的意思（但不相同）。\n"),e("ul",[e("li",[s._v("Linux 系统根据 "),e("code",[s._v("#!")]),s._v(" 及该字符串后面的信息确定该文件的类型，可以通过 "),e("code",[s._v("man magic")]),s._v(" 命令 及 "),e("code",[s._v("/usr/share/magic")]),s._v(" 文件来了解这方面的更多内容。")]),s._v(" "),e("li",[s._v("在 BASH 中 第一行的 "),e("code",[s._v("#!")]),s._v(" 及后面的 "),e("code",[s._v("/bin/bash")]),s._v(" 就表明该文件是一个 BASH 程序，需要由 "),e("code",[s._v("/bin")]),s._v(" 目录下的 bash 程序来解释执行。BASH 这个程序一般是存放在 "),e("code",[s._v("/bin")]),s._v(" 目录下，如果你的 Linux 系统比较特别，bash 也有可能被存放在 "),e("code",[s._v("/sbin")]),s._v(" 、"),e("code",[s._v("/usr/local/bin")]),s._v(" 、"),e("code",[s._v("/usr/bin")]),s._v(" 、"),e("code",[s._v("/usr/sbin")]),s._v(" 或 "),e("code",[s._v("/usr/local/sbin")]),s._v(" 这样的目录下；如果还找不到，你可以用 "),e("code",[s._v("locate bash")]),s._v(" ,"),e("code",[s._v("find / -name bash 2>/dev/null")]),s._v(" 或 "),e("code",[s._v("whereis bash")]),s._v(" 这三个命令找出 bash 所在的位置；如果仍然找不到，那你可能需要自己动手安装一个 BASH 软件包了。")])])]),s._v(" "),e("li",[s._v("第二行的 "),e("code",[s._v("# This is a ...")]),s._v(" 就是 BASH 程序的注释，在 BASH 程序中从 "),e("code",[s._v("#")]),s._v(" 号（注意：后面紧接着是 "),e("code",[s._v("!")]),s._v(" 号的除外）开始到行尾的部分均被看作是程序的注释。")]),s._v(" "),e("li",[s._v("第三行的 "),e("code",[s._v("echo")]),s._v(' 语句的功能是把 echo 后面的字符串输出到标准输出中去。由于 echo 后跟的是 "Hello World" 这个字符串，因此 "Hello World"这个字串就被显示在控制台终端的屏幕上了。需要注意的是 BASH 中的绝大多数语句结尾处都'),e("strong",[s._v("没有分号")]),s._v("。")])]),s._v(" "),e("p",[e("strong",[s._v("运行 Bash 脚本的方式：")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用shell来执行")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" hello.sh\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用bash来执行")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" hello.sh\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用.来执行")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" ./hello.sh\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用source来执行")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" hello.sh\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 还可以赋予脚本所有者执行权限，允许该用户执行该脚本")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" u+rx hello.sh\n./hello.sh\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br")])]),e("h4",{attrs:{id:"使用重定向"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用重定向"}},[s._v("#")]),s._v(" 使用重定向")]),s._v(" "),e("p",[s._v("比如我们想要"),e("strong",[s._v("保存")]),s._v("刚刚的 hello world 为一个文本，那么该怎么办呢？")]),s._v(" "),e("p",[e("code",[s._v(">")]),s._v(" 这个符号是重定向,执行以下代码，就会在当前目录下生成一个 my.txt。打开看看有没有 hello world")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/bash")]),s._v("\n "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello World"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" my.txt\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h4",{attrs:{id:"使用脚本清除-var-log-下的-log-文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用脚本清除-var-log-下的-log-文件"}},[s._v("#")]),s._v(" 使用脚本清除 "),e("code",[s._v("/var/log")]),s._v(" 下的 log 文件")]),s._v(" "),e("p",[s._v("首先我们看一看 "),e("code",[s._v("/var/log/dpkg.log")]),s._v(" 里面有啥东西。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /var/log/dpkg.log\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("这个文件中记录了我们使用 apt 安装的软件包的一些信息，现在我们需要写一个脚本把里面的东西清空，但是保留文件。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" cleanlogs.sh\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("说明：")]),s._v(" "),e("p",[e("code",[s._v("/dev/null")]),s._v(" 这个东西可以理解为一个黑洞，里面是空的（可以用 cat 命令看一看）。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 初始化一个变量")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LOG_DIR")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/log\n\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LOG_DIR")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /dev/null "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" dpkg.log\n\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Logs cleaned up."')]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("p",[s._v("运行脚本前，先使用 "),e("code",[s._v("sudo chmod +x cleanlogs.sh")]),s._v(" 授予脚本执行权限，然后再看看 "),e("code",[s._v("/var/log/dpkg.log")]),s._v(" 文件内是否有内容。运行此脚本后，文件的内容将被清除。")]),s._v(" "),e("p",[e("strong",[s._v("执行：")])]),s._v(" "),e("p",[s._v("由于脚本中含有对系统日志文件内容的清除操作，这要求要有管理员权限.不然会报 "),e("code",[s._v("permission denied")]),s._v(" 错误。使用 sudo 命令调用管理员权限才能执行成功：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" ./cleanlogs.sh\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[e("code",[s._v("#!/bin/bash")]),s._v(" 这一行是表示使用 "),e("code",[s._v("/bin/bash")]),s._v(" 作为脚本的解释器，这行要放在脚本的行首并且不要省略。")]),s._v(" "),e("li",[s._v("脚本正文中以 "),e("code",[s._v("#")]),s._v(" 号开头的行都是注释语句，这些行在脚本的实际执行过程中不会被执行。这些注释语句能方便我们在脚本中做一些注释或标记，让脚本更具可读性。")])]),s._v(" "),e("h3",{attrs:{id:"思考练习"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#思考练习"}},[s._v("#")]),s._v(" 思考练习")]),s._v(" "),e("h4",{attrs:{id:"遇到权限不够的提示-为什么-如何解决"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#遇到权限不够的提示-为什么-如何解决"}},[s._v("#")]),s._v(" 遇到权限不够的提示，为什么，如何解决")]),s._v(" "),e("p",[s._v("权限不够加 sudo 啊，可是你会发现 "),e("code",[s._v("sudo cat /dev/null > /var/log/dpkg.log")]),s._v(" 一样会提示权限不够，为什么呢？")]),s._v(" "),e("p",[s._v("因为 sudo 只能让 cat 命令以 root 的权限执行，而对于 "),e("code",[s._v(">")]),s._v(" 这个符号并没有 "),e("code",[s._v("root")]),s._v(" 的权限。")]),s._v(" "),e("p",[s._v("我们可以使用 "),e("code",[s._v('sudo sh -c "cat /dev/null > /var/log/dpkg.log"')]),s._v(" 让整个命令都具有 root 的权限执行。")]),s._v(" "),e("h4",{attrs:{id:"为什么-cleanlogs-sh-可以将-log-文件清除"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么-cleanlogs-sh-可以将-log-文件清除"}},[s._v("#")]),s._v(" 为什么 cleanlogs.sh 可以将 log 文件清除")]),s._v(" "),e("p",[s._v("因为"),e("code",[s._v("/dev/null")]),s._v("，里面是空的，重定向到 "),e("code",[s._v("/var/log/dpkg.log")]),s._v(" 文件后，就清空了 dpkg.log 文件的内容。")])])}),[],!1,null,null,null);a.default=t.exports}}]);