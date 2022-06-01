(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{1428:function(v,_,t){"use strict";t.r(_);var d=t(24),e=Object(d.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"注解大全"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注解大全"}},[v._v("#")]),v._v(" 注解大全")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("注解")]),v._v(" "),t("th",[v._v("所属框架")]),v._v(" "),t("th",[v._v("重要程度")]),v._v(" "),t("th",[v._v("应用位置")]),v._v(" "),t("th",[v._v("说明")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[t("code",[v._v("@Component")])]),v._v(" "),t("td",[v._v("Spring")]),v._v(" "),t("td",[v._v("★★★★★")]),v._v(" "),t("td",[v._v("组件类")]),v._v(" "),t("td",[v._v("添加此注解类将被视为“组件”，当Spring执行组件扫描时，如果发现组件类，就会自动创建类的对象")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("@Controller")])]),v._v(" "),t("td",[v._v("Spring")]),v._v(" "),t("td",[v._v("★★★★★")]),v._v(" "),t("td",[v._v("控制器类")]),v._v(" "),t("td",[v._v("特定的组件：控制器，是以"),t("code",[v._v("@Component")]),v._v("作为元注解的，在基于Spring MVC的框架中，控制器类必须添加此注解，或以此为元注解的其它注解")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("@Service")])]),v._v(" "),t("td",[v._v("Spring")]),v._v(" "),t("td",[v._v("★★★★★")]),v._v(" "),t("td",[v._v("业务类")]),v._v(" "),t("td",[v._v("特定的组件：业务类，是以"),t("code",[v._v("@Component")]),v._v("作为元注解的")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("@Repository")])]),v._v(" "),t("td",[v._v("Spring")]),v._v(" "),t("td",[v._v("★★★★★")]),v._v(" "),t("td",[v._v("数据访问类")]),v._v(" "),t("td",[v._v("特定的组件：数据访问类，是以"),t("code",[v._v("@Component")]),v._v("作为元注解的")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("@ComponentScan")])]),v._v(" "),t("td",[v._v("Spring")]),v._v(" "),t("td",[v._v("★★★★")]),v._v(" "),t("td",[v._v("配置类")]),v._v(" "),t("td",[v._v("添加此注解后，当此类被加载时，Spring就会执行组件扫描，扫描的是此注解配置的包及其子孙包，包中的类如果添加了组件相关注解，则Spring会自动创建这些添加了组件注解的类的对象，在Spring Boot项目中，组件扫描默认的根包就是创建项目时得到包，此注解还是Spring Boot中"),t("code",[v._v("@SpringBootApplication")]),v._v("的元注解")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("@Configuration")])]),v._v(" "),t("td",[v._v("Spring")]),v._v(" "),t("td",[v._v("★★★★★")]),v._v(" "),t("td",[v._v("配置类")]),v._v(" "),t("td",[v._v("添加此注解的类会被视为配置类，在Spring框架中可以使用ApplicationContext直接加载，使类中的配置项生效，或在集成框架中，只要配置类在组件扫描范围内，此类中的配置项即可生效")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("@Autowired")])]),v._v(" "),t("td",[v._v("Spring")]),v._v(" "),t("td",[v._v("★★★★★")]),v._v(" "),t("td",[v._v("属性，Setter方法，构造方法")]),v._v(" "),t("td",[v._v("当添加在属性上，Spring会自动从容器中找到合适的对象为此属性注入值，当添加在Setter方法上或构造方法上，Spring会自动调用对应的方法")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("@Qualifier")])]),v._v(" "),t("td",[v._v("Spring")]),v._v(" "),t("td",[v._v("★★★★")]),v._v(" "),t("td",[v._v("属性，方法参数")]),v._v(" "),t("td",[v._v("当使用"),t("code",[v._v("@Autowired")]),v._v("自动装配时，如果存在多个匹配类型的对象，且根据名称无法装配时，可以使用此注解指定名称")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("@PropertySource")])]),v._v(" "),t("td",[v._v("Spring")]),v._v(" "),t("td",[v._v("★★★★")]),v._v(" "),t("td",[v._v("配置类")]),v._v(" "),t("td",[v._v("用于指定需要读取的"),t("code",[v._v(".properties")]),v._v("配置文件，当读取配置文件后，会将数据注入到Spring内置的"),t("code",[v._v("Environment")]),v._v("对象中")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("@Value")])]),v._v(" "),t("td",[v._v("Spring")]),v._v(" "),t("td",[v._v("★★★★★")]),v._v(" "),t("td",[v._v("属性，方法的参数")]),v._v(" "),t("td",[v._v("主要用于配置读取"),t("code",[v._v("Environment")]),v._v("数据的表达式，使得Spring为属性、方法的参数注入值")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("@Bean")])]),v._v(" "),t("td",[v._v("Spring")]),v._v(" "),t("td",[v._v("★★★★★")]),v._v(" "),t("td",[v._v("配置类中返回对象的方法")]),v._v(" "),t("td",[v._v("使得Spring自动调用此方法，并将方法返回的对象保存在Spring容器中")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("@Scope")])]),v._v(" "),t("td",[v._v("Spring")]),v._v(" "),t("td",[v._v("★★")]),v._v(" "),t("td",[v._v("组件类")]),v._v(" "),t("td",[v._v("配置此类的对象是否为单例的")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("@Lazy")])]),v._v(" "),t("td",[v._v("Spring")]),v._v(" "),t("td",[v._v("★★")]),v._v(" "),t("td",[v._v("组件类")]),v._v(" "),t("td",[v._v("当组件类的对象将是单例的，配置它是否为懒加载")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("@PostConstruct")])]),v._v(" "),t("td",[v._v("javax")]),v._v(" "),t("td",[v._v("★★")]),v._v(" "),t("td",[v._v("组件类的方法")]),v._v(" "),t("td",[v._v("标记此方法是“初始化”的生命周期方法，Spring会在实例化对象后自动调用此方法")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("@PreDestroy")])]),v._v(" "),t("td",[v._v("java")]),v._v(" "),t("td",[v._v("★★")]),v._v(" "),t("td",[v._v("组件类的方法")]),v._v(" "),t("td",[v._v("标记此方法是“销毁”的生命周期方法，Spring会在销毁对象之前自动调用此方法")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("@Resource")])]),v._v(" "),t("td",[v._v("javax")]),v._v(" "),t("td",[v._v("★★")]),v._v(" "),t("td",[v._v("属性")]),v._v(" "),t("td",[v._v("用于自动装配，从执行效果上，一定程度可以等效于"),t("code",[v._v("@Autowired")])])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("@MapperScan")])]),v._v(" "),t("td",[v._v("Mybatis")]),v._v(" "),t("td",[v._v("★★★★★")]),v._v(" "),t("td",[v._v("配置类")]),v._v(" "),t("td",[v._v("配置Mybatis接口所在的根包，使得Mybatis可以创建这些接口的代理对象")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("@Mapper")])]),v._v(" "),t("td",[v._v("Mybatis")]),v._v(" "),t("td",[v._v("★★★")]),v._v(" "),t("td",[v._v("数据访问接口")]),v._v(" "),t("td",[v._v("用于指定哪些接口是Mybatis需要创建代理对象的，不与"),t("code",[v._v("@MapperScan")]),v._v("同时使用")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("@Param")])]),v._v(" "),t("td",[v._v("Mybatis")]),v._v(" "),t("td",[v._v("★★★★★")]),v._v(" "),t("td",[v._v("方法参数")]),v._v(" "),t("td",[v._v("当Mapper接口中抽象方法的参数超过1个时，应该添加此注解，用于配置参数名称，后续，在SQL中"),t("code",[v._v("#{}")]),v._v("占位符中的名称就是此注解配置的名称")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("@Insert")])]),v._v(" "),t("td",[v._v("Mybatis")]),v._v(" "),t("td",[v._v("★★")]),v._v(" "),t("td",[v._v("抽象方法")]),v._v(" "),t("td",[v._v("配置Mapper接口中抽象方法映射的SQL语句")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("@Delete")])]),v._v(" "),t("td",[v._v("Mybatis")]),v._v(" "),t("td",[v._v("★★")]),v._v(" "),t("td",[v._v("抽象方法")]),v._v(" "),t("td",[v._v("配置Mapper接口中抽象方法映射的SQL语句")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("@Update")])]),v._v(" "),t("td",[v._v("Mybatis")]),v._v(" "),t("td",[v._v("★★")]),v._v(" "),t("td",[v._v("抽象方法")]),v._v(" "),t("td",[v._v("配置Mapper接口中抽象方法映射的SQL语句")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("@Select")])]),v._v(" "),t("td",[v._v("Mybatis")]),v._v(" "),t("td",[v._v("★★")]),v._v(" "),t("td",[v._v("抽象方法")]),v._v(" "),t("td",[v._v("配置Mapper接口中抽象方法映射的SQL语句")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("@Test")])]),v._v(" "),t("td",[v._v("JUnit")]),v._v(" "),t("td",[v._v("★★★★★")]),v._v(" "),t("td",[v._v("测试方法")]),v._v(" "),t("td",[v._v("标识此方法是一个JUnit测试方法")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("@Sql")])]),v._v(" "),t("td",[v._v("Spring Test")]),v._v(" "),t("td",[v._v("★★★★★")]),v._v(" "),t("td",[v._v("测试类，测试方法")]),v._v(" "),t("td",[v._v("用于配置需要执行的SQL脚本，及执行阶段，当测试类和测试方法上都添加了此注解，则测试方法上的注解会覆盖测试类上的注解")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("@SpringJUnitConfig")])]),v._v(" "),t("td",[v._v("Spring Test")]),v._v(" "),t("td",[v._v("★★★★")]),v._v(" "),t("td",[v._v("测试类")]),v._v(" "),t("td",[v._v("用于指定Spring的配置类，使得当前测试类在执行测试方法之前会加载Spring环境，则在测试类中可以使用任何Spring的机制，例如自动装配等")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("@ResponseBody")])]),v._v(" "),t("td",[v._v("Spring MVC")]),v._v(" "),t("td",[v._v("★★★")]),v._v(" "),t("td",[v._v("控制器类，处理请求的方法")]),v._v(" "),t("td",[v._v("当在控制器类上添加此注解，则类中所有处理请求的方法都将响应正文，当在控制器类中处理请求的方法上添加此注解，则此方法将响应正文。此注解是"),t("code",[v._v("@RestController")]),v._v("、"),t("code",[v._v("@RestControllerAdvice")]),v._v("的元注解")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("@RestController")])]),v._v(" "),t("td",[v._v("Spring MVC")]),v._v(" "),t("td",[v._v("★★★★★")]),v._v(" "),t("td",[v._v("控制器类")]),v._v(" "),t("td",[v._v("标记当前类是控制器类，且类中处理请求的方法均响应正文")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("@RequestMapping")])]),v._v(" "),t("td",[v._v("Spring MVC")]),v._v(" "),t("td",[v._v("★★★★★")]),v._v(" "),t("td",[v._v("控制器类，处理请求的方法")]),v._v(" "),t("td",[v._v("当在控制器类上添加此注解，通常用于配置请求路径的前缀，也可配置一些其它的参数，当在处理请求的方法上添加此注解，通常用于配置请求路径（在类的上配置的路径基础之上），也可以配置其它参数，例如限制请求方式")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("@GetMapping")])]),v._v(" "),t("td",[v._v("Spring MVC")]),v._v(" "),t("td",[v._v("★★★★★")]),v._v(" "),t("td",[v._v("处理请求的方法")]),v._v(" "),t("td",[v._v("相当于"),t("code",[v._v("@RequestMapping(method = RequestMethod.GET)")])])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("@PostMapping")])]),v._v(" "),t("td",[v._v("Spring MVC")]),v._v(" "),t("td",[v._v("★★★★★")]),v._v(" "),t("td",[v._v("处理请求的方法")]),v._v(" "),t("td",[v._v("相当于"),t("code",[v._v("@RequestMapping(method = RequestMethod.POST)")])])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("@PutMapping")])]),v._v(" "),t("td",[v._v("Spring MVC")]),v._v(" "),t("td",[v._v("★★")]),v._v(" "),t("td",[v._v("处理请求的方法")]),v._v(" "),t("td",[v._v("相当于"),t("code",[v._v("@RequestMapping(method = RequestMethod.PUT)")])])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("@DeleteMapping")])]),v._v(" "),t("td",[v._v("Spring MVC")]),v._v(" "),t("td",[v._v("★★")]),v._v(" "),t("td",[v._v("处理请求的方法")]),v._v(" "),t("td",[v._v("相当于"),t("code",[v._v("@RequestMapping(method = RequestMethod.DELETE)")])])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("@PathVariable")])]),v._v(" "),t("td",[v._v("Spring MVC")]),v._v(" "),t("td",[v._v("★★★★★")]),v._v(" "),t("td",[v._v("处理请求的方法的参数")]),v._v(" "),t("td",[v._v("读取在URL中使用"),t("code",[v._v("{}")]),v._v("格式进行占位的参数值")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("@RequestParam")])]),v._v(" "),t("td",[v._v("Spring MVC")]),v._v(" "),t("td",[v._v("★★★")]),v._v(" "),t("td",[v._v("处理请求的方法的参数")]),v._v(" "),t("td",[v._v("可以配置此参数的名称、是否必须、默认值")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("@RequestBody")])]),v._v(" "),t("td",[v._v("Spring MVC")]),v._v(" "),t("td",[v._v("★★★★")]),v._v(" "),t("td",[v._v("处理请求的方法的参数")]),v._v(" "),t("td",[v._v("标记此参数是在请求体中获取的数据，可支持客户端通过JSON格式提交请求参数")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("@ExceptionHandler")])]),v._v(" "),t("td",[v._v("Spring MVC")]),v._v(" "),t("td",[v._v("★★★★★")]),v._v(" "),t("td",[v._v("处理异常的方法")]),v._v(" "),t("td",[v._v("标记此方法是统一处理异常的方法")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("@ControllerAdvice")])]),v._v(" "),t("td",[v._v("Spring MVC")]),v._v(" "),t("td",[v._v("★★★")]),v._v(" "),t("td",[v._v("类")]),v._v(" "),t("td",[v._v("Spring MVC会在每次处理请求时按需调用此类中的方法，例如，处理请求时抛出异常，则会调用此类中处理异常的方法")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("@RestControllerAdvice")])]),v._v(" "),t("td",[v._v("Spring MVC")]),v._v(" "),t("td",[v._v("★★★★★")]),v._v(" "),t("td",[v._v("类")]),v._v(" "),t("td",[v._v("标记此类是响应正文的且具有"),t("code",[v._v("@ControllerAdvice")]),v._v("效果的")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("@EnableWebMvc")])]),v._v(" "),t("td",[v._v("Spring MVC")]),v._v(" "),t("td",[v._v("★★★")]),v._v(" "),t("td",[v._v("Spring MVC的配置类")]),v._v(" "),t("td",[v._v("开启Spring MVC的增强模式，例如响应JSON格式的正文时需要开启，在Spring Boot中默认已开启，无需显式使用此注解")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("@SpringBootConfiguration")])]),v._v(" "),t("td",[v._v("Spring Boot")]),v._v(" "),t("td",[v._v("★★★")]),v._v(" "),t("td",[v._v("类")]),v._v(" "),t("td",[v._v("标记此类是Spring Boot的配置类")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("@SpringBootApplication")])]),v._v(" "),t("td",[v._v("Spring Boot")]),v._v(" "),t("td",[v._v("★★★★★")]),v._v(" "),t("td",[v._v("类")]),v._v(" "),t("td",[v._v("标记此类是Spring Boot的应用程序类，也是启动类，也是配置类，每个Spring Boot工程中只能有1个类添加此注解")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("@SpringBootTest")])]),v._v(" "),t("td",[v._v("Spring Boot")]),v._v(" "),t("td",[v._v("★★★★★")]),v._v(" "),t("td",[v._v("测试类")]),v._v(" "),t("td",[v._v("标记此类是Spring Boot的测试类，会自动加载项目中的环境，例如Spring环境等")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("@Data")])]),v._v(" "),t("td",[v._v("Lombok")]),v._v(" "),t("td",[v._v("★★★★★")]),v._v(" "),t("td",[v._v("POJO类")]),v._v(" "),t("td",[v._v("将在编译期干预，生成Setters & Getters，"),t("code",[v._v("hashCode()")]),v._v("、"),t("code",[v._v("equals()")]),v._v("、"),t("code",[v._v("toString()")])])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("@Accessors")])]),v._v(" "),t("td",[v._v("Lombok")]),v._v(" "),t("td",[v._v("★★★")]),v._v(" "),t("td",[v._v("POJO类")]),v._v(" "),t("td",[v._v("将Setters调整为返回当前对象")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("@Slf4j")])]),v._v(" "),t("td",[v._v("Lombok")]),v._v(" "),t("td",[v._v("★★★★★")]),v._v(" "),t("td",[v._v("类")]),v._v(" "),t("td",[v._v("将在编译期干预，将声明并实例化一个名为"),t("code",[v._v("log")]),v._v("的变量，则在此类中可以使用"),t("code",[v._v("log")]),v._v("变量输出日志")])])])])])}),[],!1,null,null,null);_.default=e.exports}}]);