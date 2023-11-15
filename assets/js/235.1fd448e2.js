(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{1583:function(e,a,t){"use strict";t.r(a);var s=t(65),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"chapter-8-methods-方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chapter-8-methods-方法"}},[e._v("#")]),e._v(" Chapter 8. Methods（方法）")]),e._v(" "),t("h3",{attrs:{id:"item-53-use-varargs-judiciously-明智地使用可变参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#item-53-use-varargs-judiciously-明智地使用可变参数"}},[e._v("#")]),e._v(" Item 53: Use varargs judiciously（明智地使用可变参数）")]),e._v(" "),t("p",[e._v("Varargs methods, formally known as variable arity methods [JLS, 8.4.1], accept zero or more arguments of a specified type. The varargs facility works by first creating an array whose size is the number of arguments passed at the call site, then putting the argument values into the array, and finally passing the array to the method.")]),e._v(" "),t("p",[e._v("可变参数方法的正式名称是 variable arity methods [JLS, 8.4.1]，它接受指定类型的零个或多个参数。可变参数首先创建一个数组，其大小是在调用点上传递的参数数量，然后将参数值放入数组，最后将数组传递给方法。")]),e._v(" "),t("p",[e._v("For example, here is a varargs method that takes a sequence of int arguments and returns their sum. As you would expect, the value of sum(1, 2, 3) is 6, and the value of sum() is 0:")]),e._v(" "),t("p",[e._v("例如，这里有一个可变参数方法，它接受一系列 int 参数并返回它们的和。如你所料，"),t("code",[e._v("sum(1, 2, 3)")]),e._v(" 的值为 6，"),t("code",[e._v("sum()")]),e._v(" 的值为 0：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// Simple use of varargs\nstatic int sum(int... args) {\n    int sum = 0;\n    for (int arg : args)\n        sum += arg;\n    return sum;\n}\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])]),t("p",[e._v("Sometimes it’s appropriate to write a method that requires one or more arguments of some type, rather than zero or more. For example, suppose you want to write a function that computes the minimum of its arguments. This function is not well defined if the client passes no arguments. You could check the array length at runtime:")]),e._v(" "),t("p",[e._v("有时，编写一个方法需要一个或多个某种类型的参数，而不是零个或多个参数，这是合适的。例如，假设你想编写一个函数来计算其参数的最小值。如果客户端不传递参数，则此函数定义得不好。你可以在运行时检查数组长度：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// The WRONG way to use varargs to pass one or more arguments!\nstatic int min(int... args) {\n    if (args.length == 0)\n        throw new IllegalArgumentException("Too few arguments");\n    int min = args[0];\n    for (int i = 1; i < args.length; i++)\n        if (args[i] < min)\n    min = args[i];\n    return min;\n}\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br")])]),t("p",[e._v("This solution has several problems. The most serious is that if the client invokes this method with no arguments, it fails at runtime rather than compile time. Another problem is that it is ugly. You have to include an explicit validity check on args, and you can’t use a for-each loop unless you initialize min to Integer.MAX_VALUE, which is also ugly.")]),e._v(" "),t("p",[e._v("这个解决方案有几个问题。最严重的情况是，如果客户端不带参数调用此方法，那么它将在运行时而不是编译时失败。另一个问题是它不美观。必须包含对 args 的显式有效性检查，并且不能使用 for-each 循环，除非将 min 初始化为 Integer.MAX_VALUE，也很不美观。")]),e._v(" "),t("p",[e._v("Luckily there’s a much better way to achieve the desired effect. Declare the method to take two parameters, one normal parameter of the specified type and one varargs parameter of this type. This solution corrects all the deficiencies of the previous one:")]),e._v(" "),t("p",[e._v("幸运的是，有一种更好的方法可以达到预期的效果。声明方法获取两个参数，一个指定类型的常规参数和一个该类型的可变参数。这个解决方案弥补了前一个解决方案的所有不足：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// The right way to use varargs to pass one or more arguments\nstatic int min(int firstArg, int... remainingArgs) {\n    int min = firstArg;\n    for (int arg : remainingArgs)\n        if (arg < min)\n    min = arg;\n    return min;\n}\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br")])]),t("p",[e._v("As you can see from this example, varargs are effective in circumstances where you want a method with a variable number of arguments. Varargs were designed for printf, which was added to the platform at the same time as varargs, and for the core reflection facility (Item 65), which was retrofitted. Both printf and reflection benefited enormously from varargs.")]),e._v(" "),t("p",[e._v("从这个例子中可以看出，在方法需要参数数量可变的情况下，可变参数是有效的。可变参数是为 printf 和经过改造的核心反射机制而设计的，它们与可变参数同时被添加到 JDK，printf 和 reflection 都从可变参数中受益匪浅。")]),e._v(" "),t("p",[e._v("Exercise care when using varargs in performance-critical situations. Every invocation of a varargs method causes an array allocation and initialization. If you have determined empirically that you can’t afford this cost but you need the flexibility of varargs, there is a pattern that lets you have your cake and eat it too. Suppose you’ve determined that 95 percent of the calls to a method have three or fewer parameters. Then declare five overloadings of the method, one each with zero through three ordinary parameters, and a single varargs method for use when the number of arguments exceeds three:")]),e._v(" "),t("p",[e._v("在性能关键的情况下使用可变参数时要小心。每次调用可变参数方法都会导致数组分配和初始化。如果你已经从经验上确定你负担不起这个成本，但是你仍需要可变参数的灵活性，那么有一种模式可以让你鱼与熊掌兼得。假设你已经确定对方法 95% 的调用只需要三个或更少的参数。可以声明该方法的 5 个重载，每个重载 0 到 3 个普通参数，当参数数量超过 3 个时引入可变参数：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("public void foo() { }\npublic void foo(int a1) { }\npublic void foo(int a1, int a2) { }\npublic void foo(int a1, int a2, int a3) { }\npublic void foo(int a1, int a2, int a3, int... rest) { }\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("p",[e._v("Now you know that you’ll pay the cost of the array creation only in the 5 percent of all invocations where the number of parameters exceeds three. Like most performance optimizations, this technique usually isn’t appropriate, but when it is, it’s a lifesaver.")]),e._v(" "),t("p",[e._v("现在你知道，在所有参数数量超过 3 的调用中，只有 5% 的调用需要付出创建数组的成本。与大多数性能优化一样，这种技术使用并不广泛，但当它合适出现时，就是一个救星。")]),e._v(" "),t("p",[e._v("The static factories for EnumSet use this technique to reduce the cost of creating enum sets to a minimum. This was appropriate because it was critical that enum sets provide a performance-competitive replacement for bit fields (Item 36).")]),e._v(" "),t("p",[e._v("EnumSet 的静态工厂使用这种技术将创建枚举集的成本降到最低。这是适当的，因为 enum 集合为位字段提供具有性能竞争力的替代方法是至关重要的。")]),e._v(" "),t("p",[e._v("In summary, varargs are invaluable when you need to define methods with a variable number of arguments. Precede the varargs parameter with any required parameters, and be aware of the performance consequences of using varargs.")]),e._v(" "),t("p",[e._v("总之，当你需要定义具有不确定数量参数的方法时，可变参数是非常有用的。在可变参数之前加上任何必需的参数，并注意使用可变参数可能会引发的性能后果。")])])}),[],!1,null,null,null);a.default=r.exports}}]);