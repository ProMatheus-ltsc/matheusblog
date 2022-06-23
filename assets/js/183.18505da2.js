(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{1504:function(e,t,a){"use strict";a.r(t);var s=a(65),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"chapter-2-creating-and-destroying-objects-创建和销毁对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chapter-2-creating-and-destroying-objects-创建和销毁对象"}},[e._v("#")]),e._v(" Chapter 2. Creating and Destroying Objects（创建和销毁对象）")]),e._v(" "),a("h3",{attrs:{id:"item-7-eliminate-obsolete-object-references-排除过时的对象引用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#item-7-eliminate-obsolete-object-references-排除过时的对象引用"}},[e._v("#")]),e._v(" Item 7: Eliminate obsolete object references（排除过时的对象引用）")]),e._v(" "),a("p",[e._v("If you switched from a language with manual memory management, such as C or C++, to a garbage-collected language such as Java, your job as a programmer was made much easier by the fact that your objects are automatically reclaimed when you’re through with them. It seems almost like magic when you first experience it. It can easily lead to the impression that you don’t have to think about memory management, but this isn’t quite true.")]),e._v(" "),a("p",[e._v("如果你从需要手动管理内存的语言（如 C 或 c++）切换到具有垃圾回收机制的语言（如 Java），当你使用完对象后，会感觉程序员工作轻松很多。当你第一次体验它的时候，它几乎就像魔术一样。这很容易让人觉得你不需要考虑内存管理，但这并不完全正确。")]),e._v(" "),a("p",[e._v("Consider the following simple stack implementation:")]),e._v(" "),a("p",[e._v("考虑以下简单的堆栈实现：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('import java.util.Arrays;\nimport java.util.EmptyStackException;\n\n// Can you spot the "memory leak"?\npublic class Stack {\n    private Object[] elements;\n    private int size = 0;\n    private static final int DEFAULT_INITIAL_CAPACITY = 16;\n\n    public Stack() {\n        elements = new Object[DEFAULT_INITIAL_CAPACITY];\n    }\n\n    public void push(Object e) {\n        ensureCapacity();\n        elements[size++] = e;\n    }\n\n    public Object pop() {\n        if (size == 0)\n            throw new EmptyStackException();\n        return elements[--size];\n    }\n\n    /**\n     * Ensure space for at least one more element, roughly\n     * doubling the capacity each time the array needs to grow.\n     */\n    private void ensureCapacity() {\n        if (elements.length == size)\n            elements = Arrays.copyOf(elements, 2 * size + 1);\n    }\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br"),a("span",{staticClass:"line-number"},[e._v("30")]),a("br"),a("span",{staticClass:"line-number"},[e._v("31")]),a("br"),a("span",{staticClass:"line-number"},[e._v("32")]),a("br"),a("span",{staticClass:"line-number"},[e._v("33")]),a("br")])]),a("p",[e._v("There’s nothing obviously wrong with this program (but see Item 29 for a generic version). You could test it exhaustively, and it would pass every test with flying colors, but there’s a problem lurking. Loosely speaking, the program has a”memory leak,” which can silently manifest itself as reduced performance due to increased garbage collector activity or increased memory footprint. In extreme cases, such memory leaks can cause disk paging and even program failure with an OutOfMemoryError, but such failures are relatively rare.")]),e._v(" "),a("p",[e._v("这个程序没有明显的错误（但是通用版本请参阅 "),a("RouterLink",{attrs:{to:"/Chapter-5/Chapter-5-Item-29-Favor-generic-types.html"}},[e._v("Item-29")]),e._v("）。你可以对它进行详尽的测试，它会以优异的成绩通过所有的测试，但是有一个潜在的问题。简单地说，该程序有一个「内存泄漏」问题，由于垃圾收集器活动的增加或内存占用的增加，它可以悄无声息地表现为性能的降低。在极端情况下，这种内存泄漏可能导致磁盘分页，甚至出现 OutOfMemoryError 程序故障，但这种故障相对少见。")],1),e._v(" "),a("p",[e._v("So where is the memory leak? If a stack grows and then shrinks, the objects that were popped off the stack will not be garbage collected, even if the program using the stack has no more references to them. This is because the stack maintains obsolete references to these objects. An obsolete reference is simply a reference that will never be dereferenced again. In this case, any references outside of the “active portion” of the element array are obsolete. The active portion consists of the elements whose index is less than size.")]),e._v(" "),a("p",[e._v("那么内存泄漏在哪里呢？如果堆栈增长，然后收缩，那么从堆栈中弹出的对象将不会被垃圾收集，即使使用堆栈的程序不再引用它们。这是因为栈保留了这些对象的旧引用。一个过时的引用，是指永远不会被取消的引用。在本例中，元素数组的「活动部分」之外的任何引用都已过时。活动部分由索引小于大小的元素组成。")]),e._v(" "),a("p",[e._v("Memory leaks in garbage-collected languages (more properly known as unintentional object retentions) are insidious. If an object reference is unintentionally retained, not only is that object excluded from garbage collection, but so too are any objects referenced by that object, and so on. Even if only a few object references are unintentionally retained, many, many objects may be prevented from being garbage collected, with potentially large effects on performance.")]),e._v(" "),a("p",[e._v("垃圾收集语言中的内存泄漏（更确切地说是无意的对象保留）是暗藏的风险。如果无意中保留了对象引用，那么对象不仅被排除在垃圾收集之外，该对象引用的任何对象也被排除在外，依此类推。即使只是无意中保留了一些对象引用，许多许多的对象也可能被阻止被垃圾收集，从而对性能产生潜在的巨大影响。")]),e._v(" "),a("p",[e._v("The fix for this sort of problem is simple: null out references once they become obsolete. In the case of our Stack class, the reference to an item becomes obsolete as soon as it’s popped off the stack. The corrected version of the pop method looks like this:")]),e._v(" "),a("p",[e._v("解决这类问题的方法很简单：一旦引用过时，就将置空。在我们的 Stack 类中，对某个项的引用一旦从堆栈中弹出就会过时。pop 方法的正确版本如下：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("public Object pop() {\n    if (size == 0)\n        throw new EmptyStackException();\n    Object result = elements[--size];\n    elements[size] = null; // Eliminate obsolete reference\n    return result;\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("p",[e._v("An added benefit of nulling out obsolete references is that if they are subsequently dereferenced by mistake, the program will immediately fail with a NullPointerException, rather than quietly doing the wrong thing. It is always beneficial to detect programming errors as quickly as possible.")]),e._v(" "),a("p",[e._v("用 null 处理过时引用的另一个好处是，如果它们随后被错误地关联引用，程序将立即失败，出现 NullPointerException，而不是悄悄地做错误的事情。尽可能快地检测编程错误总是有益的。")]),e._v(" "),a("p",[e._v("When programmers are first stung by this problem, they may overcompensate by nulling out every object reference as soon as the program is finished using it.This is neither necessary nor desirable; it clutters up the program unnecessarily.Nulling out object references should be the exception rather than the norm.The best way to eliminate an obsolete reference is to let the variable that contained the reference fall out of scope. This occurs naturally if you define each variable in the narrowest possible scope (Item 57).")]),e._v(" "),a("p",[e._v("当程序员第一次被这个问题困扰时，他们可能会过度担心，一旦程序使用完它，他们就会取消所有对象引用。这既无必要也不可取；它不必要地搞乱了程序。清除对象引用应该是例外，而不是规范。消除过时引用的最佳方法是让包含引用的变量脱离作用域。如果你在最狭窄的范围内定义每个变量（"),a("RouterLink",{attrs:{to:"/Chapter-9/Chapter-9-Item-57-Minimize-the-scope-of-local-variables.html"}},[e._v("Item-57")]),e._v("），那么这种情况自然会发生。")],1),e._v(" "),a("p",[e._v("So when should you null out a reference? What aspect of the Stack class makes it susceptible to memory leaks? Simply put, it manages its own memory.The storage pool consists of the elements of the elements array (the object reference cells, not the objects themselves). The elements in the active portion of the array (as defined earlier) are allocated, and those in the remainder of the array are free. The garbage collector has no way of knowing this; to the garbage collector, all of the object references in the elements array are equally valid.Only the programmer knows that the inactive portion of the array is unimportant.The programmer effectively communicates this fact to the garbage collector by manually nulling out array elements as soon as they become part of the inactive portion.")]),e._v(" "),a("p",[e._v("那么，什么时候应该取消引用呢？Stack 类的哪些方面容易导致内存泄漏？简单地说，它管理自己的内存。存储池包含元素数组的元素（对象引用单元，而不是对象本身）数组的活动部分（如前面所定义的）中的元素被分配，而数组其余部分中的元素是空闲的。垃圾收集器没有办法知道这一点；对于垃圾收集器，元素数组中的所有对象引用都同样有效。只有程序员知道数组的非活动部分不重要。只要数组元素成为非活动部分的一部分，程序员就可以通过手动清空数组元素，有效地将这个事实传递给垃圾收集器。")]),e._v(" "),a("p",[e._v("Generally speaking, whenever a class manages its own memory, the programmer should be alert for memory leaks. Whenever an element is freed,any object references contained in the element should be nulled out.")]),e._v(" "),a("p",[e._v("一般来说，一个类管理它自己的内存时，程序员应该警惕内存泄漏。当释放一个元素时，该元素中包含的任何对象引用都应该被置为 null。")]),e._v(" "),a("p",[e._v("Another common source of memory leaks is caches. Once you put an object reference into a cache, it’s easy to forget that it’s there and leave it in the cache long after it becomes irrelevant. There are several solutions to this problem. If you’re lucky enough to implement a cache for which an entry is relevant exactly so long as there are references to its key outside of the cache, represent the cache as a WeakHashMap; entries will be removed automatically after they become obsolete. Remember that WeakHashMap is useful only if the desired lifetime of cache entries is determined by external references to the key, not the value.")]),e._v(" "),a("p",[e._v("另一个常见的内存泄漏源是缓存。一旦将对象引用放入缓存中，就很容易忘记它就在那里，并且在它变得无关紧要之后很久仍将它留在缓存中。有几个解决这个问题的办法。如果你非常幸运地实现了一个缓存，只要缓存外有对其键的引用，那么就将缓存表示为 WeakHashMap；当条目过时后，条目将被自动删除。记住，WeakHashMap 只有在缓存条目的预期生存期由键的外部引用（而不是值）决定时才有用。")]),e._v(" "),a("p",[e._v("More commonly, the useful lifetime of a cache entry is less well defined, with entries becoming less valuable over time. Under these circumstances, the cache should occasionally be cleansed of entries that have fallen into disuse. This can be done by a background thread (perhaps a ScheduledThreadPoolExecutor) or as a side effect of adding new entries to the cache. The LinkedHashMap class facilitates the latter approach with its removeEldestEntry method. For more sophisticated caches, you may need to use java.lang.ref directly.")]),e._v(" "),a("p",[e._v("更常见的情况是，缓存条目的有效生存期定义不太好，随着时间的推移，条目的价值会越来越低。在这种情况下，缓存偶尔应该清理那些已经停用的条目。这可以通过后台线程（可能是 ScheduledThreadPoolExecutor）或向缓存添加新条目时顺便完成。LinkedHashMap 类通过其 removeEldestEntry 方法简化了后一种方法。对于更复杂的缓存，你可能需要直接使用 java.lang.ref。")]),e._v(" "),a("p",[a("strong",[e._v("A third common source of memory leaks is listeners and other callbacks.")]),e._v(" If you implement an API where clients register callbacks but don’t deregister them explicitly, they will accumulate unless you take some action. One way to ensure that callbacks are garbage collected promptly is to store only weak references to them, for instance, by storing them only as keys in a WeakHashMap.")]),e._v(" "),a("p",[a("strong",[e._v("内存泄漏的第三个常见来源是侦听器和其他回调。")]),e._v(" 如果你实现了一个 API，其中客户端注册回调，但不显式取消它们，除非你采取一些行动，否则它们将累积。确保回调被及时地垃圾收集的一种方法是仅存储对它们的弱引用，例如，将它们作为键存储在 WeakHashMap 中。")]),e._v(" "),a("p",[e._v("Because memory leaks typically do not manifest themselves as obvious failures, they may remain present in a system for years. They are typically discovered only as a result of careful code inspection or with the aid of a debugging tool known as a heap profiler. Therefore, it is very desirable to learn to anticipate problems like this before they occur and prevent them from happening.")]),e._v(" "),a("p",[e._v("由于内存泄漏通常不会表现为明显的故障，它们可能会在系统中存在多年。它们通常只能通过仔细的代码检查或借助一种称为堆分析器的调试工具来发现。因此，学会在这样的问题发生之前预测并防止它们发生是非常可取的。")])])}),[],!1,null,null,null);t.default=n.exports}}]);