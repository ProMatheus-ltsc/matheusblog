(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{1574:function(a,s,t){"use strict";t.r(s);var e=t(65),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"docker容器操作实践"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker容器操作实践"}},[a._v("#")]),a._v(" Docker容器操作实践")]),a._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#下载镜像-image"}},[a._v("下载镜像(Image)")])]),t("li",[t("a",{attrs:{href:"#创建并启动容器-container"}},[a._v("创建并启动容器(Container)")])]),t("li",[t("a",{attrs:{href:"#查看docker中的容器-container"}},[a._v("查看Docker中的容器(Container)")])]),t("li",[t("a",{attrs:{href:"#查看容器日志-logs-信息"}},[a._v("查看容器日志(logs)信息")])]),t("li",[t("a",{attrs:{href:"#停止-stop-或重启-restart-容器-container"}},[a._v("停止(stop)或重启(Restart)容器(Container)")])]),t("li",[t("a",{attrs:{href:"#进入-exec-指定容器-container"}},[a._v("进入(exec)指定容器(Container)")])]),t("li",[t("a",{attrs:{href:"#从容器-container-中退出-exit"}},[a._v("从容器(Container)中退出(exit)")])]),t("li",[t("a",{attrs:{href:"#删除-rm-容器-container"}},[a._v("删除(rm)容器(Container)")])])])]),t("p"),a._v(" "),t("p",[a._v("本次以CentOS镜像为例，讲解容器的基本操作。")]),a._v(" "),t("h2",{attrs:{id:"下载镜像-image"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载镜像-image"}},[a._v("#")]),a._v(" 下载镜像(Image)")]),a._v(" "),t("p",[a._v("通过docker pull指令下载CentOS镜像，例如：")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" pull centos:7\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("说明，官方镜像仓库地址为https://hub.docker.com/")]),a._v(" "),t("p",[a._v("下载完以后，查看centos7镜像文件。")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" images\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"创建并启动容器-container"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建并启动容器-container"}},[a._v("#")]),a._v(" 创建并启动容器(Container)")]),a._v(" "),t("p",[a._v("基本语法解析：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("docker run -it xxxx bash\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("其中：\n1)xxxx - 镜像名, 或 image id 的前几位，")]),a._v(" "),t("p",[a._v("2)-it 这是两个参数(-i表示交互式操作， -t 表示终端)")]),a._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[a._v("bash 表示进入操作终端，基于交互式进行相关操作（例如执行linux相关指令）。")])]),a._v(" "),t("p",[a._v("案例：通过docker启动运行 centos7镜像")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run -it centos:7 "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("docker中启动所有的容器命令")]),a._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[a._v("docker start "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("docker ps "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" awk "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'{ print $1}'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" tail "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("n "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/45858940e1a94ed88944921330542f5b.png",alt:"在这里插入图片描述"}})]),a._v(" "),t("h2",{attrs:{id:"查看docker中的容器-container"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看docker中的容器-container"}},[a._v("#")]),a._v(" 查看Docker中的容器(Container)")]),a._v(" "),t("p",[a._v("查看docker运行中的容器(要在宿主机执行docker指令)")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("docker ps\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("说明,假如在容器中执行docker指令会出现如下问题,例如:")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/59e16f5e7055491eb8171b1278224c92.png",alt:"在这里插入图片描述"}})]),a._v(" "),t("p",[a._v("查看docker运行中的所有容器")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("docker ps -a\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("其中，-a表示全部(all）。")]),a._v(" "),t("h2",{attrs:{id:"查看容器日志-logs-信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看容器日志-logs-信息"}},[a._v("#")]),a._v(" 查看容器日志(logs)信息")]),a._v(" "),t("p",[a._v("查看容器启动运行日志时，这个指令非常重要，假如容器没有启动，要通过此指令去看一下错误日志。")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" container logs "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("802")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#802为自己的容器id（一般写前三位即可）")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("说明,查看容器的运行日志时,容器应该处于一种运行状态.")]),a._v(" "),t("h2",{attrs:{id:"停止-stop-或重启-restart-容器-container"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#停止-stop-或重启-restart-容器-container"}},[a._v("#")]),a._v(" 停止(stop)或重启(Restart)容器(Container)")]),a._v(" "),t("p",[a._v("停止运行的容器，代码如下：")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" container stop "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("802")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#802为容器自己的id")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("docker中关闭所有的容器命令")]),a._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[a._v("docker stop "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("docker ps "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" awk "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'{ print $1}'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" tail "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("n "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("重新启动容器，代码如下：")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" container restart "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("802")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#802位容器自己的id")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"进入-exec-指定容器-container"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进入-exec-指定容器-container"}},[a._v("#")]),a._v(" 进入(exec)指定容器(Container)")]),a._v(" "),t("p",[a._v("当容器处于运行状态,要进入容器,可以使用 docker exec 命令，例如：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("docker exec -it 802 bash #802为容器id\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("说明,假如容器处于一种非运行状态,此时你执行docker exec进入容器会出现如下问题:")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/9ec3f979365e4952b2f8aac886d00d11.png",alt:"在这里插入图片描述"}})]),a._v(" "),t("h2",{attrs:{id:"从容器-container-中退出-exit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从容器-container-中退出-exit"}},[a._v("#")]),a._v(" 从容器(Container)中退出(exit)")]),a._v(" "),t("p",[a._v("假如从宿主机进入了启动的容器，退出容器需要使用exit指令，例如：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("exit\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"删除-rm-容器-container"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除-rm-容器-container"}},[a._v("#")]),a._v(" 删除(rm)容器(Container)")]),a._v(" "),t("p",[a._v("假如容器不用了，可执行删除操作，例如：")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" container "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("802")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#802为容器id")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("docker中删除所有的容器命令")]),a._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[a._v("docker rm "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("docker ps "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" awk "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'{ print $1}'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" tail "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("n "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("删除所有容器")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("docker rm `docker ps -a -q`\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("说明,假如容器正在运行执行删除,会出现如下问题,例如:")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20b1edf20e0d4a2a93ea65347d1a9566.png",alt:"在这里插入图片描述"}})]),a._v(" "),t("p",[a._v("其中，如果删除运行中的容器，需要添加 -f 参数执行强制删除,例如:")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" container "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -f "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("802")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#802为容器id")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("清理所有处于终止状态容器，例如：")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" container prune\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("说明,执行完这个指令以后,可以通过docker ps -a 再查看容器,看看是否有删除.")]),a._v(" "),t("h1",{attrs:{id:"总结-summary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结-summary"}},[a._v("#")]),a._v(" 总结（Summary)")]),a._v(" "),t("p",[a._v("本章节重点讲解了容器的基本操作，例如容器的启动、运行、停止、删除等基本操作。")])])}),[],!1,null,null,null);s.default=r.exports}}]);