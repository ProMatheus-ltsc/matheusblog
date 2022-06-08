(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{1551:function(e,t,a){"use strict";a.r(t);var n=a(65),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"chapter-8-methods-方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chapter-8-methods-方法"}},[e._v("#")]),e._v(" Chapter 8. Methods（方法）")]),e._v(" "),a("h3",{attrs:{id:"item-55-return-optionals-judiciously-明智地的返回-optional"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#item-55-return-optionals-judiciously-明智地的返回-optional"}},[e._v("#")]),e._v(" Item 55: Return optionals judiciously（明智地的返回 Optional）")]),e._v(" "),a("p",[e._v("Prior to Java 8, there were two approaches you could take when writing a method that was unable to return a value under certain circumstances. Either you could throw an exception, or you could return null (assuming the return type was an object reference type). Neither of these approaches is perfect. Exceptions should be reserved for exceptional conditions (Item 69), and throwing an exception is expensive because the entire stack trace is captured when an exception is created. Returning null doesn’t have these shortcomings, but it has its own. If a method returns null, clients must contain special-case code to deal with the possibility of a null return, unless the programmer can prove that a null return is impossible. If a client neglects to check for a null return and stores a null return value away in some data structure, a NullPointerException may result at some arbitrary time in the future, at some place in the code that has nothing to do with the problem.")]),e._v(" "),a("p",[e._v("在 Java 8 之前，在编写在某些情况下无法返回值的方法时，可以采用两种方法。要么抛出异常，要么返回 null（假设返回类型是对象引用类型）。这两种方法都不完美。应该为异常条件保留异常（"),a("RouterLink",{attrs:{to:"/Chapter-10/Chapter-10-Item-69-Use-exceptions-only-for-exceptional-conditions.html"}},[e._v("Item-69")]),e._v("），并且抛出异常代价高昂，因为在创建异常时捕获整个堆栈跟踪。返回 null 没有这些缺点，但是它有自己的缺点。如果方法返回 null，客户端必须包含特殊情况代码来处理 null 返回的可能性，除非程序员能够证明 null 返回是不可能的。如果客户端忽略检查 null 返回并将 null 返回值存储在某个数据结构中，那么 NullPointerException 可能会在将来的某个时间，在代码中的某个与该问题无关的位置产生。")],1),e._v(" "),a("p",[e._v("In Java 8, there is a third approach to writing methods that may not be able to return a value. The "),a("code",[e._v("Optional<T>")]),e._v(" class represents an immutable container that can hold either a single non-null T reference or nothing at all. An optional that contains nothing is said to be empty. A value is said to be present in an optional that is not empty. An optional is essentially an immutable collection that can hold at most one element. "),a("code",[e._v("Optional<T>")]),e._v(" does not implement "),a("code",[e._v("Collection<T>")]),e._v(", but it could in principle.")]),e._v(" "),a("p",[e._v("在 Java 8 中，还有第三种方法来编写可能无法返回值的方法。"),a("code",[e._v("Optional<T>")]),e._v(" 类表示一个不可变的容器，它可以包含一个非空的 T 引用，也可以什么都不包含。不包含任何内容的 Optional 被称为空。一个值被认为存在于一个非空的 Optional 中。Optional 的本质上是一个不可变的集合，它最多可以容纳一个元素。"),a("code",[e._v("Optional<T>")]),e._v(" 不实现 "),a("code",[e._v("Collection<T>")]),e._v("，但原则上可以。")]),e._v(" "),a("p",[e._v("A method that conceptually returns a T but may be unable to do so under certain circumstances can instead be declared to return an "),a("code",[e._v("Optional<T>")]),e._v(". This allows the method to return an empty result to indicate that it couldn’t return a valid result. An Optional-returning method is more flexible and easier to use than one that throws an exception, and it is less error-prone than one that returns null.")]),e._v(" "),a("p",[e._v("理论上应返回 T，但在某些情况下可能无法返回 T 的方法可以将返回值声明为 "),a("code",[e._v("Optional<T>")]),e._v("。这允许该方法返回一个空结果来表明它不能返回有效的结果。具备 Optional 返回值的方法比抛出异常的方法更灵活、更容易使用，并且比返回 null 的方法更不容易出错。")]),e._v(" "),a("p",[e._v("In Item 30, we showed this method to calculate the maximum value in a collection, according to its elements’ natural order.")]),e._v(" "),a("p",[e._v("在 "),a("RouterLink",{attrs:{to:"/Chapter-5/Chapter-5-Item-30-Favor-generic-methods.html"}},[e._v("Item-30")]),e._v(" 中，我们展示了根据集合元素的自然顺序计算集合最大值的方法。")],1),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// Returns maximum value in collection - throws exception if empty\npublic static <E extends Comparable<E>> E max(Collection<E> c) {\n    if (c.isEmpty())\n        throw new IllegalArgumentException("Empty collection");\n    E result = null;\n    for (E e : c)\n        if (result == null || e.compareTo(result) > 0)\n    result = Objects.requireNonNull(e);\n    return result;\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br")])]),a("p",[e._v("This method throws an IllegalArgumentException if the given collection is empty. We mentioned in Item 30 that a better alternative would be to return "),a("code",[e._v("Optional<E>")]),e._v(". Here’s how the method looks when it is modified to do so:")]),e._v(" "),a("p",[e._v("如果给定集合为空，此方法将抛出 IllegalArgumentException。我们在 "),a("RouterLink",{attrs:{to:"/Chapter-5/Chapter-5-Item-30-Favor-generic-methods.html"}},[e._v("Item-30")]),e._v(" 中提到，更好的替代方法是返回 "),a("code",[e._v("Optional<E>")]),e._v("。")],1),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// Returns maximum value in collection as an Optional<E>\npublic static <E extends Comparable<E>> Optional<E> max(Collection<E> c) {\n    if (c.isEmpty())\n        return Optional.empty();\n    E result = null;\n    for (E e : c)\n        if (result == null || e.compareTo(result) > 0)\n    result = Objects.requireNonNull(e);\n    return Optional.of(result);\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br")])]),a("p",[e._v("As you can see, it is straightforward to return an optional. All you have to do is to create the optional with the appropriate static factory. In this program, we use two: Optional.empty() returns an empty optional, and Optional.of(value) returns an optional containing the given non-null value. It is a programming error to pass null to Optional.of(value). If you do this, the method responds by throwing a NullPointerException. The Optional.ofNullable(value) method accepts a possibly null value and returns an empty optional if null is passed in. "),a("strong",[e._v("Never return a null value from an Optional-returning method:")]),e._v(" it defeats the entire purpose of the facility.")]),e._v(" "),a("p",[e._v("如你所见，返回一个 Optional 是很简单的。你所要做的就是使用适当的静态工厂创建。在这个程序中，我们使用了两个静态工厂："),a("code",[e._v("Optional.empty()")]),e._v(" 返回一个空的 Optional，"),a("code",[e._v("Optional.of(value)")]),e._v(" 返回一个包含给定非空值的可选值。将 null 传递给 "),a("code",[e._v("Optional.of(value)")]),e._v(" 是一个编程错误。如果你这样做，该方法将通过抛出 NullPointerException 来响应。"),a("code",[e._v("Optional.ofNullable(value)")]),e._v(" 方法接受一个可能为空的值，如果传入 null，则返回一个空的 Optional。"),a("strong",[e._v("永远不要从具备 Optional 返回值的方法返回空值:")]),e._v(" 它违背了这个功能的设计初衷。")]),e._v(" "),a("p",[e._v("Many terminal operations on streams return optionals. If we rewrite the max method to use a stream, Stream’s max operation does the work of generating an optional for us (though we do have to pass in an explicit comparator):")]),e._v(" "),a("p",[e._v("许多流上的 Terminal 操作返回 Optional。如果我们使用一个流来重写 max 方法，那么流版本的 max 操作会为我们生成一个 Optional（尽管我们必须传递一个显式的 comparator）：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// Returns max val in collection as Optional<E> - uses stream\npublic static <E extends Comparable<E>> Optional<E> max(Collection<E> c) {\n    return c.stream().max(Comparator.naturalOrder());\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("So how do you choose to return an optional instead of returning a null or throwing an exception? Optionals are similar in spirit to checked exceptions (Item 71), in that they force the user of an API to confront the fact that there may be no value returned. Throwing an unchecked exception or returning a null allows the user to ignore this eventuality, with potentially dire consequences. However, throwing a checked exception requires additional boilerplate code in the client.")]),e._v(" "),a("p",[e._v("那么，如何选择是返回 Optional 而不是返回 null 或抛出异常呢？Optional 在本质上类似于已检查异常（"),a("RouterLink",{attrs:{to:"/Chapter-10/Chapter-10-Item-71-Avoid-unnecessary-use-of-checked-exceptions.html"}},[e._v("Item-71")]),e._v("），因为它们迫使 API 的用户面对可能没有返回值的事实。抛出未检查的异常或返回 null 允许用户忽略这种可能性，从而带来潜在的可怕后果。但是，抛出一个已检查的异常需要在客户端中添加额外的样板代码。")],1),e._v(" "),a("p",[e._v("If a method returns an optional, the client gets to choose what action to take if the method can’t return a value. You can specify a default value:")]),e._v(" "),a("p",[e._v("如果一个方法返回一个 Optional，客户端可以选择如果该方法不能返回值该采取什么操作。你可以指定一个默认值：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// Using an optional to provide a chosen default value\nString lastWordInLexicon = max(words).orElse("No words...");\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("or you can throw any exception that is appropriate. Note that we pass in an exception factory rather than an actual exception. This avoids the expense of creating the exception unless it will actually be thrown:")]),e._v(" "),a("p",[e._v("或者你可以抛出任何适当的异常。注意，我们传递的是异常工厂，而不是实际的异常。这避免了创建异常的开销，除非它实际被抛出：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// Using an optional to throw a chosen exception\nToy myToy = max(toys).orElseThrow(TemperTantrumException::new);\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("If you can prove that an optional is nonempty, you can get the value from the optional without specifying an action to take if the optional is empty, but if you’re wrong, your code will throw a NoSuchElementException:")]),e._v(" "),a("p",[e._v("如果你能证明一个 Optional 非空，你可以从 Optional 获取值，而不需要指定一个操作来执行，如果 Optional 是空的，但是如果你错了，你的代码会抛出一个 NoSuchElementException：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// Using optional when you know there’s a return value\nElement lastNobleGas = max(Elements.NOBLE_GASES).get();\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("Occasionally you may be faced with a situation where it’s expensive to get the default value, and you want to avoid that cost unless it’s necessary. For these situations, Optional provides a method that takes a "),a("code",[e._v("Supplier<T>")]),e._v(" and invokes it only when necessary. This method is called orElseGet, but perhaps it should have been called orElseCompute because it is closely related to the three Map methods whose names begin with compute. There are several Optional methods for dealing with more specialized use cases: filter, map, flatMap, and ifPresent. In Java 9, two more of these methods were added: or and ifPresentOrElse. If the basic methods described above aren’t a good match for your use case, look at the documentation for these more advanced methods and see if they do the job.")]),e._v(" "),a("p",[e._v("有时候，你可能会遇到这样一种情况：获取默认值的代价很高，除非必要，否则你希望避免这种代价。对于这些情况，Optional 提供了一个方法，该方法接受 "),a("code",[e._v("Supplier<T>")]),e._v("，并仅在必要时调用它。这个方法被称为 orElseGet，但是它可能应该被称为 orElseCompute，因为它与以 compute 开头的三个 Map 方法密切相关。有几个 Optional 的方法来处理更特殊的用例：filter、map、flatMap 和 ifPresent。在 Java 9 中，又添加了两个这样的方法：or 和 ifPresentOrElse。如果上面描述的基本方法与你的实例不太匹配，请查看这些更高级方法的文档，确认它们是否能够完成任务。")]),e._v(" "),a("p",[e._v("In case none of these methods meets your needs, Optional provides the isPresent() method, which may be viewed as a safety valve. It returns true if the optional contains a value, false if it’s empty. You can use this method to perform any processing you like on an optional result, but make sure to use it wisely. Many uses of isPresent can profitably be replaced by one of the methods mentioned above. The resulting code will typically be shorter, clearer, and more idiomatic.")]),e._v(" "),a("p",[e._v("如果这些方法都不能满足你的需要，Optional 提供 "),a("code",[e._v("isPresent()")]),e._v(" 方法，可以将其视为安全阀。如果 Optional 包含值，则返回 true；如果为空，则返回 false。你可以使用此方法对 Optional 结果执行任何你希望进行的处理，但请确保明智地使用它。"),a("code",[e._v("isPresent()")]),e._v(" 的许多用途都可以被上面提到的方法所替代，如此生成的代码可以更短、更清晰、更符合习惯。")]),e._v(" "),a("p",[e._v("For example, consider this code snippet, which prints the process ID of the parent of a process, or N/A if the process has no parent. The snippet uses the ProcessHandle class, introduced in Java 9:")]),e._v(" "),a("p",[e._v("例如，考虑这段代码，它打印一个进程的父进程的 ID，如果进程没有父进程，则打印 N/A。该代码段使用了在 Java 9 中引入的 ProcessHandle 类：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('Optional<ProcessHandle> parentProcess = ph.parent();\nSystem.out.println("Parent PID: " + (parentProcess.isPresent() ?\nString.valueOf(parentProcess.get().pid()) : "N/A"));\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("The code snippet above can be replaced by this one, which uses Optional’s map function:")]),e._v(" "),a("p",[e._v("上面的代码片段可以替换为如下形式，它使用了 Optional 的 map 函数：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('System.out.println("Parent PID: " + ph.parent().map(h -> String.valueOf(h.pid())).orElse("N/A"));\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("When programming with streams, it is not uncommon to find yourself with a "),a("code",[e._v("Stream<Optional<T>>")]),e._v(" and to require a "),a("code",[e._v("Stream<T>")]),e._v(" containing all the elements in the nonempty optionals in order to proceed. If you’re using Java 8, here’s how to bridge the gap:")]),e._v(" "),a("p",[e._v("当使用流进行编程时，通常会发现你经常使用 "),a("code",[e._v("Stream<Optional<T>>")]),e._v("，并且需要一个 "),a("code",[e._v("Stream<T>")]),e._v("，其中包含非空 Optional 中的所有元素，以便继续。如果你正在使用 Java 8，下面的语句演示了如何弥补这个不足：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("streamOfOptionals.filter(Optional::isPresent).map(Optional::get)\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("In Java 9, Optional was outfitted with a stream() method. This method is an adapter that turns an Optional into a Stream containing an element if one is present in the optional, or none if it is empty. In conjunction with Stream’s flatMap method (Item 45), this method provides a concise replacement for the code snippet above:")]),e._v(" "),a("p",[e._v("在 Java 9 中，Optional 配备了一个 "),a("code",[e._v("stream()")]),e._v(" 方法。这个方法是一个适配器，它将一个 Optional 元素转换成一个包含元素的流（如果一个元素出现在 Optional 元素中），如果一个元素是空的，则一个元素都没有。与 Stream 的 flatMap 方法（"),a("RouterLink",{attrs:{to:"/Chapter-7/Chapter-7-Item-45-Use-streams-judiciously.html"}},[e._v("Item-45")]),e._v("）相结合，这个方法为上面的代码段提供了一个简洁的替换版本：")],1),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("streamOfOptionals..flatMap(Optional::stream)\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Not all return types benefit from the optional treatment. "),a("strong",[e._v("Container types, including collections, maps, streams, arrays, and optionals should not be wrapped in optionals.")]),e._v(" Rather than returning an empty "),a("code",[e._v("Optional<List<T>>")]),e._v(", you should simply return an empty "),a("code",[e._v("List<T>")]),e._v(" (Item 54). Returning the empty container will eliminate the need for client code to process an optional. The ProcessHandle class does have the arguments method, which returns "),a("code",[e._v("Optional<String[]>")]),e._v(", but this method should be regarded as an anomaly that is not to be emulated.")]),e._v(" "),a("p",[e._v("并不是所有的返回类型都能从 Optional 处理中获益。"),a("strong",[e._v("容器类型，包括集合、Map、流、数组和 Optional，不应该封装在 Optional 中。")]),e._v(" 你应该简单的返回一个空的 "),a("code",[e._v("List<T>")]),e._v("，而不是一个空的 "),a("code",[e._v("Optional<List<T>>")]),e._v("（"),a("RouterLink",{attrs:{to:"/Chapter-8/Chapter-8-Item-54-Return-empty-collections-or-arrays-not-nulls.html"}},[e._v("Item-54")]),e._v("）。返回空容器将消除客户端代码处理 Optional 容器的需要。ProcessHandle 类确实有 arguments 方法，它返回 "),a("code",[e._v("Optional<String[]>")]),e._v("，但是这个方法应该被视为一种特例，不应该被仿效。")],1),e._v(" "),a("p",[e._v("So when should you declare a method to return "),a("code",[e._v("Optional<T>")]),e._v(" rather than T? As a rule, "),a("strong",[e._v("you should declare a method to return "),a("code",[e._v("Optional<T>")]),e._v(" if it might not be able to return a result and clients will have to perform special processing if no result is returned.")]),e._v(" That said, returning an "),a("code",[e._v("Optional<T>")]),e._v(" is not without cost. An Optional is an object that has to be allocated and initialized, and reading the value out of the optional requires an extra indirection. This makes optionals inappropriate for use in some performance-critical situations. Whether a particular method falls into this category can only be determined by careful measurement (Item 67).")]),e._v(" "),a("p",[e._v("那么，什么时候应该声明一个方法来返回 "),a("code",[e._v("Optional<T>")]),e._v(" 而不是 T 呢？作为规则，"),a("strong",[e._v("你应该声明一个方法来返回 "),a("code",[e._v("Optional<T>")]),e._v("（如果它可能无法返回结果），如果没有返回结果，客户端将不得不执行特殊处理。")]),e._v(" 也就是说，返回 "),a("code",[e._v("Optional<T>")]),e._v(" 并不是没有代价的。Optional 对象必须分配和初始化，从 Optional 对象中读取值需要额外的间接操作。这使得 Optional 不适合在某些性能关键的情况下使用。某一特定方法是否属于这一情况只能通过仔细衡量来确定（"),a("RouterLink",{attrs:{to:"/Chapter-9/Chapter-9-Item-67-Optimize-judiciously.html"}},[e._v("Item-67")]),e._v("）。")],1),e._v(" "),a("p",[e._v("Returning an optional that contains a boxed primitive type is prohibitively expensive compared to returning a primitive type because the optional has two levels of boxing instead of zero. Therefore, the library designers saw fit to provide analogues of "),a("code",[e._v("Optional<T>")]),e._v(" for the primitive types int, long, and double. These optional types are OptionalInt, OptionalLong, and OptionalDouble. They contain most, but not all, of the methods on "),a("code",[e._v("Optional<T>")]),e._v(". Therefore, "),a("strong",[e._v("you should never return an optional of a boxed primitive type,")]),e._v(" with the possible exception of the “minor primitive types,” Boolean, Byte, Character, Short, and Float.")]),e._v(" "),a("p",[e._v("与返回基本数据类型相比，返回包含包装类的 Optional 类型的代价高得惊人，因为 Optional 类型有两个装箱级别，而不是零。因此，库设计人员认为应该为基本类型 int、long 和 double 提供类似的 "),a("code",[e._v("Optional<T>")]),e._v("。这些可选类型是 OptionalInt、OptionalLong 和 OptionalDouble。它们包含 "),a("code",[e._v("Optional<T>")]),e._v(" 上的大多数方法，但不是所有方法。因此，"),a("strong",[e._v("永远不应该返包装类的 Optional")]),e._v("，可能除了「次基本数据类型」，如 Boolean、Byte、Character、Short 和 Float 之外。")]),e._v(" "),a("p",[e._v("Thus far, we have discussed returning optionals and processing them after they are returned. We have not discussed other possible uses, and that is because most other uses of optionals are suspect. For example, you should never use optionals as map values. If you do, you have two ways of expressing a key’s logical absence from the map: either the key can be absent from the map, or it can be present and map to an empty optional. This represents needless complexity with great potential for confusion and errors. More generally, "),a("strong",[e._v("it is almost never appropriate to use an optional as a key, value, or element in a collection or array.")])]),e._v(" "),a("p",[e._v("到目前为止，我们已经讨论了返回 Optional 并在返回后如何处理它们。我们还没有讨论其他可能的用法，这是因为大多数其他 Optional 用法都是值得疑的。例如，永远不要将 Optional 用作 Map 的值。如果这样做，则有两种方法可以表示键在 Map 中逻辑上的缺失：键可以不在 Map 中，也可以存在并映射到空的 Optional。这代表了不必要的复杂性，很有可能导致混淆和错误。更一般地说，"),a("strong",[e._v("在集合或数组中使用 Optional 作为键、值或元素几乎都是不合适的。")])]),e._v(" "),a("p",[e._v("This leaves a big question unanswered. Is it ever appropriate to store an optional in an instance field? Often it’s a “bad smell”: it suggests that perhaps you should have a subclass containing the optional fields. But sometimes it may be justified. Consider the case of our NutritionFacts class in Item 2. A NutritionFacts instance contains many fields that are not required. You can’t have a subclass for every possible combination of these fields. Also, the fields have primitive types, which make it awkward to express absence directly. The best API for NutritionFacts would return an optional from the getter for each optional field, so it makes good sense to simply store those optionals as fields in the object.")]),e._v(" "),a("p",[e._v("这留下了一个悬而未决的大问题。在实例字段中存储 Optional 字段是否合适？通常这是一种「代码中的不良习惯」：建议你可能应该有一个包含 Optional 字段的子类。但有时这可能是合理的。考虑 "),a("RouterLink",{attrs:{to:"/Chapter-2/Chapter-2-Item-2-Consider-a-builder-when-faced-with-many-constructor-parameters.html"}},[e._v("Item-2")]),e._v(" 中的 NutritionFacts 类的情况。NutritionFacts 实例包含许多不需要的字段。不能为这些字段的所有可能组合提供子类。此外，字段具有原始类型，这使得直接表示缺少非常困难。对于 NutritionFacts 最好的 API 将为每个可选字段从 getter 返回一个 Optional，因此将这些 Optional 作为字段存储在对象中是很有意义的。")],1),e._v(" "),a("p",[e._v("In summary, if you find yourself writing a method that can’t always return a value and you believe it is important that users of the method consider this possibility every time they call it, then you should probably return an optional. You should, however, be aware that there are real performance consequences associated with returning optionals; for performance-critical methods, it may be better to return a null or throw an exception. Finally, you should rarely use an optional in any other capacity than as a return value.")]),e._v(" "),a("p",[e._v("总之，如果你发现自己编写的方法不能总是返回确定值，并且你认为该方法的用户在每次调用时应该考虑这种可能性，那么你可能应该让方法返回一个 Optional。但是，你应该意识到，返回 Optional 会带来实际的性能后果；对于性能关键的方法，最好返回 null 或抛出异常。最后，除了作为返回值之外，你几乎不应该以任何其他方式使用 Optional。")])])}),[],!1,null,null,null);t.default=o.exports}}]);