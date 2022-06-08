(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{1515:function(e,t,s){"use strict";s.r(t);var a=s(65),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"chapter-4-classes-and-interfaces-类和接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chapter-4-classes-and-interfaces-类和接口"}},[e._v("#")]),e._v(" Chapter 4. Classes and Interfaces（类和接口）")]),e._v(" "),s("h3",{attrs:{id:"item-22-use-interfaces-only-to-define-types-接口只用于定义类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#item-22-use-interfaces-only-to-define-types-接口只用于定义类型"}},[e._v("#")]),e._v(" Item 22: Use interfaces only to define types（接口只用于定义类型）")]),e._v(" "),s("p",[e._v("When a class implements an interface, the interface serves as a type that can be used to refer to instances of the class. That a class implements an interface should therefore say something about what a client can do with instances of the class. It is inappropriate to define an interface for any other purpose.")]),e._v(" "),s("p",[e._v("当一个类实现了一个接口时，这个接口作为一种类型，可以用来引用类的实例。因此，实现接口的类应该说明使用者可以对类的实例做什么。为其他任何目的定义接口都是不合适的。")]),e._v(" "),s("p",[e._v("One kind of interface that fails this test is the so-called constant interface. Such an interface contains no methods; it consists solely of static final fields, each exporting a constant. Classes using these constants implement the interface to avoid the need to qualify constant names with a class name. Here is an example:")]),e._v(" "),s("p",[e._v("不满足上述条件的一种接口是所谓的常量接口。这样的接口不包含任何方法；它仅由静态 final 字段组成，每个字段导出一个常量。使用这些常量的类实现接口，以避免用类名修饰常量名。下面是一个例子：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// Constant interface antipattern - do not use!\npublic interface PhysicalConstants {\n    // Avogadro's number (1/mol)\n    static final double AVOGADROS_NUMBER = 6.022_140_857e23;\n\n    // Boltzmann constant (J/K)\n    static final double BOLTZMANN_CONSTANT = 1.380_648_52e-23;\n\n    // Mass of the electron (kg)\n    static final double ELECTRON_MASS = 9.109_383_56e-31;\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br")])]),s("p",[e._v("The constant interface pattern is a poor use of interfaces. That a class uses some constants internally is an implementation detail. Implementing a constant interface causes this implementation detail to leak into the class’s exported API. It is of no consequence to the users of a class that the class implements a constant interface. In fact, it may even confuse them. Worse, it represents a commitment: if in a future release the class is modified so that it no longer needs to use the constants, it still must implement the interface to ensure binary compatibility. If a nonfinal class implements a constant interface, all of its subclasses will have their namespaces polluted by the constants in the interface.")]),e._v(" "),s("p",[e._v("常量接口模式是使用接口的糟糕方式。类内部会使用一些常量，这是实现细节。然而，实现常量接口会导致这个实现细节泄漏到类的导出 API 中。对于类的用户来说，类实现一个常量接口没有什么价值。事实上，这甚至会让他们感到困惑。更糟糕的是，它代表了一种承诺：如果在将来的版本中修改了类，使其不再需要使用常量，那么它仍然必须实现接口以确保二进制兼容性。如果一个非 final 类实现了一个常量接口，那么它的所有子类的命名空间都会被接口中的常量所污染。")]),e._v(" "),s("p",[e._v("There are several constant interfaces in the Java platform libraries, such as java.io.ObjectStreamConstants. These interfaces should be regarded as anomalies and should not be emulated.")]),e._v(" "),s("p",[e._v("Java 库中有几个常量接口，例如 "),s("code",[e._v("java.io.ObjectStreamConstants")]),e._v("。这些接口应该被视为反例，不应该被效仿。")]),e._v(" "),s("p",[e._v("If you want to export constants, there are several reasonable choices. If the constants are strongly tied to an existing class or interface, you should add them to the class or interface. For example, all of the boxed numerical primitive classes, such as Integer and Double, export MIN_VALUE and MAX_VALUE constants. If the constants are best viewed as members of an enumerated type, you should export them with an enum type (Item 34). Otherwise, you should export the constants with a noninstantiable utility class (Item 4). Here is a utility class version of the PhysicalConstants example shown earlier:")]),e._v(" "),s("p",[e._v("如果你想导出常量，有几个合理的选择。如果这些常量与现有的类或接口紧密绑定，则应该将它们添加到类或接口。例如，所有数值包装类，比如 Integer 和 Double，都导出 MIN_VALUE 和 MAX_VALUE 常量。如果将这些常量看作枚举类型的成员，那么应该使用 enum 类型导出它们（"),s("RouterLink",{attrs:{to:"/Chapter-6/Chapter-6-Item-34-Use-enums-instead-of-int-constants.html"}},[e._v("Item-34")]),e._v("）。否则，你应该使用不可实例化的工具类（"),s("RouterLink",{attrs:{to:"/Chapter-2/Chapter-2-Item-4-Enforce-noninstantiability-with-a-private-constructor.html"}},[e._v("Item-4")]),e._v("）导出常量。下面是一个之前的 PhysicalConstants 例子的工具类另一个版本：")],1),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// Constant utility class\npackage com.effectivejava.science;\n\npublic class PhysicalConstants {\n    private PhysicalConstants() { } // Prevents instantiation（将构造私有，阻止实例化）\n    public static final double AVOGADROS_NUMBER = 6.022_140_857e23;\n    public static final double BOLTZMANN_CONST = 1.380_648_52e-23;\n    public static final double ELECTRON_MASS = 9.109_383_56e-31;\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("p",[e._v("Incidentally, note the use of the underscore character ( _ ) in the numeric literals. Underscores, which have been legal since Java 7, have no effect on the values of numeric literals, but can make them much easier to read if used with discretion. Consider adding underscores to numeric literals, whether fixed of floating point, if they contain five or more consecutive digits. For base ten literals, whether integral or floating point, you should use underscores to separate literals into groups of three digits indicating positive and negative powers of one thousand.")]),e._v(" "),s("p",[e._v("顺便说一下，注意可以在数字字面值中使用下划线（ _ ）。下划线自 Java 7 以来一直是合法的，它对数字字面值没有影响，如果谨慎使用，可以使它们更容易阅读。无论是不是固定的浮点数，如果它们包含五个或多个连续数字，都可以考虑添加下划线到数字字面值。对于以 10 为基数的字面值，无论是整数还是浮点数，都应该使用下划线将字面值分隔为三位数，表示 1000 的正幂和负幂。")]),e._v(" "),s("p",[e._v("Normally a utility class requires clients to qualify constant names with a class name, for example, PhysicalConstants.AVOGADROS_NUMBER. If you make heavy use of the constants exported by a utility class, you can avoid the need for qualifying the constants with the class name by making use of the static import facility:")]),e._v(" "),s("p",[e._v("通常，工具类要求客户端使用类名来限定常量名，例如 "),s("code",[e._v("PhysicalConstants.AVOGADROS_NUMBER")]),e._v("。如果你大量使用工具类导出的常量，你可以通过使用静态导入机制来避免使用类名限定常量：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// Use of static import to avoid qualifying constants\nimport static com.effectivejava.science.PhysicalConstants.*;\n\npublic class Test {\n    double atoms(double mols) {\n        return AVOGADROS_NUMBER * mols;\n    } ...\n    // Many more uses of PhysicalConstants justify static import\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("p",[e._v("In summary, interfaces should be used only to define types. They should not be used merely to export constants.")]),e._v(" "),s("p",[e._v("总之，接口应该只用于定义类型。它们不应该用于导出常量。")])])}),[],!1,null,null,null);t.default=n.exports}}]);