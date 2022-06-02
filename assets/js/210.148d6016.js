(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{1490:function(n,e,a){"use strict";a.r(e);var s=a(24),t=Object(s.a)({},(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h2",{attrs:{id:"chapter-6-enums-and-annotations-枚举和注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chapter-6-enums-and-annotations-枚举和注解"}},[n._v("#")]),n._v(" Chapter 6. Enums and Annotations（枚举和注解）")]),n._v(" "),a("h3",{attrs:{id:"item-35-use-instance-fields-instead-of-ordinals-使用实例字段替代序数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#item-35-use-instance-fields-instead-of-ordinals-使用实例字段替代序数"}},[n._v("#")]),n._v(" Item 35: Use instance fields instead of ordinals（使用实例字段替代序数）")]),n._v(" "),a("p",[n._v("Many enums are naturally associated with a single int value. All enums have an ordinal method, which returns the numerical position of each enum constant in its type. You may be tempted to derive an associated int value from the ordinal:")]),n._v(" "),a("p",[n._v("许多枚举天然地与单个 int 值相关联。所有枚举都有一个 ordinal 方法，该方法返回枚举类型中每个枚举常数的数值位置。你可能想从序号中获得一个关联的 int 值：")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("// Abuse of ordinal to derive an associated value - DON'T DO THIS\npublic enum Ensemble {\n    SOLO, DUET, TRIO, QUARTET, QUINTET,SEXTET, SEPTET, OCTET, NONET, DECTET;\n\n    public int numberOfMusicians() { return ordinal() + 1; }\n}\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br")])]),a("p",[n._v("While this enum works, it is a maintenance nightmare. If the constants are reordered, the numberOfMusicians method will break. If you want to add a second enum constant associated with an int value that you’ve already used, you’re out of luck. For example, it might be nice to add a constant for double quartet, which, like an octet, consists of eight musicians, but there is no way to do it.")]),n._v(" "),a("p",[n._v("虽然这个枚举可以工作，但维护却是噩梦。如果常量被重新排序，numberOfMusicians 方法将被破坏。或者你想添加一个与已经使用过的 int 值相关联的第二个枚举常量，那么你就没有那么幸运了。例如，为双四重奏增加一个常量可能会很好，就像八重奏一样，由八个音乐家组成，但是没有办法做到。")]),n._v(" "),a("p",[a("strong",[n._v("译注：「If you want to add a second enum constant associated with an int value that you’ve already used」是指每个常量如果不用实例字段的方式，就只能有一个序号值。实例字段可以将自定义的值对应多个常量，例如：SOLO(3), DUET(3), TRIO(3)，可以都设置为序号 3")])]),n._v(" "),a("p",[n._v("Also, you can’t add a constant for an int value without adding constants for all intervening int values. For example, suppose you want to add a constant representing a triple quartet, which consists of twelve musicians. There is no standard term for an ensemble consisting of eleven musicians, so you are forced to add a dummy constant for the unused int value (11). At best, this is ugly. If many int values are unused, it’s impractical. Luckily, there is a simple solution to these problems. "),a("strong",[n._v("Never derive a value associated with an enum from its ordinal; store it in an instance field instead:")])]),n._v(" "),a("p",[n._v("此外，如果不为所有插入的 int 值添加常量，就不能为 int 值添加常量。例如，假设你想添加一个常量来表示一个由 12 位音乐家组成的三重四重奏。对于 11 位音乐家组成的合奏，由于没有标准术语，因此你必须为未使用的 int 值（11）添加一个虚拟常量。往好的说，这仅仅是丑陋的。如果许多 int 值未使用，则不切实际。幸运的是，这些问题有一个简单的解决方案。"),a("strong",[n._v("不要从枚举的序数派生与枚举关联的值；而是将其存储在实例字段中：")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("public enum Ensemble {\n    SOLO(1), DUET(2), TRIO(3), QUARTET(4), QUINTET(5),SEXTET(6), SEPTET(7), OCTET(8), DOUBLE_QUARTET(8),NONET(9), DECTET(10),TRIPLE_QUARTET(12);\n\n    private final int numberOfMusicians;\n\n    Ensemble(int size) { this.numberOfMusicians = size; }\n\n    public int numberOfMusicians() { return numberOfMusicians; }\n}\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br")])]),a("p",[n._v("The Enum specification has this to say about ordinal: “Most programmers will have no use for this method. It is designed for use by general-purpose enumbased data structures such as EnumSet and EnumMap.” Unless you are writing code with this character, you are best off avoiding the ordinal method entirely.")]),n._v(" "),a("p",[n._v("枚举规范对 ordinal 方法的评价是这样的：「大多数程序员都不会去使用这个方法。它是为基于枚举的通用数据结构（如 EnumSet 和 EnumMap）而设计的」。除非你使用这个数据结构编写代码，否则最好完全避免使用这个方法。")])])}),[],!1,null,null,null);e.default=t.exports}}]);