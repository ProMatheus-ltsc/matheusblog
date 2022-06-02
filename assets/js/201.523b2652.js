(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{1481:function(e,n,a){"use strict";a.r(n);var t=a(24),s=Object(t.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"chapter-5-generics-泛型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chapter-5-generics-泛型"}},[e._v("#")]),e._v(" Chapter 5. Generics（泛型）")]),e._v(" "),a("h3",{attrs:{id:"item-27-eliminate-unchecked-warnings-消除-unchecked-警告"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#item-27-eliminate-unchecked-warnings-消除-unchecked-警告"}},[e._v("#")]),e._v(" Item 27: Eliminate unchecked warnings（消除 unchecked 警告）")]),e._v(" "),a("p",[e._v("When you program with generics, you will see many compiler warnings: unchecked cast warnings, unchecked method invocation warnings, unchecked parameterized vararg type warnings, and unchecked conversion warnings. The more experience you acquire with generics, the fewer warnings you’ll get, but don’t expect newly written code to compile cleanly.")]),e._v(" "),a("p",[e._v("当你使用泛型编程时，你将看到许多编译器警告：unchecked 强制转换警告、unchecked 方法调用警告、unchecked 可变参数类型警告和 unchecked 自动转换警告。使用泛型的经验越丰富，遇到的警告就越少，但是不要期望新编写的代码能够完全正确地编译。")]),e._v(" "),a("p",[e._v("Many unchecked warnings are easy to eliminate. For example, suppose you accidentally write this declaration:")]),e._v(" "),a("p",[e._v("许多 unchecked 警告很容易消除。例如，假设你不小心写了这个声明：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Set<Lark> exaltation = new HashSet();\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("The compiler will gently remind you what you did wrong:")]),e._v(" "),a("p",[e._v("编译器会精确地提醒你做错了什么：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Venery.java:4: warning: [unchecked] unchecked conversion\nSet<Lark> exaltation = new HashSet();\n^ required: Set<Lark>\nfound: HashSet\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("You can then make the indicated correction, causing the warning to disappear. Note that you don’t actually have to specify the type parameter, merely to indicate that it’s present with the diamond operator (<>), introduced in Java 7. The compiler will then infer the correct actual type parameter (in this case, Lark):")]),e._v(" "),a("p",[e._v("你可以在指定位置进行更正，使警告消失。注意，你实际上不必指定类型参数，只需给出由 Java 7 中引入的 diamond 操作符（<>）。然后编译器将推断出正确的实际类型参数（在本例中为 Lark）：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Set<Lark> exaltation = new HashSet<>();\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Some warnings will be much more difficult to eliminate. This chapter is filled with examples of such warnings. When you get warnings that require some thought, persevere! "),a("strong",[e._v("Eliminate every unchecked warning that you can.")]),e._v(" If you eliminate all warnings, you are assured that your code is typesafe, which is a very good thing. It means that you won’t get a ClassCastException at runtime, and it increases your confidence that your program will behave as you intended.")]),e._v(" "),a("p",[e._v("一些警告会更难消除。这一章充满这类警告的例子。当你收到需要认真思考的警告时，坚持下去！"),a("strong",[e._v("力求消除所有 unchecked 警告。")]),e._v(" 如果你消除了所有警告，你就可以确信你的代码是类型安全的，这是一件非常好的事情。这意味着你在运行时不会得到 ClassCastException，它增加了你的信心，你的程序将按照预期的方式运行。")]),e._v(" "),a("p",[a("strong",[e._v('If you can’t eliminate a warning, but you can prove that the code that provoked the warning is typesafe, then (and only then) suppress the warning with an @SuppressWarnings("unchecked") annotation.')]),e._v(" If you suppress warnings without first proving that the code is typesafe, you are giving yourself a false sense of security. The code may compile without emitting any warnings, but it can still throw a ClassCastException at runtime. If, however, you ignore unchecked warnings that you know to be safe (instead of suppressing them), you won’t notice when a new warning crops up that represents a real problem. The new warning will get lost amidst all the false alarms that you didn’t silence.")]),e._v(" "),a("p",[a("strong",[e._v('如果不能消除警告，但是可以证明引发警告的代码是类型安全的，那么（并且只有在那时）使用 SuppressWarnings("unchecked") 注解来抑制警告。')]),e._v(" 如果你在没有首先证明代码是类型安全的情况下禁止警告，那么你是在给自己一种错误的安全感。代码可以在不发出任何警告的情况下编译，但它仍然可以在运行时抛出 ClassCastException。但是，如果你忽略了你知道是安全的 unchecked 警告（而不是抑制它们），那么当出现一个代表真正问题的新警告时，你将不会注意到。新出现的警告就会淹设在所有的错误警告当中。")]),e._v(" "),a("p",[e._v("The SuppressWarnings annotation can be used on any declaration, from an individual local variable declaration to an entire class. "),a("strong",[e._v("Always use the SuppressWarnings annotation on the smallest scope possible.")]),e._v(" Typically this will be a variable declaration or a very short method or constructor. Never use SuppressWarnings on an entire class. Doing so could mask critical warnings.")]),e._v(" "),a("p",[e._v("SuppressWarnings 注解可以用于任何声明中，从单个局部变量声明到整个类。"),a("strong",[e._v("总是在尽可能小的范围上使用 SuppressWarnings 注解。")]),e._v(" 通常用在一个变量声明或一个非常短的方法或构造函数。不要在整个类中使用 SuppressWarnings。这样做可能会掩盖关键警告。")]),e._v(" "),a("p",[e._v("If you find yourself using the SuppressWarnings annotation on a method or constructor that’s more than one line long, you may be able to move it onto a local variable declaration. You may have to declare a new local variable, but it’s worth it. For example, consider this toArray method, which comes from ArrayList:")]),e._v(" "),a("p",[e._v("如果你发现自己在一个超过一行的方法或构造函数上使用 SuppressWarnings 注解，那么你可以将其移动到局部变量声明中。你可能需要声明一个新的局部变量，但这是值得的。例如，考虑这个 toArray 方法，它来自 ArrayList：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("public <T> T[] toArray(T[] a) {\n    if (a.length < size)\n        return (T[]) Arrays.copyOf(elements, size, a.getClass());\n    System.arraycopy(elements, 0, a, 0, size);\n    if (a.length > size)\n        a[size] = null;\n    return a;\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("p",[e._v("If you compile ArrayList, the method generates this warning:")]),e._v(" "),a("p",[e._v("如果你编译 ArrayList，这个方法会产生这样的警告：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ArrayList.java:305: warning: [unchecked] unchecked cast\nreturn (T[]) Arrays.copyOf(elements, size, a.getClass());\n^ required: T[]\nfound: Object[]\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("It is illegal to put a SuppressWarnings annotation on the return statement, because it isn’t a declaration [JLS, 9.7]. You might be tempted to put the annotation on the entire method, but don’t. Instead, declare a local variable to hold the return value and annotate its declaration, like so:")]),e._v(" "),a("p",[e._v("将 SuppressWarnings 注释放在 return 语句上是非法的，因为它不是声明 [JLS, 9.7]。你可能想把注释放在整个方法上，但是不要这样做。相反，应该声明一个局部变量来保存返回值并添加注解，如下所示：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// Adding local variable to reduce scope of @SuppressWarnings\npublic <T> T[] toArray(T[] a) {\n    if (a.length < size) {\n        // This cast is correct because the array we\'re creating\n        // is of the same type as the one passed in, which is T[].\n        @SuppressWarnings("unchecked") T[] result = (T[]) Arrays.copyOf(elements, size, a.getClass());\n        return result;\n    }\n    System.arraycopy(elements, 0, a, 0, size);\n    if (a.length > size)\n        a[size] = null;\n    return a;\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br")])]),a("p",[e._v("The resulting method compiles cleanly and minimizes the scope in which unchecked warnings are suppressed.")]),e._v(" "),a("p",[e._v("生成的方法编译正确，并将抑制 unchecked 警告的范围减到最小。")]),e._v(" "),a("p",[a("strong",[e._v('Every time you use a @SuppressWarnings("unchecked") annotation, add a comment saying why it is safe to do so.')]),e._v(" This will help others understand the code, and more importantly, it will decrease the odds that someone will modify the code so as to make the computation unsafe. If you find it hard to write such a comment, keep thinking. You may end up figuring out that the unchecked operation isn’t safe after all.")]),e._v(" "),a("p",[a("strong",[e._v('每次使用 SuppressWarnings("unchecked") 注解时，要添加一条注释，说明这样做是安全的。')]),e._v(" 这将帮助他人理解代码，更重要的是，它将降低其他人修改代码而产生不安全事件的几率。如果你觉得写这样的注释很难，那就继续思考合适的方式。你最终可能会发现，unchecked 操作毕竟是不安全的。")]),e._v(" "),a("p",[e._v('In summary, unchecked warnings are important. Don’t ignore them. Every unchecked warning represents the potential for a ClassCastException at runtime. Do your best to eliminate these warnings. If you can’t eliminate an unchecked warning and you can prove that the code that provoked it is typesafe, suppress the warning with a @SuppressWarnings("unchecked") annotation in the narrowest possible scope. Record the rationale for your decision to suppress the warning in a comment.')]),e._v(" "),a("p",[e._v('总之，unchecked 警告很重要。不要忽视他们。每个 unchecked 警告都代表了在运行时发生 ClassCastException 的可能性。尽最大努力消除这些警告。如果不能消除 unchecked 警告，并且可以证明引发该警告的代码是类型安全的，那么可以在尽可能狭窄的范围内使用 @SuppressWarnings("unchecked") 注释来禁止警告。在注释中记录你决定隐藏警告的理由。')])])}),[],!1,null,null,null);n.default=s.exports}}]);