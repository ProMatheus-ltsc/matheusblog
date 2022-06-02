(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{1364:function(s,a,e){"use strict";e.r(a);var t=e(24),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"docker数据管理实践"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker数据管理实践"}},[s._v("#")]),s._v(" Docker数据管理实践")]),s._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#概述"}},[s._v("概述")])]),e("li",[e("a",{attrs:{href:"#数据卷"}},[s._v("数据卷")])]),e("li",[e("a",{attrs:{href:"#数据卷操作"}},[s._v("数据卷操作")])]),e("li",[e("a",{attrs:{href:"#挂载主机目录"}},[s._v("挂载主机目录")])])])]),e("p"),s._v(" "),e("h2",{attrs:{id:"概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),e("p",[s._v("在容器中管理数据主要有两种方式：")]),s._v(" "),e("ul",[e("li",[s._v("数据卷（Volumes）")]),s._v(" "),e("li",[s._v("挂载主机目录 (Bind mounts)")])]),s._v(" "),e("h2",{attrs:{id:"数据卷"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据卷"}},[s._v("#")]),s._v(" 数据卷")]),s._v(" "),e("p",[s._v("数据卷是一个可供一个或多个容器使用的特殊目录，可以在容器之间共享和重用，默认会一直存在，即使容器被删除。")]),s._v(" "),e("h2",{attrs:{id:"数据卷操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据卷操作"}},[s._v("#")]),s._v(" 数据卷操作")]),s._v(" "),e("p",[s._v("第一步：创建数据卷，例如：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker volume create container-vol\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("第二步：查看所有数据卷，例如：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker volume ls\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("查看指定 数据卷 的信息")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker volume inspect container-vol\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("查询的结果：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('[\n    {\n        "Driver": "local",\n        "Labels": {},\n        "Mountpoint": "/var/lib/docker/volumes/container-vol/_data",\n        "Name": "container-vol",\n        "Options": {},\n        "Scope": "local"\n    }\n]\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("p",[s._v("第三步：启动挂载数据卷的容器，例如：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker run -it --mount source=container-vol,target=/root centos:7 bash\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("或者采用如下简写方式")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker run -it -v container-vol:/root centos:7 bash\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("-v container-vol:/root 把数据卷 container-vol 挂载到容器的 /root 目录")]),s._v(" "),e("p",[s._v("第四步：删除数据卷(如果数据卷被容器使用则无法删除)，例如")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker volume rm container-vol\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("清理无主数据卷")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker volume prune\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"挂载主机目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#挂载主机目录"}},[s._v("#")]),s._v(" 挂载主机目录")]),s._v(" "),e("p",[s._v("我们还可以在启动容器时，以目录直接挂载的方式进行数据操作，例如：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker run -it -v /usr/app:/opt/app centos:7 bash\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("其中：")]),s._v(" "),e("p",[s._v("1)/usr/app：为宿主机目录")]),s._v(" "),e("p",[s._v("2)/opt/app: 为启动容器的一个目录")]),s._v(" "),e("p",[s._v("3)-v 用于指定挂载目录，如果本地目录(宿主机目录)不存在， Docker 会自动为你按照挂载目录进行目录的创建。")]),s._v(" "),e("p",[s._v("例如:")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/999c7891ef8447a59213e6639327cf59.png",alt:"在这里插入图片描述"}})]),s._v(" "),e("p",[s._v("查看挂载目录信息")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker inspect 91a #91a 为容器id\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("显示结果：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('...\n\n"Mounts": [\n    {\n        "Type": "bind",\n        "Source": "/usr/app",\n        "Destination": "/opt/app",\n        "Mode": "",\n        "RW": true,\n        "Propagation": "rprivate"\n    }\n],\n\n...\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("h1",{attrs:{id:"总结-summary"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结-summary"}},[s._v("#")]),s._v(" 总结（Summary）")]),s._v(" "),e("p",[s._v("本章节重点讲解了容器中的数据管理操作，例如数据卷操作，目录的挂在操作。")])])}),[],!1,null,null,null);a.default=n.exports}}]);