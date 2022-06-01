(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{1347:function(t,a,s){"use strict";s.r(a);var e=s(24),v=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"linux下软件安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux下软件安装"}},[t._v("#")]),t._v(" LInux下软件安装")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#先体验一下"}},[t._v("先体验一下")])]),e("li",[e("a",{attrs:{href:"#apt-包管理工具介绍"}},[t._v("apt 包管理工具介绍")])]),e("li",[e("a",{attrs:{href:"#apt-get"}},[t._v("apt-get")])]),e("li",[e("a",{attrs:{href:"#安装软件包"}},[t._v("安装软件包")])]),e("li",[e("a",{attrs:{href:"#软件升级"}},[t._v("软件升级")])]),e("li",[e("a",{attrs:{href:"#卸载软件"}},[t._v("卸载软件")])]),e("li",[e("a",{attrs:{href:"#软件搜索"}},[t._v("软件搜索")])]),e("li",[e("a",{attrs:{href:"#使用-dpkg"}},[t._v("使用 dpkg")])]),e("li",[e("a",{attrs:{href:"#使用-dpkg-安装-deb-软件包"}},[t._v("使用 dpkg 安装 deb 软件包")])]),e("li",[e("a",{attrs:{href:"#查看已安装软件包的安装目录"}},[t._v("查看已安装软件包的安装目录")])]),e("li",[e("a",{attrs:{href:"#从二进制包安装"}},[t._v("从二进制包安装")])])])]),e("p"),t._v(" "),e("p",[t._v("试想一下，平时我们在使用 Windows 的时候，想要安装一个软件，我们需要在网上去下载对应软件的安装包，接着安装的时候就是不断的去点击下一步，这些流程想必大家已经经历无数回了，但是在 Linux 下，一个命令加回车，等待一下，软件就安装好了，这就是方便的在线安装软件的方式。在学习这种安装方式之前有一点需要说明的是，"),e("strong",[t._v("在不同的 linux 发行版上面在线安装方式会有一些差异包括使用的命令及它们的包管理工具，因为我们的开发环境是基于 ubuntu 的，所以这里我们涉及的在线安装方式将只适用于 ubuntu 发行版，或其它基于 ubuntu 的发行版如国内的 ubuntukylin(优麒麟)，ubuntu 又是基于 debian 的发行版，它使用的是 debian 的包管理工具 dpkg，所以一些操作也适用于 debian。而在一些采用其它包管理工具的发行版如 redhat，centos，fedora 等将不适用(redhat 和 centos 使用 rpm)")]),t._v("。")]),t._v(" "),e("h3",{attrs:{id:"先体验一下"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#先体验一下"}},[t._v("#")]),t._v(" 先体验一下")]),t._v(" "),e("p",[t._v("比如我们想安装一个软件，名字叫做 "),e("code",[t._v("w3m")]),t._v("(w3m 是一个命令行的简易网页浏览器)，那么输入如下命令：")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" w3m\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("这样的操作你应该在前面的章节中看到过很多次了，它就表示将会安装一个软件包名为 "),e("code",[t._v("w3m")]),t._v(" 的软件。")]),t._v(" "),e("p",[t._v("我们来看看命令执行后的效果：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(598),alt:"image-20220531200039081"}})]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("w3m https://www.lanqiao.cn/faq\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[e("strong",[t._v("注意")]),t._v(":如果你在安装一个软件之后，无法立即使用 "),e("code",[t._v("Tab")]),t._v(" 键补全这个命令，你可以尝试先执行 "),e("code",[t._v("source ~/.zshrc")]),t._v("，然后你就可以使用补全操作。")]),t._v(" "),e("p",[e("img",{attrs:{src:s(599),alt:"image-20220531200047407"}})]),t._v(" "),e("h3",{attrs:{id:"apt-包管理工具介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apt-包管理工具介绍"}},[t._v("#")]),t._v(" apt 包管理工具介绍")]),t._v(" "),e("blockquote",[e("p",[t._v("APT 是 Advance Packaging Tool（高级包装工具）的缩写，是 Debian 及其派生发行版的软件包管理器，APT 可以自动下载，配置，安装二进制或者源代码格式的软件包，因此简化了 Unix 系统上管理软件的过程。APT 最早被设计成 dpkg 的前端，用来处理 deb 格式的软件包。现在经过 APT-RPM 组织修改，APT 已经可以安装在支持 RPM 的系统管理 RPM 包。这个包管理器包含以 "),e("code",[t._v("apt-")]),t._v(" 开头的多个工具，如 "),e("code",[t._v("apt-get")]),t._v(" "),e("code",[t._v("apt-cache")]),t._v(" "),e("code",[t._v("apt-cdrom")]),t._v(" 等，在 Debian 系列的发行版中使用。")])]),t._v(" "),e("p",[t._v("当你在执行安装操作时，首先 "),e("code",[t._v("apt-get")]),t._v(" 工具会在"),e("strong",[t._v("本地")]),t._v("的一个数据库中搜索关于 "),e("code",[t._v("w3m")]),t._v(" 软件的相关信息，并根据这些信息在相关的服务器上下载软件安装，这里大家可能会一个疑问：既然是在线安装软件，为啥会在本地的数据库中搜索？要解释这个问题就得提到几个名词了：")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("软件源镜像服务器")])]),t._v(" "),e("li",[e("strong",[t._v("软件源")])])]),t._v(" "),e("p",[t._v("我们需要定期从服务器上下载一个软件包列表，使用 "),e("code",[t._v("sudo apt-get update")]),t._v(" 命令来保持本地的软件包列表是最新的（有时你也需要手动执行这个操作，比如更换了软件源），而这个表里会有"),e("strong",[t._v("软件依赖")]),t._v("信息的记录，对于软件依赖，我举个例子：我们安装 "),e("code",[t._v("w3m")]),t._v(" 软件的时候，而这个软件需要 "),e("code",[t._v("libgc1c2")]),t._v(" 这个软件包才能正常工作，这个时候 "),e("code",[t._v("apt-get")]),t._v(" 在安装软件的时候会一并替我们安装了，以保证 "),e("code",[t._v("w3m")]),t._v(" 能正常的工作。")]),t._v(" "),e("h3",{attrs:{id:"apt-get"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apt-get"}},[t._v("#")]),t._v(" apt-get")]),t._v(" "),e("p",[e("code",[t._v("apt-get")]),t._v(" 是用于处理 "),e("code",[t._v("apt")]),t._v("包的公用程序集，我们可以用它来在线安装、卸载和升级软件包等，下面列出一些 "),e("code",[t._v("apt-get")]),t._v(" 包含的常用的一些工具：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("工具")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("install")])]),t._v(" "),e("td",[t._v("其后加上软件包名，用于安装一个软件包")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("update")])]),t._v(" "),e("td",[t._v("从软件源镜像服务器上下载/更新用于更新本地软件源的软件包列表")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("upgrade")])]),t._v(" "),e("td",[t._v("升级本地可更新的全部软件包，但存在依赖问题时将不会升级，通常会在更新之前执行一次 "),e("code",[t._v("update")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("dist-upgrade")])]),t._v(" "),e("td",[t._v("解决依赖关系并升级（存在一定危险性）")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("remove")])]),t._v(" "),e("td",[t._v("移除已安装的软件包，包括与被移除软件包有依赖关系的软件包，但不包含软件包的配置文件")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("autoremove")])]),t._v(" "),e("td",[t._v("移除之前被其他软件包依赖，但现在不再被使用的软件包")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("purge")])]),t._v(" "),e("td",[t._v("与 remove 相同，但会完全移除软件包，包含其配置文件")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("clean")])]),t._v(" "),e("td",[t._v("移除下载到本地的已经安装的软件包，默认保存在 "),e("code",[t._v("/var/cache/apt/archives/")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("autoclean")])]),t._v(" "),e("td",[t._v("移除已安装的软件的旧版本软件包")])])])]),t._v(" "),e("p",[t._v("下面是一些"),e("code",[t._v("apt-get")]),t._v("常用的参数：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("-y")])]),t._v(" "),e("td",[t._v("自动回应是否安装软件包的选项，在一些自动化安装脚本中使用这个参数将十分有用")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("-s")])]),t._v(" "),e("td",[t._v("模拟安装")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("-q")])]),t._v(" "),e("td",[t._v("静默安装方式，指定多个 "),e("code",[t._v("q")]),t._v(" 或者 "),e("code",[t._v("-q=#")]),t._v("，"),e("code",[t._v("#")]),t._v(" 表示数字，用于设定静默级别，这在你不想要在安装软件包时屏幕输出过多时很有用")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("-f")])]),t._v(" "),e("td",[t._v("修复损坏的依赖关系")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("-d")])]),t._v(" "),e("td",[t._v("只下载不安装")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("--reinstall")])]),t._v(" "),e("td",[t._v("重新安装已经安装但可能存在问题的软件包")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("--install-suggests")])]),t._v(" "),e("td",[t._v("同时安装 APT 给出的建议安装的软件包")])])])]),t._v(" "),e("h3",{attrs:{id:"安装软件包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装软件包"}},[t._v("#")]),t._v(" 安装软件包")]),t._v(" "),e("p",[t._v("关于安装，如前面演示的一样你只需要执行 "),e("code",[t._v("apt-get install <packagename>")]),t._v(" 即可，除了这一点，你还应该掌握的是如何重新安装软件包。")]),t._v(" "),e("p",[t._v("很多时候我们需要重新安装一个软件包，比如你的系统被破坏，或者一些错误的配置导致软件无法正常工作。你可以使用如下方式重新安装：")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" --reinstall "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("packagename"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("另一个你需要掌握的是，如何在不知道软件包完整名的时候进行安装。通常我们是使用 "),e("code",[t._v("Tab")]),t._v(" 键补全软件包名，后面会介绍更好的方法来搜索软件包。有时候你需要同时安装多个软件包，你还可以使用正则表达式匹配软件包名进行批量安装。")]),t._v(" "),e("h3",{attrs:{id:"软件升级"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#软件升级"}},[t._v("#")]),t._v(" 软件升级")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 更新软件源")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 升级没有依赖问题的软件包")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" upgrade\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 升级并解决依赖关系")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" dist-upgrade\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])]),e("h3",{attrs:{id:"卸载软件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#卸载软件"}},[t._v("#")]),t._v(" 卸载软件")]),t._v(" "),e("p",[t._v("如果你现在觉得 "),e("code",[t._v("w3m")]),t._v(" 这个软件不合自己的胃口或者是找到了更好的，你需要卸载它。那么简单，同样是一个命令加回车 "),e("code",[t._v("sudo apt-get remove w3m")]),t._v("，系统会有一个确认的操作，之后这个软件就被卸载了。")]),t._v(" "),e("p",[e("img",{attrs:{src:s(600),alt:"image-20220531200103685"}})]),t._v(" "),e("p",[t._v("或者，你可以执行")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 不保留配置文件的移除")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" purge w3m\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或者")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" --purge remove w3m\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 移除不再需要的被依赖的软件包")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" autoremove\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("h3",{attrs:{id:"软件搜索"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#软件搜索"}},[t._v("#")]),t._v(" 软件搜索")]),t._v(" "),e("p",[t._v("当自己刚知道了一个软件，想下载使用，需要确认软件仓库里面有没有，就需要用到搜索功能了，命令如下：")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-cache")]),t._v(" search softname1 softname2 softname3……\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[e("code",[t._v("apt-cache")]),t._v(" 命令则是针对本地数据进行相关操作的工具，"),e("code",[t._v("search")]),t._v(" 顾名思义在本地的数据库中寻找有关 "),e("code",[t._v("softname1")]),t._v("，"),e("code",[t._v("softname2")]),t._v(" 相关软件的信息。现在我们试试搜索一下之前我们安装的软件 "),e("code",[t._v("w3m")]),t._v("，如图：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(601),alt:"image-20220531200109027"}})]),t._v(" "),e("p",[t._v("结果显示了 4 个 "),e("code",[t._v("w3m")]),t._v(" 相关的软件，并且有相关软件的简介。")]),t._v(" "),e("p",[t._v("关于在线安装的内容我们就介绍这么多，想了解更多关于 APT 的内容，你可以参考：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://www.debian.org/doc/manuals/apt-howto/index.zh-cn.html#contents",target:"_blank",rel:"noopener noreferrer"}},[t._v("APT HowTo"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"使用-dpkg"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-dpkg"}},[t._v("#")]),t._v(" 使用 dpkg")]),t._v(" "),e("p",[t._v("本节讲解如何使用 dpkg 从本地磁盘安装 deb 软件包。")]),t._v(" "),e("h4",{attrs:{id:"dpkg-介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dpkg-介绍"}},[t._v("#")]),t._v(" dpkg 介绍")]),t._v(" "),e("blockquote",[e("p",[t._v("dpkg 是 Debian 软件包管理器的基础，它被伊恩·默多克创建于 1993 年。dpkg 与 RPM 十分相似，同样被用于安装、卸载和供给和 .deb 软件包相关的信息。")])]),t._v(" "),e("blockquote",[e("p",[t._v('dpkg 本身是一个底层的工具。上层的工具，像是 APT，被用于从远程获取软件包以及处理复杂的软件包关系。"dpkg"是"Debian Package"的简写。')])]),t._v(" "),e("p",[t._v("我们经常可以在网络上见到以"),e("code",[t._v("deb")]),t._v("形式打包的软件包，就需要使用"),e("code",[t._v("dpkg")]),t._v("命令来安装。")]),t._v(" "),e("p",[e("code",[t._v("dpkg")]),t._v("常用参数介绍：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("-i")])]),t._v(" "),e("td",[t._v("安装指定 deb 包")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("-R")])]),t._v(" "),e("td",[t._v("后面加上目录名，用于安装该目录下的所有 deb 安装包")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("-r")])]),t._v(" "),e("td",[t._v("remove，移除某个已安装的软件包")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("-I")])]),t._v(" "),e("td",[t._v("显示 "),e("code",[t._v("deb")]),t._v(" 包文件的信息")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("-s")])]),t._v(" "),e("td",[t._v("显示已安装软件的信息")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("-S")])]),t._v(" "),e("td",[t._v("搜索已安装的软件包")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("-L")])]),t._v(" "),e("td",[t._v("显示已安装软件包的目录信息")])])])]),t._v(" "),e("h3",{attrs:{id:"使用-dpkg-安装-deb-软件包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-dpkg-安装-deb-软件包"}},[t._v("#")]),t._v(" 使用 dpkg 安装 deb 软件包")]),t._v(" "),e("p",[t._v("我们先使用"),e("code",[t._v("apt-get")]),t._v("加上"),e("code",[t._v("-d")]),t._v("参数只下载不安装，下载 emacs 编辑器的 deb 包：")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" -d "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y emacs\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("下载完成后，我们可以查看/var/cache/apt/archives/目录下的内容，如下图：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(602),alt:"image-20220531200117753"}})]),t._v(" "),e("p",[t._v("然后我们将第一个"),e("code",[t._v("deb")]),t._v("拷贝到 /home/shiyanlou 目录下，并使用"),e("code",[t._v("dpkg")]),t._v("安装")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" /var/cache/apt/archives/emacs24_24.5+1-6ubuntu1.1_amd64.deb ~\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装之前参看deb包的信息")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" dpkg -I emacs24_24.5+1-6ubuntu1.1_amd64.deb\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("如你所见，这个包还额外依赖了一些软件包，这意味着，如果主机目前没有这些被依赖的软件包，直接使用 dpkg 安装可能会存在一些问题，因为"),e("code",[t._v("dpkg")]),t._v("并不能为你解决依赖关系。")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用dpkg安装")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" dpkg -i emacs24_24.5+1-6ubuntu1.1_amd64.deb\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("跟前面预料的一样，这里你可能出现了一些错误：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(603),alt:"image-20220531200125510"}})]),t._v(" "),e("p",[t._v("我们将如何解决这个错误呢？这就要用到"),e("code",[t._v("apt-get")]),t._v("了，使用它的"),e("code",[t._v("-f")]),t._v("参数了，修复依赖关系的安装")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" -f "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("没有任何错误，这样我们就安装成功了，然后你可以运行 emacs 程序")]),t._v(" "),e("p",[e("img",{attrs:{src:s(604),alt:"image-20220531200131531"}})]),t._v(" "),e("h3",{attrs:{id:"查看已安装软件包的安装目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看已安装软件包的安装目录"}},[t._v("#")]),t._v(" 查看已安装软件包的安装目录")]),t._v(" "),e("p",[t._v("如果你依然在纠结到底 linux 将软件安装到了什么地方，那么很幸运你将可以通过"),e("code",[t._v("dpkg")]),t._v("找到答案")]),t._v(" "),e("p",[t._v("使用"),e("code",[t._v("dpkg -L")]),t._v("查看"),e("code",[t._v("deb")]),t._v("包目录信息")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" dpkg -L emacs24\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:s(605),alt:"image-20220531200138163"}})]),t._v(" "),e("p",[e("code",[t._v("dpkg")]),t._v("还有一些其他的参数，这里将作为练习题由你自己来学习")]),t._v(" "),e("h3",{attrs:{id:"从二进制包安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从二进制包安装"}},[t._v("#")]),t._v(" 从二进制包安装")]),t._v(" "),e("p",[t._v("二进制包的安装比较简单，我们需要做的只是将从网络上下载的二进制包解压后放到合适的目录，然后将包含可执行的主程序文件的目录添加进"),e("code",[t._v("PATH")]),t._v("环境变量即可，如果你不知道该放到什么位置，请重新复习第四节关于 Linux 目录结构的内容。")])])}),[],!1,null,null,null);a.default=v.exports},598:function(t,a,s){t.exports=s.p+"assets/img/image-20220531200039081.127c7a0c.png"},599:function(t,a,s){t.exports=s.p+"assets/img/image-20220531200047407.0162fb4c.png"},600:function(t,a,s){t.exports=s.p+"assets/img/image-20220531200103685.71ee8e9c.png"},601:function(t,a,s){t.exports=s.p+"assets/img/image-20220531200109027.a7e22792.png"},602:function(t,a,s){t.exports=s.p+"assets/img/image-20220531200117753.a9efa491.png"},603:function(t,a,s){t.exports=s.p+"assets/img/image-20220531200125510.298484cf.png"},604:function(t,a,s){t.exports=s.p+"assets/img/image-20220531200131531.c94947c0.png"},605:function(t,a,s){t.exports=s.p+"assets/img/image-20220531200138163.c252b4c6.png"}}]);