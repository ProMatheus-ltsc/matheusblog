(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1593:function(s,a,t){"use strict";t.r(a);var e=t(65),v=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"用户及文件权限管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用户及文件权限管理"}},[s._v("#")]),s._v(" 用户及文件权限管理")]),s._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#linux用户管理"}},[s._v("linux用户管理")]),e("ul",[e("li",[e("a",{attrs:{href:"#_1-查看用户"}},[s._v("1.查看用户")])]),e("li",[e("a",{attrs:{href:"#_2-创建用户"}},[s._v("2.创建用户")])]),e("li",[e("a",{attrs:{href:"#_3-用户组"}},[s._v("3.用户组")])]),e("li",[e("a",{attrs:{href:"#_4-删除用户"}},[s._v("4.删除用户")])])])]),e("li",[e("a",{attrs:{href:"#linux-文件权限"}},[s._v("Linux 文件权限")]),e("ul",[e("li",[e("a",{attrs:{href:"#_1-查看文件权限"}},[s._v("1.查看文件权限")])]),e("li",[e("a",{attrs:{href:"#_2-变更文件所有者"}},[s._v("2.变更文件所有者")])]),e("li",[e("a",{attrs:{href:"#_3-修改文件权限"}},[s._v("3.修改文件权限")])])])]),e("li",[e("a",{attrs:{href:"#adduser-和-useradd-的区别是什么"}},[s._v("adduser 和 useradd 的区别是什么")])])])]),s._v("\n文件权限就是文件的访问控制权限，即哪些用户和组群可以访问文件以及可以执行什么样的操作。"),e("p"),s._v(" "),e("p",[s._v("Unix/Linux 系统是一个典型的多用户系统，不同的用户处于不同的地位，对文件和目录有不同的访问权限。为了保护系统的安全性，Unix/Linux 系统除了对用户权限作了严格的界定外，还在用户身份认证、访问控制、传输安全、文件读写权限等方面作了周密的控制。")]),s._v(" "),e("p",[s._v("在 Unix/Linux 中的每一个文件或目录都包含有访问权限，这些访问权限决定了谁能访问和如何访问这些文件和目录。")]),s._v(" "),e("h2",{attrs:{id:"linux用户管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux用户管理"}},[s._v("#")]),s._v(" linux用户管理")]),s._v(" "),e("h3",{attrs:{id:"_1-查看用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-查看用户"}},[s._v("#")]),s._v(" 1.查看用户")]),s._v(" "),e("p",[s._v("请打开终端，输入命令：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("who")]),s._v(" am i\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("who")]),s._v(" mom likes\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[e("img",{attrs:{src:t(515),alt:"image-20220531194328296"}})]),s._v(" "),e("p",[s._v("输出的第一列表示打开当前伪终端的用户的用户名（要查看当前登录用户的用户名，去掉空格直接使用 "),e("code",[s._v("whoami")]),s._v(" 即可），第二列的 "),e("code",[s._v("pts/0")]),s._v(" 中 "),e("code",[s._v("pts")]),s._v(" 表示伪终端，所谓伪是相对于 "),e("code",[s._v("/dev/tty")]),s._v(" 设备而言的，还记得上一节讲终端时的那七个使用 "),e("code",[s._v("[Ctrl]")]),s._v("+"),e("code",[s._v("[Alt]")]),s._v("+"),e("code",[s._v("[F1]～[F7]")]),s._v(" 进行切换的 "),e("code",[s._v("/dev/tty")]),s._v(" 设备么，这是“真终端”，伪终端就是当你在图形用户界面使用 "),e("code",[s._v("/dev/tty7")]),s._v(" 时每打开一个终端就会产生一个伪终端，"),e("code",[s._v("pts/0")]),s._v(" 后面那个数字就表示打开的伪终端序号，你可以尝试再打开一个终端，然后在里面输入 "),e("code",[s._v("who am i")]),s._v("，看第二列是不是就变成 "),e("code",[s._v("pts/1")]),s._v(" 了，第三列则表示当前伪终端的启动时间。")]),s._v(" "),e("p",[s._v("还有一点需要注意的是，在某些环境中 "),e("code",[s._v("who am i")]),s._v(" 和 "),e("code",[s._v("who mom likes")]),s._v(" 命令不会输出任何内容，这是因为当前使用的 SHELL 不是登录时的 SHELL，没有用户与 who 的 stdin 相关联，因此不会输出任何内容。例如我在本地的 Ubuntu 系统上输入这个命令就不会有提示。")]),s._v(" "),e("p",[e("img",{attrs:{src:t(516),alt:"image-20220531194333223"}})]),s._v(" "),e("p",[s._v("此时我们只需要打开一个登录 SHELL 的终端例如 Tmux，或者通过 ssh 登录到本机，再在新的终端里执行命令即可。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("tmux\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:t(517),alt:"image-20220531194339036"}})]),s._v(" "),e("p",[e("code",[s._v("who")]),s._v(" 命令其它常用参数")]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("参数")]),s._v(" "),e("th",[s._v("说明")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[e("code",[s._v("-a")])]),s._v(" "),e("td",[s._v("打印能打印的全部")])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("-d")])]),s._v(" "),e("td",[s._v("打印死掉的进程")])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("-m")])]),s._v(" "),e("td",[s._v("同"),e("code",[s._v("am i")]),s._v("，"),e("code",[s._v("mom likes")])])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("-q")])]),s._v(" "),e("td",[s._v("打印当前登录用户数及用户名")])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("-u")])]),s._v(" "),e("td",[s._v("打印当前登录用户登录信息")])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("-r")])]),s._v(" "),e("td",[s._v("打印运行等级")])])])]),s._v(" "),e("h3",{attrs:{id:"_2-创建用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建用户"}},[s._v("#")]),s._v(" 2.创建用户")]),s._v(" "),e("p",[s._v("在 Linux 系统里， "),e("code",[s._v("root")]),s._v(" 账户拥有整个系统至高无上的权限，比如新建和添加用户。")]),s._v(" "),e("blockquote",[e("p",[s._v("root 权限，系统权限的一种，与 SYSTEM 权限可以理解成一个概念，但高于 Administrator 权限，root 是 Linux 和 UNIX 系统中的超级管理员用户帐户，该帐户拥有整个系统至高无上的权力，所有对象他都可以操作，所以很多黑客在入侵系统的时候，都要把权限提升到 root 权限，这个操作等同于在 Windows 下就是将新建的非法帐户添加到 Administrators 用户组。更比如安卓操作系统中（基于 Linux 内核）获得 root 权限之后就意味着已经获得了手机的最高权限，这时候你可以对手机中的任何文件（包括系统文件）执行所有增、删、改、查的操作。")])]),s._v(" "),e("p",[s._v("大部分 Linux 系统在安装时都会建议用户新建一个用户而不是直接使用 root 用户进行登录，当然也有直接使用 root 登录的例如 Kali（基于 Debian 的 Linux 发行版，集成大量工具软件，主要用于数字取证的操作系统）。一般我们登录系统时都是以普通账户的身份登录的，要创建用户需要 root 权限，这里就要用到 "),e("code",[s._v("sudo")]),s._v(" 这个命令了。不过使用这个命令有两个大前提，一是你要知道当前登录用户的密码，二是当前用户必须在 "),e("code",[s._v("sudo")]),s._v(" 用户组。shiyanlou 用户也属于 sudo 用户组（稍后会介绍如何查看和添加用户组）。")]),s._v(" "),e("h4",{attrs:{id:"su-su-与-sudo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#su-su-与-sudo"}},[s._v("#")]),s._v(" su，su- 与 sudo")]),s._v(" "),e("p",[e("strong",[s._v("需要注意 Linux 环境下输入密码是不会显示的。")])]),s._v(" "),e("p",[e("code",[s._v("su <user>")]),s._v(" 可以切换到用户 user，执行时需要输入目标用户的密码，"),e("code",[s._v("sudo <cmd>")]),s._v(" 可以以特权级别运行 cmd 命令，需要当前用户属于 sudo 组，且需要输入当前用户的密码。"),e("code",[s._v("su - <user>")]),s._v(" 命令也是切换用户，但是同时用户的环境变量和工作目录也会跟着改变成目标用户所对应的。")]),s._v(" "),e("p",[s._v("现在我们新建一个叫 "),e("code",[s._v("lilei")]),s._v(" 的用户：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" adduser lilei\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("实验楼的环境目前设置为 shiyanlou 用户执行 sudo 不需要输入密码，通常此处需要按照提示输入 shiyanlou 密码（"),e("strong",[s._v("Linux 下密码输入是不显示任何内容的，shiyanlou 用户密码可以在右侧环境信息里查看，请勿自行设置密码")]),s._v("）。然后是给 lilei 用户设置密码，后面的选项的一些内容你可以选择直接回车使用默认值。")]),s._v(" "),e("p",[e("img",{attrs:{src:t(518),alt:"image-20220531194348404"}})]),s._v(" "),e("p",[s._v("这个命令不但可以添加用户到系统，同时也会默认为新用户在 /home 目录下创建一个工作目录：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /home\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:t(519),alt:"image-20220531194353855"}})]),s._v(" "),e("p",[s._v("现在你已经创建好一个用户，并且你可以使用你创建的用户登录了，使用如下命令切换登录用户：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" -l lilei\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("输入刚刚设置的 lilei 的密码，然后输入如下命令并查看输出：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("who")]),s._v(" am i\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("whoami")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[e("img",{attrs:{src:t(520),alt:"image-20220531194359367"}})]),s._v(" "),e("p",[s._v("你发现了区别了吗？这就是上一小节我们讲到的 "),e("code",[s._v("who am i")]),s._v(" 和 "),e("code",[s._v("whoami")]),s._v(" 命令的区别。")]),s._v(" "),e("p",[s._v("退出当前用户跟退出终端一样，可以使用 "),e("code",[s._v("exit")]),s._v(" 命令或者使用快捷键 "),e("code",[s._v("Ctrl+D")]),s._v("。")]),s._v(" "),e("p",[e("img",{attrs:{src:t(521),alt:"image-20220531194404042"}})]),s._v(" "),e("h3",{attrs:{id:"_3-用户组"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-用户组"}},[s._v("#")]),s._v(" 3.用户组")]),s._v(" "),e("p",[s._v("在 Linux 里面每个用户都有一个归属（用户组），用户组简单地理解就是一组用户的集合，它们共享一些资源和权限，同时拥有私有资源，就跟家的形式差不多，你的兄弟姐妹（不同的用户）属于同一个家（用户组），你们可以共同拥有这个家（共享资源），爸妈对待你们都一样（共享权限），你偶尔写写日记，其他人未经允许不能查看（私有资源和权限）。当然一个用户是可以属于多个用户组的，正如你既属于家庭，又属于学校或公司。")]),s._v(" "),e("p",[s._v("在 Linux 里面如何知道自己属于哪些用户组呢？")]),s._v(" "),e("h4",{attrs:{id:"方法一-使用-groups-命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方法一-使用-groups-命令"}},[s._v("#")]),s._v(" 方法一：使用 groups 命令")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("groups")]),s._v(" shiyanlou\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:t(522),alt:"image-20220531194409161"}})]),s._v(" "),e("p",[s._v("其中冒号之前表示用户，后面表示该用户所属的用户组。这里可以看到 shiyanlou 用户属于 shiyanlou 用户组，每次新建用户如果不指定用户组的话，默认会自动创建一个与用户名相同的用户组（差不多就相当于家长的意思）。")]),s._v(" "),e("p",[s._v("默认情况下在 sudo 用户组里的可以使用 sudo 命令获得 root 权限。shiyanlou 用户也可以使用 sudo 命令，为什么这里没有显示在 sudo 用户组里呢？可以查看下 "),e("code",[s._v("/etc/sudoers.d/shiyanlou")]),s._v(" 文件，我们在 "),e("code",[s._v("/etc/sudoers.d")]),s._v(" 目录下创建了这个文件，从而给 shiyanlou 用户赋予了 sudo 权限：")]),s._v(" "),e("p",[e("img",{attrs:{src:t(523),alt:"image-20220531194414077"}})]),s._v(" "),e("p",[s._v("用户组的管理涉及用户组的添加、删除和修改。组的增加、删除和修改实际上就是对/etc/group文件的更新。")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("groupadd 选项 用户组")]),s._v(" :增加一个新的用户组")]),s._v(" "),e("li",[e("code",[s._v("groupdel 用户组")]),s._v(":要删除一个已有的用户组")]),s._v(" "),e("li",[e("code",[s._v("groupmod 选项 用户组")]),s._v(" : 修改用户组的属性")])]),s._v(" "),e("h4",{attrs:{id:"方法二-查看-etc-group-文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方法二-查看-etc-group-文件"}},[s._v("#")]),s._v(" 方法二：查看 "),e("code",[s._v("/etc/group")]),s._v(" 文件")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/group "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("这里 "),e("code",[s._v("cat")]),s._v(" 命令用于读取指定文件的内容并打印到终端输出，后面会详细讲它的使用。 "),e("code",[s._v("| sort")]),s._v(" 表示将读取的文本进行一个字典排序再输出，然后你将看到如下一堆输出，你可以在最下面看到 shiyanlou 的用户组信息：")]),s._v(" "),e("p",[e("img",{attrs:{src:t(524),alt:"image-20220531194418995"}})]),s._v(" "),e("p",[s._v("没找到？没关系，你可以使用 "),e("code",[s._v("grep")]),s._v(" 命令过滤掉一些你不想看到的结果：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/group "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -E "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shiyanlou"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:t(525),alt:"image-20220531194425012"}})]),s._v(" "),e("h5",{attrs:{id:"etc-group-文件格式说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etc-group-文件格式说明"}},[s._v("#")]),s._v(" "),e("code",[s._v("/etc/group")]),s._v(" 文件格式说明")]),s._v(" "),e("p",[s._v("/etc/group 的内容包括用户组（Group）、用户组口令、GID（组 ID） 及该用户组所包含的用户（User），每个用户组一条记录。格式如下：")]),s._v(" "),e("blockquote",[e("p",[s._v("group_name:password:GID:user_list")])]),s._v(" "),e("p",[s._v("你看到上面的 password 字段为一个 "),e("code",[s._v("x")]),s._v("，并不是说密码就是它，只是表示密码不可见而已。")]),s._v(" "),e("p",[s._v("这里需要注意，如果用户的 GID 等于用户组的 GID，那么最后一个字段 "),e("code",[s._v("user_list")]),s._v(" 就是空的，这里的 GID 是指用户默认所在组的 GID，可以使用 "),e("code",[s._v("id")]),s._v(" 命令查看。比如 shiyanlou 用户，在 "),e("code",[s._v("/etc/group")]),s._v(" 中的 shiyanlou 用户组后面是不会显示的。lilei 用户，在 "),e("code",[s._v("/etc/group")]),s._v(" 中的 lilei 用户组后面是不会显示的。")]),s._v(" "),e("h4",{attrs:{id:"将其它用户加入-sudo-用户组"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#将其它用户加入-sudo-用户组"}},[s._v("#")]),s._v(" 将其它用户加入 sudo 用户组")]),s._v(" "),e("p",[s._v("默认情况下新创建的用户是不具有 root 权限的，也不在 sudo 用户组，可以让其加入 sudo 用户组从而获取 root 权限：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意 Linux 上输入密码是不会显示的")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" -l lilei\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[e("img",{attrs:{src:t(526),alt:"image-20220531194431172"}})]),s._v(" "),e("p",[s._v("会提示 lilei 不在 sudoers 文件中，意思就是 lilei 不在 sudo 用户组中，至于 sudoers 文件（/etc/sudoers）你现在最好不要动它，操作不慎会导致比较麻烦的后果。")]),s._v(" "),e("p",[s._v("使用 "),e("code",[s._v("usermod")]),s._v(" 命令可以为用户添加用户组，同样使用该命令你必需有 root 权限，你可以直接使用 root 用户为其它用户添加用户组，或者用其它已经在 sudo 用户组的用户使用 sudo 命令获取权限来执行该命令。")]),s._v(" "),e("p",[s._v("这里我用 shiyanlou 用户执行 sudo 命令将 lilei 添加到 sudo 用户组，让它也可以使用 sudo 命令获得 root 权限，首先我们切换回 shiyanlou 用户。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" - shiyanlou\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("此处需要输入 shiyanlou 用户密码，shiyanlou 的密码可以在右侧工具栏的环境信息里看到。")]),s._v(" "),e("p",[e("img",{attrs:{src:t(527),alt:"image-20220531194436738"}})]),s._v(" "),e("p",[s._v("当然也可以通过 "),e("code",[s._v("sudo passwd shiyanlou")]),s._v(" 进行设置，或者你直接关闭当前终端打开一个新的终端。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("groups")]),s._v(" lilei\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -G "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" lilei\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("groups")]),s._v(" lilei\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[e("img",{attrs:{src:t(528),alt:"image-20220531194442590"}})]),s._v(" "),e("p",[s._v("然后你再切换回 lilei 用户，现在就可以使用 sudo 获取 root 权限了。")]),s._v(" "),e("p",[e("img",{attrs:{src:t(529),alt:"image-20220531194447848"}})]),s._v(" "),e("h3",{attrs:{id:"_4-删除用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-删除用户"}},[s._v("#")]),s._v(" 4.删除用户")]),s._v(" "),e("p",[s._v("删除用户是很简单的事：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" deluser lilei --remove-home\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:t(530),alt:"image-20220531194453107"}})]),s._v(" "),e("p",[s._v("使用 "),e("code",[s._v("--remove-home")]),s._v(" 参数在删除用户时候会一并将该用户的工作目录一并删除。如果不使用那么系统会自动在 /home 目录为该用户保留工作目录。")]),s._v(" "),e("p",[e("img",{attrs:{src:t(531),alt:"image-20220531194459333"}})]),s._v(" "),e("p",[s._v("删除用户组可以使用 "),e("code",[s._v("groupdel")]),s._v(" 命令，倘若该群组中仍包括某些用户，则必须先删除这些用户后，才能删除群组。")]),s._v(" "),e("h2",{attrs:{id:"linux-文件权限"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux-文件权限"}},[s._v("#")]),s._v(" Linux 文件权限")]),s._v(" "),e("p",[s._v("文件权限就是文件的访问控制权限，即哪些用户和组群可以访问文件以及可以执行什么样的操作。")]),s._v(" "),e("p",[s._v("Unix/Linux 系统是一个典型的多用户系统，不同的用户处于不同的地位，对文件和目录有不同的访问权限。为了保护系统的安全性，Unix/Linux 系统除了对用户权限作了严格的界定外，还在用户身份认证、访问控制、传输安全、文件读写权限等方面作了周密的控制。")]),s._v(" "),e("p",[s._v("操作系统中每个文件都拥有特定的权限、所属用户和所属组。权限是操作系统用来限制资源访问的机制，在Linux中权限一般分为读(readable)、写(writable)和执行(excutable)，分为三组。分别对应文件的属主(owner)，属组(group)和其他用户(other)，通过这样的机制来限制哪些用户、哪些组可以对特定的文件进行什么样的操作。通过 "),e("strong",[e("code",[s._v("ls -l")])]),s._v(" 命令我们可以查看某个目录下的文件或目录的权限.")]),s._v(" "),e("p",[s._v("在 Unix/Linux 中的每一个文件或目录都包含有访问权限，这些访问权限决定了谁能访问和如何访问这些文件和目录。")]),s._v(" "),e("h3",{attrs:{id:"_1-查看文件权限"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-查看文件权限"}},[s._v("#")]),s._v(" 1.查看文件权限")]),s._v(" "),e("p",[s._v("使用较长格式列出文件：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ ls -l\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("你可能除了知道最后面那一项是文件名之外，其它项就不太清楚了，那么到底是什么意思呢：")]),s._v(" "),e("p",[e("img",{attrs:{src:t(532),alt:"image-20220531194506203"}})]),s._v(" "),e("p",[s._v("可能你还是不太明白，比如第一项文件类型和权限那一堆东西具体指什么，链接又是什么，何为最后修改时间，下面一一道来：")]),s._v(" "),e("p",[e("img",{attrs:{src:t(533),alt:"image-20220531194512025"}})]),s._v(" "),e("ul",[e("li",[e("p",[s._v("文件类型")]),s._v(" "),e("ul",[e("li",[s._v("d： 代表目录")]),s._v(" "),e("li",[s._v("-： 代表文件")]),s._v(" "),e("li",[s._v("l： 代表软链接（可以认为是window中的快捷方式）")])]),s._v(" "),e("p",[s._v("关于文件类型，这里有一点你必需时刻牢记 "),e("strong",[s._v("Linux 里面一切皆文件")]),s._v("，正因为这一点才有了设备文件（ "),e("code",[s._v("/dev")]),s._v(" 目录下有各种设备文件，大都跟具体的硬件设备相关）这一说。 "),e("code",[s._v("socket")]),s._v("：网络套接字，具体是什么，感兴趣的用户可以去学习实验楼的后续相关课程。"),e("code",[s._v("pipe")]),s._v(" 管道，这个东西很重要，我们以后将会讨论到，这里你先知道有它的存在即可。"),e("code",[s._v("软链接文件")]),s._v("：链接文件是分为两种的，另一种当然是“硬链接”（硬链接不常用，具体内容不作为本课程讨论重点，而软链接等同于 Windows 上的快捷方式，你记住这一点就够了）。")])]),s._v(" "),e("li",[e("p",[s._v("文件权限")]),s._v(" "),e("ul",[e("li",[s._v("r：代表权限是可读，r也可以用数字4表示")]),s._v(" "),e("li",[s._v("w：代表权限是可写，w也可以用数字2表示")]),s._v(" "),e("li",[s._v("x：代表权限是可执行，x也可以用数字1表示")])])]),s._v(" "),e("li",[e("p",[s._v("读权限，表示你可以使用 "),e("code",[s._v("cat <file name>")]),s._v(" 之类的命令来读取某个文件的内容；写权限，表示你可以编辑和修改某个文件的内容；")]),s._v(" "),e("p",[s._v("执行权限，通常指可以运行的二进制程序文件或者脚本文件，如同 Windows 上的 "),e("code",[s._v("exe")]),s._v(" 后缀的文件，不过 Linux 上不是通过文件后缀名来区分文件的类型。你需要注意的一点是，"),e("strong",[s._v("一个目录同时具有读权限和执行权限才可以打开并查看内部文件，而一个目录要有写权限才允许在其中创建其它文件")]),s._v("，这是因为目录文件实际保存着该目录里面的文件的列表等信息。")]),s._v(" "),e("p",[s._v("所有者权限，这一点相信你应该明白了，至于所属用户组权限，是指你所在的用户组中的所有其它用户对于该文件的权限，比如，你有一个 iPad，那么这个用户组权限就决定了你的兄弟姐妹有没有权限使用它破坏它和占有它。")])]),s._v(" "),e("li",[e("p",[s._v("链接数\n链接到该文件所在的 inode 结点的文件名数目（关于这个概念涉及到 Linux 文件系统的相关概念知识，不在本课程的讨论范围，感兴趣的用户可以查看 "),e("a",{attrs:{href:"https://www.ibm.com/developerworks/cn/linux/l-cn-hardandsymb-links/index.html#major2",target:"_blank",rel:"noopener noreferrer"}},[s._v("硬链接和软链接的联系与区别"),e("OutboundLink")],1),s._v("）。")])]),s._v(" "),e("li",[e("p",[s._v("文件大小\n以 inode 结点大小为单位来表示的文件大小，你可以给 "),e("code",[s._v("ls")]),s._v("加上 "),e("code",[s._v("-lh")]),s._v(" 参数来更直观的查看文件的大小。\n"),e("em",[e("strong",[s._v("关于 ls 命令的一些其它常用的用法：")])])])]),s._v(" "),e("li",[e("p",[s._v("显示除了 "),e("code",[s._v(".")]),s._v("(当前目录)，"),e("code",[s._v("..")]),s._v("上一级目录之外的所有包含隐藏文件（Linux 下以 "),e("code",[s._v(".")]),s._v("'开头的文件为隐藏文件）")])])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ ls -A\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("当然，你可以同时使用 "),e("code",[s._v("-a")]),s._v(" 和 "),e("code",[s._v("-l")]),s._v("参数：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ ls -al\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("查看某一个目录的完整属性，而不是显示目录里面的文件属性：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ ls -dl <目录名>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("显示所有文件大小，并以普通人类能看懂的方式呈现：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ ls -asSh\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("其中小 s 为显示文件大小，大 S 为按文件大小排序，若需要知道如何按其它方式排序，可以使用 "),e("code",[s._v("man ls")]),s._v(" 命令查询。")]),s._v(" "),e("p",[e("strong",[s._v("文件和目录权限的区别：")])]),s._v(" "),e("p",[s._v("对文件和目录而言，读写执行表示不同的意义。")]),s._v(" "),e("p",[s._v("对于文件：")]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[s._v("权限名称")]),s._v(" "),e("th",{staticStyle:{"text-align":"right"}},[s._v("可执行操作")])])]),s._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[s._v("r")]),s._v(" "),e("td",{staticStyle:{"text-align":"right"}},[s._v("可以使用cat查看文件的内容")])]),s._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[s._v("w")]),s._v(" "),e("td",{staticStyle:{"text-align":"right"}},[s._v("可以修改文件的内容")])]),s._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[s._v("x")]),s._v(" "),e("td",{staticStyle:{"text-align":"right"}},[s._v("可以将其运行为二进制文件")])])])]),s._v(" "),e("p",[s._v("对于目录：")]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[s._v("权限名称")]),s._v(" "),e("th",{staticStyle:{"text-align":"right"}},[s._v("可执行操作")])])]),s._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[s._v("r")]),s._v(" "),e("td",{staticStyle:{"text-align":"right"}},[s._v("可以查看目录下列表")])]),s._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[s._v("w")]),s._v(" "),e("td",{staticStyle:{"text-align":"right"}},[s._v("可以创建和删除目录下文件")])]),s._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[s._v("x")]),s._v(" "),e("td",{staticStyle:{"text-align":"right"}},[s._v("可以使用cd进入目录")])])])]),s._v(" "),e("p",[e("strong",[s._v("需要注意的是超级用户可以无视普通用户的权限，即使文件目录权限是000，依旧可以访问。")]),s._v(" "),e("strong",[s._v("在linux中的每个用户必须属于一个组，不能独立于组外。在linux中每个文件有所有者、所在组、其它组的概念。")])]),s._v(" "),e("ul",[e("li",[e("p",[e("strong",[s._v("所有者")])]),s._v(" "),e("p",[s._v("一般为文件的创建者，谁创建了该文件，就天然的成为该文件的所有者，用ls ‐ahl命令可以看到文件的所有者 也可以使用chown 用户名  文件名来修改文件的所有者 。")])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("文件所在组")])]),s._v(" "),e("p",[s._v("当某个用户创建了一个文件后，这个文件的所在组就是该用户所在的组 用ls ‐ahl命令可以看到文件的所有组 也可以使用chgrp  组名  文件名来修改文件所在的组。")])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("其它组")])]),s._v(" "),e("p",[s._v("除开文件的所有者和所在组的用户外，系统的其它用户都是文件的其它组")])])]),s._v(" "),e("h3",{attrs:{id:"_2-变更文件所有者"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-变更文件所有者"}},[s._v("#")]),s._v(" 2.变更文件所有者")]),s._v(" "),e("p",[s._v("切换到 lilei 用户，然后在 /home/lilei 目录新建一个文件，命名为 "),e("code",[s._v("iphone11")]),s._v("。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" - lilei\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" iphone11\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -alh iphone11\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("可见文件所有者是 lilei ：")]),s._v(" "),e("p",[e("img",{attrs:{src:t(534),alt:"image-20220531194518882"}})]),s._v(" "),e("p",[s._v("现在切换回到 shiyanlou 用户，使用以下命令变更文件所有者为 shiyanlou。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 需要切换到 shiyanlou 用户执行以下操作")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/lilei\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" iphone11\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" shiyanlou iphone11\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("现在查看，发现文件所有者成功修改为 shiyanlou。")]),s._v(" "),e("p",[e("img",{attrs:{src:t(535),alt:"image-20220531194536095"}})]),s._v(" "),e("h3",{attrs:{id:"_3-修改文件权限"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-修改文件权限"}},[s._v("#")]),s._v(" 3.修改文件权限")]),s._v(" "),e("p",[s._v("如果你有一个自己的文件不想被其他用户读、写、执行，那么就需要对文件的权限做修改。文件的权限有两种表示方式：")]),s._v(" "),e("ul",[e("li",[s._v("方式一：二进制数字表示")])]),s._v(" "),e("p",[e("img",{attrs:{src:t(536),alt:"image-20220531194543127"}})]),s._v(" "),e("p",[s._v("每个文件有三组固定的权限，分别对应拥有者，所属用户组，其他用户，"),e("strong",[s._v("记住这个顺序是固定的")]),s._v("。文件的读写执行对应字母 "),e("code",[s._v("rwx")]),s._v("，以二进制表示就是 "),e("code",[s._v("111")]),s._v("，用十进制表示就是 "),e("code",[s._v("7")]),s._v("，对进制转换不熟悉的同学可以看看 "),e("a",{attrs:{href:"https://baike.baidu.com/item/%E8%BF%9B%E5%88%B6%E8%BD%AC%E6%8D%A2/3117222",target:"_blank",rel:"noopener noreferrer"}},[s._v("进制转换"),e("OutboundLink")],1),s._v("。例如我们刚刚新建的文件 iphone11 的权限是 "),e("code",[s._v("rw-rw-rw-")]),s._v("，换成对应的十进制表示就是 666，这就表示这个文件的拥有者，所属用户组和其他用户具有读写权限，不具有执行权限。")]),s._v(" "),e("p",[s._v("如果我要将文件 "),e("code",[s._v("iphone11")]),s._v(" 的权限改为只有我自己可以用那么就可以用这个方法更改它的权限。")]),s._v(" "),e("p",[s._v("为了演示，我先在文件里加点内容：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"echo '),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("hello shiyanlou"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v('"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" iphone11\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("然后修改权限：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),s._v(" iphone11\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -alh iphone11\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[e("img",{attrs:{src:t(537),alt:"image-20220531194548408"}})]),s._v(" "),e("p",[s._v("切换到 lilei 用户，尝试写入和读取操作，可以看到 lilei 用户已经不能读写这个 iphone11 文件了：")]),s._v(" "),e("p",[e("img",{attrs:{src:t(538),alt:"image-20220531194553176"}})]),s._v(" "),e("ul",[e("li",[s._v("方式二：加减赋值操作")])]),s._v(" "),e("p",[s._v("要完成上述实验相同的效果，你可以：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" go-rw iphone11\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:t(539),alt:"image-20220531194558442"}})]),s._v(" "),e("p",[e("code",[s._v("g")]),s._v("、"),e("code",[s._v("o")]),s._v(" 还有 "),e("code",[s._v("u")]),s._v(" 分别表示 group（用户组）、others（其他用户） 和 user（用户），"),e("code",[s._v("+")]),s._v(" 和 "),e("code",[s._v("-")]),s._v(" 分别表示增加和去掉相应的权限。")]),s._v(" "),e("p",[e("strong",[s._v("修改文件/目录的权限的命令："),e("code",[s._v("chmod")])])]),s._v(" "),e("p",[s._v("示例：修改/test下的aaa.txt的权限为属主有全部权限，属主所在的组有读写权限，\n其他用户只有读的权限")]),s._v(" "),e("p",[e("strong",[e("code",[s._v("chmod u=rwx,g=rw,o=r aaa.txt")])])]),s._v(" "),e("p",[s._v("上述示例还可以使用数字表示：")]),s._v(" "),e("p",[s._v("chmod 764 aaa.txt")]),s._v(" "),e("p",[e("strong",[s._v("补充一个比较常用的东西:")])]),s._v(" "),e("p",[s._v("假如我们装了一个zookeeper，我们每次开机到要求其自动启动该怎么办？")]),s._v(" "),e("ol",[e("li",[s._v("新建一个脚本zookeeper")]),s._v(" "),e("li",[s._v("为新建的脚本zookeeper添加可执行权限，命令是:"),e("code",[s._v("chmod +x zookeeper")])]),s._v(" "),e("li",[s._v("把zookeeper这个脚本添加到开机启动项里面，命令是："),e("code",[s._v("chkconfig --add zookeeper")])]),s._v(" "),e("li",[s._v("如果想看看是否添加成功，命令是："),e("code",[s._v("chkconfig --list")])])]),s._v(" "),e("h2",{attrs:{id:"adduser-和-useradd-的区别是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#adduser-和-useradd-的区别是什么"}},[s._v("#")]),s._v(" "),e("code",[s._v("adduser")]),s._v(" 和 "),e("code",[s._v("useradd")]),s._v(" 的区别是什么")]),s._v(" "),e("p",[s._v("答："),e("code",[s._v("useradd")]),s._v(" 只创建用户，不会创建用户密码和工作目录，创建完了需要使用 "),e("code",[s._v("passwd <username>")]),s._v(" 去设置新用户的密码。"),e("code",[s._v("adduser")]),s._v(" 在创建用户的同时，会创建工作目录和密码（提示你设置），做这一系列的操作。其实 "),e("code",[s._v("useradd")]),s._v("、"),e("code",[s._v("userdel")]),s._v(" 这类操作更像是一种命令，执行完了就返回。而 "),e("code",[s._v("adduser")]),s._v(" 更像是一种程序，需要你输入、确定等一系列操作。")]),s._v(" "),e("p",[s._v("Linux 还有一些关于隐藏权限和特殊权限的内容，想全面了解 Linux 权限管理这部分内容的用户可以通过其它方式学习。")])])}),[],!1,null,null,null);a.default=v.exports},515:function(s,a,t){s.exports=t.p+"assets/img/image-20220531194328296.f0845d08.png"},516:function(s,a,t){s.exports=t.p+"assets/img/image-20220531194333223.c48d3665.png"},517:function(s,a,t){s.exports=t.p+"assets/img/image-20220531194339036.f7545891.png"},518:function(s,a,t){s.exports=t.p+"assets/img/image-20220531194348404.61e12c9f.png"},519:function(s,a,t){s.exports=t.p+"assets/img/image-20220531194353855.215e5afd.png"},520:function(s,a,t){s.exports=t.p+"assets/img/image-20220531194359367.3e7f2e99.png"},521:function(s,a,t){s.exports=t.p+"assets/img/image-20220531194404042.bda6b547.png"},522:function(s,a,t){s.exports=t.p+"assets/img/image-20220531194409161.41f98344.png"},523:function(s,a,t){s.exports=t.p+"assets/img/image-20220531194414077.65aa4752.png"},524:function(s,a,t){s.exports=t.p+"assets/img/image-20220531194418995.9fc4ca9f.png"},525:function(s,a,t){s.exports=t.p+"assets/img/image-20220531194425012.0f47eed4.png"},526:function(s,a,t){s.exports=t.p+"assets/img/image-20220531194431172.3562f519.png"},527:function(s,a,t){s.exports=t.p+"assets/img/image-20220531194436738.901eba20.png"},528:function(s,a,t){s.exports=t.p+"assets/img/image-20220531194442590.04012f35.png"},529:function(s,a,t){s.exports=t.p+"assets/img/image-20220531194447848.5c5dbd47.png"},530:function(s,a,t){s.exports=t.p+"assets/img/image-20220531194453107.40c7c05d.png"},531:function(s,a,t){s.exports=t.p+"assets/img/image-20220531194459333.152dbc92.png"},532:function(s,a,t){s.exports=t.p+"assets/img/image-20220531194506203.ae387a3b.png"},533:function(s,a,t){s.exports=t.p+"assets/img/image-20220531194512025.6f31d28b.png"},534:function(s,a,t){s.exports=t.p+"assets/img/image-20220531194518882.35f8f5db.png"},535:function(s,a,t){s.exports=t.p+"assets/img/image-20220531194536095.453e0eb8.png"},536:function(s,a,t){s.exports=t.p+"assets/img/image-20220531194543127.e6e6a4df.png"},537:function(s,a,t){s.exports=t.p+"assets/img/image-20220531194548408.1a1cef33.png"},538:function(s,a,t){s.exports=t.p+"assets/img/image-20220531194553176.083dd297.png"},539:function(s,a,t){s.exports=t.p+"assets/img/image-20220531194558442.aa7cbc0e.png"}}]);