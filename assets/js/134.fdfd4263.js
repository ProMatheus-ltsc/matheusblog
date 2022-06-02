(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{1363:function(a,s,e){"use strict";e.r(s);var t=e(24),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"docker镜像操作实践"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker镜像操作实践"}},[a._v("#")]),a._v(" Docker镜像操作实践")]),a._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#下载镜像"}},[a._v("下载镜像")])]),e("li",[e("a",{attrs:{href:"#浏览镜像文件"}},[a._v("浏览镜像文件")])]),e("li",[e("a",{attrs:{href:"#查看镜像详情"}},[a._v("查看镜像详情")])]),e("li",[e("a",{attrs:{href:"#查看镜像历史"}},[a._v("查看镜像历史")])]),e("li",[e("a",{attrs:{href:"#导出镜像文件"}},[a._v("导出镜像文件")])]),e("li",[e("a",{attrs:{href:"#删除镜像文件"}},[a._v("删除镜像文件")])]),e("li",[e("a",{attrs:{href:"#导入镜像操作"}},[a._v("导入镜像操作")])]),e("li",[e("a",{attrs:{href:"#运行镜像文件"}},[a._v("运行镜像文件")])])])]),e("p"),a._v(" "),e("h2",{attrs:{id:"下载镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载镜像"}},[a._v("#")]),a._v(" 下载镜像")]),a._v(" "),e("p",[a._v("语法：docker pull 镜像名\n案例：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker pull hello-world\n1\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("h2",{attrs:{id:"浏览镜像文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览镜像文件"}},[a._v("#")]),a._v(" 浏览镜像文件")]),a._v(" "),e("p",[a._v("语法：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker images\n1\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("h2",{attrs:{id:"查看镜像详情"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看镜像详情"}},[a._v("#")]),a._v(" 查看镜像详情")]),a._v(" "),e("p",[a._v("语法：docker inspect 镜像名或镜像id")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" inspect hello-world\n"),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("h2",{attrs:{id:"查看镜像历史"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看镜像历史"}},[a._v("#")]),a._v(" 查看镜像历史")]),a._v(" "),e("p",[a._v("一个镜像是由多个层（"),e("a",{attrs:{href:"https://so.csdn.net/so/search?q=layer&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"}},[a._v("layer"),e("OutboundLink")],1),a._v("）组成的，那么，我们要如何知道各个层的具体内容呢？通过 docker history 命令，可以列出各个层（layer）的创建信息，例如：")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("history")]),a._v(" hello-world\n"),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("h2",{attrs:{id:"导出镜像文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#导出镜像文件"}},[a._v("#")]),a._v(" 导出镜像文件")]),a._v(" "),e("p",[a._v("镜像导出(linux系统中的镜像文件下载到本地-例如window)，导出后给他人使用")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" save  hello-world "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("gzip")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" hello-world.tar.gz  \n"),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("h2",{attrs:{id:"删除镜像文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除镜像文件"}},[a._v("#")]),a._v(" 删除镜像文件")]),a._v(" "),e("p",[a._v("语法：docker image rm 镜像名或镜像id")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker image rm hello-world\n1\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("h2",{attrs:{id:"导入镜像操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#导入镜像操作"}},[a._v("#")]),a._v(" 导入镜像操作")]),a._v(" "),e("p",[a._v("镜像导入（要在hello-world.tar.gz 文件所在目录下执行）")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" load "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" hello-world.tar.gz  \n"),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("h2",{attrs:{id:"运行镜像文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行镜像文件"}},[a._v("#")]),a._v(" 运行镜像文件")]),a._v(" "),e("p",[a._v("基于镜像，启动容器运行。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker run hello-world\n1\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("h1",{attrs:{id:"总结-summary"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结-summary"}},[a._v("#")]),a._v(" 总结(Summary)")]),a._v(" "),e("p",[a._v("本小节重点讲解了Docker中核心对象-镜像（image)的基本操作，例如下载镜像、查看下载的镜像、查看镜像详细信息，构建历史等。")])])}),[],!1,null,null,null);s.default=r.exports}}]);