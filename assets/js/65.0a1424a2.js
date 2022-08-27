(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{1619:function(v,_,t){"use strict";t.r(_);var e=t(65),a=Object(e.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"vim快速入门"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vim快速入门"}},[v._v("#")]),v._v(" Vim快速入门")]),v._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#vim-模式介绍"}},[v._v("vim 模式介绍")])]),e("li",[e("a",{attrs:{href:"#三种常用模式的切换"}},[v._v("三种常用模式的切换")])]),e("li",[e("a",{attrs:{href:"#进入vim"}},[v._v("进入vim")]),e("ul",[e("li",[e("a",{attrs:{href:"#游标移动"}},[v._v("游标移动")])]),e("li",[e("a",{attrs:{href:"#进入插入模式"}},[v._v("进入插入模式")])]),e("li",[e("a",{attrs:{href:"#保存文档"}},[v._v("保存文档")])])])]),e("li",[e("a",{attrs:{href:"#退出vim"}},[v._v("退出vim")]),e("ul",[e("li",[e("a",{attrs:{href:"#命令行模式下退出vim"}},[v._v("命令行模式下退出vim")])]),e("li",[e("a",{attrs:{href:"#普通模式下退出vim"}},[v._v("普通模式下退出vim")])])])]),e("li",[e("a",{attrs:{href:"#删除文本"}},[v._v("删除文本")])]),e("li",[e("a",{attrs:{href:"#命令模式操作"}},[v._v("命令模式操作")]),e("ul",[e("li",[e("a",{attrs:{href:"#一行"}},[v._v("一行")])]),e("li",[e("a",{attrs:{href:"#一个字母"}},[v._v("一个字母")])]),e("li",[e("a",{attrs:{href:"#一个单词"}},[v._v("一个单词")])]),e("li",[e("a",{attrs:{href:"#撤销与redo"}},[v._v("撤销与redo")])]),e("li",[e("a",{attrs:{href:"#搜索"}},[v._v("搜索")])]),e("li",[e("a",{attrs:{href:"#文件内定位"}},[v._v("文件内定位")])]),e("li",[e("a",{attrs:{href:"#屏幕定位相关"}},[v._v("屏幕定位相关")])]),e("li",[e("a",{attrs:{href:"#查找与批量替换"}},[v._v("查找与批量替换")])]),e("li",[e("a",{attrs:{href:"#读取和保持"}},[v._v("读取和保持")])]),e("li",[e("a",{attrs:{href:"#设置"}},[v._v("设置")])]),e("li",[e("a",{attrs:{href:"#速查卡"}},[v._v("速查卡")])]),e("li",[e("a",{attrs:{href:"#简明vim练级攻略"}},[v._v("简明vim练级攻略")])])])]),e("li",[e("a",{attrs:{href:"#idea常用操作"}},[v._v("IDEA常用操作")])])])]),e("p"),v._v(" "),e("p",[e("a",{attrs:{href:"http://vimdoc.sourceforge.net/htmldoc/usr_toc.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("the book of vim"),e("OutboundLink")],1),v._v(" "),e("a",{attrs:{href:"https://i.linuxtoy.org/docs/guide/index.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("开源世界旅行手册"),e("OutboundLink")],1)]),v._v(" "),e("h2",{attrs:{id:"vim-模式介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vim-模式介绍"}},[v._v("#")]),v._v(" vim 模式介绍")]),v._v(" "),e("p",[v._v("以下介绍内容来自维基百科"),e("a",{attrs:{href:"http://zh.wikipedia.org/wiki/Vim",target:"_blank",rel:"noopener noreferrer"}},[v._v("Vim"),e("OutboundLink")],1)]),v._v(" "),e("p",[v._v("从 vi 衍生出来的 Vim 具有多种模式，这种独特的设计容易使初学者产生混淆。几乎所有的编辑器都会有插入和执行命令两种模式，并且大多数的编辑器使用了与 Vim 截然不同的方式：命令目录（鼠标或者键盘驱动），组合键（通常通过 control 键（CTRL）和 alt 键（ALT）组成）或者鼠标输入。Vim 和 vi 一样，仅仅通过键盘来在这些模式之中切换。这就使得 Vim 可以不用进行菜单或者鼠标操作，并且最小化组合键的操作。对文字录入员或者程序员可以大大增强速度和效率。")]),v._v(" "),e("p",[v._v("Vim 具有 6 种基本模式和 5 种派生模式，我们这里只简单介绍下 6 种基本模式：")]),v._v(" "),e("ul",[e("li",[v._v("普通模式(Normal mode)")])]),v._v(" "),e("p",[v._v("在普通模式中，用的编辑器命令，比如移动光标，删除文本等等。这也是 Vim 启动后的默认模式。这正好和许多新用户期待的操作方式相反（大多数编辑器默认模式为插入模式）。")]),v._v(" "),e("blockquote",[e("p",[v._v("Vim 强大的编辑功能来自于其普通模式命令。普通模式命令往往需要一个操作符结尾。例如普通模式命令"),e("code",[v._v("dd")]),v._v('删除当前行，但是第一个"d"的后面可以跟另外的移动命令来代替第二个'),e("code",[v._v("d")]),v._v('，比如用移动到下一行的"j"键就可以删除当前行和下一行。另外还可以指定命令重复次数，'),e("code",[v._v("2dd")]),v._v("（重复"),e("code",[v._v("dd")]),v._v("两次），和"),e("code",[v._v("dj")]),v._v("的效果是一样的。用户学习了各种各样的文本间移动／跳转的命令和其他的普通模式的编辑命令，并且能够灵活组合使用的话，能够比那些没有模式的编辑器更加高效地进行文本编辑。")])]),v._v(" "),e("p",[v._v("在普通模式中，有很多方法可以进入插入模式。比较普通的方式是按 "),e("code",[v._v("a")]),v._v("（append／追加）键或者 "),e("code",[v._v("i")]),v._v("（insert／插入）键。")]),v._v(" "),e("ul",[e("li",[v._v("插入模式(Insert mode)")])]),v._v(" "),e("p",[v._v("在这个模式中，大多数按键都会向文本缓冲中插入文本。大多数新用户希望文本编辑器编辑过程中一直保持这个模式。")]),v._v(" "),e("blockquote",[e("p",[v._v("在插入模式中，可以按 "),e("code",[v._v("ESC")]),v._v(" 键回到普通模式。")])]),v._v(" "),e("ul",[e("li",[v._v("可视模式(Visual mode)")])]),v._v(" "),e("blockquote",[e("p",[v._v('这个模式与普通模式比较相似。但是移动命令会扩大高亮的文本区域。高亮区域可以是字符、行或者是一块文本。当执行一个非移动命令时，命令会被执行到这块高亮的区域上。Vim 的"文本对象"也能和移动命令一样用在这个模式中。')])]),v._v(" "),e("ul",[e("li",[v._v("选择模式(Select mode)")])]),v._v(" "),e("blockquote",[e("p",[v._v("这个模式和无模式编辑器的行为比较相似（Windows 标准文本控件的方式）。这个模式中，可以用鼠标或者光标键高亮选择文本，不过输入任何字符的话，Vim 会用这个字符替换选择的高亮文本块，并且自动进入插入模式。")])]),v._v(" "),e("ul",[e("li",[v._v("命令行模式(Command line mode)")])]),v._v(" "),e("blockquote",[e("p",[v._v("在命令行模式中可以输入会被解释成并执行的文本。例如执行命令（"),e("code",[v._v(":")]),v._v("键），搜索（"),e("code",[v._v("/")]),v._v("和"),e("code",[v._v("?")]),v._v("键）或者过滤命令（"),e("code",[v._v("!")]),v._v("键）。在命令执行之后，Vim 返回到命令行模式之前的模式，通常是普通模式。")])]),v._v(" "),e("ul",[e("li",[v._v("Ex 模式(Ex mode)")])]),v._v(" "),e("p",[v._v("这和命令行模式比较相似，在使用 "),e("code",[v._v(":visual")]),v._v(" 命令离开 Ex 模式前，可以一次执行多条命令。")]),v._v(" "),e("h2",{attrs:{id:"三种常用模式的切换"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三种常用模式的切换"}},[v._v("#")]),v._v(" 三种常用模式的切换")]),v._v(" "),e("p",[v._v("vim启动进入普通模式，处于插入模式或命令行模式时只需要按"),e("code",[v._v("Esc")]),v._v("或者"),e("code",[v._v("Ctrl+[")]),v._v("(这在vim课程环境中不管用)即可进入普通模式。普通模式中按"),e("code",[v._v("i")]),v._v("（插入）或"),e("code",[v._v("a")]),v._v("（附加）键都可以进入插入模式，普通模式中按"),e("code",[v._v(":")]),v._v("进入命令行模式。命令行模式中输入"),e("code",[v._v("wq")]),v._v("回车后保存并退出vim。")]),v._v(" "),e("p",[e("img",{attrs:{src:t(869),alt:"1"}})]),v._v(" "),e("h2",{attrs:{id:"进入vim"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进入vim"}},[v._v("#")]),v._v(" 进入vim")]),v._v(" "),e("p",[v._v("进入命令行模式后输入 "),e("code",[v._v(":e <filepath>")]),v._v(" 同样可以打开相应文件。")]),v._v(" "),e("h3",{attrs:{id:"游标移动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#游标移动"}},[v._v("#")]),v._v(" 游标移动")]),v._v(" "),e("p",[v._v("在进入 vim 后，按下 "),e("code",[v._v("i")]),v._v(" 键进入插入模式。在该模式下您可以输入文本信息,下面请输入如下三行信息：")]),v._v(" "),e("div",{staticClass:"language-txt line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-txt"}},[e("code",[v._v("12345678\nabcdefghijk\nshiyanlou.com\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br"),e("span",{staticClass:"line-number"},[v._v("2")]),e("br"),e("span",{staticClass:"line-number"},[v._v("3")]),e("br")])]),e("p",[v._v("按"),e("code",[v._v("Esc")]),v._v("进入普通模式，在该模式下使用方向键或者 "),e("code",[v._v("h")]),v._v("，"),e("code",[v._v("j")]),v._v("，"),e("code",[v._v("k")]),v._v("，"),e("code",[v._v("l")]),v._v(" 键可以移动游标。")]),v._v(" "),e("table",[e("thead",[e("tr",[e("th",[v._v("按键")]),v._v(" "),e("th",[v._v("说明")])])]),v._v(" "),e("tbody",[e("tr",[e("td",[e("code",[v._v("h")])]),v._v(" "),e("td",[v._v("左")])]),v._v(" "),e("tr",[e("td",[e("code",[v._v("l")])]),v._v(" "),e("td",[v._v("右（小写 L）")])]),v._v(" "),e("tr",[e("td",[e("code",[v._v("j")])]),v._v(" "),e("td",[v._v("下")])]),v._v(" "),e("tr",[e("td",[e("code",[v._v("k")])]),v._v(" "),e("td",[v._v("上")])]),v._v(" "),e("tr",[e("td",[e("code",[v._v("w")])]),v._v(" "),e("td",[v._v("移动到下一个单词")])]),v._v(" "),e("tr",[e("td",[e("code",[v._v("b")])]),v._v(" "),e("td",[v._v("移动到上一个单词")])])])]),v._v(" "),e("p",[v._v("请尝试在普通模式下使用方向键移动光标到 "),e("code",[v._v("shiyanlou")]),v._v(" 这几个字母上面。")]),v._v(" "),e("h3",{attrs:{id:"进入插入模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进入插入模式"}},[v._v("#")]),v._v(" 进入插入模式")]),v._v(" "),e("p",[v._v("在普通模式下使用下面的键将进入插入模式，并可以从相应的位置开始输入")]),v._v(" "),e("table",[e("thead",[e("tr",[e("th",[v._v("命令")]),v._v(" "),e("th",[v._v("说明")])])]),v._v(" "),e("tbody",[e("tr",[e("td",[e("code",[v._v("i")])]),v._v(" "),e("td",[v._v("在当前光标处进行编辑")])]),v._v(" "),e("tr",[e("td",[e("code",[v._v("I")])]),v._v(" "),e("td",[v._v("在行首插入")])]),v._v(" "),e("tr",[e("td",[e("code",[v._v("A")])]),v._v(" "),e("td",[v._v("在行末插入")])]),v._v(" "),e("tr",[e("td",[e("code",[v._v("a")])]),v._v(" "),e("td",[v._v("在光标后插入编辑")])]),v._v(" "),e("tr",[e("td",[e("code",[v._v("o")])]),v._v(" "),e("td",[v._v("在当前行后插入一个新行")])]),v._v(" "),e("tr",[e("td",[e("code",[v._v("O")])]),v._v(" "),e("td",[v._v("在当前行前插入一个新行")])]),v._v(" "),e("tr",[e("td",[e("code",[v._v("cw")])]),v._v(" "),e("td",[v._v("替换从光标所在位置后到一个单词结尾的字符")])])])]),v._v(" "),e("p",[v._v("请尝试不同的从普通模式进入插入模式的方法，在最后一行 shiyanlou 前面加上 "),e("code",[v._v("www.")]),v._v("，"),e("strong",[v._v("注意每次要先回到普通模式才能切换成以不同的方式进入插入模式。")])]),v._v(" "),e("h3",{attrs:{id:"保存文档"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#保存文档"}},[v._v("#")]),v._v(" 保存文档")]),v._v(" "),e("h4",{attrs:{id:"命令行模式下保存文档"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令行模式下保存文档"}},[v._v("#")]),v._v(" 命令行模式下保存文档")]),v._v(" "),e("p",[v._v("从普通模式输入 "),e("code",[v._v(":")]),v._v(" 进入命令行模式，输入 "),e("code",[v._v("w")]),v._v(" 回车，保存文档。输入 "),e("code",[v._v(":w <filename>")]),v._v(" 可以将文档另存为其他文件名或存到其它路径下。")]),v._v(" "),e("h2",{attrs:{id:"退出vim"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#退出vim"}},[v._v("#")]),v._v(" 退出vim")]),v._v(" "),e("h3",{attrs:{id:"命令行模式下退出vim"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令行模式下退出vim"}},[v._v("#")]),v._v(" 命令行模式下退出vim")]),v._v(" "),e("p",[v._v("从普通模式输入"),e("code",[v._v(":")]),v._v("进入命令行模式，输入"),e("code",[v._v("wq")]),v._v("回车，保存并退出编辑")]),v._v(" "),e("p",[v._v("以下为其它几种退出方式：")]),v._v(" "),e("table",[e("thead",[e("tr",[e("th",[v._v("命令")]),v._v(" "),e("th",[v._v("说明")])])]),v._v(" "),e("tbody",[e("tr",[e("td",[v._v(":q!")]),v._v(" "),e("td",[v._v("强制退出，不保存")])]),v._v(" "),e("tr",[e("td",[v._v(":q")]),v._v(" "),e("td",[v._v("退出")])]),v._v(" "),e("tr",[e("td",[v._v(":wq!")]),v._v(" "),e("td",[v._v("强制保存并退出")])]),v._v(" "),e("tr",[e("td",[v._v(":w <文件路径>")]),v._v(" "),e("td",[v._v("另存为")])]),v._v(" "),e("tr",[e("td",[v._v(":saveas 文件路径")]),v._v(" "),e("td",[v._v("另存为")])]),v._v(" "),e("tr",[e("td",[v._v(":x")]),v._v(" "),e("td",[v._v("保存并退出")])]),v._v(" "),e("tr",[e("td",[v._v(":wq")]),v._v(" "),e("td",[v._v("保存并退出")])])])]),v._v(" "),e("h3",{attrs:{id:"普通模式下退出vim"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#普通模式下退出vim"}},[v._v("#")]),v._v(" 普通模式下退出vim")]),v._v(" "),e("p",[v._v("普通模式下输入"),e("code",[v._v("Shift+zz")]),v._v("即可保存退出vim")]),v._v(" "),e("h2",{attrs:{id:"删除文本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除文本"}},[v._v("#")]),v._v(" 删除文本")]),v._v(" "),e("h4",{attrs:{id:"普通模式下删除-vim-文本信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#普通模式下删除-vim-文本信息"}},[v._v("#")]),v._v(" 普通模式下删除 vim 文本信息")]),v._v(" "),e("p",[v._v("进入普通模式，使用下列命令可以进行文本快速删除：")]),v._v(" "),e("table",[e("thead",[e("tr",[e("th",[v._v("命令")]),v._v(" "),e("th",[v._v("说明")])])]),v._v(" "),e("tbody",[e("tr",[e("td",[e("code",[v._v("x")])]),v._v(" "),e("td",[v._v("删除游标所在的字符")])]),v._v(" "),e("tr",[e("td",[e("code",[v._v("X")])]),v._v(" "),e("td",[v._v("删除游标所在前一个字符")])]),v._v(" "),e("tr",[e("td",[e("code",[v._v("Delete")])]),v._v(" "),e("td",[v._v("同 "),e("code",[v._v("x")])])]),v._v(" "),e("tr",[e("td",[e("code",[v._v("dd")])]),v._v(" "),e("td",[v._v("删除整行")])]),v._v(" "),e("tr",[e("td",[e("code",[v._v("dw")])]),v._v(" "),e("td",[v._v("删除一个单词（不适用中文）")])]),v._v(" "),e("tr",[e("td",[e("code",[v._v("d$")]),v._v("或"),e("code",[v._v("D")])]),v._v(" "),e("td",[v._v("删除至行尾")])]),v._v(" "),e("tr",[e("td",[e("code",[v._v("d^")])]),v._v(" "),e("td",[v._v("删除至行首")])]),v._v(" "),e("tr",[e("td",[e("code",[v._v("dG")])]),v._v(" "),e("td",[v._v("删除到文档结尾处")])]),v._v(" "),e("tr",[e("td",[e("code",[v._v("d1G")])]),v._v(" "),e("td",[v._v("删至文档首部")])])])]),v._v(" "),e("p",[v._v("除此之外，你还可以在命令之前加上数字，表示一次删除多行，如：")]),v._v(" "),e("p",[e("code",[v._v("2dd")]),v._v(" 表示一次删除 2 行。")]),v._v(" "),e("p",[v._v("我们来做如下练习：")]),v._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[v._v("cp")]),v._v(" /etc/protocols "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[v._v(".")]),v._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[v._v("vim")]),v._v(" protocols\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br"),e("span",{staticClass:"line-number"},[v._v("2")]),e("br")])]),e("p",[e("img",{attrs:{src:t(870),alt:"1"}})]),v._v(" "),e("h2",{attrs:{id:"命令模式操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令模式操作"}},[v._v("#")]),v._v(" 命令模式操作")]),v._v(" "),e("p",[e("code",[v._v("w")]),v._v("移动到下一个word\n"),e("code",[v._v("b")]),v._v("光标移动到上一个word\n"),e("code",[v._v("(")]),v._v("光标移动到上一个句子\n"),e("code",[v._v(")")]),v._v("光标移动到下一个句子\n"),e("code",[v._v("{")]),v._v("光标移动到上一个段落\n"),e("code",[v._v("}")]),v._v("光标移动到下一个段落")]),v._v(" "),e("hr"),v._v(" "),e("table",[e("thead",[e("tr",[e("th",[v._v("-")]),v._v(" "),e("th",[v._v("Change")]),v._v(" "),e("th",[v._v("Delete")]),v._v(" "),e("th",[v._v("Yank（copy）")])])]),v._v(" "),e("tbody",[e("tr",[e("td",[v._v("Line(一行)")]),v._v(" "),e("td",[v._v("cc")]),v._v(" "),e("td",[v._v("dd")]),v._v(" "),e("td",[v._v("yy")])]),v._v(" "),e("tr",[e("td",[v._v("Letter(字母)")]),v._v(" "),e("td",[v._v("cl")]),v._v(" "),e("td",[v._v("dl")]),v._v(" "),e("td",[v._v("yl")])]),v._v(" "),e("tr",[e("td",[v._v("Word(单词)")]),v._v(" "),e("td",[v._v("cw")]),v._v(" "),e("td",[v._v("dw")]),v._v(" "),e("td",[v._v("yw")])])])]),v._v(" "),e("h3",{attrs:{id:"一行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一行"}},[v._v("#")]),v._v(" 一行")]),v._v(" "),e("p",[e("code",[v._v("cc")]),v._v("change某行，删除该行并进入插入模式\n"),e("code",[v._v("dd")]),v._v("删除该行，不进入插入模式\n"),e("code",[v._v("yy")]),v._v("复制该行\n"),e("code",[v._v("p")]),v._v("粘贴(修改，删除的数据都会有一个隐形的复制操作)\n"),e("code",[v._v("p")]),v._v("粘贴在行的上面（小写）/字符在右/\n"),e("code",[v._v("P")]),v._v("粘贴在行的上面（大写）/字符左侧/")]),v._v(" "),e("blockquote",[e("p",[v._v("删除技巧 (普通模式）\n"),e("code",[v._v("dtc")]),v._v("删除光标到c之间的所有字符\n"),e("code",[v._v("rc")]),v._v("（replace）将光标位置替换为c\n"),e("code",[v._v("5dd")]),v._v("删除5行\n"),e("code",[v._v("5yy")]),v._v("复制五行数据\n"),e("code",[v._v("5x")]),v._v("删掉5个字符\n"),e("code",[v._v("R")]),v._v("替换（覆盖书写）\n"),e("code",[v._v("x")]),v._v("\t删除游标所在的字符\n"),e("code",[v._v("X")]),v._v("\t删除游标所在前一个字符\n"),e("code",[v._v("Delete")]),v._v("\t同x\n"),e("code",[v._v("d$")]),v._v("或"),e("code",[v._v("D")]),v._v("\t删除至行尾\n"),e("code",[v._v("d^")]),v._v("\t删除至行首\n"),e("code",[v._v("dG")]),v._v("\t删除到文档结尾处\n"),e("code",[v._v("d1G")]),v._v("\t删至文档首部")])]),v._v(" "),e("h3",{attrs:{id:"一个字母"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一个字母"}},[v._v("#")]),v._v(" 一个字母")]),v._v(" "),e("p",[e("code",[v._v("cl")]),v._v(" "),e("code",[v._v("dl")]),v._v(" "),e("code",[v._v("yl")])]),v._v(" "),e("h3",{attrs:{id:"一个单词"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一个单词"}},[v._v("#")]),v._v(" 一个单词")]),v._v(" "),e("p",[e("code",[v._v("cw")]),v._v(" "),e("code",[v._v("dw")]),v._v(" "),e("code",[v._v("yw")])]),v._v(" "),e("h3",{attrs:{id:"撤销与redo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#撤销与redo"}},[v._v("#")]),v._v(" 撤销与redo")]),v._v(" "),e("p",[e("code",[v._v("u")]),v._v("撤销\n"),e("code",[v._v("ctrl+r")]),v._v(" Redo")]),v._v(" "),e("h3",{attrs:{id:"搜索"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#搜索"}},[v._v("#")]),v._v(" 搜索")]),v._v(" "),e("p",[e("code",[v._v("/text")]),v._v("往后搜索text\n"),e("code",[v._v("?text")]),v._v("往前搜索text\n"),e("code",[v._v("n")]),v._v("搜索上一次同样的内容\n"),e("code",[v._v("N")]),v._v("往前（相对）搜索相同的内容")]),v._v(" "),e("h3",{attrs:{id:"文件内定位"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件内定位"}},[v._v("#")]),v._v(" 文件内定位")]),v._v(" "),e("p",[e("code",[v._v(":set number")]),v._v("开启行号")]),v._v(" "),e("p",[e("code",[v._v("G")]),v._v("跳转到文件的最后一行\n"),e("code",[v._v("1G")]),v._v(" 跳转到第一行（"),e("code",[v._v("1为行号")]),v._v("），"),e("code",[v._v("gg")]),v._v("也是跳转到第一行\n"),e("code",[v._v("ctrl+d")]),v._v("往下滚动半屏\n"),e("code",[v._v("ctrl +u")]),v._v("往上滚动半屏")]),v._v(" "),e("h3",{attrs:{id:"屏幕定位相关"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#屏幕定位相关"}},[v._v("#")]),v._v(" 屏幕定位相关")]),v._v(" "),e("p",[e("code",[v._v("H")]),v._v("(head)跳转到本屏显示的第一行\n"),e("code",[v._v("M")]),v._v(" (middle)跳转到本屏显示的中间\n"),e("code",[v._v("L")]),v._v("(last)跳转到本屏显示的最后一行\n"),e("code",[v._v("z+Enter")]),v._v("当前行为显示第一行\n"),e("code",[v._v("z-")]),v._v("当前行成为显示的最后一行")]),v._v(" "),e("h3",{attrs:{id:"查找与批量替换"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查找与批量替换"}},[v._v("#")]),v._v(" 查找与批量替换")]),v._v(" "),e("p",[e("code",[v._v(":s/")]),v._v("表示通过sed命令进行查找替换\n"),e("code",[v._v(":s/i/-")]),v._v("将本行的第一个"),e("code",[v._v("i")]),v._v("替换为"),e("code",[v._v("-")]),v._v(" "),e("code",[v._v(":s/i/-/g")]),v._v("最后的一个"),e("code",[v._v("g")]),v._v("表示替换该行的所有"),e("code",[v._v("i")]),v._v(" "),e("code",[v._v(":1,10s/i/-/g")]),v._v("替换1-10行所有的"),e("code",[v._v("i")]),v._v("为"),e("code",[v._v("-")]),v._v(" "),e("code",[v._v(":1,$s/i/-/g")]),v._v("末尾行用"),e("code",[v._v("$")]),v._v("表示到文件末尾")]),v._v(" "),e("h3",{attrs:{id:"读取和保持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#读取和保持"}},[v._v("#")]),v._v(" 读取和保持")]),v._v(" "),e("p",[e("code",[v._v(":r filename")]),v._v("读入"),e("code",[v._v("filename")]),v._v("文件的内容到光标后\n"),e("code",[v._v(":1,20 w filename")]),v._v("将本文件的1-20行文本 写入到新的filename文件中\n"),e("code",[v._v(":1,$ w filename")]),v._v("全文本复制(另存编辑结果)\n"),e("code",[v._v(":3,$ w>>filename")]),v._v("管道追加")]),v._v(" "),e("h3",{attrs:{id:"设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置"}},[v._v("#")]),v._v(" 设置")]),v._v(" "),e("p",[e("code",[v._v(":set")]),v._v("可以查看设置项\n"),e("code",[v._v(":set all")]),v._v("查看所有设置")]),v._v(" "),e("h3",{attrs:{id:"速查卡"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#速查卡"}},[v._v("#")]),v._v(" 速查卡")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("Green = 存活级")])]),v._v(" "),e("li",[e("p",[v._v("Yellow = 感觉良好")])]),v._v(" "),e("li",[e("p",[v._v("Orange /  Blue  = 高级")])]),v._v(" "),e("li",[e("p",[v._v("Red = 专家级\n"),e("img",{attrs:{src:t(871),alt:"vim速查_20220218154434"}})])]),v._v(" "),e("li",[e("p",[e("img",{attrs:{src:t(872),alt:"vim_20220218154036"}})])])]),v._v(" "),e("h3",{attrs:{id:"简明vim练级攻略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简明vim练级攻略"}},[v._v("#")]),v._v(" 简明vim练级攻略")]),v._v(" "),e("p",[e("a",{attrs:{href:"https://coolshell.cn/articles/5426.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("vim简明攻略"),e("OutboundLink")],1)]),v._v(" "),e("p",[v._v("一个在线游戏，当然我们主要目的是学习，这个游戏也是有寓教于乐的性质，让你快速学会 vim 的基础操作：")]),v._v(" "),e("p",[e("a",{attrs:{href:"http://vim-adventures.com/",target:"_blank",rel:"noopener noreferrer"}},[v._v("vim 大冒险"),e("OutboundLink")],1)]),v._v(" "),e("p",[e("img",{attrs:{src:t(873),alt:"image-20220531191308104"}})]),v._v(" "),e("h2",{attrs:{id:"idea常用操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#idea常用操作"}},[v._v("#")]),v._v(" IDEA常用操作")]),v._v(" "),e("p",[e("code",[v._v("^$")]),v._v("移动到行首行末，")]),v._v(" "),e("p",[v._v("用"),e("code",[v._v("w")]),v._v("移动到单词结尾，")]),v._v(" "),e("p",[e("code",[v._v("yyp")]),v._v("复制粘贴当前行，")]),v._v(" "),e("p",[e("code",[v._v("gg")]),v._v("跳到文件开头，")]),v._v(" "),e("p",[e("code",[v._v("G")]),v._v("跳到文件结尾，")]),v._v(" "),e("p",[e("code",[v._v("gd")]),v._v("跳到定义，")]),v._v(" "),e("p",[e("code",[v._v("/def")]),v._v("跳到下个函数开始的地方。")]),v._v(" "),e("p",[v._v("用"),e("code",[v._v("cw")]),v._v("修改当前单词，用"),e("code",[v._v("cf.")]),v._v("直接修改到下个.号。\n用"),e("code",[v._v("ci(")]),v._v("直接修改括号里的内容。")])])}),[],!1,null,null,null);_.default=a.exports},869:function(v,_,t){v.exports=t.p+"assets/img/document-uid49570labid16timestamp1491030562304.c1ecccb6.png"},870:function(v,_,t){v.exports=t.p+"assets/img/document-uid49570labid16timestamp1491030616700.9795cc7e.png"},871:function(v,_,t){v.exports=t.p+"assets/img/20220218154434-16539955484873.3d0df142.png"},872:function(v,_,t){v.exports=t.p+"assets/img/vim_20220218154036.b3c3449f.jpg"},873:function(v,_,t){v.exports=t.p+"assets/img/image-20220531191308104.0a550afd.png"}}]);