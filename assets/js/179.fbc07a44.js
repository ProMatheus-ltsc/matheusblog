(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{1497:function(t,s,e){"use strict";e.r(s);var a=e(65),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"chapter-2-creating-and-destroying-objects-创建和销毁对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chapter-2-creating-and-destroying-objects-创建和销毁对象"}},[t._v("#")]),t._v(" Chapter 2. Creating and Destroying Objects（创建和销毁对象）")]),t._v(" "),e("h3",{attrs:{id:"item-4-enforce-noninstantiability-with-a-private-constructor-用私有构造函数实施不可实例化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#item-4-enforce-noninstantiability-with-a-private-constructor-用私有构造函数实施不可实例化"}},[t._v("#")]),t._v(" Item 4: Enforce noninstantiability with a private constructor（用私有构造函数实施不可实例化）")]),t._v(" "),e("p",[t._v("Occasionally you’ll want to write a class that is just a grouping of static methods and static fields. Such classes have acquired a bad reputation because some people abuse them to avoid thinking in terms of objects, but they do have valid uses. They can be used to group related methods on primitive values or arrays, in the manner of java.lang.Math or java.util.Arrays. They can also be used to group static methods, including factories (Item 1), for objects that implement some interface, in the manner of java.util.Collections. (As of Java 8, you can also put such methods in the interface, assuming it’s yours to modify.) Lastly, such classes can be used to group methods on a final class, since you can’t put them in a subclass.")]),t._v(" "),e("p",[t._v("有时你会想要写一个类，它只是一个静态方法和静态字段的组合。这样的类已经获得了坏名声，因为有些人滥用它们来避免从对象角度思考，但是它们确有用途。它们可以用 java.lang.Math 或 java.util.Arrays 的方式，用于与原始值或数组相关的方法。它们还可以用于对以 java.util.Collections 的方式实现某些接口的对象分组静态方法，包括工厂（"),e("RouterLink",{attrs:{to:"/Chapter-2/Chapter-2-Item-1-Consider-static-factory-methods-instead-of-constructors.html"}},[t._v("Item-1")]),t._v("）。（对于 Java 8，你也可以将这些方法放入接口中，假设你可以进行修改。）最后，这些类可用于对 final 类上的方法进行分组，因为你不能将它们放在子类中。")],1),t._v(" "),e("p",[t._v("Such utility classes were not designed to be instantiated: an instance would be nonsensical. In the absence of explicit constructors, however, the compiler provides a public, parameterless default constructor. To a user, this constructor is indistinguishable from any other. It is not uncommon to see unintentionally instantiable classes in published APIs.")]),t._v(" "),e("p",[t._v("这样的实用程序类不是为实例化而设计的：实例是无意义的。然而，在没有显式构造函数的情况下，编译器提供了一个公共的、无参数的默认构造函数。对于用户来说，这个构造函数与其他构造函数没有区别。在已发布的 API 中看到无意中实例化的类是很常见的。")]),t._v(" "),e("p",[e("strong",[t._v("Attempting to enforce noninstantiability by making a class abstract does not work.")]),t._v(" The class can be subclassed and the subclass instantiated. Furthermore, it misleads the user into thinking the class was designed for inheritance (Item 19). There is, however, a simple idiom to ensure noninstantiability. A default constructor is generated only if a class contains no explicit constructors, so "),e("strong",[t._v("a class can be made noninstantiable by including a private constructor:")])]),t._v(" "),e("p",[e("strong",[t._v("译注：原文 noninstantiable 应修改为 non-instantiable ，译为「不可实例化的」")])]),t._v(" "),e("p",[e("strong",[t._v("试图通过使类抽象来实施不可实例化是行不通的。")]),t._v(" 可以对类进行子类化，并实例化子类。此外，它误导用户认为类是为继承而设计的（"),e("RouterLink",{attrs:{to:"/Chapter-4/Chapter-4-Item-19-Design-and-document-for-inheritance-or-else-prohibit-it.html"}},[t._v("Item-19")]),t._v("）。然而，有一个简单的习惯用法来确保不可实例化。只有当类不包含显式构造函数时，才会生成默认构造函数，因此"),e("strong",[t._v("可以通过包含私有构造函数使类不可实例化：")])],1),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// Noninstantiable utility class\npublic class UtilityClass {\n    // Suppress default constructor for noninstantiability\n    private UtilityClass() {\n        throw new AssertionError();\n    } ... // Remainder omitted\n}\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])]),e("p",[t._v("Because the explicit constructor is private, it is inaccessible outside the class.The AssertionError isn’t strictly required, but it provides insurance in case the constructor is accidentally invoked from within the class. It guarantees the class will never be instantiated under any circumstances. This idiom is mildly counterintuitive because the constructor is provided expressly so that it cannot be invoked. It is therefore wise to include a comment, as shown earlier.")]),t._v(" "),e("p",[t._v("因为显式构造函数是私有的，所以在类之外是不可访问的。AssertionError 不是严格要求的，但是它提供了保障，以防构造函数意外地被调用。它保证类在任何情况下都不会被实例化。这个习惯用法有点违反常规，因为构造函数是明确提供的，但不能调用它。因此，如上述代码所示，包含注释是明智的做法。")]),t._v(" "),e("p",[t._v("As a side effect, this idiom also prevents the class from being subclassed. All constructors must invoke a superclass constructor, explicitly or implicitly, and a subclass would have no accessible superclass constructor to invoke.")]),t._v(" "),e("p",[t._v("这个习惯用法也防止了类被子类化，这是一个副作用。所有子类构造函数都必须调用超类构造函数，无论是显式的还是隐式的，但这种情况下子类都没有可访问的超类构造函数可调用。")])])}),[],!1,null,null,null);s.default=n.exports}}]);