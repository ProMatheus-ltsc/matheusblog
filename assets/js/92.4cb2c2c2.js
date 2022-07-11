(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{1128:function(a,s,t){a.exports=t.p+"assets/img/spring-framework-ioc-source-7.51cd32ce.png"},1129:function(a,s,t){a.exports=t.p+"assets/img/spring-framework-ioc-source-2.85715a7b.png"},1130:function(a,s,t){a.exports=t.p+"assets/img/spring-framework-ioc-source-71.bc953dee.png"},1705:function(a,s,t){"use strict";t.r(s);var n=t(65),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,n=a._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"bean工厂"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bean工厂"}},[a._v("#")]),a._v(" Bean工厂")]),a._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#beanfactory-ioc容器功能规范"}},[a._v("BeanFactory---IOC容器功能规范]")]),n("ul",[n("li",[n("a",{attrs:{href:"#beanfactory定义了ioc-容器基本功能规范"}},[a._v("BeanFactory定义了IOC 容器基本功能规范？")])]),n("li",[n("a",{attrs:{href:"#beanfactory为何要定义这么多层次的接口-定义了哪些接口"}},[a._v("BeanFactory为何要定义这么多层次的接口？定义了哪些接口？")])]),n("li",[n("a",{attrs:{href:"#如何将bean注册到beanfactory中-beanregistry"}},[a._v("如何将Bean注册到BeanFactory中？BeanRegistry")])])])])])]),n("p"),a._v(" "),n("p",[a._v("IoC是设计思想，IoC有三个核心：BeanFactory、反射、DI。BeanFactory利用反射实现对象的创建，DI实现对象关系管理。")]),a._v(" "),n("h2",{attrs:{id:"beanfactory-ioc容器功能规范"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#beanfactory-ioc容器功能规范"}},[a._v("#")]),a._v(" BeanFactory---IOC容器功能规范]")]),a._v(" "),n("p",[a._v("我们初步的画出IOC容器的整体功能。")]),a._v(" "),n("p",[n("img",{attrs:{src:t(1128),alt:""}})]),a._v(" "),n("p",[a._v("在此基础上，我们初步的去思考，如果作为一个IOC容器的设计者，主体上应该包含哪几个部分：")]),a._v(" "),n("ul",[n("li",[a._v("加载Bean的配置（比如xml配置）\n比如不同类型资源的加载，解析成生成统一Bean的定义")]),a._v(" "),n("li",[a._v("根据Bean的定义加载生成Bean的实例，并放置在Bean容器中\n比如Bean的依赖注入，Bean的嵌套，Bean存放（缓存）等")]),a._v(" "),n("li",[a._v("除了基础Bean外，还有常规针对企业级业务的特别Bean\n比如国际化Message，事件Event等生成特殊的类结构去支撑")]),a._v(" "),n("li",[a._v("对容器中的Bean提供统一的管理和调用\n比如用工厂模式管理，提供方法根据名字/类的类型等从容器中获取Bean")])]),a._v(" "),n("p",[a._v("Spring Bean的创建是典型的工厂模式，这一系列的Bean工厂，也即IOC容器为开发者管理对象间的依赖关系提供了很多便利和基础服务，在Spring中有许多的IOC容器的实现供用户选择和使用，这是IOC容器的基础；在顶层的结构设计主要围绕着BeanFactory和xxxRegistry进行：")]),a._v(" "),n("ul",[n("li",[a._v("BeanFactory： 工厂模式定义了IOC容器的基本功能规范")]),a._v(" "),n("li",[a._v("BeanRegistry： 向IOC容器手工注册")]),a._v(" "),n("li",[a._v("BeanDefinition 对象的方法")])]),a._v(" "),n("p",[a._v("其相互关系如下：")]),a._v(" "),n("p",[n("img",{attrs:{src:t(1129),alt:""}})]),a._v(" "),n("h3",{attrs:{id:"beanfactory定义了ioc-容器基本功能规范"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#beanfactory定义了ioc-容器基本功能规范"}},[a._v("#")]),a._v(" BeanFactory定义了IOC 容器基本功能规范？")]),a._v(" "),n("p",[a._v("BeanFactory作为最顶层的一个接口类，它定义了IOC容器的基本功能规范，BeanFactory 有三个子类：ListableBeanFactory、HierarchicalBeanFactory 和AutowireCapableBeanFactory。我们看下BeanFactory接口：")]),a._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("interface")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("BeanFactory")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("    \n      \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//用于取消引用实例并将其与FactoryBean创建的bean区分开来。例如，如果命名的bean是FactoryBean，则获取将返回Factory，而不是Factory返回的实例。")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" FACTORY_BEAN_PREFIX "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"&"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" \n        \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//根据bean的名字和Class类型等来得到bean实例    ")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("getBean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throws")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("BeansException")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("    \n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("getBean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Class")]),a._v(" requiredType"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throws")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("BeansException")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("    \n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("getBean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throws")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("BeansException")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("getBean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Class")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" requiredType"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throws")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("BeansException")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("getBean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Class")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" requiredType"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throws")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("BeansException")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//返回指定bean的Provider")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ObjectProvider")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("getBeanProvider")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Class")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" requiredType"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ObjectProvider")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("getBeanProvider")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ResolvableType")]),a._v(" requiredType"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//检查工厂中是否包含给定name的bean，或者外部注册的bean")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("containsBean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//检查所给定name的bean是否为单例/原型")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("isSingleton")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throws")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("NoSuchBeanDefinitionException")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("isPrototype")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throws")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("NoSuchBeanDefinitionException")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//判断所给name的类型与type是否匹配")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("isTypeMatch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ResolvableType")]),a._v(" typeToMatch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throws")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("NoSuchBeanDefinitionException")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("isTypeMatch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Class")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" typeToMatch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throws")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("NoSuchBeanDefinitionException")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//获取给定name的bean的类型")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Nullable")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Class")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("getType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throws")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("NoSuchBeanDefinitionException")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//返回给定name的bean的别名")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("getAliases")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n     \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br"),n("span",{staticClass:"line-number"},[a._v("17")]),n("br"),n("span",{staticClass:"line-number"},[a._v("18")]),n("br"),n("span",{staticClass:"line-number"},[a._v("19")]),n("br"),n("span",{staticClass:"line-number"},[a._v("20")]),n("br"),n("span",{staticClass:"line-number"},[a._v("21")]),n("br"),n("span",{staticClass:"line-number"},[a._v("22")]),n("br"),n("span",{staticClass:"line-number"},[a._v("23")]),n("br"),n("span",{staticClass:"line-number"},[a._v("24")]),n("br"),n("span",{staticClass:"line-number"},[a._v("25")]),n("br"),n("span",{staticClass:"line-number"},[a._v("26")]),n("br"),n("span",{staticClass:"line-number"},[a._v("27")]),n("br"),n("span",{staticClass:"line-number"},[a._v("28")]),n("br"),n("span",{staticClass:"line-number"},[a._v("29")]),n("br"),n("span",{staticClass:"line-number"},[a._v("30")]),n("br"),n("span",{staticClass:"line-number"},[a._v("31")]),n("br"),n("span",{staticClass:"line-number"},[a._v("32")]),n("br"),n("span",{staticClass:"line-number"},[a._v("33")]),n("br"),n("span",{staticClass:"line-number"},[a._v("34")]),n("br"),n("span",{staticClass:"line-number"},[a._v("35")]),n("br")])]),n("h3",{attrs:{id:"beanfactory为何要定义这么多层次的接口-定义了哪些接口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#beanfactory为何要定义这么多层次的接口-定义了哪些接口"}},[a._v("#")]),a._v(" BeanFactory为何要定义这么多层次的接口？定义了哪些接口？")]),a._v(" "),n("p",[a._v("主要是为了区分在 Spring 内部在操作过程中对象的传递和转化过程中，对对象的数据访问所做的限制。")]),a._v(" "),n("p",[a._v("有哪些接口呢？")]),a._v(" "),n("ul",[n("li",[a._v("ListableBeanFactory：该接口定义了访问容器中 Bean 基本信息的若干方法，如查看Bean 的个数、获取某一类型 Bean 的配置名、查看容器中是否包括某一 Bean 等方法；")]),a._v(" "),n("li",[a._v("HierarchicalBeanFactory：父子级联 IoC 容器的接口，子容器可以通过接口方法访问父容器； 通过 HierarchicalBeanFactory 接口， Spring 的 IoC 容器可以建立父子层级关联的容器体系，子容器可以访问父容器中的 Bean，但父容器不能访问子容器的 Bean。Spring 使用父子容器实现了很多功能，比如在 Spring MVC 中，展现层 Bean 位于一个子容器中，而业务层和持久层的 Bean 位于父容器中。这样，展现层 Bean 就可以引用业务层和持久层的 Bean，而业务层和持久层的 Bean 则看不到展现层的 Bean。")]),a._v(" "),n("li",[a._v("ConfigurableBeanFactory：是一个重要的接口，增强了 IoC 容器的可定制性，它定义了设置类装载器、属性编辑器、容器初始化后置处理器等方法；")]),a._v(" "),n("li",[a._v("ConfigurableListableBeanFactory: ListableBeanFactory 和 ConfigurableBeanFactory的融合；")]),a._v(" "),n("li",[a._v("AutowireCapableBeanFactory：定义了将容器中的 Bean 按某种规则（如按名字匹配、按类型匹配等）进行自动装配的方法；")])]),a._v(" "),n("h3",{attrs:{id:"如何将bean注册到beanfactory中-beanregistry"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何将bean注册到beanfactory中-beanregistry"}},[a._v("#")]),a._v(" 如何将Bean注册到BeanFactory中？BeanRegistry")]),a._v(" "),n("p",[a._v("Spring 配置文件中每一个"),n("code",[a._v("<bean>")]),a._v("节点元素在 Spring 容器里都通过一个 BeanDefinition 对象表示，它描述了 Bean 的配置信息。而 BeanDefinitionRegistry 接口提供了向容器手工注册 BeanDefinition 对象的方法。")]),a._v(" "),n("p",[a._v("把之前的设计要点和设计结构结合起来看:")]),a._v(" "),n("p",[n("img",{attrs:{src:t(1130),alt:""}})])])}),[],!1,null,null,null);s.default=e.exports}}]);