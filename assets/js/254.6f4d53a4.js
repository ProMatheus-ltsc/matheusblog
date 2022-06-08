(window.webpackJsonp=window.webpackJsonp||[]).push([[254],{1534:function(a,s,e){"use strict";e.r(s);var r=e(65),t=Object(r.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"docker镜像操作实践"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker镜像操作实践"}},[a._v("#")]),a._v(" Docker镜像操作实践")]),a._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#下载镜像"}},[a._v("下载镜像")])]),e("li",[e("a",{attrs:{href:"#浏览镜像文件"}},[a._v("浏览镜像文件")])]),e("li",[e("a",{attrs:{href:"#查看镜像详情"}},[a._v("查看镜像详情")])]),e("li",[e("a",{attrs:{href:"#查看镜像历史"}},[a._v("查看镜像历史")])]),e("li",[e("a",{attrs:{href:"#导出镜像文件"}},[a._v("导出镜像文件")])]),e("li",[e("a",{attrs:{href:"#删除镜像文件"}},[a._v("删除镜像文件")])]),e("li",[e("a",{attrs:{href:"#导入镜像操作"}},[a._v("导入镜像操作")])]),e("li",[e("a",{attrs:{href:"#运行镜像文件"}},[a._v("运行镜像文件")])]),e("li",[e("a",{attrs:{href:"#docker批量删除容器、镜像"}},[a._v("docker批量删除容器、镜像")]),e("ul",[e("li",[e("a",{attrs:{href:"#_1、删除所有容器"}},[a._v("1、删除所有容器")])]),e("li",[e("a",{attrs:{href:"#_2、删除所有镜像"}},[a._v("2、删除所有镜像")])]),e("li",[e("a",{attrs:{href:"#_3、按条件删除镜像"}},[a._v("3、按条件删除镜像")])])])])])]),e("p"),a._v(" "),e("h2",{attrs:{id:"下载镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载镜像"}},[a._v("#")]),a._v(" 下载镜像")]),a._v(" "),e("p",[a._v("语法：docker pull 镜像名\n案例：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker pull hello-world\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h2",{attrs:{id:"浏览镜像文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览镜像文件"}},[a._v("#")]),a._v(" 浏览镜像文件")]),a._v(" "),e("p",[a._v("语法：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker images\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h2",{attrs:{id:"查看镜像详情"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看镜像详情"}},[a._v("#")]),a._v(" 查看镜像详情")]),a._v(" "),e("p",[a._v("语法：docker inspect 镜像名或镜像id")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" inspect hello-world\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h2",{attrs:{id:"查看镜像历史"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看镜像历史"}},[a._v("#")]),a._v(" 查看镜像历史")]),a._v(" "),e("p",[a._v("一个镜像是由多个层（"),e("a",{attrs:{href:"https://so.csdn.net/so/search?q=layer&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"}},[a._v("layer"),e("OutboundLink")],1),a._v("）组成的，那么，我们要如何知道各个层的具体内容呢？通过 docker history 命令，可以列出各个层（layer）的创建信息，例如：")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("history")]),a._v(" hello-world\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h2",{attrs:{id:"导出镜像文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#导出镜像文件"}},[a._v("#")]),a._v(" 导出镜像文件")]),a._v(" "),e("p",[a._v("镜像导出(linux系统中的镜像文件下载到本地-例如window)，导出后给他人使用")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" save  hello-world "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("gzip")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" hello-world.tar.gz  \n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h2",{attrs:{id:"删除镜像文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除镜像文件"}},[a._v("#")]),a._v(" 删除镜像文件")]),a._v(" "),e("p",[a._v("语法：docker image rm 镜像名或镜像id")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker image rm hello-world\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("docker中删除所有的镜像")]),a._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[a._v("docker rmi "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("$")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("docker images "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" awk "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'{print $3}'")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("tail "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("n "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("镜像名包含关键字")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker rmi --force `docker images | grep doss-api | awk '{print $3}'`    //其中doss-api为关键字\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h2",{attrs:{id:"导入镜像操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#导入镜像操作"}},[a._v("#")]),a._v(" 导入镜像操作")]),a._v(" "),e("p",[a._v("镜像导入（要在hello-world.tar.gz 文件所在目录下执行）")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" load "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" hello-world.tar.gz  \n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h2",{attrs:{id:"运行镜像文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行镜像文件"}},[a._v("#")]),a._v(" 运行镜像文件")]),a._v(" "),e("p",[a._v("基于镜像，启动容器运行。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker run hello-world\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h2",{attrs:{id:"docker批量删除容器、镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker批量删除容器、镜像"}},[a._v("#")]),a._v(" docker批量删除容器、镜像")]),a._v(" "),e("h3",{attrs:{id:"_1、删除所有容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、删除所有容器"}},[a._v("#")]),a._v(" 1、删除所有容器")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker rm `docker ps -a -q`\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"_2、删除所有镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、删除所有镜像"}},[a._v("#")]),a._v(" 2、删除所有镜像")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker rmi `docker images -q`\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"_3、按条件删除镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、按条件删除镜像"}},[a._v("#")]),a._v(" 3、按条件删除镜像")]),a._v(" "),e("p",[a._v("没有打标签")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker rmi `docker images -q | awk '/^<none>/ { print $3 }'`\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("镜像名包含关键字")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker rmi --force `docker images | grep doss-api | awk '{print $3}'`    //其中doss-api为关键字\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h1",{attrs:{id:"总结-summary"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结-summary"}},[a._v("#")]),a._v(" 总结(Summary)")]),a._v(" "),e("p",[a._v("本小节重点讲解了Docker中核心对象-镜像（image)的基本操作，例如下载镜像、查看下载的镜像、查看镜像详细信息，构建历史等。")])])}),[],!1,null,null,null);s.default=t.exports}}]);