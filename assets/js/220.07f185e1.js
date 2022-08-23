(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{1539:function(e,t,a){"use strict";a.r(t);var n=a(65),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"chapter-6-enums-and-annotations-枚举和注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chapter-6-enums-and-annotations-枚举和注解"}},[e._v("#")]),e._v(" Chapter 6. Enums and Annotations（枚举和注解）")]),e._v(" "),a("h3",{attrs:{id:"item-40-consistently-use-the-override-annotation-坚持使用-override-注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#item-40-consistently-use-the-override-annotation-坚持使用-override-注解"}},[e._v("#")]),e._v(" Item 40: Consistently use the Override annotation（坚持使用 @Override 注解）")]),e._v(" "),a("p",[e._v("The Java libraries contain several annotation types. For the typical programmer, the most important of these is @Override. This annotation can be used only on method declarations, and it indicates that the annotated method declaration overrides a declaration in a supertype. If you consistently use this annotation, it will protect you from a large class of nefarious bugs. Consider this program, in which the class Bigram represents a bigram, or ordered pair of letters:")]),e._v(" "),a("p",[e._v("Java 库包含几种注解类型。对于大多数的程序员来说，其中最重要的是 "),a("code",[e._v("@Override")]),e._v("。此注解只能在方法声明上使用，带有该注解的方法声明将覆盖超类型中的声明。如果你坚持使用这个注解，它将帮助你减少受到有害错误的影响。考虑这个程序，其中类 Bigram 表示一个二元语法，或有序的字母对：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// Can you spot the bug?\npublic class Bigram {\n    private final char first;\n    private final char second;\n\n    public Bigram(char first, char second) {\n        this.first = first;\n        this.second = second;\n    }\n\n    public boolean equals(Bigram b) {\n        return b.first == first && b.second == second;\n    }\n\n    public int hashCode() {\n        return 31 * first + second;\n    }\n\n    public static void main(String[] args) {\n        Set<Bigram> s = new HashSet<>();\n\n        for (int i = 0; i < 10; i++)\n            for (char ch = 'a'; ch <= 'z'; ch++)\n                s.add(new Bigram(ch, ch));\n\n        System.out.println(s.size());\n    }\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br")])]),a("p",[e._v("The main program repeatedly adds twenty-six bigrams, each consisting of two identical lowercase letters, to a set. Then it prints the size of the set. You might expect the program to print 26, as sets cannot contain duplicates. If you try running the program, you’ll find that it prints not 26 but 260. What is wrong with it?")]),e._v(" "),a("p",[e._v("主程序重复地向一个集合中添加 26 个 bigram，每个 bigram 由两个相同的小写字母组成。然后它打印该集合的大小。如果你尝试运行该程序，你会发现它打印的不是 26 而是 260。有什么问题吗？")]),e._v(" "),a("p",[e._v("Clearly, the author of the Bigram class intended to override the equals method (Item 10) and even remembered to override hashCode in tandem (Item 11). Unfortunately, our hapless programmer failed to override equals, overloading it instead (Item 52). To override Object.equals, you must define an equals method whose parameter is of type Object, but the parameter of Bigram’s equals method is not of type Object, so Bigram inherits the equals method from Object. This equals method tests for object identity, just like the == operator. Each of the ten copies of each bigram is distinct from the other nine, so they are deemed unequal by Object.equals, which explains why the program prints 260.")]),e._v(" "),a("p",[e._v("显然，Bigram 类的作者打算覆盖 equals 方法，甚至还记得要一并覆盖 hashCode。不幸的是，我们的程序员没有覆盖 equals，而是重载了它。要覆盖 "),a("code",[e._v("Object.equals")]),e._v("，你必须定义一个 equals 方法，它的参数是 Object 类型的，但是 Bigram 的 equals 方法的参数不是 Object 类型的，所以 Bigram 从 Object 继承 equals 方法。这个继承来的 equals 方法只能检测对象同一性，就像 == 操作符一样。每 10 个 bigram 副本为一组，每组中的每个 bigram 副本都不同于其他 9 个，因此 "),a("code",[e._v("Object.equals")]),e._v(" 认为它们不相等，这就解释了为什么程序最终打印 260。")]),e._v(" "),a("p",[e._v("Luckily, the compiler can help you find this error, but only if you help it by telling it that you intend to override Object.equals. To do this, annotate Bigram.equals with @Override, as shown here:")]),e._v(" "),a("p",[e._v("幸运的是，编译器可以帮助你找到这个错误，但前提是你告诉它你打算覆盖 "),a("code",[e._v("Object.equals")]),e._v("。为此，请使用 "),a("code",[e._v("@Override")]),e._v(" 注解标记 "),a("code",[e._v("Bigram.equals")]),e._v("，如下所示：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("@Override\npublic boolean equals(Bigram b) {\n    return b.first == first && b.second == second;\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("If you insert this annotation and try to recompile the program, the compiler will generate an error message like this:")]),e._v(" "),a("p",[e._v("如果你插入此注解并尝试重新编译程序，编译器将生成如下错误消息：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Bigram.java:10: method does not override or implement a method from a supertype\n@Override public boolean equals(Bigram b) {\n^\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("You will immediately realize what you did wrong, slap yourself on the forehead, and replace the broken equals implementation with a correct one (Item 10):")]),e._v(" "),a("p",[e._v("你会立刻意识到自己做错了什么，拍拍自己的额头，用正确的方式替换不正确的 equals 实现：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("@Override\npublic boolean equals(Object o) {\n    if (!(o instanceof Bigram))\n        return false;\n    Bigram b = (Bigram) o;\n    return b.first == first && b.second == second;\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("p",[e._v("Therefore, you should "),a("strong",[e._v("use the Override annotation on every method declaration that you believe to override a superclass declaration.")]),e._v(" There is one minor exception to this rule. If you are writing a class that is not labeled abstract and you believe that it overrides an abstract method in its superclass, you needn’t bother putting the Override annotation on that method. In a class that is not declared abstract, the compiler will emit an error message if you fail to override an abstract superclass method. However, you might wish to draw attention to all of the methods in your class that override superclass methods, in which case you should feel free to annotate these methods too. Most IDEs can be set to insert Override annotations automatically when you elect to override a method.")]),e._v(" "),a("p",[e._v("因此，你应该在 "),a("strong",[e._v("要覆盖超类声明的每个方法声明上使用 @Override 注解。")]),e._v(" 这条规则有一个小小的例外。如果你正在编写一个没有标记为 abstract 的类，并且你认为它覆盖了其超类中的抽象方法，那么你不必费心在这些方法上添加 "),a("code",[e._v("@Override")]),e._v(" 注解。在未声明为抽象的类中，如果未能覆盖抽象超类方法，编译器将发出错误消息。但是，你可能希望让类中覆盖超类方法的所有方法更加引人注目，在这种情况下，你也可以自由选择是否注解这些方法。大多数 IDE 都可以设置为在选择覆盖方法时自动插入覆盖注解。")]),e._v(" "),a("p",[e._v("Most IDEs provide another reason to use the Override annotation consistently. If you enable the appropriate check, the IDE will generate a warning if you have a method that doesn’t have an Override annotation but does override a superclass method. If you use the Override annotation consistently, these warnings will alert you to unintentional overriding. They complement the compiler’s error messages, which alert you to unintentional failure to override. Between the IDE and the compiler, you can be sure that you’re overriding methods everywhere you want to and nowhere else.")]),e._v(" "),a("p",[e._v("大多数 IDE 都提供了一致使用 "),a("code",[e._v("@Override")]),e._v(" 注解的另一个原因。如果启用适当的检查，如果你的方法没有 "),a("code",[e._v("@Override")]),e._v(" 注解，但确实覆盖了超类方法，IDE 将生成警告。如果你一致地使用 "),a("code",[e._v("@Override")]),e._v(" 注解，这些警告将提醒你防止意外覆盖。它们补充编译器的错误消息，这些错误消息会警告你无意的覆盖错误。在 IDE 和编译器的帮助下，你可以确保在任何你想要实施覆盖的地方都覆盖了，而没有遗漏。")]),e._v(" "),a("p",[e._v("The Override annotation may be used on method declarations that override declarations from interfaces as well as classes. With the advent of default methods, it is good practice to use Override on concrete implementations of interface methods to ensure that the signature is correct. If you know that an interface does not have default methods, you may choose to omit Override annotations on concrete implementations of interface methods to reduce clutter.")]),e._v(" "),a("p",[a("code",[e._v("@Override")]),e._v(" 注解可用于覆盖接口和类声明的方法声明。随着默认方法的出现，最好对接口方法的具体实现使用 "),a("code",[e._v("@Override")]),e._v(" 来确保签名是正确的。如果你知道接口没有默认方法，你可以选择忽略接口方法的具体实现上的 "),a("code",[e._v("@Override")]),e._v(" 注解，以减少混乱。")]),e._v(" "),a("p",[e._v("In an abstract class or an interface, however, it is worth annotating all methods that you believe to override superclass or superinterface methods, whether concrete or abstract. For example, the Set interface adds no new methods to the Collection interface, so it should include Override annotations on all of its method declarations to ensure that it does not accidentally add any new methods to the Collection interface.")]),e._v(" "),a("p",[e._v("然而，在抽象类或接口中，标记覆盖超类或超接口方法的所有方法是值得的，无论是具体的还是抽象的。例如，Set 接口不会向 Collection 接口添加任何新方法，因此它的所有方法声明的应该包含 "),a("code",[e._v("@Override")]),e._v(" 注解，以确保它不会意外地向 Collection 接口添加任何新方法。")]),e._v(" "),a("p",[e._v("In summary, the compiler can protect you from a great many errors if you use the Override annotation on every method declaration that you believe to override a supertype declaration, with one exception. In concrete classes, you need not annotate methods that you believe to override abstract method declarations (though it is not harmful to do so).")]),e._v(" "),a("p",[e._v("总之，如果你在每个方法声明上都使用 "),a("code",[e._v("@Override")]),e._v(" 注解来覆盖超类型声明（只有一个例外），那么编译器可以帮助你减少受到有害错误的影响。在具体类中，可以不对覆盖抽象方法声明的方法使用该注解（即使这么做也并不会有害）。")])])}),[],!1,null,null,null);t.default=s.exports}}]);