(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{1383:function(t,a,e){"use strict";e.r(a);var v=e(24),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"tcp-ip命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip命令"}},[t._v("#")]),t._v(" TCP/IP命令")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#mtu"}},[t._v("MTU")])]),e("li",[e("a",{attrs:{href:"#ip地址"}},[t._v("IP地址")])]),e("li",[e("a",{attrs:{href:"#域名"}},[t._v("域名")])]),e("li",[e("a",{attrs:{href:"#端口号"}},[t._v("端口号")])]),e("li",[e("a",{attrs:{href:"#封装和分用"}},[t._v("封装和分用")]),e("ul",[e("li",[e("a",{attrs:{href:"#封装"}},[t._v("封装")])]),e("li",[e("a",{attrs:{href:"#分用"}},[t._v("分用")])])])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"mtu"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mtu"}},[t._v("#")]),t._v(" MTU")]),t._v(" "),e("p",[t._v("命令 "),e("code",[t._v("netstat -in")]),t._v(" 可以查看网络接口的 MTU")]),t._v(" "),e("h2",{attrs:{id:"ip地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ip地址"}},[t._v("#")]),t._v(" IP地址")]),t._v(" "),e("p",[e("code",[t._v("ifconfig -a")]),t._v(" :查看自己的 IP 地址")]),t._v(" "),e("h2",{attrs:{id:"域名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#域名"}},[t._v("#")]),t._v(" 域名")]),t._v(" "),e("p",[t._v("用 12 位数字组成的 IP 地址很难记忆，在实际应用时，用户一般不需要记住 IP 地址，互联网给每个 IP 地址起了一个别名，习惯上称作域名。\n域名与计算机的 IP 地址相对应，并把这种对应关系存储在域名服务系统 DNS(Domain Name System) 中，这样用户只需记住域名就可以与指定的计算机进行通信了。\n常见的域名包括 com、net 和 org 三种顶级域名后缀，除此之外每个国家还有自己国家专属的域名后缀（比如我国的域名后缀为 cn）。\n我们可以使用命令 "),e("code",[t._v("nslookup")]),t._v(" 或者 "),e("code",[t._v("ping")]),t._v(" 来查看与域名相对应的 IP 地址")]),t._v(" "),e("h2",{attrs:{id:"端口号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#端口号"}},[t._v("#")]),t._v(" 端口号")]),t._v(" "),e("p",[t._v("IP 地址是用来发现和查找网络中的地址的，但是不同程序如何互相通信呢，这就需要端口号来识别了。如果把 IP 地址比作一间房子 ，端口就是出入这间房子的门。真正的房子只有几个门，但是端口采用 16 比特的端口号标识，一个 IP 地址的端口可以有 65536（即：2^16）个之多！\n服务器的默认程序一般都是通过人们所熟知的端口号来识别的。例如，对于每个 TCP/IP 实现来说，SMTP（简单邮件传输协议）服务器的 TCP 端口号都是 "),e("code",[t._v("25")]),t._v("，FTP（文件传输协议）服务器的 TCP 端口号都是 "),e("code",[t._v("21")]),t._v("，TFTP(简单文件传输协议)服务器的 UDP 端口号都是 "),e("code",[t._v("69")]),t._v("。任何 TCP/IP 实现所提供的服务都用众所周知的 "),e("code",[t._v("1－1023")]),t._v(" 之间的端口号。这些人们所熟知的端口号由 Internet 端口号分配机构（Internet Assigned Numbers Authority, IANA）来管理。\n常用协议对应端口号：\n"),e("code",[t._v("SSH")]),t._v(" 22\n"),e("code",[t._v("FTP")]),t._v(" 20 和 21\n"),e("code",[t._v("Telnet")]),t._v(" 23\n"),e("code",[t._v("SMTP")]),t._v(" 25\n"),e("code",[t._v("TFTP")]),t._v(" 69\n"),e("code",[t._v("HTTP")]),t._v(" 80\n"),e("code",[t._v("SNMP")]),t._v(" 161\n"),e("code",[t._v("Ping")]),t._v(" 使用ICMP，无具体端口号")]),t._v(" "),e("h2",{attrs:{id:"封装和分用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#封装和分用"}},[t._v("#")]),t._v(" 封装和分用")]),t._v(" "),e("h3",{attrs:{id:"封装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#封装"}},[t._v("#")]),t._v(" 封装")]),t._v(" "),e("p",[t._v("当应用程序发送数据的时候，数据在协议层次当中从顶向下通过每一层，每一层都会对数据增加一些首部或尾部信息，这样的信息称之为协议数据单元（Protocol Data Unit，缩写为PDU），在分层协议系统里，在指定的协议层上传送的数据单元，包含了该层的协议控制信息和用户信息。如下图所示：")]),t._v(" "),e("p",[t._v("物理层（一层）PDU指数据位（Bit）\n数据链路层（二层）PDU指数据帧（Frame）\n网络层（三层）PDU指数据包（Packet）\n传输层（四层）PDU指数据段（Segment）\n第五层以上为数据（data）")]),t._v(" "),e("h3",{attrs:{id:"分用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分用"}},[t._v("#")]),t._v(" 分用")]),t._v(" "),e("p",[t._v("当主机收到一个数据帧时，数据就从协议层底向上升，通过每一层时，检查并去掉对应层次的报文首部或尾部，与封装过程正好相反。")])])}),[],!1,null,null,null);a.default=_.exports}}]);