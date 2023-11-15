(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{1439:function(e,t,a){"use strict";a.r(t);var n=a(65),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"chapter-11-concurrency-并发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chapter-11-concurrency-并发"}},[e._v("#")]),e._v(" Chapter 11. Concurrency（并发）")]),e._v(" "),a("h3",{attrs:{id:"item-78-synchronize-access-to-shared-mutable-data-对共享可变数据的同步访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#item-78-synchronize-access-to-shared-mutable-data-对共享可变数据的同步访问"}},[e._v("#")]),e._v(" Item 78: Synchronize access to shared mutable data（对共享可变数据的同步访问）")]),e._v(" "),a("p",[e._v("The synchronized keyword ensures that only a single thread can execute a method or block at one time. Many programmers think of synchronization solely as a means of mutual exclusion, to prevent an object from being seen in an inconsistent state by one thread while it’s being modified by another. In this view, an object is created in a consistent state (Item 17) and locked by the methods that access it. These methods observe the state and optionally cause a state transition, transforming the object from one consistent state to another. Proper use of synchronization guarantees that no method will ever observe the object in an inconsistent state.")]),e._v(" "),a("p",[e._v("synchronized 关键字确保一次只有一个线程可以执行一个方法或块。许多程序员认为同步只是一种互斥的方法，是为防止一个线程在另一个线程修改对象时使对象处于不一致的状态。这样看来，对象以一致的状态创建（"),a("RouterLink",{attrs:{to:"/Chapter-4/Chapter-4-Item-17-Minimize-mutability.html"}},[e._v("Item-17")]),e._v("），并由访问它的方法锁定。这些方法可以察觉当前状态，并引起状态转换，将对象从一致的状态转换为另一个一致的状态。正确使用同步可以保证没有方法会让对象处于不一致状态。")],1),e._v(" "),a("p",[e._v("This view is correct, but it’s only half the story. Without synchronization, one thread’s changes might not be visible to other threads. Not only does synchronization prevent threads from observing an object in an inconsistent state, but it ensures that each thread entering a synchronized method or block sees the effects of all previous modifications that were guarded by the same lock.")]),e._v(" "),a("p",[e._v("这种观点是正确的，但它只是冰山一角。没有同步，一个线程所做的的更改可能对其他线程不可见。同步不仅阻止线程察觉到处于不一致状态的对象，而且确保每个进入同步方法或块的线程都能察觉由同一把锁保护的所有已修改的效果。")]),e._v(" "),a("p",[e._v("The language specification guarantees that reading or writing a variable is atomic unless the variable is of type long or double [JLS, 17.4, 17.7]. In other words, reading a variable other than a long or double is guaranteed to return a value that was stored into that variable by some thread, even if multiple threads modify the variable concurrently and without synchronization.")]),e._v(" "),a("p",[e._v("语言规范保证读取或写入变量是原子性的，除非变量的类型是 long 或 double [JLS, 17.4, 17.7]。换句话说，读取 long 或 double 之外的变量将保证返回某个线程存储在该变量中的值，即使多个线程同时修改该变量，并且没有同步时也是如此。")]),e._v(" "),a("p",[e._v("You may hear it said that to improve performance, you should dispense with synchronization when reading or writing atomic data. This advice is dangerously wrong. While the language specification guarantees that a thread will not see an arbitrary value when reading a field, it does not guarantee that a value written by one thread will be visible to another. "),a("strong",[e._v("Synchronization is required for reliable communication between threads as well as for mutual exclusion.")]),e._v(" This is due to a part of the language specification known as the memory model, which specifies when and how changes made by one thread become visible to others [JLS, 17.4; Goetz06, 16].")]),e._v(" "),a("p",[e._v("你可能听说过，为了提高性能，在读取或写入具有原子性的数据时应该避免同步。这种建议大错特错。虽然语言规范保证线程在读取字段时不会觉察任意值，但它不保证由一个线程编写的值对另一个线程可见。"),a("strong",[e._v("线程之间能可靠通信以及实施互斥，同步是所必需的。")]),e._v(" 这是由于语言规范中，称为内存模型的部分指定了一个线程所做的更改何时以及如何对其他线程可见 [JLS, 17.4; Goetz06, 16]。")]),e._v(" "),a("p",[e._v("The consequences of failing to synchronize access to shared mutable data can be dire even if the data is atomically readable and writable. Consider the task of stopping one thread from another. The libraries provide the Thread.stop method, but this method was deprecated long ago because it is inherently unsafe —its use can result in data corruption. "),a("strong",[e._v("Do not use Thread.stop.")]),e._v(" A recommended way to stop one thread from another is to have the first thread poll a boolean field that is initially false but can be set to true by the second thread to indicate that the first thread is to stop itself. Because reading and writing a boolean field is atomic, some programmers dispense with synchronization when accessing the field:")]),e._v(" "),a("p",[e._v("即使数据是原子可读和可写的，无法同步访问共享可变数据的后果也可能是可怕的。考虑从一个线程中使另一个线程停止的任务。库提供了 "),a("code",[e._v("Thread.stop")]),e._v(" 方法，但是这个方法很久以前就被弃用了，因为它本质上是不安全的，它的使用可能导致数据损坏。"),a("strong",[e._v("不要使用 "),a("code",[e._v("Thread.stop")]),e._v("。")]),e._v(" 一个建议的方法是让第一个线程轮询一个 boolean 字段，该字段最初为 false，但第二个线程可以将其设置为 true，以指示第一个线程要停止它自己。由于读写布尔字段是原子性的，一些程序员在访问该字段时不需要同步：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// Broken! - How long would you expect this program to run?\npublic class StopThread {\n    private static boolean stopRequested;\n\n    public static void main(String[] args) throws InterruptedException {\n        Thread backgroundThread = new Thread(() -> {\n        int i = 0;\n        while (!stopRequested)\n            i++;\n        });\n\n    backgroundThread.start();\n    TimeUnit.SECONDS.sleep(1);\n    stopRequested = true;\n    }\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br")])]),a("p",[e._v("You might expect this program to run for about a second, after which the main thread sets stopRequested to true, causing the background thread’s loop to terminate. On my machine, however, the program never terminates: the background thread loops forever!")]),e._v(" "),a("p",[e._v("你可能认为这个程序运行大约一秒钟，之后主线程将 stopRequested 设置为 true，从而导致后台线程的循环终止。然而，在我的机器上，程序永远不会终止：后台线程永远循环！")]),e._v(" "),a("p",[e._v("The problem is that in the absence of synchronization, there is no guarantee as to when, if ever, the background thread will see the change in the value of stopRequested made by the main thread. In the absence of synchronization, it’s quite acceptable for the virtual machine to transform this code:")]),e._v(" "),a("p",[e._v("问题在于在缺乏同步的情况下，无法保证后台线程何时（如果有的话）看到主线程所做的 stopRequested 值的更改。在缺乏同步的情况下，虚拟机可以很好地转换这段代码：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("while (!stopRequested)\n    i++;\ninto this code:\nif (!stopRequested)\n    while (true)\n        i++;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("p",[e._v("This optimization is known as hoisting, and it is precisely what the OpenJDK Server VM does. The result is a liveness failure: the program fails to make progress. One way to fix the problem is to synchronize access to the stopRequested field. This program terminates in about one second, as expected:")]),e._v(" "),a("p",[e._v("这种优化称为提升，这正是 OpenJDK 服务器 VM 所做的。结果是活性失败：程序无法取得进展。解决此问题的一种方法是同步对 stopRequested 字段的访问。程序在大约一秒内结束，正如预期：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// Properly synchronized cooperative thread termination\npublic class StopThread {\n    private static boolean stopRequested;\n\n    private static synchronized void requestStop() {\n        stopRequested = true;\n    }\n\n    private static synchronized boolean stopRequested() {\n        return stopRequested;\n    }\n\n    public static void main(String[] args) throws InterruptedException {\n        Thread backgroundThread = new Thread(() -> {\n            int i = 0;\n            while (!stopRequested())\n            i++;\n        });\n\n        backgroundThread.start();\n        TimeUnit.SECONDS.sleep(1);\n        requestStop();\n    }\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br")])]),a("p",[e._v("Note that both the write method (requestStop) and the read method (stop-Requested) are synchronized. It is not sufficient to synchronize only the write method! "),a("strong",[e._v("Synchronization is not guaranteed to work unless both read and write operations are synchronized.")]),e._v(" Occasionally a program that synchronizes only writes (or reads) may appear to work on some machines, but in this case, appearances are deceiving.")]),e._v(" "),a("p",[e._v("注意，写方法（requestStop）和读方法（stopRequested）都是同步的。仅同步写方法是不够的！"),a("strong",[e._v("除非读和写操作都同步，否则不能保证同步工作。")]),e._v(" 有时，只同步写（或读）的程序可能在某些机器上显示有效，但在这种情况下，不能这么做。")]),e._v(" "),a("p",[e._v("The actions of the synchronized methods in StopThread would be atomic even without synchronization. In other words, the synchronization on these methods is used solely for its communication effects, not for mutual exclusion. While the cost of synchronizing on each iteration of the loop is small, there is a correct alternative that is less verbose and whose performance is likely to be better. The locking in the second version of StopThread can be omitted if stopRequested is declared volatile. While the volatile modifier performs no mutual exclusion, it guarantees that any thread that reads the field will see the most recently written value:")]),e._v(" "),a("p",[e._v("即使没有同步，StopThread 中同步方法的操作也是原子性的。换句话说，这些方法的同步仅用于其通信效果，而不是互斥。虽然在循环的每个迭代上同步的成本很小，但是有一种正确的替代方法，它不那么冗长，而且性能可能更好。如果 stopRequested 声明为 volatile，则可以省略 StopThread 的第二个版本中的锁。虽然 volatile 修饰符不执行互斥，但它保证任何读取字段的线程都会看到最近写入的值：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// Cooperative thread termination with a volatile field\npublic class StopThread {\n    private static volatile boolean stopRequested;\n\n    public static void main(String[] args) throws InterruptedException {\n        Thread backgroundThread = new Thread(() -> {\n        int i = 0;\n        while (!stopRequested)\n            i++;\n    });\n\n    backgroundThread.start();\n    TimeUnit.SECONDS.sleep(1);\n    stopRequested = true;\n    }\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br")])]),a("p",[e._v("You do have to be careful when using volatile. Consider the following method, which is supposed to generate serial numbers:")]),e._v(" "),a("p",[e._v("在使用 volatile 时一定要小心。考虑下面的方法，它应该生成序列号：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// Broken - requires synchronization!\nprivate static volatile int nextSerialNumber = 0;\n\npublic static int generateSerialNumber() {\n    return nextSerialNumber++;\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("p",[e._v("The intent of the method is to guarantee that every invocation returns a unique value (so long as there are no more than 2"),a("sup",[e._v("32")]),e._v(" invocations). The method’s state consists of a single atomically accessible field, nextSerialNumber, and all possible values of this field are legal. Therefore, no synchronization is necessary to protect its invariants. Still, the method won’t work properly without synchronization.")]),e._v(" "),a("p",[e._v("该方法的目的是确保每次调用返回一个唯一的值（只要不超过 2"),a("sup",[e._v("32")]),e._v(" 次调用）。方法的状态由一个原子可访问的字段 nextSerialNumber 组成，该字段的所有可能值都是合法的。因此，不需要同步来保护它的不变性。不过，如果没有同步，该方法将无法正常工作。")]),e._v(" "),a("p",[e._v("The problem is that the increment operator (++) is not atomic. It performs two operations on the nextSerialNumber field: first it reads the value, and then it writes back a new value, equal to the old value plus one. If a second thread reads the field between the time a thread reads the old value and writes back a new one, the second thread will see the same value as the first and return the same serial number. This is a safety failure: the program computes the wrong results.")]),e._v(" "),a("p",[e._v("问题在于增量运算符 "),a("code",[e._v("(++)")]),e._v(" 不是原子性的。它对 nextSerialNumber 字段执行两个操作：首先读取值，然后返回一个新值，旧值再加 1。如果第二个线程在读取旧值和写入新值之间读取字段，则第二个线程将看到与第一个线程相同的值，并返回相同的序列号。这是一个安全故障：使程序计算错误的原因。")]),e._v(" "),a("p",[e._v("One way to fix generateSerialNumber is to add the synchronized modifier to its declaration. This ensures that multiple invocations won’t be interleaved and that each invocation of the method will see the effects of all previous invocations. Once you’ve done that, you can and should remove the volatile modifier from nextSerialNumber. To bulletproof the method, use long instead of int, or throw an exception if nextSerialNumber is about to wrap.")]),e._v(" "),a("p",[e._v("修复 generateSerialNumber 的一种方法是将 synchronized 修饰符添加到它的声明中。这确保了多个调用不会交叉，并且该方法的每次调用都将看到之前所有调用的效果。一旦你这样做了，你就可以并且应该从 nextSerialNumber 中删除 volatile 修饰符。为了使方法更可靠，应使用 long 而不是 int，或者在 nextSerialNumber 即将超限时抛出异常。")]),e._v(" "),a("p",[e._v("Better still, follow the advice in Item 59 and use the class AtomicLong, which is part of java.util.concurrent.atomic. This package provides primitives for lock-free, thread-safe programming on single variables. While volatile provides only the communication effects of synchronization, this package also provides atomicity. This is exactly what we want for generateSerialNumber, and it is likely to outperform the synchronized version:")]),e._v(" "),a("p",[e._v("更好的方法是，遵循 "),a("RouterLink",{attrs:{to:"/Chapter-9/Chapter-9-Item-59-Know-and-use-the-libraries.html"}},[e._v("Item-59")]),e._v(" 中的建议并使用 AtomicLong 类，它是 "),a("code",[e._v("java.util.concurrent.atomic")]),e._v(" 的一部分。这个包为单变量的无锁、线程安全编程提供了基本类型。虽然 volatile 只提供同步的通信效果，但是这个包提供原子性。这正是我们想要的 generateSerialNumber，它很可能优于同步版本：")],1),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// Lock-free synchronization with java.util.concurrent.atomic\nprivate static final AtomicLong nextSerialNum = new AtomicLong();\n\npublic static long generateSerialNumber() {\n    return nextSerialNum.getAndIncrement();\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("p",[e._v("The best way to avoid the problems discussed in this item is not to share mutable data. Either share immutable data (Item 17) or don’t share at all. In other words, "),a("strong",[e._v("confine mutable data to a single thread.")]),e._v(" If you adopt this policy, it is important to document it so that the policy is maintained as your program evolves. It is also important to have a deep understanding of the frameworks and libraries you’re using because they may introduce threads that you are unaware of.")]),e._v(" "),a("p",[e._v("为避免出现本条目中讨论的问题，最佳方法是不共享可变数据。要么共享不可变数据（"),a("RouterLink",{attrs:{to:"/Chapter-4/Chapter-4-Item-17-Minimize-mutability.html"}},[e._v("Item-17")]),e._v("），要么完全不共享。换句话说，"),a("strong",[e._v("应当将可变数据限制在一个线程中。")]),e._v(" 如果采用此策略，重要的是对其进行文档化，以便随着程序的发展维护该策略。深入了解你正在使用的框架和库也很重要，因为它们可能会引入你不知道的线程。")],1),e._v(" "),a("p",[e._v("It is acceptable for one thread to modify a data object for a while and then to share it with other threads, synchronizing only the act of sharing the object reference. Other threads can then read the object without further synchronization, so long as it isn’t modified again. Such objects are said to be effectively immutable [Goetz06, 3.5.4]. Transferring such an object reference from one thread to others is called safe publication [Goetz06, 3.5.3]. There are many ways to safely publish an object reference: you can store it in a static field as part of class initialization; you can store it in a volatile field, a final field, or a field that is accessed with normal locking; or you can put it into a concurrent collection (Item 81).")]),e._v(" "),a("p",[e._v("一个线程可以暂时修改一个数据对象，然后与其他线程共享，并且只同步共享对象引用的操作。然后，其他线程可以在没有进一步同步的情况下读取对象，只要不再次修改该对象。这些对象被认为是有效不可变的 [Goetz06, 3.5.4]。将这样的对象引用从一个线程转移到其他线程称为安全发布 [Goetz06, 3.5.3]。安全地发布对象引用的方法有很多：可以将它存储在静态字段中，作为类初始化的一部分；你可以将其存储在易失性字段、final 字段或使用普通锁定访问的字段中；或者你可以将其放入并发集合中（"),a("RouterLink",{attrs:{to:"/Chapter-11/Chapter-11-Item-81-Prefer-concurrency-utilities-to-wait-and-notify.html"}},[e._v("Item-81")]),e._v("）。")],1),e._v(" "),a("p",[e._v("In summary, "),a("strong",[e._v("when multiple threads share mutable data, each thread that reads or writes the data must perform synchronization.")]),e._v(" In the absence of synchronization, there is no guarantee that one thread’s changes will be visible to another thread. The penalties for failing to synchronize shared mutable data are liveness and safety failures. These failures are among the most difficult to debug. They can be intermittent and timing-dependent, and program behavior can vary radically from one VM to another. If you need only inter-thread communication, and not mutual exclusion, the volatile modifier is an acceptable form of synchronization, but it can be tricky to use correctly.")]),e._v(" "),a("p",[e._v("总之，"),a("strong",[e._v("当多个线程共享可变数据时，每个读取或写入数据的线程都必须执行同步。")]),e._v(" 在缺乏同步的情况下，不能保证一个线程的更改对另一个线程可见。同步共享可变数据失败的代价是活性失败和安全失败。这些故障是最难调试的故障之一。它们可能是间歇性的，并与时间相关，而且程序行为可能在不同 VM 之间发生根本的变化。如果只需要线程间通信，而不需要互斥，那么 volatile 修饰符是一种可接受的同步形式，但是要想正确使用它可能会比较棘手。")])])}),[],!1,null,null,null);t.default=s.exports}}]);