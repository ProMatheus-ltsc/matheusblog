(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1557:function(s,a,t){"use strict";t.r(a);var e=t(65),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"文件系统操作与磁盘管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件系统操作与磁盘管理"}},[s._v("#")]),s._v(" 文件系统操作与磁盘管理")]),s._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#查看磁盘和目录的容量"}},[s._v("查看磁盘和目录的容量")])]),e("li",[e("a",{attrs:{href:"#简单的磁盘管理"}},[s._v("简单的磁盘管理")]),e("ul",[e("li",[e("a",{attrs:{href:"#创建虚拟磁盘"}},[s._v("创建虚拟磁盘")])])])])])]),e("p"),s._v(" "),e("h2",{attrs:{id:"查看磁盘和目录的容量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看磁盘和目录的容量"}},[s._v("#")]),s._v(" 查看磁盘和目录的容量")]),s._v(" "),e("ul",[e("li",[s._v("使用 "),e("code",[s._v("df")]),s._v(" 命令查看磁盘的容量")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("df")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("在实验楼的环境中你将看到如下的输出内容：")]),s._v(" "),e("p",[e("img",{attrs:{src:t(589),alt:"image-20220531195203435"}})]),s._v(" "),e("p",[s._v("但在实际的物理主机上会更像这样：")]),s._v(" "),e("p",[e("img",{attrs:{src:t(590),alt:"image-20220531195210571"}})]),s._v(" "),e("p",[s._v("物理主机上的 "),e("code",[s._v("/dev/sda2")]),s._v(" 是对应着主机硬盘的分区，后面的数字表示分区号，数字前面的字母 a 表示第几块硬盘（也可能是可移动磁盘），你如果主机上有多块硬盘则可能还会出现 "),e("code",[s._v("/dev/sdb")]),s._v("，"),e("code",[s._v("/dev/sdc")]),s._v(" 这些磁盘设备都会在 "),e("code",[s._v("/dev")]),s._v(" 目录下以文件的存在形式。")]),s._v(" "),e("p",[s._v('接着你还会看到"1k-块"这个陌生的东西，它表示以磁盘块大小的方式显示容量，后面为相应的以块大小表示的已用和可用容量，在你了解 Linux 的文件系统之前这个就先不管吧，我们以一种你应该看得懂的方式展示：')]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("df")]),s._v(" -h\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:t(591),alt:"image-20220531195216391"}})]),s._v(" "),e("p",[s._v("现在你就可以使用命令查看你主机磁盘的使用情况了。至于挂载点如果你还记得前面第 4 节介绍 Linux 目录树结构的内容，那么你就应该能很好的理解挂载的概念，这里就不再赘述。")]),s._v(" "),e("ul",[e("li",[s._v("使用 "),e("code",[s._v("du")]),s._v(" 命令查看目录的容量")])]),s._v(" "),e("p",[s._v("这个命令前面其实已经用了很多次了：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认同样以块的大小展示")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("du")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 加上 `-h` 参数，以更易读的方式展示")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("du")]),s._v(" -h\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[e("code",[s._v("-d")]),s._v(" 参数指定查看目录的深度")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 只查看 1 级目录的信息")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("du")]),s._v(" -h -d "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" ~\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看 2 级")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("du")]),s._v(" -h -d "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" ~\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("常用参数")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("du")]),s._v(" -h "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 同 --human-readable 以 K，M，G 为单位，提高信息的可读性。")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("du")]),s._v(" -a "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 同 --all 显示目录中所有文件的大小。")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("du")]),s._v(" -s "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 同 --summarize 仅显示总计，只列出最后加总的值。")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[e("img",{attrs:{src:t(592),alt:"image-20220531195222379"}})]),s._v(" "),e("p",[e("code",[s._v("du")]),s._v("（estimate file space usage）命令与 "),e("code",[s._v("df")]),s._v("（report file system disk space usage）命令只有一字之差，希望大家注意不要弄混淆了，你可以像我这样从 man 手册中获取命令的完整描述，记全称就不会搞混了。")]),s._v(" "),e("h2",{attrs:{id:"简单的磁盘管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简单的磁盘管理"}},[s._v("#")]),s._v(" 简单的磁盘管理")]),s._v(" "),e("p",[e("strong",[s._v("下面涉及的命令具有一定的危险性，操作不当可能会丢失你的个人数据，初学者建议在虚拟环境中进行操作。")])]),s._v(" "),e("p",[s._v("通常情况下，这一小节应该直接讲如何挂载卸载磁盘，如何格式化磁盘，如何分区，但如你所见，由于实验环境的限制，环境中没有额外的磁盘可以挂载，也没有空闲空间测试分区命令，所以首先我们会先创建一个虚拟磁盘来进行后续的练习操作。")]),s._v(" "),e("h3",{attrs:{id:"创建虚拟磁盘"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建虚拟磁盘"}},[s._v("#")]),s._v(" 创建虚拟磁盘")]),s._v(" "),e("h4",{attrs:{id:"dd-命令简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dd-命令简介"}},[s._v("#")]),s._v(" dd 命令简介")]),s._v(" "),e("p",[e("code",[s._v("dd")]),s._v(" 命令用于转换和复制文件，不过它的复制不同于 "),e("code",[s._v("cp")]),s._v("。之前提到过关于 Linux 的很重要的一点，"),e("strong",[s._v("一切即文件")]),s._v("，在 Linux 上，硬件的设备驱动（如硬盘）和特殊设备文件（如 "),e("code",[s._v("/dev/zero")]),s._v(" 和 "),e("code",[s._v("/dev/random")]),s._v("）都像普通文件一样，只是在各自的驱动程序中实现了对应的功能，"),e("code",[s._v("dd")]),s._v(" 也可以读取文件或写入这些文件。这样，"),e("code",[s._v("dd")]),s._v(" 也可以用在备份硬件的引导扇区、获取一定数量的随机数据或者空数据等任务中。"),e("code",[s._v("dd")]),s._v(" 程序也可以在复制时处理数据，例如转换字节序、或在 ASCII 与 EBCDIC 编码间互换。")]),s._v(" "),e("p",[e("code",[s._v("dd")]),s._v(" 的命令行语句与其他的 Linux 程序不同，因为它的命令行选项格式为 "),e("strong",[s._v("选项=值")]),s._v("，而不是更标准的 "),e("strong",[s._v("--选项 值")]),s._v(" 或 "),e("strong",[s._v("-选项=值")]),s._v("。"),e("code",[s._v("dd")]),s._v(" 默认从标准输入中读取，并写入到标准输出中，但可以用选项 "),e("code",[s._v("if")]),s._v("（input file，输入文件）和 "),e("code",[s._v("of")]),s._v("（output file，输出文件）改变。")]),s._v(" "),e("p",[s._v("我们先来试试用 "),e("code",[s._v("dd")]),s._v(" 命令从标准输入读入用户的输入到标准输出或者一个文件中：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出到文件")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("dd")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("of")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("test "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("bs")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("count")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者 dd if=/dev/stdin of=test bs=10 count=1")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出到标准输出")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("dd")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("if")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/dev/stdin "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("of")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/dev/stdout "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("bs")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("count")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在打完了这个命令后，继续在终端打字，作为你的输入")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[e("img",{attrs:{src:t(593),alt:"此处输入图片的描述"}})]),s._v(" "),e("p",[s._v("上述命令从标准输入设备读入用户输入（缺省值，所以可省略）然后输出到 test 文件，"),e("code",[s._v("bs")]),s._v("（block size）用于指定块大小（缺省单位为 Byte，也可为其指定如 "),e("code",[s._v("K")]),s._v("，"),e("code",[s._v("M")]),s._v("，"),e("code",[s._v("G")]),s._v(" 等单位），"),e("code",[s._v("count")]),s._v(" 用于指定块数量。如上图所示，我指定只读取总共 10 个字节的数据，当我输入了 "),e("code",[s._v("hello shiyanlou")]),s._v(" 之后加上空格回车总共 16 个字节（一个英文字符占一个字节）内容，显然超过了设定大小。使用 "),e("code",[s._v("du")]),s._v(" 和 "),e("code",[s._v("cat")]),s._v(" 10 个字节（那个黑底百分号表示这里没有换行符），而其他的多余输入将被截取并保留在标准输入。")]),s._v(" "),e("p",[s._v("前面说到 "),e("code",[s._v("dd")]),s._v(" 在拷贝的同时还可以实现数据转换，那下面就举一个简单的例子：将输出的英文字符转换为大写再写入文件：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("dd")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("if")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/dev/stdin "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("of")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("test "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("bs")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("count")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("conv")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ucase\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:t(594),alt:"此处输入图片的描述"}})]),s._v(" "),e("p",[s._v("你可以在"),e("code",[s._v("man")]),s._v("文档中查看其他所有转换参数。")]),s._v(" "),e("h4",{attrs:{id:"使用-dd-命令创建虚拟镜像文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-dd-命令创建虚拟镜像文件"}},[s._v("#")]),s._v(" 使用 dd 命令创建虚拟镜像文件")]),s._v(" "),e("p",[s._v("通过上面一小节，你应该掌握了 "),e("code",[s._v("dd")]),s._v(" 的基本使用，下面就来使用 "),e("code",[s._v("dd")]),s._v(" 命令来完成创建虚拟磁盘的第一步。")]),s._v(" "),e("p",[s._v("从 "),e("code",[s._v("/dev/zero")]),s._v(" 设备创建一个容量为 256M 的空文件：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("dd")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("if")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/dev/zero "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("of")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("virtual.img "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("bs")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("1M "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("count")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("256")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("du")]),s._v(" -h virtual.img\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[e("img",{attrs:{src:t(595),alt:"image-20220531195240491"}})]),s._v(" "),e("p",[s._v("然后我们要将这个文件格式化（写入文件系统），这里我们要学到一个（准确的说是一组）新的命令来完成这个需求。")]),s._v(" "),e("h4",{attrs:{id:"使用-mkfs-命令格式化磁盘-我们这里是自己创建的虚拟磁盘镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-mkfs-命令格式化磁盘-我们这里是自己创建的虚拟磁盘镜像"}},[s._v("#")]),s._v(" 使用 mkfs 命令格式化磁盘（我们这里是自己创建的虚拟磁盘镜像）")]),s._v(" "),e("p",[s._v("你可以在命令行输入 "),e("code",[s._v("sudo mkfs")]),s._v(" 然后按下 "),e("code",[s._v("<Tab>")]),s._v(" 键，你可以看到很多个以 mkfs 为前缀的命令，这些不同的后缀其实就是表示着不同的文件系统，可以用 mkfs 格式化成的文件系统。")]),s._v(" "),e("p",[s._v("我们可以简单的使用下面的命令来将我们的虚拟磁盘镜像格式化为 "),e("code",[s._v("ext4")]),s._v(" 文件系统：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" mkfs.ext4 virtual.img\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:t(596),alt:"image-20220531195245231"}})]),s._v(" "),e("p",[s._v("可以看到实际 "),e("code",[s._v("mkfs.ext4")]),s._v(" 是使用 "),e("code",[s._v("mke2fs")]),s._v(" 来完成格式化工作的。"),e("code",[s._v("mke2fs")]),s._v(" 的参数很多，不过我们也不会经常格式化磁盘来玩，所以就掌握这基本用法吧，等你有特殊需求时，再查看 man 文档解决。")]),s._v(" "),e("p",[s._v("更多关于文件系统的知识，请查看 wiki： "),e("a",{attrs:{href:"http://zh.wikipedia.org/wiki/%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F#Linux_.E6.94.AF.E6.8F.B4.E7.9A.84.E6.AA.94.E6.A1.88.E7.B3.BB.E7.B5.B1",target:"_blank",rel:"noopener noreferrer"}},[s._v("文件系统"),e("OutboundLink")],1),s._v(" "),e("a",{attrs:{href:"http://zh.wikipedia.org/wiki/Ext3",target:"_blank",rel:"noopener noreferrer"}},[s._v("ext3"),e("OutboundLink")],1),s._v("，"),e("a",{attrs:{href:"http://zh.wikipedia.org/wiki/Ext4",target:"_blank",rel:"noopener noreferrer"}},[s._v("ext4"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("如果你想知道 Linux 支持哪些文件系统你可以输入 "),e("code",[s._v("ls -l /lib/modules/$(uname -r)/kernel/fs")]),s._v(" 查看（我们的环境中无法查看）。")]),s._v(" "),e("h4",{attrs:{id:"使用-mount-命令挂载磁盘到目录树"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-mount-命令挂载磁盘到目录树"}},[s._v("#")]),s._v(" 使用 mount 命令挂载磁盘到目录树")]),s._v(" "),e("p",[s._v("用户在 Linux/UNIX 的机器上打开一个文件以前，包含该文件的文件系统必须先进行挂载的动作，此时用户要对该文件系统执行 "),e("code",[s._v("mount")]),s._v(" 的指令以进行挂载。该指令通常是使用在 USB 或其他可移除存储设备上，而根目录则需要始终保持挂载的状态。又因为 Linux/UNIX 文件系统可以对应一个文件而不一定要是硬件设备，所以可以挂载一个包含文件系统的文件到目录树。")]),s._v(" "),e("p",[s._v("Linux/UNIX 命令行的 "),e("code",[s._v("mount")]),s._v(" 指令是告诉操作系统，对应的文件系统已经准备好，可以使用了，而该文件系统会对应到一个特定的点（称为挂载点）。挂载好的文件、目录、设备以及特殊文件即可提供用户使用。")]),s._v(" "),e("p",[s._v("我们先来使用 "),e("code",[s._v("mount")]),s._v(" 来查看下主机已经挂载的文件系统：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:t(597),alt:"image-20220531195250642"}})]),s._v(" "),e("p",[s._v("输出的结果中每一行表示一个设备或虚拟设备，每一行最前面是设备名，然后是 on 后面是挂载点，type 后面表示文件系统类型，再后面是挂载选项（比如可以在挂载时设定以只读方式挂载等等）。")]),s._v(" "),e("p",[s._v("那么我们如何挂载真正的磁盘到目录树呢，"),e("code",[s._v("mount")]),s._v(" 命令的一般格式如下：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("source"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("directory"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("一些常用操作：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-o "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("操作选项"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-t 文件系统类型"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-w"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("--rw"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("--ro"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("文件系统源"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("挂载点"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("注意：由于实验楼的环境限制，mount 命令挂载及 umount 卸载都无法进行操作，可以简单了解这些步骤。")])]),s._v(" "),e("p",[s._v("现在直接来挂载我们创建的虚拟磁盘镜像到 "),e("code",[s._v("/mnt")]),s._v(" 目录：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" -o loop -t ext4 virtual.img /mnt\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 也可以省略挂载类型，很多时候 mount 会自动识别")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以只读方式挂载")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" -o loop --ro virtual.img /mnt\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者 mount -o loop,ro virtual.img /mnt")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h4",{attrs:{id:"使用-umount-命令卸载已挂载磁盘"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-umount-命令卸载已挂载磁盘"}},[s._v("#")]),s._v(" 使用 umount 命令卸载已挂载磁盘")]),s._v(" "),e("p",[e("strong",[s._v("注意：由于实验楼的环境限制，mount 命令挂载及 umount 卸载都无法进行操作，可以简单了解这些步骤。")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 命令格式 sudo umount 已挂载设备名或者挂载点，如：")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("umount")]),s._v(" /mnt\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("不过遗憾的是，由于我们环境的问题（环境中使用的 Linux 内核在编译时没有添加对 Loop device 的支持），所以你将无法挂载成功：")]),s._v(" "),e("p",[e("img",{attrs:{src:t(598),alt:"image-20220531195257644"}})]),s._v(" "),e("p",[s._v("另外关于 loop 设备，你可能会有诸多疑问，那么请看下面来自维基百科 "),e("a",{attrs:{href:"http://zh.wikipedia.org/wiki//dev/loop",target:"_blank",rel:"noopener noreferrer"}},[s._v("/dev/loop"),e("OutboundLink")],1),s._v("的说明：")]),s._v(" "),e("blockquote",[e("p",[s._v("在类 UNIX 系统中，/dev/loop（或称 vnd （vnode disk）、lofi（循环文件接口））是一种伪设备，这种设备使得文件可以如同块设备一般被访问。")]),s._v(" "),e("p",[s._v("在使用之前，循环设备必须与现存文件系统上的文件相关联。这种关联将提供给用户一个应用程序接口，接口将允许文件视为块特殊文件（参见设备文件系统）使用。因此，如果文件中包含一个完整的文件系统，那么这个文件就能如同磁盘设备一般被挂载。")]),s._v(" "),e("p",[s._v("这种设备文件经常被用于光盘或是磁盘镜像。通过循环挂载来挂载包含文件系统的文件，便使处在这个文件系统中的文件得以被访问。这些文件将出现在挂载点目录。如果挂载目录中本身有文件，这些文件在挂载后将被禁止使用。")])]),s._v(" "),e("h4",{attrs:{id:"使用-fdisk-为磁盘分区"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-fdisk-为磁盘分区"}},[s._v("#")]),s._v(" 使用 fdisk 为磁盘分区")]),s._v(" "),e("p",[s._v("（关于分区的一些概念不清楚的用户请参看 "),e("a",{attrs:{href:"http://zh.wikipedia.org/wiki/%E4%B8%BB%E5%BC%95%E5%AF%BC%E8%AE%B0%E5%BD%95",target:"_blank",rel:"noopener noreferrer"}},[s._v("主引导记录"),e("OutboundLink")],1),s._v("）")]),s._v(" "),e("p",[e("strong",[s._v("注意：由于实验楼的环境限制，fdisk 命令无法进行操作，可以简单了解这些步骤。")])]),s._v(" "),e("p",[s._v("同样因为环境中没有物理磁盘，也无法创建虚拟磁盘的原因我们就无法实验练习使用该命令了，下面我将以我的物理主机为例讲解如何为磁盘分区。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看硬盘分区表信息")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("fdisk")]),s._v(" -l\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[e("img",{attrs:{src:t(599),alt:"image-20220531195303646"}})]),s._v(" "),e("p",[s._v("输出结果中开头显示了我主机上的磁盘的一些信息，包括容量扇区数，扇区大小，I/O 大小等信息。")]),s._v(" "),e("p",[s._v("我们重点看一下中间的分区信息，"),e("code",[s._v("/dev/sda1")]),s._v("，"),e("code",[s._v("/dev/sda2")]),s._v(" 为主分区分别安装了 Windows 和 Linux 操作系统，"),e("code",[s._v("/dev/sda3")]),s._v(" 为交换分区（可以理解为虚拟内存），"),e("code",[s._v("/dev/sda4")]),s._v(" 为扩展分区其中包含 "),e("code",[s._v("/dev/sda5")]),s._v("，"),e("code",[s._v("/dev/sda6")]),s._v("，"),e("code",[s._v("/dev/sda7")]),s._v("，"),e("code",[s._v("/dev/sda8")]),s._v(" 四个逻辑分区，因为主机上有几个分区之间有空隙，没有对齐边界扇区，所以分区之间不是完全连续的。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入磁盘分区模式")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("fdisk")]),s._v(" virtual.img\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[e("img",{attrs:{src:t(600),alt:"image-20220531195309515"}})]),s._v(" "),e("p",[s._v("在进行操作前我们首先应先规划好我们的分区方案，这里我将在使用 128M（可用 127M 左右）的虚拟磁盘镜像创建一个 30M 的主分区剩余部分为扩展分区包含 2 个大约 45M 的逻辑分区。")]),s._v(" "),e("p",[s._v("操作完成后输入 "),e("code",[s._v("p")]),s._v(" 查看结果如下:")]),s._v(" "),e("p",[e("img",{attrs:{src:t(601),alt:"image-20220531195315543"}})]),s._v(" "),e("p",[s._v("最后不要忘记输入 "),e("code",[s._v("w")]),s._v(" 写入分区表。")]),s._v(" "),e("h4",{attrs:{id:"使用-losetup-命令建立镜像与回环设备的关联"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-losetup-命令建立镜像与回环设备的关联"}},[s._v("#")]),s._v(" 使用 losetup 命令建立镜像与回环设备的关联")]),s._v(" "),e("p",[e("strong",[s._v("注意：由于实验楼的环境限制，losetup 命令无法进行操作，可以简单了解这些步骤。")])]),s._v(" "),e("p",[s._v("同样因为环境原因中没有物理磁盘，也没有 loop device 的原因我们就无法实验练习使用该命令了，下面我将以我的物理主机为例讲解。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" losetup /dev/loop0 virtual.img\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 如果提示设备忙你也可以使用其它的回环设备，"ls /dev/loop*"参看所有回环设备')]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解除设备关联")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" losetup -d /dev/loop0\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("然后再使用 "),e("code",[s._v("mkfs")]),s._v(" 格式化各分区（前面我们是格式化整个虚拟磁盘镜像文件或磁盘），不过格式化之前，我们还要为各分区建立虚拟设备的映射，用到 "),e("code",[s._v("kpartx")]),s._v(" 工具，需要先安装：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" kpartx\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" kpartx -av /dev/loop0\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 取消映射")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" kpartx -dv /dev/loop0\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[e("img",{attrs:{src:t(602),alt:"image-20220531195321461"}})]),s._v(" "),e("p",[s._v("接着再是格式化，我们将其全部格式化为 ext4：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" mkfs.ext4 -q /dev/mapper/loop0p1\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" mkfs.ext4 -q /dev/mapper/loop0p5\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" mkfs.ext4 -q /dev/mapper/loop0p6\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("格式化完成后在 "),e("code",[s._v("/media")]),s._v(" 目录下新建四个空目录用于挂载虚拟磁盘：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /media/virtualdisk_"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 挂载磁盘分区")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" /dev/mapper/loop0p1 /media/virtualdisk_1\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" /dev/mapper/loop0p5 /media/virtualdisk_2\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" /dev/mapper/loop0p6 /media/virtualdisk_3\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 卸载磁盘分区")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("umount")]),s._v(" /dev/mapper/loop0p1\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("umount")]),s._v(" /dev/mapper/loop0p5\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("umount")]),s._v(" /dev/mapper/loop0p6\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("p",[s._v("然后：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("df")]),s._v(" -h\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:t(603),alt:"image-20220531195326713"}})])])}),[],!1,null,null,null);a.default=n.exports},589:function(s,a,t){s.exports=t.p+"assets/img/image-20220531195203435.18de50a6.png"},590:function(s,a,t){s.exports=t.p+"assets/img/image-20220531195210571.5a7ac9a3.png"},591:function(s,a,t){s.exports=t.p+"assets/img/image-20220531195216391.67a6e291.png"},592:function(s,a,t){s.exports=t.p+"assets/img/image-20220531195222379.4a41b104.png"},593:function(s,a,t){s.exports=t.p+"assets/img/document-uid735639labid62timestamp1532339776332.c4e988f6.png"},594:function(s,a,t){s.exports=t.p+"assets/img/document-uid735639labid62timestamp1532339755321.51386eb9.png"},595:function(s,a,t){s.exports=t.p+"assets/img/image-20220531195240491.cb5bd9ff.png"},596:function(s,a,t){s.exports=t.p+"assets/img/image-20220531195245231.770e9b88.png"},597:function(s,a,t){s.exports=t.p+"assets/img/image-20220531195250642.6f1bcbc5.png"},598:function(s,a,t){s.exports=t.p+"assets/img/image-20220531195257644.15a3e6f9.png"},599:function(s,a,t){s.exports=t.p+"assets/img/image-20220531195303646.64e3e185.png"},600:function(s,a,t){s.exports=t.p+"assets/img/image-20220531195309515.dd8b1443.png"},601:function(s,a,t){s.exports=t.p+"assets/img/image-20220531195315543.eca0353e.png"},602:function(s,a,t){s.exports=t.p+"assets/img/image-20220531195321461.ae1d88c7.png"},603:function(s,a,t){s.exports=t.p+"assets/img/image-20220531195326713.3323d1f4.png"}}]);