(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{1486:function(e,t,a){"use strict";a.r(t);var s=a(24),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"chapter-5-generics-泛型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chapter-5-generics-泛型"}},[e._v("#")]),e._v(" Chapter 5. Generics（泛型）")]),e._v(" "),a("h3",{attrs:{id:"item-33-consider-typesafe-heterogeneous-containers-考虑类型安全的异构容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#item-33-consider-typesafe-heterogeneous-containers-考虑类型安全的异构容器"}},[e._v("#")]),e._v(" Item 33: Consider typesafe heterogeneous containers（考虑类型安全的异构容器）")]),e._v(" "),a("p",[e._v("Common uses of generics include collections, such as "),a("code",[e._v("Set<E>")]),e._v(" and "),a("code",[e._v("Map<K,V>")]),e._v(", and single-element containers, such as "),a("code",[e._v("ThreadLocal<T>")]),e._v(" and "),a("code",[e._v("AtomicReference<T>")]),e._v(". In all of these uses, it is the container that is parameterized. This limits you to a fixed number of type parameters per container. Normally that is exactly what you want. A Set has a single type parameter, representing its element type; a Map has two, representing its key and value types; and so forth.")]),e._v(" "),a("p",[e._v("集合是泛型的常见应用之一，如 "),a("code",[e._v("Set<E>")]),e._v(" 和 "),a("code",[e._v("Map<K,V>")]),e._v("，以及单元素容器，如 "),a("code",[e._v("ThreadLocal<T>")]),e._v(" 和 "),a("code",[e._v("AtomicReference<T>")]),e._v("。在所有这些应用中，都是参数化的容器。这将每个容器的类型参数限制为固定数量。通常这正是你想要的。Set 只有一个类型参数，表示其元素类型；Map 有两个，表示"),a("code",[e._v("键")]),e._v("和"),a("code",[e._v("值")]),e._v("的类型；如此等等。")]),e._v(" "),a("p",[e._v("Sometimes, however, you need more flexibility. For example, a database row can have arbitrarily many columns, and it would be nice to be able to access all of them in a typesafe manner. Luckily, there is an easy way to achieve this effect. The idea is to parameterize the key instead of the container. Then present the parameterized key to the container to insert or retrieve a value. The generic type system is used to guarantee that the type of the value agrees with its key.")]),e._v(" "),a("p",[e._v("然而，有时你需要更大的灵活性。例如，一个数据库行可以有任意多列，能够以类型安全的方式访问所有这些列是很好的。幸运的是，有一种简单的方法可以达到这种效果。其思想是参数化"),a("code",[e._v("键")]),e._v("而不是容器。然后向容器提供参数化"),a("code",[e._v("键")]),e._v("以插入或检索"),a("code",[e._v("值")]),e._v("。泛型类型系统用于确保"),a("code",[e._v("值")]),e._v("的类型与"),a("code",[e._v("键")]),e._v("一致。")]),e._v(" "),a("p",[e._v("As a simple example of this approach, consider a Favorites class that allows its clients to store and retrieve a favorite instance of arbitrarily many types. The Class object for the type will play the part of the parameterized key. The reason this works is that class Class is generic. The type of a class literal is not simply Class, but "),a("code",[e._v("Class<T>")]),e._v(". For example, String.class is of type "),a("code",[e._v("Class<String>")]),e._v(", and Integer.class is of type "),a("code",[e._v("Class<Integer>")]),e._v(". When a class literal is passed among methods to communicate both compiletime and runtime type information, it is called a type token [Bracha04].")]),e._v(" "),a("p",[e._v("作为这种方法的一个简单示例，考虑一个 Favorites 类，它允许客户端存储和检索任意多种类型的 Favorites 实例。Class 类的对象将扮演参数化"),a("code",[e._v("键")]),e._v("的角色。这样做的原因是 Class 类是泛型的。Class 对象的类型不仅仅是 Class，而是 "),a("code",[e._v("Class<T>")]),e._v("。例如，String.class 的类型为 "),a("code",[e._v("Class<String>")]),e._v("、Integer.class 的类型为 "),a("code",[e._v("Class<Integer>")]),e._v("。在传递编译时和运行时类型信息的方法之间传递类 Class 对象时，它被称为类型标记[Bracha04]。")]),e._v(" "),a("p",[e._v("The API for the Favorites class is simple. It looks just like a simple map, except that the key is parameterized instead of the map. The client presents a Class object when setting and getting favorites. Here is the API:")]),e._v(" "),a("p",[e._v("Favorites 类的 API 很简单。它看起来就像一个简单的 Map，只不过"),a("code",[e._v("键")]),e._v("是参数化的，而不是整个 Map。客户端在设置和获取 Favorites 实例时显示一个 Class 对象。以下是 API:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// Typesafe heterogeneous container pattern - API\npublic class Favorites {\n    public <T> void putFavorite(Class<T> type, T instance);\n    public <T> T getFavorite(Class<T> type);\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("Here is a sample program that exercises the Favorites class, storing, retrieving, and printing a favorite String, Integer, and Class instance:")]),e._v(" "),a("p",[e._v("下面是一个示例程序，它演示了 Favorites 类、存储、检索和打印 Favorites 字符串、整数和 Class 实例：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// Typesafe heterogeneous container pattern - client\npublic static void main(String[] args) {\n    Favorites f = new Favorites();\n    f.putFavorite(String.class, "Java");\n    f.putFavorite(Integer.class, 0xcafebabe);\n    f.putFavorite(Class.class, Favorites.class);\n    String favoriteString = f.getFavorite(String.class);\n    int favoriteInteger = f.getFavorite(Integer.class);\n    Class<?> favoriteClass = f.getFavorite(Class.class);\n    System.out.printf("%s %x %s%n", favoriteString,favoriteInteger, favoriteClass.getName());\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br")])]),a("p",[e._v("As you would expect, this program prints Java cafebabe Favorites. Note, incidentally, that Java’s printf method differs from C’s in that you should use %n where you’d use \\n in C. The %n generates the applicable platform-specific line separator, which is \\n on many but not all platforms.")]),e._v(" "),a("p",[e._v("如你所料，这个程序打印 Java cafebabe Favorites。顺便提醒一下，Java 的 printf 方法与 C 的不同之处在于，你应该在 C 中使用 \\n 的地方改用 %n。")]),e._v(" "),a("p",[a("strong",[e._v("译注："),a("code",[e._v("favoriteClass.getName()")]),e._v(" 的打印结果与 Favorites 类所在包名有关，结果应为：包名.Favorites")])]),e._v(" "),a("p",[e._v("A Favorites instance is typesafe: it will never return an Integer when you ask it for a String. It is also heterogeneous: unlike an ordinary map, all the keys are of different types. Therefore, we call Favorites a typesafe heterogeneous container.")]),e._v(" "),a("p",[e._v("Favorites 的实例是类型安全的：当你向它请求一个 String 类型时，它永远不会返回一个 Integer 类型。它也是异构的：与普通 Map 不同，所有"),a("code",[e._v("键")]),e._v("都是不同类型的。因此，我们将 Favorites 称为一个类型安全异构容器。")]),e._v(" "),a("p",[e._v("The implementation of Favorites is surprisingly tiny. Here it is, in its entirety:")]),e._v(" "),a("p",[e._v("Favorites 的实现非常简短。下面是全部内容：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// Typesafe heterogeneous container pattern - implementation\npublic class Favorites {\n  private Map<Class<?>, Object> favorites = new HashMap<>();\n\n  public <T> void putFavorite(Class<T> type, T instance) {\n    favorites.put(Objects.requireNonNull(type), instance);\n  }\n\n  public <T> T getFavorite(Class<T> type) {\n    return type.cast(favorites.get(type));\n  }\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br")])]),a("p",[e._v("There are a few subtle things going on here. Each Favorites instance is backed by a private "),a("code",[e._v("Map<Class<?>, Object>")]),e._v(" called favorites. You might think that you couldn’t put anything into this Map because of the unbounded wildcard type, but the truth is quite the opposite. The thing to notice is that the wildcard type is nested: it’s not the type of the map that’s a wildcard type but the type of its key. This means that every key can have a different parameterized type: one can be "),a("code",[e._v("Class<String>")]),e._v(", the next "),a("code",[e._v("Class<Integer>")]),e._v(", and so on. That’s where the heterogeneity comes from.")]),e._v(" "),a("p",[e._v("这里发生了一些微妙的事情。每个 Favorites 实例都由一个名为 favorites 的私有 "),a("code",[e._v("Map<Class<?>, Object>")]),e._v(" 支持。你可能认为由于通配符类型是无界的，所以无法将任何内容放入此映射中，但事实恰恰相反。需要注意的是，通配符类型是嵌套的：通配符类型不是 Map 的类型，而是"),a("code",[e._v("键")]),e._v("的类型。这意味着每个"),a("code",[e._v("键")]),e._v("都可以有不同的参数化类型：一个可以是 "),a("code",[e._v("Class<String>")]),e._v("，下一个是 "),a("code",[e._v("Class<Integer>")]),e._v("，等等。这就是异构的原理。")]),e._v(" "),a("p",[e._v("The next thing to notice is that the value type of the favorites Map is simply Object. In other words, the Map does not guarantee the type relationship between keys and values, which is that every value is of the type represented by its key. In fact, Java’s type system is not powerful enough to express this. But we know that it’s true, and we take advantage of it when the time comes to retrieve a favorite.")]),e._v(" "),a("p",[e._v("接下来要注意的是 favorites 的"),a("code",[e._v("值")]),e._v("类型仅仅是 Object。换句话说，Map 不保证"),a("code",[e._v("键")]),e._v("和"),a("code",[e._v("值")]),e._v("之间的类型关系，即每个"),a("code",[e._v("值")]),e._v("都是其"),a("code",[e._v("键")]),e._v("所表示的类型。实际上，Java 的类型系统还没有强大到足以表达这一点。但是我们知道这是事实，当需要检索一个 favorite 时，我们会利用它。")]),e._v(" "),a("p",[e._v("The putFavorite implementation is trivial: it simply puts into favorites a mapping from the given Class object to the given favorite instance. As noted, this discards the “type linkage” between the key and the value; it loses the knowledge that the value is an instance of the key. But that’s OK, because the getFavorites method can and does reestablish this linkage.")]),e._v(" "),a("p",[e._v("putFavorite 的实现很简单：它只是将从给定 Class 对象到给定 Favorites 实例的放入 favorites 中。如前所述，这将丢弃"),a("code",[e._v("键")]),e._v("和"),a("code",[e._v("值")]),e._v("之间的「类型关联」；将无法确定"),a("code",[e._v("值")]),e._v("是"),a("code",[e._v("键")]),e._v("的实例。但这没关系，因为 getFavorites 方法可以重新建立这个关联。")]),e._v(" "),a("p",[e._v("The implementation of getFavorite is trickier than that of putFavorite. First, it gets from the favorites map the value corresponding to the given Class object. This is the correct object reference to return, but it has the wrong compile-time type: it is Object (the value type of the favorites map) and we need to return a T. So, the getFavorite implementation dynamically casts the object reference to the type represented by the Class object, using Class’s cast method.")]),e._v(" "),a("p",[e._v("getFavorite 的实现比 putFavorite 的实现更复杂。首先，它从 favorites 中获取与给定 Class 对象对应的"),a("code",[e._v("值")]),e._v("。这是正确的对象引用返回，但它有错误的编译时类型：它是 Object（favorites 的"),a("code",[e._v("值")]),e._v("类型），我们需要返回一个 T。因此，getFavorite 的实现通过使用 Class 的 cast 方法，将对象引用类型动态转化为所代表的 Class 对象。")]),e._v(" "),a("p",[e._v("The cast method is the dynamic analogue of Java’s cast operator. It simply checks that its argument is an instance of the type represented by the Class object. If so, it returns the argument; otherwise it throws a ClassCastException. We know that the cast invocation in getFavorite won’t throw ClassCastException, assuming the client code compiled cleanly. That is to say, we know that the values in the favorites map always match the types of their keys.")]),e._v(" "),a("p",[e._v("cast 方法是 Java 的 cast 运算符的动态模拟。它只是检查它的参数是否是类对象表示的类型的实例。如果是，则返回参数；否则它将抛出 ClassCastException。我们知道 getFavorite 中的强制转换调用不会抛出 ClassCastException，假设客户端代码已正确地编译。也就是说，我们知道 favorites 中的"),a("code",[e._v("值")]),e._v("总是与其"),a("code",[e._v("键")]),e._v("的类型匹配。")]),e._v(" "),a("p",[e._v("So what does the cast method do for us, given that it simply returns its argument? The signature of the cast method takes full advantage of the fact that class Class is generic. Its return type is the type parameter of the Class object:")]),e._v(" "),a("p",[e._v("如果 cast 方法只是返回它的参数，那么它会为我们做什么呢？cast 方法的签名充分利用了 Class 类是泛型的这一事实。其返回类型为 Class 对象的类型参数：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("public class Class<T> {\n    T cast(Object obj);\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("This is precisely what’s needed by the getFavorite method. It is what allows us to make Favorites typesafe without resorting to an unchecked cast to T.")]),e._v(" "),a("p",[e._v("这正是 getFavorite 方法所需要的。它使我们能够使 Favorites 类型安全，而不需要对 T 进行 unchecked 的转换。")]),e._v(" "),a("p",[e._v("There are two limitations to the Favorites class that are worth noting. First, a malicious client could easily corrupt the type safety of a Favorites instance, by using a Class object in its raw form. But the resulting client code would generate an unchecked warning when it was compiled. This is no different from a normal collection implementations such as HashSet and HashMap. You can easily put a String into a "),a("code",[e._v("HashSet<Integer>")]),e._v(" by using the raw type HashSet (Item 26). That said, you can have runtime type safety if you’re willing to pay for it. The way to ensure that Favorites never violates its type invariant is to have the putFavorite method check that instance is actually an instance of the type represented by type, and we already know how to do this. Just use a dynamic cast:")]),e._v(" "),a("p",[e._v("Favorites 类有两个"),a("code",[e._v("值")]),e._v("得注意的限制。首先，恶意客户端很容易通过使用原始形式的类对象破坏 Favorites 实例的类型安全。但是生成的客户端代码在编译时将生成一个 unchecked 警告。这与普通的集合实现（如 HashSet 和 HashMap）没有什么不同。通过使用原始类型 HashSet（"),a("RouterLink",{attrs:{to:"/Chapter-5/Chapter-5-Item-26-Do-not-use-raw-types.html"}},[e._v("Item-26")]),e._v("），可以轻松地将 String 类型放入 "),a("code",[e._v("HashSet<Integer>")]),e._v(" 中。也就是说，如果你愿意付出代价的话，你可以拥有运行时类型安全。确保 Favorites 不会违反其类型不变量的方法是让 putFavorite 方法检查实例是否是 type 表示的类型的实例，我们已经知道如何做到这一点。只需使用动态转换：")],1),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// Achieving runtime type safety with a dynamic cast\npublic <T> void putFavorite(Class<T> type, T instance) {\n    favorites.put(type, type.cast(instance));\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("There are collection wrappers in java.util.Collections that play the same trick. They are called checkedSet, checkedList, checkedMap, and so forth. Their static factories take a Class object (or two) in addition to a collection (or map). The static factories are generic methods, ensuring that the compile-time types of the Class object and the collection match. The wrappers add reification to the collections they wrap. For example, the wrapper throws a ClassCastException at runtime if someone tries to put a Coin into your "),a("code",[e._v("Collection<Stamp>")]),e._v(". These wrappers are useful for tracking down client code that adds an incorrectly typed element to a collection, in an application that mixes generic and raw types.")]),e._v(" "),a("p",[e._v("java.util.Collections 中的集合包装器也具有相同的功能。它们被称为 checkedSet、checkedList、checkedMap，等等。除了集合（或 Map）外，它们的静态工厂还接受一个（或两个）Class 对象。静态工厂是通用方法，确保 Class 对象和集合的编译时类型匹配。包装器将具体化添加到它们包装的集合中。例如，如果有人试图将 Coin 放入 "),a("code",[e._v("Collection<Stamp>")]),e._v(" 中，包装器将在运行时抛出 ClassCastException。在混合了泛型类型和原始类型的应用程序中，这些包装器对跟踪将类型错误的元素添加到集合中的客户端代码非常有用。")]),e._v(" "),a("p",[e._v("The second limitation of the Favorites class is that it cannot be used on a non-reifiable type (Item 28). In other words, you can store your favorite String or String[], but not your favorite "),a("code",[e._v("List<String>")]),e._v(". If you try to store your favorite "),a("code",[e._v("List<String>")]),e._v(", your program won’t compile. The reason is that you can’t get a Class object for "),a("code",[e._v("List<String>")]),e._v(". The class literal "),a("code",[e._v("List<String>.class")]),e._v(" is a syntax error, and it’s a good thing, too. "),a("code",[e._v("List<String>")]),e._v(" and "),a("code",[e._v("List<Integer>")]),e._v(" share a single Class object, which is List.class. It would wreak havoc with the internals of a Favorites object if the “type literals” "),a("code",[e._v("List<String>.class")]),e._v(" and "),a("code",[e._v("List<Integer>.class")]),e._v(" were legal and returned the same object reference. There is no entirely satisfactory workaround for this limitation.")]),e._v(" "),a("p",[e._v("Favorites 类的第二个限制是它不能用于不可具体化的类型（"),a("RouterLink",{attrs:{to:"/Chapter-5/Chapter-5-Item-28-Prefer-lists-to-arrays.html"}},[e._v("Item-28")]),e._v("）。换句话说，你可以存储的 Favorites 实例类型为 String 类型或 String[]，但不能存储 "),a("code",[e._v("List<String>")]),e._v("。原因是你不能为 "),a("code",[e._v("List<String>")]),e._v(" 获取 Class 对象，"),a("code",[e._v("List<String>.class")]),e._v(" 是一个语法错误，这也是一件好事。"),a("code",[e._v("List<String>")]),e._v(" 和 "),a("code",[e._v("List<Integer>")]),e._v(" 共享一个 Class 对象，即 List.class。如果「字面类型」"),a("code",[e._v("List<String>.class")]),e._v(" 和 "),a("code",[e._v("List<Integer>.class")]),e._v(" 是合法的，并且返回相同的对象引用，那么它将严重破坏 Favorites 对象的内部结构。对于这个限制，没有完全令人满意的解决方案。")],1),e._v(" "),a("p",[e._v("The type tokens used by Favorites are unbounded: getFavorite and put-Favorite accept any Class object. Sometimes you may need to limit the types that can be passed to a method. This can be achieved with a bounded type token, which is simply a type token that places a bound on what type can be represented, using a bounded type parameter (Item 30) or a bounded wildcard (Item 31).")]),e._v(" "),a("p",[e._v("Favorites 使用的类型标记是无界的：getFavorite 和 put-Favorite 接受任何 Class 对象。有时你可能需要限制可以传递给方法的类型。这可以通过有界类型标记来实现，它只是一个类型标记，使用有界类型参数（"),a("RouterLink",{attrs:{to:"/Chapter-5/Chapter-5-Item-30-Favor-generic-methods.html"}},[e._v("Item-30")]),e._v("）或有界通配符（"),a("RouterLink",{attrs:{to:"/Chapter-5/Chapter-5-Item-31-Use-bounded-wildcards-to-increase-API-flexibility.html"}},[e._v("Item-31")]),e._v("）对可以表示的类型进行绑定。")],1),e._v(" "),a("p",[e._v("The annotations API (Item 39) makes extensive use of bounded type tokens. For example, here is the method to read an annotation at runtime. This method comes from the AnnotatedElement interface, which is implemented by the reflective types that represent classes, methods, fields, and other program elements:")]),e._v(" "),a("p",[e._v("annotation API（"),a("RouterLink",{attrs:{to:"/Chapter-6/Chapter-6-Item-39-Prefer-annotations-to-naming-patterns.html"}},[e._v("Item-39")]),e._v("）广泛使用了有界类型标记。例如，下面是在运行时读取注释的方法。这个方法来自 AnnotatedElement 接口，它是由表示类、方法、字段和其他程序元素的反射类型实现的：")],1),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("public <T extends Annotation>\n    T getAnnotation(Class<T> annotationType);\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("The argument, annotationType, is a bounded type token representing an annotation type. The method returns the element’s annotation of that type, if it has one, or null, if it doesn’t. In essence, an annotated element is a typesafe heterogeneous container whose keys are annotation types.")]),e._v(" "),a("p",[e._v("参数 annotationType 是表示注释类型的有界类型标记。该方法返回该类型的元素注释（如果有的话），或者返回 null（如果没有的话）。本质上，带注释的元素是一个类型安全的异构容器，其"),a("code",[e._v("键")]),e._v("是注释类型。")]),e._v(" "),a("p",[e._v("Suppose you have an object of type "),a("code",[e._v("Class<?>")]),e._v(" and you want to pass it to a method that requires a bounded type token, such as getAnnotation. You could cast the object to "),a("code",[e._v("Class<? extends Annotation>")]),e._v(", but this cast is unchecked, so it would generate a compile-time warning (Item 27). Luckily, class Class provides an instance method that performs this sort of cast safely (and dynamically). The method is called asSubclass, and it casts the Class object on which it is called to represent a subclass of the class represented by its argument. If the cast succeeds, the method returns its argument; if it fails, it throws a ClassCastException.")]),e._v(" "),a("p",[e._v("假设你有一个 "),a("code",[e._v("Class<?>")]),e._v(" 类型的对象，并且希望将其传递给一个需要有界类型令牌（例如 getAnnotation）的方法。你可以将对象强制转换为 "),a("code",[e._v("Class<? extends Annotation>")]),e._v("，但是这个强制转换是未选中的，因此它将生成一个编译时警告（"),a("RouterLink",{attrs:{to:"/Chapter-5/Chapter-5-Item-27-Eliminate-unchecked-warnings.html"}},[e._v("Item-27")]),e._v("）。幸运的是，class 类提供了一个实例方法，可以安全地（动态地）执行这种类型的强制转换。该方法称为 asSubclass，它将类对象强制转换为它所调用的类对象，以表示由其参数表示的类的子类。如果转换成功，则该方法返回其参数；如果失败，则抛出 ClassCastException。")],1),e._v(" "),a("p",[e._v("Here’s how you use the asSubclass method to read an annotation whose type is unknown at compile time. This method compiles without error or warning:")]),e._v(" "),a("p",[e._v("下面是如何使用 asSubclass 方法读取在编译时类型未知的注释。这个方法编译没有错误或警告：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// Use of asSubclass to safely cast to a bounded type token\nstatic Annotation getAnnotation(AnnotatedElement element,String annotationTypeName) {\n    Class<?> annotationType = null; // Unbounded type token\n    try {\n        annotationType = Class.forName(annotationTypeName);\n    } catch (Exception ex) {\n        throw new IllegalArgumentException(ex);\n    }\n    return element.getAnnotation(annotationType.asSubclass(Annotation.class));\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br")])]),a("p",[e._v("In summary, the normal use of generics, exemplified by the collections APIs, restricts you to a fixed number of type parameters per container. You can get around this restriction by placing the type parameter on the key rather than the container. You can use Class objects as keys for such typesafe heterogeneous containers. A Class object used in this fashion is called a type token. You can also use a custom key type. For example, you could have a DatabaseRow type representing a database row (the container), and a generic type "),a("code",[e._v("Column<T>")]),e._v(" as its key.")]),e._v(" "),a("p",[e._v("总之，以集合的 API 为例的泛型在正常使用时将每个容器的类型参数限制为固定数量。你可以通过将类型参数放置在"),a("code",[e._v("键")]),e._v("上而不是容器上来绕过这个限制。你可以使用 Class 对象作为此类类型安全异构容器的"),a("code",[e._v("键")]),e._v("。以这种方式使用的 Class 对象称为类型标记。还可以使用自定义"),a("code",[e._v("键")]),e._v("类型。例如，可以使用 DatabaseRow 类型表示数据库行（容器），并使用泛型类型 "),a("code",[e._v("Column<T>")]),e._v(" 作为它的"),a("code",[e._v("键")]),e._v("。")]),e._v(" "),a("hr"),e._v(" "),a("p",[a("strong",[a("RouterLink",{attrs:{to:"/Chapter-5/Chapter-5-Introduction.html"}},[e._v("Back to contents of the chapter（返回章节目录）")])],1)]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Previous Item（上一条目）："),a("RouterLink",{attrs:{to:"/Chapter-5/Chapter-5-Item-32-Combine-generics-and-varargs-judiciously.html"}},[e._v("Item 32: Combine generics and varargs judiciously（明智地合用泛型和可变参数）")])],1)]),e._v(" "),a("li",[a("strong",[e._v("Next Item（下一条目）："),a("RouterLink",{attrs:{to:"/Chapter-6/Chapter-6-Introduction.html"}},[e._v("Chapter 6 Introduction（章节介绍）")])],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);