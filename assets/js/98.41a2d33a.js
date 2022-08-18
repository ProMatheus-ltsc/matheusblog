(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{1588:function(t,v,a){"use strict";a.r(v);var _=a(65),e=Object(_.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"ubuntu"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu"}},[t._v("#")]),t._v(" Ubuntu")]),t._v(" "),_("p"),_("div",{staticClass:"table-of-contents"},[_("ul",[_("li",[_("a",{attrs:{href:"#_0-linux学习路径"}},[t._v("0.Linux学习路径")])]),_("li",[_("a",{attrs:{href:"#_1-终端"}},[t._v("1. 终端")])]),_("li",[_("a",{attrs:{href:"#_2-软件安装"}},[t._v("2. 软件安装")])]),_("li",[_("a",{attrs:{href:"#_3-常用快捷键"}},[t._v("3. 常用快捷键")]),_("ul",[_("li",[_("a",{attrs:{href:"#ubuntu-全局的常用快捷键"}},[t._v("Ubuntu 全局的常用快捷键：")])]),_("li",[_("a",{attrs:{href:"#命令行的一些常用快捷键"}},[t._v("命令行的一些常用快捷键：")])]),_("li",[_("a",{attrs:{href:"#学会使用通配符"}},[t._v("学会使用通配符")])])])]),_("li",[_("a",{attrs:{href:"#_4-用户管理"}},[t._v("4. 用户管理")]),_("ul",[_("li",[_("a",{attrs:{href:"#_4-1-查看用户"}},[t._v("4.1 查看用户")])]),_("li",[_("a",{attrs:{href:"#_4-2-创建用户"}},[t._v("4.2 创建用户")])])])]),_("li",[_("a",{attrs:{href:"#_5-文件目录"}},[t._v("5. 文件目录")]),_("ul",[_("li",[_("a",{attrs:{href:"#_5-1-目录"}},[t._v("5.1 目录")])]),_("li",[_("a",{attrs:{href:"#_5-2-ls-命令"}},[t._v("5.2 ls 命令")])]),_("li",[_("a",{attrs:{href:"#_5-3-cd-命令"}},[t._v("5.3 cd 命令")])]),_("li",[_("a",{attrs:{href:"#_5-4-pwd-命令"}},[t._v("5.4 pwd 命令")])])])]),_("li",[_("a",{attrs:{href:"#_6-文件基本操作"}},[t._v("6. 文件基本操作")]),_("ul",[_("li",[_("a",{attrs:{href:"#_6-1-新建文件"}},[t._v("6.1 新建文件")])]),_("li",[_("a",{attrs:{href:"#_6-2-新建目录"}},[t._v("6.2 新建目录")])]),_("li",[_("a",{attrs:{href:"#_6-3-删除文件"}},[t._v("6.3 删除文件")])]),_("li",[_("a",{attrs:{href:"#_6-4-删除目录"}},[t._v("6.4 删除目录")])]),_("li",[_("a",{attrs:{href:"#_6-5-复制文件"}},[t._v("6.5 复制文件")])]),_("li",[_("a",{attrs:{href:"#_6-6-复制目录"}},[t._v("6.6 复制目录")])]),_("li",[_("a",{attrs:{href:"#_6-7-移动和重命名文件"}},[t._v("6.7 移动和重命名文件")])]),_("li",[_("a",{attrs:{href:"#_6-8-查看文件"}},[t._v("6.8 查看文件")])]),_("li",[_("a",{attrs:{href:"#_6-9-grep-命令"}},[t._v("6.9 grep 命令")])]),_("li",[_("a",{attrs:{href:"#_7-文件打包和压缩"}},[t._v("7. 文件打包和压缩")])])])]),_("li",[_("a",{attrs:{href:"#_8-vim"}},[t._v("8. vim")]),_("ul",[_("li",[_("a",{attrs:{href:"#_8-1-vim-模式"}},[t._v("8.1 vim 模式")])]),_("li",[_("a",{attrs:{href:"#_8-2-常用模式的切换"}},[t._v("8.2 常用模式的切换")])]),_("li",[_("a",{attrs:{href:"#_8-3-进入-vim"}},[t._v("8.3 进入 vim")])]),_("li",[_("a",{attrs:{href:"#_8-4-删除文本"}},[t._v("8.4 删除文本")])]),_("li",[_("a",{attrs:{href:"#_8-5-退出-vim"}},[t._v("8.5 退出 vim")])])])])])]),_("p"),t._v(" "),_("h2",{attrs:{id:"_0-linux学习路径"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_0-linux学习路径"}},[t._v("#")]),t._v(" 0.Linux学习路径")]),t._v(" "),_("p",[_("img",{attrs:{src:a(512),alt:"20220218170810"}})]),t._v(" "),_("h2",{attrs:{id:"_1-终端"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-终端"}},[t._v("#")]),t._v(" 1. 终端")]),t._v(" "),_("p",[t._v("使用 Linux 时，并不是直接与系统打交道，而是通过一个叫做 Shell 的中间程序来完成的，在图形界面下为了实现让我们在一个窗口中完成用户输入和显示输出，Linux 系统还提供了一个叫做终端模拟器的程序（Terminal），实验楼环境中的终端程序是 xfce 桌面环境自带的 xfce-terminal，它与 Windows 中的控制台 (Console) 是有区别的。")]),t._v(" "),_("p",[t._v("终端本质上是对应着 Linux 上的 /dev/tty 设备，Linux 的多用户登陆就是通过不同的 /dev/tty 设备完成的，Linux 默认提供了 6 个纯命令行界面的 "),_("code",[t._v("terminal")]),t._v("（准确的说这里应该是 6 个 virtual consoles）来让用户登录。在物理机系统上你可以通过使用 "),_("code",[t._v("[Ctrl]+[Alt]+[F1]～[F6]")]),t._v(" 进行切换，不过在我们的在线实验环境中可能无法切换，因为特殊功能按键会被你的主机系统劫持。当你切换到其中一个终端后想要切换回图形界面，你可以按下 "),_("code",[t._v("[Ctrl]+[Alt]+[F7]")]),t._v("来完成。")]),t._v(" "),_("h2",{attrs:{id:"_2-软件安装"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-软件安装"}},[t._v("#")]),t._v(" 2. 软件安装")]),t._v(" "),_("p",[t._v("常用的一种安装方式：")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("sudo apt-get install 软件名\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("p",[t._v("这种方法会自动下载软件包到 "),_("code",[t._v("/var/cache/apt/archives")]),t._v("目录下并安装。")]),t._v(" "),_("h2",{attrs:{id:"_3-常用快捷键"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-常用快捷键"}},[t._v("#")]),t._v(" 3. 常用快捷键")]),t._v(" "),_("h3",{attrs:{id:"ubuntu-全局的常用快捷键"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-全局的常用快捷键"}},[t._v("#")]),t._v(" Ubuntu 全局的常用快捷键：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("按键")]),t._v(" "),_("th",[t._v("作用")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("ctrl+alt+D")]),t._v(" "),_("td",[t._v("显示桌面 / 还原显示")])]),t._v(" "),_("tr",[_("td",[t._v("ctrl+alt+T")]),t._v(" "),_("td",[t._v("启动终端")])]),t._v(" "),_("tr",[_("td",[t._v("ctrl+alt+L")]),t._v(" "),_("td",[t._v("锁屏 / 显示登录对话框")])]),t._v(" "),_("tr",[_("td",[t._v("ctrl+alt+F1-F6")]),t._v(" "),_("td",[t._v("进入 1-6 命令行环境")])]),t._v(" "),_("tr",[_("td",[t._v("ctrl+alt+F7")]),t._v(" "),_("td",[t._v("进入图形界面环境")])]),t._v(" "),_("tr",[_("td",[t._v("alt+Tab")]),t._v(" "),_("td",[t._v("在当前桌面的窗口间顺序切换")])]),t._v(" "),_("tr",[_("td",[t._v("printscreen")]),t._v(" "),_("td",[t._v("截图-全屏")])]),t._v(" "),_("tr",[_("td",[t._v("alt+F10")]),t._v(" "),_("td",[t._v("最大化/取消最大化窗口")])]),t._v(" "),_("tr",[_("td",[t._v("alt+F9")]),t._v(" "),_("td",[t._v("最小化窗口")])]),t._v(" "),_("tr",[_("td",[t._v("alt+F1")]),t._v(" "),_("td",[t._v("下拉应用程序菜单")])]),t._v(" "),_("tr",[_("td",[t._v("alt+F2")]),t._v(" "),_("td",[t._v("打开运行应用程序的窗口")])]),t._v(" "),_("tr",[_("td",[t._v("ctrl+Q")]),t._v(" "),_("td",[t._v("关闭应用程序窗口")])])])]),t._v(" "),_("h3",{attrs:{id:"命令行的一些常用快捷键"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#命令行的一些常用快捷键"}},[t._v("#")]),t._v(" 命令行的一些常用快捷键：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("按键")]),t._v(" "),_("th",[t._v("作用")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("strong",[t._v("Tab")])]),t._v(" "),_("td",[_("strong",[t._v("命令补全")])])]),t._v(" "),_("tr",[_("td",[_("strong",[t._v("Ctrl+c")])]),t._v(" "),_("td",[_("strong",[t._v("强行终止当前程序（不会退出终端）")])])]),t._v(" "),_("tr",[_("td",[t._v("Ctrl+d")]),t._v(" "),_("td",[t._v("键盘输入结束或退出终端")])]),t._v(" "),_("tr",[_("td",[t._v("Ctrl+s")]),t._v(" "),_("td",[t._v("暂停当前程序，暂停后按下任意键恢复运行")])]),t._v(" "),_("tr",[_("td",[t._v("Ctrl+z")]),t._v(" "),_("td",[t._v("将当前程序放到后台运行，恢复到前台为命令fg")])]),t._v(" "),_("tr",[_("td",[t._v("Ctrl+a")]),t._v(" "),_("td",[t._v("将光标移至输入行头，相当于Home键")])]),t._v(" "),_("tr",[_("td",[t._v("Ctrl+e")]),t._v(" "),_("td",[t._v("将光标移至输入行末，相当于End键")])]),t._v(" "),_("tr",[_("td",[t._v("Ctrl+k")]),t._v(" "),_("td",[t._v("删除从光标所在位置到行末")])]),t._v(" "),_("tr",[_("td",[t._v("Alt+Backspace")]),t._v(" "),_("td",[t._v("向前删除一个单词")])]),t._v(" "),_("tr",[_("td",[t._v("Shift+PgUp")]),t._v(" "),_("td",[t._v("将终端显示向上滚动")])]),t._v(" "),_("tr",[_("td",[t._v("Shift+PgDn")]),t._v(" "),_("td",[t._v("将终端显示向下滚动")])]),t._v(" "),_("tr",[_("td",[t._v("向上键")]),t._v(" "),_("td",[t._v("恢复你之前输入过的命令")])])])]),t._v(" "),_("h3",{attrs:{id:"学会使用通配符"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#学会使用通配符"}},[t._v("#")]),t._v(" 学会使用通配符")]),t._v(" "),_("p",[t._v("通配符是一种特殊语句，主要有星号（*）和问号（?），用来对字符串进行模糊匹配（比如文件名、参数名）。当查找文件夹时，可以使用它来代替一个或多个真正字符；当不知道真正字符或者懒得输入完整名字时，常常使用通配符代替一个或多个真正字符。")]),t._v(" "),_("p",[t._v("终端里面输入的通配符是由 Shell 处理的，不是由所涉及的命令语句处理的，它只会出现在命令的“参数值”里（它不能出现在命令名称里， 命令不记得，那就用"),_("code",[t._v("Tab")]),t._v("补全）。当 Shell 在“参数值”中遇到了通配符时，Shell 会将其当作路径或文件名在磁盘上搜寻可能的匹配：若符合要求的匹配存在，则进行代换（路径扩展）；否则就将该通配符作为一个普通字符传递给“命令”，然后再由命令进行处理。总之，通配符实际上就是一种 Shell 实现的路径扩展功能。在通配符被处理后， Shell 会先完成该命令的重组，然后继续处理重组后的命令，直至执行该命令。")]),t._v(" "),_("p",[t._v("在创建文件的时候，如果需要一次性创建多个文件，比如："),_("strong",[t._v("“love_1_linux.txt，love_2_linux.txt，... love_10_linux.txt”")]),t._v("。在 Linux 中十分方便：")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("touch love_{1..10}_shiyanlou.txt\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("h2",{attrs:{id:"_4-用户管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-用户管理"}},[t._v("#")]),t._v(" 4. 用户管理")]),t._v(" "),_("h3",{attrs:{id:"_4-1-查看用户"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-查看用户"}},[t._v("#")]),t._v(" 4.1 查看用户")]),t._v(" "),_("p",[t._v("在终端中输入下面的命令可以查看当前登录用户的用户名。")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("$ who am i\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("h3",{attrs:{id:"_4-2-创建用户"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-创建用户"}},[t._v("#")]),t._v(" 4.2 创建用户")]),t._v(" "),_("p",[t._v("在 Linux 系统里， root 账户拥有整个系统至高无上的权利，比如"),_("code",[t._v("新建/添加")]),t._v("用户，在本环境中，已经具有root权限了，因为不用再加上sudo")]),t._v(" "),_("p",[t._v("新建一个叫 "),_("code",[t._v("lilei")]),t._v("的用户：")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("$ adduser lilei\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("p",[t._v("该命令会默认为新用户创建 home 目录，创建好用户后，可以使用该用户登录，使用如下命令切换用户：")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("$ su -l lilei\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("h2",{attrs:{id:"_5-文件目录"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-文件目录"}},[t._v("#")]),t._v(" 5. 文件目录")]),t._v(" "),_("h3",{attrs:{id:"_5-1-目录"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-目录"}},[t._v("#")]),t._v(" 5.1 目录")]),t._v(" "),_("p",[t._v("Linux 目录定义为四种交互作用的形态，如下表所示：")]),t._v(" "),_("p",[_("img",{attrs:{src:a(513),alt:"linux20220218171849"}})]),t._v(" "),_("h3",{attrs:{id:"_5-2-ls-命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-ls-命令"}},[t._v("#")]),t._v(" 5.2 ls 命令")]),t._v(" "),_("p",[t._v("ls 命令是 list 的缩写。ls 用来打印出当前目录的清单，可以查看文件权限(包括目录、文件夹、文件权限)查看目录信息等。")]),t._v(" "),_("p",[t._v("命令格式:")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("ls [选项] [目录名]\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("p",[t._v("常用参数：")]),t._v(" "),_("p",[_("code",[t._v("-a")]),t._v("：列出所有文件，包括以 . 开头的隐含文件\n"),_("code",[t._v("-l")]),t._v("：列出文件的权限、所有者、文件大小等信息\n"),_("code",[t._v("-d")]),t._v("：将目录象文件一样显示\n"),_("code",[t._v("-h")]),t._v("：列出文件大小\n"),_("code",[t._v("-t")]),t._v("：以文件修改时间排序\n操作实例：")]),t._v(" "),_("p",[t._v("列出 /home 文件夹下的所有文件和目录的详细资料，可以使用如下命令：")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("ls -a -l /home \nls -al /home\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br")])]),_("h3",{attrs:{id:"_5-3-cd-命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-cd-命令"}},[t._v("#")]),t._v(" 5.3 cd 命令")]),t._v(" "),_("p",[t._v("cd 命令是 change directory 的缩写,切换当前目录至指定的目录。")]),t._v(" "),_("p",[t._v("命令格式:")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("cd [目录名]\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("p",[t._v("常用范例：")]),t._v(" "),_("p",[t._v("（1）从当前目录进入系统根目录")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("cd /\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("p",[t._v("（2）从当前目录进入父目录")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("cd ..\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("p",[t._v("（3）从当前目录进入当前用户主目录")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("cd ~\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("p",[t._v("（4）从当前目录进入上次所在目录")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("cd -\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("h3",{attrs:{id:"_5-4-pwd-命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-pwd-命令"}},[t._v("#")]),t._v(" 5.4 pwd 命令")]),t._v(" "),_("p",[t._v("pwd 命令是 Print Working Directory 的缩写，判定当前目录在文件系统内的确切位置。")]),t._v(" "),_("p",[t._v("命令格式:")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("pwd [选项]\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("p",[t._v("常用参数：")]),t._v(" "),_("p",[_("code",[t._v("-P")]),t._v("：显示实际物理路径\n"),_("code",[t._v("-L")]),t._v("：当目录为连接路径时，显示连接路径")]),t._v(" "),_("h2",{attrs:{id:"_6-文件基本操作"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-文件基本操作"}},[t._v("#")]),t._v(" 6. 文件基本操作")]),t._v(" "),_("h3",{attrs:{id:"_6-1-新建文件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-新建文件"}},[t._v("#")]),t._v(" 6.1 新建文件")]),t._v(" "),_("p",[t._v("使用 "),_("code",[t._v("touch")]),t._v("或"),_("code",[t._v("vi")]),t._v(" 命令创建空白文件。")]),t._v(" "),_("p",[t._v("操作实例：")]),t._v(" "),_("p",[t._v("创建名为 test 的空白文件")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("$ touch test\n$ vi test\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br")])]),_("h3",{attrs:{id:"_6-2-新建目录"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-新建目录"}},[t._v("#")]),t._v(" 6.2 新建目录")]),t._v(" "),_("p",[t._v("使用 "),_("code",[t._v("mkdir")]),t._v("（make directories）命令可以创建一个空目录，也可同时指定创建目录的权限属性。")]),t._v(" "),_("p",[t._v("操作实例：")]),t._v(" "),_("p",[t._v("创建名为 mydir 的空目录，如：")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("$ mkdir mydir\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("p",[t._v("使用 "),_("code",[t._v("-p")]),t._v("参数，创建一个多级目录，如：")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("$ mkdir -p father/son/grandson\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("h3",{attrs:{id:"_6-3-删除文件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-删除文件"}},[t._v("#")]),t._v(" 6.3 删除文件")]),t._v(" "),_("p",[t._v("使用 "),_("code",[t._v("rm")]),t._v("（remove files or directories）命令删除一个文件 ，使用 "),_("code",[t._v("-f")]),t._v(" 参数表示强制删除。")]),t._v(" "),_("p",[t._v("操作实例：")]),t._v(" "),_("p",[t._v("删除 test 文件")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("$ rm test\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("p",[t._v("强制删除 test 文件")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("$ rm -f test\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("h3",{attrs:{id:"_6-4-删除目录"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-删除目录"}},[t._v("#")]),t._v(" 6.4 删除目录")]),t._v(" "),_("p",[t._v("使用 "),_("code",[t._v("rm")]),t._v("删除目录，需加上 "),_("code",[t._v("-r")]),t._v(" 或 "),_("code",[t._v("-R")]),t._v(" 参数，如：")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("$ rm -r father\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("h3",{attrs:{id:"_6-5-复制文件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-5-复制文件"}},[t._v("#")]),t._v(" 6.5 复制文件")]),t._v(" "),_("p",[t._v("使用 "),_("code",[t._v("cp")]),t._v("（copy）命令复制一个文件到指定目录。")]),t._v(" "),_("p",[t._v("操作实例：")]),t._v(" "),_("p",[t._v("将 test 文件 复制到 /home/shiyanlou/father/son/grandson 目录中，先进入 test 所在的目录。")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("$ cp test /home/shiyanlou/father/son/grandson\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("h3",{attrs:{id:"_6-6-复制目录"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-6-复制目录"}},[t._v("#")]),t._v(" 6.6 复制目录")]),t._v(" "),_("p",[t._v("复制文件也使用 "),_("code",[t._v("cp")]),t._v("命令，只不过要加 "),_("code",[t._v("-r")]),t._v("或 "),_("code",[t._v("-R")]),t._v("参数。")]),t._v(" "),_("p",[t._v("操作实例：")]),t._v(" "),_("p",[t._v("将 father 目录复制到 family 目录")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("$ cp -r father family\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("h3",{attrs:{id:"_6-7-移动和重命名文件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-7-移动和重命名文件"}},[t._v("#")]),t._v(" 6.7 移动和重命名文件")]),t._v(" "),_("p",[t._v("（1）移动文件")]),t._v(" "),_("p",[t._v("使用 "),_("code",[t._v("mv")]),t._v("（move or rename files）命令移动文件（剪切）。")]),t._v(" "),_("p",[t._v("命令格式：")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("mv 源目录文件 目的目录\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("p",[t._v("操作实例：")]),t._v(" "),_("p",[t._v("将文件 file1 移动到 filetest 目录")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("mv file1 filetest\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("p",[t._v("（2）重命名文件")]),t._v(" "),_("p",[t._v("也使用 "),_("code",[t._v("mv")]),t._v("，命令格式：")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("mv 旧的文件名 新的文件名\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("p",[t._v("操作实例：")]),t._v(" "),_("p",[t._v("将文件 file1 重命名为 file2")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("mv file1 file2\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("h3",{attrs:{id:"_6-8-查看文件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-8-查看文件"}},[t._v("#")]),t._v(" 6.8 查看文件")]),t._v(" "),_("p",[t._v("（1）"),_("code",[t._v("cat")]),t._v(","),_("code",[t._v("tac")]),t._v(" 和 "),_("code",[t._v("nl")]),t._v(" 命令")]),t._v(" "),_("p",[_("code",[t._v("cat")]),t._v(" 和 "),_("code",[t._v("tac")]),t._v(" 用来打印文件内容到标准输出（终端），其中 "),_("code",[t._v("cat")]),t._v(" 为正序显示，"),_("code",[t._v("tac")]),t._v(" 为倒序显示。")]),t._v(" "),_("p",[t._v("注意：这里的正序和倒序是行数，而不是内容。")]),t._v(" "),_("p",[t._v("操作实例：")]),t._v(" "),_("p",[t._v("查看 "),_("code",[t._v("/etc")]),t._v("目录下的 "),_("code",[t._v("passwd")]),t._v("文件")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("$ cat /etc/passwd\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("p",[t._v("如果要显示行号可以加上 "),_("code",[t._v("-n")]),t._v(" 参数")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("$ cat -n /etc/passwd\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("p",[_("code",[t._v("nl")]),t._v(" 命令是添加行号并打印。")]),t._v(" "),_("p",[t._v("（2）"),_("code",[t._v("more")]),t._v(" 和 "),_("code",[t._v("less")]),t._v(" 命令")]),t._v(" "),_("p",[_("code",[t._v("cat")]),t._v(" 用来快速查看一个文件的内容，而 "),_("code",[t._v("more")]),t._v(" 和 "),_("code",[t._v("less")]),t._v(' 用来"阅读"一个文件的内容。可以使用'),_("code",[t._v("Enter")]),t._v(" 向下滚动， "),_("code",[t._v("Space")]),t._v(" 向上滚动，"),_("code",[t._v("q")]),t._v(" 退出。")]),t._v(" "),_("p",[t._v("操作实例：")]),t._v(" "),_("p",[t._v("使用 more 命令打开 "),_("code",[t._v("passwd")]),t._v("文件：")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("$ more passwd\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("p",[t._v("（3）"),_("code",[t._v("head")]),t._v("和 "),_("code",[t._v("tail")]),t._v("命令")]),t._v(" "),_("p",[t._v("这两个命令都是查看文件的头几行，只不过 "),_("code",[t._v("head")]),t._v(" 是文件开头，"),_("code",[t._v("tail")]),t._v(" 是文件末尾。"),_("code",[t._v("- n")]),t._v(" 参数用来表示要查看的行数。")]),t._v(" "),_("p",[t._v("操作实例：")]),t._v(" "),_("p",[t._v("显示 "),_("code",[t._v("/etc/passwd")]),t._v(" 文件中的前5行内容")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("head -n 5 /etc/passwd\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("h3",{attrs:{id:"_6-9-grep-命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-9-grep-命令"}},[t._v("#")]),t._v(" 6.9 grep 命令")]),t._v(" "),_("p",[_("code",[t._v("grep")]),t._v("是个很强大的命令，用来找到文件中的匹配文本，并且能够接受"),_("code",[t._v("正则表达式")]),t._v("和"),_("code",[t._v("通配符")]),t._v("，同时可以用多个 grep 命令选项来生成各种格式的输出。")]),t._v(" "),_("p",[t._v("grep 可用于 shell 脚本，因为 grep 通过返回一个状态值来说明搜索的状态，如果模板搜索成功，则返回 0，如果搜索不成功，则返回 1，如果搜索的文件不存在，则返回 2。我们利用这些返回值就可进行一些自动化的文本处理工作。")]),t._v(" "),_("p",[t._v("命令格式：")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("grep [选项] pattern [file]\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("p",[t._v("操作实例：")]),t._v(" "),_("p",[t._v("将 "),_("code",[t._v("/etc/passwd")]),t._v("文件中出现"),_("code",[t._v("root")]),t._v(" 的行取出来，关键词部分加上颜色显示，可以使用如下命令")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('grep "root" /etc/passwd --color=auto\ncat /etc/passwd | grep "root" --color=auto\n')])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br")])]),_("p",[t._v("用"),_("code",[t._v("-v")]),t._v("参数进行反向选择，打印不匹配的行")]),t._v(" "),_("p",[t._v("将 /etc/passwd 文件中没有出现"),_("code",[t._v("root")]),t._v(" 和 "),_("code",[t._v("nologin")]),t._v(" 的行取出来，可以使用如下命令：")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('grep -v "root" /etc/passwd | grep -v "nologin"\n')])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("h3",{attrs:{id:"_7-文件打包和压缩"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-文件打包和压缩"}},[t._v("#")]),t._v(" 7. 文件打包和压缩")]),t._v(" "),_("p",[t._v("Linux 常见的压缩包格式包括： "),_("code",[t._v("*.zip")]),t._v(","),_("code",[t._v("*.rar")]),t._v(","),_("code",[t._v("*.7z")]),t._v(","),_("code",[t._v("*.gz")]),t._v(","),_("code",[t._v("*.xz")]),t._v(","),_("code",[t._v("*.bz2")]),t._v(","),_("code",[t._v("*.tar")]),t._v(","),_("code",[t._v("*.tar.gz")]),t._v(","),_("code",[t._v("*.tar.xz")]),t._v(","),_("code",[t._v("*tar.bz2")]),t._v("。")]),t._v(" "),_("p",[t._v("常见的 "),_("code",[t._v(".zip")]),t._v(" 和 "),_("code",[t._v("tar")]),t._v(" 压缩和解压命令：")]),t._v(" "),_("p",[t._v("zip：\n打包 ：zip something.zip something （目录请加 -r 参数）\n解包：unzip something.zip\n指定路径：-d 参数\ntar：\n打包：tar -zcvf something.tar something\n解包：tar -zxvf something.tar\n指定路径：-C 参数")]),t._v(" "),_("h2",{attrs:{id:"_8-vim"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_8-vim"}},[t._v("#")]),t._v(" 8. vim")]),t._v(" "),_("h3",{attrs:{id:"_8-1-vim-模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-vim-模式"}},[t._v("#")]),t._v(" 8.1 vim 模式")]),t._v(" "),_("p",[_("code",[t._v("vim")]),t._v(" 是由 "),_("code",[t._v("vi")]),t._v(" 衍生出来得到，vim 可以不用进行菜单或者鼠标操作，并且最小化组合键的操作，仅仅通过键盘来在这些模式之中切换。对文字录入员或者程序员可以大大增强速度和效率。")]),t._v(" "),_("p",[t._v("Vim 具有 6 种基本模式。")]),t._v(" "),_("h4",{attrs:{id:"普通模式-normal-mode"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#普通模式-normal-mode"}},[t._v("#")]),t._v(" 普通模式(Normal mode)")]),t._v(" "),_("p",[t._v("在普通模式中，用的编辑器命令，比如移动光标，删除文本等等。这也是Vim 启动后的默认模式。")]),t._v(" "),_("p",[t._v("在普通模式中，有很多方法可以进入插入模式。比较普通的方式是按 "),_("code",[t._v("a")]),t._v("（append／追加）键或者 "),_("code",[t._v("i")]),t._v("（insert／插入）键。")]),t._v(" "),_("h4",{attrs:{id:"插入模式-insert-mode"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#插入模式-insert-mode"}},[t._v("#")]),t._v(" 插入模式(Insert mode)")]),t._v(" "),_("p",[t._v("在这个模式中，大多数按键都会向文本缓冲中插入文本。\n在插入模式中，可以按 "),_("code",[t._v("ESC")]),t._v(" 键回到普通模式。")]),t._v(" "),_("h4",{attrs:{id:"可视模式-visual-mode"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#可视模式-visual-mode"}},[t._v("#")]),t._v(" 可视模式(Visual mode)")]),t._v(" "),_("p",[t._v("这个模式与普通模式比较相似。但是移动命令会扩大高亮的文本区域。")]),t._v(" "),_("h4",{attrs:{id:"选择模式-select-mode"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#选择模式-select-mode"}},[t._v("#")]),t._v(" 选择模式(Select mode)")]),t._v(" "),_("p",[t._v("这个模式中，可以用鼠标或者光标键高亮选择文本，不过输入任何字符的话，Vim 会用这个字符替换选择的高亮文本块，并且自动进入插入模式。")]),t._v(" "),_("h4",{attrs:{id:"命令行模式-command-line-mode"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#命令行模式-command-line-mode"}},[t._v("#")]),t._v(" 命令行模式(Command line mode)")]),t._v(" "),_("p",[t._v("在命令行模式中可以输入会被解释成并执行的文本。")]),t._v(" "),_("h4",{attrs:{id:"ex-模式-ex-mode"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ex-模式-ex-mode"}},[t._v("#")]),t._v(" Ex 模式(Ex mode)")]),t._v(" "),_("p",[t._v("这和命令行模式比较相似，在使用 "),_("code",[t._v(":visual")]),t._v("命令离开 Ex 模式前，可以一次执行多条命令。")]),t._v(" "),_("h3",{attrs:{id:"_8-2-常用模式的切换"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_8-2-常用模式的切换"}},[t._v("#")]),t._v(" 8.2 常用模式的切换")]),t._v(" "),_("p",[t._v("vim 启动进入普通模式，处于插入模式或命令行模式时只需要按"),_("code",[t._v("Esc")]),t._v(" 或者 "),_("code",[t._v("Ctrl+[")]),t._v("即可进入普通模式。")]),t._v(" "),_("p",[t._v("普通模式中按 "),_("code",[t._v("i")]),t._v("（插入）或"),_("code",[t._v("a")]),t._v("（附加）键都可以进入插入模式。")]),t._v(" "),_("p",[t._v("普通模式中按"),_("code",[t._v(":")]),t._v(" 进入命令行模式。")]),t._v(" "),_("p",[t._v("命令行模式中输入"),_("code",[t._v("wq")]),t._v("回车后保存并退出 vim。")]),t._v(" "),_("h3",{attrs:{id:"_8-3-进入-vim"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_8-3-进入-vim"}},[t._v("#")]),t._v(" 8.3 进入 vim")]),t._v(" "),_("p",[t._v("vim 后面加上你要打开的已存在的文件名或者不存在（则作为新建文件）的文件名。")]),t._v(" "),_("p",[t._v("打开 Xfce 终端，输入以下命令")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("$ vim practice_1.txt\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("p",[t._v("直接使用 vim 也可以打开 vim 编辑器，但是不会打开任何文件。")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("$ vim\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("p",[t._v("在普通模式下移动光标：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("按键")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("h")]),t._v(" "),_("td",[t._v("左")])]),t._v(" "),_("tr",[_("td",[t._v("l")]),t._v(" "),_("td",[t._v("右（小写L）")])]),t._v(" "),_("tr",[_("td",[t._v("j")]),t._v(" "),_("td",[t._v("下")])]),t._v(" "),_("tr",[_("td",[t._v("k")]),t._v(" "),_("td",[t._v("上")])]),t._v(" "),_("tr",[_("td",[t._v("w")]),t._v(" "),_("td",[t._v("移动到下一个单词")])]),t._v(" "),_("tr",[_("td",[t._v("b")]),t._v(" "),_("td",[t._v("移动到上一个单词")])])])]),t._v(" "),_("h3",{attrs:{id:"_8-4-删除文本"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_8-4-删除文本"}},[t._v("#")]),t._v(" 8.4 删除文本")]),t._v(" "),_("p",[t._v("在普通模式下删除文本：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("命令")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("x")]),t._v(" "),_("td",[t._v("删除游标所在的字符")])]),t._v(" "),_("tr",[_("td",[t._v("X")]),t._v(" "),_("td",[t._v("删除游标所在前一个字符")])]),t._v(" "),_("tr",[_("td",[t._v("Delete")]),t._v(" "),_("td",[t._v("同x")])]),t._v(" "),_("tr",[_("td",[t._v("dd")]),t._v(" "),_("td",[t._v("删除整行")])]),t._v(" "),_("tr",[_("td",[t._v("dw")]),t._v(" "),_("td",[t._v("删除一个单词（不适用中文）")])]),t._v(" "),_("tr",[_("td",[t._v("d$或D")]),t._v(" "),_("td",[t._v("删除至行尾")])]),t._v(" "),_("tr",[_("td",[t._v("d^")]),t._v(" "),_("td",[t._v("删除至行首")])]),t._v(" "),_("tr",[_("td",[t._v("dG")]),t._v(" "),_("td",[t._v("删除到文档结尾处")])]),t._v(" "),_("tr",[_("td",[t._v("d1G")]),t._v(" "),_("td",[t._v("删至文档首部")])])])]),t._v(" "),_("h3",{attrs:{id:"_8-5-退出-vim"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_8-5-退出-vim"}},[t._v("#")]),t._v(" 8.5 退出 vim")]),t._v(" "),_("p",[t._v("从普通模式输入"),_("code",[t._v(":")]),t._v(" 进入命令行模式，输入 "),_("code",[t._v("wq")]),t._v("回车，保存并退出编辑。")]),t._v(" "),_("p",[t._v("以下为其它几种退出方式：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("命令")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v(":q!")]),t._v(" "),_("td",[t._v("强制退出，不保存")])]),t._v(" "),_("tr",[_("td",[t._v(":q")]),t._v(" "),_("td",[t._v("退出")])]),t._v(" "),_("tr",[_("td",[t._v(":wq!")]),t._v(" "),_("td",[t._v("强制保存并退出")])]),t._v(" "),_("tr",[_("td",[t._v(":w <文件路径>")]),t._v(" "),_("td",[t._v("另存为")])]),t._v(" "),_("tr",[_("td",[t._v(":saveas 文件路径")]),t._v(" "),_("td",[t._v("另存为")])]),t._v(" "),_("tr",[_("td",[t._v(":x")]),t._v(" "),_("td",[t._v("保存并退出")])]),t._v(" "),_("tr",[_("td",[t._v(":wq")]),t._v(" "),_("td",[t._v("保存并退出")])])])]),t._v(" "),_("p",[t._v("普通模式下也可以输入 "),_("code",[t._v("Shift+zz")]),t._v("保存退出 vim。")])])}),[],!1,null,null,null);v.default=e.exports},512:function(t,v,a){t.exports=a.p+"assets/img/20220218170810.20c3d908.png"},513:function(t,v,a){t.exports=a.p+"assets/img/linux20220218171849.8cede985.png"}}]);