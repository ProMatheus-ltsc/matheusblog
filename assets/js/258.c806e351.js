(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{1537:function(s,a,e){"use strict";e.r(a);var t=e(65),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"docker镜像安装实践"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker镜像安装实践"}},[s._v("#")]),s._v(" Docker镜像安装实践")]),s._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#端口映射"}},[s._v("端口映射")])]),e("li",[e("a",{attrs:{href:"#安装步骤"}},[s._v("安装步骤")])]),e("li",[e("a",{attrs:{href:"#登陆mysql服务"}},[s._v("登陆mysql服务")])]),e("li",[e("a",{attrs:{href:"#停止和启动mysql服务"}},[s._v("停止和启动mysql服务")])]),e("li",[e("a",{attrs:{href:"#安装步骤"}},[s._v("安装步骤")])]),e("li",[e("a",{attrs:{href:"#访问redis服务器"}},[s._v("访问redis服务器")])]),e("li",[e("a",{attrs:{href:"#停止和启动redis服务"}},[s._v("停止和启动redis服务")])]),e("li",[e("a",{attrs:{href:"#安装步骤"}},[s._v("安装步骤")])]),e("li",[e("a",{attrs:{href:"#访问nginx服务"}},[s._v("访问nginx服务")])]),e("li",[e("a",{attrs:{href:"#停止和nginx服务"}},[s._v("停止和nginx服务")])]),e("li",[e("a",{attrs:{href:"#安装步骤"}},[s._v("安装步骤")])]),e("li",[e("a",{attrs:{href:"#访问nacos服务"}},[s._v("访问nacos服务")])]),e("li",[e("a",{attrs:{href:"#nacos-与-mysql-通讯分析"}},[s._v("Nacos 与 MySQL 通讯分析")])]),e("li",[e("a",{attrs:{href:"#停止和启动nacos服务"}},[s._v("停止和启动nacos服务")])])])]),e("p"),s._v(" "),e("h2",{attrs:{id:"端口映射"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#端口映射"}},[s._v("#")]),s._v(" 端口映射")]),s._v(" "),e("p",[s._v("Docker允许通过外部访问容器或者容器之间互联的方式来提供网络服务。 容器启动之后，容器中可以运行一些网络应用，通过-p或-P参数来指定端口映射。")]),s._v(" "),e("p",[s._v("注意： 宿主机的一个端口只能映射到容器内部的某一个端口上，比如：8080->80之后，就不能8080->81 容器内部的某个端口可以被宿主机的多个端口映射,比如：8080->80，8090->80,8099->80")]),s._v(" "),e("p",[e("strong",[s._v("1）启动容器时，选择一个端口映射到容器内部开放端口上")]),s._v(" "),e("strong",[s._v("-p")]),s._v(" 小写p表示docker会选择一个具体的宿主机端口映射到容器内部开放的网络端口上。 "),e("strong",[s._v("-P")]),s._v(" 大写P表示docker会随机选择一个宿主机端口映射到容器内部开放的网络端口上。")]),s._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@docker"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("test "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("# docker run "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ti "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("d "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("name my"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("nginx "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8088")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" docker"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("io"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx\n2218c7d88ccc917fd0aa0ec24e6d81667eb588f491d3730deb09289dcf6b8125\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@docker"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("test "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("# docker run "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ti "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("d "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("name my"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("nginx2 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("P")]),s._v(" docker"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("io"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx\n589237ceec9d5d1de045a5395c0d4b519acf54e8c09afb07af49de1b06d71059\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@docker"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("test "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("# docker ps\n"),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CONTAINER")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ID")]),s._v("        "),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("IMAGE")]),s._v("               "),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("COMMAND")]),s._v("                  "),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CREATED")]),s._v("              "),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("STATUS")]),s._v("              "),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PORTS")]),s._v("                   "),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NAMES")]),s._v("\n589237ceec9d        docker"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("io"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx     "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx -g \'daemon ..."')]),s._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" seconds ago        Up "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" seconds        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("32770")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("tcp   my"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("nginx2\n2218c7d88ccc        docker"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("io"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx     "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx -g \'daemon ..."')]),s._v("   About a minute ago   Up About a minute   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8088")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("tcp    my"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("nginx\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("由上面可知：\n容器my-nginx启动时使用了-p，选择宿主机具体的8088端口映射到容器内部的80端口上了，访问http://localhost/8088即可\n容器my-nginx2启动时使用了-P，选择宿主机的一个随机端口映射到容器内部的80端口上了，这里随机端口是32770，访问http://localhost/32770即可")]),s._v(" "),e("p",[e("strong",[s._v("2）启动创建时，绑定外部的ip和端口（宿主机ip是192.168.10.214）")])]),s._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@docker"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("test "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("# docker run "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ti "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("d "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("name my"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("nginx3 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8888")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" docker"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("io"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx  \ndebca5ec7dbb770ca307b06309b0e24b81b6bf689cb11474ec1ba187f4d7802c\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@docker"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("test "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("# docker run "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ti "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("d "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("name my"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("nginx4 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v(".10")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v(".214")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9999")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" docker"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("io"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx               \nba72a93196f7e55020105b90a51d2203f9cc4d09882e7848ff72f9c43d81852a\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@docker"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("test "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("# docker ps\n"),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CONTAINER")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ID")]),s._v("        "),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("IMAGE")]),s._v("               "),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("COMMAND")]),s._v("                  "),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CREATED")]),s._v("             "),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("STATUS")]),s._v("              "),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PORTS")]),s._v("                         "),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NAMES")]),s._v("\nba72a93196f7        docker"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("io"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx     "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx -g \'daemon ..."')]),s._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" seconds ago       Up "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" second         "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v(".10")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v(".214")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9999")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("tcp   my"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("nginx4\ndebca5ec7dbb        docker"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("io"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx     "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx -g \'daemon ..."')]),s._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" minutes ago       Up "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" minutes        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8888")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("tcp        my"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("nginx3\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("由上面可知：\n容器my-nginx3绑定的宿主机外部ip是127.0.0.1，端口是8888，则访问http://127.0.0.1:8888或http://localhost:8888都可以，访问http://192.168.10.214:8888就会拒绝！\n容器my-nginx4绑定的宿主机外部ip是192.168.10.214，端口是9999，则访问http://192.168.10.214:9")]),s._v(" "),e("h1",{attrs:{id:"安装mariadb数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装mariadb数据库"}},[s._v("#")]),s._v(" 安装Mariadb数据库")]),s._v(" "),e("p",[s._v("1、pull镜像")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("\ndocker search mariadb\n\ndocker pull mariadb\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("2、查看下载的镜像")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("\ndocker images\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("3、运行容器")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("\ndocker run -itd --name mariadb-test -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456  mariadb\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[e("strong",[s._v("-p 3306:3306")]),s._v(" ：映射容器服务的 3306 端口到宿主机的 3306 端口，外部可以直接通过宿主机ip:3306 访问到 mariadb 的服务。")]),s._v(" "),e("p",[e("strong",[s._v("MYSQL_ROOT_PASSWORD=123456")]),s._v("：设置 MySQL 服务 root 用户的密码。")]),s._v(" "),e("p",[s._v("如果不先pull而直接run的话也会提示你设置密码，不然运行不了！")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/24447700-412fb13b65ed81ba.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1063/format/webp",alt:"img"}})]),s._v(" "),e("p",[s._v("4、查看你运行的容器")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("\ndocker ps\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/24447700-f41fa7ace03b6fe5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1119/format/webp",alt:"img"}})]),s._v(" "),e("p",[e("code",[s._v("ps -ef | grep docker | grep -v grep")]),s._v("也可以看到运行的容器，172.17.0.2为容器的ip地址，可以通过"),e("code",[s._v("docker network inspect bridge")]),s._v("来具体查看。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/24447700-cd3fcf7905e4ce40.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1200/format/webp",alt:"img"}})]),s._v(" "),e("p",[e("code",[s._v("docker stats")]),s._v("查看容器占用资源")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/24447700-b7c61930abb6682a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/977/format/webp",alt:"img"}})]),s._v(" "),e("p",[s._v("5、进入容器连接数据库")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/24447700-b21a690ac0b12aca.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1200/format/webp",alt:"img"}})]),s._v(" "),e("p",[s._v("6、因虚拟机没有mysql工具，于是在物理机192.168.31.40上远程连接数据库成功。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/24447700-47f018da82c54e5b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/692/format/webp",alt:"img"}})]),s._v(" "),e("p",[s._v("7、Navicat上连接数据库成功。")]),s._v(" "),e("p",[s._v("容器服务的 3306 端口到宿主机的 3306 端口，使用在虚拟机上的3306端口可以访问mariadb数据库服务。IP即为虚拟机的IP地址。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/24447700-131df2a1c53b308b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/569/format/webp",alt:"img"}})]),s._v(" "),e("p",[s._v("8、配置文件50-server.cnf")]),s._v(" "),e("p",[s._v("配置文件在目录下/etc/mysql/mariadb.conf.d，和真实安装的路径一样。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/24447700-17265a04115d01ff.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1108/format/webp",alt:"img"}})]),s._v(" "),e("p",[s._v("数据文件：/var/lib/mysql/")]),s._v(" "),e("p",[s._v("mysql客户端工具目录：/usr/bin/mysql")]),s._v(" "),e("h1",{attrs:{id:"安装mysql数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装mysql数据库"}},[s._v("#")]),s._v(" 安装MySql数据库")]),s._v(" "),e("h2",{attrs:{id:"安装步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装步骤"}},[s._v("#")]),s._v(" 安装步骤")]),s._v(" "),e("p",[s._v("第一步：在hub.docker.com上搜索mysql镜像")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/bc2240bff07b4dc5816f0311437a0734.png",alt:"在这里插入图片描述"}})]),s._v(" "),e("p",[s._v("第二步：拉取指定版本的mysql，也可以指定拉取版本，例如：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(" docker pull mysql:8.0.23\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("第三步：检查mysql镜像")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(" docker images\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("第四步：启动运行mysql镜像 (docker run 用于启动一个容器)")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sudo docker run -p 3306:3306 --name mysql \\\n-v /usr/local/docker/mysql/mysql-files:/var/lib/mysql-files \\\n-v /usr/local/docker/mysql/conf:/etc/mysql \\\n-v /usr/local/docker/mysql/logs:/var/log/mysql \\\n-v /usr/local/docker/mysql/data:/var/lib/mysql \\\n-e MYSQL_ROOT_PASSWORD=root \\\n-d mysql:8.0.23\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("假如安装过程中失败了，则可通过docker ps -a 查看以前的容器，假如已存在，则通过docker rm 镜像id 删除再重新安装即可。")]),s._v(" "),e("h2",{attrs:{id:"登陆mysql服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#登陆mysql服务"}},[s._v("#")]),s._v(" 登陆mysql服务")]),s._v(" "),e("p",[s._v("第一步：进入容器 (退出容器用exit)")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sudo docker exec -it mysql bash\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("第二步：登陆(默认密码root)，一定要先进入mysql容器。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mysql -uroot -proot\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"停止和启动mysql服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#停止和启动mysql服务"}},[s._v("#")]),s._v(" 停止和启动mysql服务")]),s._v(" "),e("p",[s._v("停止mysql服务（可选）")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker stop mysql\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("启动mysql服务")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker start mysql\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("假如希望查看mysql启动时的日志，可以执行 docker container logs mysql 这个指令。")]),s._v(" "),e("p",[s._v("设置mysql开机自启动（可选）")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker update mysql --restart=always\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h1",{attrs:{id:"安装redis数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装redis数据库"}},[s._v("#")]),s._v(" 安装Redis数据库")]),s._v(" "),e("h2",{attrs:{id:"安装步骤-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装步骤-2"}},[s._v("#")]),s._v(" 安装步骤")]),s._v(" "),e("p",[s._v("第一步：下载镜像文件")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker pull redis\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("第二步：准备配置文件")]),s._v(" "),e("p",[s._v("创建redis配置文件目录")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mkdir -p /usr/local/docker/redis01/conf\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("在配置文件录下创建redis.conf配置文件(这个文件一定要创建，否在我们进行目录挂载时默认生成的是一个目录)")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("touch /usr/local/docker/redis01/conf/redis.conf\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("第三步：创建redis实例并启动")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sudo docker run -p 6379:6379 --name redis01 \\\n-v /usr/local/docker/redis01/data:/data \\\n-v /usr/local/docker/redis01/conf/redis.conf:/etc/redis/redis.conf \\\n-d redis redis-server /etc/redis/redis.conf \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("第四步：查看正在运行的进程")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker ps\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"访问redis服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#访问redis服务器"}},[s._v("#")]),s._v(" 访问redis服务器")]),s._v(" "),e("p",[s._v("第一步：控制台直接连接redis测试")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker exec -it redis01 bash\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("第二步：检测redis 版本")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("redis-server  -v\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("或者")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("redis-cli -v\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("第三步：登录redis(默认不需要密码)")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("redis-cli\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("或者直接将上面的两个步骤合为一个步骤执行也可以，指令如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker exec -it redis01 redis-cli\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"停止和启动redis服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#停止和启动redis服务"}},[s._v("#")]),s._v(" 停止和启动redis服务")]),s._v(" "),e("blockquote",[e("p",[s._v("停止redis服务？")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker stop redis01\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("blockquote",[e("p",[s._v("启动redis服务？")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker start redis01\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("blockquote",[e("p",[s._v("重启 redis 服务？")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker restart redis01\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h1",{attrs:{id:"安装nginx代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装nginx代理"}},[s._v("#")]),s._v(" 安装Nginx代理")]),s._v(" "),e("h2",{attrs:{id:"安装步骤-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装步骤-3"}},[s._v("#")]),s._v(" 安装步骤")]),s._v(" "),e("p",[s._v("第一步：拉取nginx镜像 （从这里hub.docker.com去查找）")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker pull nginx\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("第二步：查看images镜像")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker images\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("第三步:创建数据卷(这个对象会在宿主机直接创建一个目录)")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" volume create nginx-vol\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("说明:查看数据卷对应的宿主机目录,可以通过如下指令:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" inspect nginx-vol\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("第四步：启动nginx服务")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker run --name nginx  -p 80:80 -v nginx-vol:/etc/nginx -d nginx\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("其中:/etc/nginx 为nginx容器启动时,nginx镜像文件默认的解压目录")]),s._v(" "),e("p",[s._v("说明:假如以后想修改nginx配置,可以直接去nginx-vol数据卷对应的目录去修改.")]),s._v(" "),e("h2",{attrs:{id:"访问nginx服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#访问nginx服务"}},[s._v("#")]),s._v(" 访问nginx服务")]),s._v(" "),e("p",[s._v("进行访问检测，如图所示：")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/5bf24cb8cc4f45088899c12c7e12f516.png",alt:"在这里插入图片描述"}})]),s._v(" "),e("h2",{attrs:{id:"停止和nginx服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#停止和nginx服务"}},[s._v("#")]),s._v(" 停止和nginx服务")]),s._v(" "),e("blockquote",[e("p",[s._v("停止nginx服务")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker stop nginx\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("blockquote",[e("p",[s._v("启动nginx服务")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker start nginx\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("blockquote",[e("p",[s._v("重启nginx服务")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker restart nginx\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h1",{attrs:{id:"安装nacos组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装nacos组件"}},[s._v("#")]),s._v(" 安装Nacos组件")]),s._v(" "),e("h2",{attrs:{id:"安装步骤-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装步骤-4"}},[s._v("#")]),s._v(" 安装步骤")]),s._v(" "),e("p",[s._v("第一步：拉取nacos（hub.docker.com）")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker pull nacos/nacos-server:1.4.1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("第二步： mysql中执行nacos的sql脚本文件")]),s._v(" "),e("p",[s._v("1)将此文件nacos-mysql.sql(这个文件可从code服务器下载)拷贝到mysql容器的宿主机对应的挂载目录(可通过docker inspect mysql查看你mysql的挂载目录)")]),s._v(" "),e("p",[s._v("2)在linux环境下启动并登录mysql")]),s._v(" "),e("p",[s._v("进入mysql容器(前提是mysql已启动)")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it mysql "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("登录mysql")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("mysql -uroot -p\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("3)通过source指令运行容器目录下的sql文件")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v("  /etc/mysql/nacos-mysql.sql  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#这里的/etc/mysql为容器中的一个目录(要选择你自己挂载的目录)")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("例如:")]),s._v(" "),e("p",[s._v("第三步：创建并启动nacos容器(拷贝下面内容时,账号和密码要用自己宿主机ip,自己数据库的账号密码)")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('docker run  \\\n-e TZ="Asia/Shanghai" \\\n-e MODE=standalone \\\n-e SPRING_DATASOURCE_PLATFORM=mysql \\\n-e MYSQL_DATABASE_NUM=1 \\\n-e MYSQL_SERVICE_HOST=192.168.126.129 \\\n-e MYSQL_SERVICE_PORT=3306 \\\n-e MYSQL_SERVICE_USER=root \\\n-e MYSQL_SERVICE_PASSWORD=root \\\n-e MYSQL_SERVICE_DB_NAME=nacos_config \\\n-p 8848:8848 \\\n--name nacos \\\n--restart=always \\\n-d nacos/nacos-server:1.4.1\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("p",[s._v("参数说明")]),s._v(" "),e("ul",[e("li",[s._v("单节点模式\nMODE=standalone")]),s._v(" "),e("li",[s._v("数据库地址\nMYSQL_SERVICE_HOST")]),s._v(" "),e("li",[s._v("数据库用户名\nMYSQL_SERVICE_USER")]),s._v(" "),e("li",[s._v("数据库密码\nMYSQL_SERVICE_PASSWORD")]),s._v(" "),e("li",[s._v("需连接的数据库名称\nMYSQL_SERVICE_DB_NAME")]),s._v(" "),e("li",[s._v("端口映射\n-p 8848:8848")]),s._v(" "),e("li",[s._v("任意时候重启容器，开机就能自动启动容器（需设置docker为开机自启）")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("--restart=always\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("第四步：检查nacos服务")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("假如启动失败，检查启动日志，例如：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker container logs nacos\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("其中，nacos的启动日志在/home/nacos/logs/start.out文件中。")]),s._v(" "),e("h2",{attrs:{id:"访问nacos服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#访问nacos服务"}},[s._v("#")]),s._v(" 访问nacos服务")]),s._v(" "),e("p",[s._v("启动nacos，然后在windows中输入http://ip:port/nacos方式进行访问测试")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/47c437dc67ea440eb3edba6cc5ee5fa4.png",alt:"在这里插入图片描述"}}),s._v("\n说明,nacos登录时,默认用户名和密码都是nacos.")]),s._v(" "),e("h2",{attrs:{id:"nacos-与-mysql-通讯分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nacos-与-mysql-通讯分析"}},[s._v("#")]),s._v(" Nacos 与 MySQL 通讯分析")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/5be3239ccacc4d938635bbe11b93b4e0.png",alt:"在这里插入图片描述"}})]),s._v(" "),e("h2",{attrs:{id:"停止和启动nacos服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#停止和启动nacos服务"}},[s._v("#")]),s._v(" 停止和启动nacos服务")]),s._v(" "),e("blockquote",[e("p",[s._v("停止nacos服务")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" stop nacos\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("blockquote",[e("p",[s._v("启动nacos服务")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" start nacos\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("blockquote",[e("p",[s._v("重启nacos服务")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" restart nacos\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h1",{attrs:{id:"总结-summary"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结-summary"}},[s._v("#")]),s._v(" 总结（Summary）")]),s._v(" "),e("p",[s._v("本章节重点讲解了常用镜像服务的安装和基础配置，需要掌握镜像操作的基本过程和问题的解决方案。")])])}),[],!1,null,null,null);a.default=r.exports}}]);