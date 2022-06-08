(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{1563:function(e,t,s){"use strict";s.r(t);var a=s(65),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"chapter-9-general-programming-通用程序设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chapter-9-general-programming-通用程序设计"}},[e._v("#")]),e._v(" Chapter 9. General Programming（通用程序设计）")]),e._v(" "),s("h3",{attrs:{id:"item-65-prefer-interfaces-to-reflection-接口优于反射"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#item-65-prefer-interfaces-to-reflection-接口优于反射"}},[e._v("#")]),e._v(" Item 65: Prefer interfaces to reflection（接口优于反射）")]),e._v(" "),s("p",[e._v("The core reflection facility, java.lang.reflect, offers programmatic access to arbitrary classes. Given a Class object, you can obtain Constructor, Method, and Field instances representing the constructors, methods, and fields of the class represented by the Class instance. These objects provide programmatic access to the class’s member names, field types, method signatures, and so on.")]),e._v(" "),s("p",[e._v("核心反射机制 "),s("code",[e._v("java.lang.reflect")]),e._v(" 提供对任意类的编程访问。给定一个 Class 对象，你可以获得 Constructor、Method 和 Field 实例，分别代表了该 Class 实例所表示的类的构造器、方法和字段。这些对象提供对类的成员名、字段类型、方法签名等的编程访问。")]),e._v(" "),s("p",[e._v("Moreover, Constructor, Method, and Field instances let you manipulate their underlying counterparts reflectively: you can construct instances, invoke methods, and access fields of the underlying class by invoking methods on the Constructor, Method, and Field instances. For example, Method.invoke lets you invoke any method on any object of any class (subject to the usual security constraints). Reflection allows one class to use another, even if the latter class did not exist when the former was compiled. This power, however, comes at a price:")]),e._v(" "),s("p",[e._v("此外，Constructor、Method 和 Field 实例允许你反射性地操作它们的底层对应项：你可以通过调用 Constructor、Method 和 Field 实例上的方法，可以构造底层类的实例、调用底层类的方法，并访问底层类中的字段。例如，Method.invoke 允许你在任何类的任何对象上调用任何方法（受默认的安全约束）。反射允许一个类使用另一个类，即使在编译前者时后者并不存在。然而，这种能力是有代价的：")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("You lose all the benefits of compile-time type checking,")]),e._v(" including exception checking. If a program attempts to invoke a nonexistent or inaccessible method reflectively, it will fail at runtime unless you’ve taken special precautions.")])]),e._v(" "),s("p",[e._v("你失去了编译时类型检查的所有好处，包括异常检查。如果一个程序试图反射性地调用一个不存在的或不可访问的方法，它将在运行时失败，除非你采取了特殊的预防措施。")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("The code required to perform reflective access is clumsy and verbose.")]),e._v(" It is tedious to write and difficult to read.")])]),e._v(" "),s("p",[e._v("执行反射访问所需的代码既笨拙又冗长。写起来很乏味，读起来也很困难。")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Performance suffers.")]),e._v(" Reflective method invocation is much slower than normal method invocation. Exactly how much slower is hard to say, as there are many factors at work. On my machine, invoking a method with no input parameters and an int return was eleven times slower when done reflectively.")])]),e._v(" "),s("p",[e._v("性能降低。反射方法调用比普通方法调用慢得多。到底慢了多少还很难说，因为有很多因素在起作用。在我的机器上，调用一个没有输入参数和返回 int 类型的方法时，用反射执行要慢 11 倍。")]),e._v(" "),s("p",[e._v("There are a few sophisticated applications that require reflection. Examples include code analysis tools and dependency injection frameworks. Even such tools have been moving away from reflection of late, as its disadvantages become clearer. If you have any doubts as to whether your application requires reflection, it probably doesn’t.")]),e._v(" "),s("p",[e._v("有一些复杂的应用程序需要反射。包括代码分析工具和依赖注入框架。即使是这样的工具，随着它的缺点变得越来越明显，人们也在逐渐远离并反思这种用法。如果你对应用程序是否需要反射有任何疑问，那么它可能不需要。")]),e._v(" "),s("p",[s("strong",[e._v("You can obtain many of the benefits of reflection while incurring few of its costs by using it only in a very limited form.")]),e._v(" For many programs that must use a class that is unavailable at compile time, there exists at compile time an appropriate interface or superclass by which to refer to the class (Item 64). If this is the case, you can "),s("strong",[e._v("create instances reflectively and access them normally via their interface or superclass.")])]),e._v(" "),s("p",[s("strong",[e._v("通过非常有限的形式使用反射，你可以获得反射的许多好处，同时花费的代价很少。")]),e._v(" 对于许多程序，它们必须用到在编译时无法获取的类，在编译时存在一个适当的接口或超类来引用该类（"),s("RouterLink",{attrs:{to:"/Chapter-9/Chapter-9-Item-64-Refer-to-objects-by-their-interfaces.html"}},[e._v("Item-64")]),e._v("）。如果是这种情况，"),s("strong",[e._v("可以用反射方式创建实例，并通过它们的接口或超类正常地访问它们。")])],1),e._v(" "),s("p",[e._v("For example, here is a program that creates a "),s("code",[e._v("Set<String>")]),e._v(" instance whose class is specified by the first command line argument. The program inserts the remaining command line arguments into the set and prints it. Regardless of the first argument, the program prints the remaining arguments with duplicates eliminated. The order in which these arguments are printed, however, depends on the class specified in the first argument. If you specify java.util.HashSet, they’re printed in apparently random order; if you specify java.util.TreeSet, they’re printed in alphabetical order because the elements in a TreeSet are sorted:")]),e._v(" "),s("p",[e._v("例如，这是一个创建 "),s("code",[e._v("Set<String>")]),e._v(" 实例的程序，类由第一个命令行参数指定。程序将剩余的命令行参数插入到集合中并打印出来。不管第一个参数是什么，程序都会打印剩余的参数，并去掉重复项。然而，打印这些参数的顺序取决于第一个参数中指定的类。如果你指定 "),s("code",[e._v("java.util.HashSet")]),e._v("，它们显然是随机排列的；如果你指定 "),s("code",[e._v("java.util.TreeSet")]),e._v("，它们是按字母顺序打印的，因为 TreeSet 中的元素是有序的：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('// Reflective instantiation with interface access\npublic static void main(String[] args) {\n\n    // Translate the class name into a Class object\n    Class<? extends Set<String>> cl = null;\n    try {\n        cl = (Class<? extends Set<String>>) // Unchecked cast!\n        Class.forName(args[0]);\n    } catch (ClassNotFoundException e) {\n        fatalError("Class not found.");\n    }\n\n    // Get the constructor\n    Constructor<? extends Set<String>> cons = null;\n    try {\n        cons = cl.getDeclaredConstructor();\n    } catch (NoSuchMethodException e) {\n        fatalError("No parameterless constructor");\n    }\n\n    // Instantiate the set\n    Set<String> s = null;\n    try {\n        s = cons.newInstance();\n    } catch (IllegalAccessException e) {\n        fatalError("Constructor not accessible");\n    } catch (InstantiationException e) {\n        fatalError("Class not instantiable.");\n    } catch (InvocationTargetException e) {\n        fatalError("Constructor threw " + e.getCause());\n    } catch (ClassCastException e) {\n        fatalError("Class doesn\'t implement Set");\n    }\n\n    // Exercise the set\n    s.addAll(Arrays.asList(args).subList(1, args.length));\n    System.out.println(s);\n}\n\nprivate static void fatalError(String msg) {\n    System.err.println(msg);\n    System.exit(1);\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br"),s("span",{staticClass:"line-number"},[e._v("30")]),s("br"),s("span",{staticClass:"line-number"},[e._v("31")]),s("br"),s("span",{staticClass:"line-number"},[e._v("32")]),s("br"),s("span",{staticClass:"line-number"},[e._v("33")]),s("br"),s("span",{staticClass:"line-number"},[e._v("34")]),s("br"),s("span",{staticClass:"line-number"},[e._v("35")]),s("br"),s("span",{staticClass:"line-number"},[e._v("36")]),s("br"),s("span",{staticClass:"line-number"},[e._v("37")]),s("br"),s("span",{staticClass:"line-number"},[e._v("38")]),s("br"),s("span",{staticClass:"line-number"},[e._v("39")]),s("br"),s("span",{staticClass:"line-number"},[e._v("40")]),s("br"),s("span",{staticClass:"line-number"},[e._v("41")]),s("br"),s("span",{staticClass:"line-number"},[e._v("42")]),s("br"),s("span",{staticClass:"line-number"},[e._v("43")]),s("br")])]),s("p",[e._v("While this program is just a toy, the technique it demonstrates is quite powerful. The toy program could easily be turned into a generic set tester that validates the specified Set implementation by aggressively manipulating one or more instances and checking that they obey the Set contract. Similarly, it could be turned into a generic set performance analysis tool. In fact, this technique is sufficiently powerful to implement a full-blown service provider framework (Item 1). Usually, this technique is all that you need in the way of reflection.")]),e._v(" "),s("p",[e._v("虽然这个程序只是一个小把戏，但它演示的技术非常强大。这个程序可以很容易地转换成一个通用的集合测试器，通过积极地操作一个或多个实例并检查它们是否遵守 Set 接口约定来验证指定的 Set 实现。类似地，它可以变成一个通用的集合性能分析工具。事实上，该技术足够强大，可以实现一个成熟的服务提供者框架（"),s("RouterLink",{attrs:{to:"/Chapter-2/Chapter-2-Item-1-Consider-static-factory-methods-instead-of-constructors.html"}},[e._v("Item-1")]),e._v("）。")],1),e._v(" "),s("p",[e._v("This example demonstrates two disadvantages of reflection. First, the example can generate six different exceptions at runtime, all of which would have been compile-time errors if reflective instantiation were not used. (For fun, you can cause the program to generate each of the six exceptions by passing in appropriate command line arguments.) The second disadvantage is that it takes twenty-five lines of tedious code to generate an instance of the class from its name, whereas a constructor invocation would fit neatly on a single line. The length of the program could be reduced by catching ReflectiveOperationException, a superclass of the various reflective exceptions that was introduced in Java 7. Both disadvantages are restricted to the part of the program that instantiates the object. Once instantiated, the set is indistinguishable from any other Set instance. In a real program, the great bulk of the code is thus unaffected by this limited use of reflection.")]),e._v(" "),s("p",[e._v("这个例子也说明了反射的两个缺点。首先，该示例可以在运行时生成六个不同的异常，如果没有使用反射实例化，所有这些异常都将是编译时错误。（有趣的是，你可以通过传入适当的命令行参数，使程序生成六个异常中的每一个。）第二个缺点是，根据类的名称生成类的实例需要 25 行冗长的代码，而构造函数调用只需要一行。通过捕获 ReflectiveOperationException（Java 7 中引入的各种反射异常的超类），可以减少程序的长度。这两个缺点都只限于实例化对象的程序部分。实例化后，与任何其他 Set 实例将难以区分。在实际的程序中，通过这种限定使用反射的方法，大部分代码可以免受影响。")]),e._v(" "),s("p",[e._v("If you compile this program, you’ll get an unchecked cast warning. This warning is legitimate, in that the cast to "),s("code",[e._v("Class<? extends Set<String>>")]),e._v(" will succeed even if the named class is not a Set implementation, in which case the program with throw a ClassCastException when it instantiates the class. To learn about suppressing the warning, read Item 27.")]),e._v(" "),s("p",[e._v("如果编译此程序，将得到 unchecked 的强制转换警告。这个警告是合法的，即使指定的类不是 Set 实现，"),s("code",[e._v("Class<? extends Set<String>>")]),e._v(" 也会成功，在这种情况下，程序在实例化类时抛出 ClassCastException。要了解如何抑制警告，请阅读 "),s("RouterLink",{attrs:{to:"/Chapter-5/Chapter-5-Item-27-Eliminate-unchecked-warnings.html"}},[e._v("Item-27")]),e._v("。")],1),e._v(" "),s("p",[e._v("A legitimate, if rare, use of reflection is to manage a class’s dependencies on other classes, methods, or fields that may be absent at runtime. This can be useful if you are writing a package that must run against multiple versions of some other package. The technique is to compile your package against the minimal environment required to support it, typically the oldest version, and to access any newer classes or methods reflectively. To make this work, you have to take appropriate action if a newer class or method that you are attempting to access does not exist at runtime. Appropriate action might consist of using some alternate means to accomplish the same goal or operating with reduced functionality.")]),e._v(" "),s("p",[e._v("反射的合法用途（很少）是管理类对运行时可能不存在的其他类、方法或字段的依赖关系。如果你正在编写一个包，并且必须针对其他包的多个版本运行，此时反射将非常有用。该技术是根据支持包所需的最小环境（通常是最老的版本）编译包，并反射性地访问任何较新的类或方法。如果你试图访问的新类或方法在运行时不存在，要使此工作正常进行，则必须采取适当的操作。适当的操作可能包括使用一些替代方法来完成相同的目标，或者使用简化的功能进行操作。")]),e._v(" "),s("p",[e._v("In summary, reflection is a powerful facility that is required for certain sophisticated system programming tasks, but it has many disadvantages. If you are writing a program that has to work with classes unknown at compile time, you should, if at all possible, use reflection only to instantiate objects, and access the objects using some interface or superclass that is known at compile time.")]),e._v(" "),s("p",[e._v("总之，反射是一种功能强大的工具，对于某些复杂的系统编程任务是必需的，但是它有很多缺点。如果编写的程序必须在编译时处理未知的类，则应该尽可能只使用反射实例化对象，并使用在编译时已知的接口或超类访问对象。")])])}),[],!1,null,null,null);t.default=n.exports}}]);