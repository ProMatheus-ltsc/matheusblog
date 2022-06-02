(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{1536:function(s,a,t){"use strict";t.r(a);var e=t(24),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"docker容器互联实践"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker容器互联实践"}},[s._v("#")]),s._v(" Docker容器互联实践")]),s._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#概述"}},[s._v("概述")])]),t("li",[t("a",{attrs:{href:"#解决方案"}},[s._v("解决方案")])]),t("li",[t("a",{attrs:{href:"#架构设计"}},[s._v("架构设计")])]),t("li",[t("a",{attrs:{href:"#新建网络"}},[s._v("新建网络")])]),t("li",[t("a",{attrs:{href:"#查看网络信息"}},[s._v("查看网络信息")])]),t("li",[t("a",{attrs:{href:"#创建容器"}},[s._v("创建容器")])]),t("li",[t("a",{attrs:{href:"#测试网络互通"}},[s._v("测试网络互通")])]),t("li",[t("a",{attrs:{href:"#重难点分析"}},[s._v("重难点分析")])]),t("li",[t("a",{attrs:{href:"#faq分析"}},[s._v("FAQ分析")])]),t("li",[t("a",{attrs:{href:"#bug分析"}},[s._v("Bug分析")])])])]),t("p"),s._v(" "),t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),t("p",[s._v("Docker中存在多个容器时，容器与容器之间经常需要进行通讯，例如nacos访问mysql，redis集群中各个节点之间的通讯。")]),s._v(" "),t("h2",{attrs:{id:"解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[s._v("#")]),s._v(" 解决方案")]),s._v(" "),t("p",[s._v("Docker 中容器与容器之间进行通讯的解决方案一般有两种：")]),s._v(" "),t("p",[s._v("第一种：两个容器通过宿主机进行通讯（容器中的端口会映射到宿主机上）")]),s._v(" "),t("p",[s._v("第二种：两个容器之间直接通过虚拟网络进行连接,但是需要我们在docker中创建网络。")]),s._v(" "),t("h1",{attrs:{id:"初始化网路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化网路"}},[s._v("#")]),s._v(" 初始化网路")]),s._v(" "),t("h2",{attrs:{id:"架构设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#架构设计"}},[s._v("#")]),s._v(" 架构设计")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/1532df01c3714d7282733ab0e8c7dba7.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("h2",{attrs:{id:"新建网络"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新建网络"}},[s._v("#")]),s._v(" 新建网络")]),s._v(" "),t("p",[s._v("例如：创建名字为t-net的网络")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" network create -d bridge t-net  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#t-net为自己起的网络名称")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("其中，-d driver,网络类型，默认 bridge。\n说明，创建好这个网络以后，在网落上添加容器，容器就可以通讯了")]),s._v(" "),t("h2",{attrs:{id:"查看网络信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看网络信息"}},[s._v("#")]),s._v(" 查看网络信息")]),s._v(" "),t("p",[s._v("列出所属有网络")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" network "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("查看网络信息")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" inspect 67d "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#67d 为创建的网络id")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h1",{attrs:{id:"实现容器互联"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现容器互联"}},[s._v("#")]),s._v(" 实现容器互联")]),s._v(" "),t("h2",{attrs:{id:"创建容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建容器"}},[s._v("#")]),s._v(" 创建容器")]),s._v(" "),t("p",[s._v("打开终端，基于centos:7这个镜像启动容器，并加入到t-net这个网络")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -it --name app1 --network t-net centos:7\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("新开终端执行，基于centos:7这个镜像再启动容器，同时也加入到t-net网络")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -it --name app2 --network t-net centos:7\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"测试网络互通"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试网络互通"}},[s._v("#")]),s._v(" 测试网络互通")]),s._v(" "),t("p",[s._v("在两个终端中分别执行：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v(" app1\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v(" app2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("显示如下：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@35569c623c4c /"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ping app1")]),s._v("\nPING app1 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.18")]),s._v(".0.2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("56")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("84")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" bytes of data.\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" bytes from 35569c623c4c "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.18")]),s._v(".0.2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("icmp_seq")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ttl")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("time")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.577")]),s._v(" ms\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" bytes from 35569c623c4c "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.18")]),s._v(".0.2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("icmp_seq")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ttl")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("time")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.061")]),s._v(" ms\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" bytes from 35569c623c4c "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.18")]),s._v(".0.2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("icmp_seq")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ttl")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("time")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.066")]),s._v(" ms\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h1",{attrs:{id:"总结-summary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结-summary"}},[s._v("#")]),s._v(" 总结（summary）")]),s._v(" "),t("h2",{attrs:{id:"重难点分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重难点分析"}},[s._v("#")]),s._v(" 重难点分析")]),s._v(" "),t("ul",[t("li",[s._v("容器互联方案")]),s._v(" "),t("li",[s._v("创建网络方式")]),s._v(" "),t("li",[s._v("应用网络")])]),s._v(" "),t("h2",{attrs:{id:"faq分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#faq分析"}},[s._v("#")]),s._v(" FAQ分析")]),s._v(" "),t("ul",[t("li",[s._v("什么是容器互联?")]),s._v(" "),t("li",[s._v("为什么需要创建网络？")]),s._v(" "),t("li",[s._v("如何创建网络？")]),s._v(" "),t("li",[s._v("如何应用网络？")]),s._v(" "),t("li",[s._v("如何测试网络是否是通的？")])]),s._v(" "),t("h2",{attrs:{id:"bug分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bug分析"}},[s._v("#")]),s._v(" Bug分析")]),s._v(" "),t("ul",[t("li",[s._v("…")])])])}),[],!1,null,null,null);a.default=r.exports}}]);