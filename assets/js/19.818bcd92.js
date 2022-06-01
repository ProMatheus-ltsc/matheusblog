(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1345:function(t,s,a){"use strict";a.r(s);var e=a(24),v=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"linux日志系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux日志系统"}},[t._v("#")]),t._v(" Linux日志系统")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#常见的日志"}},[t._v("常见的日志")])]),e("li",[e("a",{attrs:{href:"#配置的日志"}},[t._v("配置的日志")])]),e("li",[e("a",{attrs:{href:"#转储的日志"}},[t._v("转储的日志")])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"常见的日志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见的日志"}},[t._v("#")]),t._v(" 常见的日志")]),t._v(" "),e("p",[t._v("日志是一个系统管理员，一个运维人员，甚至是开发人员不可或缺的东西，系统用久了偶尔也会出现一些错误，我们需要日志来给系统排错，在一些网络应用服务不能正常工作的时候，我们需要用日志来做问题定位，日志还是过往时间的记录本，我们可以通过它知道我们是否被不明用户登录过等等。")]),t._v(" "),e("p",[t._v("在 Linux 中大部分的发行版都内置使用 syslog 系统日志，那么通过前期的课程我们了解到常见的日志一般存放在 "),e("code",[t._v("/var/log")]),t._v(" 中，我们来看看其中有哪些日志")]),t._v(" "),e("p",[e("img",{attrs:{src:a(636),alt:"image-20220531200451984"}})]),t._v(" "),e("p",[t._v("根据图中所显示的日志，我们可以根据服务对象粗略的将日志分为两类")]),t._v(" "),e("ul",[e("li",[t._v("系统日志")]),t._v(" "),e("li",[t._v("应用日志")])]),t._v(" "),e("p",[t._v("系统日志主要是存放系统内置程序或系统内核之类的日志信息如 "),e("code",[t._v("alternatives.log")]),t._v(" 、"),e("code",[t._v("btmp")]),t._v(" 等等，应用日志主要是我们装的第三方应用所产生的日志如 "),e("code",[t._v("tomcat7")]),t._v(" 、"),e("code",[t._v("apache2")]),t._v(" 等等。")]),t._v(" "),e("p",[t._v("接下来我们来看看常见的系统日志有哪些，他们都记录了怎样的信息")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("日志名称")]),t._v(" "),e("th",[t._v("记录信息")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("alternatives.log")]),t._v(" "),e("td",[t._v("系统的一些更新替代信息记录")])]),t._v(" "),e("tr",[e("td",[t._v("apport.log")]),t._v(" "),e("td",[t._v("应用程序崩溃信息记录")])]),t._v(" "),e("tr",[e("td",[t._v("apt/history.log")]),t._v(" "),e("td",[t._v("使用 apt-get 安装卸载软件的信息记录")])]),t._v(" "),e("tr",[e("td",[t._v("apt/term.log")]),t._v(" "),e("td",[t._v("使用 apt-get 时的具体操作，如 package 的下载、打开等")])]),t._v(" "),e("tr",[e("td",[t._v("auth.log")]),t._v(" "),e("td",[t._v("登录认证的信息记录")])]),t._v(" "),e("tr",[e("td",[t._v("boot.log")]),t._v(" "),e("td",[t._v("系统启动时的程序服务的日志信息")])]),t._v(" "),e("tr",[e("td",[t._v("btmp")]),t._v(" "),e("td",[t._v("错误的信息记录")])]),t._v(" "),e("tr",[e("td",[t._v("Consolekit/history")]),t._v(" "),e("td",[t._v("控制台的信息记录")])]),t._v(" "),e("tr",[e("td",[t._v("dist-upgrade")]),t._v(" "),e("td",[t._v("dist-upgrade 这种更新方式的信息记录")])]),t._v(" "),e("tr",[e("td",[t._v("dmesg")]),t._v(" "),e("td",[t._v("启动时，显示屏幕上内核缓冲信息，与硬件有关的信息")])]),t._v(" "),e("tr",[e("td",[t._v("dpkg.log")]),t._v(" "),e("td",[t._v("dpkg 命令管理包的日志。")])]),t._v(" "),e("tr",[e("td",[t._v("faillog")]),t._v(" "),e("td",[t._v("用户登录失败详细信息记录")])]),t._v(" "),e("tr",[e("td",[t._v("fontconfig.log")]),t._v(" "),e("td",[t._v("与字体配置有关的信息记录")])]),t._v(" "),e("tr",[e("td",[t._v("kern.log")]),t._v(" "),e("td",[t._v("内核产生的信息记录，在自己修改内核时有很大帮助")])]),t._v(" "),e("tr",[e("td",[t._v("lastlog")]),t._v(" "),e("td",[t._v("用户的最近信息记录")])]),t._v(" "),e("tr",[e("td",[t._v("wtmp")]),t._v(" "),e("td",[t._v("登录信息的记录。wtmp 可以找出谁正在进入系统，谁使用命令显示这个文件或信息等")])]),t._v(" "),e("tr",[e("td",[t._v("syslog")]),t._v(" "),e("td",[t._v("系统信息记录")])])])]),t._v(" "),e("p",[t._v("而在本实验环境中没有 apport.log 是因为 apport 这个应用程序需要读取一些内核的信息来收集判断其他应用程序的信息，从而记录应用程序的崩溃信息。而在本实验环境中我们没有这个权限，所以将 apport 从内置应用值剔除，自然而然就没有它的日志信息了。")]),t._v(" "),e("p",[t._v("只闻其名，不见其人，我们并不能明白这些日志记录的内容。首先我们来看 "),e("code",[t._v("alternatives.log")]),t._v(" 中的信息，在本实验环境中没有任何日志输出是因为刚刚启动的系统中并没有任何的更新迭代。我可以看看从其他地方截取过来的内容")]),t._v(" "),e("div",{staticClass:"language-txt line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-txt"}},[e("code",[t._v("update-alternatives 2016-07-02 13:36:16: run with --install /usr/bin/x-www-browser x-www-browser /usr/bin/google-chrome-stable 200\nupdate-alternatives 2016-07-02 13:36:16: run with --install /usr/bin/gnome-www-browser gnome-www-browser /usr/bin/google-chrome-stable 200\nupdate-alternatives 2016-07-02 13:36:16: run with --install /usr/bin/google-chrome google-chrome /usr/bin/google-chrome-stable 200\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("我们可以从中得到的信息有程序作用，日期，命令，成功与否的返回码。")]),t._v(" "),e("p",[t._v("我们用这样的命令来看看 "),e("code",[t._v("auth.log")]),t._v(" 中的信息：")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("less")]),t._v(" /var/log/auth.log\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:a(637),alt:"image-20220531200514635"}})]),t._v(" "),e("p",[t._v("我们可以从中得到的信息有日期与 ip 地址的来源以及的用户与工具。")]),t._v(" "),e("p",[t._v("在 "),e("code",[t._v("/var/log/apt")]),t._v(" 文件夹中有两个日志文件 "),e("code",[t._v("history.log")]),t._v(" 与 "),e("code",[t._v("term.log")]),t._v("，两个日志文件的区别在于 "),e("code",[t._v("history.log")]),t._v(" 主要记录了进行了哪个操作，相关的依赖有哪些，而 "),e("code",[t._v("term.log")]),t._v(" 则是较为具体的一些操作，主要就是下载包，打开包，安装包等等的细节操作。")]),t._v(" "),e("p",[t._v("如果是刚刚开启的新系统，那么按理说这些日志应该都是空的。")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /var/log/apt/history.log\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /var/log/apt/term.log\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("但是在实验环境中因为是启动的我们定制后的环境，所以两个日志中还残留了配置镜像的记录。可以先删除这两个文件然后再执行新的安装命令。")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" /var/log/apt/history.log\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" /var/log/apt/term.log\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("我们来安装 git 这个程序，因为实验环境里已经预装了 git，所以这里真正执行的操作是一个更新的操作，但这并不影响。")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:a(638),alt:"image-20220531200524878"}})]),t._v(" "),e("p",[t._v("成功的执行之后我们再来查看两个日志的内容变化：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(639),alt:"image-20220531200529587"}})]),t._v(" "),e("p",[t._v("其他的日志格式也都类似于之前我们所查看的日志，主要便是时间，操作。而这其中有两个比较特殊的日志，其查看的方式比较与众不同，因为这两个日志并不是 ASCII 文件而是被编码成了二进制文件，所以我们并不能直接使用 less、cat、more 这样的工具来查看，这两个日志文件是 wtmp，lastlog")]),t._v(" "),e("p",[e("img",{attrs:{src:a(640),alt:"image-20220531200533998"}})]),t._v(" "),e("p",[t._v("我们查看的方法是使用 last 与 lastlog 工具来提取其中的信息")]),t._v(" "),e("p",[e("img",{attrs:{src:a(641),alt:"image-20220531200538410"}})]),t._v(" "),e("p",[t._v("关于这两个工具的更深入使用我们可以使用前面的学习过的 man 来查看")]),t._v(" "),e("h2",{attrs:{id:"配置的日志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置的日志"}},[t._v("#")]),t._v(" 配置的日志")]),t._v(" "),e("p",[t._v("这些日志是如何产生的？通过上面的例子我们可以看出大部分的日志信息似乎格式都很类似，并且都出现在这个文件夹中。")]),t._v(" "),e("p",[t._v("这样的实现可以通过两种方式：")]),t._v(" "),e("ul",[e("li",[t._v("一种是由软件开发商自己来自定义日志格式然后指定输出日志位置；")]),t._v(" "),e("li",[t._v("一种方式就是 Linux 提供的日志服务程序，而我们这里系统日志是通过 syslog 来实现，提供日志管理服务。")])]),t._v(" "),e("p",[t._v("syslog 是一个系统日志记录程序，在早期的大部分 Linux 发行版都是内置 syslog，让其作为系统的默认日志收集工具，虽然随着时代的进步与发展，syslog 已经年老体衰跟不上时代的需求，所以他被 rsyslog 所代替了，较新的 Ubuntu、Fedora 等等都是默认使用 rsyslog 作为系统的日志收集工具")]),t._v(" "),e("p",[t._v("rsyslog 的全称是 rocket-fast system for log，它提供了高性能，高安全功能和模块化设计。rsyslog 能够接受各种各样的来源，将其输入，输出的结果到不同的目的地。rsyslog 可以提供超过每秒一百万条消息给目标文件。")]),t._v(" "),e("p",[t._v("这样能实时收集日志信息的程序是有其守护进程的，如 rsyslog 的守护进程便是 rsyslogd")]),t._v(" "),e("p",[t._v("因为一些原因本实验环境中默认并没有打开这个服务，我们可以手动开启这项服务，然后来查看")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y rsyslog\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" rsyslog start\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" aux "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" syslog\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("p",[e("img",{attrs:{src:a(642),alt:"image-20220531200546855"}})]),t._v(" "),e("p",[t._v("既然它是一个服务，那么它便是可以配置，为我们提供一些我们自定义的服务")]),t._v(" "),e("p",[t._v("首先我们来看 rsyslog 的配置文件是什么样子的，而 rsyslog 的配置文件有两个，")]),t._v(" "),e("ul",[e("li",[t._v("一个是 "),e("code",[t._v("/etc/rsyslog.conf")])]),t._v(" "),e("li",[t._v("一个是 "),e("code",[t._v("/etc/rsyslog.d/50-default.conf")]),t._v("。")])]),t._v(" "),e("p",[t._v("第一个主要是配置的环境，也就是 rsyslog 加载什么模块，文件的所属者等；而第二个主要是配置的 Filter Conditions")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /etc/rsyslog.conf\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /etc/rsyslog.d/50-default.conf\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[e("img",{attrs:{src:a(643),alt:"image-20220531200553386"}})]),t._v(" "),e("p",[e("img",{attrs:{src:a(644),alt:"image-20220531200558273"}})]),t._v(" "),e("p",[t._v("也不知道他在写什么，我们还是来看看 rsyslog 的结构框架，数据流的走向吧。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(645),alt:"image-20220531200603207"}})]),t._v(" "),e("p",[t._v("通过这个简单的流程图我们可以知道 rsyslog 主要是由 Input、Output、Parser 这样三个模块构成的，并且了解到数据的简单走向，首先通过 Input module 来收集消息，然后将得到的消息传给 Parser module，通过分析模块的层层处理，将真正需要的消息传给 Output module，然后便输出至日志文件中。")]),t._v(" "),e("p",[t._v("上文提到过 rsyslog 号称可以提供超过每秒一百万条消息给目标文件，怎么只是这样简单的结构。我们可以通过下图来做更深入的了解")]),t._v(" "),e("p",[e("img",{attrs:{src:a(646),alt:"image-20220531200610371"}})]),t._v(" "),e("p",[t._v("（图片来源于http://www.rsyslog.com/doc/queues_analogy.html）")]),t._v(" "),e("p",[t._v("Rsyslog 架构如图中所示，从图中我们可以很清楚的看见，rsyslog 还有一个核心的功能模块便是 Queue，也正是因为它才能做到如此高的并发。")]),t._v(" "),e("p",[t._v("第一个模块便是 Input，该模块的主要功能就是从各种各样的来源收集 messages，通过这些接口实现：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("接口名")]),t._v(" "),e("th",[t._v("作用")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("im3195")]),t._v(" "),e("td",[t._v("RFC3195 Input Module")])]),t._v(" "),e("tr",[e("td",[t._v("imfile")]),t._v(" "),e("td",[t._v("Text File Input Module")])]),t._v(" "),e("tr",[e("td",[t._v("imgssapi")]),t._v(" "),e("td",[t._v("GSSAPI Syslog Input Module")])]),t._v(" "),e("tr",[e("td",[t._v("imjournal")]),t._v(" "),e("td",[t._v("Systemd Journal Input Module")])]),t._v(" "),e("tr",[e("td",[t._v("imklog")]),t._v(" "),e("td",[t._v("Kernel Log Input Module")])]),t._v(" "),e("tr",[e("td",[t._v("imkmsg")]),t._v(" "),e("td",[t._v("/dev/kmsg Log Input Module")])]),t._v(" "),e("tr",[e("td",[t._v("impstats")]),t._v(" "),e("td",[t._v("Generate Periodic Statistics of Internal Counters")])]),t._v(" "),e("tr",[e("td",[t._v("imptcp")]),t._v(" "),e("td",[t._v("Plain TCP Syslog")])]),t._v(" "),e("tr",[e("td",[t._v("imrelp")]),t._v(" "),e("td",[t._v("RELP Input Module")])]),t._v(" "),e("tr",[e("td",[t._v("imsolaris")]),t._v(" "),e("td",[t._v("Solaris Input Module")])]),t._v(" "),e("tr",[e("td",[t._v("imtcp")]),t._v(" "),e("td",[t._v("TCP Syslog Input Module")])]),t._v(" "),e("tr",[e("td",[t._v("imudp")]),t._v(" "),e("td",[t._v("UDP Syslog Input Module")])]),t._v(" "),e("tr",[e("td",[t._v("imuxsock")]),t._v(" "),e("td",[t._v("Unix Socket Input")])])])]),t._v(" "),e("p",[t._v("而 Output 中也有许多可用的接口，可以通过 man 或者官方的文档查看")]),t._v(" "),e("p",[t._v("而这些模块接口的使用需要通过 $ModLoad 指令来加载，那么返回上文的图中，配置生效的头两行可以看懂了，默认加载了 imklog、imuxsock 这两个模块")]),t._v(" "),e("p",[t._v("在配置中 rsyslog 支持三种配置语法格式：")]),t._v(" "),e("ul",[e("li",[t._v("sysklogd")]),t._v(" "),e("li",[t._v("legacy rsyslog")]),t._v(" "),e("li",[t._v("RainerScript")])]),t._v(" "),e("p",[t._v("sysklogd 是老的简单格式，一些新的语法特性不支持。而 legacy rsyslog 是以 dollar 符($)开头的语法，在 v6 及以上的版本还在支持，就如上文所说的 "),e("code",[t._v("$ModLoad")]),t._v(" 还有一些插件和特性只在此语法下支持。而以 "),e("code",[t._v("$")]),t._v(" 开头的指令是全局指令，全局指令是 rsyslogd 守护进程的配置指令，每行只能有一个指令。 RainnerScript 是最新的语法。在官网上 rsyslog 大多推荐这个语法格式来配置")]),t._v(" "),e("p",[t._v("老的语法格式（sysklogd & legacy rsyslog）是以行为单位。新的语法格式（RainnerScript）可以分割多行。")]),t._v(" "),e("p",[t._v("注释有两种语法:")]),t._v(" "),e("ul",[e("li",[t._v("井号 #")]),t._v(" "),e("li",[t._v("C-style "),e("code",[t._v("/* .. */")])])]),t._v(" "),e("p",[t._v("执行顺序: 指令在 rsyslog.conf 文件中是从上到下的顺序执行的。")]),t._v(" "),e("p",[t._v("模板是 rsyslog 一个重要的属性，它可以控制日志的格式，支持类似 template() 语句的基于 string 或 plugin 的模板，通过它我们可以自定义日志格式。")]),t._v(" "),e("p",[t._v("legacy 格式使用 $template 的语法，不过这个在以后要移除，所以最好使用新格式 template():，以免未来突然不工作了也不知道为什么")]),t._v(" "),e("p",[t._v("模板定义的形式有四种，适用于不同的输出模块，一般简单的格式，可以使用 string 的形式，复杂的格式，建议使用 list 的形式，使用 list 的形式，可以使用一些额外的属性字段（property statement）")]),t._v(" "),e("p",[t._v("如果不指定输出模板，rsyslog 会默认使用 RSYSLOG_DEFAULT。若想更深入的学习可以查看"),e("a",{attrs:{href:"http://www.rsyslog.com/doc/v8-stable/configuration/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("了解了 rsyslog 环境的配置文件之后，我们看向 "),e("code",[t._v("/etc/rsyslog.d/50-default.conf")]),t._v(" 这个配置文件，这个文件中主要是配置的 Filter Conditions，也就是我们在流程图中所看见的 "),e("code",[t._v("Parser & Filter Engine")]),t._v("，它的名字叫 Selectors 是过滤 syslog 的传统方法，他主要由两部分组成，"),e("code",[t._v("facility")]),t._v(" 与 "),e("code",[t._v("priority")]),t._v("，其配置格式如下：")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("facility.priority log_location\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("其中一个 priority 可以指定多个 facility，多个 facility 之间使用逗号 "),e("code",[t._v(",")]),t._v(" 分割开")]),t._v(" "),e("p",[t._v("rsyslog 通过 Facility 的概念来定义日志消息的来源，以便对日志进行分类，Facility 的种类有：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("类别")]),t._v(" "),e("th",[t._v("解释")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("kern")]),t._v(" "),e("td",[t._v("内核消息")])]),t._v(" "),e("tr",[e("td",[t._v("user")]),t._v(" "),e("td",[t._v("用户信息")])]),t._v(" "),e("tr",[e("td",[t._v("mail")]),t._v(" "),e("td",[t._v("邮件系统消息")])]),t._v(" "),e("tr",[e("td",[t._v("daemon")]),t._v(" "),e("td",[t._v("系统服务消息")])]),t._v(" "),e("tr",[e("td",[t._v("auth")]),t._v(" "),e("td",[t._v("认证系统")])]),t._v(" "),e("tr",[e("td",[t._v("authpriv")]),t._v(" "),e("td",[t._v("权限系统")])]),t._v(" "),e("tr",[e("td",[t._v("syslog")]),t._v(" "),e("td",[t._v("日志系统自身消息")])]),t._v(" "),e("tr",[e("td",[t._v("cron")]),t._v(" "),e("td",[t._v("计划安排")])]),t._v(" "),e("tr",[e("td",[t._v("news")]),t._v(" "),e("td",[t._v("新闻信息")])]),t._v(" "),e("tr",[e("td",[t._v("local0~7")]),t._v(" "),e("td",[t._v("由自定义程序使用")])])])]),t._v(" "),e("p",[t._v("而另外一部分 priority 也称之为 serverity level，除了日志的来源以外，对统一源产生日志消息还需要进行优先级的划分，而优先级的类别有以下几种：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("类别")]),t._v(" "),e("th",[t._v("解释")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("emergency")]),t._v(" "),e("td",[t._v("系统已经无法使用了")])]),t._v(" "),e("tr",[e("td",[t._v("alert")]),t._v(" "),e("td",[t._v("必须立即处理的问题")])]),t._v(" "),e("tr",[e("td",[t._v("critical")]),t._v(" "),e("td",[t._v("很严重了")])]),t._v(" "),e("tr",[e("td",[t._v("error")]),t._v(" "),e("td",[t._v("错误")])]),t._v(" "),e("tr",[e("td",[t._v("warning")]),t._v(" "),e("td",[t._v("警告信息")])]),t._v(" "),e("tr",[e("td",[t._v("notice")]),t._v(" "),e("td",[t._v("系统正常，但是比较重要")])]),t._v(" "),e("tr",[e("td",[t._v("informational")]),t._v(" "),e("td",[t._v("正常")])]),t._v(" "),e("tr",[e("td",[t._v("debug")]),t._v(" "),e("td",[t._v("debug 的调试信息")])]),t._v(" "),e("tr",[e("td",[t._v("panic")]),t._v(" "),e("td",[t._v("很严重但是已淘汰不常用")])]),t._v(" "),e("tr",[e("td",[t._v("none")]),t._v(" "),e("td",[t._v("没有优先级，不记录任何日志消息")])])])]),t._v(" "),e("p",[t._v("我们来看看系统中的配置")]),t._v(" "),e("p",[e("img",{attrs:{src:a(647),alt:"image-20220531200628527"}})]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("auth,authpriv.*       /var/log/auth.log\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("这里的意思是 auth 与 authpriv 的所有优先级的信息全都输出于 "),e("code",[t._v("/var/log/auth.log")]),t._v(" 日志中")]),t._v(" "),e("p",[t._v("而其中有类似于这样的配置信息意思有细微的差别")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("kern.*      -/var/log/kern.log\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[e("code",[t._v("-")]),t._v(" 代表异步写入，也就是日志写入时不需要等待系统缓存的同步，也就是日志还在内存中缓存也可以继续写入无需等待完全写入硬盘后再写入。通常用于写入数据比较大时使用。")]),t._v(" "),e("p",[t._v("到此我们对 rsyslog 的配置就有了一定的了解，若想更深入学习模板，队列的高级应用，大家可去查看"),e("a",{attrs:{href:"http://www.rsyslog.com/doc/v8-stable/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网的文档"),e("OutboundLink")],1),t._v("，需要注意的是 rsyslog 每个版本之间差异化比较大，学习之前先查看自己所使用的版本，再去查看相关的文档")]),t._v(" "),e("p",[t._v("与日志相关的还有一个还有常用的命令 "),e("code",[t._v("logger")]),t._v("，"),e("code",[t._v("logger")]),t._v(" 是一个 shell 命令接口，可以通过该接口使用 Syslog 的系统日志模块，还可以从命令行直接向系统日志文件写入信息。")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#首先将syslog启动起来")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" rsyslog start\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#向 syslog 写入数据")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ping")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" logger -it logger_test -p local3.notice "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看是否有数据写入")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("tail")]),t._v(" -f /var/log/syslog\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])]),e("p",[e("img",{attrs:{src:a(648),alt:"image-20220531200633772"}})]),t._v(" "),e("p",[t._v("从图中我们可以看到我们成功的将 ping 的信息写入了 syslog 中，格式也就是使用的 rsyslog 的默认模板")]),t._v(" "),e("p",[t._v("我们可以通过 man 来查看 logger 的其他用法，")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("内容")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("-i")]),t._v(" "),e("td",[t._v("在每行都记录进程 ID")])]),t._v(" "),e("tr",[e("td",[t._v("-t")]),t._v(" "),e("td",[t._v("添加 tag 标签")])]),t._v(" "),e("tr",[e("td",[t._v("-p")]),t._v(" "),e("td",[t._v("设置日志的 facility 与 priority")])])])]),t._v(" "),e("h2",{attrs:{id:"转储的日志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#转储的日志"}},[t._v("#")]),t._v(" 转储的日志")]),t._v(" "),e("p",[t._v("在本地的机器中每天都有成百上千条日志被写入文件中，更别说是我们的服务器，每天都会有数十兆甚至更多的日志信息被写入文件中，如果是这样的话，每天看着我们的日志文件不断的膨胀，那岂不是要占用许多的空间，所以有个叫 logrotate 的东西诞生了。")]),t._v(" "),e("p",[t._v("logrotate 程序是一个日志文件管理工具。用来把旧的日志文件删除，并创建新的日志文件。我们可以根据日志文件的大小，也可以根据其天数来切割日志、管理日志，这个过程又叫做“转储”。")]),t._v(" "),e("p",[t._v("大多数 Linux 发行版使用 logrotate 或 newsyslog 对日志进行管理。logrotate 程序不但可以压缩日志文件，减少存储空间，还可以将日志发送到指定 E-mail，方便管理员及时查看日志。")]),t._v(" "),e("p",[t._v("显而易见，logrotate 是基于 CRON 来运行的，其脚本是 /etc/cron.daily/logrotate；同时我们可以在 "),e("code",[t._v("/etc/logrotate")]),t._v(" 中找到其配置文件")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /etc/logrotate.conf\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:a(649),alt:"image-20220531200640533"}})]),t._v(" "),e("p",[t._v("这其中的具体意思是什么呢？")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# see "man logrotate" for details  //可以查看帮助文档')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rotate log files weekly")]),t._v("\nweekly                             //设置每周转储一次"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("daily、weekly、monthly当然可以使用这些参数每天、星期，月 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# keep 4 weeks worth of backlogs")]),t._v("\nrotate "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("                           //最多转储4次\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# create new (empty) log files after rotating old ones")]),t._v("\ncreate                             //当转储后文件不存在时创建它\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# uncomment this if you want your log files compressed")]),t._v("\ncompress                          //通过gzip压缩方式转储（nocompress可以不压缩）\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# RPM packages drop log rotation information into this directory")]),t._v("\ninclude /etc/logrotate.d           //其他日志文件的转储方式配置文件，包含在该目录下\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# no packages own wtmp -- we'll rotate them here")]),t._v("\n/var/log/wtmp "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("                    //设置/var/log/wtmp日志文件的转储参数\n    monthly                        //每月转储\n    create 0664 root utmp          //转储后文件不存在时创建它，文件所有者为root，所属组为utmp，对应的权限为0664\n    rotate "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("                       //最多转储一次\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br")])]),e("p",[t._v("当然在 /etc/logrotate.d/ 中有各项应用的 logrotate 配置，还有更多的配置参数，大家可以使用 man 查看，如按文件大小转储，按当前时间格式命名等等参数配置。")])])}),[],!1,null,null,null);s.default=v.exports},636:function(t,s,a){t.exports=a.p+"assets/img/image-20220531200451984.45222cca.png"},637:function(t,s,a){t.exports=a.p+"assets/img/image-20220531200514635.f90b29b0.png"},638:function(t,s,a){t.exports=a.p+"assets/img/image-20220531200524878.b6131e05.png"},639:function(t,s,a){t.exports=a.p+"assets/img/image-20220531200529587.e4dcd2a1.png"},640:function(t,s,a){t.exports=a.p+"assets/img/image-20220531200533998.6f03fff9.png"},641:function(t,s,a){t.exports=a.p+"assets/img/image-20220531200538410.4237e40c.png"},642:function(t,s,a){t.exports=a.p+"assets/img/image-20220531200546855.f6b535a9.png"},643:function(t,s,a){t.exports=a.p+"assets/img/image-20220531200553386.0885d9aa.png"},644:function(t,s,a){t.exports=a.p+"assets/img/image-20220531200558273.7b740756.png"},645:function(t,s,a){t.exports=a.p+"assets/img/image-20220531200603207.652aa745.png"},646:function(t,s,a){t.exports=a.p+"assets/img/image-20220531200610371.0f511367.png"},647:function(t,s,a){t.exports=a.p+"assets/img/image-20220531200628527.7b740756.png"},648:function(t,s,a){t.exports=a.p+"assets/img/image-20220531200633772.3d89593c.png"},649:function(t,s,a){t.exports=a.p+"assets/img/image-20220531200640533.c2b0d186.png"}}]);