(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1391:function(t,s,a){"use strict";a.r(s);var i=a(24),e=Object(i.a)({},(function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"多人协作github部分"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#多人协作github部分"}},[t._v("#")]),t._v(" 多人协作GitHub部分")]),t._v(" "),i("p"),i("div",{staticClass:"table-of-contents"},[i("ul",[i("li",[i("a",{attrs:{href:"#创建仓库"}},[t._v("创建仓库")])]),i("li",[i("a",{attrs:{href:"#增加合作者"}},[t._v("增加合作者")])]),i("li",[i("a",{attrs:{href:"#添加issue"}},[t._v("添加issue")])])])]),i("p"),t._v(" "),i("h2",{attrs:{id:"创建仓库"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#创建仓库"}},[t._v("#")]),t._v(" 创建仓库")]),t._v(" "),i("p",[t._v("首先，在组长账号中创建一个仓库，名为 work，在创建仓库时，需要说明第一节中提到的两个下拉框：")]),t._v(" "),i("p",[i("img",{attrs:{src:a(733),alt:"image-20220531185154793"}})]),t._v(" "),i("p",[t._v("左边的忽略文件下拉框：我们在写代码时，总会出现一些不需要上传到仓库的垃圾文件、缓存文件、备份文件、环境文件等等，可以创建一个忽略文件将这些不需要被上传到远程仓库的文件忽略掉。忽略文件的名字是 "),i("code",[t._v(".gitignore")]),t._v("，它被放置在仓库主目录下，将不需上传的文件的名字写入其中，Git 就会自动忽略它们。比如这个仓库是用来 Windows 开发的，就在下拉框中选择 Windows，如果这是一个保存 Java 项目的仓库，就选择 Java。这样，在仓库创建成功后，忽略文件就自动出现了，这个忽略文件中有对应的语言或工具中绝大部分通用的忽略规则。当然了，你也可以自己手动增删改。")]),t._v(" "),i("p",[t._v("如果在创建仓库时忘记了选择忽略文件，几个提交后突然想起来，怎么办？GitHub 上有人把忽略文件都做好了，打开链接 "),i("a",{attrs:{href:"https://github.com/github/gitignore",target:"_blank",rel:"noopener noreferrer"}},[t._v("github / gitignore"),i("OutboundLink")],1),t._v(" ，这个仓库里有很多忽略文件，选择你需要的放到自己的仓库即可。")]),t._v(" "),i("p",[t._v("右边的开源许可下拉框：关于开源许可证，不属于本课程所述范围，如有需要大家可以自行搜索。我们的仓库不需要选择这一项。选择这个之后，仓库中会出现相对应的图标，比如上面提到的忽略文件仓库：")]),t._v(" "),i("p",[i("img",{attrs:{src:a(734),alt:"image-20220531185201660"}})]),t._v(" "),i("p",[t._v("在组长账号中创建好新仓库，如下图：")]),t._v(" "),i("p",[i("img",{attrs:{src:a(735),alt:"image-20220531185207322"}})]),t._v(" "),i("p",[t._v("对上图右上角三个按钮进行说明：")]),t._v(" "),i("p",[t._v("Watch：这是一个下拉按钮，可以选择对此仓库关注、不关注、忽略等。")]),t._v(" "),i("p",[t._v("Star：如果觉得这个仓库很好，就点击这个按钮送一颗星，在淘宝提供刷星业务之前，仓库获得的星越多表示该项目越优秀。")]),t._v(" "),i("p",[t._v("Fork：在别人的仓库中点此按钮会克隆一个完全一样的仓库到你自己的账号中，包括所有分支、提交等，但不会克隆 issue（本节后面会讲到），当此仓库发生版本变化，不会自动同步到你克隆的仓库里，反之亦然。")]),t._v(" "),i("h2",{attrs:{id:"增加合作者"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#增加合作者"}},[t._v("#")]),t._v(" 增加合作者")]),t._v(" "),i("p",[t._v("现在在组长账号中增加该仓库的合作者，也就是组员：")]),t._v(" "),i("p",[i("img",{attrs:{src:a(736),alt:"image-20220531185215519"}})]),t._v(" "),i("p",[t._v("在浅蓝色输入框中写入组员 GitHub 账号的用户名，选择正确的用户，点击右侧按钮就会发送一封邀请邮件给组员：")]),t._v(" "),i("p",[i("img",{attrs:{src:a(737),alt:"image-20220531185223059"}})]),t._v(" "),i("p",[t._v("现在使用另一个浏览器登录组员的 GitHub 账号和邮箱，打开邮件：")]),t._v(" "),i("p",[i("img",{attrs:{src:a(738),alt:"image-20220531185228371"}})]),t._v(" "),i("p",[t._v("点击上图绿色按钮，跳转到下图：")]),t._v(" "),i("p",[i("img",{attrs:{src:a(739),alt:"image-20220531185233622"}})]),t._v(" "),i("p",[t._v("再次点击绿色按钮接受邀请，会跳转到组员访问组长仓库的页面：")]),t._v(" "),i("p",[i("img",{attrs:{src:a(740),alt:"image-20220531185239157"}})]),t._v(" "),i("p",[t._v("点击上图紫色框中的 Fork 按钮，克隆组长的仓库到组员的账号中，完成后自动跳转到下图页面，也就是组员的仓库页面：")]),t._v(" "),i("p",[i("img",{attrs:{src:a(741),alt:"image-20220531185244648"}})]),t._v(" "),i("h2",{attrs:{id:"添加issue"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#添加issue"}},[t._v("#")]),t._v(" 添加issue")]),t._v(" "),i("p",[t._v("切换到组长的 GitHub 页面，在仓库中添加一些项目任务或待解决问题，这些任务就是 issue：")]),t._v(" "),i("p",[i("img",{attrs:{src:a(742),alt:"image-20220531185255290"}})]),t._v(" "),i("p",[t._v("写好任务标题后，可以在右侧指派一位或多位项目参与者来完成，同样 GitHub 也会给被指派者发邮件的（可以在自己的 GitHub 账号上设置拒收哪类邮件）：")]),t._v(" "),i("p",[i("img",{attrs:{src:a(743),alt:"image-20220531185300546"}})]),t._v(" "),i("p",[t._v("写好两个 issue，前面说过的，组长仓库里的 issue 不会出现在组员仓库中：")]),t._v(" "),i("p",[i("img",{attrs:{src:a(744),alt:"image-20220531185307199"}})])])}),[],!1,null,null,null);s.default=e.exports},733:function(t,s,a){t.exports=a.p+"assets/img/image-20220531185154793.be38a942.png"},734:function(t,s,a){t.exports=a.p+"assets/img/image-20220531185201660.6bf573c0.png"},735:function(t,s,a){t.exports=a.p+"assets/img/image-20220531185207322.9eab5e52.png"},736:function(t,s,a){t.exports=a.p+"assets/img/image-20220531185215519.e394614e.png"},737:function(t,s,a){t.exports=a.p+"assets/img/image-20220531185223059.fcda38e5.png"},738:function(t,s,a){t.exports=a.p+"assets/img/image-20220531185228371.3d0e0c67.png"},739:function(t,s,a){t.exports=a.p+"assets/img/image-20220531185233622.b8269e4b.png"},740:function(t,s,a){t.exports=a.p+"assets/img/image-20220531185239157.5cdcfc12.png"},741:function(t,s,a){t.exports=a.p+"assets/img/image-20220531185244648.68a2d79a.png"},742:function(t,s,a){t.exports=a.p+"assets/img/image-20220531185255290.b556400f.png"},743:function(t,s,a){t.exports=a.p+"assets/img/image-20220531185300546.39561aa8.png"},744:function(t,s,a){t.exports=a.p+"assets/img/image-20220531185307199.2f2bb5c9.png"}}]);