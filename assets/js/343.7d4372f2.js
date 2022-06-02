(window.webpackJsonp=window.webpackJsonp||[]).push([[343],{1699:function(s,a,t){"use strict";t.r(a);var n=t(24),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"若依系统简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#若依系统简介"}},[s._v("#")]),s._v(" 若依系统简介")]),s._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#若依概述"}},[s._v("若依概述")])]),t("li",[t("a",{attrs:{href:"#官方文档地址"}},[s._v("官方文档地址")])]),t("li",[t("a",{attrs:{href:"#微服务技术选型"}},[s._v("微服务技术选型")])]),t("li",[t("a",{attrs:{href:"#系统微服务模块骨架"}},[s._v("系统微服务模块骨架")])]),t("li",[t("a",{attrs:{href:"#系统微服务技术架构"}},[s._v("系统微服务技术架构")])]),t("li",[t("a",{attrs:{href:"#背景"}},[s._v("背景")])]),t("li",[t("a",{attrs:{href:"#准备工作"}},[s._v("准备工作")])]),t("li",[t("a",{attrs:{href:"#安装redis"}},[s._v("安装Redis")])]),t("li",[t("a",{attrs:{href:"#安装mysql数据库"}},[s._v("安装MySql数据库")])]),t("li",[t("a",{attrs:{href:"#安装nacos服务治理业务"}},[s._v("安装Nacos服务治理业务")])]),t("li",[t("a",{attrs:{href:"#初始化ruoyi-cloud微服务项目数据"}},[s._v("初始化RuoYi-Cloud微服务项目数据")])]),t("li",[t("a",{attrs:{href:"#启动nacos服务"}},[s._v("启动Nacos服务")])]),t("li",[t("a",{attrs:{href:"#基于idea打开项目"}},[s._v("基于IDEA打开项目")])]),t("li",[t("a",{attrs:{href:"#启动并检测后端项目服务"}},[s._v("启动并检测后端项目服务")])]),t("li",[t("a",{attrs:{href:"#安装项目依赖"}},[s._v("安装项目依赖")])]),t("li",[t("a",{attrs:{href:"#启动运行前端项目"}},[s._v("启动运行前端项目")])]),t("li",[t("a",{attrs:{href:"#重难点分析"}},[s._v("重难点分析")])]),t("li",[t("a",{attrs:{href:"#faq分析"}},[s._v("FAQ分析")])]),t("li",[t("a",{attrs:{href:"#bug分析"}},[s._v("BUG分析")])])])]),t("p"),s._v(" "),t("h2",{attrs:{id:"若依概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#若依概述"}},[s._v("#")]),s._v(" 若依概述")]),s._v(" "),t("p",[s._v("若依微服务版RuoYi-Cloud，基于Spring Boot、Spring Cloud & Alibaba、OAuth2的"),t("a",{attrs:{href:"https://so.csdn.net/so/search?q=%E5%89%8D%E5%90%8E%E7%AB%AF%E5%88%86%E7%A6%BB&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"}},[s._v("前后端分离"),t("OutboundLink")],1),s._v("的后台管理系统。此系统内置模块如部门管理、角色用户管理、菜单及按钮授权、数据权限、系统参数、日志管理、代码生成等。在线定时任务配置,并且支持集群，支持多数据源。此系统还是我们公司内部的一套 Java EE 企业级快速开发平台.")]),s._v(" "),t("h2",{attrs:{id:"官方文档地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#官方文档地址"}},[s._v("#")]),s._v(" 官方文档地址")]),s._v(" "),t("p",[s._v("若依官网 http://ruoyi.vip/。\n若依微服务官网地址 https://doc.ruoyi.vip/ruoyi-cloud/")]),s._v(" "),t("h2",{attrs:{id:"微服务技术选型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#微服务技术选型"}},[s._v("#")]),s._v(" 微服务技术选型")]),s._v(" "),t("blockquote",[t("p",[s._v("后端技术栈:")])]),s._v(" "),t("p",[s._v("MyBatis、Spring、Spring Boot、Spring Cloud & Alibaba、Nacos、Sentinel")]),s._v(" "),t("blockquote",[t("p",[s._v("前端VUE技术栈:")])]),s._v(" "),t("p",[s._v("ES6、vue、vuex、vue-router、vue-cli、axios、element-ui")]),s._v(" "),t("h2",{attrs:{id:"系统微服务模块骨架"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#系统微服务模块骨架"}},[s._v("#")]),s._v(" 系统微服务模块骨架")]),s._v(" "),t("blockquote",[t("p",[s._v("后端项目骨架，如图所示：")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("com.ruoyi     \n├── ruoyi-ui              // 前端框架 [80]\n├── ruoyi-gateway         // 网关模块 [8080]\n├── ruoyi-auth            // 认证中心 [9200]\n├── ruoyi-api             // 接口模块\n│       └── ruoyi-api-system                // 系统接口\n├── ruoyi-common          // 通用模块\n│       └── ruoyi-common-core               // 核心模块\n│       └── ruoyi-common-datascope          // 权限范围\n│       └── ruoyi-common-datasource         // 多数据源\n│       └── ruoyi-common-log                 // 日志记录\n│       └── ruoyi-common-redis               // 缓存服务\n│       └── ruoyi-common-security            // 安全模块\n│       └── ruoyi-common-swagger             // 系统接口\n├── ruoyi-modules         // 业务模块\n│       └── ruoyi-system                      // 系统模块 [9201]\n│       └── ruoyi-gen                         // 代码生成 [9202]\n│       └── ruoyi-job                         // 定时任务 [9203]\n│       └── ruoyi-file                        // 文件服务 [9300]\n├── ruoyi-visual          // 图形化管理模块\n│       └── ruoyi-visual-monitor             // 监控中心 [9100]\n├──pom.xml                // 公共依赖\n\n1234567891011121314151617181920212223\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])]),t("blockquote",[t("p",[s._v("前端项目骨架结构，如图所示：")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("├── build                      // 构建相关  \n├── bin                        // 执行脚本\n├── public                     // 公共文件\n│   ├── favicon.ico           // favicon图标\n│   └── index.html            // html模板\n├── src                        // 源代码\n│   ├── api                    // 所有请求\n│   ├── assets                 // 主题字体等静态资源\n│   ├── components             // 全局公用组件\n│   ├── directive              // 全局指令\n│   ├── layout                 // 布局\n│   ├── router                 // 路由\n│   ├── store                  // 全局 store管理\n│   ├── utils                  // 全局公用方法\n│   ├── views                  // view\n│   ├── App.vue                // 入口页面\n│   ├── main.js                // 入口 加载组件 初始化等\n│   ├── permission.js          // 权限管理\n│   └── settings.js            // 系统配置\n├── .editorconfig              // 编码格式\n├── .env.development           // 开发环境配置\n├── .env.production            // 生产环境配置\n├── .env.staging               // 测试环境配置\n├── .eslintignore              // 忽略语法检查\n├── .eslintrc.js               // eslint 配置项\n├── .gitignore                 // git 忽略项\n├── babel.config.js            // babel.config.js\n├── package.json               // package.json\n└── vue.config.js              // vue.config.js\n1234567891011121314151617181920212223242526272829\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br")])]),t("h2",{attrs:{id:"系统微服务技术架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#系统微服务技术架构"}},[s._v("#")]),s._v(" 系统微服务技术架构")]),s._v(" "),t("p",[s._v("若依分布式架构设计，如图所示：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/2021070818274640.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("h1",{attrs:{id:"若依微服务项目部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#若依微服务项目部署"}},[s._v("#")]),s._v(" 若依微服务项目部署")]),s._v(" "),t("h2",{attrs:{id:"背景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[s._v("#")]),s._v(" 背景")]),s._v(" "),t("p",[s._v("一般进入公司以后,可能team leader会给我们一套项目代码,然后我们需要基于代码规范或者原有业务去进行新的业务开发,这样的话我们就需要首先将系统跑起来,然后对其业务和代码进行分析,学习.")]),s._v(" "),t("h2",{attrs:{id:"准备工作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[s._v("#")]),s._v(" 准备工作")]),s._v(" "),t("p",[s._v("项目需要的基础环境需求如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("JDK >= 1.8 (推荐1.8版本)\nMysql >= 5.7.0 (推荐5.7版本)\nRedis >= 5.0 (市场主流版本，最新版本为6.xx)\nMaven >= 3.6 (http://maven.apache.org/download.cgi)\nNode >= 10 (稳定版14.X,https://nodejs.org/en/download/)\nnacos >= 1.4.1 （https://github.com/alibaba/nacos/releases）\n123456\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("当这些软件不知道如何去下载时候，打开搜索引擎，使用组合查询方法，去找下载路径，\n例如 redis download")]),s._v(" "),t("h2",{attrs:{id:"安装redis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装redis"}},[s._v("#")]),s._v(" 安装Redis")]),s._v(" "),t("p",[s._v("Redis官网：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("http://www.redis.cn/\nhttp://www.redis.io/\n12\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("Windows版本下载以后，网址如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("https://github.com/tporadowski/redis/releases\n1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("windows下的安装，直接解压，其个目录如下：\n"),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210708182958945.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[s._v("安装windows下安装服务，在redis根目录启动命令行(cmd)，执行")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("redis-server --service-install redis.windows.conf\n1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("启动redis服务(启动成功以后会出现successful)")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("redis-server --service-start\n1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("其它redis指令（这个操作可以不执行）")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("redis-server --service-stop //停止服务\nredis-server --service-uninstall //卸载服务\n12\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("连接测试redis,在redis根路径执行（默认端口6379）")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("redis-cli -h 127.0.0.1 -p 6379\n1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"安装mysql数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装mysql数据库"}},[s._v("#")]),s._v(" 安装MySql数据库")]),s._v(" "),t("p",[s._v("(省略)\n说明：mysql数据库的版本一定要在5.7以上,MariaDB最后用10.5.")]),s._v(" "),t("h2",{attrs:{id:"安装nacos服务治理业务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装nacos服务治理业务"}},[s._v("#")]),s._v(" 安装Nacos服务治理业务")]),s._v(" "),t("p",[s._v("第一步：Nacos下载,可在浏览器直接输入如下地址：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("https://github.com/alibaba/nacos/releases\n1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("第二步：选择对应版本，直接下载，如图所示：\n"),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210708183123908.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[s._v("第三步：解压Nacos（最好不要解压到中文目录下），其目录结构如下：\n"),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210708183152957.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[s._v("第四步：打开/conf/application.properties里打开默认配置，并基于你当前环境配置要连接的数据库，连接数据库时使用的用户名和密码：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("### If use MySQL as datasource:\nspring.datasource.platform=mysql\n\n### Count of DB:\ndb.num=1\n\n### Connect URL of DB:\ndb.url.0=jdbc:mysql://127.0.0.1:3306/ry-config?characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useUnicode=true&useSSL=false&serverTimezone=UTC\ndb.user.0=root\ndb.password.0=root\n12345678910\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("说明，后续我们配置RuoYi-Cloud项目时，这个项目很多配置信息需要存储到ry-config数据库中。")]),s._v(" "),t("h2",{attrs:{id:"初始化ruoyi-cloud微服务项目数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化ruoyi-cloud微服务项目数据"}},[s._v("#")]),s._v(" 初始化RuoYi-Cloud微服务项目数据")]),s._v(" "),t("p",[s._v("第一步：登录mysql,然后基于source执行指令去执行课前资料中的RuoYi-Cloud.sql文件(不推荐使用SQLYog执行),例如:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("source d:/RuoYi-Cloud.sql\n1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("当执行成功以后,在ry-cloud数据库中就有如下表:\n"),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210708183534861.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[s._v("第二步：基于source指令执行RuoYi-Config.sql,例如:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("source d:/RuoYi-Config.sql\n1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("执行成功以后会创建一个数据库ry-config,其内部的表如图所示:")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210708183558498.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("h1",{attrs:{id:"若依后端微服务启动运行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#若依后端微服务启动运行"}},[s._v("#")]),s._v(" 若依后端微服务启动运行")]),s._v(" "),t("h2",{attrs:{id:"启动nacos服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动nacos服务"}},[s._v("#")]),s._v(" 启动Nacos服务")]),s._v(" "),t("p",[s._v("第一步：进入nacos的bin目录，启动nacos(standalone代表着单机模式运行，非集群模式,此服务的启动对JDK有要求,必须jdk8):")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("startup.cmd -m standalone\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("第二步:访问Nacos服务")]),s._v(" "),t("p",[s._v("打开浏览器，输入http://localhost:8848/nacos地址，出现如下登陆页面：\n"),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210708183621253.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[s._v("默认登陆用户名和密码都为nacos，登陆成功以后，进入如下页面：\n"),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210708183648574.png",alt:"在这里插入图片描述"}}),s._v("\n打开配置列表，如图所示：\n"),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210708183716783.png",alt:"在这里插入图片描述"}}),s._v("\n然后从”上往下挨个编辑”，把设计到连接Mysql和Redis的所有地方，改为自己对应的用户名和密码，以网关的配置文件ruoyi-auth-dev.yml为例，如图所示：\n"),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210708183738230.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("h2",{attrs:{id:"基于idea打开项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基于idea打开项目"}},[s._v("#")]),s._v(" 基于IDEA打开项目")]),s._v(" "),t("p",[s._v("第一步：基于IDEA打开项目，如图所示：\n"),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210708183814596.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[s._v("第二步：项目打开以后，配置maven下载项目依赖。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210708183845494.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("h2",{attrs:{id:"启动并检测后端项目服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动并检测后端项目服务"}},[s._v("#")]),s._v(" 启动并检测后端项目服务")]),s._v(" "),t("p",[s._v("第一步：依次启动ruoyi-gateway，ruoyi-auth，ruoyi-modules下的ruoyi-system。\n第二步:检测nacos的服务列表，如图所示：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/2021070818392771.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("h1",{attrs:{id:"若依前端项目配置及运行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#若依前端项目配置及运行"}},[s._v("#")]),s._v(" 若依前端项目配置及运行")]),s._v(" "),t("h2",{attrs:{id:"安装项目依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装项目依赖"}},[s._v("#")]),s._v(" 安装项目依赖")]),s._v(" "),t("p",[s._v("第一步：选中前端项目，如图所示：\n"),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210708183938767.png",alt:"在这里插入图片描述"}}),s._v("\n第二步：右键前端项目，打开终端命令行，如图所示：\n"),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210708184010697.png",alt:"在这里插入图片描述"}}),s._v("\n第三步：在命令行输入npm install 安装项目依赖，如图所示：\n"),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210708184025800.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("h2",{attrs:{id:"启动运行前端项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动运行前端项目"}},[s._v("#")]),s._v(" 启动运行前端项目")]),s._v(" "),t("p",[s._v("第一步：在命令行输入 npm run dev 启动运行前端服务，如图所示：\n"),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/2021070818404654.png",alt:"在这里插入图片描述"}}),s._v("\n第二步：浏览器输入localhost进行访问，进入登陆页面，如图所示\n"),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210708184236201.png",alt:"在这里插入图片描述"}}),s._v("\n第三步：输入账号（admin/admin123）,登陆系统，如图所示：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210708184300308.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("h1",{attrs:{id:"总结-summary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结-summary"}},[s._v("#")]),s._v(" 总结(Summary)")]),s._v(" "),t("h2",{attrs:{id:"重难点分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重难点分析"}},[s._v("#")]),s._v(" 重难点分析")]),s._v(" "),t("ul",[t("li",[s._v("熟悉若依平台业务及技术(架构、技术栈)")]),s._v(" "),t("li",[s._v("掌握第三方平台的一个搭建过程（参考官方或企业文档）")]),s._v(" "),t("li",[s._v("掌握微服务架构的项目结构（参考结构创建自己的项目）。")])]),s._v(" "),t("h2",{attrs:{id:"faq分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#faq分析"}},[s._v("#")]),s._v(" FAQ分析")]),s._v(" "),t("ul",[t("li",[s._v("如何在命令行执行sql脚本文件？source d:/RuoYi-Cloud.sql")]),s._v(" "),t("li",[s._v("数据库中的导入的数据是乱码？Sqlyog可能会有这个问题")]),s._v(" "),t("li",[s._v("Nacos服务启动后看不到配置数据？检查nacos配置文件application.properties中数据库的连接配置。")])]),s._v(" "),t("h2",{attrs:{id:"bug分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bug分析"}},[s._v("#")]),s._v(" BUG分析")]),s._v(" "),t("ul",[t("li",[s._v("Cannot resolve plugin spring-boot-maven-plugin:")]),s._v(" "),t("li",[s._v("MySql执行sql脚本时失败(检查你mysql的版本是否为5.7以上版本)")]),s._v(" "),t("li",[s._v("500 exception （一定要看服务端服务是否启动，控制台是否有异常）")]),s._v(" "),t("li",[s._v("Redis启动失败（先卸载再启动）")]),s._v(" "),t("li",[s._v("Npm install （安装客户端依赖过程失败，首先检测node版本,选择稳定版）")]),s._v(" "),t("li",[s._v("服务启动时显示连接数据库失败(检查nacos配置列表中配置文件内容是否修改了连接数据库的配置)")])])])}),[],!1,null,null,null);a.default=e.exports}}]);