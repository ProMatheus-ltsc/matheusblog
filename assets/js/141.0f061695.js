(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{1375:function(v,t,_){"use strict";_.r(t);var e=_(24),s=Object(e.a)({},(function(){var v=this,t=v.$createElement,_=v._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"vim高级功能"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vim高级功能"}},[v._v("#")]),v._v(" Vim高级功能")]),v._v(" "),_("p"),_("div",{staticClass:"table-of-contents"},[_("ul")]),_("p"),v._v(" "),_("h1",{attrs:{id:"多文件编辑"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#多文件编辑"}},[v._v("#")]),v._v(" 多文件编辑")]),v._v(" "),_("h4",{attrs:{id:"使用-vim-编辑多个文件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用-vim-编辑多个文件"}},[v._v("#")]),v._v(" 使用 vim 编辑多个文件")]),v._v(" "),_("p",[v._v("编辑多个文件有两种形式，一种是在进入 vim 前使用的参数就是多个文件。另一种就是进入 vim 后再编辑其他的文件。 同时创建两个新文件并编辑")]),v._v(" "),_("div",{staticClass:"language-bash line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[_("span",{pre:!0,attrs:{class:"token function"}},[v._v("vim")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[v._v("1")]),v._v(".txt "),_("span",{pre:!0,attrs:{class:"token number"}},[v._v("2")]),v._v(".txt\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])]),_("p",[v._v("默认进入"),_("code",[v._v("1.txt")]),v._v("文件的编辑界面")]),v._v(" "),_("ul",[_("li",[v._v("命令行模式下输入 "),_("code",[v._v(":n")]),v._v(" 编辑 2.txt 文件，可以加 "),_("code",[v._v("!")]),v._v(" 即 "),_("code",[v._v(":n!")]),v._v(" 强制切换，之前一个文件的输入没有保存，仅仅切换到另一个文件")]),v._v(" "),_("li",[v._v("命令行模式下输入 "),_("code",[v._v(":N")]),v._v(" 编辑 1.txt 文件，可以加 "),_("code",[v._v("!")]),v._v(" 即 "),_("code",[v._v(":N!")]),v._v(" 强制切换，之前文件内的输入没有保存，仅仅是切换到另一个文件")])]),v._v(" "),_("h4",{attrs:{id:"进入-vim-后打开新文件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#进入-vim-后打开新文件"}},[v._v("#")]),v._v(" 进入 vim 后打开新文件")]),v._v(" "),_("ul",[_("li",[v._v("命令行模式下输入"),_("code",[v._v(":e 3.txt")]),v._v(" 打开新文件 3.txt")]),v._v(" "),_("li",[v._v("命令行模式下输入"),_("code",[v._v(":e#")]),v._v(" 回到前一个文件")]),v._v(" "),_("li",[v._v("命令行模式下输入"),_("code",[v._v(":ls")]),v._v("可以列出以前编辑过的文档")]),v._v(" "),_("li",[v._v("命令行模式下输入"),_("code",[v._v(":b 2.txt")]),v._v("（或者编号）可以直接进入文件 2.txt 编辑")]),v._v(" "),_("li",[v._v("命令行模式下输入"),_("code",[v._v(":bd 2.txt")]),v._v("（或者编号）可以删除以前编辑过的列表中的文件项目")]),v._v(" "),_("li",[v._v("命令行模式下输入"),_("code",[v._v(":e! 4.txt")]),v._v("，新打开文件 4.txt，放弃正在编辑的文件")]),v._v(" "),_("li",[v._v("命令行模式下输入"),_("code",[v._v(":f")]),v._v(" 显示正在编辑的文件名")]),v._v(" "),_("li",[v._v("命令行模式下输入"),_("code",[v._v(":f new.txt")]),v._v("，改变正在编辑的文件名字为 new.txt")])]),v._v(" "),_("h4",{attrs:{id:"恢复文件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#恢复文件"}},[v._v("#")]),v._v(" 恢复文件")]),v._v(" "),_("blockquote",[_("p",[v._v("由于在线环境无法复现此场景，请在本地尝试。")])]),v._v(" "),_("p",[v._v("如果因为断电，终端意外关闭等原因造成文档没有保存，可以采用恢复方式。")]),v._v(" "),_("p",[v._v("vim 在编辑的时候会自动在当前文件目录下生成一个交换文件，一般以 "),_("code",[v._v("<filename>.swp")]),v._v(" 的格式保存，如果有多个版本的交换文件，还可能是 "),_("code",[v._v(".swn")]),v._v("，"),_("code",[v._v(".swm")]),v._v(" 等字母。注意这个交换文件的更新不是实时的，因为实时的更新会占用磁盘，影响系统其他正常进程的速度。")]),v._v(" "),_("p",[v._v("当 vim 意外终止且没有保存已编辑的内容时，可以使用交换文件对文件进行恢复，注意需要在编辑这个文件的地方进行编辑，因为交换文件默认在编辑的目录生成。")]),v._v(" "),_("p",[v._v("例如假设 "),_("code",[v._v("1.txt")]),v._v(" 意外关闭，我们可以输入 "),_("code",[v._v("vim")]),v._v(" 然后输入 "),_("code",[v._v(":recover 1.txt")]),v._v("。")]),v._v(" "),_("div",{staticClass:"language-bash line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[_("span",{pre:!0,attrs:{class:"token function"}},[v._v("vim")]),v._v("\n:recover "),_("span",{pre:!0,attrs:{class:"token number"}},[v._v("1")]),v._v(".txt\n\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# 出现如下提示按下回车即可恢复，如果有多个版本需要输入对应的交换文件前的数字选择要恢复的版本。")]),v._v("\nUsing swap "),_("span",{pre:!0,attrs:{class:"token function"}},[v._v("file")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[v._v('".1.txt.swp"')]),v._v("\nOriginal "),_("span",{pre:!0,attrs:{class:"token function"}},[v._v("file")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[v._v('"~/test/1.txt"')]),v._v("\nRecovery completed. You should check "),_("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("if")]),v._v(" everything is OK.\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("You might want to "),_("span",{pre:!0,attrs:{class:"token function"}},[v._v("write")]),v._v(" out this "),_("span",{pre:!0,attrs:{class:"token function"}},[v._v("file")]),v._v(" under another name\nand run "),_("span",{pre:!0,attrs:{class:"token function"}},[v._v("diff")]),v._v(" with the original "),_("span",{pre:!0,attrs:{class:"token function"}},[v._v("file")]),v._v(" to check "),_("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("for")]),v._v(" changes"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v("\nYou may want to delete the .swp "),_("span",{pre:!0,attrs:{class:"token function"}},[v._v("file")]),v._v(" now.\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br"),_("span",{staticClass:"line-number"},[v._v("3")]),_("br"),_("span",{staticClass:"line-number"},[v._v("4")]),_("br"),_("span",{staticClass:"line-number"},[v._v("5")]),_("br"),_("span",{staticClass:"line-number"},[v._v("6")]),_("br"),_("span",{staticClass:"line-number"},[v._v("7")]),_("br"),_("span",{staticClass:"line-number"},[v._v("8")]),_("br"),_("span",{staticClass:"line-number"},[v._v("9")]),_("br"),_("span",{staticClass:"line-number"},[v._v("10")]),_("br")])]),_("p",[v._v("或者输入 "),_("code",[v._v("vim -r")]),v._v(" 后直接选择用于恢复的文档的交换文件即可：")]),v._v(" "),_("div",{staticClass:"language-bash line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[_("span",{pre:!0,attrs:{class:"token function"}},[v._v("vim")]),v._v(" -r "),_("span",{pre:!0,attrs:{class:"token number"}},[v._v("1")]),v._v(".txt\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])]),_("h1",{attrs:{id:"可视模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#可视模式"}},[v._v("#")]),v._v(" 可视模式")]),v._v(" "),_("h4",{attrs:{id:"可视模式命令简介"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#可视模式命令简介"}},[v._v("#")]),v._v(" 可视模式命令简介")]),v._v(" "),_("ul",[_("li",[v._v("在普通模式下输入 "),_("code",[v._v("v")]),v._v("（小写），进入字符选择模式，就可以移动光标，光标走过的地方就会选取。再次按下 v 后就会取消选取。")]),v._v(" "),_("li",[v._v("在普通模式下输入 "),_("code",[v._v("Shift+v")]),v._v("（小写），进入行选择模式，按下 V 之后就会把整行选取，您可以上下移动光标选更多的行，同样，再按一次 "),_("code",[v._v("Shift+v")]),v._v(" 就可以取消选取。")]),v._v(" "),_("li",[v._v("在普通模式下输入 "),_("code",[v._v("Ctrl+v")]),v._v("（小写），这是区域选择模式，可以进行矩形区域选择，再按一次 "),_("code",[v._v("Ctrl+v")]),v._v(" 取消选取。")]),v._v(" "),_("li",[v._v("在可视模式下输入 "),_("code",[v._v("d")]),v._v(" 删除选取区域内容")]),v._v(" "),_("li",[v._v("在可视模式下输入 "),_("code",[v._v("y")]),v._v(" 复制选取区域内容")])]),v._v(" "),_("h1",{attrs:{id:"视窗操作"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#视窗操作"}},[v._v("#")]),v._v(" 视窗操作")]),v._v(" "),_("h4",{attrs:{id:"视窗操作简介"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#视窗操作简介"}},[v._v("#")]),v._v(" 视窗操作简介")]),v._v(" "),_("p",[v._v("vim 可以在一个界面里打开多个窗口进行编辑，这些编辑窗口称为 vim 的视窗。 打开方法有很多种，例如可以使用在命令行模式下输入 "),_("code",[v._v(":new")]),v._v(" 打开一个新的 vim 视窗，并进入视窗编辑一个新文件（普通模式下输入 "),_("code",[v._v("Ctrl+w")]),v._v(" 也可以），除了 "),_("code",[v._v(":new")]),v._v(" 命令，下述列举的多种方法也可以在命令模式或普通模式下打开新的视窗：")]),v._v(" "),_("p",[_("strong",[v._v("注意：快捷键可能会与浏览器的快捷键冲突，可换为 IE 浏览器进行实验或者在浏览器设置里禁用浏览器快捷键。")])]),v._v(" "),_("ul",[_("li",[v._v("命令行模式下输入 "),_("code",[v._v(":sp 1.txt")]),v._v(" 打开新的水平分屏视窗来编辑 1.txt")]),v._v(" "),_("li",[v._v("命令行模式下输入 "),_("code",[v._v(":vsp 2.txt")]),v._v(" 打开新的垂直分屏视窗来编辑 2.txt")]),v._v(" "),_("li",[v._v("普通模式下 "),_("code",[v._v("Ctrl+w s")]),v._v(" 将当前窗口分割成两个水平的窗口")]),v._v(" "),_("li",[v._v("普通模式下 "),_("code",[v._v("Ctrl+w v")]),v._v(" 将当前窗口分割成两个垂直的窗口")]),v._v(" "),_("li",[v._v("普通模式下 "),_("code",[v._v("Ctrl+w q")]),v._v(" 即 :q 结束分割出来的视窗。如果在新视窗中有输入需要使用强制符！即:q!")]),v._v(" "),_("li",[v._v("普通模式下 "),_("code",[v._v("Ctrl+w o")]),v._v(" 打开一个视窗并且隐藏之前的所有视窗")]),v._v(" "),_("li",[v._v("普通模式下 "),_("code",[v._v("Ctrl+w j")]),v._v(" 移至下面视窗")]),v._v(" "),_("li",[v._v("普通模式下 "),_("code",[v._v("Ctrl+w k")]),v._v(" 移至上面视窗")]),v._v(" "),_("li",[v._v("普通模式下 "),_("code",[v._v("Ctrl+w h")]),v._v(" 移至左边视窗")]),v._v(" "),_("li",[v._v("普通模式下 "),_("code",[v._v("Ctrl+w l")]),v._v(" 移至右边视窗")]),v._v(" "),_("li",[v._v("普通模式下 "),_("code",[v._v("Ctrl+w J")]),v._v(" 将当前视窗移至下面")]),v._v(" "),_("li",[v._v("普通模式下 "),_("code",[v._v("Ctrl+w K")]),v._v(" 将当前视窗移至上面")]),v._v(" "),_("li",[v._v("普通模式下 "),_("code",[v._v("Ctrl+w H")]),v._v(" 将当前视窗移至左边")]),v._v(" "),_("li",[v._v("普通模式下 "),_("code",[v._v("Ctrl+w L")]),v._v(" 将当前视窗移至右边")]),v._v(" "),_("li",[v._v("普通模式下 "),_("code",[v._v("Ctrl+w -")]),v._v(" 减小视窗的高度")]),v._v(" "),_("li",[v._v("普通模式下 "),_("code",[v._v("Ctrl+w +")]),v._v(" 增加视窗的高度")]),v._v(" "),_("li",[v._v("命令行模式下输入 "),_("code",[v._v(":new")]),v._v(" 打开一个新的 vim 视窗")]),v._v(" "),_("li",[v._v("命令行模式下输入 "),_("code",[v._v(":vsp 2.txt")]),v._v(" 打开新的横向视窗来编辑 2.txt")]),v._v(" "),_("li",[v._v("命令行模式下输入 "),_("code",[v._v(":vsp 3.txt")]),v._v(" 打开新的横向视窗来编辑 3.txt")]),v._v(" "),_("li",[v._v("如果使用非 chrome 浏览器可以使用 "),_("code",[v._v("Ctrl+w")]),v._v(" 进行视窗间的跳转")]),v._v(" "),_("li",[v._v("分别在不同视窗的命令行模式下输入 "),_("code",[v._v(":q!")]),v._v(" 退出多视窗编辑")])]),v._v(" "),_("h1",{attrs:{id:"文档加密"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#文档加密"}},[v._v("#")]),v._v(" 文档加密")]),v._v(" "),_("h4",{attrs:{id:"创建加密文档"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#创建加密文档"}},[v._v("#")]),v._v(" 创建加密文档")]),v._v(" "),_("div",{staticClass:"language-bash line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[_("span",{pre:!0,attrs:{class:"token function"}},[v._v("vim")]),v._v(" -x file1\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])]),_("p",[v._v("输入您的密码，确认密码，这样在下一次打开时，vim 就会要求你输入密码。")]),v._v(" "),_("h1",{attrs:{id:"在vim执行外部命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#在vim执行外部命令"}},[v._v("#")]),v._v(" 在Vim执行外部命令")]),v._v(" "),_("p",[v._v("在命令行模式中输入 "),_("code",[v._v("!")]),v._v(" 可以执行外部的 shell 命令。")]),v._v(" "),_("ul",[_("li",[_("code",[v._v(":!ls")]),v._v(" 用于显示当前目录的内容")]),v._v(" "),_("li",[_("code",[v._v(":!rm FILENAME")]),v._v(" 用于删除名为 FILENAME 的文件")]),v._v(" "),_("li",[_("code",[v._v(":w FILENAME")]),v._v(" 可将当前 VIM 中正在编辑的文件另存为 FILENAME 文件")])]),v._v(" "),_("h1",{attrs:{id:"帮助系统"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#帮助系统"}},[v._v("#")]),v._v(" 帮助系统")]),v._v(" "),_("h4",{attrs:{id:"vim-中的查看帮助"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vim-中的查看帮助"}},[v._v("#")]),v._v(" vim 中的查看帮助")]),v._v(" "),_("ul",[_("li",[v._v("普通模式下按 "),_("code",[v._v("F1")]),v._v(" 打开 "),_("code",[v._v("vim")]),v._v(" 自己预设的帮助文档")]),v._v(" "),_("li",[v._v("命令行模式下输入 "),_("code",[v._v(":h shiftwidth")]),v._v(" 打开名为 "),_("code",[v._v("shiftwidth")]),v._v(" 的帮助文件")]),v._v(" "),_("li",[v._v("命令行模式下输入 "),_("code",[v._v(":ver")]),v._v(" 显示版本及参数")])]),v._v(" "),_("h1",{attrs:{id:"功能设定"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#功能设定"}},[v._v("#")]),v._v(" 功能设定")]),v._v(" "),_("h4",{attrs:{id:"vim-的功能设定"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vim-的功能设定"}},[v._v("#")]),v._v(" vim 的功能设定")]),v._v(" "),_("p",[v._v("可以在编辑文件的时候进行功能设定，如命令行模式下输入 "),_("code",[v._v(":set nu")]),v._v("（显示行数），设定值退出 vim 后不会保存。要永久保存配置需要修改 vim 配置文件。")]),v._v(" "),_("p",[v._v("vim 的配置文件 "),_("code",[v._v("~/.vimrc")]),v._v("（实验楼环境中配置文件在 "),_("code",[v._v("/etc/vim/vimrc")]),v._v("），可以打开文件进行修改，不过务必小心不要影响 vim 正常使用。")]),v._v(" "),_("h4",{attrs:{id:"获取目前的设定"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#获取目前的设定"}},[v._v("#")]),v._v(" 获取目前的设定")]),v._v(" "),_("ul",[_("li",[v._v("命令行模式下输入 "),_("code",[v._v(":set")]),v._v(" 或者 "),_("code",[v._v(":se")]),v._v(" 显示所有修改过的配置")]),v._v(" "),_("li",[v._v("命令行模式下输入 "),_("code",[v._v(":set all")]),v._v(" 显示所有的设定值")]),v._v(" "),_("li",[v._v("命令行模式下输入 "),_("code",[v._v(":set <option>?")]),v._v(" 显示 option 的设定值")]),v._v(" "),_("li",[v._v("命令行模式下输入 "),_("code",[v._v(":set nooption")]),v._v(" 取消当前设定值")])]),v._v(" "),_("h4",{attrs:{id:"set-功能的说明"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#set-功能的说明"}},[v._v("#")]),v._v(" set 功能的说明")]),v._v(" "),_("ul",[_("li",[v._v("命令行模式下输入 "),_("code",[v._v(":set autoindent(ai)")]),v._v(" 设置自动缩进")]),v._v(" "),_("li",[v._v("命令行模式下输入 "),_("code",[v._v(":set autowrite(aw)")]),v._v(" 设置自动存档，默认未打开")]),v._v(" "),_("li",[v._v("命令行模式下输入 "),_("code",[v._v(":set background=dark")]),v._v(" 或 "),_("code",[v._v("light")]),v._v("，设置背景风格")]),v._v(" "),_("li",[v._v("命令行模式下输入 "),_("code",[v._v(":set backup(bk)")]),v._v(" 设置自动备份，默认未打开")]),v._v(" "),_("li",[v._v("命令行模式下输入 "),_("code",[v._v(": set cindent(cin)")]),v._v(" 设置 C 语言风格缩进")])]),v._v(" "),_("p",[v._v("更多详细参数请参考 "),_("a",{attrs:{href:"http://vimdoc.sourceforge.net/htmldoc/usr_toc.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("VIM 在线手册"),_("OutboundLink")],1),v._v("。")])])}),[],!1,null,null,null);t.default=s.exports}}]);