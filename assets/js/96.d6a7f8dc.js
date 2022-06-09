(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{1455:function(s,a,t){"use strict";t.r(a);var n=t(65),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"高级查询与索引"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#高级查询与索引"}},[s._v("#")]),s._v(" 高级查询与索引")]),s._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#_1-初始化环境"}},[s._v("1 初始化环境")])]),n("li",[n("a",{attrs:{href:"#_2-覆盖索引查询"}},[s._v("2 覆盖索引查询")])]),n("li",[n("a",{attrs:{href:"#_3-高级索引"}},[s._v("3 高级索引")])]),n("li",[n("a",{attrs:{href:"#_4-原子操作"}},[s._v("4 原子操作")])]),n("li",[n("a",{attrs:{href:"#_5-查询分析"}},[s._v("5 查询分析")])])])]),n("p"),s._v(" "),n("h3",{attrs:{id:"_1-初始化环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-初始化环境"}},[s._v("#")]),s._v(" 1 初始化环境")]),s._v(" "),n("p",[s._v("启动 MongoDB 服务，因为 MongoDB 并不随系统一起启动，可能以下命令运行后会等一小段的时间才会启动完毕。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mongodb start\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("进入 MongoDB 命令行操作界面，在命令行中敲"),n("strong",[s._v("exit")]),s._v("可以退出。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("mongo\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("实验中的布尔类型的 ture 用 1 代替，false 用 0 代替。")]),s._v(" "),n("h3",{attrs:{id:"_2-覆盖索引查询"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-覆盖索引查询"}},[s._v("#")]),s._v(" 2 覆盖索引查询")]),s._v(" "),n("p",[s._v("所有的查询字段都是索引的一部分；所有的查询返回字段在同一个索引中。")]),s._v(" "),n("p",[s._v("由于索引存在于 RAM 中，因而从索引中获取数据要比扫描文档更快。")]),s._v(" "),n("p",[s._v("范例：")]),s._v(" "),n("p",[s._v("创建如下 users 集合（使用前面所学的方法创建该集合）：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"contact"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"987654321"')]),s._v(",\n   "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dob"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"01-01-1991"')]),s._v(",\n   "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gender"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"M"')]),s._v(",\n   "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Tom Benzamin"')]),s._v(",\n   "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user_name"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tombenzamin"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("在 users 中创建一个联合索引:")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.users.ensureIndex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("gender:1,user_name:1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("该索引会覆盖下面的查询：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.users.find"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("gender:"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"M"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(","),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("user_name:1,_id:0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("对于上述查询，MongoDB 不会在数据库文件中查找，而会从索引中提取数据。因为索引中不包含 _id 字段，所以 _id 在查询中会默认返回，可以在查询结果中将其排除。而 "),n("code",[s._v('db.users.find({gender:"M"},{user_name:1})')]),s._v(" 就不会被索引覆盖。")]),s._v(" "),n("h3",{attrs:{id:"_3-高级索引"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-高级索引"}},[s._v("#")]),s._v(" 3 高级索引")]),s._v(" "),n("p",[s._v("创建如下 users 集合（使用前面所学的方法创建该集合）：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"address"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"city"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"chengdu"')]),s._v(",\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"province"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sichuan"')]),s._v(",\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pincode"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123"')]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n   "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tags"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"music"')]),s._v(",\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cricket"')]),s._v(",\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"blogs"')]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n   "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"clound"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[s._v("索引数组字段，在数组中创建索引，需要对数组中的每个字段依次建立索引。所以在我们为数组 tags 创建索引时，会为 music、cricket、blogs 三个值建立单独的索引。")]),s._v(" "),n("p",[s._v("范例：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.users.ensureIndex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tags"')]),s._v(":1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("创建索引后，我们可以这样检索集合的 tags 字段：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.users.find"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("tags:"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cricket"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("为了验证我们使用了索引，可以使用 explain 命令：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.users.find"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("tags:"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cricket"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".explain"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("img",{attrs:{src:t(450),alt:"此处输入图片的描述"}})]),s._v(" "),n("h4",{attrs:{id:"索引子文档字段"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#索引子文档字段"}},[s._v("#")]),s._v(" 索引子文档字段")]),s._v(" "),n("p",[s._v("假设我们需要通过 city、province、pincode 字段来检索文档，由于这些字段是子文档的字段，所以我们需要对子文档建立索引。")]),s._v(" "),n("p",[s._v("范例：")]),s._v(" "),n("p",[s._v("为子文档的三个字段创建索引，命令如下：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.users.ensureIndex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"address.city"')]),s._v(":1,"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"address.province"')]),s._v(":1,"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"address.pincode"')]),s._v(":1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("一旦创建索引，我们可以使用子文档的字段来检索数据：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.users.find"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"address.city"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"chengdu"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("记住查询表达式必须遵循指定的索引的顺序。所以上面创建的索引将支持以下查询：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.users.find"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"address.city"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"chengdu"')]),s._v(","),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"address.province"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sichuan"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("同样支持以下查询：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.users.find"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"address.city"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"chengdu"')]),s._v(","),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"address.province"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sichuan"')]),s._v(","),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"address.pincode"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"_4-原子操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-原子操作"}},[s._v("#")]),s._v(" 4 原子操作")]),s._v(" "),n("p",[s._v("所谓原子操作，就是要么执行成功，要么执行失败，执行成功完成既定任务，执行失败还原执行前的状态。")]),s._v(" "),n("p",[s._v("常用原子操作命令：")]),s._v(" "),n("h4",{attrs:{id:"_4-1-set"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-set"}},[s._v("#")]),s._v(" 4.1 $set")]),s._v(" "),n("p",[s._v("用来指定一个键并更新键值，若键不存在则创建。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$set")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" field "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" value "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h4",{attrs:{id:"_4-2-unset"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-unset"}},[s._v("#")]),s._v(" 4.2 $unset")]),s._v(" "),n("p",[s._v("用来删除一个键。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$unset")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" field "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h4",{attrs:{id:"_4-3-inc"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-inc"}},[s._v("#")]),s._v(" 4.3 $inc")]),s._v(" "),n("p",[s._v("$inc 可以对文档的某个值为数字型（只能为满足要求的数字）的键进行增减的操作。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$inc")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" field "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" value "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h4",{attrs:{id:"_4-4-push"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-push"}},[s._v("#")]),s._v(" 4.4 $push")]),s._v(" "),n("p",[s._v("把 value 追加到 field 里面去，field 一定要是数组类型才行，如果 field 不存在，会新增一个数组类型加进去。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$push")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" field "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" value "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h4",{attrs:{id:"_4-5-pushall"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-pushall"}},[s._v("#")]),s._v(" 4.5 $pushAll")]),s._v(" "),n("p",[s._v("同 $push ，只是一次可以追加多个值到一个数组字段内。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$pushAll")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" field "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" value_array "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h4",{attrs:{id:"_4-6-pull"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-pull"}},[s._v("#")]),s._v(" 4.6 $pull")]),s._v(" "),n("p",[s._v("从数组 field 内删除一个等于 value 值。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$pull")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" field "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" _value "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h4",{attrs:{id:"_4-7-addtoset"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-7-addtoset"}},[s._v("#")]),s._v(" 4.7 $addToSet")]),s._v(" "),n("p",[s._v("增加一个值到数组内，而且只有当这个值不在数组内才增加。")]),s._v(" "),n("h4",{attrs:{id:"_4-8-pop"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-8-pop"}},[s._v("#")]),s._v(" 4.8 $pop")]),s._v(" "),n("p",[s._v("删除数组的第一个或最后一个元素。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$pop")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" field "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h4",{attrs:{id:"_4-9-rename"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-9-rename"}},[s._v("#")]),s._v(" 4.9 $rename")]),s._v(" "),n("p",[s._v("修改字段名称:")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$rename")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" old_field_name "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" new_field_name "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h4",{attrs:{id:"_4-10-bit"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-10-bit"}},[s._v("#")]),s._v(" 4.10 $bit")]),s._v(" "),n("p",[s._v("位操作，integer 类型")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$bit")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" field "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("and "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"_5-查询分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-查询分析"}},[s._v("#")]),s._v(" 5 查询分析")]),s._v(" "),n("h4",{attrs:{id:"_5-1-explain"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-explain"}},[s._v("#")]),s._v(" 5.1 explain()")]),s._v(" "),n("p",[n("code",[s._v("explain()")]),s._v(" 操作提供了查询信息，使用索引及查询统计等。有利于我们对索引的优化。接下来我们在 users 集合中创建 gender 和 user_name 的索引：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.users.ensureIndex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("gender:1,user_name:1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.users.find"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("gender:"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"M"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(","),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("user_name:1,_id:0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".explain"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("img",{attrs:{src:t(451),alt:"此处输入图片的描述"}})]),s._v(" "),n("h4",{attrs:{id:"_5-2-hint"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-hint"}},[s._v("#")]),s._v(" 5.2 hint()")]),s._v(" "),n("p",[s._v("虽然 MongoDB 查询优化器一般工作的很不错，但是也可以使用 "),n("code",[s._v("hints()")]),s._v(" 来强迫 MongoDB 使用一个指定的索引。通过这种方法在某些情形下会提升性能。")]),s._v(" "),n("p",[s._v("范例：")]),s._v(" "),n("p",[s._v("指定使用 gender 和 user_name 索引字段来查询：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.users.find"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("gender:"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"M"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(","),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("user_name:1,_id:0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".hint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("gender:1,user_name:1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("可以使用 "),n("code",[s._v("explain()")]),s._v(" 函数来分析以上查询：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.users.find"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("gender:"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"M"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(","),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("user_name:1,_id:0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".hint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("gender:1,user_name:1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".explain"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports},450:function(s,a,t){s.exports=t.p+"assets/img/document-uid379639labid8209timestamp1544770820768.e74ec1f8.png"},451:function(s,a,t){s.exports=t.p+"assets/img/document-uid600404labid9782timestamp1550739403102.02d15143.png"}}]);