(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{1343:function(s,a,t){"use strict";t.r(a);var n=t(24),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"_2-1-查询语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-查询语句"}},[s._v("#")]),s._v(" 2.1 查询语句")]),s._v(" "),t("h4",{attrs:{id:"_2-1-1-find-语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-find-语句"}},[s._v("#")]),s._v(" 2.1.1 find() 语句")]),s._v(" "),t("p",[s._v("启动 MongoDB 服务，因为 MongoDB 并不随系统一起启动，可能以下命令运行后会等一小段的时间才会启动完毕。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mongodb start\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("进入 MongoDB 命令行操作界面，在命令行中敲 "),t("code",[s._v("exit")]),s._v(" 可以退出。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mongo\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("find() 用法："),t("code",[s._v("db.COLLECTION_NAME.find()")])]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("> use post\n> db.post.insert([\n{\n   title: 'MongoDB Overview',\n   description: 'MongoDB is no sql database',\n   by: 'shiyanlou',\n   url: 'https://www.lanqiao.cn',\n   tags: ['mongodb', 'database', 'NoSQL'],\n   likes: 100\n},\n{\n   title: 'NoSQL Database',\n   description: \"NoSQL database doesn't have tables\",\n   by: 'shiyanlou',\n   url: 'https://www.lanqiao.cn',\n   tags: ['mongodb', 'database', 'NoSQL'],\n   likes: 20,\n   comments: [\n      {\n         user:'user1',\n         message: 'My first comment',\n         dateCreated: new Date(2013,11,10,2,35),\n         like: 0\n      }\n   ]\n}\n])\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br")])]),t("p",[s._v("查询数据，不加任何参数默认返回所有数据记录：")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("> db.post.find()\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这条语句会返回 post 集合中的所有文档，实际应用中不常见，因为这样会导致大量的数据传输，造成服务器响应迟缓甚至失去响应。")]),s._v(" "),t("h4",{attrs:{id:"_2-1-2-pretty-语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2-pretty-语句"}},[s._v("#")]),s._v(" 2.1.2 pretty() 语句")]),s._v(" "),t("p",[s._v("pretty() 可以使查询输出的结果更美观。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.post.find"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".pretty"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("例如:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.users."),t("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("find")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" ObjectId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5c35657e6ee1e0307e215fc8"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shiyanlou"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"age"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"21"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.users.find"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("."),t("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("pretty")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" ObjectId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5c35657e6ee1e0307e215fc8"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shiyanlou"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"age"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"21"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("如果你想让 mongo shell 始终以 pretty 的方式显示返回数据，可以通过下面的指令实现：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"DBQuery.prototype._prettyShell = true"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.mongorc.js\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这样就把默认的显示方式设置为 pretty 了。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.users."),t("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("find")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" ObjectId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5c35657e6ee1e0307e215fc8"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bage"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"age"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"21"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h3",{attrs:{id:"_2-2-mongodb-中的-and"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-mongodb-中的-and"}},[s._v("#")]),s._v(" 2.2 MongoDB 中的 AND")]),s._v(" "),t("p",[s._v("MongoDB 不需要类似于其他数据库的 AND 运算符，当 find() 中传入多个键值对时，MongoDB 就会将其作为 AND 查询处理。")]),s._v(" "),t("p",[s._v("用法："),t("code",[s._v("db.mycol.find({ key1: value1, key2: value2 }).pretty()")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.post.find"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"by"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shiyanlou"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"to"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"chenshi"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".pretty"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如上语句就可以查找出 by 字段为 'shiyanlou'，to 字段为 'chenshi' 的所有记录，意思是找出系统中由 shiyanlou 发送给 chenshi 的所有邮件。")]),s._v(" "),t("p",[s._v("它对应的关系型 SQL 语句为：")]),s._v(" "),t("div",{staticClass:"language-mysql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("SELECT * FROM post WHERE by = 'shiyanlou' AND to = 'chenshi'\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_2-3-mongodb-中的-or"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-mongodb-中的-or"}},[s._v("#")]),s._v(" 2.3 MongoDB 中的 OR")]),s._v(" "),t("h4",{attrs:{id:"_2-3-1-or"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-1-or"}},[s._v("#")]),s._v(" 2.3.1 OR")]),s._v(" "),t("p",[s._v("MongoDB 中，OR 查询语句以 "),t("code",[s._v("$or")]),s._v(" 作为关键词，用法如下：")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("> db.post.find(\n  {\n    $or: [\n      {key1: value1}, {key2:value2}\n    ]\n  }\n).pretty()\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("操作示例：")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('> db.post.find({\n    $or:[\n        {"by":"shiyanlou"},\n        {"title": "MongoDB Overview"}\n    ]\n}).pretty()\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("它对应的关系型 SQL 语句为：")]),s._v(" "),t("div",{staticClass:"language-mysql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("SELECT * FROM post WHERE by = 'shiyanlou' OR title = 'MongoDB Overview'\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_2-4-同时使用-and-和-or"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-同时使用-and-和-or"}},[s._v("#")]),s._v(" 2.4 同时使用 AND 和 OR")]),s._v(" "),t("p",[s._v("操作范例：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.post.find"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"likes"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$gt")]),s._v(":10"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$or")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"by"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shiyanlou"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"title"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MongoDB Overview"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".pretty"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[t("code",[s._v("{$gt:10}")]),s._v(" 表示大于 10，另外，"),t("code",[s._v("$lt")]),s._v(" 表示小于、"),t("code",[s._v("$gte")]),s._v(" 表示大于等于、"),t("code",[s._v("$lte")]),s._v(" 表示小于等于、"),t("code",[s._v("$ne")]),s._v(" 表示不等于。")]),s._v(" "),t("p",[s._v("如果这样的符号记起来稍微有点麻烦，可以根据它们的全写配合记忆：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("gt")]),s._v("：大于 greater than")]),s._v(" "),t("li",[t("code",[s._v("lt")]),s._v("：小于 less than")]),s._v(" "),t("li",[t("code",[s._v("gte")]),s._v("：大于或等于 greater than equal")]),s._v(" "),t("li",[t("code",[s._v("lte")]),s._v("：小于或等于 less than equal")])])])}),[],!1,null,null,null);a.default=e.exports}}]);