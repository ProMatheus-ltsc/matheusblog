(window.webpackJsonp=window.webpackJsonp||[]).push([[253],{1573:function(r,e,t){"use strict";t.r(e);var a=t(65),o=Object(a.a)({},(function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h1",{attrs:{id:"docker技术简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker技术简介"}},[r._v("#")]),r._v(" Docker技术简介")]),r._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#背景分析"}},[r._v("背景分析")])]),t("li",[t("a",{attrs:{href:"#docker概述"}},[r._v("Docker概述")])]),t("li",[t("a",{attrs:{href:"#docker应用场景"}},[r._v("Docker应用场景")])]),t("li",[t("a",{attrs:{href:"#docker版本说明"}},[r._v("Docker版本说明")])]),t("li",[t("a",{attrs:{href:"#镜像-image"}},[r._v("镜像（Image）")])]),t("li",[t("a",{attrs:{href:"#容器-container"}},[r._v("容器（Container）")])]),t("li",[t("a",{attrs:{href:"#架构图"}},[r._v("架构图")])]),t("li",[t("a",{attrs:{href:"#docker运行机制"}},[r._v("Docker运行机制")])])])]),t("p"),r._v(" "),t("h2",{attrs:{id:"背景分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#背景分析"}},[r._v("#")]),r._v(" 背景分析")]),r._v(" "),t("p",[r._v("现阶段的软件技术水平已经真正的进入到了云计算时代，我们的应用现在也正在逐步的部署到云端，部署到云端的服务需要相互隔离，让每个服务都运行在独立的容器中，而 Docker 正是当下最主流的容器化技术。")]),r._v(" "),t("h2",{attrs:{id:"docker概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker概述"}},[r._v("#")]),r._v(" Docker概述")]),r._v(" "),t("p",[r._v("Docker是一个虚拟化平台( 官网https://www.docker.com/)，诞生于 2013 年初，基于 Google 公司的 Go 语言进行实现。可以通过虚拟化方式，为应用提供可运行的容器，容器之间可以相互隔离，独自运行。基于这种方式，我们可以更快地打包、部署和运行应用程序，实现软件的快速交付。")]),r._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/69f46189a2954921bb205d25778b3eb5.png",alt:"在这里插入图片描述"}})]),r._v(" "),t("h2",{attrs:{id:"docker应用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker应用场景"}},[r._v("#")]),r._v(" Docker应用场景")]),r._v(" "),t("ul",[t("li",[r._v("应用交付\nDocker 技术为应用交付领域带来的最大的变化就是开发环境的的一致性。传统的开发方式需要开发者自己在本地进行开发，但是本地的开发环境和和远端的的测试和正式环境还是存在差异，所以每次开发完成都需要反复比对环境的差异，包括操作系统以及操作系统里面的的依赖软包是否齐全，，非常的麻烦。但是使用 Docker 镜像，我们可以将所有的环境依赖都打包到镜像中，然后通过镜像来传输，这样会更加地高效。例如，直接在linux系统上安装MySql过程并不简单,要配置安装源,安装依赖包,对mysql进行配置等，如果要在多台主机上安装,每台主机都要进行这些繁琐的操作,万一服务器挂了,这一系列操作还要再重来一遍，但有了docker,一个安装配置好的mysql容器,可以直接拿到另一台主机上启动,而不必重新安装mysql。同时，还可以保证开发,测试和生产环境的一致。")]),r._v(" "),t("li",[r._v("多版本混合部署\n随着产品的不断更新换代，一台服务器上部署同一个应用的多个版本在企业内部非常常见。但一台服务器上部署同一个软件的多个版本，文件路径、端口等资源往往会发生冲突，造成多个版本无法共存的问题。如果用 docker，这个问题将非常简单。由于每个容器都有自己独立的文件系统，所以根本不存在文件路径冲突的问题；对于端口冲突问题，只需要在启动容器时指定不同的端口映射即可解决问题。")]),r._v(" "),t("li",[r._v("内部开发测试环境\n传统的开发测试环境都是由运维人员进行专门的环境配置而搭建出来的，而且需要运维人员进行专门维护。环境一旦出现问题，恢复起来也很麻烦。借助于 Docker 技术，我们将应用程序需要的依赖都固化到到 Docker 镜像中，然后在对应Docker 容器中进行开发测试。就算环境出现问题，我们只要将当前容器删除重新启动即可恢复。")])]),r._v(" "),t("h2",{attrs:{id:"docker版本说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker版本说明"}},[r._v("#")]),r._v(" Docker版本说明")]),r._v(" "),t("p",[r._v("Docker分成了两个版本：Docker EE （企业版）和Docker CE（社区版本），其中，Docker EE由公司支持，可在经过认证的操作系统和云提供商中使用。Docker CE是免费的Docker产品的新名称，Docker CE包含了完整的Docker平台，非常适合开发人员和运维团队构建容器APP。")]),r._v(" "),t("h1",{attrs:{id:"docker-核心对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-核心对象"}},[r._v("#")]),r._v(" Docker 核心对象")]),r._v(" "),t("h2",{attrs:{id:"镜像-image"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#镜像-image"}},[r._v("#")]),r._v(" 镜像（Image）")]),r._v(" "),t("p",[r._v("Docker 镜像可以看成是磁盘上特殊的文件系统（https://hub.docker.com/），镜像打包了应用的运行环境以及应用程序，是静态的。可以通过 Docker 启动这个镜像，进而将镜像中的程序在一个容器中启动运行起来。在 Docker 镜像中，操作系统是高度精简的，镜像中的操作系统还不包含内核，容器都是共享所在的宿主机的内核。所以有时会说容器仅包含必要的操作系统（通常只有操作系统文件和文件系统对象），容器中查看到的 Linux 内核版本与宿主机一致。假如现在理解镜像有些抽象，可以暂时先将其理解为一个安装程序。")]),r._v(" "),t("h2",{attrs:{id:"容器-container"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器-container"}},[r._v("#")]),r._v(" 容器（Container）")]),r._v(" "),t("p",[r._v("Docker容器可以将其理解为一个运行镜像的载体，镜像（Image）和容器（Container）的关系，就像是光盘和光驱。容器基于镜像创建、启动，然后运行镜像的中的文件。容器是轻量级的，它不需要管理程序的额外负担，而是直接在主机的内核中运行。我们常常说使用镜像打包应用程序，使用 Docker 发布、部署应用程序。当你的应用成功在 Docker 上运行时，这个应用就是容器化应用。我们还可以将通过 Docker 启动的容器看成是操作系统中的一个进程。")]),r._v(" "),t("h1",{attrs:{id:"docker-应用架构分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-应用架构分析"}},[r._v("#")]),r._v(" Docker 应用架构分析")]),r._v(" "),t("h2",{attrs:{id:"架构图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#架构图"}},[r._v("#")]),r._v(" 架构图")]),r._v(" "),t("p",[r._v("Docker 是一种Client/Server架构的应用程序，Docker 客户端与Docker 守护进程进行对话，该守护进程完成了构建，运行和分发Docker容器的繁重工作。Docker客户端和守护程序可以 在同一系统上运行，或者您可以将Docker客户端连接到远程Docker守护程序。如图所示（参考docker "),t("a",{attrs:{href:"https://docs.docker.com/get-started/overview/",target:"_blank",rel:"noopener noreferrer"}},[r._v("官网"),t("OutboundLink")],1),r._v("）。")]),r._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/8c5b16b078ab4010962b795cc8cf11d7.png",alt:"在这里插入图片描述"}})]),r._v(" "),t("blockquote",[t("p",[r._v("其中：")])]),r._v(" "),t("ul",[t("li",[r._v("Docker Client是安装完 Docker 之后，直接使用的 docker命令。")]),r._v(" "),t("li",[r._v("Docker Host是我们的docker宿主机（就是安装了docker的操作系统）")]),r._v(" "),t("li",[r._v("Docker Daemon是docker的后台守护进程，侦听并处理Docker客户端命令,管理Docker对象，例如镜像，容器，网络和卷。")]),r._v(" "),t("li",[r._v("Registry是docker拉取镜像的远程仓库,提供大量的镜像供下载，下载完成之后保存在Images(本地镜像仓库)中.")]),r._v(" "),t("li",[r._v("Images 是Docker本地的镜像仓库，可以通过docker images查看镜像文件。")])]),r._v(" "),t("h2",{attrs:{id:"docker运行机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker运行机制"}},[r._v("#")]),r._v(" Docker运行机制")]),r._v(" "),t("blockquote",[t("p",[r._v("docker pull 执行过程：")])]),r._v(" "),t("p",[r._v("1）客户端将指令发送给docker daemon\n2）docker daemon 先检查本地images中有没有相关的镜像\n3）如果本地没有相关的镜像，则向镜像服务器请求，将远程镜像下载到本地")]),r._v(" "),t("blockquote",[t("p",[r._v("docker run 执行过程：")])]),r._v(" "),t("ol",[t("li",[r._v("检查本地是否存在指定的镜像，不存在就从公有仓库下载")]),r._v(" "),t("li",[r._v("利用镜像创建并启动一个容器")]),r._v(" "),t("li",[r._v("分配一个文件系(简版linux系统)，并在只读的镜像层外面挂载一层可读写层")]),r._v(" "),t("li",[r._v("从宿主机配置的网桥接口中桥接一个虚拟接口到容器中去")]),r._v(" "),t("li",[r._v("从地址池配置一个 ip 地址给容器")]),r._v(" "),t("li",[r._v("执行用户指定的应用程序")])]),r._v(" "),t("h1",{attrs:{id:"总结-summary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结-summary"}},[r._v("#")]),r._v(" 总结(Summary)")]),r._v(" "),t("p",[r._v("本小节主要对Docker有一个初步的认识，掌握Docker是什么，基本架构是怎样的，有哪些核心对象以及其运行机制。")])])}),[],!1,null,null,null);e.default=o.exports}}]);