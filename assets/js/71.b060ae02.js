(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{1330:function(s,e,n){"use strict";n.r(e);var a=n(24),t=Object(a.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"shell脚本实现linux系统监控"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shell脚本实现linux系统监控"}},[s._v("#")]),s._v(" Shell脚本实现Linux系统监控")]),s._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#一、实验介绍"}},[s._v("一、实验介绍")])]),a("li",[a("a",{attrs:{href:"#二、实验原理"}},[s._v("二、实验原理")]),a("ul",[a("li",[a("a",{attrs:{href:"#_2-1-主要命令介绍"}},[s._v("2.1 主要命令介绍")])]),a("li",[a("a",{attrs:{href:"#_2-2-shell编程注意"}},[s._v("2.2 shell编程注意")])])])]),a("li",[a("a",{attrs:{href:"#三、实验步骤"}},[s._v("三、实验步骤")]),a("ul",[a("li",[a("a",{attrs:{href:"#_3-1-有关参数-i-的模块"}},[s._v("3.1 有关参数 i 的模块")])]),a("li",[a("a",{attrs:{href:"#_3-2-有关参数-v-的模块"}},[s._v("3.2 有关参数 v 的模块")])]),a("li",[a("a",{attrs:{href:"#_3-3-有关参数-h-的模块"}},[s._v("3.3 有关参数 h 的模块")])]),a("li",[a("a",{attrs:{href:"#_3-4-提取信息设置变量"}},[s._v("3.4 提取信息设置变量")])])])]),a("li",[a("a",{attrs:{href:"#四、实验总结"}},[s._v("四、实验总结")])])])]),a("p"),s._v(" "),a("h2",{attrs:{id:"一、实验介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、实验介绍"}},[s._v("#")]),s._v(" 一、实验介绍")]),s._v(" "),a("h4",{attrs:{id:"_1-1-实验内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-实验内容"}},[s._v("#")]),s._v(" 1.1 实验内容")]),s._v(" "),a("p",[s._v("本课程实现 shell 脚本监控系统的各项参数，并可以将脚本加入系统环境中，可以直接在终端里执行。还添加了几个参数，一个脚本可以执行不同的操作。")]),s._v(" "),a("h4",{attrs:{id:"_1-2-知识点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-知识点"}},[s._v("#")]),s._v(" 1.2 知识点")]),s._v(" "),a("p",[s._v("本实验涵盖以下知识点：")]),s._v(" "),a("ol",[a("li",[s._v("Bash 脚本编程")]),s._v(" "),a("li",[s._v("如何获取 Linux 系统信息")]),s._v(" "),a("li",[s._v("如何实时获取 Linux 资源使用率")])]),s._v(" "),a("h4",{attrs:{id:"_1-3-实验环节"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-实验环节"}},[s._v("#")]),s._v(" 1.3 实验环节")]),s._v(" "),a("ul",[a("li",[s._v("vim编辑器")]),s._v(" "),a("li",[s._v("shell解释器(linux自带)")])]),s._v(" "),a("h4",{attrs:{id:"_1-4-适合人群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-适合人群"}},[s._v("#")]),s._v(" 1.4 适合人群")]),s._v(" "),a("p",[s._v("适合人群：本课程适合有shell语法基础，想学习shell脚本的实际使用的同学，可以加深对于shell脚本的认识")]),s._v(" "),a("h4",{attrs:{id:"_1-5-代码获取"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-代码获取"}},[s._v("#")]),s._v(" 1.5 代码获取")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#获取\nwget http://labfile.oss.aliyuncs.com/courses/597/monitor.sh\n#运行\nbash monitor.sh\n#备注\n如果执行monitor -i安装提示输入密码。可以执行passwd root为root设置密码\n如果安装之后不能运行，修改/usr/bin/monitor.sh的权限\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h4",{attrs:{id:"_1-6-效果截图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-效果截图"}},[s._v("#")]),s._v(" 1.6 效果截图")]),s._v(" "),a("p",[s._v("在实验中，我们将逐步实现下面的功能需求：")]),s._v(" "),a("ul",[a("li",[s._v("通过脚本查看系统的使用情况，实现对linux的系统监控。")]),s._v(" "),a("li",[s._v("将写好的脚本加入系统环境，开启终端即可使用")]),s._v(" "),a("li",[s._v("给脚本添加参数，可以实现不同的操作。")])]),s._v(" "),a("p",[s._v("最终实现的脚本运行效果：")]),s._v(" "),a("p",[a("img",{attrs:{src:n(469),alt:"image-20220531210631026"}})]),s._v(" "),a("h2",{attrs:{id:"二、实验原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、实验原理"}},[s._v("#")]),s._v(" 二、实验原理")]),s._v(" "),a("p",[s._v("这一章节我们将正式开始讲解实验原理，分步骤进行。")]),s._v(" "),a("h3",{attrs:{id:"_2-1-主要命令介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-主要命令介绍"}},[s._v("#")]),s._v(" 2.1 主要命令介绍")]),s._v(" "),a("ul",[a("li",[s._v("查看内存("),a("code",[s._v("free")]),s._v(")")]),s._v(" "),a("li",[s._v("查看磁盘("),a("code",[s._v("df")]),s._v(")")]),s._v(" "),a("li",[s._v("查看cpu占用率("),a("code",[s._v("top")]),s._v(")")]),s._v(" "),a("li",[s._v("查看内核版本("),a("code",[s._v("uname")]),s._v(")")])]),s._v(" "),a("p",[s._v("这些命令是linux管理员必须耳熟能详的基本命令，本课程的监控脚本，也是根据这些命令的返回值做处理，然后打印在终端的，同学们可以敲一敲这些命令，看看他们的基本用法。 命令详解请查看\nhttp://man.linuxde.net/")]),s._v(" "),a("h3",{attrs:{id:"_2-2-shell编程注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-shell编程注意"}},[s._v("#")]),s._v(" 2.2 shell编程注意")]),s._v(" "),a("ul",[a("li",[s._v("```` 用法 这个符号可以保存命令的返回值，如")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" PATH=`pwd` #也可以写成 PAHT=$(pwd)\n echo $PATH\n #输出pwd命令的值，也就是当前路径\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("参数说明\n"),a("code",[s._v("$1")]),s._v("表示第一个参数，"),a("code",[s._v("$2")]),s._v(" 表示第二个参数，"),a("code",[s._v("$#")]),s._v("表示参数个数")])]),s._v(" "),a("h2",{attrs:{id:"三、实验步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、实验步骤"}},[s._v("#")]),s._v(" 三、实验步骤")]),s._v(" "),a("p",[s._v("打开终端，进入"),a("code",[s._v("Code")]),s._v("目录，创建文件"),a("code",[s._v("tecmint_monitor.sh")]),s._v("。 "),a("code",[s._v("getopts")]),s._v("：可以获取用户在命令下的参数，然后根据不同的参数进行不同的操作。它的使用方法是getopts option_string variable，option_string 是指字符串，会逐个匹配，variable 每次匹配成功的选项。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('#! /bin/bash\nwhile getopts ivh name # getopts 有三个参数，分别执行安装，查看版本，帮助说明\ndo\n        case $name in\n          i)iopt=1;;\n          v)vopt=1;;\n          h)hopt=1;;\n         *)echo "Invalid arg";;\n        esac\ndone\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("这个脚本主要有 "),a("code",[s._v("-ivh")]),s._v(" 三个参数，分别执行安装脚本，查看版本，帮助说明，你也可以添加自己想要的参数。如果不加参数，默认执行系统的监控命令并打印到屏幕上。")]),s._v(" "),a("h3",{attrs:{id:"_3-1-有关参数-i-的模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-有关参数-i-的模块"}},[s._v("#")]),s._v(" 3.1 有关参数 "),a("code",[s._v("i")]),s._v(" 的模块")]),s._v(" "),a("p",[s._v("这个部分主要是将脚本添加到环境的目录里，通过终端就可以执行命令。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('if [[ ! -z $iopt ]] #如果iopt非空则执行\nthen\n{\nwd=$(pwd)\nbasename "$(test -L "$0" && readlink "$0" || echo "$0")" > /tmp/scriptname\n#basename命令会删掉所有的前缀包括最后一个slash（‘/’）字符，然后将字符串显示出来\nscriptname=$(echo -e -n $wd/ && cat /tmp/scriptname)\n#scriptname就是tecmint_monitor.sh的地址\nsu -c "cp $scriptname /usr/bin/monitor" root && echo "Congratulations! Script Installed, now run monitor Command" || echo "Installation failed"\n}\nfi\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[a("img",{attrs:{src:n(470),alt:"image-20220531210654284"}})]),s._v(" "),a("h3",{attrs:{id:"_3-2-有关参数-v-的模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-有关参数-v-的模块"}},[s._v("#")]),s._v(" 3.2 有关参数 "),a("code",[s._v("v")]),s._v(" 的模块")]),s._v(" "),a("p",[s._v("这个部分是查看脚本的版本，版权等信息。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('if [[ ! -z $vopt ]]\nthen\n{\necho -e "tecmint_monitor version 0.1\\nReleased Under Apache 2.0 License"\n}\nfi\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[a("img",{attrs:{src:n(471),alt:"image-20220531210659155"}})]),s._v(" "),a("h3",{attrs:{id:"_3-3-有关参数-h-的模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-有关参数-h-的模块"}},[s._v("#")]),s._v(" 3.3 有关参数 "),a("code",[s._v("h")]),s._v(" 的模块")]),s._v(" "),a("p",[s._v("这个部分是添加帮助信息，方便其他人使用")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('if [[ ! -z $hopt ]]\nthen\n{\necho -e " -i                                Install script"\necho -e " -v                                Print version information and exit"\necho -e " -h                                Print help (this information) and exit"\n}\nfi\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[a("img",{attrs:{src:n(472),alt:"image-20220531210704643"}})]),s._v(" "),a("h3",{attrs:{id:"_3-4-提取信息设置变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-提取信息设置变量"}},[s._v("#")]),s._v(" 3.4 提取信息设置变量")]),s._v(" "),a("p",[s._v("先设置一些好记的变量名，这样方便阅读，比直接看代码要更容易一点。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("clear\n\nunset tecreset os architecture kernelrelease internalip externalip nameserver loadaverage\n# unset命令用于删除已定义的shell变量（包括环境变量）和shell函数。\n# 关于unset更多的信息可以查看http://www.runoob.com/linux/linux-comm-unset.html\n# 定义变量 tecreset\ntecreset=$(tput sgr0)\n\n# 查看是否可以连网\nping -c 1 www.baidu.com &> /dev/null && echo -e '\\E[32m'\"Internet: $tecreset Connected\" || echo -e '\\E[32m'\"Internet: $tecreset Disconnected\"\n# '\\E[32m' 将打印的信息设置为绿色\n# 查看系统的类型\nos=$(uname -o)\necho -e '\\E[32m'\"Operating System Type :\" $tecreset $os\n\n# 查看系统的版本和名称\n###################################\nOS=`uname -s`\nREV=`uname -r`\nMACH=`uname -m`\n\nGetVersionFromFile()\n{\n    VERSION=`cat $1 | tr \"\\n\" ' ' | sed s/.*VERSION.*=\\ // `\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("p",[s._v("查看操作系统的类型，不同的操作系统指令是不一样的。看到大段的代码不要紧张，其实逻辑很简单。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('if [ "${OS}" = "SunOS" ] ; then\n    OS=Solaris\n    ARCH=`uname -p`\n    OSSTR="${OS} ${REV}(${ARCH} `uname -v`)"\n# uname命令用于打印当前系统相关信息（内核版本号、硬件架构、主机名称和操作系统类型等）。\nelif [ "${OS}" = "AIX" ] ; then\n    OSSTR="${OS} `oslevel` (`oslevel -r`)"\n#AIX是IBM开发的一套类UNIX操作系统，关于它更多的指令可以查看http://www.cnblogs.com/sbaicl/articles/2947795.html\nelif [ "${OS}" = "Linux" ] ; then\n    KERNEL=`uname -r`\n    if [ -f /etc/redhat-release ] ; then\n        DIST=\'RedHat\'\n        PSUEDONAME=`cat /etc/redhat-release | sed s/.*\\(// | sed s/\\)//`\n        REV=`cat /etc/redhat-release | sed s/.*release\\ // | sed s/\\ .*//`\n#sed通常用来匹配一个或多个正则表达式的文本进行处理,可以查看http://coolshell.cn/articles/9104.html\n    elif [ -f /etc/SuSE-release ] ; then\n        DIST=`cat /etc/SuSE-release | tr "\\n" \' \'| sed s/VERSION.*//`\n        REV=`cat /etc/SuSE-release | tr "\\n" \' \' | sed s/.*=\\ //`\n    elif [ -f /etc/mandrake-release ] ; then\n        DIST=\'Mandrake\'\n        PSUEDONAME=`cat /etc/mandrake-release | sed s/.*\\(// | sed s/\\)//`\n        REV=`cat /etc/mandrake-release | sed s/.*release\\ // | sed s/\\ .*//`\n    elif [ -f /etc/debian_version ] ; then\n        DIST="Debian `cat /etc/debian_version`"\n        REV=""\n\n    fi\n    if ${OSSTR} [ -f /etc/UnitedLinux-release ] ; then\n        DIST="${DIST}[`cat /etc/UnitedLinux-release | tr "\\n" \' \' | sed s/VERSION.*//`]"\n    fi\n\n    OSSTR="${OS} ${DIST} ${REV}(${PSUEDONAME} ${KERNEL} ${MACH})"\n\nfi\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br")])]),a("p",[s._v("最后就是监控系统的各种信息，并打印到屏幕")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("查看操作系统版本\necho -e '\\E[32m'\"OS Version :\" $tecreset $OSSTR \n# 查看系统的类型\narchitecture=$(uname -m)\necho -e '\\E[32m'\"Architecture :\" $tecreset $architecture\n\n# 查看内核的版本\nkernelrelease=$(uname -r)\necho -e '\\E[32m'\"Kernel Release :\" $tecreset $kernelrelease\n\n# 查看主机名\necho -e '\\E[32m'\"Hostname :\" $tecreset $HOSTNAME\n\n# 查看内网地址\ninternalip=$(hostname -I)\necho -e '\\E[32m'\"Internal IP :\" $tecreset $internalip\n\n# 查看外网地址\nexternalip=$(curl -s ipecho.net/plain;echo)\necho -e '\\E[32m'\"External IP : $tecreset \"$externalip\n\n# 查看DNS\nnameservers=$(cat /etc/resolv.conf | sed '1 d' | awk '{print $2}')\necho -e '\\E[32m'\"Name Servers :\" $tecreset $nameservers \n\n# 查看登陆的用户\nwho>/tmp/who\necho -e '\\E[32m'\"Logged In users :\" $tecreset && cat /tmp/who \n\n# 查看系统内存使用情况\nfree -h | grep -v + > /tmp/ramcache\necho -e '\\E[32m'\"Ram Usages :\" $tecreset\ncat /tmp/ramcache | grep -v \"Swap\"\necho -e '\\E[32m'\"Swap Usages :\" $tecreset\ncat /tmp/ramcache | grep -v \"Mem\"\n\n# 查看磁盘使用情况\ndf -h| grep 'Filesystem\\|/dev/sda*' > /tmp/diskusage\necho -e '\\E[32m'\"Disk Usages :\" $tecreset \ncat /tmp/diskusage\n\n# 查看系统的负载情况\nloadaverage=$(top -n 1 -b | grep \"load average:\" | awk '{print $10 $11 $12}')\necho -e '\\E[32m'\"Load Average :\" $tecreset $loadaverage\n\n# 查看系统的运行时间\ntecuptime=$(uptime | awk '{print $3,$4}' | cut -f1 -d,)\necho -e '\\E[32m'\"System Uptime Days/(HH:MM) :\" $tecreset $tecuptime\n\n# 删除上面使用的变量，释放资源\nunset tecreset os architecture kernelrelease internalip externalip nameserver loadaverage\n\n# 删除临时文件\nrm /tmp/who /tmp/ramcache /tmp/diskusage\n}\nfi\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br")])]),a("h2",{attrs:{id:"四、实验总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、实验总结"}},[s._v("#")]),s._v(" 四、实验总结")]),s._v(" "),a("p",[s._v("通过这个小项目，加强了对shell编程的理解，不仅可以执行脚本，还可以将脚本安装到系统环境中，直接执行命令。从实践中学习，把代码敲一遍，就能体会编程的乐趣了:-)")]),s._v(" "),a("p",[s._v("最后附上源代码")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('#! /bin/bash\n# unset any variable which system may be using\n# clear the screen\n\n\nwhile getopts ivh name\ndo\n        case $name in\n          i)iopt=1;;\n          v)vopt=1;;\n          h)hopt=1;;\n         *)echo "Invalid arg";;\n        esac\ndone\n# \nif [[ ! -z $iopt ]]\nthen\n{\nwd=$(pwd)\nbasename "$(test -L "$0" && readlink "$0" || echo "$0")" > /tmp/scriptname\nscriptname=$(echo -e -n $wd/ && cat /tmp/scriptname)\nsu -c "cp $scriptname /usr/bin/monitor" root && echo "Congratulations! Script Installed, now run monitor Command" || echo "Installation failed"\n}\nfi\n\nif [[ ! -z $vopt ]]\nthen\n{\necho -e "tecmint_monitor version 0.1\\nDesigned by Tecmint.com\\nReleased Under Apache 2.0 License"\n}\nfi\nif [[ ! -z $hopt ]]\nthen\n{\necho -e " -i                                Install script"\necho -e " -v                                Print version information and exit"\necho -e " -h                                Print help (this information) and exit"\n}\nfi\n\nif [[ $# -eq 0 ]]\nthen\n{\nclear\n\nunset tecreset os architecture kernelrelease internalip externalip nameserver loadaverage\n\n# Define Variable tecreset\ntecreset=$(tput sgr0)\n\n# Check if connected to Internet or not\nping -c 1 www.baidu.com &> /dev/null && echo -e \'\\E[32m\'"Internet: $tecreset Connected" || echo -e \'\\E[32m\'"Internet: $tecreset Disconnected"\n\n# Check OS Type\nos=$(uname -o)\necho -e \'\\E[32m\'"Operating System Type :" $tecreset $os\n\n# Check OS Release Version and Name\n###################################\nOS=`uname -s`\nREV=`uname -r`\nMACH=`uname -m`\n\nGetVersionFromFile()\n{\n    VERSION=`cat $1 | tr "\\n" \' \' | sed s/.*VERSION.*=\\ // `\n}\n\nif [ "${OS}" = "SunOS" ] ; then\n    OS=Solaris\n    ARCH=`uname -p`\n    OSSTR="${OS} ${REV}(${ARCH} `uname -v`)"\nelif [ "${OS}" = "AIX" ] ; then\n    OSSTR="${OS} `oslevel` (`oslevel -r`)"\nelif [ "${OS}" = "Linux" ] ; then\n    KERNEL=`uname -r`\n    if [ -f /etc/redhat-release ] ; then\n        DIST=\'RedHat\'\n        PSUEDONAME=`cat /etc/redhat-release | sed s/.*\\(// | sed s/\\)//`\n        REV=`cat /etc/redhat-release | sed s/.*release\\ // | sed s/\\ .*//`\n    elif [ -f /etc/SuSE-release ] ; then\n        DIST=`cat /etc/SuSE-release | tr "\\n" \' \'| sed s/VERSION.*//`\n        REV=`cat /etc/SuSE-release | tr "\\n" \' \' | sed s/.*=\\ //`\n    elif [ -f /etc/mandrake-release ] ; then\n        DIST=\'Mandrake\'\n        PSUEDONAME=`cat /etc/mandrake-release | sed s/.*\\(// | sed s/\\)//`\n        REV=`cat /etc/mandrake-release | sed s/.*release\\ // | sed s/\\ .*//`\n    elif [ -f /etc/debian_version ] ; then\n        DIST="Debian `cat /etc/debian_version`"\n        REV=""\n\n    fi\n    if ${OSSTR} [ -f /etc/UnitedLinux-release ] ; then\n        DIST="${DIST}[`cat /etc/UnitedLinux-release | tr "\\n" \' \' | sed s/VERSION.*//`]"\n    fi\n\n    OSSTR="${OS} ${DIST} ${REV}(${PSUEDONAME} ${KERNEL} ${MACH})"\n\nfi\n\n##################################\n#cat /etc/os-release | grep \'NAME\\|VERSION\' | grep -v \'VERSION_ID\' | grep -v \'PRETTY_NAME\' > /tmp/osrelease\n#echo -n -e \'\\E[32m\'"OS Name :" $tecreset  && cat /tmp/osrelease | grep -v "VERSION" | grep -v CPE_NAME | cut -f2 -d\\"\n#echo -n -e \'\\E[32m\'"OS Version :" $tecreset && cat /tmp/osrelease | grep -v "NAME" | grep -v CT_VERSION | cut -f2 -d\\"\necho -e \'\\E[32m\'"OS Version :" $tecreset $OSSTR \n\narchitecture=$(uname -m)\necho -e \'\\E[32m\'"Architecture :" $tecreset $architecture\n\n\nkernelrelease=$(uname -r)\necho -e \'\\E[32m\'"Kernel Release :" $tecreset $kernelrelease\n\n\necho -e \'\\E[32m\'"Hostname :" $tecreset $HOSTNAME\n\n\ninternalip=$(hostname -I)\necho -e \'\\E[32m\'"Internal IP :" $tecreset $internalip\n\n\nexternalip=$(curl -s ipecho.net/plain;echo)\necho -e \'\\E[32m\'"External IP : $tecreset "$externalip\n\n\nnameservers=$(cat /etc/resolv.conf | sed \'1 d\' | awk \'{print $2}\')\necho -e \'\\E[32m\'"Name Servers :" $tecreset $nameservers \n\n\nwho>/tmp/who\necho -e \'\\E[32m\'"Logged In users :" $tecreset && cat /tmp/who \n\n\nfree -h | grep -v + > /tmp/ramcache\necho -e \'\\E[32m\'"Ram Usages :" $tecreset\ncat /tmp/ramcache | grep -v "Swap"\necho -e \'\\E[32m\'"Swap Usages :" $tecreset\ncat /tmp/ramcache | grep -v "Mem"\n\n\ndf -h| grep \'Filesystem\\|/dev/sda*\' > /tmp/diskusage\necho -e \'\\E[32m\'"Disk Usages :" $tecreset \ncat /tmp/diskusage\n\n\nloadaverage=$(top -n 1 -b | grep "load average:" | awk \'{print $10 $11 $12}\')\necho -e \'\\E[32m\'"Load Average :" $tecreset $loadaverage\n\n\ntecuptime=$(uptime | awk \'{print $3,$4}\' | cut -f1 -d,)\necho -e \'\\E[32m\'"System Uptime Days/(HH:MM) :" $tecreset $tecuptime\n\n\nunset tecreset os architecture kernelrelease internalip externalip nameserver loadaverage\n\nrm /tmp/who /tmp/ramcache /tmp/diskusage\n}\nfi\nshift $(($OPTIND -1))\n# shift命令用于对参数的移动(左移)。可以查看http://blog.csdn.net/zhu_xun/article/details/24796235\n# \n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br"),a("span",{staticClass:"line-number"},[s._v("92")]),a("br"),a("span",{staticClass:"line-number"},[s._v("93")]),a("br"),a("span",{staticClass:"line-number"},[s._v("94")]),a("br"),a("span",{staticClass:"line-number"},[s._v("95")]),a("br"),a("span",{staticClass:"line-number"},[s._v("96")]),a("br"),a("span",{staticClass:"line-number"},[s._v("97")]),a("br"),a("span",{staticClass:"line-number"},[s._v("98")]),a("br"),a("span",{staticClass:"line-number"},[s._v("99")]),a("br"),a("span",{staticClass:"line-number"},[s._v("100")]),a("br"),a("span",{staticClass:"line-number"},[s._v("101")]),a("br"),a("span",{staticClass:"line-number"},[s._v("102")]),a("br"),a("span",{staticClass:"line-number"},[s._v("103")]),a("br"),a("span",{staticClass:"line-number"},[s._v("104")]),a("br"),a("span",{staticClass:"line-number"},[s._v("105")]),a("br"),a("span",{staticClass:"line-number"},[s._v("106")]),a("br"),a("span",{staticClass:"line-number"},[s._v("107")]),a("br"),a("span",{staticClass:"line-number"},[s._v("108")]),a("br"),a("span",{staticClass:"line-number"},[s._v("109")]),a("br"),a("span",{staticClass:"line-number"},[s._v("110")]),a("br"),a("span",{staticClass:"line-number"},[s._v("111")]),a("br"),a("span",{staticClass:"line-number"},[s._v("112")]),a("br"),a("span",{staticClass:"line-number"},[s._v("113")]),a("br"),a("span",{staticClass:"line-number"},[s._v("114")]),a("br"),a("span",{staticClass:"line-number"},[s._v("115")]),a("br"),a("span",{staticClass:"line-number"},[s._v("116")]),a("br"),a("span",{staticClass:"line-number"},[s._v("117")]),a("br"),a("span",{staticClass:"line-number"},[s._v("118")]),a("br"),a("span",{staticClass:"line-number"},[s._v("119")]),a("br"),a("span",{staticClass:"line-number"},[s._v("120")]),a("br"),a("span",{staticClass:"line-number"},[s._v("121")]),a("br"),a("span",{staticClass:"line-number"},[s._v("122")]),a("br"),a("span",{staticClass:"line-number"},[s._v("123")]),a("br"),a("span",{staticClass:"line-number"},[s._v("124")]),a("br"),a("span",{staticClass:"line-number"},[s._v("125")]),a("br"),a("span",{staticClass:"line-number"},[s._v("126")]),a("br"),a("span",{staticClass:"line-number"},[s._v("127")]),a("br"),a("span",{staticClass:"line-number"},[s._v("128")]),a("br"),a("span",{staticClass:"line-number"},[s._v("129")]),a("br"),a("span",{staticClass:"line-number"},[s._v("130")]),a("br"),a("span",{staticClass:"line-number"},[s._v("131")]),a("br"),a("span",{staticClass:"line-number"},[s._v("132")]),a("br"),a("span",{staticClass:"line-number"},[s._v("133")]),a("br"),a("span",{staticClass:"line-number"},[s._v("134")]),a("br"),a("span",{staticClass:"line-number"},[s._v("135")]),a("br"),a("span",{staticClass:"line-number"},[s._v("136")]),a("br"),a("span",{staticClass:"line-number"},[s._v("137")]),a("br"),a("span",{staticClass:"line-number"},[s._v("138")]),a("br"),a("span",{staticClass:"line-number"},[s._v("139")]),a("br"),a("span",{staticClass:"line-number"},[s._v("140")]),a("br"),a("span",{staticClass:"line-number"},[s._v("141")]),a("br"),a("span",{staticClass:"line-number"},[s._v("142")]),a("br"),a("span",{staticClass:"line-number"},[s._v("143")]),a("br"),a("span",{staticClass:"line-number"},[s._v("144")]),a("br"),a("span",{staticClass:"line-number"},[s._v("145")]),a("br"),a("span",{staticClass:"line-number"},[s._v("146")]),a("br"),a("span",{staticClass:"line-number"},[s._v("147")]),a("br"),a("span",{staticClass:"line-number"},[s._v("148")]),a("br"),a("span",{staticClass:"line-number"},[s._v("149")]),a("br"),a("span",{staticClass:"line-number"},[s._v("150")]),a("br"),a("span",{staticClass:"line-number"},[s._v("151")]),a("br"),a("span",{staticClass:"line-number"},[s._v("152")]),a("br"),a("span",{staticClass:"line-number"},[s._v("153")]),a("br"),a("span",{staticClass:"line-number"},[s._v("154")]),a("br"),a("span",{staticClass:"line-number"},[s._v("155")]),a("br"),a("span",{staticClass:"line-number"},[s._v("156")]),a("br"),a("span",{staticClass:"line-number"},[s._v("157")]),a("br"),a("span",{staticClass:"line-number"},[s._v("158")]),a("br"),a("span",{staticClass:"line-number"},[s._v("159")]),a("br"),a("span",{staticClass:"line-number"},[s._v("160")]),a("br"),a("span",{staticClass:"line-number"},[s._v("161")]),a("br")])]),a("h4",{attrs:{id:"版权声明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#版权声明"}},[s._v("#")]),s._v(" 版权声明")]),s._v(" "),a("p",[s._v("本课程主要修改自 atarallo 的 "),a("a",{attrs:{href:"https://github.com/atarallo/TECMINT_MONITOR",target:"_blank",rel:"noopener noreferrer"}},[s._v("《TECMINT_MONITOR》 "),a("OutboundLink")],1),s._v("项目 , 代码使用"),a("a",{attrs:{href:"http://www.apache.org/licenses/",target:"_blank",rel:"noopener noreferrer"}},[s._v(" APACHE 协议"),a("OutboundLink")],1),s._v("。")])])}),[],!1,null,null,null);e.default=t.exports},469:function(s,e,n){s.exports=n.p+"assets/img/image-20220531210631026.6dfb8162.png"},470:function(s,e,n){s.exports=n.p+"assets/img/image-20220531210654284.bd1570e4.png"},471:function(s,e,n){s.exports=n.p+"assets/img/image-20220531210659155.f2a1aaa8.png"},472:function(s,e,n){s.exports=n.p+"assets/img/image-20220531210704643.4d3dedd6.png"}}]);