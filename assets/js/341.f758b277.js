(window.webpackJsonp=window.webpackJsonp||[]).push([[341],{1698:function(t,s,a){"use strict";a.r(s);var n=a(65),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"浮动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浮动"}},[t._v("#")]),t._v(" 浮动")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#浮动的作用"}},[t._v("浮动的作用")])]),a("li",[a("a",{attrs:{href:"#浮动的代码"}},[t._v("浮动的代码")])]),a("li",[a("a",{attrs:{href:"#浮动的特点"}},[t._v("浮动的特点")])]),a("li",[a("a",{attrs:{href:"#清除浮动的介绍"}},[t._v("清除浮动的介绍")])]),a("li",[a("a",{attrs:{href:"#清除浮动的方法"}},[t._v("清除浮动的方法")]),a("ul",[a("li",[a("a",{attrs:{href:"#直接设置父元素高度"}},[t._v("直接设置父元素高度")])]),a("li",[a("a",{attrs:{href:"#额外标签法"}},[t._v("额外标签法")])]),a("li",[a("a",{attrs:{href:"#单伪元素清除法"}},[t._v("单伪元素清除法")])]),a("li",[a("a",{attrs:{href:"#双伪元素清除法"}},[t._v("双伪元素清除法")])]),a("li",[a("a",{attrs:{href:"#给父元素设置overflow-hidden"}},[t._v("给父元素设置overflow:hidden")])])])])])]),a("p"),t._v(" "),a("h1",{attrs:{id:"结构伪类选择器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结构伪类选择器"}},[t._v("#")]),t._v(" 结构伪类选择器")]),t._v(" "),a("ol",[a("li",[t._v("作用与优势:")])]),t._v(" "),a("ul",[a("li",[t._v("作用:根据元素在HTML中的结构关系查找元素")]),t._v(" "),a("li",[t._v("优势:减少对于HTML中类的依赖,有利于保持代码整洁")]),t._v(" "),a("li",[t._v("场景:常用于查找某父级选择器中的子元素")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[t._v("选择器")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("选择器")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("E:first-child{}")])]),t._v(" "),a("td",[t._v("匹配父元素中的第一个子元素,并且是E元素")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("E:last-child{}")])]),t._v(" "),a("td",[t._v("匹配父元素中最后一个子元素,并且是E元素")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("E:nth-child(n) {}")])]),t._v(" "),a("td",[t._v("匹配父元素中第n个子元素,并且是E元素")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("E:nth-last-child(n){}")])]),t._v(" "),a("td",[t._v("匹配父元素中倒数第n个子元素,并且是E元素")])])])]),t._v(" "),a("p",[a("strong",[t._v("注意点")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("n为:0,1,2,3,4,...")])]),t._v(" "),a("li",[a("p",[t._v("通过n可以组成常见公式")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("功能")]),t._v(" "),a("th",[t._v("公式")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("偶数")]),t._v(" "),a("td",[t._v("2n,even")])]),t._v(" "),a("tr",[a("td",[t._v("奇数")]),t._v(" "),a("td",[t._v("2n+1,2n-1,odd")])]),t._v(" "),a("tr",[a("td",[t._v("找到前5个")]),t._v(" "),a("td",[t._v("-n+5")])]),t._v(" "),a("tr",[a("td",[t._v("找到从第5个往后")]),t._v(" "),a("td",[t._v("n+5")])])])])])])])]),t._v(" "),a("h1",{attrs:{id:"伪元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#伪元素"}},[t._v("#")]),t._v(" 伪元素")]),t._v(" "),a("p",[t._v("伪元素:一般页面中的非主体元素内容可以使用伪元素")]),t._v(" "),a("p",[t._v("区别:")]),t._v(" "),a("ol",[a("li",[t._v("元素:HTML设置的标签")]),t._v(" "),a("li",[t._v("伪元素:由CSS模拟出的标签效果")])]),t._v(" "),a("p",[t._v("种类:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("伪元素")]),t._v(" "),a("th",[t._v("作用")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("::before")])]),t._v(" "),a("td",[t._v("在父元素内容的最前添加一个伪元素")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("::after")])]),t._v(" "),a("td",[t._v("在父元素内容的最后添加一个伪元素")])])])]),t._v(" "),a("p",[t._v("注意点:")]),t._v(" "),a("ol",[a("li",[t._v("必须设置content属性才能生效")]),t._v(" "),a("li",[t._v("伪元素默认是行内元素")])]),t._v(" "),a("h1",{attrs:{id:"标准流-文档流-文件流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标准流-文档流-文件流"}},[t._v("#")]),t._v(" 标准流--文档流(文件流)")]),t._v(" "),a("p",[t._v("标准流:又称文件流,是浏览器在渲染显示网页内容时默认采用的一套排版规则,规定了应该以何种方式排列元素")]),t._v(" "),a("p",[t._v("常见标准流排版规则:")]),t._v(" "),a("ol",[a("li",[t._v("块级元素:从上往下,"),a("strong",[t._v("垂直布局")]),t._v(",独占一行")]),t._v(" "),a("li",[t._v("行内元素或行内块元素:从左往右,"),a("strong",[t._v("水平布局")]),t._v(",空间不够自动拆行")])]),t._v(" "),a("h1",{attrs:{id:"浮动-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浮动-2"}},[t._v("#")]),t._v(" 浮动")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("格式: float:left/right;")])]),t._v(" "),a("li",[a("p",[t._v("显示特点: 脱离文档流, 元素从当前所在行向左或向右浮动, 当撞到上级元素边缘或其它浮动元素时停止.")])]),t._v(" "),a("li",[a("p",[t._v("浮动元素如果一行装不下会自动换行, 换行时有可能被卡住")])]),t._v(" "),a("li",[a("p",[t._v("当元素的所有子元素全部浮动时自动识别的高度为0 给元素添加overflow:hidden解决")])]),t._v(" "),a("li",[a("p",[t._v("应用场景: 将纵向排列的元素改成横向排列")])])]),t._v(" "),a("h2",{attrs:{id:"浮动的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浮动的作用"}},[t._v("#")]),t._v(" 浮动的作用")]),t._v(" "),a("p",[t._v("让垂直布局的盒子变成水平布局")]),t._v(" "),a("h2",{attrs:{id:"浮动的代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浮动的代码"}},[t._v("#")]),t._v(" 浮动的代码")]),t._v(" "),a("p",[t._v("属性名:float")]),t._v(" "),a("p",[t._v("属性值:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("属性名")]),t._v(" "),a("th",[t._v("效果")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("left")]),t._v(" "),a("td",[t._v("左浮动")])]),t._v(" "),a("tr",[a("td",[t._v("right")]),t._v(" "),a("td",[t._v("右浮动")])])])]),t._v(" "),a("h2",{attrs:{id:"浮动的特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浮动的特点"}},[t._v("#")]),t._v(" 浮动的特点")]),t._v(" "),a("ol",[a("li",[t._v("浮动元素会脱离标准流(简称:脱标),在标准流中不占位置---相当于从地面飘到了空中")]),t._v(" "),a("li",[t._v("浮动元素比标准流高半个级别,可以覆盖标准流中的元素")]),t._v(" "),a("li",[t._v("浮动找浮动,下一个浮动元素会在上一个浮动元素后面左右浮动")]),t._v(" "),a("li",[t._v("浮动元素会受到上面元素边界的影响")]),t._v(" "),a("li",[t._v("浮动元素有特殊的显示效果\n"),a("ul",[a("li",[t._v("一行可以显示多个")]),t._v(" "),a("li",[t._v("可以设置宽高")])])])]),t._v(" "),a("p",[t._v("注意点:浮动的元素不能通过"),a("code",[t._v("text-align:center")]),t._v("或者"),a("code",[t._v("margin:0 auto")]),t._v(",让浮动元素本身水平居中")]),t._v(" "),a("h1",{attrs:{id:"清除浮动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#清除浮动"}},[t._v("#")]),t._v(" 清除浮动")]),t._v(" "),a("h2",{attrs:{id:"清除浮动的介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#清除浮动的介绍"}},[t._v("#")]),t._v(" 清除浮动的介绍")]),t._v(" "),a("p",[t._v("含义:"),a("strong",[t._v("清除浮动带来的影响")])]),t._v(" "),a("p",[t._v("影响:如果子元素浮动了,此时子元素不能撑开标准流的块级父元素")]),t._v(" "),a("p",[t._v("原因:子元素浮动后脱标--\x3e不占位置")]),t._v(" "),a("p",[t._v("目的:需要父元素有高度,从而不影响其他网页元素的布局")]),t._v(" "),a("h2",{attrs:{id:"清除浮动的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#清除浮动的方法"}},[t._v("#")]),t._v(" 清除浮动的方法")]),t._v(" "),a("h3",{attrs:{id:"直接设置父元素高度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#直接设置父元素高度"}},[t._v("#")]),t._v(" 直接设置父元素高度")]),t._v(" "),a("p",[t._v("特点:简单粗暴,方便")]),t._v(" "),a("p",[t._v("缺点:有些布局中不能固定父元素高度.如:新闻列表,京东推荐模块")]),t._v(" "),a("h3",{attrs:{id:"额外标签法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#额外标签法"}},[t._v("#")]),t._v(" 额外标签法")]),t._v(" "),a("p",[t._v("操作:")]),t._v(" "),a("ol",[a("li",[t._v("在父元素内容的最后添加一个块级元素")]),t._v(" "),a("li",[t._v("给添加的块级元素设置"),a("code",[t._v("clear:both")])])]),t._v(" "),a("p",[t._v("特点:缺点--会在页面中添加额外的标签,会让页面的HTML结构变得复杂")]),t._v(" "),a("h3",{attrs:{id:"单伪元素清除法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单伪元素清除法"}},[t._v("#")]),t._v(" 单伪元素清除法")]),t._v(" "),a("p",[t._v("操作:用伪元素替代了额外标签")]),t._v(" "),a("p",[t._v("特点:优点--项目中使用,直接给标签加类即可清除浮动")]),t._v(" "),a("h3",{attrs:{id:"双伪元素清除法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#双伪元素清除法"}},[t._v("#")]),t._v(" 双伪元素清除法")]),t._v(" "),a("p",[t._v("特点:优点--项目中使用,直接给标签加类即可清除浮动")]),t._v(" "),a("h3",{attrs:{id:"给父元素设置overflow-hidden"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#给父元素设置overflow-hidden"}},[t._v("#")]),t._v(" 给父元素设置overflow:hidden")]),t._v(" "),a("p",[t._v("操作:")]),t._v(" "),a("ol",[a("li",[t._v("直接给父元素设置"),a("code",[t._v("overflow:hidden")])])]),t._v(" "),a("p",[t._v("特点:优点---方便")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token doctype"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<!")]),a("span",{pre:!0,attrs:{class:"token doctype-tag"}},[t._v("DOCTYPE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token name"}},[t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("en"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("charset")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("UTF-8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Title"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n        "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("body>div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*当元素的所有子元素全部浮动时 自动识别的高度为0 后面的\n            元素会顶上来导致显示异常,添加overflow:hidden解决此异常*/")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#d1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("float")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#d2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" green"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("float")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#d3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("float")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    ")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("d1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("d2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("d3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br"),a("span",{staticClass:"line-number"},[t._v("41")]),a("br"),a("span",{staticClass:"line-number"},[t._v("42")]),a("br"),a("span",{staticClass:"line-number"},[t._v("43")]),a("br"),a("span",{staticClass:"line-number"},[t._v("44")]),a("br"),a("span",{staticClass:"line-number"},[t._v("45")]),a("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);