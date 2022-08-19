(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{1457:function(s,t,a){"use strict";a.r(t);var n=a(65),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"查询-索引与聚合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询-索引与聚合"}},[s._v("#")]),s._v(" 查询, 索引与聚合")]),s._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#_1开发准备"}},[s._v("1开发准备")]),a("ul",[a("li",[a("a",{attrs:{href:"#_1-初始化环境"}},[s._v("1 初始化环境")])])])]),a("li",[a("a",{attrs:{href:"#_2-查询语句-find"}},[s._v("2 查询语句 find()")]),a("ul",[a("li",[a("a",{attrs:{href:"#_1-1-条件操作符-1"}},[s._v("1.1 条件操作符 1")])]),a("li",[a("a",{attrs:{href:"#_1-2-条件操作符-2"}},[s._v("1.2 条件操作符 2")])]),a("li",[a("a",{attrs:{href:"#_1-3-limit-与-skip"}},[s._v("1.3 limit() 与 skip()")])]),a("li",[a("a",{attrs:{href:"#_1-4-mongodb-排序-sort"}},[s._v("1.4 MongoDB 排序 sort()")])])])]),a("li",[a("a",{attrs:{href:"#_3-索引-ensureindex"}},[s._v("3 索引 ensureIndex()")])]),a("li",[a("a",{attrs:{href:"#_4-聚合-aggregate"}},[s._v("4 聚合 aggregate()")]),a("ul",[a("li",[a("a",{attrs:{href:"#_1-聚合表达式"}},[s._v("1 聚合表达式")])]),a("li",[a("a",{attrs:{href:"#_2-管道"}},[s._v("2 管道")])])])])])]),a("p"),s._v(" "),a("h2",{attrs:{id:"_1开发准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1开发准备"}},[s._v("#")]),s._v(" 1开发准备")]),s._v(" "),a("h3",{attrs:{id:"_1-初始化环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-初始化环境"}},[s._v("#")]),s._v(" 1 初始化环境")]),s._v(" "),a("p",[s._v("启动 MongoDB 服务，因为 MongoDB 并不随系统一起启动，可能以下命令运行后会等一小段的时间才会启动完毕。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mongodb start\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("进入 MongoDB 命令行操作界面，在命令行中敲"),a("strong",[s._v("exit")]),s._v("可以退出。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("mongo\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("实验中的布尔类型的 ture 用 1 代替，false 用 0 代替。")]),s._v(" "),a("h4",{attrs:{id:"_2-初始化-mongodb-数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-初始化-mongodb-数据库"}},[s._v("#")]),s._v(" 2 初始化 MongoDB 数据库")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" use Chenshi\nswitched to db Chenshi\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.createCollection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shiyanlou"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#无参数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ok"')]),s._v(":1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show collections\nshiyanlou\nsystem.indexes\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("userdoc1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user_id"')]),s._v(":1,"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cloud"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"state"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"active"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"actor"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"e-mail"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test@qq.com"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"VM_num"')]),s._v(":2,"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"time"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"date"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2014-08-12"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hour"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10:53 PM"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("userdoc2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user_id"')]),s._v(":2,"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"testadmin"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"state"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"active"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"actor"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"admin"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"e-mail"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test@qq.com"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"VM_num"')]),s._v(":2,"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"time"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"date"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2014-08-11"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hour"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"06:34 AM"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("doc")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"peter"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"position"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"teacher"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.shiyanlou.insert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("userdoc1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nWriteResult"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nInserted"')]),s._v(":1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.shiyanlou.insert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("userdoc2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nWriteResult"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nInserted"')]),s._v(":1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.shiyanlou.insert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("doc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nWriteResult"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nInserted"')]),s._v(":1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("h2",{attrs:{id:"_2-查询语句-find"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-查询语句-find"}},[s._v("#")]),s._v(" 2 查询语句 find()")]),s._v(" "),a("p",[s._v("查询语句："),a("code",[s._v("db.COLLECTION_NAME.find(Parameter)")])]),s._v(" "),a("p",[s._v("范例：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.shiyanlou.find"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这条指令用于查询 shiyanlou 集合中的全部文档信息，相当于 sqlite 中的 "),a("code",[s._v("SELECT * FROM TABLE_NAME")]),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"_1-1-条件操作符-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-条件操作符-1"}},[s._v("#")]),s._v(" 1.1 条件操作符 1")]),s._v(" "),a("p",[s._v("MongoDB 中的条件操作符有：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("$gt")]),s._v("：大于")]),s._v(" "),a("li",[a("code",[s._v("$lt")]),s._v("：小于")]),s._v(" "),a("li",[a("code",[s._v("$gte")]),s._v("：大于等于")]),s._v(" "),a("li",[a("code",[s._v("$lte")]),s._v("：小于等于")])]),s._v(" "),a("p",[s._v("范例：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.shiyanlou.find"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("user_id:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$gt")]),s._v(":1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.shiyanlou.find"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("user_id:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$lte")]),s._v(":2,"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$gt")]),s._v(":1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_1-2-条件操作符-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-条件操作符-2"}},[s._v("#")]),s._v(" 1.2 条件操作符 2")]),s._v(" "),a("p",[s._v("语法："),a("code",[s._v("$type:[key]")])]),s._v(" "),a("p",[s._v("可选的 key 值如下：")]),s._v(" "),a("ul",[a("li",[s._v("1: 双精度型(Double)")]),s._v(" "),a("li",[s._v("2: 字符串(String)")]),s._v(" "),a("li",[s._v("3: 对象(Object)")]),s._v(" "),a("li",[s._v("4: 数组(Array)")]),s._v(" "),a("li",[s._v("5: 二进制数据(Binary data)")]),s._v(" "),a("li",[s._v("7: 对象 ID(Object id)")]),s._v(" "),a("li",[s._v("8: 布尔类型(Boolean)")]),s._v(" "),a("li",[s._v("9: 日期(Date)")]),s._v(" "),a("li",[s._v("10: 空(Null)")]),s._v(" "),a("li",[s._v("11: 正则表达式(Regular Expression)")]),s._v(" "),a("li",[s._v("13: JS 代码(Javascript)")]),s._v(" "),a("li",[s._v("14: 符号(Symbol)")]),s._v(" "),a("li",[s._v("15: 有作用域的 JS 代码(JavaScript with scope)")]),s._v(" "),a("li",[s._v("16: 32 位整型数(32-bit integer)")]),s._v(" "),a("li",[s._v("17: 时间戳(Timestamp)")]),s._v(" "),a("li",[s._v("18: 64 位整型数(64-bit integer)")]),s._v(" "),a("li",[s._v("-1: 最小值(Min key)")]),s._v(" "),a("li",[s._v("127: 最大值(Max key)")])]),s._v(" "),a("p",[s._v("范例：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.shiyanlou.find"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$type")]),s._v(":2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("上面的命令是用于查找 name 是字符串的文档记录，它等同于下面的命令：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.shiyanlou.find"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$type")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'string'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_1-3-limit-与-skip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-limit-与-skip"}},[s._v("#")]),s._v(" 1.3 limit() 与 skip()")]),s._v(" "),a("p",[s._v("读取指定数量的数据记录 "),a("code",[s._v("limit()")]),s._v("。")]),s._v(" "),a("p",[s._v("范例：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.shiyanlou.find"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".limit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("读取一条记录，默认是排在最前面的那一条被读取。")]),s._v(" "),a("p",[s._v("读取时跳过指定数量的数据记录 "),a("code",[s._v("skip()")]),s._v("。")]),s._v(" "),a("p",[s._v("范例：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.shiyanlou.find"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".limit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".skip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("当然，还可以添加 find 的查找条件的参数，以便进行更精确的查找。")]),s._v(" "),a("h3",{attrs:{id:"_1-4-mongodb-排序-sort"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-mongodb-排序-sort"}},[s._v("#")]),s._v(" 1.4 MongoDB 排序 sort()")]),s._v(" "),a("p",[s._v("与 sqlite 中的排序一样有升序和降序，其中升序用 1 表示，降序用 -1 表示。")]),s._v(" "),a("p",[s._v("语法："),a("code",[s._v("db.COLLECTION_NAME.find().sort({KEY:1|-1})")])]),s._v(" "),a("p",[s._v("范例：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.shiyanlou.find"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".sort"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"time"')]),s._v(":1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_3-索引-ensureindex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-索引-ensureindex"}},[s._v("#")]),s._v(" 3 索引 ensureIndex()")]),s._v(" "),a("p",[s._v("索引通常能够极大的提高查询的效率，如果没有索引，MongoDB 在读取数据时必须扫描集合中的每个文件并选取那些符合查询条件的记录。这种扫描全集合的查询效率是非常低的，特别在处理大量的数据时，查询可能要花费几十秒甚至几分钟，这无疑对网站的性能是非常致命的。")]),s._v(" "),a("p",[s._v("索引是特殊的数据结构，索引存储在一个易于遍历读取的数据集合中，索引是对数据库集合中一个文档或多个文档的值进行排序的一种结构。")]),s._v(" "),a("p",[s._v("语法："),a("code",[s._v("db.COLLECTION_NAME.ensureIndex({KEY:1|-1})")])]),s._v(" "),a("p",[s._v("同样 1 代表升序，-1 代表降序。")]),s._v(" "),a("p",[s._v("范例：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.shiyanlou.ensureIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("code",[s._v("ensureIndex()")]),s._v(" 的可选参数：")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("background")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("建立索引要不要阻塞其他数据库操作，默认为 false")])]),s._v(" "),a("tr",[a("td",[s._v("unique")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("建立的索引是否唯一，默认 false")])]),s._v(" "),a("tr",[a("td",[s._v("name")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[s._v("索引的名称，若未指定，系统自动生成")])]),s._v(" "),a("tr",[a("td",[s._v("dropDups")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("建立唯一索引时，是否删除重复记录，默认 flase")])]),s._v(" "),a("tr",[a("td",[s._v("sparse")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("对文档不存在的字段数据不启用索引，默认 false")])]),s._v(" "),a("tr",[a("td",[s._v("expireAfterSeconds")]),s._v(" "),a("td",[s._v("integer")]),s._v(" "),a("td",[s._v("设置集合的生存时间，单位为秒")])]),s._v(" "),a("tr",[a("td",[s._v("v")]),s._v(" "),a("td",[s._v("index version")]),s._v(" "),a("td",[s._v("索引的版本号")])]),s._v(" "),a("tr",[a("td",[s._v("weights")]),s._v(" "),a("td",[s._v("document")]),s._v(" "),a("td",[s._v("索引权重值，范围为 1 到 99999")])]),s._v(" "),a("tr",[a("td",[s._v("default-language")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[s._v("默认为英语")])]),s._v(" "),a("tr",[a("td",[s._v("language_override")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[s._v("默认值为 language")])])])]),s._v(" "),a("p",[s._v("范例：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.shiyanlou.ensureIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user_id"')]),s._v(":1,"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(","),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("background:1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_4-聚合-aggregate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-聚合-aggregate"}},[s._v("#")]),s._v(" 4 聚合 aggregate()")]),s._v(" "),a("p",[s._v("语法：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("db.COLLECTION_NAME.aggregate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$match")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("x:1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("limit:NUM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$group")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("_id:"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$age")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("这些参数都可选：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("$match")]),s._v("：查询，跟 find 一样；")]),s._v(" "),a("li",[a("code",[s._v("$limit")]),s._v("：限制显示结果数量；")]),s._v(" "),a("li",[a("code",[s._v("$skip")]),s._v("：忽略结果数量；")]),s._v(" "),a("li",[a("code",[s._v("$sort")]),s._v("：排序；")]),s._v(" "),a("li",[a("code",[s._v("$group")]),s._v("：按照给定表达式组合结果。")])]),s._v(" "),a("p",[s._v("范例：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.shiyanlou.aggregate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$group")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("_id:"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$name")]),s._v('"')]),s._v(", user:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sum")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$user_id")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("code",[s._v("$name")]),s._v(" 意为取得 name 的值。")]),s._v(" "),a("h3",{attrs:{id:"_1-聚合表达式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-聚合表达式"}},[s._v("#")]),s._v(" 1 聚合表达式")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("名称")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("$sum")]),s._v(" "),a("td",[s._v("计算总和")])]),s._v(" "),a("tr",[a("td",[s._v("$avg")]),s._v(" "),a("td",[s._v("计算平均值")])]),s._v(" "),a("tr",[a("td",[s._v("min 和"),a("em",[s._v("m"),a("strong",[s._v("i")]),s._v("n")]),s._v("和max")]),s._v(" "),a("td",[s._v("计算最小值和最大值")])]),s._v(" "),a("tr",[a("td",[s._v("$push")]),s._v(" "),a("td",[s._v("在结果文档中插入值到一个数组")])]),s._v(" "),a("tr",[a("td",[s._v("$addToSet")]),s._v(" "),a("td",[s._v("在结果文档中插入值到一个数组，但不创建副本")])]),s._v(" "),a("tr",[a("td",[s._v("$first")]),s._v(" "),a("td",[s._v("根据资源文档的排序获取第一个文档数据")])]),s._v(" "),a("tr",[a("td",[s._v("$last")]),s._v(" "),a("td",[s._v("根据资源文档的排序获取最后一个文档数据")])])])]),s._v(" "),a("h3",{attrs:{id:"_2-管道"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-管道"}},[s._v("#")]),s._v(" 2 管道")]),s._v(" "),a("p",[s._v("MongoDB 的聚合管道将 MongoDB 文档在一个管道处理完毕后将结果传递给下一个管道处理。管道操作是可以重复的。")]),s._v(" "),a("p",[s._v("表达式：处理输入文档并输出。表达式是无状态的，只能用于计算当前聚合管道的文档，不能处理其它的文档。")]),s._v(" "),a("p",[s._v("聚合框架中常用的几个操作：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("$project")]),s._v("：修改输入文档的结构。可以用来重命名、增加或删除域，也可以用于创建计算结果以及嵌套文档。")]),s._v(" "),a("li",[a("code",[s._v("$match")]),s._v("：用于过滤数据，只输出符合条件的文档。"),a("code",[s._v("$match")]),s._v(" 使用 MongoDB 的标准查询操作。")]),s._v(" "),a("li",[a("code",[s._v("$limit")]),s._v("：用来限制 MongoDB 聚合管道返回的文档数。")]),s._v(" "),a("li",[a("code",[s._v("$skip")]),s._v("：在聚合管道中跳过指定数量的文档，并返回余下的文档。")]),s._v(" "),a("li",[a("code",[s._v("$unwind")]),s._v("：将文档中的某一个数组类型字段拆分成多条，每条包含数组中的一个值。")]),s._v(" "),a("li",[a("code",[s._v("$group")]),s._v("：将集合中的文档分组，可用于统计结果。")]),s._v(" "),a("li",[a("code",[s._v("$sort")]),s._v("：将输入文档排序后输出。")]),s._v(" "),a("li",[a("code",[s._v("$geoNear")]),s._v("：输出接近某一地理位置的有序文档。")])]),s._v(" "),a("p",[s._v("范例：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.shiyanlou.aggregate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$match")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("user_id:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$gt")]),s._v(":0,"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$lte")]),s._v(":2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(","),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$group")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("_id:"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),s._v(",count:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sum")]),s._v(":1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"count"')]),s._v(":2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);