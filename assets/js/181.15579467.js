(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{1458:function(e,t,a){"use strict";a.r(t);var r=a(24),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"chapter-3-methods-common-to-all-objects-对象的通用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chapter-3-methods-common-to-all-objects-对象的通用方法"}},[e._v("#")]),e._v(" Chapter 3. Methods Common to All Objects（对象的通用方法）")]),e._v(" "),a("h3",{attrs:{id:"chapter-3-introduction-章节介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chapter-3-introduction-章节介绍"}},[e._v("#")]),e._v(" Chapter 3 Introduction（章节介绍）")]),e._v(" "),a("p",[e._v("ALTHOUGH Object is a concrete class, it is designed primarily for extension. All of its nonfinal methods (equals, hashCode, toString, clone, and finalize) have explicit general contracts because they are designed to be overridden. It is the responsibility of any class overriding these methods to obey their general contracts; failure to do so will prevent other classes that depend on the contracts (such as HashMap and HashSet) from functioning properly in conjunction with the class.")]),e._v(" "),a("p",[e._v("虽然 Object 是一个具体的类，但它主要是为扩展而设计的。它的所有非 final 方法（equals、hashCode、toString、clone 和 finalize）都有显式的通用约定，因为它们的设计目的是被覆盖。任何类都有责任覆盖这些方法并将之作为一般约定；如果不这样做，将阻止依赖于约定的其他类（如 HashMap 和 HashSet）与之一起正常工作。")]),e._v(" "),a("p",[e._v("This chapter tells you when and how to override the nonfinal Object methods. The finalize method is omitted from this chapter because it was discussed in Item 8. While not an Object method,Comparable.compareTo is discussed in this chapter because it has a similar character.")]),e._v(" "),a("p",[e._v("本章将告诉你何时以及如何覆盖 Object 类的非 final 方法。finalize 方法在本章中被省略，因为它在 "),a("RouterLink",{attrs:{to:"/Chapter-2/Chapter-2-Item-8-Avoid-finalizers-and-cleaners.html"}},[e._v("Item-8")]),e._v(" 中讨论过。虽然 Comparable.compareTo 不是 Object 类的方法，但是由于具有相似的特性，所以本章也对它进行讨论。")],1),e._v(" "),a("h3",{attrs:{id:"contents-of-the-chapter-章节目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contents-of-the-chapter-章节目录"}},[e._v("#")]),e._v(" Contents of the chapter（章节目录）")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/Chapter-3/Chapter-3-Item-10-Obey-the-general-contract-when-overriding-equals.html"}},[e._v("Item 10: Obey the general contract when overriding equals（覆盖 equals 方法时应遵守的约定）")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/Chapter-3/Chapter-3-Item-11-Always-override-hashCode-when-you-override-equals.html"}},[e._v("Item 11: Always override hashCode when you override equals（当覆盖 equals 方法时，总要覆盖 hashCode 方法）")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/Chapter-3/Chapter-3-Item-12-Always-override-toString.html"}},[e._v("Item 12: Always override toString（始终覆盖 toString 方法）")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/Chapter-3/Chapter-3-Item-13-Override-clone-judiciously.html"}},[e._v("Item 13: Override clone judiciously（明智地覆盖 clone 方法）")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/Chapter-3/Chapter-3-Item-14-Consider-implementing-Comparable.html"}},[e._v("Item 14: Consider implementing Comparable（考虑实现 Comparable 接口）")])],1)])])}),[],!1,null,null,null);t.default=o.exports}}]);