(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{1472:function(e,t,s){"use strict";s.r(t);var o=s(24),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"chapter-4-classes-and-interfaces-类和接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chapter-4-classes-and-interfaces-类和接口"}},[e._v("#")]),e._v(" Chapter 4. Classes and Interfaces（类和接口）")]),e._v(" "),s("h3",{attrs:{id:"item-19-design-and-document-for-inheritance-or-else-prohibit-it-继承要设计良好并且具有文档-否则禁止使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#item-19-design-and-document-for-inheritance-or-else-prohibit-it-继承要设计良好并且具有文档-否则禁止使用"}},[e._v("#")]),e._v(" Item 19: Design and document for inheritance or else prohibit it（继承要设计良好并且具有文档，否则禁止使用）")]),e._v(" "),s("p",[e._v("Item 18 alerted you to the dangers of subclassing a “foreign” class that was not designed and documented for inheritance. So what does it mean for a class to be designed and documented for inheritance?")]),e._v(" "),s("p",[s("RouterLink",{attrs:{to:"/Chapter-4/Chapter-4-Item-18-Favor-composition-over-inheritance.html"}},[e._v("Item-18")]),e._v(" 提醒你注意：将不是为继承设计并且缺少文档的「外部」类进行子类化的危险。那么，为继承而设计并且具备文档的类意味着什么呢？")],1),e._v(" "),s("p",[e._v("First, the class must document precisely the effects of overriding any method.In other words, "),s("strong",[e._v("the class must document its self-use of overridable methods.")]),e._v(" For each public or protected method, the documentation must indicate which overridable methods the method invokes, in what sequence, and how the results of each invocation affect subsequent processing. (By overridable, we mean nonfinal and either public or protected.) More generally, a class must document any circumstances under which it might invoke an overridable method. For example, invocations might come from background threads or static initializers.")]),e._v(" "),s("p",[e._v("首先，类必须精确地在文档中记录覆盖任何方法的效果。换句话说，类必须在文档中记录它对可覆盖方法的自用性。对于每个公共或受保护的方法，文档必须指出方法调用的可覆盖方法、调用顺序以及每次调用的结果如何影响后续处理过程。（可覆盖的意思是非 final 的，公共的或受保护的。）更一般地说，类必须记录它可能调用可覆盖方法的所有情况。例如，可能调用来自后台线程或静态初始化器的方法。")]),e._v(" "),s("p",[e._v("A method that invokes overridable methods contains a description of these invocations at the end of its documentation comment. The description is in a special section of the specification, labeled “Implementation Requirements,” which is generated by the Javadoc tag @implSpec. This section describes the inner workings of the method. Here’s an example, copied from the specification for java.util.AbstractCollection:")]),e._v(" "),s("p",[e._v("调用可覆盖方法的方法在其文档注释末尾应包含这些调用的描述。描述在规范的一个特殊部分中，标记为「Implementation Requirements（实现需求）」，它由 Javadoc 标签 "),s("code",[e._v("@implSpec")]),e._v(" 生成。本节描述该方法的内部工作方式。下面是一个示例，复制自 "),s("code",[e._v("java.util.AbstractCollection")]),e._v(" 规范：")]),e._v(" "),s("blockquote",[s("p",[e._v("public boolean remove(Object o)")])]),e._v(" "),s("blockquote",[s("p",[e._v("Removes a single instance of the specified element from this collection, if it is present (optional operation). More formally, removes an element e such that Objects.equals(o, e), if this collection contains one or more such elements. Returns true if this collection contained the specified element (or equivalently, if this collection changed as a result of the call).")])]),e._v(" "),s("p",[e._v("从此集合中移除指定元素的单个实例，如果存在（可选操作）。更正式地说，如果此集合包含一个或多个这样的元素，则删除元素 e，使得 "),s("code",[e._v("Objects.equals(o, e)")]),e._v("，如果此 collection 包含指定的元素，则返回 true（或等效地，如果此集合因调用而更改）。")]),e._v(" "),s("blockquote",[s("p",[e._v("Implementation Requirements: This implementation iterates over the collection looking for the specified element. If it finds the element, it removes the element from the collection using the iterator’s remove method. Note that this implementation throws an UnsupportedOperationException if the iterator returned by this collection’s iterator method does not implement the remove method and this collection contains the specified object.")])]),e._v(" "),s("p",[e._v("实现需求：这个实现遍历集合，寻找指定的元素。如果找到元素，则使用迭代器的 remove 方法从集合中删除元素。注意，如果这个集合的迭代器方法返回的迭代器没有实现 remove 方法，并且这个集合包含指定的对象，那么这个实现将抛出 UnsupportedOperationException。")]),e._v(" "),s("p",[e._v("This documentation leaves no doubt that overriding the iterator method will affect the behavior of the remove method. It also describes exactly how the behavior of the Iterator returned by the iterator method will affect the behavior of the remove method. Contrast this to the situation in Item 18, where the programmer subclassing HashSet simply could not say whether overriding the add method would affect the behavior of the addAll method.")]),e._v(" "),s("p",[e._v("这篇文档无疑说明了重写迭代器方法将影响 remove 方法的行为。它还准确地描述了迭代器方法返回的迭代器的行为将如何影响 remove 方法的行为。与 "),s("RouterLink",{attrs:{to:"/Chapter-4/Chapter-4-Item-18-Favor-composition-over-inheritance.html"}},[e._v("Item-18")]),e._v(" 中的情况相反，在 "),s("RouterLink",{attrs:{to:"/Chapter-4/Chapter-4-Item-18-Favor-composition-over-inheritance.html"}},[e._v("Item-18")]),e._v(" 中，程序员子类化 HashSet 不能简单地说覆盖 add 方法是否会影响 addAll 方法的行为。")],1),e._v(" "),s("p",[e._v("But doesn’t this violate the dictum that good API documentation should describe what a given method does and not how it does it? Yes, it does! This is an unfortunate consequence of the fact that inheritance violates encapsulation. To document a class so that it can be safely subclassed, you must describe implementation details that should otherwise be left unspecified.")]),e._v(" "),s("p",[e._v("但是，这是否违背了一个格言：好的 API 文档应该描述一个给定的方法做什么，而不是如何做？是的，它确实违背了！这是继承违反封装这一事实的不幸结果。要为一个类编制文档，使其能够安全地子类化，你必须描述实现细节，否则这些细节应该是未指定的。")]),e._v(" "),s("p",[e._v('The @implSpec tag was added in Java 8 and used heavily in Java 9. This tag should be enabled by default, but as of Java 9, the Javadoc utility still ignores it unless you pass the command line switch -tag "apiNote: a :API Note:".')]),e._v(" "),s("p",[s("code",[e._v("@implSpec")]),e._v(" 标记在 Java 8 中添加，在 Java 9 中大量使用。默认情况下应该启用这个标记，但是在 Java 9 中，Javadoc 实用程序仍然忽略它，除非传递命令行开关 "),s("code",[e._v('-tag "apiNote: a :API Note:"')]),e._v("。")]),e._v(" "),s("p",[e._v("Designing for inheritance involves more than just documenting patterns of self-use. To allow programmers to write efficient subclasses without undue pain, a class may have to provide hooks into its internal workings in the form of judiciously chosen protected methods or, in rare instances, protected fields. For example, consider the removeRange method from java.util.AbstractList:")]),e._v(" "),s("p",[e._v("为继承而设计不仅仅是记录自用性模式。为了允许程序员编写高效的子类而不受不必要的痛苦，类可能必须以明智地选择受保护的方法或（在很少的情况下）受保护的字段的形式为其内部工作提供挂钩。例如，考虑来自 "),s("code",[e._v("java.util.AbstractList")]),e._v(" 的 removeRange 方法：")]),e._v(" "),s("blockquote",[s("p",[e._v("protected void removeRange(int fromIndex, int toIndex)")])]),e._v(" "),s("blockquote",[s("p",[e._v("Removes from this list all of the elements whose index is between fromIndex, inclusive, and toIndex, exclusive. Shifts any succeeding elements to the left (reduces their index). This call shortens the list by (toIndex - fromIndex) elements. (If toIndex == fromIndex,this operation has no effect.)")])]),e._v(" "),s("p",[e._v("从这个列表中删除所有索引位于 fromIndex（包含索引）和 toIndex（独占索引）之间的元素。将任何后续元素移到左边（减少其索引）。这个调用使用 "),s("code",[e._v("(toIndex - fromIndex)")]),e._v(" 元素缩短列表。（如果 toIndex == fromIndex，此操作无效。）")]),e._v(" "),s("blockquote",[s("p",[e._v("This method is called by the clear operation on this list and its sublists.Overriding this method to take advantage of the internals of the list implementation can substantially improve the performance of the clear operation on this list and its sublists.")])]),e._v(" "),s("p",[e._v("此方法由此列表及其子列表上的 clear 操作调用。重写此方法以利用列表实现的内部特性，可以显著提高对该列表及其子列表的 clear 操作的性能。")]),e._v(" "),s("blockquote",[s("p",[e._v("Implementation Requirements: This implementation gets a list iterator positioned before fromIndex and repeatedly calls ListIterator.next followed by ListIterator.remove, until the entire range has been removed. Note: If ListIterator.remove requires linear time, this implementation requires quadratic time.")])]),e._v(" "),s("p",[e._v("实现需求：该实现获取位于 fromIndex 之前的列表迭代器，并依次重复调用 "),s("code",[e._v("ListIterator.next")]),e._v(" 和 "),s("code",[e._v("ListIterator.remove")]),e._v("，直到删除整个范围的内容。注意：如果 "),s("code",[e._v("ListIterator.remove")]),e._v(" 需要线性时间，这个实现需要平方级的时间。")]),e._v(" "),s("blockquote",[s("p",[e._v("Parameters:")])]),e._v(" "),s("p",[e._v("参数")]),e._v(" "),s("blockquote",[s("p",[e._v("fromIndex index of first element to be removed.")])]),e._v(" "),s("p",[e._v("要删除的第一个元素的 fromIndex 索引。")]),e._v(" "),s("blockquote",[s("p",[e._v("toIndex index after last element to be removed.")])]),e._v(" "),s("p",[e._v("要删除的最后一个元素后的索引。")]),e._v(" "),s("p",[e._v("This method is of no interest to end users of a List implementation. It is provided solely to make it easy for subclasses to provide a fast clear method on sublists. In the absence of the removeRange method, subclasses would have to make do with quadratic performance when the clear method was invoked on sublists or rewrite the entire subList mechanism from scratch— not an easy task!")]),e._v(" "),s("p",[e._v("此方法对列表实现的最终用户没有任何兴趣。它的提供只是为了让子类更容易在子列表上提供快速清晰的方法。在没有 removeRange 方法的情况下，当在子列表上调用 clear 方法或从头重写整个子列表机制时，子类将不得不处理二次性能——这不是一项简单的任务!")]),e._v(" "),s("p",[e._v("So how do you decide what protected members to expose when you design a class for inheritance? Unfortunately, there is no magic bullet. The best you can do is to think hard, take your best guess, and then test it by writing subclasses.You should expose as few protected members as possible because each one represents a commitment to an implementation detail. On the other hand, you must not expose too few because a missing protected member can render a class practically unusable for inheritance.")]),e._v(" "),s("p",[e._v("那么，在为继承设计类时，如何决定要公开哪些受保护的成员呢？不幸的是，没有灵丹妙药。你能做的最好的事情就是认真思考，做出最好的猜测，然后通过编写子类来测试它。你应该尽可能少地公开受保护的成员，因为每个成员都表示对实现细节的承诺。另一方面，你不能公开太多，因为缺少受保护的成员会导致类实际上无法用于继承。")]),e._v(" "),s("p",[s("strong",[e._v("The only way to test a class designed for inheritance is to write subclasses.")]),e._v(" If you omit a crucial protected member, trying to write a subclass will make the omission painfully obvious. Conversely, if several subclasses are written and none uses a protected member, you should probably make it private. Experience shows that three subclasses are usually sufficient to test an extendable class. One or more of these subclasses should be written by someone other than the superclass author.")]),e._v(" "),s("p",[s("strong",[e._v("测试为继承而设计的类的唯一方法是编写子类。")]),e._v(" 如果你忽略了一个关键的受保护成员，那么尝试编写子类将使遗漏变得非常明显。相反，如果编写了几个子类，而没有一个子类使用受保护的成员，则应该将其设置为私有。经验表明，三个子类通常足以测试一个可扩展类。这些子类中的一个或多个应该由超类作者以外的其他人编写。")]),e._v(" "),s("p",[e._v("When you design for inheritance a class that is likely to achieve wide use, realize that you are committing forever to the self-use patterns that you document and to the implementation decisions implicit in its protected methods and fields. These commitments can make it difficult or impossible to improve the performance or functionality of the class in a subsequent release. Therefore,"),s("strong",[e._v("you must test your class by writing subclasses before you release it.")])]),e._v(" "),s("p",[e._v("当你为继承设计一个可能获得广泛使用的类时，请意识到你将永远致力于你所记录的自使用模式，以及在其受保护的方法和字段中隐含的实现决策。这些承诺会使在后续版本中改进类的性能或功能变得困难或不可能。因此，"),s("strong",[e._v("你必须在发布类之前通过编写子类来测试类。")])]),e._v(" "),s("p",[e._v("Also, note that the special documentation required for inheritance clutters up normal documentation, which is designed for programmers who create instances of your class and invoke methods on them. As of this writing, there is little in the way of tools to separate ordinary API documentation from information of interest only to programmers implementing subclasses.")]),e._v(" "),s("p",[e._v("另外，请注意，继承所需的特殊文档会使普通文档变得混乱，这种文档是为那些创建类实例并在其上调用方法的程序员设计的。在撰写本文时，很少有工具能够将普通 API 文档与只对实现子类的程序员感兴趣的信息分离开来。")]),e._v(" "),s("p",[e._v("There are a few more restrictions that a class must obey to allow inheritance."),s("strong",[e._v("Constructors must not invoke overridable methods,")]),e._v(" directly or indirectly. If you violate this rule, program failure will result. The superclass constructor runs before the subclass constructor, so the overriding method in the subclass will get invoked before the subclass constructor has run. If the overriding method depends on any initialization performed by the subclass constructor, the method will not behave as expected. To make this concrete, here’s a class that violates this rule:")]),e._v(" "),s("p",[e._v("为了允许继承，类必须遵守更多的限制。"),s("strong",[e._v("构造函数不能直接或间接调用可重写的方法。")]),e._v(" 如果你违反了这个规则，程序就会失败。超类构造函数在子类构造函数之前运行，因此在子类构造函数运行之前将调用子类中的覆盖方法。如果重写方法依赖于子类构造函数执行的任何初始化，则该方法的行为将不像预期的那样。为了使其具体化，下面是一个违反此规则的类：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("public class Super {\n    // Broken - constructor invokes an overridable method\n    public Super() {\n        overrideMe();\n    }\n    public void overrideMe() {\n    }\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br")])]),s("p",[e._v("Here’s a subclass that overrides the overrideMe method, which is erroneously invoked by Super’s sole constructor:")]),e._v(" "),s("p",[e._v("下面是覆盖 overrideMe 方法的子类，Super 的唯一构造函数错误地调用了 overrideMe 方法：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("public final class Sub extends Super {\n    // Blank final, set by constructor\n    private final Instant instant;\n    Sub() {\n        instant = Instant.now();\n    }\n    // Overriding method invoked by superclass constructor\n    @Override\n    public void overrideMe() {\n        System.out.println(instant);\n    }\n    public static void main(String[] args) {\n        Sub sub = new Sub();\n        sub.overrideMe();\n    }\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br")])]),s("p",[e._v("You might expect this program to print out the instant twice, but it prints out null the first time because overrideMe is invoked by the Super constructor before the Sub constructor has a chance to initialize the instant field. Note that this program observes a final field in two different states! Note also that if overrideMe had invoked any method on instant, it would have thrown a NullPointerException when the Super constructor invoked overrideMe. The only reason this program doesn’t throw a NullPointerException as it stands is that the println method tolerates null parameters.")]),e._v(" "),s("p",[e._v("你可能希望这个程序打印两次 instant，但是它第一次打印 null，因为在子构造函数有机会初始化 instant 字段之前，超级构造函数调用了 overrideMe。注意，这个程序观察了两个不同状态的最后一个字段！还要注意，如果 overrideMe 立即调用了任何方法，那么当超级构造函数调用 overrideMe 时，它会抛出一个 NullPointerException。这个程序不抛出 NullPointerException 的唯一原因是 println 方法允许空参数。")]),e._v(" "),s("p",[e._v("Note that it is safe to invoke private methods, final methods, and static methods, none of which are overridable, from a constructor.")]),e._v(" "),s("p",[e._v("注意，从构造函数调用私有方法、最终方法和静态方法是安全的，它们都是不可覆盖的。")]),e._v(" "),s("p",[e._v("The Cloneable and Serializable interfaces present special difficulties when designing for inheritance. It is generally not a good idea for a class designed for inheritance to implement either of these interfaces because they place a substantial burden on programmers who extend the class. There are,however, special actions that you can take to allow subclasses to implement these interfaces without mandating that they do so. These actions are described in Item 13 and Item 86.")]),e._v(" "),s("p",[e._v("可克隆和可序列化的接口在设计继承时存在特殊的困难。对于为继承而设计的类来说，实现这两种接口都不是一个好主意，因为它们给扩展类的程序员带来了沉重的负担。但是，你可以采取一些特殊的操作来允许子类实现这些接口，而无需强制它们这样做。"),s("RouterLink",{attrs:{to:"/Chapter-3/Chapter-3-Item-13-Override-clone-judiciously.html"}},[e._v("Item-13")]),e._v(" 和 "),s("RouterLink",{attrs:{to:"/Chapter-12/Chapter-12-Item-86-Implement-Serializable-with-great-caution.html"}},[e._v("Item-86")]),e._v(" 叙述了这些行动。")],1),e._v(" "),s("p",[e._v("If you do decide to implement either Cloneable or Serializable in a class that is designed for inheritance, you should be aware that because the clone and readObject methods behave a lot like constructors, a similar restriction applies: neither clone nor readObject may invoke an overridable method, directly or indirectly. In the case of readObject, the overriding method will run before the subclass’s state has been deserialized. In the case of clone, the overriding method will run before the subclass’s clone method has a chance to fix the clone’s state. In either case, a program failure is likely to follow. In the case of clone, the failure can damage the original object as well as the clone. This can happen, for example, if the overriding method assumes it is modifying the clone’s copy of the object’s deep structure, but the copy hasn’t been made yet.")]),e._v(" "),s("p",[e._v("如果你确实决定在为继承而设计的类中实现 Cloneable 或 Serializable，那么你应该知道，由于 clone 和 readObject 方法的行为与构造函数非常相似，因此存在类似的限制：clone 和 readObject 都不能直接或间接调用可覆盖的方法。对于 readObject，覆盖方法将在子类的状态反序列化之前运行。在 clone 的情况下，覆盖方法将在子类的 clone 方法有机会修复 clone 的状态之前运行。在任何一种情况下，程序失败都可能随之而来。在 clone 的情况下，失败可以破坏原始对象和 clone。例如，如果覆盖方法假设它正在修改对象的深层结构的 clone 副本，但是复制还没有完成，那么就会发生这种情况。")]),e._v(" "),s("p",[e._v("Finally, if you decide to implement Serializable in a class designed for inheritance and the class has a readResolve or writeReplace method,you must make the readResolve or writeReplace method protected rather than private. If these methods are private, they will be silently ignored by subclasses. This is one more case where an implementation detail becomes part of a class’s API to permit inheritance.")]),e._v(" "),s("p",[e._v("最后，如果你决定在一个为继承而设计的类中实现 Serializable，并且这个类有一个 readResolve 或 writeReplace 方法，那么你必须使 readResolve 或 writeReplace 方法为 protected，而不是 private。如果这些方法是 private 的，它们将被子类静静地忽略。这是实现细节成为类 API 允许继承的一部分的又一种情况。")]),e._v(" "),s("p",[e._v("By now it should be apparent that designing a class for inheritance requires great effort and places substantial limitations on the class. This is not a decision to be undertaken lightly. There are some situations where it is clearly the right thing to do, such as abstract classes, including skeletal implementations of interfaces (Item 20). There are other situations where it is clearly the wrong thing to do, such as immutable classes (Item 17).")]),e._v(" "),s("p",[e._v("到目前为止，显然为继承而设计一个类需要付出很大的努力，并且对类有很大的限制。这不是一个可以轻易作出的决定。在某些情况下，这样做显然是正确的，例如抽象类，包括接口的骨架实现（"),s("RouterLink",{attrs:{to:"/Chapter-4/Chapter-4-Item-20-Prefer-interfaces-to-abstract-classes.html"}},[e._v("Item-20")]),e._v("）。还有一些情况显然是错误的，比如不可变类（"),s("RouterLink",{attrs:{to:"/Chapter-4/Chapter-4-Item-17-Minimize-mutability.html"}},[e._v("Item-17")]),e._v("）。")],1),e._v(" "),s("p",[e._v("But what about ordinary concrete classes? Traditionally, they are neither final nor designed and documented for subclassing, but this state of affairs is dangerous. Each time a change is made in such a class, there is a chance that subclasses extending the class will break. This is not just a theoretical problem.It is not uncommon to receive subclassing-related bug reports after modifying the internals of a nonfinal concrete class that was not designed and documented for inheritance.")]),e._v(" "),s("p",[e._v("但是普通的具体类呢？传统上，它们既不是最终的，也不是为子类化而设计和记录的，但这种状态是危险的。每当在这样的类中进行更改时，扩展类的子类就有可能中断。这不仅仅是一个理论问题。在修改未为继承而设计和记录文档的非最终具体类的内部结构后，接收与子类相关的 bug 报告并不罕见。")]),e._v(" "),s("p",[e._v("The best solution to this problem is to prohibit subclassing in classes that are not designed and documented to be safely subclassed. There are two ways to prohibit subclassing. The easier of the two is to declare the class final. The alternative is to make all the constructors private or package-private and to add public static factories in place of the constructors. This alternative, which provides the flexibility to use subclasses internally, is discussed in Item 17. Either approach is acceptable.")]),e._v(" "),s("p",[e._v("这个问题的最佳解决方案是禁止在没有设计和文档记录的类中进行子类化。有两种方法可以禁止子类化。两者中比较容易的是声明类 final。另一种方法是将所有构造函数变为私有或包私有，并在构造函数的位置添加公共静态工厂。这个替代方案提供了内部使用子类的灵活性，在 "),s("RouterLink",{attrs:{to:"/Chapter-4/Chapter-4-Item-17-Minimize-mutability.html"}},[e._v("Item-17")]),e._v(" 中进行了讨论。两种方法都可以接受。")],1),e._v(" "),s("p",[e._v("This advice may be somewhat controversial because many programmers have grown accustomed to subclassing ordinary concrete classes to add facilities such as instrumentation, notification, and synchronization or to limit functionality. If a class implements some interface that captures its essence, such as Set, List, or Map, then you should feel no compunction about prohibiting subclassing. The wrapper class pattern, described in Item 18, provides a superior alternative to inheritance for augmenting the functionality.")]),e._v(" "),s("p",[e._v("这个建议可能有点争议，因为许多程序员已经习惯了子类化普通的具体类，以添加工具、通知和同步等功能或限制功能。如果一个类实现了某个接口，该接口捕获了它的本质，例如 Set、List 或 Map，那么你不应该对禁止子类化感到内疚。在 "),s("RouterLink",{attrs:{to:"/Chapter-4/Chapter-4-Item-18-Favor-composition-over-inheritance.html"}},[e._v("Item-18")]),e._v(" 中描述的包装器类模式提供了一种优于继承的方法来增强功能。")],1),e._v(" "),s("p",[e._v("If a concrete class does not implement a standard interface, then you may inconvenience some programmers by prohibiting inheritance. If you feel that you must allow inheritance from such a class, one reasonable approach is to ensure that the class never invokes any of its overridable methods and to document this fact. In other words, eliminate the class’s self-use of overridable\nmethods entirely. In doing so, you’ll create a class that is reasonably safe to subclass. Overriding a method will never affect the behavior of any other method.")]),e._v(" "),s("p",[e._v("如果一个具体的类没有实现一个标准的接口，那么你可能会因为禁止继承而给一些程序员带来不便。如果你认为必须允许继承此类类，那么一种合理的方法是确保该类永远不会调用其任何可重写的方法，并记录这一事实。换句话说，消除类的自用 overridable")]),e._v(" "),s("p",[e._v("You can eliminate a class’s self-use of overridable methods mechanically, without changing its behavior. Move the body of each overridable method to a private “helper method” and have each overridable method invoke its private helper method. Then replace each self-use of an overridable method with a direct invocation of the overridable method’s private helper method.")]),e._v(" "),s("p",[e._v("你可以在不改变类行为的情况下，机械地消除类对可重写方法的自使用。将每个可覆盖方法的主体移动到一个私有的「助手方法」，并让每个可覆盖方法调用它的私有助手方法。然后，用可覆盖方法的私有助手方法的直接调用替换可覆盖方法的每个自使用。")]),e._v(" "),s("p",[e._v("In summary, designing a class for inheritance is hard work. You must document all of its self-use patterns, and once you’ve documented them, you must commit to them for the life of the class. If you fail to do this, subclasses may become dependent on implementation details of the superclass and may break if the implementation of the superclass changes. To allow others to write efficient subclasses, you may also have to export one or more protected methods.Unless you know there is a real need for subclasses, you are probably better off prohibiting inheritance by declaring your class final or ensuring that there are no accessible constructors.")]),e._v(" "),s("p",[e._v("总之，为继承设计一个类是一项艰苦的工作。你必须记录所有的自用模式，并且一旦你记录了它们，你就必须在整个类的生命周期中都遵守它们。如果没有这样做，子类可能会依赖于超类的实现细节，如果超类的实现发生变化，子类可能会崩溃。为了允许其他人编写高效的子类，你可能还需要导出一个或多个受保护的方法。除非你知道确实需要子类，否则最好通过声明类为 final 或确保没有可访问的构造函数的方式来禁止继承。")])])}),[],!1,null,null,null);t.default=a.exports}}]);