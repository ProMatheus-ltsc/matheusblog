(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{1409:function(s,a,t){"use strict";t.r(a);var n=t(24),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"elasticsearch-ik中文分词器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-ik中文分词器"}},[s._v("#")]),s._v(" Elasticsearch-IK中文分词器")]),s._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#在三个节点上安装-ik-分词器"}},[s._v("在三个节点上安装 ik 分词器")])]),t("li",[t("a",{attrs:{href:"#查看安装结果"}},[s._v("查看安装结果")])]),t("li",[t("a",{attrs:{href:"#ik-max-word-分词测试"}},[s._v("ik_max_word 分词测试")])]),t("li",[t("a",{attrs:{href:"#ik-smart-分词测试"}},[s._v("ik_smart 分词测试")])])])]),t("p"),s._v(" "),t("h1",{attrs:{id:"安装-ik-分词器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-ik-分词器"}},[s._v("#")]),s._v(" 安装 ik 分词器")]),s._v(" "),t("p",[s._v("从 ik 分词器项目仓库中下载 ik 分词器安装包，"),t("strong",[s._v("下载的版本需要与 Elasticsearch 版本匹配")]),s._v("：")]),s._v(" "),t("p",[s._v("https://github.com/medcl/elasticsearch-analysis-ik")]),s._v(" "),t("p",[s._v("或者可以访问 gitee 镜像仓库：")]),s._v(" "),t("p",[s._v("https://gitee.com/mirrors/elasticsearch-analysis-ik")]),s._v(" "),t("p",[s._v("下载 "),t("code",[s._v("elasticsearch-analysis-ik-7.9.3.zip")]),s._v(" 复制到 "),t("code",[s._v("/root/")]),s._v(" 目录下")]),s._v(" "),t("h2",{attrs:{id:"在三个节点上安装-ik-分词器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在三个节点上安装-ik-分词器"}},[s._v("#")]),s._v(" 在三个节点上安装 ik 分词器")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制 ik 分词器到三个 es 容器")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" elasticsearch-analysis-ik-7.9.3.zip node1:/root/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" elasticsearch-analysis-ik-7.9.3.zip node2:/root/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" elasticsearch-analysis-ik-7.9.3.zip node3:/root/\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在 node1 中安装 ik 分词器")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it node1 elasticsearch-plugin "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" file:///root/elasticsearch-analysis-ik-7.9.3.zip\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在 node2 中安装 ik 分词器")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it node2 elasticsearch-plugin "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" file:///root/elasticsearch-analysis-ik-7.9.3.zip\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在 node3 中安装 ik 分词器")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it node3 elasticsearch-plugin "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" file:///root/elasticsearch-analysis-ik-7.9.3.zip\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启三个 es 容器")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" restart node1 node2 node3\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("h2",{attrs:{id:"查看安装结果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看安装结果"}},[s._v("#")]),s._v(" 查看安装结果")]),s._v(" "),t("p",[s._v("在浏览器中访问 http://192.168.64.181:9200/_cat/plugins")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20201118112736380.png#pic_center",alt:"a"}})]),s._v(" "),t("blockquote",[t("p",[s._v("如果插件不可用，可以卸载后重新安装：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it node1 elasticsearch-plugin remove analysis-ik\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it node2 elasticsearch-plugin remove analysis-ik\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it node3 elasticsearch-plugin remove analysis-ik\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])]),s._v(" "),t("h1",{attrs:{id:"ik分词测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ik分词测试"}},[s._v("#")]),s._v(" ik分词测试")]),s._v(" "),t("p",[s._v("ik分词器提供两种分词器： "),t("code",[s._v("ik_max_word")]),s._v(" 和 "),t("code",[s._v("ik_smart")])]),s._v(" "),t("p",[t("code",[s._v("ik_max_word")]),s._v(": 会将文本做最细粒度的拆分，比如会将“中华人民共和国国歌”拆分为“中华人民共和国,中华人民,中华,华人,人民共和国,人民,人,民,共和国,共和,和,国国,国歌”，会穷尽各种可能的组合，适合 Term Query；")]),s._v(" "),t("p",[t("code",[s._v("ik_smart")]),s._v(": 会做最粗粒度的拆分，比如会将“中华人民共和国国歌”拆分为“中华人民共和国,国歌”，适合 Phrase 查询。")]),s._v(" "),t("h2",{attrs:{id:"ik-max-word-分词测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ik-max-word-分词测试"}},[s._v("#")]),s._v(" "),t("code",[s._v("ik_max_word")]),s._v(" 分词测试")]),s._v(" "),t("p",[s._v("使用 head 执行下面测试：\n向 "),t("code",[s._v("http://192.168.64.181:9200/_analyze")]),s._v(" 路径提交 "),t("code",[s._v("POST")]),s._v(" 请求，并在协议体中提交 Json 数据：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"analyzer"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ik_max_word"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"text"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"中华人民共和国国歌"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20201118110426319.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODMwNTQ0MA==,size_16,color_FFFFFF,t_70#pic_center",alt:"a"}})]),s._v(" "),t("h2",{attrs:{id:"ik-smart-分词测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ik-smart-分词测试"}},[s._v("#")]),s._v(" "),t("code",[s._v("ik_smart")]),s._v(" 分词测试")]),s._v(" "),t("p",[s._v("使用 head 执行下面测试：\n向 "),t("code",[s._v("http://192.168.64.181:9200/_analyze")]),s._v(" 路径提交 "),t("code",[s._v("POST")]),s._v(" 请求，并在协议体中提交 Json 数据：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"analyzer"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ik_smart"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"text"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"中华人民共和国国歌"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20201118112308424.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODMwNTQ0MA==,size_16,color_FFFFFF,t_70#pic_center",alt:"a"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);