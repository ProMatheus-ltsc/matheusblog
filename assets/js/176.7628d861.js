(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{1455:function(e,t,a){"use strict";a.r(t);var i=a(24),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"chapter-2-creating-and-destroying-objects-创建和销毁对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chapter-2-creating-and-destroying-objects-创建和销毁对象"}},[e._v("#")]),e._v(" Chapter 2. Creating and Destroying Objects（创建和销毁对象）")]),e._v(" "),a("h3",{attrs:{id:"item-5-prefer-dependency-injection-to-hardwiring-resources-依赖注入优于硬连接资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#item-5-prefer-dependency-injection-to-hardwiring-resources-依赖注入优于硬连接资源"}},[e._v("#")]),e._v(" Item 5: Prefer dependency injection to hardwiring resources（依赖注入优于硬连接资源）")]),e._v(" "),a("p",[e._v("Many classes depend on one or more underlying resources. For example, a spell checker depends on a dictionary. It is not uncommon to see such classes implemented as static utility classes (Item 4):")]),e._v(" "),a("p",[e._v("许多类依赖于一个或多个底层资源。例如，拼写检查程序依赖于字典。常见做法是，将这种类实现为静态实用工具类（"),a("RouterLink",{attrs:{to:"/Chapter-2/Chapter-2-Item-4-Enforce-noninstantiability-with-a-private-constructor.html"}},[e._v("Item-4")]),e._v("）：")],1),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// Inappropriate use of static utility - inflexible & untestable!\npublic class SpellChecker {\n    private static final Lexicon dictionary = ...;\n    private SpellChecker() {} // Noninstantiable\n    public static boolean isValid(String word) { ... }\n    public static List<String> suggestions(String typo) { ... }\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("p",[e._v("Similarly, it’s not uncommon to see them implemented as singletons (Item 3):")]),e._v(" "),a("p",[e._v("类似地，我们也经常看到它们的单例实现（"),a("RouterLink",{attrs:{to:"/Chapter-2/Chapter-2-Item-3-Enforce-the-singleton-property-with-a-private-constructor-or-an-enum-type.html"}},[e._v("Item-3")]),e._v("）:")],1),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// Inappropriate use of singleton - inflexible & untestable!\npublic class SpellChecker {\n    private final Lexicon dictionary = ...;\n    private SpellChecker(...) {}\n    public static INSTANCE = new SpellChecker(...);\n    public boolean isValid(String word) { ... }\n    public List<String> suggestions(String typo) { ... }\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("p",[e._v("Neither of these approaches is satisfactory, because they assume that there is only one dictionary worth using. In practice, each language has its own dictionary, and special dictionaries are used for special vocabularies. Also, it may be desirable to use a special dictionary for testing. It is wishful thinking to assume that a single dictionary will suffice for all time.")]),e._v(" "),a("p",[e._v("这两种方法都不令人满意，因为它们假设只使用一个字典。在实际应用中，每种语言都有自己的字典，特殊的字典用于特殊的词汇表。另外，最好使用一个特殊的字典进行测试。认为一本字典就足够了，是一厢情愿的想法。")]),e._v(" "),a("p",[e._v("You could try to have SpellChecker support multiple dictionaries by making the dictionary field nonfinal and adding a method to change the dictionary in an existing spell checker, but this would be awkward, error-prone,and unworkable in a concurrent setting. "),a("strong",[e._v("Static utility classes and singletons are inappropriate for classes whose behavior is parameterized by an underlying resource.")])]),e._v(" "),a("p",[e._v("你可以尝试让 SpellChecker 支持多个字典：首先取消 dictionary 字段的 final 修饰，并在现有的拼写检查器中添加更改 dictionary 的方法。但是在并发环境中这种做法是笨拙的、容易出错的和不可行的。"),a("strong",[e._v("静态实用工具类和单例不适用于由底层资源参数化的类。")])]),e._v(" "),a("p",[e._v("What is required is the ability to support multiple instances of the class (in our example, SpellChecker), each of which uses the resource desired by the client (in our example, the dictionary). A simple pattern that satisfies this requirement is to "),a("strong",[e._v("pass the resource into the constructor when creating a new instance.")]),e._v(" This is one form of dependency injection: the dictionary is a dependency of the spell checker and is injected into the spell checker when it is created.")]),e._v(" "),a("p",[e._v("所需要的是支持类的多个实例的能力（在我们的示例中是 SpellChecker），每个实例都使用客户端需要的资源（在我们的示例中是 dictionary）。满足此要求的一个简单模式是在"),a("strong",[e._v("创建新实例时将资源传递给构造函数。")]),e._v(" 这是依赖注入的一种形式：字典是拼写检查器的依赖项，在创建它时被注入到拼写检查器中。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// Dependency injection provides flexibility and testability\npublic class SpellChecker {\n    private final Lexicon dictionary;\n    public SpellChecker(Lexicon dictionary) {\n        this.dictionary = Objects.requireNonNull(dictionary);\n    }\n    public boolean isValid(String word) { ... }\n    public List<String> suggestions(String typo) { ... }\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br")])]),a("p",[e._v("The dependency injection pattern is so simple that many programmers use it for years without knowing it has a name. While our spell checker example had only a single resource (the dictionary), dependency injection works with an arbitrary number of resources and arbitrary dependency graphs. It preserves immutability (Item 17), so multiple clients can share dependent objects(assuming the clients desire the same underlying resources). Dependency injection is equally applicable to constructors, static factories (Item 1), and builders (Item 2).")]),e._v(" "),a("p",[e._v("依赖注入模式非常简单，许多程序员在不知道其名称的情况下使用了多年。虽然拼写检查器示例只有一个资源（字典），但是依赖注入可以处理任意数量的资源和任意依赖路径。它保持了不可变性（"),a("RouterLink",{attrs:{to:"/Chapter-4/Chapter-4-Item-17-Minimize-mutability.html"}},[e._v("Item-17")]),e._v("），因此多个客户端可以共享依赖对象（假设客户端需要相同的底层资源）。依赖注入同样适用于构造函数、静态工厂（"),a("RouterLink",{attrs:{to:"/Chapter-2/Chapter-2-Item-1-Consider-static-factory-methods-instead-of-constructors.html"}},[e._v("Item-1")]),e._v("）和构建器（"),a("RouterLink",{attrs:{to:"/Chapter-2/Chapter-2-Item-2-Consider-a-builder-when-faced-with-many-constructor-parameters.html"}},[e._v("Item-2")]),e._v("）。")],1),e._v(" "),a("p",[e._v("A useful variant of the pattern is to pass a resource factory to the constructor.A factory is an object that can be called repeatedly to create instances of a type.Such factories embody the Factory Method pattern [Gamma95]. The "),a("code",[e._v("Supplier<T>")]),e._v(" interface, introduced in Java 8, is perfect for representing factories. Methods that take a "),a("code",[e._v("Supplier<T>")]),e._v(" on input should typically constrain the factory’s type parameter using a bounded wildcard type (Item 31) to allow the client to pass in a factory that creates any subtype of a specified type. For example, here is a method that makes a mosaic using a client-provided factory to produce each tile:")]),e._v(" "),a("p",[e._v("这种模式的一个有用变体是将资源工厂传递给构造函数。工厂是一个对象，可以反复调用它来创建类型的实例。这样的工厂体现了工厂方法模式 [Gamma95]。Java 8 中引入的 "),a("code",[e._v("Supplier<T>")]),e._v(" 非常适合表示工厂。在输入中接受 "),a("code",[e._v("Supplier<T>")]),e._v(" 的方法通常应该使用有界通配符类型（"),a("RouterLink",{attrs:{to:"/Chapter-5/Chapter-5-Item-31-Use-bounded-wildcards-to-increase-API-flexibility.html"}},[e._v("Item-31")]),e._v("）来约束工厂的类型参数，以允许客户端传入创建指定类型的任何子类型的工厂。例如，这里有一个生产瓷砖方法，每块瓷砖都使用客户提供的工厂来制作马赛克：")],1),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Mosaic create(Supplier<? extends Tile> tileFactory) { ... }\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Although dependency injection greatly improves flexibility and testability, it can clutter up（使杂乱） large projects, which typically contain thousands of dependencies.This clutter can be all but eliminated by using a dependency injection framework, such as Dagger [Dagger], Guice [Guice], or Spring [Spring]. The use of these frameworks is beyond the scope of this book, but note that APIs designed for manual dependency injection are trivially adapted for（适用于） use by these frameworks.")]),e._v(" "),a("p",[e._v("尽管依赖注入极大地提高了灵活性和可测试性，但它可能会使大型项目变得混乱，这些项目通常包含数千个依赖项。通过使用依赖注入框架（如 Dagger、Guice 或 Spring），几乎可以消除这种混乱。这些框架的使用超出了本书的范围，但是请注意，为手动依赖注入而设计的 API 很容易被这些框架所使用。")]),e._v(" "),a("p",[e._v("In summary, do not use a singleton or static utility class to implement a class that depends on one or more underlying resources whose behavior affects that of the class, and do not have the class create these resources directly. Instead, pass the resources, or factories to create them, into the constructor (or static factory or builder). This practice, known as dependency injection, will greatly enhance the flexibility, reusability, and testability of a class.")]),e._v(" "),a("p",[e._v("总之，不要使用单例或静态实用工具类来实现依赖于一个或多个底层资源的类，这些资源的行为会影响类的行为，也不要让类直接创建这些资源。相反，将创建它们的资源或工厂传递给构造函数（或静态工厂或构建器）。这种操作称为依赖注入，它将大大增强类的灵活性、可复用性和可测试性。")]),e._v(" "),a("hr"),e._v(" "),a("p",[a("strong",[a("RouterLink",{attrs:{to:"/Chapter-2/Chapter-2-Introduction.html"}},[e._v("Back to contents of the chapter（返回章节目录）")])],1)]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Previous Item（上一条目）："),a("RouterLink",{attrs:{to:"/Chapter-2/Chapter-2-Item-4-Enforce-noninstantiability-with-a-private-constructor.html"}},[e._v("Item 4: Enforce noninstantiability with a private constructor（用私有构造函数实施不可实例化）")])],1)]),e._v(" "),a("li",[a("strong",[e._v("Next Item（下一条目）："),a("RouterLink",{attrs:{to:"/Chapter-2/Chapter-2-Item-6-Avoid-creating-unnecessary-objects.html"}},[e._v("Item 6: Avoid creating unnecessary objects（避免创建不必要的对象）")])],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);