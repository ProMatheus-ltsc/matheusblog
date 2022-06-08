(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{1570:function(t,s,a){"use strict";a.r(s);var r=a(65),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vscode使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vscode使用"}},[t._v("#")]),t._v(" VScode使用")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#启动vs-code"}},[t._v("启动VS code")])]),a("li",[a("a",{attrs:{href:"#安装插件"}},[t._v("安装插件")])]),a("li",[a("a",{attrs:{href:"#复制粘贴问题"}},[t._v("复制粘贴问题")])]),a("li",[a("a",{attrs:{href:"#文件上传与下载"}},[t._v("文件上传与下载")])]),a("li",[a("a",{attrs:{href:"#快捷键"}},[t._v("快捷键")])]),a("li",[a("a",{attrs:{href:"#vs2010常用调试技术"}},[t._v("VS2010常用调试技术")]),a("ul",[a("li",[a("a",{attrs:{href:"#断点"}},[t._v("断点")])]),a("li",[a("a",{attrs:{href:"#单步和监控"}},[t._v("单步和监控")])]),a("li",[a("a",{attrs:{href:"#调用堆栈"}},[t._v("调用堆栈")])])])])])]),a("p"),t._v(" "),a("h1",{attrs:{id:"_1、vs-code使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、vs-code使用"}},[t._v("#")]),t._v(" 1、VS Code使用")]),t._v(" "),a("h2",{attrs:{id:"启动vs-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动vs-code"}},[t._v("#")]),t._v(" 启动VS code")]),t._v(" "),a("p",[t._v("启动 VS Code 环境之后，你可以看到它的默认界面，大致分为 3 部分：")]),t._v(" "),a("p",[t._v("代码文件浏览区：左边的区域将用于组织项目的文件结构，你可以在此区域创建各种类型的代码文件和文件夹。\n代码文件编辑区：当你双击打开相应的代码文件之后，将会呈现在编辑区域。你可以在此区域编辑代码，编辑后的代码会实时保存。\nLinux 终端：因为 VS Code 本身是运行在 Linux 容器环境中，所以下方的区域是一个 Linux 终端。你可以通过终端运行命令，执行编译、运行代码等操作。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://dn-simplecloud.shiyanlou.com/courses/uid1486098-20210819-1629359641073",alt:"图片描述"}})]),t._v(" "),a("p",[t._v("菜单由顶栏固定显示的形式改为了点击按钮显示。点击左上角三条横线的图标可以显示完整的菜单栏。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://dn-simplecloud.shiyanlou.com/courses/uid1486098-20210819-1629359681280",alt:"图片描述"}})]),t._v(" "),a("p",[t._v("如果你发现界面没有菜单按钮，可能是因为被意外隐藏了，此时可以在侧边工具栏点击右键，选择显示菜单，就可以正确显示菜单按钮。如果出现其他图标按钮消失的情况，处理方式也类似。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://dn-simplecloud.shiyanlou.com/courses/uid1486098-20210819-1629359699934",alt:"图片描述"}})]),t._v(" "),a("p",[t._v("环境下方默认显示 Linux 终端，如果你的环境没有显示，可以点击菜单按钮，选择终端，新终端打开。或者按下键盘快捷键 ctrl + shift + ` （数字键 1 左侧的按键）也可以直接打开。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://dn-simplecloud.shiyanlou.com/courses/uid1486098-20210819-1629359712359",alt:"图片描述"}})]),t._v(" "),a("h2",{attrs:{id:"安装插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装插件"}},[t._v("#")]),t._v(" 安装插件")]),t._v(" "),a("p",[t._v("如果要安装你自己需要的插件，可以在搜索栏中输入名称或者 ID 搜索对应的插件，然后点击插件搜索里的安装或者详细信息的在 Remote 上安装按钮即可。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://dn-simplecloud.shiyanlou.com/courses/uid1486098-20210819-1629359829352",alt:"图片描述"}})]),t._v(" "),a("p",[a("strong",[t._v("部分插件安装/卸载后可能需要重载环境才能生效，请留意右下角的提示信息。")])]),t._v(" "),a("h2",{attrs:{id:"复制粘贴问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复制粘贴问题"}},[t._v("#")]),t._v(" 复制粘贴问题")]),t._v(" "),a("p",[t._v("如果你的键盘存在 insert 按键（笔记本一般在右上角，可能需要组合 Fn 键之类的功能键使用），你也可以使用 Shift + insert 键粘贴。")]),t._v(" "),a("h2",{attrs:{id:"文件上传与下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件上传与下载"}},[t._v("#")]),t._v(" 文件上传与下载")]),t._v(" "),a("p",[t._v("实验中，如果需要运行已有项目或者继续之前没有完成的项目，我们可以在终端 Terminal 中使用"),a("code",[t._v("wget")]),t._v("或者 "),a("code",[t._v("git")]),t._v("命令获取代码。\n另外，VS Code 也支持上传本地项目压缩包或者文件夹，无需点击任何按钮，只需要将文件或文件夹从你本地直接拖动到 VS Code 文件浏览区域即可。")]),t._v(" "),a("p",[t._v("请勿一次性上传超过 50M 的压缩包或者包含非常多子文件的文件夹，否则可能导致环境卡死。")]),t._v(" "),a("p",[t._v("在 VS Code 中如果需要下载代码文件到本地，只需要选中要下载的文件夹或者代码文件，右键选择下载，就可以下载到本地。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://dn-simplecloud.shiyanlou.com/courses/uid1486098-20210819-1629363509619",alt:"图片描述"}})]),t._v(" "),a("h2",{attrs:{id:"快捷键"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快捷键"}},[t._v("#")]),t._v(" 快捷键")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("快捷键")]),t._v(" "),a("th",[t._v("功能")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("ctrl+F5")]),t._v(" "),a("td",[t._v("开始执行不调试")])]),t._v(" "),a("tr",[a("td",[t._v("ctrl+F")]),t._v(" "),a("td",[t._v("搜索和替换文件")])]),t._v(" "),a("tr",[a("td",[t._v("ctrl+shift+F")]),t._v(" "),a("td",[t._v("搜索所有文件")])]),t._v(" "),a("tr",[a("td",[t._v("ctrl+Tab")]),t._v(" "),a("td",[t._v("切换文件")])]),t._v(" "),a("tr",[a("td",[t._v("ctrl+s")]),t._v(" "),a("td",[t._v("保存")])]),t._v(" "),a("tr",[a("td",[t._v("ctrl+z")]),t._v(" "),a("td",[t._v("撤销")])]),t._v(" "),a("tr",[a("td",[t._v("ctrl+y")]),t._v(" "),a("td",[t._v("重做")])]),t._v(" "),a("tr",[a("td",[t._v("ctrl+shift+N")]),t._v(" "),a("td",[t._v("新建项目")])]),t._v(" "),a("tr",[a("td",[t._v("ctrl+shift+A")]),t._v(" "),a("td",[t._v("新建项")])])])]),t._v(" "),a("h2",{attrs:{id:"vs2010常用调试技术"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vs2010常用调试技术"}},[t._v("#")]),t._v(" VS2010常用调试技术")]),t._v(" "),a("h3",{attrs:{id:"断点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#断点"}},[t._v("#")]),t._v(" 断点")]),t._v(" "),a("p",[t._v("移动光标到指定行按F9即可添加断点\n通过菜单》调试》窗口》断点或者直接按Alt+F9即可调出选项卡")]),t._v(" "),a("h3",{attrs:{id:"单步和监控"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单步和监控"}},[t._v("#")]),t._v(" 单步和监控")]),t._v(" "),a("p",[t._v("F10、 F11，前者是一次一个语句的执行，或者可以看出一行；而后者如果出现能进入的子过程，那么就会进入子过程。")]),t._v(" "),a("h3",{attrs:{id:"调用堆栈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调用堆栈"}},[t._v("#")]),t._v(" 调用堆栈")]),t._v(" "),a("p",[t._v("Alt+7或者调试》窗口》调用堆栈")]),t._v(" "),a("h1",{attrs:{id:"c-c-示例项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c-c-示例项目"}},[t._v("#")]),t._v(" C/C++示例项目")]),t._v(" "),a("p",[t._v("我们需要先在代码文件浏览区中通过右键 New File 创建一个名为 hello.c 的 C 语言文件。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://dn-simplecloud.shiyanlou.com/courses/uid1486098-20220218-1645153533664",alt:"图片描述"}})]),t._v(" "),a("p",[t._v("然后，在编辑区域键入以下 C 代码，代码会自动保存。")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('#include<stdio.h>\nint main()\n{\n    printf("Hello, World.");\n    return 0;\n}\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://dn-simplecloud.shiyanlou.com/courses/uid1486098-20220218-1645153573250",alt:"图片描述"}})]),t._v(" "),a("p",[t._v("如果想要执行上方的 C 语言代码，需要先编译代码。编译代码需要用到 Linux 终端，接下来在终端中输入以下命令。")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("gcc -o hello hello.c\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("注意参数是小写字母 o，不是数字 0。单击回车，这时目录下会生成了一个名为 hello 的文件，这是 C 语言程序编译后得到的可执行程序。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://dn-simplecloud.shiyanlou.com/courses/uid1486098-20220218-1645153614962",alt:"图片描述"}})]),t._v(" "),a("p",[t._v("接下来，我们就可以在终端中执行文件，注意执行的是编译之后的文件：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("./hello\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("执行完之后，就可以看到刚刚编写 C 语言文件的输出了。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://dn-simplecloud.shiyanlou.com/courses/uid1486098-20220218-1645153664096",alt:"图片描述"}})]),t._v(" "),a("h1",{attrs:{id:"前端示例项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端示例项目"}},[t._v("#")]),t._v(" 前端示例项目")]),t._v(" "),a("p",[t._v("首先，在代码文件浏览区中通过右键 New File 创建一个名为 "),a("code",[t._v("hello.html")]),t._v("的 HTML 文件，然后在编辑区域输入以下 HTML 代码：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://dn-simplecloud.shiyanlou.com/courses/uid1486098-20220218-1645154676773",alt:"图片描述"}})]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<!DOCTYPE html>\n<html>\n  <head>\n    <title>欢迎来到 HTML 的世界</title>\n  </head>\n  <body>\n    <p>WebIDE 示例教学项目.</p>\n  </body>\n</html>\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://dn-simplecloud.shiyanlou.com/courses/uid1486098-20220218-1645154705780",alt:"图片描述"}})]),t._v(" "),a("p",[t._v("代码会自动保存。此时，如果希望预览刚刚编写的 HTML 页面效果，可以单击编辑器页面右上角的预览图标打开。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://dn-simplecloud.shiyanlou.com/courses/uid1486098-20220218-1645154732258",alt:"图片描述"}})]),t._v(" "),a("p",[t._v("除了预览按钮，你还可以：选择代码文件 → 右键 → Open With → Preview 打开预览：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://dn-simplecloud.shiyanlou.com/courses/uid1486098-20220218-1645154761217",alt:"图片描述"}})]),t._v(" "),a("p",[t._v("你可以看到，右侧的 HTML 页面已经可以展示出来了。如果后续编辑和修改代码，预览页面也会动态更新。")])])}),[],!1,null,null,null);s.default=e.exports}}]);