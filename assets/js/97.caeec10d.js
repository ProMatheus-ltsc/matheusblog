(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{1554:function(a,s,t){"use strict";t.r(s);var e=t(24),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"文件打包与解压缩"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件打包与解压缩"}},[a._v("#")]),a._v(" 文件打包与解压缩")]),a._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#概念讲解"}},[a._v("概念讲解")])]),e("li",[e("a",{attrs:{href:"#实战"}},[a._v("实战")]),e("ul",[e("li",[e("a",{attrs:{href:"#zip-压缩打包程序"}},[a._v("zip 压缩打包程序")])]),e("li",[e("a",{attrs:{href:"#使用-unzip-命令解压缩-zip-文件"}},[a._v("使用 unzip 命令解压缩 zip 文件")])]),e("li",[e("a",{attrs:{href:"#rar-打包压缩命令"}},[a._v("rar 打包压缩命令")])]),e("li",[e("a",{attrs:{href:"#tar-打包工具"}},[a._v("tar 打包工具")])])])]),e("li",[e("a",{attrs:{href:"#总结"}},[a._v("总结")])])])]),e("p"),a._v(" "),e("h2",{attrs:{id:"概念讲解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概念讲解"}},[a._v("#")]),a._v(" 概念讲解")]),a._v(" "),e("p",[a._v("在讲 Linux 上的压缩工具之前，有必要先了解一下常见常用的压缩包文件格式。在 Windows 上最常见的不外乎这两种 "),e("code",[a._v("*.zip")]),a._v("，"),e("code",[a._v("*.7z")]),a._v(" 后缀的压缩文件。而在 Linux 上面常见的格式除了以上两种外，还有 "),e("code",[a._v(".rar")]),a._v("，"),e("code",[a._v("*.gz")]),a._v("，"),e("code",[a._v("*.xz")]),a._v("，"),e("code",[a._v("*.bz2")]),a._v("，"),e("code",[a._v("*.tar")]),a._v("，"),e("code",[a._v("*.tar.gz")]),a._v("，"),e("code",[a._v("*.tar.xz")]),a._v("，"),e("code",[a._v("*.tar.bz2")]),a._v("，简单介绍如下：")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("文件后缀名")]),a._v(" "),e("th",[a._v("说明")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[e("code",[a._v("*.zip")])]),a._v(" "),e("td",[a._v("zip 程序打包压缩的文件")])]),a._v(" "),e("tr",[e("td",[e("code",[a._v("*.rar")])]),a._v(" "),e("td",[a._v("rar 程序压缩的文件")])]),a._v(" "),e("tr",[e("td",[e("code",[a._v("*.7z")])]),a._v(" "),e("td",[a._v("7zip 程序压缩的文件")])]),a._v(" "),e("tr",[e("td",[e("code",[a._v("*.tar")])]),a._v(" "),e("td",[a._v("tar 程序打包，未压缩的文件")])]),a._v(" "),e("tr",[e("td",[e("code",[a._v("*.gz")])]),a._v(" "),e("td",[a._v("gzip 程序（GNU zip）压缩的文件")])]),a._v(" "),e("tr",[e("td",[e("code",[a._v("*.xz")])]),a._v(" "),e("td",[a._v("xz 程序压缩的文件")])]),a._v(" "),e("tr",[e("td",[e("code",[a._v("*.bz2")])]),a._v(" "),e("td",[a._v("bzip2 程序压缩的文件")])]),a._v(" "),e("tr",[e("td",[e("code",[a._v("*.tar.gz")])]),a._v(" "),e("td",[a._v("tar 打包，gzip 程序压缩的文件")])]),a._v(" "),e("tr",[e("td",[e("code",[a._v("*.tar.xz")])]),a._v(" "),e("td",[a._v("tar 打包，xz 程序压缩的文件")])]),a._v(" "),e("tr",[e("td",[e("code",[a._v("*tar.bz2")])]),a._v(" "),e("td",[a._v("tar 打包，bzip2 程序压缩的文件")])]),a._v(" "),e("tr",[e("td",[e("code",[a._v("*.tar.7z")])]),a._v(" "),e("td",[a._v("tar 打包，7z 程序压缩的文件")])])])]),a._v(" "),e("p",[a._v("讲了这么多种压缩文件，这么多个命令，不过我们一般只需要掌握几个命令即可，包括 "),e("code",[a._v("zip")]),a._v("，"),e("code",[a._v("tar")]),a._v("。下面会依次介绍这几个命令及对应的解压命令。")]),a._v(" "),e("h2",{attrs:{id:"实战"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实战"}},[a._v("#")]),a._v(" 实战")]),a._v(" "),e("h3",{attrs:{id:"zip-压缩打包程序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zip-压缩打包程序"}},[a._v("#")]),a._v(" zip 压缩打包程序")]),a._v(" "),e("ul",[e("li",[a._v("使用 zip 打包文件夹，注意输入完整的参数和路径：")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /home/shiyanlou\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("zip")]),a._v(" -r -q -o shiyanlou.zip /home/shiyanlou/Desktop\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("du")]),a._v(" -h shiyanlou.zip\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" shiyanlou.zip\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("p",[a._v("上面命令将目录 "),e("code",[a._v("/home/shiyanlou/Desktop")]),a._v(" 打包成一个文件，并查看了打包后文件的大小和类型。第一行命令中，"),e("code",[a._v("-r")]),a._v(" 参数表示递归打包包含子目录的全部内容，"),e("code",[a._v("-q")]),a._v(" 参数表示为安静模式，即不向屏幕输出信息，"),e("code",[a._v("-o")]),a._v("，表示输出文件，需在其后紧跟打包输出文件名。后面使用 "),e("code",[a._v("du")]),a._v(" 命令查看打包后文件的大小（后面会具体说明该命令）。")]),a._v(" "),e("ul",[e("li",[a._v("设置压缩级别为 9 和 1（9 最大，1 最小），重新打包：")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("zip")]),a._v(" -r -9 -q -o shiyanlou_9.zip /home/shiyanlou/Desktop -x ~/*.zip\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("zip")]),a._v(" -r -1 -q -o shiyanlou_1.zip /home/shiyanlou/Desktop -x ~/*.zip\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("p",[a._v("这里添加了一个参数用于设置压缩级别 "),e("code",[a._v("-[1-9]")]),a._v("，1 表示最快压缩但体积大，9 表示体积最小但耗时最久。最后那个 "),e("code",[a._v("-x")]),a._v(" 是为了排除我们上一次创建的 zip 文件，否则又会被打包进这一次的压缩文件中，"),e("strong",[a._v("注意：这里只能使用绝对路径，否则不起作用")]),a._v("。")]),a._v(" "),e("p",[a._v("我们再用 "),e("code",[a._v("du")]),a._v(" 命令分别查看默认压缩级别、最低、最高压缩级别及未压缩的文件的大小：")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("du")]),a._v(" -h -d "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" *.zip ~ "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sort")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("通过 man 手册可知：")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("-h")]),a._v("， --human-readable（顾名思义，你可以试试不加的情况）")]),a._v(" "),e("li",[e("code",[a._v("-d")]),a._v("， --max-depth（所查看文件的深度）")])]),a._v(" "),e("p",[e("img",{attrs:{src:t(578),alt:"image-20220531195129380"}})]),a._v(" "),e("p",[a._v("这样一目了然，理论上来说默认压缩级别应该是最高的，但是由于文件不大，这里的差异不明显（几乎看不出差别），不过你在环境中操作之后看到的压缩文件大小可能跟图上的有些不同，因为系统在使用过程中，会随时生成一些缓存文件在当前用户的家目录中，这对于我们学习命令使用来说，是无关紧要的，可以忽略这些不同。")]),a._v(" "),e("ul",[e("li",[a._v("创建加密 zip 包")])]),a._v(" "),e("p",[a._v("使用 "),e("code",[a._v("-e")]),a._v(" 参数可以创建加密压缩包：")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("zip")]),a._v(" -r -e -o shiyanlou_encryption.zip /home/shiyanlou/Desktop\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[e("strong",[a._v("注意：")]),a._v(" 关于 "),e("code",[a._v("zip")]),a._v(" 命令，因为 Windows 系统与 Linux/Unix 在文本文件格式上的一些兼容问题，比如换行符（为不可见字符），在 Windows 为 CR+LF（Carriage-Return+Line-Feed：回车加换行），而在 Linux/Unix 上为 LF（换行），所以如果在不加处理的情况下，在 Linux 上编辑的文本，在 Windows 系统上打开可能看起来是没有换行的。如果你想让你在 Linux 创建的 zip 压缩文件在 Windows 上解压后没有任何问题，那么你还需要对命令做一些修改：")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("zip")]),a._v(" -r -l -o shiyanlou.zip /home/shiyanlou/Desktop\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("需要加上 "),e("code",[a._v("-l")]),a._v(" 参数将 "),e("code",[a._v("LF")]),a._v(" 转换为 "),e("code",[a._v("CR+LF")]),a._v(" 来达到以上目的。")]),a._v(" "),e("h3",{attrs:{id:"使用-unzip-命令解压缩-zip-文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-unzip-命令解压缩-zip-文件"}},[a._v("#")]),a._v(" 使用 unzip 命令解压缩 zip 文件")]),a._v(" "),e("p",[a._v("将 "),e("code",[a._v("shiyanlou.zip")]),a._v(" 解压到当前目录：")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("unzip")]),a._v(" shiyanlou.zip\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("使用安静模式，将文件解压到指定目录：")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("unzip")]),a._v(" -q shiyanlou.zip -d ziptest\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("上述指定目录不存在，将会自动创建。如果你不想解压只想查看压缩包的内容你可以使用 "),e("code",[a._v("-l")]),a._v(" 参数：")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("unzip")]),a._v(" -l shiyanlou.zip\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[e("strong",[a._v("注意：")]),a._v(" 使用 unzip 解压文件时我们同样应该注意兼容问题，不过这里我们关心的不再是上面的问题，而是中文编码的问题，通常 Windows 系统上面创建的压缩文件，如果有有包含中文的文档或以中文作为文件名的文件时默认会采用 GBK 或其它编码，而 Linux 上面默认使用的是 UTF-8 编码，如果不加任何处理，直接解压的话可能会出现中文乱码的问题（有时候它会自动帮你处理），为了解决这个问题，我们可以在解压时指定编码类型。")]),a._v(" "),e("p",[a._v("使用 "),e("code",[a._v("-O")]),a._v("（英文字母，大写 o）参数指定编码类型：")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("unzip")]),a._v(" -O GBK 中文压缩文件.zip\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"rar-打包压缩命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rar-打包压缩命令"}},[a._v("#")]),a._v(" "),e("code",[a._v("rar")]),a._v(" 打包压缩命令")]),a._v(" "),e("p",[e("code",[a._v("rar")]),a._v(" 也是 Windows 上常用的一种压缩文件格式，在 Linux 上可以使用 "),e("code",[a._v("rar")]),a._v("和 "),e("code",[a._v("unrar")]),a._v(" 工具分别创建和解压 "),e("code",[a._v("rar")]),a._v(" 压缩包。")]),a._v(" "),e("ul",[e("li",[a._v("安装"),e("code",[a._v("rar")]),a._v("和 "),e("code",[a._v("unrar")]),a._v(" 工具：")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ sudo apt-get update\n$ sudo apt-get install rar unrar\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("ul",[e("li",[a._v("从指定文件或目录创建压缩包或添加文件到压缩包：")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ rm *.zip\n$ rar a shiyanlou.rar .\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("p",[a._v("上面的命令使用"),e("code",[a._v("a")]),a._v(" 参数添加一个目录 "),e("code",[a._v("～")]),a._v(" 到一个归档文件中，如果该文件不存在就会自动创建。")]),a._v(" "),e("p",[e("strong",[a._v("注意："),e("code",[a._v("rar")]),a._v(" 的命令参数没有 "),e("code",[a._v("-")]),a._v("，如果加上会报错。")])]),a._v(" "),e("ul",[e("li",[a._v("从指定压缩包文件中删除某个文件：")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ rar d shiyanlou.rar .zshrc\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ul",[e("li",[a._v("查看不解压文件：")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ rar l shiyanlou.rar\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ul",[e("li",[a._v("使用 "),e("code",[a._v("unrar")]),a._v(" 解压 "),e("code",[a._v("rar")]),a._v(" 文件")])]),a._v(" "),e("p",[a._v("全路径解压：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ unrar x shiyanlou.rar\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("去掉路径解压：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ mkdir tmp\n$ unrar e shiyanlou.rar tmp/\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("p",[e("strong",[e("code",[a._v("rar")]),a._v(" 命令参数非常多，上面只涉及了一些基本操作。")])]),a._v(" "),e("h3",{attrs:{id:"tar-打包工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tar-打包工具"}},[a._v("#")]),a._v(" "),e("code",[a._v("tar")]),a._v(" 打包工具")]),a._v(" "),e("p",[a._v("在 Linux 上面更常用的是 "),e("code",[a._v("tar")]),a._v(" 工具，tar 原本只是一个打包工具，只是同时还是实现了对 7z、gzip、xz、bzip2 等工具的支持，这些压缩工具本身只能实现对文件或目录（单独压缩目录中的文件）的压缩，没有实现对文件的打包压缩，所以我们也无需再单独去学习其他几个工具，tar 的解压和压缩都是同一个命令，只需参数不同，使用比较方便。")]),a._v(" "),e("p",[a._v("下面先掌握 "),e("code",[a._v("tar")]),a._v(" 命令一些基本的使用方式，即不进行压缩只是进行打包（创建归档文件）和解包的操作。")]),a._v(" "),e("ul",[e("li",[a._v("创建一个 tar 包：")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /home/shiyanlou\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -P -cf shiyanlou.tar /home/shiyanlou/Desktop\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("p",[a._v("上面命令中，"),e("code",[a._v("-P")]),a._v(" 保留绝对路径符，"),e("code",[a._v("-c")]),a._v(" 表示创建一个 tar 包文件，"),e("code",[a._v("-f")]),a._v(" 用于指定创建的文件名，注意文件名必须紧跟在 "),e("code",[a._v("-f")]),a._v(" 参数之后，比如不能写成 "),e("code",[a._v("tar -fc shiyanlou.tar")]),a._v("，可以写成 "),e("code",[a._v("tar -f shiyanlou.tar -c ~")]),a._v("。你还可以加上 "),e("code",[a._v("-v")]),a._v(" 参数以可视的的方式输出打包的文件。")]),a._v(" "),e("ul",[e("li",[a._v("解包一个文件（"),e("code",[a._v("-x")]),a._v(" 参数）到指定路径的"),e("strong",[a._v("已存在")]),a._v("目录（"),e("code",[a._v("-C")]),a._v(" 参数）：")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" tardir\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -xf shiyanlou.tar -C tardir\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("ul",[e("li",[a._v("只查看不解包文件 "),e("code",[a._v("-t")]),a._v(" 参数：")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -tf shiyanlou.tar\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ul",[e("li",[a._v("保留文件属性和跟随链接（符号链接或软链接），有时候我们使用 tar 备份文件当你在其他主机还原时希望保留文件的属性（"),e("code",[a._v("-p")]),a._v(" 参数）和备份链接指向的源文件而不是链接本身（"),e("code",[a._v("-h")]),a._v(" 参数）：")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -cphf etc.tar /etc\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("对于创建不同的压缩格式的文件，对于 tar 来说是相当简单的，需要的只是换一个参数，这里我们就以使用 "),e("code",[a._v("gzip")]),a._v(" 工具创建 "),e("code",[a._v("*.tar.gz")]),a._v(" 文件为例来说明。")]),a._v(" "),e("ul",[e("li",[a._v("我们只需要在创建 tar 文件的基础上添加 "),e("code",[a._v("-z")]),a._v(" 参数，使用 "),e("code",[a._v("gzip")]),a._v(" 来压缩文件：")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -czf shiyanlou.tar.gz /home/shiyanlou/Desktop\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ul",[e("li",[a._v("解压 "),e("code",[a._v("*.tar.gz")]),a._v(" 文件：")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -xzf shiyanlou.tar.gz\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:t(579),alt:"image-20220531195147638"}})]),a._v(" "),e("p",[a._v("现在我们要使用其它的压缩工具创建或解压相应文件只需要更改一个参数即可：")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("压缩文件格式")]),a._v(" "),e("th",[a._v("参数")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[e("code",[a._v("*.tar.gz")])]),a._v(" "),e("td",[e("code",[a._v("-z")])])]),a._v(" "),e("tr",[e("td",[e("code",[a._v("*.tar.xz")])]),a._v(" "),e("td",[e("code",[a._v("-J")])])]),a._v(" "),e("tr",[e("td",[e("code",[a._v("*tar.bz2")])]),a._v(" "),e("td",[e("code",[a._v("-j")])])])])]),a._v(" "),e("blockquote",[e("p",[a._v("tar 命令的参数很多，不过常用的就是上述这些，需要了解更多你可以查看 man 手册获取帮助。")])]),a._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),e("p",[a._v("说了这么多，其实平常使用的参数并没有那么复杂，只需要记住常用的组合就可以了。")]),a._v(" "),e("p",[a._v("常用命令：")]),a._v(" "),e("ul",[e("li",[a._v("zip：")]),a._v(" "),e("li",[a._v("打包 ：zip something.zip something （目录请加 -r 参数）")]),a._v(" "),e("li",[a._v("解包：unzip something")]),a._v(" "),e("li",[a._v("指定路径：-d 参数")]),a._v(" "),e("li",[a._v("tar：")]),a._v(" "),e("li",[a._v("打包：tar -zcvf something.tar something")]),a._v(" "),e("li",[a._v("解包：tar -zxvf something.tar")]),a._v(" "),e("li",[a._v("指定路径：-C 参数")])])])}),[],!1,null,null,null);s.default=r.exports},578:function(a,s,t){a.exports=t.p+"assets/img/image-20220531195129380.fde07301.png"},579:function(a,s,t){a.exports=t.p+"assets/img/image-20220531195147638.6bd2f9bf.png"}}]);