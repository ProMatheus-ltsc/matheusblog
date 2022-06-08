(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{1451:function(s,t,a){"use strict";a.r(t);var n=a(65),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"文档基本操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文档基本操作"}},[s._v("#")]),s._v(" 文档基本操作")]),s._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#_1-虚拟机开机配置"}},[s._v("1 虚拟机开机配置")])]),a("li",[a("a",{attrs:{href:"#_2-创建数据库"}},[s._v("2 创建数据库")])]),a("li",[a("a",{attrs:{href:"#_3-删除数据库"}},[s._v("3 删除数据库")])]),a("li",[a("a",{attrs:{href:"#_4-创建集合"}},[s._v("4 创建集合")])]),a("li",[a("a",{attrs:{href:"#_5-删除集合"}},[s._v("5 删除集合")])]),a("li",[a("a",{attrs:{href:"#_6-插入文档"}},[s._v("6 插入文档")])]),a("li",[a("a",{attrs:{href:"#_7-更新文档"}},[s._v("7 更新文档")])]),a("li",[a("a",{attrs:{href:"#_8-替换已存在的文档"}},[s._v("8 替换已存在的文档")])]),a("li",[a("a",{attrs:{href:"#_9-删除文档"}},[s._v("9 删除文档")])])])]),a("p"),s._v(" "),a("h3",{attrs:{id:"_1-虚拟机开机配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-虚拟机开机配置"}},[s._v("#")]),s._v(" 1 虚拟机开机配置")]),s._v(" "),a("p",[s._v("启动 MongoDB 服务，因为 MongoDB 并不随系统一起启动，可能以下命令运行后会等一小段的时间才会启动完毕。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mongodb start\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("进入 MongoDB 命令行操作界面，在命令行中敲 "),a("code",[s._v("exit")]),s._v(" 可以退出。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("mongo\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("实验中的布尔类型的 true 用 1 代替，false 用 0 代替。")]),s._v(" "),a("h3",{attrs:{id:"_2-创建数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建数据库"}},[s._v("#")]),s._v(" 2 创建数据库")]),s._v(" "),a("p",[s._v("范例：")]),s._v(" "),a("p",[s._v("进入 MongoDB 命令行操作界面之后，进行如下操作：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" use Chenshi\nswitched to db Chenshi\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("您可以使用 "),a("code",[s._v("db")]),s._v(" 命令查看您当前选择的数据库：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db\nChenshi\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("您也可以通过使用 "),a("code",[s._v("show dbs")]),s._v(" 命令查看所有的数据库：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show dbs\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("在这条命令之后您刚才创建的 Chenshi 不会显示，它只有在向数据库中插入了数据之后才能显示。")]),s._v(" "),a("h3",{attrs:{id:"_3-删除数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-删除数据库"}},[s._v("#")]),s._v(" 3 删除数据库")]),s._v(" "),a("p",[a("strong",[s._v("语法："),a("code",[s._v("db.dropDatabase()")])])]),s._v(" "),a("p",[s._v("假设刚才我们使用语句 "),a("code",[s._v('db.computer.insert({"name":"shiyanlou"})')]),s._v(" 对数据库 Chenshi 进行了数据插入操作。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show dbs      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示当前系统中的所有数据库")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" use Chenshi   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 转到Chenshi数据库")]),s._v("\nswitched to db Chenshi\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db."),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("dropDatabase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dropped"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Chenshi"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ok"')]),s._v(":1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show dbs\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"_4-创建集合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-创建集合"}},[s._v("#")]),s._v(" 4 创建集合")]),s._v(" "),a("p",[a("strong",[s._v("语法："),a("code",[s._v("db.createCollection(name,options)")])])]),s._v(" "),a("p",[s._v("参数描述：")]),s._v(" "),a("ul",[a("li",[s._v("name：创建的集合名称")]),s._v(" "),a("li",[s._v("options：是一个作为初始化的文档(可选)")])]),s._v(" "),a("p",[s._v("范例：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.createCollection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shiyanlou"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#无参数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ok"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show collections\nshiyanlou\nsystem.indexes\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.createCollection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shiyanlou2"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" capped "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(", autoIndexId "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(", size "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6142800")]),s._v(", max "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#带参数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ok "')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("参数描述：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("capped")]),s._v("：类型为 Boolean，如果为 true 则创建一个固定大小的集合，当其条目达到最大时可以自动覆盖以前的条目。在设置其为 true 时也要指定参数大小；")]),s._v(" "),a("li",[a("code",[s._v("autoIndexId")]),s._v("：类型为 Boolean，默认为 false，如果设置为 true，则会在 _id 字段上自动创建索引；")]),s._v(" "),a("li",[a("code",[s._v("size")]),s._v("：如果 capped 为 true 则需要指定，指定参数的最大值，单位为 byte；")]),s._v(" "),a("li",[a("code",[s._v("max")]),s._v("：指定最大的文档数。")])]),s._v(" "),a("p",[s._v("在 Mongodb 中也可以不用创建集合，因为在创建文档的时候也会自动的创建集合。")]),s._v(" "),a("h3",{attrs:{id:"_5-删除集合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-删除集合"}},[s._v("#")]),s._v(" 5 删除集合")]),s._v(" "),a("p",[a("strong",[s._v("语法："),a("code",[s._v("db.COLLECTION.drop()")])])]),s._v(" "),a("p",[s._v("操作实例：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" use Chenshi\nswitched to db Chenshi\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show collections\nshiyanlou\nshiyanlou2\nsystem.indexes\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.shiyanlou.drop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show collections\nshiyanlou2\nsystem.indexes\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("删除成功。")]),s._v(" "),a("p",[s._v("注意：当您要删除指定的集合时，用您想要删除的集合名称替代 COLLECTION 即可。")]),s._v(" "),a("h3",{attrs:{id:"_6-插入文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-插入文档"}},[s._v("#")]),s._v(" 6 插入文档")]),s._v(" "),a("p",[a("strong",[s._v("语法："),a("code",[s._v("db.COLLECTION_NAME.insert(document)")])])]),s._v(" "),a("p",[s._v("操作实例：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("userdoc1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user_id"')]),s._v(":1,"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cloud"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"state"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"active"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"actor"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"e-mail"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test@qq.com"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"VM_num"')]),s._v(":2,"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"time"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"date"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2014-08-12"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hour"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10:53 PM"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("userdoc2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user_id"')]),s._v(":2,"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"testadmin"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"state"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"active"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"actor"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"admin"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"e-mail"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test@qq.com"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"VM_num"')]),s._v(":2,"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"time"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"date"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2014-08-11"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hour"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"06:34 AM"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("doc1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"peter"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"position"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"teacher"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#先定义文档")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" use Chenshi\nswitched to db Chenshi\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.shiyanlou.insert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("userdoc1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nWriteResult"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nInserted"')]),s._v(":1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.shiyanlou.insert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("userdoc2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nWriteResult"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nInserted"')]),s._v(":1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.shiyanlou.insert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("doc1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nWriteResult"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nInserted"')]),s._v(":1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("插入文档成功，当然也可以直接将文档的内容作为函数的参数直接替代 document。")]),s._v(" "),a("h3",{attrs:{id:"_7-更新文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-更新文档"}},[s._v("#")]),s._v(" 7 更新文档")]),s._v(" "),a("p",[a("strong",[s._v("语法："),a("code",[s._v("db.COLLECTION_NAME.update(SELECTION_CRITERIA,UPDATED_DATA)")])])]),s._v(" "),a("p",[s._v("操作实例：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.shiyanlou.update"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user_id"')]),s._v(":2,"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"e-mail"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test@qq.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(","),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$set")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"e-mail"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"group@qq.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nWriteResult"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nMatched"')]),s._v(":1,"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nUpserted"')]),s._v(":1,"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nModified"')]),s._v(":1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.shiyanlou.find"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("将 user_id=2 的文档的 e-mail 改为 "),a("a",{attrs:{href:"mailto:group@qq.com"}},[s._v("group@qq.com")])]),s._v(" "),a("li",[s._v("第一个大括号内容标示查找条件，第二个大括号内容则表示更新后的数据")]),s._v(" "),a("li",[s._v("默认的 update 函数只对一个文档更新，如果想作用所有文档，则需要加入 multi:true")])]),s._v(" "),a("p",[s._v("操作实例：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("db.shiyanlou.update"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"e-mail"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test@qq.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(","),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$set")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"e-mail"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"group@qq.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(","),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("multi:true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_8-替换已存在的文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-替换已存在的文档"}},[s._v("#")]),s._v(" 8 替换已存在的文档")]),s._v(" "),a("p",[a("strong",[s._v("语法："),a("code",[s._v("db.COLLECTION_NAME.save({_id:ObjectId(),NEW_DATA})")])])]),s._v(" "),a("p",[s._v("操作实例：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.shiyanlou.save"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(":ObjectId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"53ea174ccb4c62646d9544f4"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Bob"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"position"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"techer"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nWriteResult"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nMatched"')]),s._v(":1,"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nUpserted"')]),s._v(":1,"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nModified"')]),s._v(":1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("这里的 _id 对应的是要替换文档的 _id。")]),s._v(" "),a("p",[s._v("跟 insert 差不多，但是 save 更好用。")]),s._v(" "),a("h3",{attrs:{id:"_9-删除文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-删除文档"}},[s._v("#")]),s._v(" 9 删除文档")]),s._v(" "),a("p",[a("strong",[s._v("语法："),a("code",[s._v("db.COLLECTION_NAME.remove(DELECTION_CRITERIA)")])])]),s._v(" "),a("p",[s._v("操作实例：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.shiyanlou.remove"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Bob"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nWriteResult"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nRemoved"')]),s._v(":1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("其实 remove 函数的参数跟 update 函数的第一个参数一样，相当于查找条件，注意，不要误删！")]),s._v(" "),a("p",[s._v("删除后可以用查找命令确认数据：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.shiyanlou.find"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);