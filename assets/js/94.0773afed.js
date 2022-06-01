(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{1347:function(t,a,v){"use strict";v.r(a);var _=v(24),r=Object(_.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"notebook环境使用指南"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#notebook环境使用指南"}},[t._v("#")]),t._v(" Notebook环境使用指南")]),t._v(" "),_("p"),_("div",{staticClass:"table-of-contents"},[_("ul",[_("li",[_("a",{attrs:{href:"#ipython"}},[t._v("IPython")])]),_("li",[_("a",{attrs:{href:"#单元格的两种模式"}},[t._v("单元格的两种模式")])]),_("li",[_("a",{attrs:{href:"#单元格菜单栏"}},[t._v("单元格菜单栏")])]),_("li",[_("a",{attrs:{href:"#运行代码"}},[t._v("运行代码")])]),_("li",[_("a",{attrs:{href:"#单元格执行顺序"}},[t._v("单元格执行顺序")])]),_("li",[_("a",{attrs:{href:"#代码补全"}},[t._v("代码补全")])]),_("li",[_("a",{attrs:{href:"#函数使用建议"}},[t._v("函数使用建议")])]),_("li",[_("a",{attrs:{href:"#单元格的执行状态"}},[t._v("单元格的执行状态")])]),_("li",[_("a",{attrs:{href:"#重启内核"}},[t._v("重启内核")])]),_("li",[_("a",{attrs:{href:"#强制终止"}},[t._v("强制终止")])]),_("li",[_("a",{attrs:{href:"#快捷键"}},[t._v("快捷键")])])])]),_("p"),t._v(" "),_("h2",{attrs:{id:"ipython"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ipython"}},[t._v("#")]),t._v(" IPython")]),t._v(" "),_("p",[t._v("基于 Python 的交互式解释器。相较于原生的 Python Shell，IPython 提供了更为强大的编辑和交互功能。")]),t._v(" "),_("h2",{attrs:{id:"单元格的两种模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#单元格的两种模式"}},[t._v("#")]),t._v(" 单元格的两种模式")]),t._v(" "),_("p",[t._v("每一个单元格会有两种模式，分别是 Markdown（文本） 和 Code（代码）。")]),t._v(" "),_("p",[t._v("如何判断一个单元格是 Markdown 单元格，还是 Code 单元格？一般有两种方式。首先，选中之后的单元格右上角会出现一个菜单栏，绿色高亮的按钮就代表当前单元格的模式。上图中，就是一个典型的 Markdown 单元格。")]),t._v(" "),_("p",[t._v("除此之外，更简单的方法就是观察单元格的背景色。如下图所示，我们将 Code 单元格的背景色设置成为黑色，而 Markdown 单元格的背景则为白色。")]),t._v(" "),_("p",[_("img",{attrs:{src:v(657),alt:"输入图片描述"}})]),t._v(" "),_("h2",{attrs:{id:"单元格菜单栏"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#单元格菜单栏"}},[t._v("#")]),t._v(" 单元格菜单栏")]),t._v(" "),_("p",[t._v("上面提到了单元格右上角的菜单栏。如下图所示，菜单栏中包含了针对单元格常见的 4 种操作。")]),t._v(" "),_("p",[_("img",{attrs:{src:v(658),alt:"输入图片描述"}})]),t._v(" "),_("h2",{attrs:{id:"运行代码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#运行代码"}},[t._v("#")]),t._v(" 运行代码")]),t._v(" "),_("p",[t._v("当前，这一切都是在 Code 单元格中完成。如下图所示，当你在 Code 单元格中书写 "),_("code",[t._v("print('hello, world!')")]),t._v(" 时，点击左侧的运行按钮 ▶，相应的代码就会立即执行，并在单元格的下方显示输出内容。")]),t._v(" "),_("p",[t._v("当你需要执行一个单元格时，也可以通过快捷键 "),_("code",[t._v("Shift + Enter")]),t._v(" 来运行。使用快捷键的好处是你的双手不需要离开键盘。")]),t._v(" "),_("p",[t._v("如果你一不小心双击了相应单元格进入到编辑状态。不用担心，选中相应单元格，并同样使用快捷键 "),_("code",[t._v("Shift + Enter")]),t._v(" 执行，就可以恢复到先前的状态。")]),t._v(" "),_("h2",{attrs:{id:"单元格执行顺序"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#单元格执行顺序"}},[t._v("#")]),t._v(" 单元格执行顺序")]),t._v(" "),_("p",[t._v("无论是 Markdown 单元格，还是 Code 单元格，它们在课程中都是按照从上到下的顺序依次执行的。后面的单元格需要等待前面的单元格执行完成后，才能继续执行。执行完成的单元格左侧会出现 "),_("code",[t._v("In [序号]")]),t._v(" 的标志.")]),t._v(" "),_("h2",{attrs:{id:"代码补全"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#代码补全"}},[t._v("#")]),t._v(" 代码补全")]),t._v(" "),_("p",[t._v("当你运行了 "),_("code",[t._v("import numpy as np")]),t._v("，才能够使用 Tab 键自动补全 "),_("code",[t._v("np.")]),t._v(" 下面的类和相关函数。")]),t._v(" "),_("h2",{attrs:{id:"函数使用建议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#函数使用建议"}},[t._v("#")]),t._v(" 函数使用建议")]),t._v(" "),_("p",[t._v("对于一个陌生的函数不够了解，那么可以通过 "),_("code",[t._v("shift + tab")]),t._v(" 快捷键查看使用建议。")]),t._v(" "),_("h2",{attrs:{id:"单元格的执行状态"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#单元格的执行状态"}},[t._v("#")]),t._v(" 单元格的执行状态")]),t._v(" "),_("p",[t._v("通过页面右上角的 Kernel 状态指示器判断内核占用情况。如果 Python 字符右边出现了实心圆圈 ◉，代表内核处于占有状态。而空心圆圈 ◯ 则代表内核处于空闲状态。当然，也可能出现链接断开的符号，那就代表着内核已经断开链接，你可能需要刷新页面.")]),t._v(" "),_("h2",{attrs:{id:"重启内核"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#重启内核"}},[t._v("#")]),t._v(" 重启内核")]),t._v(" "),_("p",[t._v("有些时候，当你在运行复杂的代码时，可能会造成实验环境资源占用大而 Notebook 出现「假死」的现象。在遇到这种情况时，你可能不希望重新关闭再打开实验，那么可以执行「重启 Notebook 内核」操作。")]),t._v(" "),_("p",[t._v("重启内核的按钮在环境的顶部，点击刷新样式按钮后会弹出确认对话框，点击 Restart 即可。")]),t._v(" "),_("p",[t._v("如果重启完内核后，执行上方单元格会报错 "),_("code",[t._v("NameError")]),t._v("。原因在于重启内核后之前全部的单元格运行状态都会重置，即上文中我们赋值过的变量 "),_("code",[t._v("a")]),t._v(" 又会回到未赋值状态。现在你应该明白重启内核的作用和影响了吧。")]),t._v(" "),_("h2",{attrs:{id:"强制终止"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#强制终止"}},[t._v("#")]),t._v(" 强制终止")]),t._v(" "),_("p",[t._v("有的时候，如果代码运行时间过长，或者陷入死循环，我们会想到强制终止单元格的运行状态。此时，顶部的 终止按钮就发挥作用了。")]),t._v(" "),_("h2",{attrs:{id:"快捷键"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#快捷键"}},[t._v("#")]),t._v(" 快捷键")]),t._v(" "),_("p",[t._v("为了提高 Jupyter Notebook 的使用效率，其提供了一系列快捷键，我们挑选了常用的几个总结如下：")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("B")]),t._v("：在当前单元格下方新建空白单元格。")]),t._v(" "),_("li",[_("code",[t._v("M")]),t._v("：将单元格格式转换为 Markdown。")]),t._v(" "),_("li",[_("code",[t._v("Y")]),t._v("：将单元格格式转换为 Code。")]),t._v(" "),_("li",[t._v("连续按  "),_("code",[t._v("D")]),t._v("+"),_("code",[t._v("D")]),t._v("：删除当前单元格。（慎用，推荐使用按下 X 剪切单元格代替，因为其可以起到删除效果，且删错了还可以按 V 粘贴回来）")]),t._v(" "),_("li",[_("code",[t._v("Shift + Enter")]),t._v("：运行当前单元格内容。（当 Markdown 单元格处于编辑状态时，运行即可复原）")])]),t._v(" "),_("p",[t._v("请注意，所有快捷键触发式，需保证单元格处于选中状态，而非编辑状态。")])])}),[],!1,null,null,null);a.default=r.exports},657:function(t,a,v){t.exports=v.p+"assets/img/20220218140954.588688d9.png"},658:function(t,a,v){t.exports=v.p+"assets/img/20220218141205.e5d70032.png"}}]);