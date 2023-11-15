(window.webpackJsonp=window.webpackJsonp||[]).push([[299],{1666:function(e,t,s){"use strict";s.r(t);var a=s(65),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"http协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http协议"}},[e._v("#")]),e._v(" HTTP协议")]),e._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#http协议对于客户端与服务端之间的交互规则有以下定义"}},[e._v("HTTP协议对于客户端与服务端之间的交互规则有以下定义:")])]),s("li",[s("a",{attrs:{href:"#请求request"}},[e._v("请求Request")]),s("ul",[s("li",[s("a",{attrs:{href:"#_1-请求行"}},[e._v("1:请求行")])]),s("li",[s("a",{attrs:{href:"#_2-消息头"}},[e._v("2:消息头")])]),s("li",[s("a",{attrs:{href:"#_3-消息正文"}},[e._v("3:消息正文")])])])]),s("li",[s("a",{attrs:{href:"#响应response"}},[e._v("响应Response")]),s("ul",[s("li",[s("a",{attrs:{href:"#_1-状态行"}},[e._v("1:状态行")])]),s("li",[s("a",{attrs:{href:"#_2-响应头"}},[e._v("2:响应头:")])]),s("li",[s("a",{attrs:{href:"#_3-响应正文"}},[e._v("3:响应正文:")])])])]),s("li",[s("a",{attrs:{href:"#相对路径与绝对路径"}},[e._v("相对路径与绝对路径")]),s("ul",[s("li",[s("a",{attrs:{href:"#_1-相对路径"}},[e._v("1:相对路径")])]),s("li",[s("a",{attrs:{href:"#_2-绝对路径"}},[e._v("2:绝对路径")])])])]),s("li",[s("a",{attrs:{href:"#更多资料"}},[e._v("更多资料")])])])]),s("p"),e._v(" "),s("p",[e._v("超文本传输协议 由万维网制定(w3c)")]),e._v(" "),s("p",[e._v("是浏览器与服务器通讯的应用层协议，规定了浏览器与服务器之间的交互规则以及交互数据的格式信息等。")]),e._v(" "),s("h2",{attrs:{id:"http协议对于客户端与服务端之间的交互规则有以下定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http协议对于客户端与服务端之间的交互规则有以下定义"}},[e._v("#")]),e._v(" HTTP协议对于客户端与服务端之间的交互规则有以下定义:")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("要求浏览器与服务端之间必须遵循一问一答的规则，即:浏览器与服务端建立TCP连接后需要先发送一个请求(问)然后服务端接收到请求并予以处理后再发送响应(答)。"),s("strong",[e._v("注意，服务端永远不会主动给浏览器发送信息。")])])]),e._v(" "),s("li",[s("p",[e._v("HTTP要求浏览器与服务端的传输层协议必须是可靠的传输，因此是使用TCP协议作为传输层协议的。")])]),e._v(" "),s("li",[s("p",[e._v("HTTP协议对于浏览器与服务端之间交互的数据格式，内容也有一定的要求。\n浏览器给服务端发送的内容称为"),s("strong",[e._v("请求Request")]),e._v("\n服务端给浏览器发送的内容称为"),s("strong",[e._v("响应Response")])])]),e._v(" "),s("li",[s("p",[e._v("请求和响应中大部分内容都是文本信息(字符串)，并且这些文本数据使用的字符集为:"),s("strong",[e._v("ISO8859-1")]),e._v(".这是一个欧洲的字符集，里面是不支持中文的!!!。而实际上请求和响应出现的字符也就是英文，数字，符号。")])])]),e._v(" "),s("h2",{attrs:{id:"请求request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请求request"}},[e._v("#")]),e._v(" 请求Request")]),e._v(" "),s("p",[e._v("请求是浏览器发送给服务端的内容，HTTP协议中一个请求由三部分构成:\n分别是:请求行，消息头，消息正文。消息正文部分可以没有。")]),e._v(" "),s("h3",{attrs:{id:"_1-请求行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-请求行"}},[e._v("#")]),e._v(" 1:请求行")]),e._v(" "),s("p",[e._v("请求行是一行字符串，以连续的两个字符(回车符和换行符)作为结束这一行的标志。\n回车符:在ASC编码中2进制内容对应的整数是13.回车符通常用cr表示。\n换行符:在ASC编码中2进制内容对应的整数是10.换行符通常用lf表示。\n回车符和换行符实际上都是不可见字符。")]),e._v(" "),s("p",[e._v("请求行分为三部分:\n请求方式(SP)抽象路径(SP)协议版本(CRLF)    注:SP是空格")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("GET /index.html HTTP/1.1\nGET / HTTP/1.1\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("URL地址格式:\n协议://主机地址信息/抽象路径")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("http://localhost:8088/TeduStore/index\nGET /TeduStore/index.html HTTP/1.1\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("h3",{attrs:{id:"_2-消息头"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-消息头"}},[e._v("#")]),e._v(" 2:消息头")]),e._v(" "),s("p",[e._v("消息头是浏览器可以给服务端发送的一些附加信息，有的用来说明浏览器自身内容，有的\n用来告知服务端交互细节，有的告知服务端消息正文详情等。")]),e._v(" "),s("p",[e._v("消息头由若干行组成，每行结束也是以CRLF标志。\n每个消息头的格式为:消息头的名字(:SP)消息的值(CRLF)\n消息头部分结束是以单独的(CRLF)标志。\n例如:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Host: localhost:8088(CRLF)\nConnection: keep-alive(CRLF)\nUpgrade-Insecure-Requests: 1(CRLF)\nUser-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36(CRLF)\nSec-Fetch-User: ?1(CRLF)\nAccept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9(CRLF)\nSec-Fetch-Site: none(CRLF)\nSec-Fetch-Mode: navigate(CRLF)\nAccept-Encoding: gzip, deflate, br(CRLF)\nAccept-Language: zh-CN,zh;q=0.9(CRLF)(CRLF)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br")])]),s("h3",{attrs:{id:"_3-消息正文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-消息正文"}},[e._v("#")]),e._v(" 3:消息正文")]),e._v(" "),s("p",[e._v("消息正文是2进制数据，通常是用户上传的信息，比如:在页面输入的注册信息，上传的\n附件等内容。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("GET /myweb/index.html HTTP/1.1\nHost: localhost:8088\nConnection: keep-alive\nUpgrade-Insecure-Requests: 1\nUser-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36\nSec-Fetch-User: ?1\nAccept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9\nSec-Fetch-Site: none\nSec-Fetch-Mode: navigate\nAccept-Encoding: gzip, deflate, br\nAccept-Language: zh-CN,zh;q=0.9\n1010101101001.....\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br")])]),s("h2",{attrs:{id:"响应response"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#响应response"}},[e._v("#")]),e._v(" 响应Response")]),e._v(" "),s("p",[e._v("响应是服务端发送给客户端的内容。一个响应包含三部分:状态行，响应头，响应正文")]),e._v(" "),s("h3",{attrs:{id:"_1-状态行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-状态行"}},[e._v("#")]),e._v(" 1:状态行")]),e._v(" "),s("p",[e._v("状态行是一行字符串(CRLF结尾)，并且状态行由三部分组成，格式为:\nprotocol(SP)statusCode(SP)statusReason(CRLF)\n协议版本(SP)状态代码(SP)状态描述(CRLF)\n例如:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("HTTP/1.1 200 OK\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("状态代码是一个3位数字，分为5类：\n"),s("strong",[e._v("1xx:保留")]),e._v(" "),s("strong",[e._v("2xx:成功，表示处理成功，并正常响应")]),e._v(" "),s("strong",[e._v("3xx:重定向，表示处理成功，但是需要浏览器进一步请求")]),e._v(" "),s("strong",[e._v("4xx:客户端错误，表示客户端请求错误导致服务端无法处理")]),e._v(" "),s("strong",[e._v("5xx:服务端错误，表示服务端处理请求过程出现了错误")])]),e._v(" "),s("p",[e._v("具体的数字在HTTP协议手册中有相关的定义，可参阅。\n状态描述手册中根据不同的状态代码有参考值，也可以自行定义。通常使用参考值即可。")]),e._v(" "),s("h3",{attrs:{id:"_2-响应头"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-响应头"}},[e._v("#")]),e._v(" 2:响应头:")]),e._v(" "),s("p",[e._v("响应头与请求中的消息头格式一致，表示的是服务端发送给客户端的附加信息。")]),e._v(" "),s("h3",{attrs:{id:"_3-响应正文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-响应正文"}},[e._v("#")]),e._v(" 3:响应正文:")]),e._v(" "),s("p",[e._v("2进制数据部分，包含的通常是客户端实际请求的资源内容。")]),e._v(" "),s("p",[e._v("响应的大致内容:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("HTTP/1.1 200 OK(CRLF)\nContent-Type: text/html(CRLF)\nContent-Length: 2546(CRLF)(CRLF)\n1011101010101010101......\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("这里的两个响应头:\nContent-Type是用来告知浏览器响应正文中的内容是什么类型的数据(图片，页面等等)\n不同的类型对应的值是不同的，比如:")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("文件类型")]),e._v(" "),s("th",[e._v("Content-Type对应的值")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[s("code",[e._v("html")])]),e._v(" "),s("td",[s("code",[e._v("text/html")])])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("css")])]),e._v(" "),s("td",[s("code",[e._v("text/css")])])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("js")])]),e._v(" "),s("td",[s("code",[e._v("application/javascript")])])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("png")])]),e._v(" "),s("td",[s("code",[e._v("image/png")])])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("gif")])]),e._v(" "),s("td",[s("code",[e._v("image/gif")])])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("jpg")])]),e._v(" "),s("td",[s("code",[e._v("image/jpeg")])])])])]),e._v(" "),s("p",[e._v("Content-Length是用来告知浏览器响应正文的长度，单位是字节。")]),e._v(" "),s("p",[e._v("浏览器接收正文前会根据上述两个响应头来得知长度和类型从而读取出来做对应的处理以显示给用户看。")]),e._v(" "),s("h2",{attrs:{id:"相对路径与绝对路径"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相对路径与绝对路径"}},[e._v("#")]),e._v(" 相对路径与绝对路径")]),e._v(" "),s("p",[e._v("在html页面上我们可以指定一个资源的路径以便加载或使用。例如超链接，图片\n等标签上常常会指定一个路径.")]),e._v(" "),s("p",[e._v("路径有两种:")]),e._v(" "),s("h3",{attrs:{id:"_1-相对路径"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-相对路径"}},[e._v("#")]),e._v(" 1:相对路径")]),e._v(" "),s("p",[e._v('页面上使用"'),s("code",[e._v("./")]),e._v('"表示当前目录时，由于html是被浏览器解释的，因此该路径不能与在java源代码中使用"'),s("code",[e._v("./")]),e._v('"混淆(实际表示的路径不相同!)')]),e._v(" "),s("p",[e._v('浏览器在解释页面上的"'),s("code",[e._v("./")]),e._v('"时，是根据请求当前页面时URL中该页面所在的目录:\n例如:\n请求当前首页。我们在浏览器输入的地址为:')]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("http://localhost:8088/myweb/index.html\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v('那么在index.html页面中若使用了"'),s("code",[e._v("./")]),e._v('"路径，则浏览器理解的实际位置:')]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(" http://localhost:8088/myweb/\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("因此若页面上")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<img src="./logo.png">\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("浏览器实际理解的该图片路径为:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(" http://localhost:8088/myweb/logo.png\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("相对路径在进行内部转发操作时可能导致定位失效。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("  http://localhost:8088/myweb/index123.html\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("404页面上")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('  <img src="./404.png">\n http://localhost:8088/myweb/404.png\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v('"'),s("code",[e._v("./")]),e._v('"是URL中抽象路径中最后一个"'),s("code",[e._v("/")]),e._v('"的位置\n"'),s("code",[e._v("/")]),e._v('"是URL中抽象路径中第一个"'),s("code",[e._v("/")]),e._v('"的位置')]),e._v(" "),s("p",[e._v("​")]),e._v(" "),s("h3",{attrs:{id:"_2-绝对路径"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-绝对路径"}},[e._v("#")]),e._v(" 2:绝对路径")]),e._v(" "),s("p",[e._v('"'),s("code",[e._v("/")]),e._v('":根。指的位置是URL当中抽象路径开始的"'),s("code",[e._v("/")]),e._v('"')]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("举例:                              v\n http://localhost:8088/myweb/index.html\n                                      |----抽象路径-----|\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("在index.html页面上:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<img src="/myweb/logo.png">\n                           ^就是绝对路径中"/",对应URL中抽象路径部分起始的"/":\n http://localhost:8088/myweb/index.html\n                                        ^\n\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[e._v("因此，浏览器理解该图片的实际位置:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("  http://localhost:8088/myweb/logo.png\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h2",{attrs:{id:"更多资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更多资料"}},[e._v("#")]),e._v(" 更多资料")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/ProMatheus-ltsc/matheusblog/releases/download/HTTP/HTTP.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTTP权威指南"),s("OutboundLink")],1)]),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/ProMatheus-ltsc/matheusblog/blob/main/assets/http%E5%8D%8F%E8%AE%AE.txt",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTTP协议"),s("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);