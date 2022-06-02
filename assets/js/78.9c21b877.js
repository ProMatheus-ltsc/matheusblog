(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{1464:function(s,t,n){"use strict";n.r(t);var a=n(24),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"读写分离"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#读写分离"}},[s._v("#")]),s._v(" 读写分离")]),s._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#实验介绍"}},[s._v("实验介绍")])]),a("li",[a("a",{attrs:{href:"#准备工作"}},[s._v("准备工作")]),a("ul",[a("li",[a("a",{attrs:{href:"#添加读写模块交互数据的管道"}},[s._v("添加读写模块交互数据的管道")])]),a("li",[a("a",{attrs:{href:"#创建-writer-goroutine"}},[s._v("创建 Writer Goroutine")])]),a("li",[a("a",{attrs:{href:"#reader-将发送客户端的数据改为发送至-channel"}},[s._v("Reader 将发送客户端的数据改为发送至 Channel")])]),a("li",[a("a",{attrs:{href:"#启动-reader-和-writer"}},[s._v("启动 Reader 和 Writer")])])])]),a("li",[a("a",{attrs:{href:"#zinx-0-7-测试"}},[s._v("Zinx 0.7 测试")])]),a("li",[a("a",{attrs:{href:"#实验总结"}},[s._v("实验总结")])])])]),a("p"),s._v(" "),a("h2",{attrs:{id:"实验介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实验介绍"}},[s._v("#")]),s._v(" 实验介绍")]),s._v(" "),a("p",[s._v("接下来我们就要对 Zinx 做一个小小的改变，就是与客户端进修数据交互的 Gouroutine 由一个变成两个，一个专门负责从客户端读取数据，一个专门负责向客户端写数据。这么设计有什么好处，当然是目的就是高内聚，模块的功能单一，对于我们今后扩展功能更加方便。")]),s._v(" "),a("p",[a("img",{attrs:{src:n(946),alt:"image-20220531170454823"}})]),s._v(" "),a("h2",{attrs:{id:"准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[s._v("#")]),s._v(" 准备工作")]),s._v(" "),a("p",[s._v("我们先把之前写好的代码复制下来。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://labfile.oss.aliyuncs.com/courses/1639/src06.zip "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v(" src06.zip\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOPATH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/home/project\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("执行后我们的项目目录如下图：")]),s._v(" "),a("p",[a("img",{attrs:{src:n(947),alt:"image-20220531170500042"}})]),s._v(" "),a("p",[s._v("我们希望 Zinx 在升级到 V0.7 版本的时候，架构是下面这样的：")]),s._v(" "),a("p",[a("img",{attrs:{src:n(948),alt:"image-20220531170508039"}})]),s._v(" "),a("p",[s._v("Server 依然是处理客户端的响应，主要关键的几个方法是 Listen、Accept 等。当建立与客户端的套接字后，那么就会开启两个 Goroutine 分别处理读数据业务和写数据业务，读写数据之间的消息通过一个 Channel 传递。下面我们就开始进行实际的实现。")]),s._v(" "),a("p",[s._v("下面我们就开始实现 Zinx V0.7。")]),s._v(" "),a("h3",{attrs:{id:"添加读写模块交互数据的管道"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加读写模块交互数据的管道"}},[s._v("#")]),s._v(" 添加读写模块交互数据的管道")]),s._v(" "),a("p",[s._v("我们给"),a("code",[s._v("Connection")]),s._v("新增一个管道成员"),a("code",[s._v("msgChan")]),s._v(",作用是用于读写两个 go 的通信。")]),s._v(" "),a("blockquote",[a("p",[s._v("zinx/znet/connection.go")])]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" Connection "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//当前连接的socket TCP套接字")]),s._v("\n    Conn "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("net"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("TCPConn\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//当前连接的ID 也可以称作为SessionID，ID全局唯一")]),s._v("\n    ConnID "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("uint32")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//当前连接的关闭状态")]),s._v("\n    isClosed "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bool")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//消息管理MsgId和对应处理方法的消息管理模块")]),s._v("\n    MsgHandler ziface"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("IMsgHandle\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//告知该链接已经退出/停止的channel")]),s._v("\n    ExitBuffChan "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("chan")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bool")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//无缓冲管道，用于读、写两个goroutine之间的消息通信")]),s._v("\n    msgChan        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("chan")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("byte")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//创建连接的方法")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("NewConntion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("conn "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("net"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("TCPConn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" connID "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("uint32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" msgHandler ziface"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("IMsgHandle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("Connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    c "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("Connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        Conn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("     conn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        ConnID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("   connID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        isClosed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        MsgHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" msgHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        ExitBuffChan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("chan")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        msgChan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("chan")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("byte")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//msgChan初始化")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" c\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br")])]),a("h3",{attrs:{id:"创建-writer-goroutine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-writer-goroutine"}},[s._v("#")]),s._v(" 创建 Writer Goroutine")]),s._v(" "),a("blockquote",[a("p",[s._v("zinx/znet/connection.go")])]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\n    写消息Goroutine， 用户将数据发送给客户端\n */")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("Connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("StartWriter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    fmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"[Writer Goroutine is running]"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("defer")]),s._v(" fmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("RemoteAddr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"[conn Writer exit!]"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n             "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<-")]),s._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("msgChan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//有数据要写给客户端")]),s._v("\n                 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("_")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Conn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Write")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("nil")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                     fmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Send Data error:, "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" Conn Writer exit"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n             "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<-")]),s._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ExitBuffChan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//conn已经关闭")]),s._v("\n                 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[s._v("关于 for select 和 channel 的用法：")]),s._v(" "),a("p",[s._v("select 语句只能与通道联用，它一般由若干个分支组成。每次执行这种语句的时候，一般只有一个分支中的代码会被运行。select 语句的分支分为两种，一种叫做候选分支，另一种叫做默认分支。候选分支总是以关键字 case 开头，后跟一个 case 表达式和一个冒号，然后我们可以从下一行开始写入当分支被选中时需要执行的语句。")]),s._v(" "),a("p",[s._v("由于 select 语句是专为通道而设计的，所以每个 case 表达式中都只能包含操作通道的表达式，比如接收表达式。使用一个接收值可以接收通道里的值，使用两个接收值可以判断通道是否已经关闭了。")]),s._v(" "),a("p",[s._v("对于 select 语句的执行规则如下：")]),s._v(" "),a("ul",[a("li",[s._v("每个 case 都必须是一个通信。")]),s._v(" "),a("li",[s._v("所有 Channel 表达式都会被求值。")]),s._v(" "),a("li",[s._v("所有被发送的表达式都会被求值。")]),s._v(" "),a("li",[s._v("如果任意某个通信可以进行，它就执行，其他被忽略。")]),s._v(" "),a("li",[s._v("如果有多个 case 都可以运行，Select 会随机公平地选出一个执行。其他不会执行。 否则：")]),s._v(" "),a("li",[s._v("如果有 default 子句，则执行该语句。")]),s._v(" "),a("li",[s._v("如果没有 default 子句，select 将阻塞，直到某个通信可以运行；Go 不会重新对 Channel 或值进行求值。")])]),s._v(" "),a("p",[s._v("注意这里是和 switch 的操作是不一样的，switch 操作中，只要从上到下有一个满足条件了，就会执行相应的那一个 case，select 中，我们是全部计算一遍，然后再从可满足条件的 case 中公平的执行其中一个。这是为了防止有些通道长期得不到执行。")]),s._v(" "),a("h3",{attrs:{id:"reader-将发送客户端的数据改为发送至-channel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reader-将发送客户端的数据改为发送至-channel"}},[s._v("#")]),s._v(" Reader 将发送客户端的数据改为发送至 Channel")]),s._v(" "),a("p",[s._v("修改 Reader 调用的"),a("code",[s._v("SendMsg()")]),s._v("方法")]),s._v(" "),a("blockquote",[a("p",[s._v("zinx/znet/connection.go")])]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//直接将Message数据发送数据给远程的TCP客户端")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("Connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("SendMsg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("msgId "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("uint32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" data "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("byte")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("error")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("isClosed "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" errors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("New")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Connection closed when send msg"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//将data封包，并且发送")]),s._v("\n    dp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("NewDataPack")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Pack")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("NewMsgPackage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("msgId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("nil")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        fmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Pack error msg id = "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" msgId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v("  errors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("New")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Pack error msg "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//写回客户端")]),s._v("\n    c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("msgChan "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<-")]),s._v(" msg   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//将之前直接回写给conn.Write的方法 改为 发送给Channel 供Writer读取")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("nil")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h3",{attrs:{id:"启动-reader-和-writer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动-reader-和-writer"}},[s._v("#")]),s._v(" 启动 Reader 和 Writer")]),s._v(" "),a("blockquote",[a("p",[s._v("zinx/znet/connection.go")])]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//启动连接，让当前连接开始工作")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("Connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//1 开启用户从客户端读取数据流程的Goroutine")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("go")]),s._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("StartReader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//2 开启用于写回客户端数据流程的Goroutine")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("go")]),s._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("StartWriter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<-")]),s._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ExitBuffChan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//得到退出消息，不再阻塞")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h2",{attrs:{id:"zinx-0-7-测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zinx-0-7-测试"}},[s._v("#")]),s._v(" Zinx 0.7 测试")]),s._v(" "),a("p",[s._v("这里我们的测试代码不需要做任何修改，大家可以想一想为什么。我们这里的测试步骤也和上一节保持一致。测试结果如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:n(949),alt:"image-20220531170519423"}})]),s._v(" "),a("h2",{attrs:{id:"实验总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实验总结"}},[s._v("#")]),s._v(" 实验总结")]),s._v(" "),a("p",[s._v("我们今天通过 Channel 实现了 Goroutine 的读写分离，关于 Channel 是 Golang 的一个特色机制，大家可以在课下多找一些资料了解其详情。")])])}),[],!1,null,null,null);t.default=e.exports},946:function(s,t,n){s.exports=n.p+"assets/img/image-20220531170454823.3461652d.png"},947:function(s,t,n){s.exports=n.p+"assets/img/image-20220531170500042.b0408c1c.png"},948:function(s,t,n){s.exports=n.p+"assets/img/image-20220531170508039.79603b22.png"},949:function(s,t,n){s.exports=n.p+"assets/img/image-20220531170519423.ec0ec797.png"}}]);