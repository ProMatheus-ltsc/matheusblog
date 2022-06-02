(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{1384:function(s,t,a){"use strict";a.r(t);var e=a(24),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"文本处理命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文本处理命令"}},[s._v("#")]),s._v(" 文本处理命令")]),s._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#tr-命令"}},[s._v("tr 命令")])]),e("li",[e("a",{attrs:{href:"#col-命令"}},[s._v("col 命令")])]),e("li",[e("a",{attrs:{href:"#join-命令"}},[s._v("join 命令")])]),e("li",[e("a",{attrs:{href:"#paste-命令"}},[s._v("paste 命令")])])])]),e("p"),s._v(" "),e("h3",{attrs:{id:"tr-命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tr-命令"}},[s._v("#")]),s._v(" tr 命令")]),s._v(" "),e("p",[s._v("tr 命令可以用来删除一段文本信息中的某些文字。或者将其进行转换。")]),s._v(" "),e("h4",{attrs:{id:"使用方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用方式"}},[s._v("#")]),s._v(" 使用方式")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tr")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("option"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".SET1 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("SET2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"常用的选项有"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用的选项有"}},[s._v("#")]),s._v(" 常用的选项有")]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("选项")]),s._v(" "),e("th",[s._v("说明")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[e("code",[s._v("-d")])]),s._v(" "),e("td",[s._v("删除和 set1 匹配的字符，注意不是全词匹配也不是按字符顺序匹配")])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("-s")])]),s._v(" "),e("td",[s._v("去除 set1 指定的在输入文本中连续并重复的字符")])])])]),s._v(" "),e("h4",{attrs:{id:"操作举例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#操作举例"}},[s._v("#")]),s._v(" 操作举例")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除 \"hello shiyanlou\" 中所有的'o'，'l'，'h'")]),s._v("\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello shiyanlou'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tr")]),s._v(" -d "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'olh'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 将"hello" 中的ll，去重为一个l')]),s._v("\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tr")]),s._v(" -s "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'l'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将输入文本，全部转换为大写或小写输出")]),s._v("\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'input some text here'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tr")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[:lower:]'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[:upper:]'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 上面的'[:lower:]' '[:upper:]'你也可以简单的写作'[a-z]' '[A-Z]'，当然反过来将大写变小写也是可以的")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[e("img",{attrs:{src:a(534),alt:"image-20220531195707533"}})]),s._v(" "),e("p",[s._v("更多 tr 的使用，你可以使用"),e("code",[s._v("--help")]),s._v("或者"),e("code",[s._v("man tr")]),s._v("获得。")]),s._v(" "),e("h3",{attrs:{id:"col-命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#col-命令"}},[s._v("#")]),s._v(" col 命令")]),s._v(" "),e("p",[s._v("col 命令可以将"),e("code",[s._v("Tab")]),s._v("换成对等数量的空格键，或反转这个操作。")]),s._v(" "),e("h4",{attrs:{id:"使用方式-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用方式-2"}},[s._v("#")]),s._v(" 使用方式")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("col "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("option"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"常用的选项有-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用的选项有-2"}},[s._v("#")]),s._v(" 常用的选项有")]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("选项")]),s._v(" "),e("th",[s._v("说明")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[e("code",[s._v("-x")])]),s._v(" "),e("td",[s._v("将"),e("code",[s._v("Tab")]),s._v("转换为空格")])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("-h")])]),s._v(" "),e("td",[s._v("将空格转换为"),e("code",[s._v("Tab")]),s._v("（默认选项）")])])])]),s._v(" "),e("h4",{attrs:{id:"操作举例-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#操作举例-2"}},[s._v("#")]),s._v(" 操作举例")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看 /etc/protocols 中的不可见字符，可以看到很多 ^I ，这其实就是 Tab 转义成可见字符的符号")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" -A /etc/protocols\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用 col -x 将 /etc/protocols 中的 Tab 转换为空格，然后再使用 cat 查看，你发现 ^I 不见了")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/protocols "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" col -x "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" -A\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[e("img",{attrs:{src:a(535),alt:"image-20220531195713201"}})]),s._v(" "),e("h3",{attrs:{id:"join-命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#join-命令"}},[s._v("#")]),s._v(" join 命令")]),s._v(" "),e("p",[s._v("学过数据库的用户对这个应该不会陌生，这个命令就是用于将两个文件中包含相同内容的那一行合并在一起。")]),s._v(" "),e("h4",{attrs:{id:"使用方式-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用方式-3"}},[s._v("#")]),s._v(" 使用方式")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("option"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". file1 file2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"常用的选项有-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用的选项有-3"}},[s._v("#")]),s._v(" 常用的选项有")]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("选项")]),s._v(" "),e("th",[s._v("说明")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[e("code",[s._v("-t")])]),s._v(" "),e("td",[s._v("指定分隔符，默认为空格")])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("-i")])]),s._v(" "),e("td",[s._v("忽略大小写的差异")])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("-1")])]),s._v(" "),e("td",[s._v("指明第一个文件要用哪个字段来对比，默认对比第一个字段")])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("-2")])]),s._v(" "),e("td",[s._v("指明第二个文件要用哪个字段来对比，默认对比第一个字段")])])])]),s._v(" "),e("h4",{attrs:{id:"操作举例-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#操作举例-3"}},[s._v("#")]),s._v(" 操作举例")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/shiyanlou\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建两个文件")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1 hello'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" file1\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1 shiyanlou'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" file2\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" file1 file2\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将 /etc/passwd 与 /etc/shadow 两个文件合并，指定以':'作为分隔符")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" -t"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("':'")]),s._v(" /etc/passwd /etc/shadow\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将 /etc/passwd 与 /etc/group 两个文件合并，指定以':'作为分隔符，分别比对第4和第3个字段")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" -t"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("':'")]),s._v(" -1 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" /etc/passwd -2 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" /etc/group\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[e("img",{attrs:{src:a(536),alt:"image-20220531195722259"}})]),s._v(" "),e("p",[e("img",{attrs:{src:a(537),alt:"image-20220531195730724"}})]),s._v(" "),e("h3",{attrs:{id:"paste-命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#paste-命令"}},[s._v("#")]),s._v(" paste 命令")]),s._v(" "),e("p",[e("code",[s._v("paste")]),s._v("这个命令与"),e("code",[s._v("join")]),s._v(" 命令类似，它是在不对比数据的情况下，简单地将多个文件合并一起，以"),e("code",[s._v("Tab")]),s._v("隔开。")]),s._v(" "),e("h4",{attrs:{id:"使用方式-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用方式-4"}},[s._v("#")]),s._v(" 使用方式")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("paste")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("option"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" file"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"常用的选项有-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用的选项有-4"}},[s._v("#")]),s._v(" 常用的选项有")]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("选项")]),s._v(" "),e("th",[s._v("说明")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[e("code",[s._v("-d")])]),s._v(" "),e("td",[s._v("指定合并的分隔符，默认为 Tab")])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("-s")])]),s._v(" "),e("td",[s._v("不合并到一行，每个文件为一行")])])])]),s._v(" "),e("h4",{attrs:{id:"操作举例-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#操作举例-4"}},[s._v("#")]),s._v(" 操作举例")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" hello "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" file1\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" shiyanlou "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" file2\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" www.shiyanlou.com "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" file3\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("paste")]),s._v(" -d "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("':'")]),s._v(" file1 file2 file3\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("paste")]),s._v(" -s file1 file2 file3\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[e("img",{attrs:{src:a(538),alt:"image-20220531195737359"}})])])}),[],!1,null,null,null);t.default=n.exports},534:function(s,t,a){s.exports=a.p+"assets/img/image-20220531195707533.29677164.png"},535:function(s,t,a){s.exports=a.p+"assets/img/image-20220531195713201.5638c039.png"},536:function(s,t,a){s.exports=a.p+"assets/img/image-20220531195722259.ea19e773.png"},537:function(s,t,a){s.exports=a.p+"assets/img/image-20220531195730724.4d8179dd.png"},538:function(s,t,a){s.exports=a.p+"assets/img/image-20220531195737359.7724b298.png"}}]);