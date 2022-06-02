(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{1366:function(s,a,e){"use strict";e.r(a);var t=e(24),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"docker安装实践"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker安装实践"}},[s._v("#")]),s._v(" Docker安装实践")]),s._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#准备工作"}},[s._v("准备工作")])]),e("li",[e("a",{attrs:{href:"#开启虚拟机系统"}},[s._v("开启虚拟机系统")])]),e("li",[e("a",{attrs:{href:"#离线安装docker系统-课上重点"}},[s._v("离线安装Docker系统(课上重点）")])]),e("li",[e("a",{attrs:{href:"#在线安装docker-自己玩"}},[s._v("在线安装Docker（自己玩）")])])])]),e("p"),s._v(" "),e("h2",{attrs:{id:"准备工作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[s._v("#")]),s._v(" 准备工作")]),s._v(" "),e("p",[s._v("第一步：准备CentOS(用课前资料中的CentOS7964)，本次以CentOS7为例进行安装。\n第二步：基于vmvare打开CentOS")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/3c3b95e0ab7a4b3aa825d81eb1ce6a97.png",alt:"在这里插入图片描述"}})]),s._v(" "),e("p",[s._v("第三步：克隆CentOS（选择链接克隆-更省空间），命名为CentOS7964-docker")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/3698b7fa88994b7e8b8605ba9382dffa.png",alt:"在这里插入图片描述"}})]),s._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/8ae46a7699ce48ba8a050d38ca5839a8.png",alt:"在这里插入图片描述"}})]),s._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/ad2c92ea89aa478da32907da3ef29ae9.png",alt:"在这里插入图片描述"}})]),s._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/89f1e4589cd649b1a7b83f42c507a6a1.png",alt:"在这里插入图片描述"}})]),s._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/3eacd6951dd243d8af3ab68e55cb5114.png",alt:"在这里插入图片描述"}})]),s._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/f400d6d624a04cbf9736769523b45ee3.png",alt:"在这里插入图片描述"}})]),s._v(" "),e("h2",{attrs:{id:"开启虚拟机系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开启虚拟机系统"}},[s._v("#")]),s._v(" 开启虚拟机系统")]),s._v(" "),e("p",[s._v("第一步：启动虚拟机，默认账号密码为root/root")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/eff8760daacc47e9b7dadc7815f890f7.png",alt:"在这里插入图片描述"}})]),s._v(" "),e("p",[s._v("第二步：在系统中右键，打开终端，通过ifconfig指令检查网络，")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[root@centos7964 ~]# ifconfig\nens33: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500\n        inet 192.168.227.129  netmask 255.255.255.0  broadcast 192.168.227.255\n        inet6 fe80::20c:29ff:fee9:918a  prefixlen 64  scopeid 0x20<link>\n        ether 00:0c:29:e9:91:8a  txqueuelen 1000  (Ethernet)\n        RX packets 287398  bytes 419668874 (400.2 MiB)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 127375  bytes 8442701 (8.0 MiB)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n        ....\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("p",[s._v("第三步：通过MobaXterm工具链接虚拟机系统")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/ac0252df626d4be28e8be5026ad2cb6f.png",alt:"在这里插入图片描述"}}),s._v(" "),e("img",{attrs:{src:"https://img-blog.csdnimg.cn/bc349dc1403e4ec4a2c8a27ace2c103e.png",alt:"在这里插入图片描述"}}),s._v(" "),e("img",{attrs:{src:"https://img-blog.csdnimg.cn/053db9ee9b1f42799373487eff3149f5.png",alt:"在这里插入图片描述"}})]),s._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/0ae87832c65d48d8b0dd158eebecb9ab.png",alt:"在这里插入图片描述"}})]),s._v(" "),e("h2",{attrs:{id:"离线安装docker系统-课上重点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#离线安装docker系统-课上重点"}},[s._v("#")]),s._v(" 离线安装Docker系统(课上重点）")]),s._v(" "),e("p",[s._v("推荐使用课前资料中已经下载好的资源（docker-setup.zip）,也可以按如下步骤自己下载，然后将资源放到一个目录再安装，例如：")]),s._v(" "),e("blockquote",[e("p",[s._v("第一步：下载docker离线包")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("https://download.docker.com/linux/static/stable/x86_64/docker-20.10.6.tgz\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("说明，也可以从https://download.docker.com/linux/static/stable/网址下载指定版本")]),s._v(" "),e("blockquote",[e("p",[s._v("第二步：下载离线安装工具")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("https://github.com/Jrohy/docker-install/\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/7547111c6da84bab89dcb65a6e5b27ea.png",alt:"在这里插入图片描述"}})]),s._v(" "),e("p",[s._v("说明，将下载好的这个工具解压。")]),s._v(" "),e("blockquote",[e("p",[s._v("第三步：将下载好的资源放在一个目录，例如：")])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/80788904c91f4bc5a76a7d635278f58a.png",alt:"在这里插入图片描述"}})]),s._v(" "),e("blockquote",[e("p",[s._v("第四步:在linux环境下，创建/root/setup/docker目录，然后拷贝下载好的资源到此目录（可通过MobaXterm工具直接上传到linux目录）,例如")])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/f0ed8607bd1e41118b875debfc896d44.png",alt:"在这里插入图片描述"}})]),s._v(" "),e("blockquote",[e("p",[s._v("第五步：执行安装操作")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入/root/setup/docker 文件夹")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /root/setup/docker\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 为 install.sh添加执行权限")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x install.sh\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装")]),s._v("\n./install.sh -f docker-20.10.6.tgz\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("安装成功后,会出现如下信息:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("Created symlink from /etc/systemd/system/multi-user.target.wants/docker.service to /usr/lib/systemd/system/docker.service.\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("20.10")]),s._v(".6 "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" success"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("blockquote",[e("p",[s._v("第六步：安装成功以后，检查安装状态")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker info\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"在线安装docker-自己玩"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在线安装docker-自己玩"}},[s._v("#")]),s._v(" 在线安装Docker（自己玩）")]),s._v(" "),e("p",[s._v("第一步：安装一组工具")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sudo yum install -y yum-utils \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("第二步：设置 yum 仓库地址")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sudo yum-config-manager \\\n    --add-repo \\\n    https://download.docker.com/linux/centos/docker-ce.repo\nsudo yum-config-manager \\\n     --add-repo \\\n     http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("第三步：更新 yum 缓存")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sudo yum makecache fast #yum 是包管理器\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("第四步：安装新版 docker")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sudo yum install -y docker-ce docker-ce-cli containerd.io\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h1",{attrs:{id:"总结-summary"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结-summary"}},[s._v("#")]),s._v(" 总结(Summary)")]),s._v(" "),e("p",[s._v("本章节主要是讲解了Linux平台下Docker的安装过程，重点掌握在线安装，假如网络不好，可以尝试离线安装。")])])}),[],!1,null,null,null);a.default=n.exports}}]);