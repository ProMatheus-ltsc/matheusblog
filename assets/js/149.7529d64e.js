(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{1404:function(v,_,t){"use strict";t.r(_);var a=t(24),e=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"vim文档编辑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vim文档编辑"}},[v._v("#")]),v._v(" Vim文档编辑")]),v._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul")]),t("p"),v._v(" "),t("h1",{attrs:{id:"vim重复命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vim重复命令"}},[v._v("#")]),v._v(" Vim重复命令")]),v._v(" "),t("h4",{attrs:{id:"重复执行上次命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重复执行上次命令"}},[v._v("#")]),v._v(" 重复执行上次命令")]),v._v(" "),t("p",[v._v("在普通模式下 "),t("code",[v._v(".")]),v._v("(小数点)表示重复上一次的命令操作。")]),v._v(" "),t("p",[v._v("拷贝测试文件到本地目录：")]),v._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[v._v("cd")]),v._v(" /home/shiyanlou\n"),t("span",{pre:!0,attrs:{class:"token function"}},[v._v("cp")]),v._v(" /etc/protocols "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[v._v(".")]),v._v("\n")])]),v._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[v._v("1")]),t("br"),t("span",{staticClass:"line-number"},[v._v("2")]),t("br")])]),t("p",[v._v("打开文件进行编辑")]),v._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[v._v("vim")]),v._v(" protocols\n")])]),v._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[v._v("1")]),t("br")])]),t("p",[v._v("普通模式下输入 "),t("code",[v._v("x")]),v._v("，删除第一个字符，输入 "),t("code",[v._v(".")]),v._v("(小数点)会再次删除一个字符，除此之外也可以重复 "),t("code",[v._v("dd")]),v._v(" 的删除操作。")]),v._v(" "),t("h4",{attrs:{id:"执行指定次数相同的命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行指定次数相同的命令"}},[v._v("#")]),v._v(" 执行指定次数相同的命令")]),v._v(" "),t("p",[v._v("进入普通模式输入 "),t("code",[v._v("N<command>")]),v._v("，N 表示重复后面的次数.")]),v._v(" "),t("p",[v._v("在普通模式下，你还可以使用 "),t("code",[v._v("dw")]),v._v(" 或者 "),t("code",[v._v("daw")]),v._v("(delete a word)删除一个单词，所以你可以很容易的联想到 "),t("code",[v._v("dnw")]),v._v("("),t("strong",[v._v("n 替换为相应数字")]),v._v(") 表示删除 n 个单词。")]),v._v(" "),t("h1",{attrs:{id:"光标的快速跳转"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#光标的快速跳转"}},[v._v("#")]),v._v(" 光标的快速跳转")]),v._v(" "),t("p",[v._v("普通模式下，下列命令可以让光标快速调转到指定位置，我们分别讨论快速实现"),t("strong",[v._v("行间")]),v._v("跳转和"),t("strong",[v._v("行内")]),v._v("跳转。")]),v._v(" "),t("h4",{attrs:{id:"行间跳转"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#行间跳转"}},[v._v("#")]),v._v(" 行间跳转")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("命令")]),v._v(" "),t("th",[v._v("说明")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[t("code",[v._v("nG")]),v._v("(n Shift+g) / "),t("code",[v._v("ngg")])]),v._v(" "),t("td",[v._v("游标移动到第 n 行 "),t("strong",[v._v("(如果默认没有显示行号，请先进入命令模式，输入 "),t("code",[v._v(":set nu")]),v._v(" 以显示行号)")])])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("gg")])]),v._v(" "),t("td",[v._v("游标移动到到第一行")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("G")]),v._v("(Shift+g)")]),v._v(" "),t("td",[v._v("到最后一行")])])])]),v._v(" "),t("p",[t("strong",[v._v("小技巧：你在完成依次跳转后，可以使用 "),t("code",[v._v("Ctrl+o")]),v._v(" 快速回到上一次(跳转前)光标所在位置")]),v._v(",这个技巧很实用，比如当你在写代码时，忽然想起有个 bug，需要修改，这时候你跳过去改好了，只需要按下 "),t("code",[v._v("Ctrl+o")]),v._v(" 就可以回到你之前的位置。vim 中会用很多类似的小技巧就等着你去发掘。")]),v._v(" "),t("h4",{attrs:{id:"行内跳转"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#行内跳转"}},[v._v("#")]),v._v(" 行内跳转")]),v._v(" "),t("p",[v._v("普通模式下使用下列命令在行内按照单词为单位进行跳转：")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("命令")]),v._v(" "),t("th",[v._v("说明")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[t("code",[v._v("w")])]),v._v(" "),t("td",[v._v("到下一个单词的开头")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("e")])]),v._v(" "),t("td",[v._v("到当前单词的结尾")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("b")])]),v._v(" "),t("td",[v._v("到前一个单词的开头")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("ge")])]),v._v(" "),t("td",[v._v("到前一个单词的结尾")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("0")]),v._v("或"),t("code",[v._v("^")])]),v._v(" "),t("td",[v._v("到行头")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("$")])]),v._v(" "),t("td",[v._v("到行尾")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("f<字母>")])]),v._v(" "),t("td",[v._v("向后搜索<字母>并跳转到第一个匹配的位置(非常实用)")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("F<字母>")])]),v._v(" "),t("td",[v._v("向前搜索<字母>并跳转到第一个匹配的位置")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("t<字母>")])]),v._v(" "),t("td",[v._v("向后搜索<字母>并跳转到第一个匹配位置之前的一个字母(不常用)")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("T<字母>")])]),v._v(" "),t("td",[v._v("向前搜索<字母>并跳转到第一个匹配位置之后的一个字母(不常用)")])])])]),v._v(" "),t("h1",{attrs:{id:"复制粘贴和剪切"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复制粘贴和剪切"}},[v._v("#")]),v._v(" 复制粘贴和剪切")]),v._v(" "),t("h4",{attrs:{id:"复制及粘贴文本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复制及粘贴文本"}},[v._v("#")]),v._v(" 复制及粘贴文本")]),v._v(" "),t("ul",[t("li",[v._v("普通模式中使用 "),t("code",[v._v("y")]),v._v(" 复制")]),v._v(" "),t("li",[v._v("普通模式中，"),t("code",[v._v("yy")]),v._v(" 复制游标所在的整行（"),t("code",[v._v("3yy")]),v._v(" 表示复制 3 行）")]),v._v(" "),t("li",[v._v("普通模式中，"),t("code",[v._v("y^")]),v._v(" 复制至行首，或 "),t("code",[v._v("y0")]),v._v("。不含光标所在处字符。")]),v._v(" "),t("li",[v._v("普通模式中，"),t("code",[v._v("y$")]),v._v(" 复制至行尾。含光标所在处字符。")]),v._v(" "),t("li",[v._v("普通模式中，"),t("code",[v._v("yw")]),v._v(" 复制一个单词。")]),v._v(" "),t("li",[v._v("普通模式中，"),t("code",[v._v("y2w")]),v._v(" 复制两个单词。")]),v._v(" "),t("li",[v._v("普通模式中，"),t("code",[v._v("yG")]),v._v(" 复制至文本末。")]),v._v(" "),t("li",[v._v("普通模式中，"),t("code",[v._v("y1G")]),v._v(" 复制至文本开头。")]),v._v(" "),t("li",[v._v("普通模式中使用 "),t("code",[v._v("p")]),v._v(" 粘贴")]),v._v(" "),t("li",[v._v("普通模式中，"),t("code",[v._v("p")]),v._v("(小写)代表粘贴至光标后（下）")]),v._v(" "),t("li",[v._v("普通模式中，"),t("code",[v._v("P")]),v._v("(大写)代表粘贴至光标前（上）")])]),v._v(" "),t("h4",{attrs:{id:"剪切及粘贴"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#剪切及粘贴"}},[v._v("#")]),v._v(" 剪切及粘贴")]),v._v(" "),t("p",[v._v("其实前面讲得 "),t("code",[v._v("dd")]),v._v(" 删除命令就是剪切，你每次 "),t("code",[v._v("dd")]),v._v(" 删除文档内容后，便可以使用 "),t("code",[v._v("p")]),v._v(" 来粘贴，也这一点可以让我们实现一个很爽快的功能——交换上下行。")]),v._v(" "),t("p",[t("code",[v._v("ddp")]),v._v("，就这么简单，即实现了快速交换光标所在行与它下面的行。")])])}),[],!1,null,null,null);_.default=e.exports}}]);