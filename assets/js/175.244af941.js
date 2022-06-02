(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{1465:function(s,a,t){"use strict";t.r(a);var r=t(24),e=Object(r.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"linux下安装mariadb数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux下安装mariadb数据库"}},[s._v("#")]),s._v(" Linux下安装MariaDB数据库")]),s._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#_8-1-关于链接数据库的说明"}},[s._v("8.1 关于链接数据库的说明")])]),t("li",[t("a",{attrs:{href:"#_8-2-配置数据库权限配置说明"}},[s._v("8.2 配置数据库权限配置说明")])]),t("li",[t("a",{attrs:{href:"#_8-3-配置linux数据库权限"}},[s._v("8.3 配置Linux数据库权限")]),t("ul",[t("li",[t("a",{attrs:{href:"#_8-3-1-切换数据库mysql"}},[s._v("8.3.1 切换数据库mysql")])]),t("li",[t("a",{attrs:{href:"#_8-3-2-修改数据库表"}},[s._v("8.3.2 修改数据库表")])])])]),t("li",[t("a",{attrs:{href:"#_9-1-检查防火墙状态"}},[s._v("9.1 检查防火墙状态")])]),t("li",[t("a",{attrs:{href:"#_9-2-防火墙配置"}},[s._v("9.2 防火墙配置")])]),t("li",[t("a",{attrs:{href:"#_9-3-手动关闭防火墙"}},[s._v("9.3 手动关闭防火墙")])]),t("li",[t("a",{attrs:{href:"#_9-4-手动开放防火墙端口"}},[s._v("9.4 手动开放防火墙端口")])]),t("li",[t("a",{attrs:{href:"#_9-5-数据库远程测试"}},[s._v("9.5 数据库远程测试")])]),t("li",[t("a",{attrs:{href:"#_9-6-导入京淘数据库"}},[s._v("9.6 导入京淘数据库")]),t("ul",[t("li",[t("a",{attrs:{href:"#_9-6-1-备份数据库"}},[s._v("9.6.1 备份数据库")])]),t("li",[t("a",{attrs:{href:"#_9-6-2-导入数据库"}},[s._v("9.6.2 导入数据库")])]),t("li",[t("a",{attrs:{href:"#_9-6-3-navi-cat导入数据库"}},[s._v("9.6.3 navi cat导入数据库")])])])])])]),t("p"),s._v(" "),t("h1",{attrs:{id:"_1-下载mariadb数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载mariadb数据库"}},[s._v("#")]),s._v(" 1. 下载MariaDB数据库")]),s._v(" "),t("p",[s._v("测试: 当前虚拟机是否可以正确的链接外网.")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200907164450545.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzE2ODA0ODQ3,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[s._v("命令:")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@localhost")]),s._v(" src"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("# yum install mariadb"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("server 安装mariadb数据库\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@localhost")]),s._v(" src"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("# yum clean all 清空已安装文件 如果下载失败之后执行的"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/202009071623596.png#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),t("h1",{attrs:{id:"_2-确认下载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-确认下载"}},[s._v("#")]),s._v(" 2 确认下载")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200907162536298.png#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),t("h1",{attrs:{id:"_3-安装完成提示"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装完成提示"}},[s._v("#")]),s._v(" 3 安装完成提示")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200907163023475.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzE2ODA0ODQ3,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),t("h1",{attrs:{id:"_4-数据库启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-数据库启动"}},[s._v("#")]),s._v(" 4 数据库启动")]),s._v(" "),t("p",[s._v("命令:")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v(" 启动命令 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@localhost")]),s._v(" src"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("# systemctl start mariadb\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v(" 重启命令 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@localhost")]),s._v(" src"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("# systemctl restart mariadb\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.")]),s._v(" 关闭命令 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@localhost")]),s._v(" src"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("# systemctl stop mariadb\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.")]),s._v(" 设定开机自起 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@localhost")]),s._v(" src"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("# systemctl enable mariadb\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.")]),s._v(" 关闭开机自起 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@localhost")]),s._v(" src"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("# systemctl disable mariadb\n\n  \n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h1",{attrs:{id:"_5-数据库初始化操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-数据库初始化操作"}},[s._v("#")]),s._v(" 5. 数据库初始化操作")]),s._v(" "),t("p",[s._v("命令: mysql_secure_installation")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/9048d68db2a649f5aa0a715723eaa3bf.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzE2ODA0ODQ3,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/2020090716550981.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzE2ODA0ODQ3,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),t("h1",{attrs:{id:"_6-测试数据库用户名和密码是否有效"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-测试数据库用户名和密码是否有效"}},[s._v("#")]),s._v(" 6. 测试数据库用户名和密码是否有效")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200907165746693.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzE2ODA0ODQ3,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),t("h1",{attrs:{id:"_8-mysql数据库远程访问配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-mysql数据库远程访问配置"}},[s._v("#")]),s._v(" 8.Mysql数据库远程访问配置")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200907170448382.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzE2ODA0ODQ3,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),t("h2",{attrs:{id:"_8-1-关于链接数据库的说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-关于链接数据库的说明"}},[s._v("#")]),s._v(" 8.1 关于链接数据库的说明")]),s._v(" "),t("p",[s._v("说明:")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("如果需要远程链接数据库必须通过防火墙")])]),s._v(" "),t("li",[t("p",[s._v("如果远程链接数据库,数据库中必须开启远程访问权限才行,否则拒绝链接.")])])]),s._v(" "),t("h2",{attrs:{id:"_8-2-配置数据库权限配置说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-2-配置数据库权限配置说明"}},[s._v("#")]),s._v(" 8.2 配置数据库权限配置说明")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200907171156495.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzE2ODA0ODQ3,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),t("h2",{attrs:{id:"_8-3-配置linux数据库权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-3-配置linux数据库权限"}},[s._v("#")]),s._v(" 8.3 配置Linux数据库权限")]),s._v(" "),t("h3",{attrs:{id:"_8-3-1-切换数据库mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-3-1-切换数据库mysql"}},[s._v("#")]),s._v(" 8.3.1 切换数据库mysql")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200907171345613.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzE2ODA0ODQ3,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[s._v("切换Mysql数据库")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200907171433498.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzE2ODA0ODQ3,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),t("h3",{attrs:{id:"_8-3-2-修改数据库表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-3-2-修改数据库表"}},[s._v("#")]),s._v(" 8.3.2 修改数据库表")]),s._v(" "),t("p",[s._v("1).检查数据表")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200907171540623.png#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[s._v("2).查询user表中的host/root/password")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200907171734287.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzE2ODA0ODQ3,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[s._v("3).将host=“localhost” 改为 “%”")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200907172027970.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzE2ODA0ODQ3,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[s._v("4).刷新数据库权限")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/2020090717223130.png#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),t("h1",{attrs:{id:"_9-配置linux防火墙策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-配置linux防火墙策略"}},[s._v("#")]),s._v(" 9. 配置Linux防火墙策略")]),s._v(" "),t("h2",{attrs:{id:"_9-1-检查防火墙状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-检查防火墙状态"}},[s._v("#")]),s._v(" 9.1 检查防火墙状态")]),s._v(" "),t("p",[s._v("命令: "),t("code",[s._v("firewall-cmd --state")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200907172614549.png#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),t("h2",{attrs:{id:"_9-2-防火墙配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-2-防火墙配置"}},[s._v("#")]),s._v(" 9.2 防火墙配置")]),s._v(" "),t("p",[s._v("说明:防火墙中有一个配置文件,表示当Linux系统启动时防火墙应该如何操作!!!")]),s._v(" "),t("p",[s._v("需求: 告诉linux系统以后开机不需要启动防火墙")]),s._v(" "),t("p",[s._v("命令: "),t("code",[s._v("systemctl disable firewalld.service")])]),s._v(" "),t("p",[t("code",[s._v("systemctl enable firewalld.service")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200907173054365.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzE2ODA0ODQ3,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),t("h2",{attrs:{id:"_9-3-手动关闭防火墙"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-3-手动关闭防火墙"}},[s._v("#")]),s._v(" 9.3 手动关闭防火墙")]),s._v(" "),t("p",[s._v("说明:通过命令手动将防火墙关闭")]),s._v(" "),t("p",[s._v("命令:")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("systemctl stop firewalld.service")])]),s._v(" "),t("li",[t("p",[s._v("systemctl start firewalld.service")])])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200907173306469.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzE2ODA0ODQ3,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),t("h2",{attrs:{id:"_9-4-手动开放防火墙端口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-4-手动开放防火墙端口"}},[s._v("#")]),s._v(" 9.4 手动开放防火墙端口")]),s._v(" "),t("p",[s._v("1). 检查防火墙开放的端口")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("\nfirewall"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cmd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("list"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ports\n\n  \n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("2).检查端口是否开放")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("\nfirewall"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cmd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("query"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("port "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("tcp\n\n  \n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200908092141613.png#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[s._v("3). 开启防火墙")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("\nfirewall"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cmd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("zone"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("add"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("tcp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("permanent\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200908092733929.png#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[s._v("4).移除端口")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("\nfirewall"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cmd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("zone"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("remove"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9090")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("tcp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("permanent\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200908093014985.png#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[s._v("5).关于防火墙操作的解释")]),s._v(" "),t("p",[s._v("–zone #作用域")]),s._v(" "),t("p",[s._v("–add-port=80/tcp #添加端口，格式为：端口/通讯协议")]),s._v(" "),t("p",[s._v("–remove-port=80/tcp #移除端口，格式为：端口/通讯协议")]),s._v(" "),t("p",[s._v("–permanent #永久生效，没有此参数重启后失效")]),s._v(" "),t("p",[s._v("6).重启防火墙")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("\nfirewall"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cmd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("reload\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"_9-5-数据库远程测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-5-数据库远程测试"}},[s._v("#")]),s._v(" 9.5 数据库远程测试")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/2020090717342028.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzE2ODA0ODQ3,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),t("h2",{attrs:{id:"_9-6-导入京淘数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-6-导入京淘数据库"}},[s._v("#")]),s._v(" 9.6 导入京淘数据库")]),s._v(" "),t("h3",{attrs:{id:"_9-6-1-备份数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-6-1-备份数据库"}},[s._v("#")]),s._v(" 9.6.1 备份数据库")]),s._v(" "),t("ol",[t("li",[s._v("点击备份操作")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/2021071516312173.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzE2ODA0ODQ3,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[s._v("选择导出的位置")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/2021071516323656.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzE2ODA0ODQ3,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),s._v(" "),t("h3",{attrs:{id:"_9-6-2-导入数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-6-2-导入数据库"}},[s._v("#")]),s._v(" 9.6.2 导入数据库")]),s._v(" "),t("p",[s._v("1.点击导入")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/2021071516341228.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzE2ODA0ODQ3,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("p",[s._v("导入数据之后执行刷新即可.")])]),s._v(" "),t("li")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200907173658422.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzE2ODA0ODQ3,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[s._v("方式2:")]),s._v(" "),t("p",[s._v("如果mysql数据库需要导入数据表命令如下:")]),s._v(" "),t("p",[s._v("命令: source /xxx/xxxx/xxxx/jt.sql;")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/2020090717021080.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzE2ODA0ODQ3,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),t("h3",{attrs:{id:"_9-6-3-navi-cat导入数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-6-3-navi-cat导入数据库"}},[s._v("#")]),s._v(" 9.6.3 navi cat导入数据库")]),s._v(" "),t("p",[t("strong",[s._v("1")]),s._v("：打开navicat后，点开localhost_3036,右击点击新建数据库：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/ba158a2304114ce392689305e4620f19.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAWmhlbmduaWFuIFpoYW5n,size_18,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[t("strong",[s._v("2：左键点击新建数据库后，创建一个跟你需要导入的数据库名字一模一样的新的mysql数据库。（就相当于你造了一个外壳一模一样的房子，然后再把内部的精髓导入进去)，记得选择字符集和排列数序。")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/05b8c9253af94c32b14c3ca6fc9bed3c.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAWmhlbmduaWFuIFpoYW5n,size_12,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[t("strong",[s._v("3：创建完成后，在左侧便会出现db838，接下去是最关键的一步：右键点击db838，点击“运行sql文件”")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/6f076c5cec3a4ddc9cc79f1ed5258a2c.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAWmhlbmduaWFuIFpoYW5n,size_17,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[t("strong",[s._v("4：选择需要导入的.sql数据库文件，并导入进去：")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/fd6dcdad160a4a3b94ab3514c00c8ae1.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAWmhlbmduaWFuIFpoYW5n,size_11,color_FFFFFF,t_70,g_se,x_16",alt:"请添加图片描述"}})]),s._v(" "),t("p",[t("strong",[s._v("5：点击开始后，即可成功导入：")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/69ec05d0f3354bc2b088597ca618f7ae.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAWmhlbmduaWFuIFpoYW5n,size_11,color_FFFFFF,t_70,g_se,x_16",alt:"请添加图片描述"}})]),s._v(" "),t("p",[t("strong",[s._v("6：这是最后一步了，一定要点击db838，然后按住F5进行刷新，否则的话会显示不出导入的文件：")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/659d92ea32344556926de203292acab0.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAWmhlbmduaWFuIFpoYW5n,size_20,color_FFFFFF,t_70,g_se,x_16",alt:"请添加图片描述"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);