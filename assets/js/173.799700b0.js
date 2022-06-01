(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{1438:function(s,n,a){"use strict";a.r(n);var r=a(24),t=Object(r.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"实验步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实验步骤"}},[s._v("#")]),s._v(" 实验步骤")]),s._v(" "),a("p",[s._v("这一节将学习使用 Spring Boot 开发 web 应用。本节需要同学们已经掌握了 Spring MVC 的知识。")]),s._v(" "),a("p",[s._v("由于 maven 下载包需要联网，这里先将 maven 包下载下来，放到本地仓库便可以解决联网的问题")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("wget http://labfile.oss.aliyuncs.com/courses/1152/m2.zip\nunzip m2.zip\nmv .m2 /home/shiyanlou/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"spring-boot-mvc-基本配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot-mvc-基本配置"}},[s._v("#")]),s._v(" Spring Boot MVC 基本配置")]),s._v(" "),a("p",[s._v("上一章节已经知道了如何修改 Spring Boot 的访问端口，那么可能有同学会问，之前的 Spring MVC 项目都是放到 tomcat 容器中运行，为什么在这里没有 tomcat 也可以访问呢？因为 SpringBoot 已经内置了 Servlet 容器，包括 tomcat，jetty，Undertow 等，同学们可以自由选择。接着看看 Spring Boot 提供了哪些与 Servlet 容器相关的属性配置：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://doc.shiyanlou.com/document-uid441493labid7987timestamp1535531648183.png/wm",alt:"img"}})]),s._v(" "),a("p",[s._v("可以在图中看到许多 servlet 容器相关的配置，有 jsp，session,cookie。这里说明一下server.servlet.path这个属性，这个属性用于设置 dispatcher servlet 的监听路径，默认是： / ，但是这个属性在 SpringBoot2.x 中有改动，在 SpringBoot1.x 中该属性为server.servlet-path。")]),s._v(" "),a("p",[s._v("再看看 SpirngBoot 为 Spring mvc 提供了哪些配置：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://doc.shiyanlou.com/document-uid441493labid7987timestamp1535533328468.png/wm",alt:"img"}})]),s._v(" "),a("p",[s._v("可以在图中看到许多在学习 Spring MVC 时熟悉的属性。比如spring.mvc.view.prefix 和 spring.mvc.view.suffix,这两个属性用于配置视图文件的前缀和后缀。接下来看看如何在 Spring Boot 中使用它们，首先建立一个 Spring Boot 项目springboot (前面已经说过如何建立，这里不再赘述),然后修改 pom.xml，添加 maven 相关依赖包。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n\n    <groupId>com.shiyanlou</groupId>\n    <artifactId>springboot</artifactId>\n    <version>0.0.1-SNAPSHOT</version>\n    <packaging>jar</packaging>\n\n    <name>springboot</name>\n    <description>Demo project for Spring Boot</description>\n\n    \x3c!--设置父模块 这样就可以继承父模块中的配置信息--\x3e\n    <parent>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-parent</artifactId>\n        <version>2.0.4.RELEASE</version>\n        <relativePath/>\n    </parent>\n\n    <properties>\n        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n        <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>\n        <java.version>1.8</java.version>\n    </properties>\n\n    <dependencies>\n    \x3c!--添加web依赖--\x3e\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-web</artifactId>\n        </dependency>\n\n    </dependencies>\n\n    <build>\n        <plugins>\n        \x3c!--spirng Boot maven插件--\x3e\n            <plugin>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-maven-plugin</artifactId>\n            </plugin>\n        </plugins>\n    </build>\n\n</project>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br")])]),a("p",[s._v("创建如下目录结构（和上个实验一样的目录结构，可以将上个实现的代码直接拿过来修改）")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://doc.shiyanlou.com/document-uid441493labid8432timestamp1542851989479.png/wm",alt:"img"}})]),s._v(" "),a("p",[s._v("接下来在application.properties编写如下内容")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#端口\nserver.port=8080\n#视图文件前缀\nspring.mvc.view.prefix=/view/\n#视图文件后缀\nspring.mvc.view.suffix=.html\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("接着在src/main/resources/static/中创建view目录，在 view 目录下创建shiyanlou.html文件。(注意：这里只是为了演示 SpringBoot 映射到视图文件，实际上开发中并不会放到这里，SpringBoot 推荐使用模板引擎，也就是放到 template 中)")]),s._v(" "),a("p",[s._v("内容如下")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>Title</title>\n</head>\n<body>\n<p style="color: red;">welcome shiyanlou</p>\n</body>\n</html>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("接着来编写ShiyanlouController.java")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('package com.shiyanlou.springboot.controller;\n\nimport org.springframework.stereotype.Controller;\nimport org.springframework.web.bind.annotation.RequestMapping;\n\n//注意这里已经不是@RestController了 和上个试验不同，因为需要返回视图，所以不能使用@ResponseBody\n@Controller\npublic class ShiyanlouController {\n\n    @RequestMapping("shiyanlou")\n    public String shiyanlou(){\n        return "shiyanlou";\n    }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("看看SpringbootApplication.java：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("package com.shiyanlou.springboot;\n\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\n\n@SpringBootApplication\npublic class SpringbootApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(SpringbootApplication.class, args);\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("运行使用mvn spring-boot:run运行程序，选择工具中的 web 服务，访问https://**"),a("em",[s._v("*")]),s._v("*****.simplelab.cn/shiyanlou")]),s._v(" "),a("p",[s._v("可以看到成功的映射到了的视图文件。")]),s._v(" "),a("h2",{attrs:{id:"springboot-静态资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springboot-静态资源"}},[s._v("#")]),s._v(" SpringBoot 静态资源")]),s._v(" "),a("p",[s._v("SpringBoot 的静态资源默认目录为/static、/public、/resources、和/META-INF/resources，默认映射路径都是/。SpringBoot 默认会按照META/resources > resources > static > public 的优先级寻找对应的资源文件并返回第一个找到的文件。下面来试一试 SpringBoot 的静态资源访问，在 static 中放入一张图片1.jpg,接下来重启项目，访问"),a("code",[s._v("https://**.simplelab.cn/1.jpg")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://doc.shiyanlou.com/document-uid441493labid8432timestamp1542852779293.png/wm",alt:"img"}})]),s._v(" "),a("p",[s._v("成功的访问到了放在其中的静态资源。如果不想使用默认的静态资源路径，可以配置自己的静态资源路径，通过实现WebMvcConfigurer接口的addResourceHandlers方法来自定义静态资源，打开SpringbootApplication.java，添加以下内容：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('package com.shiyanlou.springboot;\n\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;\nimport org.springframework.web.servlet.config.annotation.WebMvcConfigurer;\n\n@SpringBootApplication\npublic class SpringbootApplication {\n\n\n    //设置配置类\n    @Configuration\n    static class WebConfig implements WebMvcConfigurer {\n\n        //重写addResourceHandlers方法\n        @Override\n        public void addResourceHandlers(ResourceHandlerRegistry registry) {\n            //设置静态资源映射路径为/**，资源位置为类路径下的upload\n            registry.addResourceHandler("/**").addResourceLocations("classpath:/upload/");\n        }\n    }\n    public static void main(String[] args) {\n        SpringApplication.run(SpringbootApplication.class, args);\n    }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("p",[s._v("接着在src/main/resources目录下建立upload目录，下载图片文件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("wget http://labfile.oss.aliyuncs.com/courses/1152/1.jpg\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("将1.jpg移动到upload目录下，重启项目，访问https://"),a("strong",[a("em",[s._v("*")]),s._v("*")]),s._v(".simplelab.cn/1.jpg")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://doc.shiyanlou.com/document-uid441493labid8432timestamp1542852779293.png/wm",alt:"img"}})]),s._v(" "),a("p",[s._v("成功访问到了自定义目录的静态资源。")]),s._v(" "),a("p",[s._v("除了使用 Java 配置外，也可以使用 application.properties 配置，")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#端口\nserver.port=8080\nspring.mvc.view.prefix=/view/\nspring.mvc.view.suffix=.html\n\n#多个配置之间使用,分割  注意这个属性会使默认的配置失效\nspring.resources.static-locations=classpath:/upload/,classpath:/static\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("然后注释掉SpringbootApplication.java中的配置内容")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('package com.shiyanlou.springboot;\n\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;\nimport org.springframework.web.servlet.config.annotation.WebMvcConfigurer;\n\n@SpringBootApplication\npublic class SpringbootApplication {\n\n\n    //设置配置类\n//    @Configuration\n//    static class WebConfig implements WebMvcConfigurer {\n//\n//        //重写addResourceHandlers方法\n//        @Override\n//        public void addResourceHandlers(ResourceHandlerRegistry registry) {\n//            //设置静态资源映射路径为/**，资源位置为类路径下的upload\n//            registry.addResourceHandler("/**").addResourceLocations("classpath:/upload/");\n//        }\n//    }\n    public static void main(String[] args) {\n        SpringApplication.run(SpringbootApplication.class, args);\n    }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("p",[s._v("重启项目，打开浏览器访问https://"),a("strong",[a("em",[s._v("*")]),s._v("*")]),s._v(".simplelab.cn/1.jpg")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://doc.shiyanlou.com/document-uid441493labid8432timestamp1542852779293.png/wm",alt:"img"}})]),s._v(" "),a("p",[s._v("说明成功的使用 application.properties 文件改变了 SpringBoot 的静态文件配置。")]),s._v(" "),a("p",[s._v("另外尽量不在 SpringBoot 中使用 src/main/wabapp 目录。")]),s._v(" "),a("blockquote",[a("p",[s._v("如果你的应用使用 jar 打包，不要使用/src/main/webapp 目录，尽管它是一个标准目录,该目录仅仅在使用 war 打包部署的时候生效，在大部分构建工具都它都会被忽略")])]),s._v(" "),a("p",[s._v("以上为 SpringBoot 官方原话。")])])}),[],!1,null,null,null);n.default=t.exports}}]);