(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{1501:function(e,t,s){"use strict";s.r(t);var n=s(65),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"chapter-6-enums-and-annotations-枚举和注解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chapter-6-enums-and-annotations-枚举和注解"}},[e._v("#")]),e._v(" Chapter 6. Enums and Annotations（枚举和注解）")]),e._v(" "),s("h3",{attrs:{id:"item-36-use-enumset-instead-of-bit-fields-用-enumset-替代位字段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#item-36-use-enumset-instead-of-bit-fields-用-enumset-替代位字段"}},[e._v("#")]),e._v(" Item 36: Use EnumSet instead of bit fields（用 EnumSet 替代位字段）")]),e._v(" "),s("p",[e._v("If the elements of an enumerated type are used primarily in sets, it is traditional to use the int enum pattern (Item 34), assigning a different power of 2 to each constant:")]),e._v(" "),s("p",[e._v("如果枚举类型的元素主要在 Set 中使用，传统上使用 int 枚举模式（"),s("RouterLink",{attrs:{to:"/Chapter-6/Chapter-6-Item-34-Use-enums-instead-of-int-constants.html"}},[e._v("Item-34")]),e._v("），通过不同的 2 平方数为每个常量赋值：")],1),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// Bit field enumeration constants - OBSOLETE!\npublic class Text {\n    public static final int STYLE_BOLD = 1 << 0; // 1\n    public static final int STYLE_ITALIC = 1 << 1; // 2\n    public static final int STYLE_UNDERLINE = 1 << 2; // 4\n    public static final int STYLE_STRIKETHROUGH = 1 << 3; // 8\n    // Parameter is bitwise OR of zero or more STYLE_ constants\n    public void applyStyles(int styles) { ... }\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("p",[e._v("This representation lets you use the bitwise OR operation to combine several constants into a set, known as a bit field:")]),e._v(" "),s("p",[e._v("这种表示方式称为位字段，允许你使用位运算的 OR 操作将几个常量组合成一个 Set：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("text.applyStyles(STYLE_BOLD | STYLE_ITALIC);\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("The bit field representation also lets you perform set operations such as union and intersection efficiently using bitwise arithmetic. But bit fields have all the disadvantages of int enum constants and more. It is even harder to interpret a bit field than a simple int enum constant when it is printed as a number. There is no easy way to iterate over all of the elements represented by a bit field. Finally, you have to predict the maximum number of bits you’ll ever need at the time you’re writing the API and choose a type for the bit field (typically int or long) accordingly. Once you’ve picked a type, you can’t exceed its width (32 or 64 bits) without changing the API.")]),e._v(" "),s("p",[e._v("位字段表示方式允许使用位运算高效地执行 Set 操作，如并集和交集。但是位字段具有 int 枚举常量所有缺点，甚至更多。当位字段被打印为数字时，它比简单的 int 枚举常量更难理解。没有一种简单的方法可以遍历由位字段表示的所有元素。最后，你必须预测在编写 API 时需要的最大位数，并相应地为位字段（通常是 int 或 long）选择一种类型。一旦选择了一种类型，在不更改 API 的情况下，不能超过它的宽度（32 或 64 位）。")]),e._v(" "),s("p",[e._v("Some programmers who use enums in preference to int constants still cling to the use of bit fields when they need to pass around sets of constants. There is no reason to do this, because a better alternative exists. The java.util package provides the EnumSet class to efficiently represent sets of values drawn from a single enum type. This class implements the Set interface, providing all of the richness, type safety, and interoperability you get with any other Set implementation. But internally, each EnumSet is represented as a bit vector. If the underlying enum type has sixty-four or fewer elements—and most do—the entire EnumSet is represented with a single long, so its performance is comparable to that of a bit field. Bulk operations, such as removeAll and retainAll, are implemented using bitwise arithmetic, just as you’d do manually for bit fields. But you are insulated from the ugliness and errorproneness of manual bit twiddling: the EnumSet does the hard work for you.")]),e._v(" "),s("p",[e._v("一些使用枚举而不是 int 常量的程序员在需要传递常量集时仍然坚持使用位字段。没有理由这样做，因为存在更好的选择。"),s("code",[e._v("java.util")]),e._v(" 包提供 EnumSet 类来有效地表示从单个枚举类型中提取的值集。这个类实现了 Set 接口，提供了所有其他 Set 实现所具有的丰富性、类型安全性和互操作性。但在内部，每个 EnumSet 都表示为一个位向量。如果底层枚举类型有 64 个或更少的元素（大多数都是），则整个 EnumSet 用一个 long 表示，因此其性能与位字段的性能相当。批量操作（如 removeAll 和 retainAll）是使用逐位算法实现的，就像手动处理位字段一样。但是，你可以避免因手工修改导致产生不良代码和潜在错误：EnumSet 为你完成了这些繁重的工作。")]),e._v(" "),s("p",[e._v("Here is how the previous example looks when modified to use enums and enum sets instead of bit fields. It is shorter, clearer, and safer:")]),e._v(" "),s("p",[e._v("当之前的示例修改为使用枚举和 EnumSet 而不是位字段时。它更短，更清晰，更安全：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// EnumSet - a modern replacement for bit fields\npublic class Text {\n    public enum Style { BOLD, ITALIC, UNDERLINE, STRIKETHROUGH }\n    // Any Set could be passed in, but EnumSet is clearly best\n    public void applyStyles(Set<Style> styles) { ... }\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("p",[e._v("Here is client code that passes an EnumSet instance to the applyStyles method. The EnumSet class provides a rich set of static factories for easy set creation, one of which is illustrated in this code:")]),e._v(" "),s("p",[e._v("下面是将 EnumSet 实例传递给 applyStyles 方法的客户端代码。EnumSet 类提供了一组丰富的静态工厂，可以方便地创建 Set，下面的代码演示了其中的一个：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("text.applyStyles(EnumSet.of(Style.BOLD, Style.ITALIC));\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Note that the applyStyles method takes a "),s("code",[e._v("Set<Style>")]),e._v(" rather than an "),s("code",[e._v("EnumSet<Style>")]),e._v(". While it seems likely that all clients would pass an EnumSet to the method, it is generally good practice to accept the interface type rather than the implementation type (Item 64). This allows for the possibility of an unusual client to pass in some other Set implementation.")]),e._v(" "),s("p",[e._v("请注意，applyStyles 方法采用 "),s("code",[e._v("Set<Style>")]),e._v(" 而不是 "),s("code",[e._v("EnumSet<Style>")]),e._v("。虽然似乎所有客户端都可能将 EnumSet 传递给该方法，但通常较好的做法是接受接口类型而不是实现类型（"),s("RouterLink",{attrs:{to:"/Chapter-9/Chapter-9-Item-64-Refer-to-objects-by-their-interfaces.html"}},[e._v("Item-64")]),e._v("）。这允许特殊的客户端传入其他 Set 实现的可能性。")],1),e._v(" "),s("p",[e._v("In summary, "),s("strong",[e._v("just because an enumerated type will be used in sets, there is no reason to represent it with bit fields.")]),e._v(" The EnumSet class combines the conciseness and performance of bit fields with all the many advantages of enum types described in Item 34. The one real disadvantage of EnumSet is that it is not, as of Java 9, possible to create an immutable EnumSet, but this will likely be remedied in an upcoming release. In the meantime, you can wrap an EnumSet with Collections.unmodifiableSet, but conciseness and performance will suffer.")]),e._v(" "),s("p",[e._v("总之，"),s("strong",[e._v("因为枚举类型将在 Set 中使用，没有理由用位字段表示它。")]),e._v(" EnumSet 类结合了位字段的简洁性和性能，以及 "),s("RouterLink",{attrs:{to:"/Chapter-6/Chapter-6-Item-34-Use-enums-instead-of-int-constants.html"}},[e._v("Item-34")]),e._v(" 中描述的枚举类型的许多优点。EnumSet 的一个真正的缺点是，从 Java 9 开始，它不能创建不可变的 EnumSet，在未来发布的版本中可能会纠正这一点。同时，可以用 "),s("code",[e._v("Collections.unmodifiableSet")]),e._v(" 包装 EnumSet，但简洁性和性能将受到影响。")],1)])}),[],!1,null,null,null);t.default=a.exports}}]);