(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1595:function(s,a,e){"use strict";e.r(a);var t=e(65),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"linux-目录结构及文件基本操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-目录结构及文件基本操作"}},[s._v("#")]),s._v(" Linux 目录结构及文件基本操作")]),s._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#linux-目录结构"}},[s._v("Linux 目录结构")]),t("ul",[t("li",[t("a",{attrs:{href:"#_1-fhs-标准"}},[s._v("1.FHS 标准")])]),t("li",[t("a",{attrs:{href:"#_2-目录路径"}},[s._v("2.目录路径")])])])]),t("li",[t("a",{attrs:{href:"#linux-文件的基本操作"}},[s._v("Linux 文件的基本操作")]),t("ul",[t("li",[t("a",{attrs:{href:"#_1-新建"}},[s._v("1.新建")])]),t("li",[t("a",{attrs:{href:"#_2-复制"}},[s._v("2.复制")])]),t("li",[t("a",{attrs:{href:"#_3-删除"}},[s._v("3.删除")])]),t("li",[t("a",{attrs:{href:"#_4-移动文件与文件重命名"}},[s._v("4.移动文件与文件重命名")])]),t("li",[t("a",{attrs:{href:"#_5-查看文件"}},[s._v("5.查看文件")])]),t("li",[t("a",{attrs:{href:"#_6-查看文件类型"}},[s._v("6.查看文件类型")])]),t("li",[t("a",{attrs:{href:"#_7-编辑文件"}},[s._v("7.编辑文件")])])])])])]),t("p"),s._v(" "),t("h2",{attrs:{id:"linux-目录结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-目录结构"}},[s._v("#")]),s._v(" Linux 目录结构")]),s._v(" "),t("p",[s._v("在讲 Linux 目录结构之前，你首先要清楚一点，那就是 Linux 的目录与 Windows 的目录的区别，或许对于一般操作上的感受来说没有多大不同，但从它们的实现机制来说是完全不同的。")]),s._v(" "),t("p",[s._v("一种不同是体现在目录与存储介质（磁盘，内存，DVD 等）的关系上，以往的 Windows 一直是以存储介质为主的，主要以盘符（C 盘，D 盘...）及分区来实现文件管理，然后之下才是目录，目录就显得不是那么重要，除系统文件之外的用户文件放在任何地方任何目录也是没有多大关系。所以通常 Windows 在使用一段时间后，磁盘上面的文件目录会显得杂乱无章（少数善于整理的用户除外吧）。然而 UNIX/Linux 恰好相反，UNIX 是以目录为主的，Linux 也继承了这一优良特性。 Linux 是以树形目录结构的形式来构建整个系统的，可以理解为树形目录是一个用户可操作系统的骨架。虽然本质上无论是目录结构还是操作系统内核都是存储在磁盘上的，但从逻辑上来说 Linux 的磁盘是“挂在”（挂载在）目录上的，每一个目录不仅能使用本地磁盘分区的文件系统，也可以使用网络上的文件系统。举例来说，可以利用网络文件系统（Network File System，NFS）服务器载入某特定目录等。")]),s._v(" "),t("h3",{attrs:{id:"_1-fhs-标准"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-fhs-标准"}},[s._v("#")]),s._v(" 1.FHS 标准")]),s._v(" "),t("p",[s._v("Linux 的目录结构说复杂很复杂，说简单也很简单。复杂在于，因为系统的正常运行是以目录结构为基础的，对于初学者来说里面大部分目录都不知道其作用，重要与否，特别对于那些曾经的重度 Windows 用户，他们会纠结很长时间，关于我安装的软件在哪里这类问题。说它简单是因为，其中大部分目录结构是规定好了的（FHS 标准），是死的，当你掌握后，你在里面的一切操作都会变得井然有序。")]),s._v(" "),t("blockquote",[t("p",[s._v("FHS（英文：Filesystem Hierarchy Standard 中文：文件系统层次结构标准），多数 Linux 版本采用这种文件组织形式，FHS 定义了系统中每个区域的用途、所需要的最小构成的文件和目录同时还给出了例外处理与矛盾处理。")])]),s._v(" "),t("p",[s._v("FHS 定义了两层规范，第一层是， "),t("code",[s._v("/")]),s._v(" 下面的各个目录应该要放什么文件数据，例如 "),t("code",[s._v("/etc")]),s._v(" 应该放置设置文件，"),t("code",[s._v("/bin")]),s._v(" 与 "),t("code",[s._v("/sbin")]),s._v(" 则应该放置可执行文件等等。")]),s._v(" "),t("p",[s._v("第二层则是针对 "),t("code",[s._v("/usr")]),s._v(" 及 "),t("code",[s._v("/var")]),s._v(" 这两个目录的子目录来定义。例如 "),t("code",[s._v("/var/log")]),s._v(" 放置系统日志文件，"),t("code",[s._v("/usr/share")]),s._v(" 放置共享数据等等。")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://refspecs.linuxfoundation.org/FHS_3.0/fhs-3.0.pdf",target:"_blank",rel:"noopener noreferrer"}},[s._v("FHS_3.0 标准文档"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("strong",[s._v("如果觉得图片不清晰，建议另存为到本地放大查看：")])]),s._v(" "),t("p",[t("img",{attrs:{src:e(560),alt:"image-20220531194619902"}})]),s._v(" "),t("p",[s._v("如果你觉得看这个不明白，那么可以试试最真实最直观的方式，执行如下命令：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("tree /\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v('如果提示" command not found "，就先安装：')]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 因为我们的环境的原因，每次新启动实验会清除系统恢复到初始状态，所以需要手动更新软件包索引，以便我们安装时能找到相应软件包的源。")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" tree\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("关于上面提到的 FHS，这里还有个很重要的内容你一定要明白，FHS 是根据以往无数 Linux 用户和开发者的经验总结出来的，并且会维持更新，FHS 依据文件系统使用的频繁与否以及是否允许用户随意改动（注意，不是不能，学习过程中，不要怕这些），将目录定义为四种交互作用的形态，如下表所示：")]),s._v(" "),t("p",[t("img",{attrs:{src:e(561),alt:"image-20220531194626645"}})]),s._v(" "),t("h3",{attrs:{id:"_2-目录路径"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-目录路径"}},[s._v("#")]),s._v(" 2.目录路径")]),s._v(" "),t("h4",{attrs:{id:"路径"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#路径"}},[s._v("#")]),s._v(" 路径")]),s._v(" "),t("p",[s._v("有人可能不明白这路径是指什么，有什么用。顾名思义，路径就是你要去哪儿的路线嘛。如果你想进入某个具体的目录或者想获得某个目录的文件（目录本身也是文件）那就得用路径来找到了。")]),s._v(" "),t("p",[s._v("使用 "),t("code",[s._v("cd")]),s._v(" 命令可以切换目录，在 Linux 里面使用 "),t("code",[s._v(".")]),s._v(" 表示当前目录，"),t("code",[s._v("..")]),s._v(" 表示上一级目录（"),t("strong",[s._v("注意，我们上一节介绍过的，以 "),t("code",[s._v(".")]),s._v(" 开头的文件都是隐藏文件，所以这两个目录必然也是隐藏的，你可以使用 "),t("code",[s._v("ls -a")]),s._v(" 命令查看隐藏文件")]),s._v("），"),t("code",[s._v("-")]),s._v(" 表示上一次所在目录，"),t("code",[s._v("～")]),s._v(" 通常表示当前用户的 "),t("code",[s._v("home")]),s._v(" 目录。使用 "),t("code",[s._v("pwd")]),s._v(" 命令可以获取当前所在路径（绝对路径）。")]),s._v(" "),t("p",[s._v("进入上一级目录：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("进入你的 "),t("code",[s._v("home")]),s._v(" 目录：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者 cd /home/<你的用户名>")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("有的同学可能会有疑问，为什么环境中的波浪号 ~ 在上面，而有些环境在中间。这主要是不同的字体导致的。比如我们环境中默认使用的 "),t("code",[s._v("Monospace")]),s._v(" 字体，波浪号就在最上方。")]),s._v(" "),t("p",[t("img",{attrs:{src:e(562),alt:"image-20220531194632815"}})]),s._v(" "),t("p",[s._v("我们可以在首选项里面切换到其他字体，可以看到该字体的波浪号默认是中间的。当然，这个并不影响我们操作。")]),s._v(" "),t("p",[t("img",{attrs:{src:e(563),alt:"image-20220531194637459"}})]),s._v(" "),t("p",[s._v("使用 "),t("code",[s._v("pwd")]),s._v(" 获取当前路径：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:e(564),alt:"image-20220531194642678"}})]),s._v(" "),t("h4",{attrs:{id:"绝对路径"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#绝对路径"}},[s._v("#")]),s._v(" 绝对路径")]),s._v(" "),t("p",[s._v('关于绝对路径，简单地说就是以根" / "目录为起点的完整路径，以你所要到的目录为终点，表现形式如： '),t("code",[s._v("/usr/local/bin")]),s._v("，表示根目录下的 "),t("code",[s._v("usr")]),s._v(" 目录中的 "),t("code",[s._v("local")]),s._v(" 目录中的 "),t("code",[s._v("bin")]),s._v(" 目录。")]),s._v(" "),t("h4",{attrs:{id:"相对路径"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相对路径"}},[s._v("#")]),s._v(" 相对路径")]),s._v(" "),t("p",[s._v("相对路径，也就是相对于你当前的目录的路径，相对路径是以当前目录 "),t("code",[s._v(".")]),s._v(" 为起点，以你所要到的目录为终点，表现形式如： "),t("code",[s._v("usr/local/bin")]),s._v(" （这里假设你当前目录为根目录）。你可能注意到，我们表示相对路径实际并没有加上表示当前目录的那个 "),t("code",[s._v(".")]),s._v(" ，而是直接以目录名开头，因为这个 "),t("code",[s._v("usr")]),s._v(" 目录为 "),t("code",[s._v("/")]),s._v(" 目录下的子目录，是可以省略这个 "),t("code",[s._v(".")]),s._v(" 的（以后会讲到一个类似不能省略的情况）；如果是当前目录的上一级目录，则需要使用 "),t("code",[s._v("..")]),s._v(" ，比如你当前目录为 "),t("code",[s._v("/home/shiyanlou")]),s._v(" 目录下，根目录就应该表示为 "),t("code",[s._v("../../")]),s._v(" ，表示上一级目录（ "),t("code",[s._v("home")]),s._v(" 目录）的上一级目录（ "),t("code",[s._v("/")]),s._v(" 目录）。")]),s._v(" "),t("p",[s._v("下面我们以你的 "),t("code",[s._v("home")]),s._v(" 目录为起点，分别以绝对路径和相对路径的方式进入 "),t("code",[s._v("/usr/local/bin")]),s._v(" 目录：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 绝对路径")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/bin\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 相对路径")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/usr/local/bin\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[t("img",{attrs:{src:e(565),alt:"image-20220531194647603"}})]),s._v(" "),t("p",[s._v("进入一个目录，可以使用绝对路径也可以使用相对路径，那我们应该在什么时候选择正确的方式进入某个目录呢。就是凭直觉嘛，你觉得怎样方便就使用哪一个，而不用特意只使用某一种。比如假设我当前在 "),t("code",[s._v("/usr/local/bin")]),s._v(" 目录，我想进入上一级的 local 目录你说是使用 "),t("code",[s._v("cd ..")]),s._v(" 方便还是 "),t("code",[s._v("cd /usr/local")]),s._v(" 方便？而如果要进入的是 "),t("code",[s._v("usr")]),s._v(" 目录，那么 "),t("code",[s._v("cd /usr")]),s._v(" ，就比 "),t("code",[s._v("cd ../..")]),s._v(" 方便一点了。")]),s._v(" "),t("p",[t("strong",[s._v("提示：在进行目录切换的过程中请多使用 "),t("code",[s._v("Tab")]),s._v(" 键自动补全，可避免输入错误，连续按两次 "),t("code",[s._v("Tab")]),s._v(" 可以显示全部候选结果。")])]),s._v(" "),t("h2",{attrs:{id:"linux-文件的基本操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-文件的基本操作"}},[s._v("#")]),s._v(" Linux 文件的基本操作")]),s._v(" "),t("h3",{attrs:{id:"_1-新建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-新建"}},[s._v("#")]),s._v(" 1.新建")]),s._v(" "),t("h4",{attrs:{id:"新建空白文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新建空白文件"}},[s._v("#")]),s._v(" 新建空白文件")]),s._v(" "),t("p",[s._v("使用 "),t("code",[s._v("touch")]),s._v(" 命令创建空白文件，关于 "),t("code",[s._v("touch")]),s._v(" 命令，其主要作用是来更改已有文件的时间戳的（比如，最近访问时间，最近修改时间），但其在不加任何参数的情况下，只指定一个文件名，则可以创建一个指定文件名的空白文件（不会覆盖已有同名文件），当然你也可以同时指定该文件的时间戳，更多关于 "),t("code",[s._v("touch")]),s._v(" 命令的用法，会在下一讲文件搜索中涉及。")]),s._v(" "),t("p",[s._v("创建名为 test 的空白文件，因为在其它目录没有权限，所以需要先 "),t("code",[s._v("cd ~")]),s._v(" 切换回 shiyanlou 用户的 Home 目录：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h4",{attrs:{id:"新建目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新建目录"}},[s._v("#")]),s._v(" 新建目录")]),s._v(" "),t("p",[s._v("使用 "),t("code",[s._v("mkdir")]),s._v("（make directories）命令可以创建一个空目录，也可同时指定创建目录的权限属性。")]),s._v(" "),t("p",[s._v("创建名为“ mydir ”的空目录：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" mydir\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("使用 "),t("code",[s._v("-p")]),s._v(" 参数，同时创建父目录（如果不存在该父目录），如下我们同时创建一个多级目录（这在安装软件、配置安装路径时非常有用）：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p father/son/grandson\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这里使用的路径是相对路径，代表在当前目录下生成，当然我们直接以绝对路径的方式表示也是可以的。")]),s._v(" "),t("p",[t("img",{attrs:{src:e(566),alt:"image-20220531194653824"}})]),s._v(" "),t("p",[s._v("还有一点需要注意的是，若当前目录已经创建了一个 test 文件，再使用 "),t("code",[s._v("mkdir test")]),s._v(" 新建同名的文件夹，系统会报错文件已存在。这符合 Linux 一切皆文件的理念。")]),s._v(" "),t("p",[t("img",{attrs:{src:e(567),alt:"image-20220531194658931"}})]),s._v(" "),t("p",[s._v("若当前目录存在一个 test 文件夹，则 "),t("code",[s._v("touch")]),s._v(" 命令，则会更改该文件夹的时间戳而不是新建文件。")]),s._v(" "),t("p",[t("img",{attrs:{src:e(568),alt:"image-20220531194703139"}})]),s._v(" "),t("h3",{attrs:{id:"_2-复制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-复制"}},[s._v("#")]),s._v(" 2.复制")]),s._v(" "),t("h4",{attrs:{id:"复制文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复制文件"}},[s._v("#")]),s._v(" 复制文件")]),s._v(" "),t("p",[s._v("使用 "),t("code",[s._v("cp")]),s._v(" 命令（copy）复制一个文件到指定目录。")]),s._v(" "),t("p",[s._v("将之前创建的 "),t("code",[s._v("test")]),s._v(" 文件复制到 "),t("code",[s._v("/home/shiyanlou/father/son/grandson")]),s._v(" 目录中：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" father/son/grandson\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("是不是很方便啊，如果在图形界面则需要先在源目录复制文件，再进到目的目录粘贴文件，而命令行操作步骤就一步到位了嘛。")]),s._v(" "),t("h4",{attrs:{id:"复制目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复制目录"}},[s._v("#")]),s._v(" 复制目录")]),s._v(" "),t("p",[s._v("如果直接使用 "),t("code",[s._v("cp")]),s._v(" 命令复制一个目录的话，会出现如下错误：")]),s._v(" "),t("p",[t("img",{attrs:{src:e(569),alt:"image-20220531194708804"}})]),s._v(" "),t("p",[s._v("要成功复制目录需要加上 "),t("code",[s._v("-r")]),s._v(" 或者 "),t("code",[s._v("-R")]),s._v(" 参数，表示递归复制，就是说有点“株连九族”的意思：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/shiyanlou\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" family\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -r father family\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"_3-删除"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-删除"}},[s._v("#")]),s._v(" 3.删除")]),s._v(" "),t("h4",{attrs:{id:"删除文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除文件"}},[s._v("#")]),s._v(" 删除文件")]),s._v(" "),t("p",[s._v("使用 "),t("code",[s._v("rm")]),s._v("（remove files or directories）命令删除一个文件：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("有时候你会遇到想要删除一些为只读权限的文件，直接使用 "),t("code",[s._v("rm")]),s._v(" 删除会显示一个提示，如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:e(570),alt:"image-20220531194713906"}})]),s._v(" "),t("p",[s._v("你如果想忽略这提示，直接删除文件，可以使用 "),t("code",[s._v("-f")]),s._v(" 参数强制删除：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -f "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"删除目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除目录"}},[s._v("#")]),s._v(" 删除目录")]),s._v(" "),t("p",[s._v("跟复制目录一样，要删除一个目录，也需要加上 "),t("code",[s._v("-r")]),s._v(" 或 "),t("code",[s._v("-R")]),s._v(" 参数：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -r family\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("遇到权限不足删除不了的目录也可以和删除文件一样加上 "),t("code",[s._v("-f")]),s._v(" 参数：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf family\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_4-移动文件与文件重命名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-移动文件与文件重命名"}},[s._v("#")]),s._v(" 4.移动文件与文件重命名")]),s._v(" "),t("h4",{attrs:{id:"移动文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#移动文件"}},[s._v("#")]),s._v(" 移动文件")]),s._v(" "),t("p",[s._v("使用 "),t("code",[s._v("mv")]),s._v("（move or rename files）命令移动文件（剪切）。命令格式是 "),t("code",[s._v("mv 源目录文件 目的目录")]),s._v("。")]),s._v(" "),t("p",[s._v("例如将文件“ file1 ”移动到 "),t("code",[s._v("Documents")]),s._v(" 目录：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" Documents\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" file1\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" file1 Documents\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("img",{attrs:{src:e(571),alt:"image-20220531194720742"}})]),s._v(" "),t("h4",{attrs:{id:"重命名文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重命名文件"}},[s._v("#")]),s._v(" 重命名文件")]),s._v(" "),t("p",[t("code",[s._v("mv")]),s._v(" 命令除了能移动文件外，还能给文件重命名。命令格式为 "),t("code",[s._v("mv 旧的文件名 新的文件名")]),s._v("。")]),s._v(" "),t("p",[s._v("例如将文件“ file1 ”重命名为“ myfile ”：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" file1 myfile\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"批量重命名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#批量重命名"}},[s._v("#")]),s._v(" 批量重命名")]),s._v(" "),t("p",[s._v("要实现批量重命名，"),t("code",[s._v("mv")]),s._v(" 命令就有点力不从心了，我们可以使用一个看起来更专业的命令 "),t("code",[s._v("rename")]),s._v(" 来实现。不过它要用 perl 正则表达式来作为参数，关于正则表达式我们要在后面才会介绍到，这里只做演示，你只要记得这个 "),t("code",[s._v("rename")]),s._v(" 命令可以批量重命名就好了，以后再重新学习也不会有任何问题，毕竟你已经掌握了一个更常用的 "),t("code",[s._v("mv")]),s._v(" 命令。")]),s._v(" "),t("p",[t("code",[s._v("rename")]),s._v(" 命令并不是内置命令，若提示无该命令可以使用 "),t("code",[s._v("sudo apt-get install rename")]),s._v(" 命令自行安装。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/shiyanlou/\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用通配符批量创建 5 个文件:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" file"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(".txt\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 批量将这 5 个后缀为 .txt 的文本文件重命名为以 .c 为后缀的文件:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rename")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/\\.txt/\\.c/'")]),s._v(" *.txt\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 批量将这 5 个文件，文件名和后缀改为大写:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rename")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'y/a-z/A-Z/'")]),s._v(" *.c\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[t("img",{attrs:{src:e(572),alt:"image-20220531194726197"}})]),s._v(" "),t("p",[s._v("简单解释一下上面的命令，"),t("code",[s._v("rename")]),s._v(" 是先使用第二个参数的通配符匹配所有后缀为 "),t("code",[s._v(".txt")]),s._v(" 的文件，然后使用第一个参数提供的正则表达式将匹配的这些文件的 "),t("code",[s._v(".txt")]),s._v(" 后缀替换为 "),t("code",[s._v(".c")]),s._v("，这一点在我们后面学习了 "),t("code",[s._v("sed")]),s._v(" 命令后，相信你会更好地理解。")]),s._v(" "),t("p",[s._v("有的同学可能在输入时出现命令未闭合的状态，命令行会出现 "),t("code",[s._v("quote>")]),s._v(" 开头的提示符。这是因为上述命令中的 "),t("code",[s._v("'")]),s._v(" 未输入完成，这时按下 ctrl+c 即可退出该模式。还有就是注意 "),t("code",[s._v("'")]),s._v(" 必须为英文符号（半角），若输入的是中文符号（全角）也会报错。")]),s._v(" "),t("p",[t("img",{attrs:{src:e(573),alt:"image-20220531194730915"}})]),s._v(" "),t("h3",{attrs:{id:"_5-查看文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-查看文件"}},[s._v("#")]),s._v(" 5.查看文件")]),s._v(" "),t("h4",{attrs:{id:"使用-cat-tac-和-nl-命令查看文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-cat-tac-和-nl-命令查看文件"}},[s._v("#")]),s._v(" 使用 "),t("code",[s._v("cat")]),s._v("，"),t("code",[s._v("tac")]),s._v(" 和 "),t("code",[s._v("nl")]),s._v(" 命令查看文件")]),s._v(" "),t("p",[s._v("前两个命令都是用来打印文件内容到标准输出（终端），其中 "),t("code",[s._v("cat")]),s._v(" 为正序显示，"),t("code",[s._v("tac")]),s._v(" 为倒序显示。")]),s._v(" "),t("blockquote",[t("p",[s._v("标准输入输出：当我们执行一个 shell 命令行时通常会自动打开三个标准文件，即标准输入文件（stdin），默认对应终端的键盘、标准输出文件（stdout）和标准错误输出文件（stderr），后两个文件都对应被重定向到终端的屏幕，以便我们能直接看到输出内容。进程将从标准输入文件中得到输入数据，将正常输出数据输出到标准输出文件，而将错误信息送到标准错误文件中。")])]),s._v(" "),t("p",[s._v("比如我们要查看之前从 "),t("code",[s._v("/etc")]),s._v(" 目录下拷贝来的 "),t("code",[s._v("passwd")]),s._v(" 文件：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/shiyanlou\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /etc/passwd "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("可以加上 "),t("code",[s._v("-n")]),s._v(" 参数显示行号：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" -n "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:e(574),alt:"image-20220531194735882"}})]),s._v(" "),t("p",[t("code",[s._v("nl")]),s._v(" 命令，添加行号并打印，这是个比 "),t("code",[s._v("cat -n")]),s._v(" 更专业的行号打印命令。")]),s._v(" "),t("p",[s._v("这里简单列举它的常用的几个参数：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("-b "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 指定添加行号的方式，主要有两种：\n    -b a:表示无论是否为空行，同样列出行号"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cat -n"')]),s._v("就是这种方式"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    -b t:只列出非空行的编号并列出（默认为这种方式）\n-n "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 设置行号的样式，主要有三种：\n    -n ln:在行号字段最左端显示\n    -n rn:在行号字段最右边显示，且不加 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n    -n rz:在行号字段最右边显示，且加 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n-w "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 行号字段占用的位数"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("默认为 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" 位"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[t("img",{attrs:{src:e(575),alt:"image-20220531194741504"}})]),s._v(" "),t("p",[s._v("你会发现使用这几个命令，默认的终端窗口大小，一屏显示不完文本的内容，得用鼠标拖动滚动条或者滑动滚轮才能继续往下翻页，要是可以直接使用键盘操作翻页就好了，那么你就可以使用下面要介绍的命令。")]),s._v(" "),t("h4",{attrs:{id:"使用-more-和-less-命令分页查看文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-more-和-less-命令分页查看文件"}},[s._v("#")]),s._v(" 使用 "),t("code",[s._v("more")]),s._v(" 和 "),t("code",[s._v("less")]),s._v(" 命令分页查看文件")]),s._v(" "),t("p",[s._v("如果说上面的 "),t("code",[s._v("cat")]),s._v(" 是用来快速查看一个文件的内容的，那么这个 "),t("code",[s._v("more")]),s._v(" 和 "),t("code",[s._v("less")]),s._v(' 就是天生用来"阅读"一个文件的内容的，比如说 man 手册内部就是使用的 '),t("code",[s._v("less")]),s._v(" 来显示内容。其中 "),t("code",[s._v("more")]),s._v(" 命令比较简单，只能向一个方向滚动，而 "),t("code",[s._v("less")]),s._v(" 为基于 "),t("code",[s._v("more")]),s._v(" 和 "),t("code",[s._v("vi")]),s._v(" （一个强大的编辑器，我们有单独的课程来让你学习）开发，功能更强大。"),t("code",[s._v("less")]),s._v(" 的使用基本和 "),t("code",[s._v("more")]),s._v(" 一致，具体使用请查看 man 手册，这里只介绍 "),t("code",[s._v("more")]),s._v(" 命令的使用。")]),s._v(" "),t("p",[s._v("使用 "),t("code",[s._v("more")]),s._v(" 命令打开 "),t("code",[s._v("passwd")]),s._v(" 文件：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:e(576),alt:"image-20220531194748998"}})]),s._v(" "),t("p",[s._v("打开后默认只显示一屏内容，终端底部显示当前阅读的进度。可以使用 "),t("code",[s._v("Enter")]),s._v(" 键向下滚动一行，使用 "),t("code",[s._v("Space")]),s._v(" 键向下滚动一屏，按下 "),t("code",[s._v("h")]),s._v(" 显示帮助，"),t("code",[s._v("q")]),s._v(" 退出。")]),s._v(" "),t("h4",{attrs:{id:"使用-head-和-tail-命令查看文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-head-和-tail-命令查看文件"}},[s._v("#")]),s._v(" 使用 "),t("code",[s._v("head")]),s._v(" 和 "),t("code",[s._v("tail")]),s._v(" 命令查看文件")]),s._v(" "),t("p",[s._v("这两个命令，那些性子比较急的人应该会喜欢，因为它们一个是只查看文件的头几行（默认为 10 行，不足 10 行则显示全部）和尾几行。还是拿 passwd 文件举例，比如当我们想要查看最近新增加的用户，那么我们可以查看这个 "),t("code",[s._v("/etc/passwd")]),s._v(" 文件，不过我们前面也看到了，这个文件里面一大堆乱糟糟的东西，看起来实在费神啊。因为系统新增加一个用户，会将用户的信息添加到 passwd 文件的最后，那么这时候我们就可以使用 "),t("code",[s._v("tail")]),s._v(" 命令了：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" /etc/passwd\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("甚至更直接的只看一行， 加上 "),t("code",[s._v("-n")]),s._v(" 参数，后面紧跟行数：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" -n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" /etc/passwd\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:e(577),alt:"image-20220531194754352"}})]),s._v(" "),t("p",[s._v("关于 "),t("code",[s._v("tail")]),s._v(" 命令，不得不提的还有它一个很牛的参数 "),t("code",[s._v("-f")]),s._v("，这个参数可以实现不停地读取某个文件的内容并显示。这可以让我们动态查看日志，达到实时监视的目的。不过我不会在这门基础课程中介绍它的更多细节，感兴趣的用户可以自己去了解。")]),s._v(" "),t("h3",{attrs:{id:"_6-查看文件类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-查看文件类型"}},[s._v("#")]),s._v(" 6.查看文件类型")]),s._v(" "),t("p",[s._v("我们可以使用 "),t("code",[s._v("file")]),s._v(" 命令查看文件的类型：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" /bin/ls\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:e(578),alt:"image-20220531194759708"}})]),s._v(" "),t("p",[s._v("说明这是一个可执行文件，运行在 64 位平台，并使用了动态链接文件（共享库）。")]),s._v(" "),t("p",[s._v("与 Windows 不同的是，如果你新建了一个 shiyanlou.txt 文件，Windows 会自动把它识别为文本文件，而 "),t("code",[s._v("file")]),s._v(" 命令会识别为一个空文件。这个前面我提到过，在 Linux 中文件的类型不是根据文件后缀来判断的。当你在文件里输入内容后才会显示文件类型。")]),s._v(" "),t("p",[t("img",{attrs:{src:e(579),alt:"image-20220531194805387"}})]),s._v(" "),t("h3",{attrs:{id:"_7-编辑文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-编辑文件"}},[s._v("#")]),s._v(" 7.编辑文件")]),s._v(" "),t("p",[s._v("在 Linux 下面编辑文件通常我们会直接使用专门的命令行编辑器比如（emacs，vim，nano），由于涉及 Linux 上的编辑器的内容比较多，且非常重要，故我们有一门单独的基础课专门介绍这中一个编辑器 vim 。")]),s._v(" "),t("p",[s._v("如果你想更加快速地入门，可以直接使用 Linux 内部的 vim 学习教程，输入如下命令即可开始：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("vimtutor\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:e(580),alt:"image-20220531194810862"}})])])}),[],!1,null,null,null);a.default=n.exports},560:function(s,a,e){s.exports=e.p+"assets/img/image-20220531194619902.84edd9eb.png"},561:function(s,a,e){s.exports=e.p+"assets/img/image-20220531194626645.81b3f13a.png"},562:function(s,a,e){s.exports=e.p+"assets/img/image-20220531194632815.6c92be7e.png"},563:function(s,a,e){s.exports=e.p+"assets/img/image-20220531194637459.59a80fa5.png"},564:function(s,a,e){s.exports=e.p+"assets/img/image-20220531194642678.f785129c.png"},565:function(s,a,e){s.exports=e.p+"assets/img/image-20220531194647603.e70d6a03.png"},566:function(s,a,e){s.exports=e.p+"assets/img/image-20220531194653824.d280a494.png"},567:function(s,a,e){s.exports=e.p+"assets/img/image-20220531194658931.62b206d4.png"},568:function(s,a,e){s.exports=e.p+"assets/img/image-20220531194703139.3742382b.png"},569:function(s,a,e){s.exports=e.p+"assets/img/image-20220531194708804.0237cb1e.png"},570:function(s,a,e){s.exports=e.p+"assets/img/image-20220531194713906.06c0876f.png"},571:function(s,a,e){s.exports=e.p+"assets/img/image-20220531194720742.4b091473.png"},572:function(s,a,e){s.exports=e.p+"assets/img/image-20220531194726197.af75b9f3.png"},573:function(s,a,e){s.exports=e.p+"assets/img/image-20220531194730915.d2363ba2.png"},574:function(s,a,e){s.exports=e.p+"assets/img/image-20220531194735882.987b30b5.png"},575:function(s,a,e){s.exports=e.p+"assets/img/image-20220531194741504.a671a862.png"},576:function(s,a,e){s.exports=e.p+"assets/img/image-20220531194748998.f417e381.png"},577:function(s,a,e){s.exports=e.p+"assets/img/image-20220531194754352.39e30598.png"},578:function(s,a,e){s.exports=e.p+"assets/img/image-20220531194759708.3c1a3b9a.png"},579:function(s,a,e){s.exports=e.p+"assets/img/image-20220531194805387.dd80b5bf.png"},580:function(s,a,e){s.exports=e.p+"assets/img/image-20220531194810862.6cd47ef2.png"}}]);