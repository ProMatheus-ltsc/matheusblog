(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1368:function(a,t,e){"use strict";e.r(t);var s=e(24),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"java开发环境配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java开发环境配置"}},[a._v("#")]),a._v(" Java开发环境配置")]),a._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#jdk的安装"}},[a._v("JDK的安装")])]),s("li",[s("a",{attrs:{href:"#为什么配置jdk"}},[a._v("为什么配置JDK")])]),s("li",[s("a",{attrs:{href:"#jdk安装流程"}},[a._v("JDK安装流程")])]),s("li",[s("a",{attrs:{href:"#测试是否配置成功"}},[a._v("测试是否配置成功")])]),s("li",[s("a",{attrs:{href:"#ide安装"}},[a._v("IDE安装")]),s("ul",[s("li",[s("a",{attrs:{href:"#安装"}},[a._v("安装")])]),s("li",[s("a",{attrs:{href:"#使用"}},[a._v("使用")])])])])])]),s("p"),a._v(" "),s("h2",{attrs:{id:"jdk的安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jdk的安装"}},[a._v("#")]),a._v(" JDK的安装")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://www.oracle.com/index.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("JDK官网"),s("OutboundLink")],1),a._v(" "),s("a",{attrs:{href:"http://doc.canglaoshi.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("文档服务器"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"为什么配置jdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么配置jdk"}},[a._v("#")]),a._v(" 为什么配置JDK")]),a._v(" "),s("p",[s("img",{attrs:{src:e(835),alt:"输入图片描述"}})]),a._v(" "),s("h2",{attrs:{id:"jdk安装流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jdk安装流程"}},[a._v("#")]),a._v(" JDK安装流程")]),a._v(" "),s("p",[s("strong",[a._v("JDK版本:1.8")]),a._v(" "),s("a",{attrs:{href:"https://www.yuque.com/docs/share/8fce8ee7-6884-4ceb-a3da-6a5fa8fa1602?#",target:"_blank",rel:"noopener noreferrer"}},[a._v("安装流程"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("JAVA_HOME   //系统变量\nC:\\Program Files\\Java\\jdk1.8.0_321   //系统变量对应的值")]),a._v(" "),s("p",[a._v("JRE_HOME  //系统变量\nC:\\Program Files\\Java\\jre1.8.0_321  //系统变量对应的值")]),a._v(" "),s("p",[a._v("Path不要去频繁更改,容易删掉一些重要的东西:")]),a._v(" "),s("p",[a._v("Path:\n%JAVA_HOME%\\bin (等于C:\\Program Files\\Java\\jdk1.8.0_251\\bin)\n%JRE_HOME%\\bin (等于C:\\Program Files\\Java\\jre1.8.0_321\\bin)")]),a._v(" "),s("p",[a._v("问题: 配置jdk为什么要多出 JAVA_HOME 和 JRE_HOME 这两个系统变量呢?")]),a._v(" "),s("p",[a._v("原因1: 因为系统变量里的   %JAVA_HOME% 就是调用 系统变量  JAVA_HOME对应的值,\n我们更换版本的时候,只要更换 JAVA_HOME 变量的执行,从而达到\n更换  %JAVA_HOME%\\bin 的目的,从而减少了Path的更改,\n降低了删除path里数据的风险;\n原因2: 后期java用到的工具(tomcat服务器软件) 需要用到 JAVA_HOME系统变量和JRE_HOME系统变量")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("cmd//直接在文件目录后输入cmd即可打开命令行\njavac XX.java //编译java文件\njava XX //运行.class文件,执行的命令是 java XX，而不是 java XX.java。\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("h2",{attrs:{id:"测试是否配置成功"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试是否配置成功"}},[a._v("#")]),a._v(" 测试是否配置成功")]),a._v(" "),s("p",[a._v("win+r---\x3e管理员cmd---\x3ejava -version")]),a._v(" "),s("h2",{attrs:{id:"ide安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ide安装"}},[a._v("#")]),a._v(" IDE安装")]),a._v(" "),s("h3",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),s("p",[a._v("解压我们下载好的eclipse-jee-2018-12-R-win32-x86_64.zip,解压的文件夹剪切到D盘根目录,把带图标的eclipse.exe发送桌面快捷方式.\n设置工作空间(工作空间:放java项目的目录)\n(勾选是为了把这个目录设置为默认放java项目的目录)")]),a._v(" "),s("p",[s("img",{attrs:{src:e(836),alt:"输入图片描述"}})]),a._v(" "),s("h3",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[a._v("#")]),a._v(" 使用")]),a._v(" "),s("h4",{attrs:{id:"切换项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#切换项目"}},[a._v("#")]),a._v(" 切换项目")]),a._v(" "),s("p",[a._v("file--\x3eswitch worksapce--\x3e填写目录(这个目录就是工作空间,就是存Java项目的地方).")]),a._v(" "),s("h4",{attrs:{id:"创建java项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建java项目"}},[a._v("#")]),a._v(" 创建Java项目")]),a._v(" "),s("p",[a._v("File--\x3enew--\x3eproject...")]),a._v(" "),s("p",[a._v("--\x3ejava project --\x3enext")]),a._v(" "),s("p",[a._v("--\x3eproject name(项目名): JavaBasic (基础)")]),a._v(" "),s("p",[a._v("--\x3e选择: use default JRE(Java运行环境),如果不是jdk1.8xx就需要("),s("em",[s("strong",[a._v("配置")])]),a._v(" java运行环境")]),a._v(" "),s("p",[a._v("--\x3e"),s("strong",[s("em",[a._v("configure")])]),a._v(" JREs("),s("em",[s("strong",[a._v("配置")])]),a._v(" java运行环境)")]),a._v(" "),s("p",[a._v("--\x3e选择jre1.8xxx")]),a._v(" "),s("p",[a._v("--\x3eEdit... (编辑)")]),a._v(" "),s("p",[a._v('--\x3e把JRE home和 JRE name里的"jre"改成 "jdk" 即可(jre更少功能,tomcat用jre)')]),a._v(" "),s("p",[s("img",{attrs:{src:e(837),alt:"输入图片描述"}})]),a._v(" "),s("p",[a._v("--\x3eFinish(完成)")]),a._v(" "),s("p",[a._v("--\x3eapply and close(应用并关闭)")]),a._v(" "),s("h4",{attrs:{id:"全局改jre为jdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局改jre为jdk"}},[a._v("#")]),a._v(" 全局改jre为jdk")]),a._v(" "),s("p",[a._v("windows--\x3epreferences(偏爱)\n设置编译版本(1.8,java1.8版本)")]),a._v(" "),s("p",[s("img",{attrs:{src:e(838),alt:"输入图片描述"}})]),a._v(" "),s("p",[a._v("设置java运行环境(JRE)为jdk1.8")]),a._v(" "),s("p",[s("img",{attrs:{src:e(839),alt:"输入图片描述"}})]),a._v(" "),s("h4",{attrs:{id:"创建包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建包"}},[a._v("#")]),a._v(" 创建包")]),a._v(" "),s("p",[a._v("(src(放源码地方) --\x3e右键--\x3enew--\x3epackage--\x3e填写包(包名全小写,并符合 域名反写.功能的格式 如:com.baidu.search)--\x3efinish(完成)")]),a._v(" "),s("p",[a._v("src--\x3e右键--\x3e属性(ProPerties)--\x3eLocation--\x3e点击弹窗--\x3e目录地址")]),a._v(" "),s("h4",{attrs:{id:"创建类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建类"}},[a._v("#")]),a._v(" 创建类")]),a._v(" "),s("p",[a._v("包--\x3e右键--\x3enew--\x3eclass(类)--\x3e填写类名(每个组成类名的单词首字母都大写) --\x3efinish(完成)")]),a._v(" "),s("h4",{attrs:{id:"eclipse视图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#eclipse视图"}},[a._v("#")]),a._v(" eclipse视图")]),a._v(" "),s("p",[s("img",{attrs:{src:e(840),alt:"输入图片描述"}})]),a._v(" "),s("p",[a._v("project explorer( 项目视图:看项目结构的地方)和package explorer(包视图:也是看项目结构的地方);\nconsole(控制台视图: 看代码运行结果)")]),a._v(" "),s("h4",{attrs:{id:"运行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[a._v("#")]),a._v(" 运行")]),a._v(" "),s("p",[a._v("每一次敲完代码一定要保存: ctrl+s\nRun Demo 就是去运行Demo01.java\n( 代码--\x3e空白处右键--\x3erun as (通过什么运行) --\x3e java application(java工具) --\x3e得到结果)")]),a._v(" "),s("p",[a._v("Terminate :终端 (就是控制台)\n终端是红的表示程序在运行\n终端是灰色的表示程序已经结束")]),a._v(" "),s("h4",{attrs:{id:"快捷键"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快捷键"}},[a._v("#")]),a._v(" 快捷键")]),a._v(" "),s("p",[a._v("alt+/ : 代码提示\nctrl+a: 全选\nctrl+i: 调整代码格式\nctrl+s:保存")]),a._v(" "),s("h4",{attrs:{id:"debug"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#debug"}},[a._v("#")]),a._v(" debug")]),a._v(" "),s("p",[a._v("可以让代码逐行执行,查看代码执行的过程,调试程序中出现的bug\n"),s("strong",[a._v("使用方式")]),a._v(":\n在行号的右边,鼠标左键单击,添加断点(每个方法的第一行,哪里有bug添加到哪里)\n右键,选择Debug执行程序\n程序就会停留在添加的第一个断点处\n"),s("strong",[a._v("执行程序")]),a._v(":\nf8:逐行执行程序\nf7:进入到方法中\n"),s("strong",[a._v("shift+f8")]),a._v(":跳出方法\nf9:跳到下一个断点,如果没有下一个断点,那么就结束程序\n"),s("strong",[a._v("ctrl+f2")]),a._v(":退出debug模式,停止程序\nConsole:切换到控制台")]),a._v(" "),s("p",[s("strong",[a._v("1.")]),a._v(" 在有效代码行，点击行号右边的空白区域，设置断点，程序执行到断点将停止，我们可以手动来运行程序")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://pic2.zhimg.com/80/v2-223b522b7d3d6a9967fbac482b8648d1_1440w.jpg",alt:"img"}})]),a._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[a._v("点击Debug运行模式")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://pic2.zhimg.com/80/v2-1720d61dcc65ac7c774cc25eeea7643d_1440w.jpg",alt:"img"}})]),a._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[a._v("程序停止在断点上不再执行，而IDEA最下方打开了Debug调试窗口")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://pic3.zhimg.com/80/v2-f042df36b2b26a66ef3813efc60e1c3a_1440w.jpg",alt:"img"}})]),a._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[a._v("Debug调试窗口介绍")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://pic4.zhimg.com/80/v2-68bd43055132522facf9ae0af25dad37_1440w.jpg",alt:"img"}})]),a._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[a._v("快捷键F8，代码向下执行一行,第九行执行完毕，执行到第10行（第10行还未执行）")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://pic1.zhimg.com/80/v2-c909e2753fc6ac0daa96c89659d4b134_1440w.jpg",alt:"img"}})]),a._v(" "),s("ol",{attrs:{start:"6"}},[s("li",[a._v("切换到控制台面板，控制台显示 请录入一个字符串： 并且等待键盘录入")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://pic4.zhimg.com/80/v2-5ca6b934fdd526ecc4c853af04fa7807_1440w.jpg",alt:"img"}})]),a._v(" "),s("ol",{attrs:{start:"7"}},[s("li",[a._v("快捷键F8，程序继续向后执行，执行键盘录入操作，在控制台录入数据 ababcea")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://pic1.zhimg.com/80/v2-13aa4dd10ab4c7424ae899b2e0b5d1c4_1440w.jpg",alt:"img"}})]),a._v(" "),s("p",[a._v("调试界面效果：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://pic2.zhimg.com/80/v2-f2b700d3234ecba7d1f782199e54f975_1440w.jpg",alt:"img"}})]),a._v(" "),s("ol",{attrs:{start:"8"}},[s("li",[a._v("此时到达findChar方法，快捷键F7，进入方法findChar")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://pic4.zhimg.com/80/v2-24fcdebc14196d3f8e654c0c62c87fe7_1440w.jpg",alt:"img"}})]),a._v(" "),s("ol",{attrs:{start:"9"}},[s("li",[a._v("快捷键F8 接续执行，创建了"),s("strong",[a._v("map")]),a._v("对象，变量区域显示")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://pic3.zhimg.com/80/v2-f0df5d3fc662c0725bf82ce4321dc822_1440w.png",alt:"img"}})]),a._v(" "),s("ol",{attrs:{start:"10"}},[s("li",[a._v("快捷键"),s("strong",[a._v("F8")]),a._v(" 接续执行，进入到循环中，循环变量i为 0,"),s("strong",[a._v("F8")]),a._v("再继续执行，就获取到变量c赋值为字符‘a’ 字节值97")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://pic4.zhimg.com/80/v2-d9cc51f5d373e2ec057581574b3ecf4b_1440w.jpg",alt:"img"}})]),a._v(" "),s("ol",{attrs:{start:"11"}},[s("li",[a._v("快捷键F8 接续执行，进入到判断语句中，因为该字符 不在Map集合键集中，再按F8执行，进入该判断中")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://pic3.zhimg.com/80/v2-5efd5d86d2a032740b603d9032080afe_1440w.jpg",alt:"img"}})]),a._v(" "),s("ol",{attrs:{start:"12"}},[s("li",[a._v("快捷键F8 接续执行，循环结束，进入下次循环，此时"),s("strong",[a._v("map")]),a._v("中已经添加一对儿元素")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://pic2.zhimg.com/80/v2-f857e84fb22c8b53c455dae2e42f172d_1440w.jpg",alt:"img"}})]),a._v(" "),s("ol",{attrs:{start:"13"}},[s("li",[a._v("快捷键F8 接续执行，进入下次循环，再继续上面的操作，我们就可以看到代码每次是如何执行的了")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://pic3.zhimg.com/80/v2-25fca25864a0b281f63c356b01b6a386_1440w.jpg",alt:"img"}})]),a._v(" "),s("ol",{attrs:{start:"14"}},[s("li",[a._v("如果不想继续debug,那么可以使用快捷键F9,程序正常执行到结束，程序结果在控制台显示")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://pic4.zhimg.com/80/v2-c16825936ab5fe96231c6bdd6077abfb_1440w.jpg",alt:"img"}})]),a._v(" "),s("h4",{attrs:{id:"字体大小"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字体大小"}},[a._v("#")]),a._v(" 字体大小")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://jingyan.baidu.com/article/f96699bb9442f3894e3c1b15.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("字体大小"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("windows--\x3epreferences(偏爱)--\x3eGeneral(常规)--\x3eappearance(样式)--\x3eColor and fonts(颜色和字体)--\x3eBasic(基础)--\x3eText Font(文本字体)--\x3eEdit(编辑)--\x3e大小改成14左右 --\x3e确定--\x3eapply and close(应用并关闭)")])])}),[],!1,null,null,null);t.default=r.exports},835:function(a,t,e){a.exports=e.p+"assets/img/1.1.2b20c26c.png"},836:function(a,t,e){a.exports=e.p+"assets/img/1.2.3890b209.png"},837:function(a,t,e){a.exports=e.p+"assets/img/1.3.df09c753.png"},838:function(a,t,e){a.exports=e.p+"assets/img/1.4.fe52f3f8.png"},839:function(a,t,e){a.exports=e.p+"assets/img/1.5.11608598.png"},840:function(a,t,e){a.exports=e.p+"assets/img/1.6.e03451bf.png"}}]);