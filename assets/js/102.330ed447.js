(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{1368:function(s,a,t){"use strict";t.r(a);var n=t(24),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"变量与参数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#变量与参数"}},[s._v("#")]),s._v(" 变量与参数")]),s._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#变量定义"}},[s._v("变量定义")])]),n("li",[n("a",{attrs:{href:"#使用变量"}},[s._v("使用变量")])]),n("li",[n("a",{attrs:{href:"#只读变量"}},[s._v("只读变量")])]),n("li",[n("a",{attrs:{href:"#特殊变量"}},[s._v("特殊变量")])])])]),n("p"),s._v(" "),n("h2",{attrs:{id:"变量定义"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#变量定义"}},[s._v("#")]),s._v(" 变量定义")]),s._v(" "),n("h4",{attrs:{id:"概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[s._v("#")]),s._v(" 概念")]),s._v(" "),n("p",[s._v("变量的名字就是变量保存值的地方。引用变量的值就叫做变量替换。")]),s._v(" "),n("p",[s._v("如果 variable 是一个变量的名字，那么 "),n("code",[s._v("$variable")]),s._v(" 就是引用这个变量的值，即这变量所包含的数据。")]),s._v(" "),n("p",[n("code",[s._v("$variable")]),s._v(" 事实上只是 "),n("code",[s._v("${variable}")]),s._v(" 的简写形式。在某些上下文中 "),n("code",[s._v("$variable")]),s._v(" 可能会引起错误，这时候你就需要用 "),n("code",[s._v("${variable}")]),s._v(" 了。")]),s._v(" "),n("h4",{attrs:{id:"定义变量"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#定义变量"}},[s._v("#")]),s._v(" 定义变量")]),s._v(" "),n("p",[s._v("定义变量时，变量名不加美元符号（"),n("code",[s._v("$")]),s._v("，PHP 语言中变量需要），如：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("myname")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shiyanlou"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("strong",[s._v("注意")])]),s._v(" "),n("p",[n("strong",[s._v("变量名和等号之间不能有空格")]),s._v("。同时，变量名的命名须遵循如下规则：")]),s._v(" "),n("ul",[n("li",[s._v("首个字符必须为字母（a-z，A-Z）。")]),s._v(" "),n("li",[s._v("中间不能有空格，可以使用下划线（"),n("code",[s._v("_")]),s._v("）。")]),s._v(" "),n("li",[s._v("不能使用标点符号。")]),s._v(" "),n("li",[s._v("不能使用 bash 里的关键字（可用 help 命令查看保留关键字）。")])]),s._v(" "),n("p",[s._v("除了直接赋值，还可以用语句给变量赋值，如：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("file")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /etc"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"使用变量"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用变量"}},[s._v("#")]),s._v(" 使用变量")]),s._v(" "),n("p",[s._v("变量名前加"),n("strong",[s._v("美元符号")]),s._v("，如：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("myname")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shiyanlou"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$myname")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${myname}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${myname}")]),s._v("Good\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$mynameGood")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("myname")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"miao"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${myname}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("blockquote",[n("p",[s._v("加"),n("strong",[s._v("花括号")]),s._v("帮助解释器识别变量的"),n("strong",[s._v("边界")]),s._v("，若不加，解释器会把 mynameGood 当成一个变量（值为空）")]),s._v(" "),n("p",[s._v("推荐给所有变量加花括号")]),s._v(" "),n("p",[s._v("已定义的变量可以重新被定义")])]),s._v(" "),n("h2",{attrs:{id:"只读变量"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#只读变量"}},[s._v("#")]),s._v(" 只读变量")]),s._v(" "),n("p",[s._v("使用 "),n("code",[s._v("readonly")]),s._v(" 命令可以将变量定义为只读变量，只读变量的值不能被改变。 下面的例子尝试更改只读变量，结果报错：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("myUrl")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://www.shiyanlou.com"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("readonly")]),s._v(" myUrl\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("myUrl")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://www.shiyanlou.com"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("运行脚本，结果如下：")]),s._v(" "),n("p",[n("img",{attrs:{src:t(455),alt:"image-20220531210526790"}})]),s._v(" "),n("h2",{attrs:{id:"特殊变量"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#特殊变量"}},[s._v("#")]),s._v(" 特殊变量")]),s._v(" "),n("h4",{attrs:{id:"局部变量"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#局部变量"}},[s._v("#")]),s._v(" 局部变量")]),s._v(" "),n("p",[s._v("这种变量只有在代码块或者函数中才可见。后面的实验会详细讲解。")]),s._v(" "),n("h4",{attrs:{id:"环境变量"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#环境变量"}},[s._v("#")]),s._v(" 环境变量")]),s._v(" "),n("p",[s._v("这种变量将影响用户接口和 shell 的行为。")]),s._v(" "),n("p",[s._v("在通常情况下，每个进程都有自己的“环境”，这个环境是由一组变量组成的，这些变量中存有进程可能需要引用的信息。在这种情况下，shell 与一个一般的进程没什么区别。")]),s._v(" "),n("h4",{attrs:{id:"位置参数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#位置参数"}},[s._v("#")]),s._v(" 位置参数")]),s._v(" "),n("p",[s._v("从命令行传递到脚本的参数："),n("code",[s._v("$0")]),s._v("，"),n("code",[s._v("$1")]),s._v("，"),n("code",[s._v("$2")]),s._v("，"),n("code",[s._v("$3")]),s._v("...")]),s._v(" "),n("p",[n("code",[s._v("$0")]),s._v(" 就是脚本文件自身的名字，"),n("code",[s._v("$1")]),s._v(" 是第一个参数，"),n("code",[s._v("$2")]),s._v(" 是第二个参数，"),n("code",[s._v("$3")]),s._v(" 是第三个参数，然后是第四个。"),n("code",[s._v("$9")]),s._v(" 之后的位置参数就必须用大括号括起来了，比如，"),n("code",[s._v("${10}")]),s._v("，"),n("code",[s._v("${11}")]),s._v("，"),n("code",[s._v("${12}")]),s._v("。")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("$#")]),s._v(" ： 传递到脚本的参数个数")]),s._v(" "),n("li",[n("code",[s._v("$*")]),s._v(" ： 以一个单字符串显示所有向脚本传递的参数。与位置变量不同,此选项参数可超过 9 个")]),s._v(" "),n("li",[n("code",[s._v("$$")]),s._v(" ： 脚本运行的当前进程 ID 号")]),s._v(" "),n("li",[n("code",[s._v("$!")]),s._v(" ： 后台运行的最后一个进程的进程 ID 号")]),s._v(" "),n("li",[n("code",[s._v("$@")]),s._v(" ： 与 "),n("code",[s._v("$*")]),s._v(" 相同,但是使用时加引号,并在引号中返回每个参数")]),s._v(" "),n("li",[n("code",[s._v("$")]),s._v("： 显示 shell 使用的当前选项,与 set 命令功能相同")]),s._v(" "),n("li",[n("code",[s._v("$?")]),s._v(" ： 显示最后命令的退出状态。 0 表示没有错误,其他任何值表明有错误。")])]),s._v(" "),n("h4",{attrs:{id:"位置参数实例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#位置参数实例"}},[s._v("#")]),s._v(" 位置参数实例")]),s._v(" "),n("p",[s._v("这个十分重要，在我们运行一套脚本的时候，有时候是需要参数的，这里我们教大家如何获取参数。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" test30.sh\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("输入代码（中文皆为注释，不用输入）：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 作为用例, 调用这个脚本至少需要10个参数, 比如：")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# bash test.sh 1 2 3 4 5 6 7 8 9 10")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MINPARAMS")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"The name of this script is '),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$0")]),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v('."')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"The name of this script is '),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("basename")]),s._v(" $0"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v('."')]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -n "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v('"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("              "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 测试变量被引用.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Parameter #1 is '),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v('"')]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 需要引用才能够转义"#"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -n "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v('"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Parameter #2 is '),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v('"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -n "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${10}")]),s._v('"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 大于$9的参数必须用{}括起来.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Parameter #10 is '),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${10}")]),s._v('"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-----------------------------------"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"All the command-line parameters are: "')]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$*")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$#")]),s._v(" -lt "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MINPARAMS")]),s._v('"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"This script needs at least '),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MINPARAMS")]),s._v(' command-line arguments!"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br")])]),n("p",[s._v("运行代码：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" test30.sh "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n\n\nThe name of this script is "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test.sh"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\nThe name of this script is "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test.sh"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n\nParameter "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#1 is 1")]),s._v("\nParameter "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#2 is 2")]),s._v("\n-----------------------------------\nAll the command-line parameters are: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n\nThis script needs at least "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" command-line arguments"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports},455:function(s,a,t){s.exports=t.p+"assets/img/image-20220531210526790.2fe70abc.png"}}]);