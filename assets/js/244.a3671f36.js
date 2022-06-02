(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{1525:function(e,t,n){"use strict";n.r(t);var r=n(24),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"chapter-9-general-programming-通用程序设计"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#chapter-9-general-programming-通用程序设计"}},[e._v("#")]),e._v(" Chapter 9. General Programming（通用程序设计）")]),e._v(" "),n("h3",{attrs:{id:"item-63-beware-the-performance-of-string-concatenation-当心字符串连接引起的性能问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#item-63-beware-the-performance-of-string-concatenation-当心字符串连接引起的性能问题"}},[e._v("#")]),e._v(" Item 63: Beware the performance of string concatenation（当心字符串连接引起的性能问题）")]),e._v(" "),n("p",[e._v("The string concatenation operator (+) is a convenient way to combine a few strings into one. It is fine for generating a single line of output or constructing the string representation of a small, fixed-size object, but it does not scale. Using "),n("strong",[e._v("the string concatenation operator repeatedly to concatenate n strings requires time quadratic in n.")]),e._v(" This is an unfortunate consequence of the fact that strings are immutable (Item 17). When two strings are concatenated, the contents of both are copied.")]),e._v(" "),n("p",[e._v("字符串连接操作符 "),n("code",[e._v("(+)")]),e._v(" 是将几个字符串组合成一个字符串的简便方法。对于生成单行输出或构造一个小的、固定大小的对象的字符串表示形式，它是可以的，但是它不能伸缩。使用 "),n("strong",[e._v("字符串串联运算符重复串联 n 个字符串需要 n 的平方级时间。")]),e._v(" 这是字符串不可变这一事实导致的结果（"),n("RouterLink",{attrs:{to:"/Chapter-4/Chapter-4-Item-17-Minimize-mutability.html"}},[e._v("Item-17")]),e._v("）。当连接两个字符串时，将复制这两个字符串的内容。")],1),e._v(" "),n("p",[e._v("For example, consider this method, which constructs the string representation of a billing statement by repeatedly concatenating a line for each item:")]),e._v(" "),n("p",[e._v("例如，考虑这个方法，它通过将每个账单项目重复连接到一行来构造账单语句的字符串表示：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// Inappropriate use of string concatenation - Performs poorly!\npublic String statement() {\n    String result = "";\n    for (int i = 0; i < numItems(); i++)\n        result += lineForItem(i); // String concatenation\n    return result;\n}\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br")])]),n("p",[e._v("The method performs abysmally if the number of items is large. "),n("strong",[e._v("To achieve acceptable performance, use a StringBuilder in place of a String")]),e._v(" to store the statement under construction:")]),e._v(" "),n("p",[e._v("如果项的数量很大，则该方法的性能非常糟糕。"),n("strong",[e._v("要获得能接受的性能，请使用 StringBuilder 代替 String")]),e._v(" 来存储正在构建的语句：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("public String statement() {\n    StringBuilder b = new StringBuilder(numItems() * LINE_WIDTH);\n    for (int i = 0; i < numItems(); i++)\n        b.append(lineForItem(i));\n    return b.toString();\n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br")])]),n("p",[e._v("A lot of work has gone into making string concatenation faster since Java 6, but the difference in the performance of the two methods is still dramatic: If numItems returns 100 and lineForItem returns an 80-character string, the second method runs 6.5 times faster than the first on my machine. Because the first method is quadratic in the number of items and the second is linear, the performance difference gets much larger as the number of items grows. Note that the second method preallocates a StringBuilder large enough to hold the entire result, eliminating the need for automatic growth. Even if it is detuned to use a default-sized StringBuilder, it is still 5.5 times faster than the first method.")]),e._v(" "),n("p",[e._v("自 Java 6 以来，为了使字符串连接更快，已经做了大量工作，但是这两个方法在性能上的差异仍然很大：如果 numItems 返回 100，lineForItem 返回 80 个字符串，那么第二个方法在我的机器上运行的速度是第一个方法的 6.5 倍。由于第一种方法在项目数量上是平方级的，而第二种方法是线性的，所以随着项目数量的增加，性能差异会变得越来越大。注意，第二个方法预先分配了一个足够大的 StringBuilder 来保存整个结果，从而消除了自动增长的需要。即使使用默认大小的 StringBuilder，它仍然比第一个方法快 5.5 倍。")]),e._v(" "),n("p",[e._v("The moral is simple: "),n("strong",[e._v("Don’t use the string concatenation operator to combine more than a few strings")]),e._v(" unless performance is irrelevant. Use StringBuilder’s append method instead. Alternatively, use a character array, or process the strings one at a time instead of combining them.")]),e._v(" "),n("p",[e._v("道理很简单："),n("strong",[e._v("不要使用字符串连接操作符合并多个字符串")]),e._v("，除非性能无关紧要。否则使用 StringBuilder 的 append 方法。或者，使用字符数组，再或者一次只处理一个字符串，而不是组合它们。")])])}),[],!1,null,null,null);t.default=a.exports}}]);