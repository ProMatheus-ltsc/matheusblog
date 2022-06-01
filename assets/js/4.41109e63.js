(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1350:function(t,e,s){"use strict";s.r(e);var a=s(24),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git安装"}},[t._v("#")]),t._v(" Git安装")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#安装git"}},[t._v("安装Git")]),a("ul",[a("li",[a("a",{attrs:{href:"#centos中安装git"}},[t._v("Centos中安装Git")])])])]),a("li",[a("a",{attrs:{href:"#git的初始化"}},[t._v("git的初始化")]),a("ul",[a("li",[a("a",{attrs:{href:"#git配置"}},[t._v("git配置")])]),a("li",[a("a",{attrs:{href:"#获得一个git仓库"}},[t._v("获得一个Git仓库")])])])]),a("li",[a("a",{attrs:{href:"#在intellij-idea中配置git"}},[t._v("在IntelliJ IDEA中配置Git")])]),a("li",[a("a",{attrs:{href:"#在intellij-idea中利用git拉取项目"}},[t._v("在IntelliJ IDEA中利用Git拉取项目")])]),a("li",[a("a",{attrs:{href:"#在intellij-idea中使用git推送项目"}},[t._v("在IntelliJ IDEA中使用Git推送项目")]),a("ul",[a("li",[a("a",{attrs:{href:"#去gitee网站注册用户"}},[t._v("去gitee网站注册用户")])]),a("li",[a("a",{attrs:{href:"#_1-创建仓库"}},[t._v("1 创建仓库")])]),a("li",[a("a",{attrs:{href:"#_2-在idea中将项目导入版本控制"}},[t._v("2 在IDEA中将项目导入版本控制")])]),a("li",[a("a",{attrs:{href:"#_3-push失败的解决办法"}},[t._v("3 push失败的解决办法")])])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"安装git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装git"}},[t._v("#")]),t._v(" 安装Git")]),t._v(" "),a("p",[t._v("打开终端使用"),a("code",[t._v("git version")]),t._v("命令查看版本.\n如遇网络问题无法下载可以访问"),a("a",{attrs:{href:"https://mirrors.huaweicloud.com/home",target:"_blank",rel:"noopener noreferrer"}},[t._v("华为镜像站"),a("OutboundLink")],1),t._v("下载")]),t._v(" "),a("ul",[a("li",[t._v("Git 2.33.0.2 Windows "),a("a",{attrs:{href:"https://npm.taobao.org/mirrors/git-for-windows/v2.33.0.windows.2/Git-2.33.0.2-64-bit.exe",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网下载"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://repo.huaweicloud.com/git-for-windows/v2.33.0.windows.2/Git-2.33.0.2-64-bit.exe",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网下载"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Git for macOS 2.33.0 "),a("a",{attrs:{href:"https://repo.huaweicloud.com/git-for-macos/git-2.33.0-intel-universal-mavericks.dmg",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网下载"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("TortoiseGit 2.12.0.0 "),a("a",{attrs:{href:"https://repo.huaweicloud.com/tortoisegit/2.12.0.0/TortoiseGit-2.12.0.0-64bit.msi",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网下载"),a("OutboundLink")],1),t._v(" 中文语言包："),a("a",{attrs:{href:"https://repo.huaweicloud.com/tortoisegit/2.12.0.0/TortoiseGit-LanguagePack-2.12.0.0-64bit-zh_CN.msi",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网下载"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"centos中安装git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos中安装git"}},[t._v("#")]),t._v(" Centos中安装Git")]),t._v(" "),a("p",[t._v("一、安装git")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("yum install git\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("1、查看yum源仓库Git信息")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("yum info git\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("2、安装依赖库")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("yum install curl-devel expat-devel gettext-devel openssl-devel zlib-devel \nyum install gcc-c++ perl-ExtUtils-MakeMaker\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("3、如果原有的git版本过低，移除默认安装的旧版git")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git --version\nyum remove git ## 移除原来的版本\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("4、下载安装")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cd /usr/src\nwget https://www.kernel.org/pub/software/scm/git/git-2.18.0.tar.gz\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("5、解压文件")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("tar xf git-2.18.0.tar.gz\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("6、配置编译安装")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[root@wugenqiang ~]# cd /usr/src\n[root@wugenqiang src]# ls\ndebug  git-2.18.0  kernels\n[root@wugenqiang src]# cd git-2.18.0/\n[root@wugenqiang git-2.18.0]# \n[root@wugenqiang git-2.18.0]# make configure\n[root@wugenqiang git-2.18.0]# ./configure --prefix=/usr/git ##配置目录\n[root@wugenqiang git-2.18.0]# make profix=/usr/git\n[root@wugenqiang git-2.18.0]# make install\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("7、加入环境变量")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('echo "export PATH=$PATH:/usr/git/bin" >> /etc/profile\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("8、刷新环境变量")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("source /etc/profile\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("9、检查版本")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git --version\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:s(651),alt:"image-20220531183004087"}})]),t._v(" "),a("p",[t._v("当出现以上图片样式就说明安装成功！")]),t._v(" "),a("h2",{attrs:{id:"git的初始化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git的初始化"}},[t._v("#")]),t._v(" git的初始化")]),t._v(" "),a("h3",{attrs:{id:"git配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git配置"}},[t._v("#")]),t._v(" git配置")]),t._v(" "),a("p",[t._v("使用Git的第一件事就是设置你的名字和"),a("code",[t._v("email")]),t._v(",这些就是你在提交"),a("code",[t._v("commit")]),t._v("时的签名，每次提交记录里都会包含这些信息。使用"),a("code",[t._v("git config")]),t._v("命令进行配置：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('$ git config --global user.name "Scott Chacon"\n$ git config --global user.email "schacon@gmail.com"\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("执行了上面的命令后,会在家目录("),a("code",[t._v("/home/shiyanlou")]),t._v(")下建立一个叫"),a("code",[t._v(".gitconfig")]),t._v(" 的文件（该文件为隐藏文件，需要使用"),a("code",[t._v("ls -al")]),t._v("查看到）. 内容一般像下面这样，可以使用vim或cat查看文件内容:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ cat ~/.gitconfig\n[user]\n        email = schacon@gmail.com\n        name = Scott Chacon\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("上面的配置文件就是Git全局配置的文件，一般配置方法是"),a("code",[t._v("git config --global <配置名称> <配置的值>")]),t._v("。")]),t._v(" "),a("p",[t._v("如果你想使项目里的某个值与前面的全局设置有区别(例如把私人邮箱地址改为工作邮箱)，你可以在项目中使用"),a("code",[t._v("git config")]),t._v("命令不带"),a("code",[t._v("--global")]),t._v("选项来设置. 这会在你当前的项目目录下创建 "),a("code",[t._v(".git/config")]),t._v("，从而使用针对当前项目的配置。")]),t._v(" "),a("h3",{attrs:{id:"获得一个git仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获得一个git仓库"}},[t._v("#")]),t._v(" 获得一个Git仓库")]),t._v(" "),a("p",[t._v("既然我们现在把一切都设置好了，那么我们需要一个Git仓库。有两种方法可以得到它：一种是从已有的Git仓库中"),a("code",[t._v("clone")]),t._v("(克隆，复制)；还有一种是新建一个仓库，把未进行版本控制的文件进行版本控制。")]),t._v(" "),a("h4",{attrs:{id:"初始化一个仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化一个仓库"}},[t._v("#")]),t._v(" 初始化一个仓库")]),t._v(" "),a("p",[t._v("可以对一个已存在的文件夹用下面的命令让它置于Git的版本控制管理之下。")]),t._v(" "),a("p",[t._v("创建代码目录"),a("code",[t._v("project")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ cd /home/shiyanlou/\n$ mkdir project\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("进入到代码目录，创建并初始化Git仓库：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ cd project\n$ git init\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("Git会输出:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Initialized empty Git repository in /home/shiyanlou/project/.git/\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("通过"),a("code",[t._v("ls -la")]),t._v("命令会发现"),a("code",[t._v("project")]),t._v("目录下会有一个名叫"),a("code",[t._v(".git")]),t._v(" 的目录被创建，这意味着一个仓库被初始化了。可以进入到"),a("code",[t._v(".git")]),t._v("目录查看下有哪些内容。")]),t._v(" "),a("h2",{attrs:{id:"在intellij-idea中配置git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在intellij-idea中配置git"}},[t._v("#")]),t._v(" 在IntelliJ IDEA中配置Git")]),t._v(" "),a("p",[t._v("菜单栏顺序选择: File->Settings,在弹出框中选择下图中的Git")]),t._v(" "),a("p",[a("img",{attrs:{src:s(652),alt:"image-20220531183015163"}})]),t._v(" "),a("p",[t._v("然后点击右侧上方输入框 Path to Git executable:中右面的浏览图标(小文件夹)，并定位git的可执行程序(git.exe文件在git安装目录下的cmd文件夹中)。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(653),alt:"image-20220531183031072"}})]),t._v(" "),a("p",[t._v("点击Test按钮。如果点击后可以显示出版本号，说明配置成功，此时点击窗口下侧的OK按钮即可。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(654),alt:"image-20220531183037646"}})]),t._v(" "),a("h2",{attrs:{id:"在intellij-idea中利用git拉取项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在intellij-idea中利用git拉取项目"}},[t._v("#")]),t._v(" 在IntelliJ IDEA中利用Git拉取项目")]),t._v(" "),a("p",[a("strong",[t._v("1 访问gitee或github，找到项目对应的仓库，并复制仓库地址。")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(655),alt:"image-20220531183043888"}})]),t._v(" "),a("p",[a("strong",[t._v("2 打开IDEA，依次选择菜单:File->New->Project from Version Control")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(656),alt:"image-20220531183051597"}})]),t._v(" "),a("p",[a("strong",[t._v("3 在弹出框中输入仓库路径(从第一步中gitee或github复制的路径)并点击Clone")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(657),alt:"image-20220531183058022"}})]),t._v(" "),a("p",[a("strong",[t._v("4 在弹出框中输入gitee或github的账号和密码并点击Log in")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(658),alt:"image-20220531183106516"}})]),t._v(" "),a("p",[a("strong",[t._v("等待下载完毕即可")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(659),alt:"image-20220531183113459"}})]),t._v(" "),a("h2",{attrs:{id:"在intellij-idea中使用git推送项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在intellij-idea中使用git推送项目"}},[t._v("#")]),t._v(" 在IntelliJ IDEA中使用Git推送项目")]),t._v(" "),a("h3",{attrs:{id:"去gitee网站注册用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#去gitee网站注册用户"}},[t._v("#")]),t._v(" 去gitee网站注册用户")]),t._v(" "),a("p",[t._v("gitee网站地址:https://gitee.com/")]),t._v(" "),a("p",[t._v("github网站地址:https://github.com/")]),t._v(" "),a("h3",{attrs:{id:"_1-创建仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建仓库"}},[t._v("#")]),t._v(" 1 创建仓库")]),t._v(" "),a("p",[t._v("以下以gitee为例进行介绍，github操作雷同。")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("创建仓库")]),t._v(" "),a("p",[t._v('点击页面右上方的"+"并选择"创建仓库"')]),t._v(" "),a("p",[a("img",{attrs:{src:s(660),alt:"image-20220531183120475"}})])]),t._v(" "),a("li",[a("p",[t._v("设置仓库相关信息")]),t._v(" "),a("p",[t._v("首先输入仓库名，通常可以和IDEA中项目名相同。是否开源则可结合需求选择，这里选择的私有(该项目仅自己可见)")]),t._v(" "),a("p",[a("img",{attrs:{src:s(661),alt:"image-20220531183126265"}})]),t._v(" "),a("p",[t._v('然后点击下方的"创建"按钮.')]),t._v(" "),a("p",[a("img",{attrs:{src:s(662),alt:"image-20220531183133672"}})]),t._v(" "),a("p",[t._v("此时gitee上完成了仓库的创建工作。")])]),t._v(" "),a("li",[a("p",[t._v("复制当前仓库路径，这个路径需要在后面IDEA上传项目时使用.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(663),alt:"image-20220531183140255"}})])])]),t._v(" "),a("h3",{attrs:{id:"_2-在idea中将项目导入版本控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-在idea中将项目导入版本控制"}},[t._v("#")]),t._v(" 2 在IDEA中将项目导入版本控制")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("在IDEA菜单栏顺序选择:VCS->Import into Version Controlp->Create Git Repository")]),t._v(" "),a("p",[t._v("目的是先在本地创建一个git仓库")]),t._v(" "),a("p",[a("img",{attrs:{src:s(664),alt:"image-20220531183147651"}})]),t._v(" "),a("p",[t._v('弹出框中字节点击"OK"按钮即可')]),t._v(" "),a("p",[a("img",{attrs:{src:s(665),alt:"image-20220531183154983"}})])]),t._v(" "),a("li",[a("p",[t._v("鼠标右键项目名，在弹出的菜单栏中顺序选择:Git->Add")]),t._v(" "),a("p",[t._v("目的是将当前项目中本地仓库没有的内容添加到本地仓库中（实际上并没有真是添加，只有在下一步操作中才会真实添加，但是所有仓库中没有的文件都需要先add后才可以通过下面的步骤添加到仓库!）")]),t._v(" "),a("p",[a("img",{attrs:{src:s(666),alt:"image-20220531183201163"}})])]),t._v(" "),a("li",[a("p",[t._v("提交更改")]),t._v(" "),a("p",[t._v("鼠标右键当前项目名，在弹出的菜单栏中顺序选择:Git->Commit Diectory")]),t._v(" "),a("p",[a("img",{attrs:{src:s(667),alt:"image-20220531183207636"}})]),t._v(" "),a("p",[t._v("之后输入本次提交的备注，例如:第一次提交(注:这里必须输入内容，否则无法提交)。然后点击Commit按钮进行本地提交。")]),t._v(" "),a("p",[t._v("目的:提交的目的是将当前项目保存到本地仓库中")]),t._v(" "),a("p",[a("img",{attrs:{src:s(668),alt:"image-20220531183213873"}})]),t._v(" "),a("p",[t._v("之后，点击IDEA左侧边条的1:Project回到项目结构视图")]),t._v(" "),a("p",[a("img",{attrs:{src:s(669),alt:"image-20220531183224191"}})]),t._v(" "),a("p",[t._v("鼠标右键项目名，在弹出的菜单栏中顺序选择:Git->Repository->Push")]),t._v(" "),a("p",[t._v("目的就是将本地仓库保存的内容同步到服务器(上传到服务器，并使服务器中的仓库与本地仓库内容保持一致)。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(670),alt:"image-20220531183231958"}})]),t._v(" "),a("p",[t._v("第一次操作时需要配置服务器仓库地址，点击弹出框中的Define remote")]),t._v(" "),a("p",[a("img",{attrs:{src:s(671),alt:"image-20220531183239383"}})]),t._v(" "),a("p",[t._v("在弹出框中的URL输入框中添加gitee上创建的仓库路径(第一大步最后一小步中在页面上复制的仓库路径)，并点击OK按钮")]),t._v(" "),a("p",[a("img",{attrs:{src:s(672),alt:"image-20220531183244943"}})]),t._v(" "),a("p",[t._v("之后IDEA会自动检查链接，没有问题则点击下方的Push按钮")]),t._v(" "),a("p",[a("img",{attrs:{src:s(673),alt:"image-20220531183251018"}})]),t._v(" "),a("p",[t._v("第一次提交时要求输入gitee上的账号和密码，输入后可选中Remember记住密码，后续就不需要输入了。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(674),alt:"image-20220531183257437"}})]),t._v(" "),a("p",[t._v("此时完成提交，右下方会提示。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(675),alt:"image-20220531183303147"}})])])]),t._v(" "),a("h4",{attrs:{id:"提交改动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提交改动"}},[t._v("#")]),t._v(" 提交改动")]),t._v(" "),a("p",[t._v("使用快捷键"),a("strong",[t._v("CTRL+K")]),t._v(",就会弹出提交的界面，点击Commit and Push即可")]),t._v(" "),a("p",[a("img",{attrs:{src:s(676),alt:"image-20220531183309043"}})]),t._v(" "),a("h4",{attrs:{id:"更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新"}},[t._v("#")]),t._v(" 更新")]),t._v(" "),a("p",[t._v("点击快捷键"),a("strong",[t._v("Ctrl+T")]),t._v("，就会弹出更新的界面，点击OK即可")]),t._v(" "),a("p",[a("img",{attrs:{src:s(677),alt:"image-20220531183315897"}})]),t._v(" "),a("h3",{attrs:{id:"_3-push失败的解决办法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-push失败的解决办法"}},[t._v("#")]),t._v(" 3 push失败的解决办法")]),t._v(" "),a("p",[t._v("上面最后一步若提交失败，会在右下侧提示。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(678),alt:"image-20220531183321172"}})]),t._v(" "),a("p",[t._v("此时点击IDEA下测控制台选项打开控制台视图:")]),t._v(" "),a("p",[a("img",{attrs:{src:s(679),alt:"image-20220531183327830"}})]),t._v(" "),a("p",[t._v("在控制台中依次执行下面三个命令:")]),t._v(" "),a("div",{staticClass:"language-none line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git pull\ngit pull origin master\ngit pull origin master --allow-unrelated-histories\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("如图:")]),t._v(" "),a("p",[a("img",{attrs:{src:s(680),alt:"image-20220531183333888"}})]),t._v(" "),a("p",[a("img",{attrs:{src:s(681),alt:"image-20220531183342536"}})]),t._v(" "),a("p",[a("img",{attrs:{src:s(682),alt:"image-20220531183349338"}})]),t._v(" "),a("p",[t._v("之后再尝试push。")])])}),[],!1,null,null,null);e.default=i.exports},651:function(t,e,s){t.exports=s.p+"assets/img/image-20220531183004087.f277b5e7.png"},652:function(t,e,s){t.exports=s.p+"assets/img/image-20220531183015163.dbf7ef57.png"},653:function(t,e,s){t.exports=s.p+"assets/img/image-20220531183031072.0558a558.png"},654:function(t,e,s){t.exports=s.p+"assets/img/image-20220531183037646.231e62e2.png"},655:function(t,e,s){t.exports=s.p+"assets/img/image-20220531183043888.d9672cc0.png"},656:function(t,e,s){t.exports=s.p+"assets/img/image-20220531183051597.9f623f09.png"},657:function(t,e,s){t.exports=s.p+"assets/img/image-20220531183058022.4fd8c884.png"},658:function(t,e,s){t.exports=s.p+"assets/img/image-20220531183106516.5c3f8e8d.png"},659:function(t,e,s){t.exports=s.p+"assets/img/image-20220531183113459.f84c6e73.png"},660:function(t,e,s){t.exports=s.p+"assets/img/image-20220531183120475.b606c766.png"},661:function(t,e,s){t.exports=s.p+"assets/img/image-20220531183126265.528ff5c0.png"},662:function(t,e,s){t.exports=s.p+"assets/img/image-20220531183133672.809b2746.png"},663:function(t,e,s){t.exports=s.p+"assets/img/image-20220531183140255.792f088f.png"},664:function(t,e,s){t.exports=s.p+"assets/img/image-20220531183147651.4b88a529.png"},665:function(t,e,s){t.exports=s.p+"assets/img/image-20220531183154983.9d5ac86f.png"},666:function(t,e,s){t.exports=s.p+"assets/img/image-20220531183201163.fa6d6802.png"},667:function(t,e,s){t.exports=s.p+"assets/img/image-20220531183207636.45169bc8.png"},668:function(t,e,s){t.exports=s.p+"assets/img/image-20220531183213873.e64be661.png"},669:function(t,e,s){t.exports=s.p+"assets/img/image-20220531183224191.97f3a8fe.png"},670:function(t,e,s){t.exports=s.p+"assets/img/image-20220531183231958.6db27412.png"},671:function(t,e,s){t.exports=s.p+"assets/img/image-20220531183239383.2fe2de12.png"},672:function(t,e,s){t.exports=s.p+"assets/img/image-20220531183244943.19d9fecc.png"},673:function(t,e,s){t.exports=s.p+"assets/img/image-20220531183251018.04437df3.png"},674:function(t,e,s){t.exports=s.p+"assets/img/image-20220531183257437.83d69400.png"},675:function(t,e,s){t.exports=s.p+"assets/img/image-20220531183303147.51c88b87.png"},676:function(t,e,s){t.exports=s.p+"assets/img/image-20220531183309043.f351859c.png"},677:function(t,e,s){t.exports=s.p+"assets/img/image-20220531183315897.1a47891c.png"},678:function(t,e,s){t.exports=s.p+"assets/img/image-20220531183321172.9d76d0bc.png"},679:function(t,e,s){t.exports=s.p+"assets/img/image-20220531183327830.b9c01517.png"},680:function(t,e,s){t.exports=s.p+"assets/img/image-20220531183333888.10c82736.png"},681:function(t,e,s){t.exports=s.p+"assets/img/image-20220531183342536.793a7374.png"},682:function(t,e,s){t.exports=s.p+"assets/img/image-20220531183349338.0540bda5.png"}}]);