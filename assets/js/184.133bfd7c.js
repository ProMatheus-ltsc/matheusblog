(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{1508:function(e,t,s){"use strict";s.r(t);var r=s(65),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"chapter-2-creating-and-destroying-objects-创建和销毁对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chapter-2-creating-and-destroying-objects-创建和销毁对象"}},[e._v("#")]),e._v(" Chapter 2. Creating and Destroying Objects（创建和销毁对象）")]),e._v(" "),s("h3",{attrs:{id:"item-9-prefer-try-with-resources-to-try-finally-使用-try-with-resources-优于-try-finally"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#item-9-prefer-try-with-resources-to-try-finally-使用-try-with-resources-优于-try-finally"}},[e._v("#")]),e._v(" Item 9: Prefer try-with-resources to try-finally（使用 try-with-resources 优于 try-finally）")]),e._v(" "),s("p",[e._v("The Java libraries include many resources that must be closed manually by invoking a close method. Examples include InputStream,OutputStream, and java.sql.Connection. Closing resources is often overlooked by clients, with predictably dire performance consequences. While many of these resources use finalizers as a safety net, finalizers don’t work very well (Item 8).")]),e._v(" "),s("p",[e._v("Java 库包含许多必须通过调用 close 方法手动关闭的资源。常见的有 InputStream、OutputStream 和 java.sql.Connection。关闭资源常常会被客户端忽略，这会导致可怕的性能后果。虽然这些资源中的许多都使用终结器作为安全网，但终结器并不能很好地工作（"),s("RouterLink",{attrs:{to:"/Chapter-2/Chapter-2-Item-8-Avoid-finalizers-and-cleaners.html"}},[e._v("Item-8")]),e._v("）。")],1),e._v(" "),s("p",[e._v("Historically, a try-finally statement was the best way to guarantee that a resource would be closed properly, even in the face of an exception or return:")]),e._v(" "),s("p",[e._v("从历史上看，try-finally 语句是确保正确关闭资源的最佳方法，即使在出现异常或返回时也是如此：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// try-finally - No longer the best way to close resources!\nstatic String firstLineOfFile(String path) throws IOException {\n    BufferedReader br = new BufferedReader(new FileReader(path));\n    try {\n        return br.readLine();\n    } finally {\n        br.close();\n    }\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("p",[e._v("This may not look bad, but it gets worse when you add a second resource:")]),e._v(" "),s("p",[e._v("这可能看起来不坏，但添加第二个资源时，情况会变得更糟：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// try-finally is ugly when used with more than one resource!\nstatic void copy(String src, String dst) throws IOException {\n    InputStream in = new FileInputStream(src);\n    try {\n        OutputStream out = new FileOutputStream(dst);\n    try {\n        byte[] buf = new byte[BUFFER_SIZE];\n        int n;\n        while ((n = in.read(buf)) >= 0)\n            out.write(buf, 0, n);\n    } finally {\n        out.close();\n        }\n    }\n    finally {\n        in.close();\n    }\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br")])]),s("p",[e._v("It may be hard to believe, but even good programmers got this wrong most of the time. For starters, I got it wrong on page 88 of Java Puzzlers [Bloch05], and no one noticed for years. In fact, two-thirds of the uses of the close method in the Java libraries were wrong in 2007.")]),e._v(" "),s("p",[e._v("这可能难以置信。在大多数情况下，即使是优秀的程序员也会犯这种错误。首先，我在 Java Puzzlers [Bloch05]的 88 页上做错了，多年来没有人注意到。事实上，2007 年发布的 Java 库中三分之二的 close 方法使用都是错误的。")]),e._v(" "),s("p",[s("strong",[e._v("译注：《Java Puzzlers》的中文译本为《Java 解惑》")])]),e._v(" "),s("p",[e._v("Even the correct code for closing resources with try-finally statements,as illustrated in the previous two code examples, has a subtle deficiency. The code in both the try block and the finally block is capable of throwing exceptions. For example, in the firstLineOfFile method, the call to readLine could throw an exception due to a failure in the underlying physical device, and the call to close could then fail for the same reason. Under these circumstances, the second exception completely obliterates the first one. There is no record of the first exception in the exception stack trace, which can greatly complicate debugging in real systems—usually it’s the first exception that you want to see in order to diagnose the problem. While it is possible to write code to suppress the second exception in favor of the first, virtually no one did because it’s just too verbose.")]),e._v(" "),s("p",[e._v("使用 try-finally 语句关闭资源的正确代码（如前两个代码示例所示）也有一个细微的缺陷。try 块和 finally 块中的代码都能够抛出异常。例如，在 firstLineOfFile 方法中，由于底层物理设备发生故障，对 readLine 的调用可能会抛出异常，而关闭的调用也可能出于同样的原因而失败。在这种情况下，第二个异常将完全覆盖第一个异常。异常堆栈跟踪中没有第一个异常的记录，这可能会使实际系统中的调试变得非常复杂（而这可能是希望出现的第一个异常，以便诊断问题）。虽然可以通过编写代码来抑制第二个异常而支持第一个异常，但实际上没有人这样做，因为它太过冗长。")]),e._v(" "),s("p",[e._v("All of these problems were solved in one fell swoop when Java 7 introduced the try-with-resources statement [JLS, 14.20.3]. To be usable with this construct, a resource must implement the AutoCloseable interface, which consists of a single void-returning close method. Many classes and interfaces in the Java libraries and in third-party libraries now implement or extend AutoCloseable. If you write a class that represents a resource that must be closed, your class should implement AutoCloseable too.")]),e._v(" "),s("p",[e._v("当 Java 7 引入 try-with-resources 语句 [JLS, 14.20.3]时，所有这些问题都一次性解决了。要使用这个结构，资源必须实现 AutoCloseable 接口，它由一个单独的 void-return close 方法组成。Java 库和第三方库中的许多类和接口现在都实现或扩展了 AutoCloseable。如果你编写的类存在必须关闭的资源，那么也应该实现 AutoCloseable。")]),e._v(" "),s("p",[e._v("Here’s how our first example looks using try-with-resources:")]),e._v(" "),s("p",[e._v("下面是使用 try-with-resources 的第一个示例：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// try-with-resources - the the best way to close resources!\nstatic String firstLineOfFile(String path) throws IOException {\n    try (BufferedReader br = new BufferedReader(new FileReader(path))) {\n        return br.readLine();\n    }\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("p",[e._v("And here’s how our second example looks using try-with-resources:")]),e._v(" "),s("p",[e._v("下面是使用 try-with-resources 的第二个示例：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// try-with-resources on multiple resources - short and sweet\nstatic void copy(String src, String dst) throws IOException {\n    try (InputStream in = new FileInputStream(src);OutputStream out = new FileOutputStream(dst)) {\n        byte[] buf = new byte[BUFFER_SIZE];\n        int n;\n        while ((n = in.read(buf)) >= 0)\n            out.write(buf, 0, n);\n    }\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("p",[e._v("originals, but they provide far better diagnostics. Consider the firstLineOfFile method. If exceptions are thrown by both the readLine call and the (invisible) close, the latter exception is suppressed in favor of the former. In fact, multiple exceptions may be suppressed in order to preserve the exception that you actually want to see. These suppressed exceptions are not merely discarded; they are printed in the stack trace with a notation saying that they were suppressed. You can also access them programmatically with the getSuppressed method, which was added to Throwable in Java 7.")]),e._v(" "),s("p",[e._v("和使用 try-finally 的原版代码相比，try-with-resources 为开发者提供了更好的诊断方式。考虑 firstLineOfFile 方法。如果异常是由 readLine 调用和不可见的 close 抛出的，则后一个异常将被抑制，以支持前一个异常。实际上，还可能会抑制多个异常，以保留实际希望看到的异常。这些被抑制的异常不会仅仅被抛弃；它们会被打印在堆栈跟踪中，并标记它们被抑制。可以通过编程方式使用 getSuppressed 方法访问到它们，该方法是在 Java 7 中添加到 Throwable 中的。")]),e._v(" "),s("p",[e._v("You can put catch clauses on try-with-resources statements, just as you can on regular try-finally statements. This allows you to handle exceptions without sullying your code with another layer of nesting. As a slightly contrived example, here’s a version our firstLineOfFile method that does not throw exceptions, but takes a default value to return if it can’t open the file or read from it:")]),e._v(" "),s("p",[e._v("可以在带有资源的 try-with-resources 语句中放置 catch 子句，就像在常规的 try-finally 语句上一样。这允许处理异常时不必用另一层嵌套来影响代码。作为一个特指的示例，下面是我们的 firstLineOfFile 方法的一个版本，它不抛出异常，但如果无法打开文件或从中读取文件，则返回一个默认值：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// try-with-resources with a catch clause\nstatic String firstLineOfFile(String path, String defaultVal) {\n    try (BufferedReader br = new BufferedReader(new FileReader(path))) {\n        return br.readLine();\n    } catch (IOException e) {\n        return defaultVal;\n    }\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br")])]),s("p",[e._v("The lesson is clear: Always use try-with-resources in preference to tryfinally when working with resources that must be closed. The resulting code is shorter and clearer, and the exceptions that it generates are more useful. The try-with-resources statement makes it easy to write correct code using resources that must be closed, which was practically impossible using tryfinally.")]),e._v(" "),s("p",[e._v("教训很清楚：在使用必须关闭的资源时，总是优先使用 try-with-resources，而不是 try-finally。前者的代码更短、更清晰，生成的异常更有用。使用 try-with-resources 语句可以很容易地为必须关闭的资源编写正确的代码，而使用 try-finally 几乎是不可能的。")])])}),[],!1,null,null,null);t.default=n.exports}}]);