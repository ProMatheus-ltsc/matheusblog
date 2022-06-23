(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{1478:function(e,t,o){"use strict";o.r(t);var n=o(65),c=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h2",{attrs:{id:"chapter-10-exceptions-异常"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#chapter-10-exceptions-异常"}},[e._v("#")]),e._v(" Chapter 10. Exceptions（异常）")]),e._v(" "),o("h3",{attrs:{id:"item-74-document-all-exceptions-thrown-by-each-method-为每个方法记录会抛出的所有异常"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#item-74-document-all-exceptions-thrown-by-each-method-为每个方法记录会抛出的所有异常"}},[e._v("#")]),e._v(" Item 74: Document all exceptions thrown by each method（为每个方法记录会抛出的所有异常）")]),e._v(" "),o("p",[e._v("A description of the exceptions thrown by a method is an important part of the documentation required to use the method properly. Therefore, it is critically important that you take the time to carefully document all of the exceptions thrown by each method (Item 56).")]),e._v(" "),o("p",[e._v("描述方法抛出的异常，是该方法文档的重要部分。因此，花时间仔细记录每个方法抛出的所有异常是非常重要的（"),o("RouterLink",{attrs:{to:"/Chapter-8/Chapter-8-Item-56-Write-doc-comments-for-all-exposed-API-elements.html"}},[e._v("Item-56")]),e._v("）。")],1),e._v(" "),o("p",[o("strong",[e._v("Always declare checked exceptions individually, and document precisely the conditions under which each one is thrown")]),e._v(" using the Javadoc @throws tag. Don’t take the shortcut of declaring that a method throws some superclass of multiple exception classes that it can throw. As an extreme example, don’t declare that a public method throws Exception or, worse, throws Throwable. In addition to denying any guidance to the method’s user concerning the exceptions it is capable of throwing, such a declaration greatly hinders the use of the method because it effectively obscures any other exception that may be thrown in the same context. One exception to this advice is the main method, which can safely be declared to throw Exception because it is called only by VM.")]),e._v(" "),o("p",[o("strong",[e._v("始终单独声明 checked 异常，并使用 Javadoc 的 "),o("code",[e._v("@throw")]),e._v(" 标记精确记录每次抛出异常的条件")]),e._v("。如果一个方法抛出多个异常，不要使用快捷方式声明这些异常的超类。作为一个极端的例子，即不要在公共方法声明 "),o("code",[e._v("throws Exception")]),e._v("，或者更糟，甚至 "),o("code",[e._v("throws Throwable")]),e._v("。除了不能向方法的用户提供会抛出哪些异常的任何消息之外，这样的声明还极大地阻碍了方法的使用，因为它掩盖了在相同上下文中可能抛出的任何其他异常。这个建议的一个特例是 main 方法，它可以安全地声明 "),o("code",[e._v("throw Exception")]),e._v("，因为它只被 VM 调用。")]),e._v(" "),o("p",[e._v("While the language does not require programmers to declare the unchecked exceptions that a method is capable of throwing, it is wise to document them as carefully as the checked exceptions. Unchecked exceptions generally represent programming errors (Item 70), and familiarizing programmers with all of the errors they can make helps them avoid making these errors. A well-documented list of the unchecked exceptions that a method can throw effectively describes the preconditions for its successful execution. It is essential that every public method’s documentation describe its preconditions (Item 56), and documenting its unchecked exceptions is the best way to satisfy this requirement.")]),e._v(" "),o("p",[e._v("虽然 Java 不要求程序员为方法声明会抛出的 unchecked 异常，但明智的做法是，应该像 checked 异常一样仔细地记录它们。unchecked 异常通常表示编程错误（"),o("RouterLink",{attrs:{to:"/Chapter-10/Chapter-10-Item-70-Use-checked-exceptions-for-recoverable-conditions-and-runtime-exceptions-for-programming-errors.html"}},[e._v("Item-70")]),e._v("），让程序员熟悉他们可能犯的所有错误可以帮助他们避免犯这些错误。将方法可以抛出的 unchecked 异常形成良好文档，可以有效描述方法成功执行的先决条件。每个公共方法的文档都必须描述它的先决条件（"),o("RouterLink",{attrs:{to:"/Chapter-8/Chapter-8-Item-56-Write-doc-comments-for-all-exposed-API-elements.html"}},[e._v("Item-56")]),e._v("），记录它的 unchecked 异常是满足这个需求的最佳方法。")],1),e._v(" "),o("p",[e._v("It is particularly important that methods in interfaces document the unchecked exceptions they may throw. This documentation forms a part of the interface’s general contract and enables common behavior among multiple implementations of the interface.")]),e._v(" "),o("p",[e._v("特别重要的是，接口中的方法要记录它们可能抛出的 unchecked 异常。此文档构成接口通用约定的一部分，并指明接口的多个实现之间应该遵守的公共行为。")]),e._v(" "),o("p",[o("strong",[e._v("Use the Javadoc @throws tag to document each exception that a method can throw, but do not use the throws keyword on unchecked exceptions.")]),e._v(" It is important that programmers using your API are aware of which exceptions are checked and which are unchecked because the programmers’ responsibilities differ in these two cases. The documentation generated by the Javadoc @throws tag without a corresponding throws clause in the method declaration provides a strong visual cue to the programmer that an exception is unchecked.")]),e._v(" "),o("p",[o("strong",[e._v("使用 Javadoc 的 "),o("code",[e._v("@throw")]),e._v(" 标记记录方法会抛出的每个异常，但是不要对 unchecked 异常使用 throws 关键字。")]),e._v(" 让使用你的 API 的程序员知道哪些异常是 checked 异常，哪些是 unchecked 异常是很重要的，因为程序员在这两种情况下的职责是不同的。Javadoc 的 "),o("code",[e._v("@throw")]),e._v(" 标记生成的文档在方法声明中没有对应的 throws 子句，这向程序员提供了一个强烈的视觉提示，这是 unchecked 异常。")]),e._v(" "),o("p",[e._v("It should be noted that documenting all of the unchecked exceptions that each method can throw is an ideal, not always achievable in the real world. When a class undergoes revision, it is not a violation of source or binary compatibility if an exported method is modified to throw additional unchecked exceptions. Suppose a class invokes a method from another, independently written class. The authors of the former class may carefully document all of the unchecked exceptions that each method throws, but if the latter class is revised to throw additional unchecked exceptions, it is quite likely that the former class (which has not undergone revision) will propagate the new unchecked exceptions even though it does not document them.")]),e._v(" "),o("p",[e._v("应该注意的是，记录每个方法会抛出的所有 unchecked 异常是理想的，但在实际中并不总是可以做到。当类进行修订时，如果将导出的方法修改，使其抛出额外的 unchecked 异常，这并不违反源代码或二进制兼容性。假设一个类 A 从另一个独立的类 B 中调用一个方法。A 类的作者可能会仔细记录每个方法抛出的 unchecked 异常，如果 B 类被修改了，使其抛出额外的 unchecked 异常，很可能 A 类（未经修改）将传播新的 unchecked 异常，尽管它没有在文档中声明。")]),e._v(" "),o("p",[o("strong",[e._v("If an exception is thrown by many methods in a class for the same reason, you can document the exception in the class’s documentation comment")]),e._v(" rather than documenting it individually for each method. A common example is NullPointerException. It is fine for a class’s documentation comment to say, “All methods in this class throw a NullPointerException if a null object reference is passed in any parameter,” or words to that effect.")]),e._v(" "),o("p",[o("strong",[e._v("如果一个类中的许多方法都因为相同的原因抛出异常，你可以在类的文档注释中记录异常，")]),e._v(" 而不是为每个方法单独记录异常。一个常见的例子是 NullPointerException。类的文档注释可以这样描述：「如果在任何参数中传递了 null 对象引用，该类中的所有方法都会抛出 NullPointerException」，或者类似意思的话。")]),e._v(" "),o("p",[e._v("In summary, document every exception that can be thrown by each method that you write. This is true for unchecked as well as checked exceptions, and for abstract as well as concrete methods. This documentation should take the form of @throws tags in doc comments. Declare each checked exception individually in a method’s throws clause, but do not declare unchecked exceptions. If you fail to document the exceptions that your methods can throw, it will be difficult or impossible for others to make effective use of your classes and interfaces.")]),e._v(" "),o("p",[e._v("总之，记录你所编写的每个方法可能引发的每个异常。对于 unchecked 异常、checked 异常、抽象方法、实例方法都是如此。应该在文档注释中采用 "),o("code",[e._v("@throw")]),e._v(" 标记的形式。在方法的 throws 子句中分别声明每个 checked 异常，但不要声明 unchecked 异常。如果你不记录方法可能抛出的异常，其他人将很难或不可能有效地使用你的类和接口。")])])}),[],!1,null,null,null);t.default=c.exports}}]);