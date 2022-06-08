(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{1501:function(e,t,s){"use strict";s.r(t);var a=s(65),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"chapter-2-creating-and-destroying-objects-创建和销毁对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chapter-2-creating-and-destroying-objects-创建和销毁对象"}},[e._v("#")]),e._v(" Chapter 2. Creating and Destroying Objects（创建和销毁对象）")]),e._v(" "),s("h3",{attrs:{id:"item-3-enforce-the-singleton-property-with-a-private-constructor-or-an-enum-type-使用私有构造函数或枚举类型实施单例属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#item-3-enforce-the-singleton-property-with-a-private-constructor-or-an-enum-type-使用私有构造函数或枚举类型实施单例属性"}},[e._v("#")]),e._v(" Item 3: Enforce the singleton property with a private constructor or an enum type（使用私有构造函数或枚举类型实施单例属性）")]),e._v(" "),s("p",[e._v("A singleton is simply a class that is instantiated exactly once [Gamma95].Singletons typically represent either a stateless object such as a function (Item24) or a system component that is intrinsically unique. "),s("strong",[e._v("Making a class a singleton can make it difficult to test its clients")]),e._v(" because it’s impossible to substitute a mock implementation for a singleton unless it implements an interface that serves as its type.")]),e._v(" "),s("p",[e._v("单例是一个只实例化一次的类 [Gamma95]。单例通常表示无状态对象，比如函数（"),s("RouterLink",{attrs:{to:"/Chapter-4/Chapter-4-Item-24-Favor-static-member-classes-over-nonstatic.html"}},[e._v("Item-24")]),e._v("）或系统组件，它们在本质上是唯一的。"),s("strong",[e._v("将一个类设计为单例会使它的客户端测试时变得困难，")]),e._v(" 除非它实现了作为其类型的接口，否则无法用模拟实现来代替单例。")],1),e._v(" "),s("p",[e._v("There are two common ways to implement singletons. Both are based on keeping the constructor private and exporting a public static member to provide access to the sole instance. In one approach, the member is a final field:")]),e._v(" "),s("p",[e._v("实现单例有两种常见的方法。两者都基于保持构造函数私有和导出公共静态成员以提供对唯一实例的访问。在第一种方法中，成员是一个 final 字段：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// Singleton with public final field\npublic class Elvis {\n    public static final Elvis INSTANCE = new Elvis();\n    private Elvis() { ... }\n    public void leaveTheBuilding() { ... }\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("p",[e._v("The private constructor is called only once, to initialize the public static final field Elvis.INSTANCE. The lack of a public or protected constructor guarantees a “monoelvistic” universe: exactly one Elvis instance will exist once the Elvis class is initialized—no more, no less. Nothing that a client does can change this, with one caveat: a privileged client can invoke the private constructor reflectively (Item 65) with the aid of the AccessibleObject.setAccessible method. If you need to defend against this attack, modify the constructor to make it throw an exception if it’s asked to create a second instance.")]),e._v(" "),s("p",[e._v("私有构造函数只调用一次，用于初始化 public static final 修饰的 Elvis 类型字段 INSTANCE。不使用 public 或 protected 的构造函数保证了「独一无二」的空间：一旦初始化了 Elvis 类，就只会存在一个 Elvis 实例，不多也不少。客户端所做的任何事情都不能改变这一点，但有一点需要注意：拥有特殊权限的客户端可以借助 AccessibleObject.setAccessible 方法利用反射调用私有构造函数（"),s("RouterLink",{attrs:{to:"/Chapter-9/Chapter-9-Item-65-Prefer-interfaces-to-reflection.html"}},[e._v("Item-65")]),e._v("）如果需要防范这种攻击，请修改构造函数，使其在请求创建第二个实例时抛出异常。")],1),e._v(" "),s("p",[s("strong",[e._v("译注：使用 "),s("code",[e._v("AccessibleObject.setAccessible")]),e._v(" 方法调用私有构造函数示例：")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('Constructor<?>[] constructors = Elvis.class.getDeclaredConstructors();\nAccessibleObject.setAccessible(constructors, true);\n\nArrays.stream(constructors).forEach(name -> {\n    if (name.toString().contains("Elvis")) {\n        Elvis instance = (Elvis) name.newInstance();\n        instance.leaveTheBuilding();\n    }\n});\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("p",[e._v("In the second approach to implementing singletons, the public member is a static factory method:")]),e._v(" "),s("p",[e._v("在实现单例的第二种方法中，公共成员是一种静态工厂方法：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// Singleton with static factory\npublic class Elvis {\n    private static final Elvis INSTANCE = new Elvis();\n    private Elvis() { ... }\n    public static Elvis getInstance() { return INSTANCE; }\n    public void leaveTheBuilding() { ... }\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])]),s("p",[e._v("All calls to Elvis.getInstance return the same object reference, and no other Elvis instance will ever be created (with the same caveat mentioned earlier).")]),e._v(" "),s("p",[e._v("所有对 "),s("code",[e._v("getInstance()")]),e._v(" 方法的调用都返回相同的对象引用，并且不会创建其他 Elvis 实例（与前面提到的警告相同）。")]),e._v(" "),s("p",[s("strong",[e._v("译注：这里的警告指拥有特殊权限的客户端可以借助 "),s("code",[e._v("AccessibleObject.setAccessible")]),e._v(" 方法利用反射调用私有构造函数")])]),e._v(" "),s("p",[e._v("The main advantage of the public field approach is that the API makes it clear that the class is a singleton: the public static field is final, so it will always contain the same object reference. The second advantage is that it’s simpler.")]),e._v(" "),s("p",[e._v("公共字段方法的主要优点是 API 明确了类是单例的：public static 修饰的字段是 final 的，因此它总是包含相同的对象引用。第二个优点是更简单。")]),e._v(" "),s("p",[e._v("One advantage of the static factory approach is that it gives you the flexibility to change your mind about whether the class is a singleton without changing its API. The factory method returns the sole instance, but it could be modified to return, say, a separate instance for each thread that invokes it. A second advantage is that you can write a generic singleton factory if your application requires it (Item 30). A final advantage of using a static factory is that a method reference can be used as a supplier, for example "),s("code",[e._v("Elvis::instance")]),e._v(" is a "),s("code",[e._v("Supplier<Elvis>")]),e._v(". Unless one of these advantages is relevant, the public field approach is preferable.")]),e._v(" "),s("p",[s("strong",[e._v("译注：static factory approach 等同于 static factory method")])]),e._v(" "),s("p",[e._v("静态工厂方法的一个优点是，它可以在不更改 API 的情况下决定类是否是单例。工厂方法返回唯一的实例，但是可以对其进行修改，为调用它的每个线程返回一个单独的实例。第二个优点是，如果应用程序需要的话，可以编写泛型的单例工厂（"),s("RouterLink",{attrs:{to:"/Chapter-5/Chapter-5-Item-30-Favor-generic-methods.html"}},[e._v("Item-30")]),e._v("）。使用静态工厂的最后一个优点是方法引用能够作为一个提供者，例如 "),s("code",[e._v("Elvis::getInstance")]),e._v(" 是 "),s("code",[e._v("Supplier<Elvis>")]),e._v(" 的提供者。除非能够与这些优点沾边，否则使用 public 字段的方式更可取。")],1),e._v(" "),s("p",[s("strong",[e._v("译注 1：原文方法引用可能是笔误，修改为 "),s("code",[e._v("Elvis::getInstance")])])]),e._v(" "),s("p",[s("strong",[e._v("译注 2：方法引用作为提供者的例子：")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Supplier<Elvis> sup = Elvis::getInstance;\nElvis obj = sup.get();\nobj.leaveTheBuilding();\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("To make a singleton class that uses either of these approaches serializable (Chapter 12), it is not sufficient merely to add implements Serializable to its declaration. To maintain the singleton guarantee, declare all instance fields transient and provide a readResolve method (Item 89). Otherwise, each time a serialized instance is deserialized, a new instance will be created, leading,in the case of our example, to spurious Elvis sightings. To prevent this from happening, add this readResolve method to the Elvis class:")]),e._v(" "),s("p",[e._v("要使单例类使用这两种方法中的任何一种实现可序列化（Chapter 12），仅仅在其声明中添加实现 serializable 是不够的。要维护单例保证，应声明所有实例字段为 transient，并提供 readResolve 方法（"),s("RouterLink",{attrs:{to:"/Chapter-12/Chapter-12-Item-89-For-instance-control-prefer-enum-types-to-readResolve.html"}},[e._v("Item-89")]),e._v("）。否则，每次反序列化实例时，都会创建一个新实例，在我们的示例中，这会导致出现虚假的 Elvis。为了防止这种情况发生，将这个 readResolve 方法添加到 Elvis 类中：")],1),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// readResolve method to preserve singleton property\nprivate Object readResolve() {\n    // Return the one true Elvis and let the garbage collector\n    // take care of the Elvis impersonator.\n    return INSTANCE;\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("p",[e._v("A third way to implement a singleton is to declare a single-element enum:")]),e._v(" "),s("p",[e._v("实现单例的第三种方法是声明一个单元素枚举：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// Enum singleton - the preferred approach\npublic enum Elvis {\n    INSTANCE;\n    public void leaveTheBuilding() { ... }\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[e._v("This approach is similar to the public field approach, but it is more concise, provides the serialization machinery for free, and provides an ironclad guarantee against multiple instantiation, even in the face of sophisticated serialization or reflection attacks. This approach may feel a bit unnatural, but "),s("strong",[e._v("a single-element enum type is often the best way to implement a singleton.")]),e._v(" Note that you can’t use this approach if your singleton must extend a superclass other than Enum(though you can declare an enum to implement interfaces).")]),e._v(" "),s("p",[e._v("这种方法类似于 public 字段方法，但是它更简洁，默认提供了序列化机制，提供了对多个实例化的严格保证，即使面对复杂的序列化或反射攻击也是如此。这种方法可能有点不自然，但是"),s("strong",[e._v("单元素枚举类型通常是实现单例的最佳方法。")]),e._v(" 注意，如果你的单例必须扩展一个超类而不是 Enum（尽管你可以声明一个 Enum 来实现接口），你就不能使用这种方法。")])])}),[],!1,null,null,null);t.default=n.exports}}]);