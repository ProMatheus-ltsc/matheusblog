(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{1381:function(s,a,e){"use strict";e.r(a);var t=e(24),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"centos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#centos"}},[s._v("#")]),s._v(" Centos")]),s._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#何为-centos"}},[s._v("何为 CentOS？")])]),e("li",[e("a",{attrs:{href:"#centos可以提供什么要素"}},[s._v("CentOS可以提供什么要素？")])]),e("li",[e("a",{attrs:{href:"#centos用什么进行交互"}},[s._v("CentOS用什么进行交互？")])]),e("li",[e("a",{attrs:{href:"#常见的软件安装方式"}},[s._v("常见的软件安装方式")]),e("ul",[e("li",[e("a",{attrs:{href:"#在线安装"}},[s._v("在线安装")])]),e("li",[e("a",{attrs:{href:"#离线安装"}},[s._v("离线安装")])])])]),e("li",[e("a",{attrs:{href:"#常见的截屏方式"}},[s._v("常见的截屏方式")])]),e("li",[e("a",{attrs:{href:"#常见的命令"}},[s._v("常见的命令")])]),e("li",[e("a",{attrs:{href:"#常见的文件管理命令"}},[s._v("常见的文件管理命令")])])])]),e("p"),s._v(" "),e("h2",{attrs:{id:"何为-centos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#何为-centos"}},[s._v("#")]),s._v(" 何为 CentOS？")]),s._v(" "),e("p",[s._v("CentOS（Community Enterprise Operating System，社区企业操作系统）是Linux发行版之一，它是来自于Red Hat Enterprise Linux依照开放源代码规定释出的源代码所编译而成。基于Red Hat Linux 提供的可自由使用源代码的企业级Linux发行版本。由于出自同样的源代码，因此有些要求高度稳定性的服务器以CentOS替代商业版的Red Hat Enterprise Linux使用。两者的不同，在于CentOS并不包含封闭源代码软件。主要作用是服务器的搭建。重点是：CentOS是完全免费的！")]),s._v(" "),e("h2",{attrs:{id:"centos可以提供什么要素"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#centos可以提供什么要素"}},[s._v("#")]),s._v(" CentOS可以提供什么要素？")]),s._v(" "),e("ol",[e("li",[s._v("保守性强")]),s._v(" "),e("li",[s._v("稳定的环境")]),s._v(" "),e("li",[s._v("长期的升级更新支持")]),s._v(" "),e("li",[s._v("大规模的系统也能够发挥好很好的性能")])]),s._v(" "),e("h2",{attrs:{id:"centos用什么进行交互"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#centos用什么进行交互"}},[s._v("#")]),s._v(" CentOS用什么进行交互？")]),s._v(" "),e("p",[s._v("众所周知，大家都用过windows下的终端操作（console），而在linux下也有一个类似于这样的终端（Terminal），他们的本质上是有区别的，但是达到的效果却近乎一样，都是为了满足我们可视化的需求。")]),s._v(" "),e("h2",{attrs:{id:"常见的软件安装方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见的软件安装方式"}},[s._v("#")]),s._v(" 常见的软件安装方式")]),s._v(" "),e("h3",{attrs:{id:"在线安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在线安装"}},[s._v("#")]),s._v(" 在线安装")]),s._v(" "),e("h4",{attrs:{id:"yum安装方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yum安装方式"}},[s._v("#")]),s._v(" Yum安装方式：")]),s._v(" "),e("p",[s._v("用YUM安装软件包命令："),e("code",[s._v("yum install + 软件包")]),s._v("\n用YUM删除软件包命令："),e("code",[s._v("yum remove + 软件包")])]),s._v(" "),e("blockquote",[e("p",[s._v("小技巧：如果想安装一个软件包，但是具体不知道安装什么版本，你可以使用 "),e("code",[s._v("yum search +软件包名")])])]),s._v(" "),e("h3",{attrs:{id:"离线安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#离线安装"}},[s._v("#")]),s._v(" 离线安装")]),s._v(" "),e("h4",{attrs:{id:"rpm形式的二进制软件包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rpm形式的二进制软件包"}},[s._v("#")]),s._v(" *.rpm形式的二进制软件包")]),s._v(" "),e("ul",[e("li",[s._v("安装："),e("code",[s._v("rpm -ivh *.rpm")])]),s._v(" "),e("li",[s._v("卸载："),e("code",[s._v("rpm -e packgename")])]),s._v(" "),e("li",[s._v("反安装："),e("code",[s._v("执行rpm -e rpm包名")])]),s._v(" "),e("li",[s._v("软件："),e("code",[s._v("执行rpm -Uvh rpm包名")])]),s._v(" "),e("li",[s._v("查询软件包的详细信息："),e("code",[s._v("执行rpm -qpi rpm包名")])]),s._v(" "),e("li",[s._v("查询某个文件是属于那个rpm包的："),e("code",[s._v("执行rpm -qf rpm包名")])]),s._v(" "),e("li",[s._v("查该软件包会向系统里面写入哪些文件："),e("code",[s._v("执行 rpm -qpl rpm包名")])])]),s._v(" "),e("h4",{attrs:{id:"tar-gz-tgz、-bz2形式的二进制软件包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tar-gz-tgz、-bz2形式的二进制软件包"}},[s._v("#")]),s._v(" .tar.gz/.tgz、*.bz2形式的二进制软件包")]),s._v(" "),e("ul",[e("li",[s._v("安装："),e("code",[s._v("tar zxvf .tar.gz")]),s._v("或 "),e("code",[s._v("tar yxvf .bz2")])]),s._v(" "),e("li",[s._v("卸载：手动删除")])]),s._v(" "),e("h4",{attrs:{id:"src-rpm形式的源代码软件包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#src-rpm形式的源代码软件包"}},[s._v("#")]),s._v(" *.src.rpm形式的源代码软件包")]),s._v(" "),e("p",[s._v("安装：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("rpm -rebuild .src.rpm\ncd /usr/src/dist/RPMS\nrpm -ivh .rpm\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("卸载："),e("code",[s._v("rpm -e packgename")])]),s._v(" "),e("h4",{attrs:{id:"tar-gz-tgz、-bz2形式的源代码软件包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tar-gz-tgz、-bz2形式的源代码软件包"}},[s._v("#")]),s._v(" .tar.gz/.tgz、*.bz2形式的源代码软件包")]),s._v(" "),e("p",[s._v("安装："),e("code",[s._v("tar zxvf .tar.gz")]),s._v(" 或 "),e("code",[s._v("tar yxvf .bz2")]),s._v(" 先解压")]),s._v(" "),e("p",[s._v("然后进入解压后的目录：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("./configure 配置\n\nmake 编译\n\nmake install 安装\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("卸载："),e("code",[s._v("make uninstall")]),s._v(" 或 手动删除")]),s._v(" "),e("blockquote",[e("p",[s._v("小知识：一般来说著名的linux系统基本上分两大类：\n1.RedHat系列：Redhat、Centos、Fedora等\n2.Debian系列：Debian、Ubuntu等")])]),s._v(" "),e("ul",[e("li",[s._v("RedHat 系列\n常见的安装包格式 rpm包,安装rpm包的命令是“"),e("code",[s._v("rpm -参数")]),s._v("”\n包管理工具 "),e("code",[s._v("yum")])]),s._v(" "),e("li",[s._v("Debian系列\n常见的安装包格式 deb包,安装deb包的命令是“"),e("code",[s._v("dpkg -参数")]),s._v("”\n包管理工具 "),e("code",[s._v("apt-get")])])]),s._v(" "),e("h2",{attrs:{id:"常见的截屏方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见的截屏方式"}},[s._v("#")]),s._v(" 常见的截屏方式")]),s._v(" "),e("p",[s._v("捕获整个屏幕 ： "),e("code",[s._v("$ gnome-screenshot")]),s._v("\n捕获当前终端Terminal ： "),e("code",[s._v("$ gnome-screenshot -w")]),s._v("\n捕获自定义区域 ："),e("code",[s._v("$ gnome-screenshot -a")])]),s._v(" "),e("h2",{attrs:{id:"常见的命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见的命令"}},[s._v("#")]),s._v(" 常见的命令")]),s._v(" "),e("ul",[e("li",[s._v("pwd 命令\nPrint Working Directory 的缩写，判定当前目录在文件系统内的确切位置。")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("& pwd [参数]（可选）\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("cd 命令\n是 change directory 的缩写,切换当前目录至指定的目录。")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("& cd [目录名]\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("常用范例：")]),s._v(" "),e("p",[s._v("（1）从当前目录进入系统根目录")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cd /\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("（2）从当前目录进入父目录")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cd ..\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("（3）从当前目录进入当前用户主目录")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cd ~ =cd /root\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("（4）从当前目录进入上次所在目录")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cd -\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("ls 命令\n是 list 的缩写。ls 用来打印出当前目录的清单，可以查看文件权限(包括目录、文件夹、文件权限)查看目录信息等。")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("& ls [选项] [目录名]\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("常用参数：")]),s._v(" "),e("p",[s._v("-a：列出所有文件，包括以 . 开头的隐含文件\n-l：列出文件的权限、所有者、文件大小等信息\n-d：将目录象文件一样显示\n-h：列出文件大小\n-t：以文件修改时间排序")]),s._v(" "),e("p",[s._v("参数之间可以联合着使用")]),s._v(" "),e("p",[s._v("eg：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("& ls -al\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("在命令的后面你可以指定具体要列出的目录，例如：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("& ls -la /bin\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("这会列出在系统根目录下面的 bin 这个目录里的所有的东西。如果想查看命令详细的使用说明，可以加上 -–help 参数：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("& ls --help\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("现在，你已经学会了一个简单的 ls 命令去列出目录里的东西。")]),s._v(" "),e("h2",{attrs:{id:"常见的文件管理命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见的文件管理命令"}},[s._v("#")]),s._v(" 常见的文件管理命令")]),s._v(" "),e("ul",[e("li",[s._v("mkdir命令\n是 make directory 的缩写，用于创建一个新的目录。")])]),s._v(" "),e("p",[s._v("下面，我们可以在你当前所在的位置去创建一个新的目录，记得使用 pwd 命令确定一下你的位置：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("& mkdir shiyanlou\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("上面这行命令会在当前位置上去创建一个叫 shiyanlou 的目录。使用 ls 命令，可以查看一下当前目录里面的东西。")]),s._v(" "),e("ul",[e("li",[s._v("vi命令\n用于打开并编辑文件，如果文件不存在，则创建一个文件")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("& vi [文件名]\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("此时会弹出一个编辑框，按 i （insert）进入编辑模式，输入数据后，按 ESC 退出编辑模式，按Shift + ： 键后输入 wq ，再Enter保存即可。")]),s._v(" "),e("blockquote",[e("p",[s._v("小知识：\n:wq，保存文件并退出。\n:wq!，强制保存并退出。\n:q，直接退出不保存修改。\n/，可以进行搜索，在 / 后面加上要搜索的文字，然后回车。\nn，可以查找下一处。\nN，可以查找上一处。\nctrl+f，向后翻页。\nctrl+b，向前翻页。 详细的使用说明，可以查看 vi 命令的帮助，vi –-help 。")])]),s._v(" "),e("ul",[e("li",[s._v("cp 命令\n是 copy 的简写，用于复制目录或文件")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("& cp [选项] [选项]\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("比如你当前目录下面有一个 text.txt 文件，你想复制一份，复制以后的文件叫 hello.txt ，可以这样：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("& cp text.txt hello.txt\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("你想把 hello.txt 复制到某个目录的下面：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("& cp hello.txt /bin\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("这样会把 hello.txt 这个文件复制到 /bin 里面，注意，/bin 这个目录必须已经存在的。")]),s._v(" "),e("p",[s._v("复制目录，你需要添加一个 -R 的参数，它会递归的去复制目录以及目录里面的所有的东西。比如要把 shiyanlou 这个目录复制一份，复制以后的目录名是 shiyanlou1：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("& cp -R shiyanlou shiyanlou1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("mv命令\n是 move 的简写，用于移动/重命名目录或文件")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("& mv [参数] [参数]\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("mv 要移动的目录/文件 移动之后的目录/文件。")]),s._v(" "),e("p",[s._v("在这个后面先指一定想要移动的目录或者文件的位置，一个空格，后面再加上移动以后的目录和文件所在的位置。这里我们得先理解一下几个路径的意思：")]),s._v(" "),e("p",[e("code",[s._v("/")]),s._v(": 表示系统的根目录。")]),s._v(" "),e("p",[e("code",[s._v("~")]),s._v(": 表示当前所登录的用户的主目录。")]),s._v(" "),e("p",[e("code",[s._v(".")]),s._v(":一个点表示当前的目录。")]),s._v(" "),e("p",[e("code",[s._v("../")]),s._v(" :两个点加一个斜线，表示上一级目录。")]),s._v(" "),e("p",[e("code",[s._v("../../")]),s._v(":表示上两级目录。知道了这些，我们就可以去移动目录或文件了。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mv shiyanlou1 shiyanlou2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("上面这行命令的意思是，把当前目录里面的 shiyanlou1 这个目录重命名为 shiyanlou2。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mv shiyanlou2 /lib\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("这样会把 shiyanlou2 这个目录移动到 /lib 目录下面")]),s._v(" "),e("p",[e("code",[s._v("*")]),s._v("表示所有的文件或目录，比如你想把某个目录下面的所有的目录或文件移动到某个地方，可以这样：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("& mv /shiyanlou/* /usr\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("上面命令会把 /shiyanlou 里面的东西全部都移动到 /usr 这个目录里面。")]),s._v(" "),e("ul",[e("li",[s._v("rm 命令\n是 remove 的简写，用于删除目录或文件")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("& rm [目录名或文件名]\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("注意想要删除目录的时候，你需要添加两个参数："),e("code",[s._v("-r")]),s._v(" "),e("code",[s._v("-f")]),s._v("，可以将两个参数系在一起，如"),e("code",[s._v("-rf")]),s._v("。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("& rm -rf shiyanlou\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("这里 r 参数可以让 rm 命令递归删除目录及其内容，f 参数是 force ，表示强制删除。合起来这行命令的意思是，递归的强制删除 shiyanlou 这个目录，以及这个目录里面的所有的东西。")])])}),[],!1,null,null,null);a.default=r.exports}}]);