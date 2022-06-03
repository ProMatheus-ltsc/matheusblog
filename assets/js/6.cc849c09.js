(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1576:function(t,s,a){"use strict";a.r(s);var e=a(65),i=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"git安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git安装"}},[t._v("#")]),t._v(" Git安装")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#版本控制"}},[t._v("版本控制")]),e("ul",[e("li",[e("a",{attrs:{href:"#什么是版本控制"}},[t._v("什么是版本控制")])]),e("li",[e("a",{attrs:{href:"#为什么要版本控制"}},[t._v("为什么要版本控制")])]),e("li",[e("a",{attrs:{href:"#本地版本控制系统"}},[t._v("本地版本控制系统")])]),e("li",[e("a",{attrs:{href:"#集中化的版本控制系统"}},[t._v("集中化的版本控制系统")])]),e("li",[e("a",{attrs:{href:"#分布式版本控制系统"}},[t._v("分布式版本控制系统")])])])]),e("li",[e("a",{attrs:{href:"#认识-git"}},[t._v("认识 Git")]),e("ul",[e("li",[e("a",{attrs:{href:"#git-简史"}},[t._v("Git 简史")])]),e("li",[e("a",{attrs:{href:"#git-与其他版本管理系统的主要区别"}},[t._v("Git 与其他版本管理系统的主要区别")])]),e("li",[e("a",{attrs:{href:"#git-的三种状态"}},[t._v("Git 的三种状态")])])])]),e("li",[e("a",{attrs:{href:"#安装git"}},[t._v("安装Git")]),e("ul",[e("li",[e("a",{attrs:{href:"#centos中安装git"}},[t._v("Centos中安装Git")])])])]),e("li",[e("a",{attrs:{href:"#git的初始化"}},[t._v("git的初始化")]),e("ul",[e("li",[e("a",{attrs:{href:"#git配置"}},[t._v("git配置")])]),e("li",[e("a",{attrs:{href:"#获得一个git仓库"}},[t._v("获得一个Git仓库")])])])]),e("li",[e("a",{attrs:{href:"#在intellij-idea中配置git"}},[t._v("在IntelliJ IDEA中配置Git")])]),e("li",[e("a",{attrs:{href:"#在intellij-idea中利用git拉取项目"}},[t._v("在IntelliJ IDEA中利用Git拉取项目")])]),e("li",[e("a",{attrs:{href:"#在intellij-idea中使用git推送项目"}},[t._v("在IntelliJ IDEA中使用Git推送项目")]),e("ul",[e("li",[e("a",{attrs:{href:"#去gitee网站注册用户"}},[t._v("去gitee网站注册用户")])]),e("li",[e("a",{attrs:{href:"#_1-创建仓库"}},[t._v("1 创建仓库")])]),e("li",[e("a",{attrs:{href:"#_2-在idea中将项目导入版本控制"}},[t._v("2 在IDEA中将项目导入版本控制")])]),e("li",[e("a",{attrs:{href:"#_3-push失败的解决办法"}},[t._v("3 push失败的解决办法")])])])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"版本控制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#版本控制"}},[t._v("#")]),t._v(" 版本控制")]),t._v(" "),e("h3",{attrs:{id:"什么是版本控制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是版本控制"}},[t._v("#")]),t._v(" 什么是版本控制")]),t._v(" "),e("p",[t._v("版本控制是一种记录一个或若干文件内容变化，以便将来查阅特定版本修订情况的系统。 除了项目源代码，你可以对任何类型的文件进行版本控制。")]),t._v(" "),e("h3",{attrs:{id:"为什么要版本控制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么要版本控制"}},[t._v("#")]),t._v(" 为什么要版本控制")]),t._v(" "),e("p",[t._v("有了它你就可以将某个文件回溯到之前的状态，甚至将整个项目都回退到过去某个时间点的状态，你可以比较文件的变化细节，查出最后是谁修改了哪个地方，从而找出导致怪异问题出现的原因，又是谁在何时报告了某个功能缺陷等等。")]),t._v(" "),e("h3",{attrs:{id:"本地版本控制系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地版本控制系统"}},[t._v("#")]),t._v(" 本地版本控制系统")]),t._v(" "),e("p",[t._v("许多人习惯用复制整个项目目录的方式来保存不同的版本，或许还会改名加上备份时间以示区别。 这么做唯一的好处就是简单，但是特别容易犯错。 有时候会混淆所在的工作目录，一不小心会写错文件或者覆盖意想外的文件。")]),t._v(" "),e("p",[t._v("为了解决这个问题，人们很久以前就开发了许多种本地版本控制系统，大多都是采用某种简单的数据库来记录文件的历次更新差异。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-3/%E6%9C%AC%E5%9C%B0%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6%E7%B3%BB%E7%BB%9F.png",alt:"本地版本控制系统"}})]),t._v(" "),e("h3",{attrs:{id:"集中化的版本控制系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#集中化的版本控制系统"}},[t._v("#")]),t._v(" 集中化的版本控制系统")]),t._v(" "),e("p",[t._v("接下来人们又遇到一个问题，如何让在不同系统上的开发者协同工作？ 于是，集中化的版本控制系统（Centralized Version Control Systems，简称 CVCS）应运而生。")]),t._v(" "),e("p",[t._v("集中化的版本控制系统都有一个单一的集中管理的服务器，保存所有文件的修订版本，而协同工作的人们都通过客户端连到这台服务器，取出最新的文件或者提交更新。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-3/%E9%9B%86%E4%B8%AD%E5%8C%96%E7%9A%84%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6%E7%B3%BB%E7%BB%9F.png",alt:"集中化的版本控制系统"}})]),t._v(" "),e("p",[t._v("这么做虽然解决了本地版本控制系统无法让在不同系统上的开发者协同工作的诟病，但也还是存在下面的问题：")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("单点故障：")]),t._v(" 中央服务器宕机，则其他人无法使用；如果中心数据库磁盘损坏有没有进行备份，你将丢失所有数据。本地版本控制系统也存在类似问题，只要整个项目的历史记录被保存在单一位置，就有丢失所有历史更新记录的风险。")]),t._v(" "),e("li",[e("strong",[t._v("必须联网才能工作：")]),t._v(" 受网络状况、带宽影响。")])]),t._v(" "),e("h3",{attrs:{id:"分布式版本控制系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分布式版本控制系统"}},[t._v("#")]),t._v(" 分布式版本控制系统")]),t._v(" "),e("p",[t._v("于是分布式版本控制系统（Distributed Version Control System，简称 DVCS）面世了。 Git 就是一个典型的分布式版本控制系统。")]),t._v(" "),e("p",[t._v("这类系统，客户端并不只提取最新版本的文件快照，而是把代码仓库完整地镜像下来。 这么一来，任何一处协同工作用的服务器发生故障，事后都可以用任何一个镜像出来的本地仓库恢复。 因为每一次的克隆操作，实际上都是一次对代码仓库的完整备份。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-3/%E5%88%86%E5%B8%83%E5%BC%8F%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6%E7%B3%BB%E7%BB%9F.png",alt:"分布式版本控制系统"}})]),t._v(" "),e("p",[t._v("分布式版本控制系统可以不用联网就可以工作，因为每个人的电脑上都是完整的版本库，当你修改了某个文件后，你只需要将自己的修改推送给别人就可以了。但是，在实际使用分布式版本控制系统的时候，很少会直接进行推送修改，而是使用一台充当“中央服务器”的东西。这个服务器的作用仅仅是用来方便“交换”大家的修改，没有它大家也一样干活，只是交换修改不方便而已。")]),t._v(" "),e("p",[t._v("分布式版本控制系统的优势不单是不必联网这么简单，后面我们还会看到 Git 极其强大的分支管理等功能。")]),t._v(" "),e("h2",{attrs:{id:"认识-git"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#认识-git"}},[t._v("#")]),t._v(" 认识 Git")]),t._v(" "),e("h3",{attrs:{id:"git-简史"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-简史"}},[t._v("#")]),t._v(" Git 简史")]),t._v(" "),e("p",[t._v("Linux 内核项目组当时使用分布式版本控制系统 BitKeeper 来管理和维护代码。但是，后来开发 BitKeeper 的商业公司同 Linux 内核开源社区的合作关系结束，他们收回了 Linux 内核社区免费使用 BitKeeper 的权力。 Linux 开源社区（特别是 Linux 的缔造者 Linus Torvalds）基于使用 BitKeeper 时的经验教训，开发出自己的版本系统，而且对新的版本控制系统做了很多改进。")]),t._v(" "),e("h3",{attrs:{id:"git-与其他版本管理系统的主要区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-与其他版本管理系统的主要区别"}},[t._v("#")]),t._v(" Git 与其他版本管理系统的主要区别")]),t._v(" "),e("p",[t._v("Git 在保存和对待各种信息的时候与其它版本控制系统有很大差异，尽管操作起来的命令形式非常相近，理解这些差异将有助于防止你使用中的困惑。")]),t._v(" "),e("p",[t._v("下面我们主要说一个关于 Git 其他版本管理系统的主要差别："),e("strong",[t._v("对待数据的方式")]),t._v("。")]),t._v(" "),e("p",[e("strong",[t._v("Git采用的是直接记录快照的方式，而非差异比较。我后面会详细介绍这两种方式的差别。")])]),t._v(" "),e("p",[t._v("大部分版本控制系统（CVS、Subversion、Perforce、Bazaar 等等）都是以文件变更列表的方式存储信息，这类系统"),e("strong",[t._v("将它们保存的信息看作是一组基本文件和每个文件随时间逐步累积的差异。")])]),t._v(" "),e("p",[t._v("具体原理如下图所示，理解起来其实很简单，每个我们对提交更新一个文件之后，系统记录都会记录这个文件做了哪些更新，以增量符号Δ(Delta)表示。")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-3deltas.png",width:"500px"}}),t._v(" "),e("br")]),t._v(" "),e("p",[e("strong",[t._v("我们怎样才能得到一个文件的最终版本呢？")])]),t._v(" "),e("p",[t._v("很简单，高中数学的基本知识，我们只需要将这些原文件和这些增加进行相加就行了。")]),t._v(" "),e("p",[e("strong",[t._v("这种方式有什么问题呢？")])]),t._v(" "),e("p",[t._v("比如我们的增量特别特别多的话，如果我们要得到最终的文件是不是会耗费时间和性能。")]),t._v(" "),e("p",[t._v("Git 不按照以上方式对待或保存数据。 反之，Git 更像是把数据看作是对小型文件系统的一组快照。 每次你提交更新，或在 Git 中保存项目状态时，它主要对当时的全部文件制作一个快照并保存这个快照的索引。 为了高效，如果文件没有修改，Git 不再重新存储该文件，而是只保留一个链接指向之前存储的文件。 Git 对待数据更像是一个 "),e("strong",[t._v("快照流")]),t._v("。")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-3snapshots.png",width:"500px"}}),t._v(" "),e("br")]),t._v(" "),e("h3",{attrs:{id:"git-的三种状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-的三种状态"}},[t._v("#")]),t._v(" Git 的三种状态")]),t._v(" "),e("p",[t._v("Git 有三种状态，你的文件可能处于其中之一：")]),t._v(" "),e("ol",[e("li",[e("strong",[t._v("已提交（committed）")]),t._v("：数据已经安全的保存在本地数据库中。")]),t._v(" "),e("li",[e("strong",[t._v("已修改（modified）")]),t._v("：已修改表示修改了文件，但还没保存到数据库中。")]),t._v(" "),e("li",[e("strong",[t._v("已暂存（staged）")]),t._v("：表示对一个已修改文件的当前版本做了标记，使之包含在下次提交的快照中。")])]),t._v(" "),e("p",[t._v("由此引入 Git 项目的三个工作区域的概念：**Git 仓库(.git directoty) **、"),e("strong",[t._v("工作目录(Working Directory)")]),t._v(" 以及 "),e("strong",[t._v("暂存区域(Staging Area)")]),t._v(" 。")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-3areas.png",width:"500px"}})]),t._v(" "),e("p",[e("strong",[t._v("基本的 Git 工作流程如下：")])]),t._v(" "),e("ol",[e("li",[t._v("在工作目录中修改文件。")]),t._v(" "),e("li",[t._v("暂存文件，将文件的快照放入暂存区域。")]),t._v(" "),e("li",[t._v("提交更新，找到暂存区域的文件，将快照永久性存储到 Git 仓库目录。")])]),t._v(" "),e("h2",{attrs:{id:"安装git"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装git"}},[t._v("#")]),t._v(" 安装Git")]),t._v(" "),e("p",[t._v("打开终端使用"),e("code",[t._v("git version")]),t._v("命令查看版本.\n如遇网络问题无法下载可以访问"),e("a",{attrs:{href:"https://mirrors.huaweicloud.com/home",target:"_blank",rel:"noopener noreferrer"}},[t._v("华为镜像站"),e("OutboundLink")],1),t._v("下载")]),t._v(" "),e("ul",[e("li",[t._v("Git 2.33.0.2 Windows "),e("a",{attrs:{href:"https://npm.taobao.org/mirrors/git-for-windows/v2.33.0.windows.2/Git-2.33.0.2-64-bit.exe",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网下载"),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://repo.huaweicloud.com/git-for-windows/v2.33.0.windows.2/Git-2.33.0.2-64-bit.exe",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网下载"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("Git for macOS 2.33.0 "),e("a",{attrs:{href:"https://repo.huaweicloud.com/git-for-macos/git-2.33.0-intel-universal-mavericks.dmg",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网下载"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("TortoiseGit 2.12.0.0 "),e("a",{attrs:{href:"https://repo.huaweicloud.com/tortoisegit/2.12.0.0/TortoiseGit-2.12.0.0-64bit.msi",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网下载"),e("OutboundLink")],1),t._v(" 中文语言包："),e("a",{attrs:{href:"https://repo.huaweicloud.com/tortoisegit/2.12.0.0/TortoiseGit-LanguagePack-2.12.0.0-64bit-zh_CN.msi",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网下载"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"centos中安装git"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#centos中安装git"}},[t._v("#")]),t._v(" Centos中安装Git")]),t._v(" "),e("p",[t._v("一、安装git")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("yum install git\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("1、查看yum源仓库Git信息")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("yum info git\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("2、安装依赖库")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("yum install curl-devel expat-devel gettext-devel openssl-devel zlib-devel \nyum install gcc-c++ perl-ExtUtils-MakeMaker\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("3、如果原有的git版本过低，移除默认安装的旧版git")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git --version\nyum remove git ## 移除原来的版本\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("4、下载安装")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("cd /usr/src\nwget https://www.kernel.org/pub/software/scm/git/git-2.18.0.tar.gz\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("5、解压文件")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("tar xf git-2.18.0.tar.gz\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("6、配置编译安装")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[root@wugenqiang ~]# cd /usr/src\n[root@wugenqiang src]# ls\ndebug  git-2.18.0  kernels\n[root@wugenqiang src]# cd git-2.18.0/\n[root@wugenqiang git-2.18.0]# \n[root@wugenqiang git-2.18.0]# make configure\n[root@wugenqiang git-2.18.0]# ./configure --prefix=/usr/git ##配置目录\n[root@wugenqiang git-2.18.0]# make profix=/usr/git\n[root@wugenqiang git-2.18.0]# make install\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br")])]),e("p",[t._v("7、加入环境变量")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('echo "export PATH=$PATH:/usr/git/bin" >> /etc/profile\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("8、刷新环境变量")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("source /etc/profile\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("9、检查版本")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git --version\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:a(771),alt:"image-20220531183004087"}})]),t._v(" "),e("p",[t._v("当出现以上图片样式就说明安装成功！")]),t._v(" "),e("h2",{attrs:{id:"git的初始化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git的初始化"}},[t._v("#")]),t._v(" git的初始化")]),t._v(" "),e("h3",{attrs:{id:"git配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git配置"}},[t._v("#")]),t._v(" git配置")]),t._v(" "),e("p",[t._v("使用Git的第一件事就是设置你的名字和"),e("code",[t._v("email")]),t._v(",这些就是你在提交"),e("code",[t._v("commit")]),t._v("时的签名，每次提交记录里都会包含这些信息。使用"),e("code",[t._v("git config")]),t._v("命令进行配置：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('$ git config --global user.name "Scott Chacon"\n$ git config --global user.email "schacon@gmail.com"\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("执行了上面的命令后,会在家目录("),e("code",[t._v("/home/shiyanlou")]),t._v(")下建立一个叫"),e("code",[t._v(".gitconfig")]),t._v(" 的文件（该文件为隐藏文件，需要使用"),e("code",[t._v("ls -al")]),t._v("查看到）. 内容一般像下面这样，可以使用vim或cat查看文件内容:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ cat ~/.gitconfig\n[user]\n        email = schacon@gmail.com\n        name = Scott Chacon\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("p",[t._v("上面的配置文件就是Git全局配置的文件，一般配置方法是"),e("code",[t._v("git config --global <配置名称> <配置的值>")]),t._v("。")]),t._v(" "),e("p",[t._v("如果你想使项目里的某个值与前面的全局设置有区别(例如把私人邮箱地址改为工作邮箱)，你可以在项目中使用"),e("code",[t._v("git config")]),t._v("命令不带"),e("code",[t._v("--global")]),t._v("选项来设置. 这会在你当前的项目目录下创建 "),e("code",[t._v(".git/config")]),t._v("，从而使用针对当前项目的配置。")]),t._v(" "),e("h3",{attrs:{id:"获得一个git仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获得一个git仓库"}},[t._v("#")]),t._v(" 获得一个Git仓库")]),t._v(" "),e("p",[t._v("既然我们现在把一切都设置好了，那么我们需要一个Git仓库。有两种方法可以得到它：一种是从已有的Git仓库中"),e("code",[t._v("clone")]),t._v("(克隆，复制)；还有一种是新建一个仓库，把未进行版本控制的文件进行版本控制。")]),t._v(" "),e("h4",{attrs:{id:"初始化一个仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初始化一个仓库"}},[t._v("#")]),t._v(" 初始化一个仓库")]),t._v(" "),e("p",[t._v("可以对一个已存在的文件夹用下面的命令让它置于Git的版本控制管理之下。")]),t._v(" "),e("p",[t._v("创建代码目录"),e("code",[t._v("project")]),t._v("：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ cd /home/shiyanlou/\n$ mkdir project\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("进入到代码目录，创建并初始化Git仓库：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ cd project\n$ git init\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("Git会输出:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Initialized empty Git repository in /home/shiyanlou/project/.git/\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("通过"),e("code",[t._v("ls -la")]),t._v("命令会发现"),e("code",[t._v("project")]),t._v("目录下会有一个名叫"),e("code",[t._v(".git")]),t._v(" 的目录被创建，这意味着一个仓库被初始化了。可以进入到"),e("code",[t._v(".git")]),t._v("目录查看下有哪些内容。")]),t._v(" "),e("h2",{attrs:{id:"在intellij-idea中配置git"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在intellij-idea中配置git"}},[t._v("#")]),t._v(" 在IntelliJ IDEA中配置Git")]),t._v(" "),e("p",[t._v("菜单栏顺序选择: File->Settings,在弹出框中选择下图中的Git")]),t._v(" "),e("p",[e("img",{attrs:{src:a(772),alt:"image-20220531183015163"}})]),t._v(" "),e("p",[t._v("然后点击右侧上方输入框 Path to Git executable:中右面的浏览图标(小文件夹)，并定位git的可执行程序(git.exe文件在git安装目录下的cmd文件夹中)。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(773),alt:"image-20220531183031072"}})]),t._v(" "),e("p",[t._v("点击Test按钮。如果点击后可以显示出版本号，说明配置成功，此时点击窗口下侧的OK按钮即可。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(774),alt:"image-20220531183037646"}})]),t._v(" "),e("h2",{attrs:{id:"在intellij-idea中利用git拉取项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在intellij-idea中利用git拉取项目"}},[t._v("#")]),t._v(" 在IntelliJ IDEA中利用Git拉取项目")]),t._v(" "),e("p",[e("strong",[t._v("1 访问gitee或github，找到项目对应的仓库，并复制仓库地址。")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(775),alt:"image-20220531183043888"}})]),t._v(" "),e("p",[e("strong",[t._v("2 打开IDEA，依次选择菜单:File->New->Project from Version Control")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(776),alt:"image-20220531183051597"}})]),t._v(" "),e("p",[e("strong",[t._v("3 在弹出框中输入仓库路径(从第一步中gitee或github复制的路径)并点击Clone")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(777),alt:"image-20220531183058022"}})]),t._v(" "),e("p",[e("strong",[t._v("4 在弹出框中输入gitee或github的账号和密码并点击Log in")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(778),alt:"image-20220531183106516"}})]),t._v(" "),e("p",[e("strong",[t._v("等待下载完毕即可")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(779),alt:"image-20220531183113459"}})]),t._v(" "),e("h2",{attrs:{id:"在intellij-idea中使用git推送项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在intellij-idea中使用git推送项目"}},[t._v("#")]),t._v(" 在IntelliJ IDEA中使用Git推送项目")]),t._v(" "),e("h3",{attrs:{id:"去gitee网站注册用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#去gitee网站注册用户"}},[t._v("#")]),t._v(" 去gitee网站注册用户")]),t._v(" "),e("p",[t._v("gitee网站地址:https://gitee.com/")]),t._v(" "),e("p",[t._v("github网站地址:https://github.com/")]),t._v(" "),e("h3",{attrs:{id:"_1-创建仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建仓库"}},[t._v("#")]),t._v(" 1 创建仓库")]),t._v(" "),e("p",[t._v("以下以gitee为例进行介绍，github操作雷同。")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("创建仓库")]),t._v(" "),e("p",[t._v('点击页面右上方的"+"并选择"创建仓库"')]),t._v(" "),e("p",[e("img",{attrs:{src:a(780),alt:"image-20220531183120475"}})])]),t._v(" "),e("li",[e("p",[t._v("设置仓库相关信息")]),t._v(" "),e("p",[t._v("首先输入仓库名，通常可以和IDEA中项目名相同。是否开源则可结合需求选择，这里选择的私有(该项目仅自己可见)")]),t._v(" "),e("p",[e("img",{attrs:{src:a(781),alt:"image-20220531183126265"}})]),t._v(" "),e("p",[t._v('然后点击下方的"创建"按钮.')]),t._v(" "),e("p",[e("img",{attrs:{src:a(782),alt:"image-20220531183133672"}})]),t._v(" "),e("p",[t._v("此时gitee上完成了仓库的创建工作。")])]),t._v(" "),e("li",[e("p",[t._v("复制当前仓库路径，这个路径需要在后面IDEA上传项目时使用.")]),t._v(" "),e("p",[e("img",{attrs:{src:a(783),alt:"image-20220531183140255"}})])])]),t._v(" "),e("h3",{attrs:{id:"_2-在idea中将项目导入版本控制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-在idea中将项目导入版本控制"}},[t._v("#")]),t._v(" 2 在IDEA中将项目导入版本控制")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("在IDEA菜单栏顺序选择:VCS->Import into Version Controlp->Create Git Repository")]),t._v(" "),e("p",[t._v("目的是先在本地创建一个git仓库")]),t._v(" "),e("p",[e("img",{attrs:{src:a(784),alt:"image-20220531183147651"}})]),t._v(" "),e("p",[t._v('弹出框中字节点击"OK"按钮即可')]),t._v(" "),e("p",[e("img",{attrs:{src:a(785),alt:"image-20220531183154983"}})])]),t._v(" "),e("li",[e("p",[t._v("鼠标右键项目名，在弹出的菜单栏中顺序选择:Git->Add")]),t._v(" "),e("p",[t._v("目的是将当前项目中本地仓库没有的内容添加到本地仓库中（实际上并没有真是添加，只有在下一步操作中才会真实添加，但是所有仓库中没有的文件都需要先add后才可以通过下面的步骤添加到仓库!）")]),t._v(" "),e("p",[e("img",{attrs:{src:a(786),alt:"image-20220531183201163"}})])]),t._v(" "),e("li",[e("p",[t._v("提交更改")]),t._v(" "),e("p",[t._v("鼠标右键当前项目名，在弹出的菜单栏中顺序选择:Git->Commit Diectory")]),t._v(" "),e("p",[e("img",{attrs:{src:a(787),alt:"image-20220531183207636"}})]),t._v(" "),e("p",[t._v("之后输入本次提交的备注，例如:第一次提交(注:这里必须输入内容，否则无法提交)。然后点击Commit按钮进行本地提交。")]),t._v(" "),e("p",[t._v("目的:提交的目的是将当前项目保存到本地仓库中")]),t._v(" "),e("p",[e("img",{attrs:{src:a(788),alt:"image-20220531183213873"}})]),t._v(" "),e("p",[t._v("之后，点击IDEA左侧边条的1:Project回到项目结构视图")]),t._v(" "),e("p",[e("img",{attrs:{src:a(789),alt:"image-20220531183224191"}})]),t._v(" "),e("p",[t._v("鼠标右键项目名，在弹出的菜单栏中顺序选择:Git->Repository->Push")]),t._v(" "),e("p",[t._v("目的就是将本地仓库保存的内容同步到服务器(上传到服务器，并使服务器中的仓库与本地仓库内容保持一致)。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(790),alt:"image-20220531183231958"}})]),t._v(" "),e("p",[t._v("第一次操作时需要配置服务器仓库地址，点击弹出框中的Define remote")]),t._v(" "),e("p",[e("img",{attrs:{src:a(791),alt:"image-20220531183239383"}})]),t._v(" "),e("p",[t._v("在弹出框中的URL输入框中添加gitee上创建的仓库路径(第一大步最后一小步中在页面上复制的仓库路径)，并点击OK按钮")]),t._v(" "),e("p",[e("img",{attrs:{src:a(792),alt:"image-20220531183244943"}})]),t._v(" "),e("p",[t._v("之后IDEA会自动检查链接，没有问题则点击下方的Push按钮")]),t._v(" "),e("p",[e("img",{attrs:{src:a(793),alt:"image-20220531183251018"}})]),t._v(" "),e("p",[t._v("第一次提交时要求输入gitee上的账号和密码，输入后可选中Remember记住密码，后续就不需要输入了。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(794),alt:"image-20220531183257437"}})]),t._v(" "),e("p",[t._v("此时完成提交，右下方会提示。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(795),alt:"image-20220531183303147"}})])])]),t._v(" "),e("h4",{attrs:{id:"提交改动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#提交改动"}},[t._v("#")]),t._v(" 提交改动")]),t._v(" "),e("p",[t._v("使用快捷键"),e("strong",[t._v("CTRL+K")]),t._v(",就会弹出提交的界面，点击Commit and Push即可")]),t._v(" "),e("p",[e("img",{attrs:{src:a(796),alt:"image-20220531183309043"}})]),t._v(" "),e("h4",{attrs:{id:"更新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新"}},[t._v("#")]),t._v(" 更新")]),t._v(" "),e("p",[t._v("点击快捷键"),e("strong",[t._v("Ctrl+T")]),t._v("，就会弹出更新的界面，点击OK即可")]),t._v(" "),e("p",[e("img",{attrs:{src:a(797),alt:"image-20220531183315897"}})]),t._v(" "),e("h3",{attrs:{id:"_3-push失败的解决办法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-push失败的解决办法"}},[t._v("#")]),t._v(" 3 push失败的解决办法")]),t._v(" "),e("p",[t._v("上面最后一步若提交失败，会在右下侧提示。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(798),alt:"image-20220531183321172"}})]),t._v(" "),e("p",[t._v("此时点击IDEA下测控制台选项打开控制台视图:")]),t._v(" "),e("p",[e("img",{attrs:{src:a(799),alt:"image-20220531183327830"}})]),t._v(" "),e("p",[t._v("在控制台中依次执行下面三个命令:")]),t._v(" "),e("div",{staticClass:"language-none line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git pull\ngit pull origin master\ngit pull origin master --allow-unrelated-histories\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("如图:")]),t._v(" "),e("p",[e("img",{attrs:{src:a(800),alt:"image-20220531183333888"}})]),t._v(" "),e("p",[e("img",{attrs:{src:a(801),alt:"image-20220531183342536"}})]),t._v(" "),e("p",[e("img",{attrs:{src:a(802),alt:"image-20220531183349338"}})]),t._v(" "),e("p",[t._v("之后再尝试push。")])])}),[],!1,null,null,null);s.default=i.exports},771:function(t,s,a){t.exports=a.p+"assets/img/image-20220531183004087.f277b5e7.png"},772:function(t,s,a){t.exports=a.p+"assets/img/image-20220531183015163.dbf7ef57.png"},773:function(t,s,a){t.exports=a.p+"assets/img/image-20220531183031072.0558a558.png"},774:function(t,s,a){t.exports=a.p+"assets/img/image-20220531183037646.231e62e2.png"},775:function(t,s,a){t.exports=a.p+"assets/img/image-20220531183043888.d9672cc0.png"},776:function(t,s,a){t.exports=a.p+"assets/img/image-20220531183051597.9f623f09.png"},777:function(t,s,a){t.exports=a.p+"assets/img/image-20220531183058022.4fd8c884.png"},778:function(t,s,a){t.exports=a.p+"assets/img/image-20220531183106516.5c3f8e8d.png"},779:function(t,s,a){t.exports=a.p+"assets/img/image-20220531183113459.f84c6e73.png"},780:function(t,s,a){t.exports=a.p+"assets/img/image-20220531183120475.b606c766.png"},781:function(t,s,a){t.exports=a.p+"assets/img/image-20220531183126265.528ff5c0.png"},782:function(t,s,a){t.exports=a.p+"assets/img/image-20220531183133672.809b2746.png"},783:function(t,s,a){t.exports=a.p+"assets/img/image-20220531183140255.792f088f.png"},784:function(t,s,a){t.exports=a.p+"assets/img/image-20220531183147651.4b88a529.png"},785:function(t,s,a){t.exports=a.p+"assets/img/image-20220531183154983.9d5ac86f.png"},786:function(t,s,a){t.exports=a.p+"assets/img/image-20220531183201163.fa6d6802.png"},787:function(t,s,a){t.exports=a.p+"assets/img/image-20220531183207636.45169bc8.png"},788:function(t,s,a){t.exports=a.p+"assets/img/image-20220531183213873.e64be661.png"},789:function(t,s,a){t.exports=a.p+"assets/img/image-20220531183224191.97f3a8fe.png"},790:function(t,s,a){t.exports=a.p+"assets/img/image-20220531183231958.6db27412.png"},791:function(t,s,a){t.exports=a.p+"assets/img/image-20220531183239383.2fe2de12.png"},792:function(t,s,a){t.exports=a.p+"assets/img/image-20220531183244943.19d9fecc.png"},793:function(t,s,a){t.exports=a.p+"assets/img/image-20220531183251018.04437df3.png"},794:function(t,s,a){t.exports=a.p+"assets/img/image-20220531183257437.83d69400.png"},795:function(t,s,a){t.exports=a.p+"assets/img/image-20220531183303147.51c88b87.png"},796:function(t,s,a){t.exports=a.p+"assets/img/image-20220531183309043.f351859c.png"},797:function(t,s,a){t.exports=a.p+"assets/img/image-20220531183315897.1a47891c.png"},798:function(t,s,a){t.exports=a.p+"assets/img/image-20220531183321172.9d76d0bc.png"},799:function(t,s,a){t.exports=a.p+"assets/img/image-20220531183327830.b9c01517.png"},800:function(t,s,a){t.exports=a.p+"assets/img/image-20220531183333888.10c82736.png"},801:function(t,s,a){t.exports=a.p+"assets/img/image-20220531183342536.793a7374.png"},802:function(t,s,a){t.exports=a.p+"assets/img/image-20220531183349338.0540bda5.png"}}]);