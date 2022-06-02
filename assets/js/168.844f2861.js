(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{1449:function(e,t,a){"use strict";a.r(t);var s=a(24),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"chapter-12-serialization-序列化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chapter-12-serialization-序列化"}},[e._v("#")]),e._v(" Chapter 12. Serialization（序列化）")]),e._v(" "),a("h3",{attrs:{id:"item-88-write-readobject-methods-defensively-防御性地编写-readobject-方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#item-88-write-readobject-methods-defensively-防御性地编写-readobject-方法"}},[e._v("#")]),e._v(" Item 88: Write readObject methods defensively（防御性地编写 readObject 方法）")]),e._v(" "),a("p",[e._v("Item 50 contains an immutable date-range class with mutable private Date fields. The class goes to great lengths to preserve its invariants and immutability by defensively copying Date objects in its constructor and accessors. Here is the class:")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/Chapter-8/Chapter-8-Item-50-Make-defensive-copies-when-needed.html"}},[e._v("Item-50")]),e._v(" 包含一个具有可变私有 Date 字段的不可变日期范围类。该类通过在构造函数和访问器中防御性地复制 Date 对象，不遗余力地保持其不变性和不可变性。它是这样的：")],1),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// Immutable class that uses defensive copying\npublic final class Period {\n    private final Date start;\n    private final Date end;\n\n    /**\n    * @param start the beginning of the period\n    * @param end the end of the period; must not precede start\n    * @throws IllegalArgumentException if start is after end\n    * @throws NullPointerException if start or end is null\n    */\n    public Period(Date start, Date end) {\n        this.start = new Date(start.getTime());\n        this.end = new Date(end.getTime());\n        if (this.start.compareTo(this.end) > 0)\n            throw new IllegalArgumentException(start + " after " + end);\n    }\n\n    public Date start () { return new Date(start.getTime()); }\n\n    public Date end () { return new Date(end.getTime()); }\n\n    public String toString() { return start + " - " + end; }\n\n    ... // Remainder omitted\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br")])]),a("p",[e._v("Suppose you decide that you want this class to be serializable. Because the physical representation of a Period object exactly mirrors its logical data content, it is not unreasonable to use the default serialized form (Item 87). Therefore, it might seem that all you have to do to make the class serializable is to add the words implements Serializable to the class declaration. If you did so, however, the class would no longer guarantee its critical invariants.")]),e._v(" "),a("p",[e._v("假设你决定让这个类可序列化。由于 Period 对象的物理表示精确地反映了它的逻辑数据内容，所以使用默认的序列化形式是合理的（"),a("RouterLink",{attrs:{to:"/Chapter-12/Chapter-12-Item-87-Consider-using-a-custom-serialized-form.html"}},[e._v("Item-87")]),e._v("）。因此，要使类可序列化，似乎只需将实现 Serializable 接口。但是，如果这样做，该类将不再保证它的临界不变量。")],1),e._v(" "),a("p",[e._v("The problem is that the readObject method is effectively another public constructor, and it demands all of the same care as any other constructor. Just as a constructor must check its arguments for validity (Item 49) and make defensive copies of parameters where appropriate (Item 50), so must a readObject method. If a readObject method fails to do either of these things, it is a relatively simple matter for an attacker to violate the class’s invariants.")]),e._v(" "),a("p",[e._v("问题是 readObject 方法实际上是另一个公共构造函数，它与任何其他构造函数有相同的注意事项。如，构造函数必须检查其参数的有效性（"),a("RouterLink",{attrs:{to:"/Chapter-8/Chapter-8-Item-49-Check-parameters-for-validity.html"}},[e._v("Item-49")]),e._v("）并在适当的地方制作防御性副本（"),a("RouterLink",{attrs:{to:"/Chapter-8/Chapter-8-Item-50-Make-defensive-copies-when-needed.html"}},[e._v("Item-50")]),e._v("）一样，readObject 方法也必须这样做。如果 readObject 方法没有做到这两件事中的任何一件，那么攻击者就很容易违反类的不变性。")],1),e._v(" "),a("p",[e._v("Loosely speaking, readObject is a constructor that takes a byte stream as its sole parameter. In normal use, the byte stream is generated by serializing a normally constructed instance. The problem arises when readObject is presented with a byte stream that is artificially constructed to generate an object that violates the invariants of its class. Such a byte stream can be used to create an impossible object, which could not have been created using a normal constructor.")]),e._v(" "),a("p",[e._v("不严格地说，readObject 是一个构造函数，它唯一的参数是字节流。在正常使用中，字节流是通过序列化一个正常构造的实例生成的。当 readObject 呈现一个字节流时，问题就出现了，这个字节流是人为构造的，用来生成一个违反类不变性的对象。这样的字节流可用于创建一个不可思议的对象，而该对象不能使用普通构造函数创建。")]),e._v(" "),a("p",[e._v("Assume that we simply added implements Serializable to the class declaration for Period. This ugly program would then generate a Period instance whose end precedes its start. The casts on byte values whose highorder bit is set is a consequence of Java’s lack of byte literals combined with the unfortunate decision to make the byte type signed:")]),e._v(" "),a("p",[e._v("假设我们只是简单地让 Period 实现 Serializable 接口。然后，这个有问题的程序将生成一个 Period 实例，其结束比起始时间还要早。对其高位位设置的字节值进行强制转换，这是由于 Java 缺少字节字面值，再加上让字节类型签名的错误决定导致的：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("public class BogusPeriod {\n// Byte stream couldn't have come from a real Period instance!\n    private static final byte[] serializedForm = {\n        (byte)0xac, (byte)0xed, 0x00, 0x05, 0x73, 0x72, 0x00, 0x06,\n        0x50, 0x65, 0x72, 0x69, 0x6f, 0x64, 0x40, 0x7e, (byte)0xf8,\n        0x2b, 0x4f, 0x46, (byte)0xc0, (byte)0xf4, 0x02, 0x00, 0x02,\n        0x4c, 0x00, 0x03, 0x65, 0x6e, 0x64, 0x74, 0x00, 0x10, 0x4c,\n        0x6a, 0x61, 0x76, 0x61, 0x2f, 0x75, 0x74, 0x69, 0x6c, 0x2f,\n        0x44, 0x61, 0x74, 0x65, 0x3b, 0x4c, 0x00, 0x05, 0x73, 0x74,\n        0x61, 0x72, 0x74, 0x71, 0x00, 0x7e, 0x00, 0x01, 0x78, 0x70,\n        0x73, 0x72, 0x00, 0x0e, 0x6a, 0x61, 0x76, 0x61, 0x2e, 0x75,\n        0x74, 0x69, 0x6c, 0x2e, 0x44, 0x61, 0x74, 0x65, 0x68, 0x6a,\n        (byte)0x81, 0x01, 0x4b, 0x59, 0x74, 0x19, 0x03, 0x00, 0x00,\n        0x78, 0x70, 0x77, 0x08, 0x00, 0x00, 0x00, 0x66, (byte)0xdf,\n        0x6e, 0x1e, 0x00, 0x78, 0x73, 0x71, 0x00, 0x7e, 0x00, 0x03,\n        0x77, 0x08, 0x00, 0x00, 0x00, (byte)0xd5, 0x17, 0x69, 0x22,\n        0x00, 0x78\n    };\n\n    public static void main(String[] args) {\n        Period p = (Period) deserialize(serializedForm);\n        System.out.println(p);\n    }\n\n    // Returns the object with the specified serialized form\n    static Object deserialize(byte[] sf) {\n        try {\n            return new ObjectInputStream(new ByteArrayInputStream(sf)).readObject();\n        } catch (IOException | ClassNotFoundException e) {\n            throw new IllegalArgumentException(e);\n        }\n    }\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br"),a("span",{staticClass:"line-number"},[e._v("30")]),a("br"),a("span",{staticClass:"line-number"},[e._v("31")]),a("br"),a("span",{staticClass:"line-number"},[e._v("32")]),a("br"),a("span",{staticClass:"line-number"},[e._v("33")]),a("br")])]),a("p",[e._v("The byte array literal used to initialize serializedForm was generated by serializing a normal Period instance and hand-editing the resulting byte stream. The details of the stream are unimportant to the example, but if you’re curious, the serialization byte-stream format is described in the Java Object Serialization Specification [Serialization, 6]. If you run this program, it prints Fri Jan 01 12:00:00 PST 1999 - Sun Jan 01 12:00:00 PST 1984. Simply declaring Period serializable enabled us to create an object that violates its class invariants.")]),e._v(" "),a("p",[e._v("用于初始化 serializedForm 的字节数组文本是通过序列化一个普通 Period 实例并手工编辑得到的字节流生成的。流的细节对示例并不重要，但是如果你感兴趣，可以在《JavaTM Object Serialization Specification》[serialization, 6]中查到序列化字节流的格式描述。如果你运行这个程序，它将打印 "),a("code",[e._v("Fri Jan 01 12:00:00 PST 1999 - Sun Jan 01 12:00:00 PST 1984")]),e._v("。只需声明 Period 可序列化，就可以创建一个违反其类不变性的对象。")]),e._v(" "),a("p",[e._v("To fix this problem, provide a readObject method for Period that calls defaultReadObject and then checks the validity of the deserialized object. If the validity check fails, the readObject method throws InvalidObjectException, preventing the deserialization from completing:")]),e._v(" "),a("p",[e._v("要解决此问题，请为 Period 提供一个 readObject 方法，该方法调用 defaultReadObject，然后检查反序列化对象的有效性。如果有效性检查失败，readObject 方法抛出 InvalidObjectException，阻止反序列化完成：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// readObject method with validity checking - insufficient!\nprivate void readObject(ObjectInputStream s) throws IOException, ClassNotFoundException {\n    s.defaultReadObject();\n    // Check that our invariants are satisfied\n    if (start.compareTo(end) > 0)\n        throw new InvalidObjectException(start +" after "+ end);\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("p",[e._v("While this prevents an attacker from creating an invalid Period instance, there is a more subtle problem still lurking. It is possible to create a mutable Period instance by fabricating a byte stream that begins with a valid Period instance and then appends extra references to the private Date fields internal to the Period instance. The attacker reads the Period instance from the ObjectInputStream and then reads the “rogue object references” that were appended to the stream. These references give the attacker access to the objects referenced by the private Date fields within the Period object. By mutating these Date instances, the attacker can mutate the Period instance. The following class demonstrates this attack:")]),e._v(" "),a("p",[e._v("虽然这可以防止攻击者创建无效的 Period 实例，但还有一个更微妙的问题仍然潜伏着。可以通过字节流来创建一个可变的 Period 实例，该字节流以一个有效的 Period 实例开始，然后向 Period 实例内部的私有日期字段追加额外的引用。攻击者从 ObjectInputStream 中读取 Period 实例，然后读取附加到流中的「恶意对象引用」。这些引用使攻击者能够访问 Period 对象中的私有日期字段引用的对象。通过修改这些日期实例，攻击者可以修改 Period 实例。下面的类演示了这种攻击：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('public class MutablePeriod {\n    // A period instance\n    public final Period period;\n\n    // period\'s start field, to which we shouldn\'t have access\n    public final Date start;\n\n    // period\'s end field, to which we shouldn\'t have access\n    public final Date end;\n\n    public MutablePeriod() {\n        try {\n            ByteArrayOutputStream bos = new ByteArrayOutputStream();\n            ObjectOutputStream out = new ObjectOutputStream(bos);\n\n            // Serialize a valid Period instance\n            out.writeObject(new Period(new Date(), new Date()));\n\n            /*\n            * Append rogue "previous object refs" for internal\n            * Date fields in Period. For details, see "Java\n            * Object Serialization Specification," Section 6.4.\n            */\n            byte[] ref = { 0x71, 0, 0x7e, 0, 5 }; // Ref #5\n            bos.write(ref); // The start field\n            ref[4] = 4; // Ref # 4\n            bos.write(ref); // The end field\n\n            // Deserialize Period and "stolen" Date references\n            ObjectInputStream in = new ObjectInputStream(new ByteArrayInputStream(bos.toByteArray()));\n            period = (Period) in.readObject();\n            start = (Date) in.readObject();\n            end = (Date) in.readObject();\n        } catch (IOException | ClassNotFoundException e) {\n            throw new AssertionError(e);\n        }\n    }\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br"),a("span",{staticClass:"line-number"},[e._v("30")]),a("br"),a("span",{staticClass:"line-number"},[e._v("31")]),a("br"),a("span",{staticClass:"line-number"},[e._v("32")]),a("br"),a("span",{staticClass:"line-number"},[e._v("33")]),a("br"),a("span",{staticClass:"line-number"},[e._v("34")]),a("br"),a("span",{staticClass:"line-number"},[e._v("35")]),a("br"),a("span",{staticClass:"line-number"},[e._v("36")]),a("br"),a("span",{staticClass:"line-number"},[e._v("37")]),a("br"),a("span",{staticClass:"line-number"},[e._v("38")]),a("br")])]),a("p",[e._v("To see the attack in action, run the following program:")]),e._v(" "),a("p",[e._v("要查看攻击的实际效果，请运行以下程序：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("public static void main(String[] args) {\n    MutablePeriod mp = new MutablePeriod();\n    Period p = mp.period;\n    Date pEnd = mp.end;\n\n    // Let's turn back the clock\n    pEnd.setYear(78);\n    System.out.println(p);\n\n    // Bring back the 60s!\n    pEnd.setYear(69);\n    System.out.println(p);\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br")])]),a("p",[e._v("In my locale, running this program produces the following output:")]),e._v(" "),a("p",[e._v("在我的语言环境中，运行这个程序会产生以下输出：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Wed Nov 22 00:21:29 PST 2017 - Wed Nov 22 00:21:29 PST 1978\nWed Nov 22 00:21:29 PST 2017 - Sat Nov 22 00:21:29 PST 1969\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("While the Period instance is created with its invariants intact, it is possible to modify its internal components at will. Once in possession of a mutable Period instance, an attacker might cause great harm by passing the instance to a class that depends on Period’s immutability for its security. This is not so farfetched: there are classes that depend on String’s immutability for their security.")]),e._v(" "),a("p",[e._v("虽然创建 Period 实例时保留了它的不变性，但是可以随意修改它的内部组件。一旦拥有一个可变的 Period 实例，攻击者可能会将实例传递给一个依赖于 Period 的不变性来保证其安全性的类，从而造成极大的危害。这并不是牵强附会的：有些类依赖于 String 的不变性来保证其安全。")]),e._v(" "),a("p",[e._v("The source of the problem is that Period’s readObject method is not doing enough defensive copying. "),a("strong",[e._v("When an object is deserialized, it is critical to defensively copy any field containing an object reference that a client must not possess.")]),e._v(" Therefore, every serializable immutable class containing private mutable components must defensively copy these components in its readObject method. The following readObject method suffices to ensure Period’s invariants and to maintain its immutability:")]),e._v(" "),a("p",[e._v("问题的根源在于 Period 的 readObject 方法没有进行足够的防御性复制。"),a("strong",[e._v("当对象被反序列化时，对任何客户端不能拥有的对象引用的字段进行防御性地复制至关重要。")]),e._v(" 因此，对于每个可序列化的不可变类，如果它包含了私有的可变组件，那么在它的 readObjec 方法中，必须要对这些组件进行防御性地复制。下面的 readObject 方法足以保证周期的不变性，并保持其不变性：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// readObject method with defensive copying and validity checking\nprivate void readObject(ObjectInputStream s) throws IOException, ClassNotFoundException {\n    s.defaultReadObject();\n    // Defensively copy our mutable components\n    start = new Date(start.getTime());\n    end = new Date(end.getTime());\n    // Check that our invariants are satisfied\n    if (start.compareTo(end) > 0)\n        throw new InvalidObjectException(start +" after "+ end);\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br")])]),a("p",[e._v("Note that the defensive copy is performed prior to the validity check and that we did not use Date’s clone method to perform the defensive copy. Both of these details are required to protect Period against attack (Item 50). Note also that defensive copying is not possible for final fields. To use the readObject method, we must make the start and end fields nonfinal. This is unfortunate, but it is the lesser of two evils. With the new readObject method in place and the final modifier removed from the start and end fields, the MutablePeriod class is rendered ineffective. The above attack program now generates this output:")]),e._v(" "),a("p",[e._v("注意，防御副本是在有效性检查之前执行的，我们没有使用 Date 的 clone 方法来执行防御副本。这两个细节对于保护 Period 免受攻击是必要的(第50项)。还要注意，防御性复制不可能用于 final 字段。要使用 readObject 方法，必须使 start 和 end 字段非 final。这是不幸的，但却是权衡利弊后的方案。使用新的 readObject 方法，并从 start 和 end 字段中删除 final 修饰符，MutablePeriod 类将无效。上面的攻击程序现在生成这个输出：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Wed Nov 22 00:23:41 PST 2017 - Wed Nov 22 00:23:41 PST 2017\nWed Nov 22 00:23:41 PST 2017 - Wed Nov 22 00:23:41 PST 2017\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("Here is a simple litmus test for deciding whether the default readObject method is acceptable for a class: would you feel comfortable adding a public constructor that took as parameters the values for each nontransient field in the object and stored the values in the fields with no validation whatsoever? If not, you must provide a readObject method, and it must perform all the validity checking and defensive copying that would be required of a constructor. Alternatively, you can use the serialization proxy pattern (Item 90). This pattern is highly recommended because it takes much of the effort out of safe deserialization.")]),e._v(" "),a("p",[e._v("下面是一个简单的测试，用于判断默认 readObject 方法是否可用于类：你是否愿意添加一个公共构造函数，该构造函数将对象中每个非 transient 字段的值作为参数，并在没有任何验证的情况下将值存储在字段中？如果没有，则必须提供 readObject 方法，并且它必须执行构造函数所需的所有有效性检查和防御性复制。或者，你可以使用序列化代理模式（"),a("RouterLink",{attrs:{to:"/Chapter-12/Chapter-12-Item-90-Consider-serialization-proxies-instead-of-serialized-instances.html"}},[e._v("Item-90")]),e._v("）。强烈推荐使用这种模式，否则会在安全反序列化方面花费大量精力。")],1),e._v(" "),a("p",[e._v("There is one other similarity between readObject methods and constructors that applies to nonfinal serializable classes. Like a constructor, a readObject method must not invoke an overridable method, either directly or indirectly (Item 19). If this rule is violated and the method in question is overridden, the overriding method will run before the subclass’s state has been deserialized. A program failure is likely to result [Bloch05, Puzzle 91].")]),e._v(" "),a("p",[e._v("readObject 方法和构造函数之间还有一个相似之处，适用于非 final 序列化类。与构造函数一样，readObject 方法不能直接或间接调用可覆盖的方法（"),a("RouterLink",{attrs:{to:"/Chapter-4/Chapter-4-Item-19-Design-and-document-for-inheritance-or-else-prohibit-it.html"}},[e._v("Item-19")]),e._v("）。如果违反了这条规则，并且涉及的方法被覆盖，则覆盖方法将在子类的状态反序列化之前运行。很可能导致程序失败 [Bloch05, Puzzle 91]。")],1),e._v(" "),a("p",[e._v("To summarize, anytime you write a readObject method, adopt the mindset that you are writing a public constructor that must produce a valid instance regardless of what byte stream it is given. Do not assume that the byte stream represents an actual serialized instance. While the examples in this item concern a class that uses the default serialized form, all of the issues that were raised apply equally to classes with custom serialized forms. Here, in summary form, are the guidelines for writing a readObject method:")]),e._v(" "),a("p",[e._v("总而言之，无论何时编写 readObject 方法，都要采用这样的思维方式，即编写一个公共构造函数，该构造函数必须生成一个有效的实例，而不管给定的是什么字节流。不要假设字节流表示实际的序列化实例。虽然本条目中的示例涉及使用默认序列化形式的类，但是所引发的所有问题都同样适用于具有自定义序列化形式的类。下面是编写 readObject 方法的指导原则：")]),e._v(" "),a("ul",[a("li",[e._v("For classes with object reference fields that must remain private, defensively copy each object in such a field. Mutable components of immutable classes fall into this category.")])]),e._v(" "),a("p",[e._v("对象引用字段必须保持私有的的类，应防御性地复制该字段中的每个对象。不可变类的可变组件属于这一类。")]),e._v(" "),a("ul",[a("li",[e._v("Check any invariants and throw an InvalidObjectException if a check fails. The checks should follow any defensive copying.")])]),e._v(" "),a("p",[e._v("检查任何不变量，如果检查失败，则抛出 InvalidObjectException。检查动作应该跟在任何防御性复制之后。")]),e._v(" "),a("ul",[a("li",[e._v("If an entire object graph must be validated after it is deserialized, use the ObjectInputValidation interface (not discussed in this book).")])]),e._v(" "),a("p",[e._v("如果必须在反序列化后验证整个对象图，那么使用 ObjectInputValidation 接口（在本书中没有讨论）。")]),e._v(" "),a("ul",[a("li",[e._v("Do not invoke any overridable methods in the class, directly or indirectly.")])]),e._v(" "),a("p",[e._v("不要直接或间接地调用类中任何可被覆盖的方法。")]),e._v(" "),a("hr"),e._v(" "),a("p",[a("strong",[a("RouterLink",{attrs:{to:"/Chapter-12/Chapter-12-Introduction.html"}},[e._v("Back to contents of the chapter（返回章节目录）")])],1)]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Previous Item（上一条目）："),a("RouterLink",{attrs:{to:"/Chapter-12/Chapter-12-Item-87-Consider-using-a-custom-serialized-form.html"}},[e._v("Item 87: Consider using a custom serialized form（考虑使用自定义序列化形式）")])],1)]),e._v(" "),a("li",[a("strong",[e._v("Next Item（下一条目）："),a("RouterLink",{attrs:{to:"/Chapter-12/Chapter-12-Item-89-For-instance-control-prefer-enum-types-to-readResolve.html"}},[e._v("Item 89: For instance control prefer enum types to readResolve（对于实例控制，枚举类型优于 readResolve）")])],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);