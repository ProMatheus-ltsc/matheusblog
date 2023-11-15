(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1566:function(t,a,s){"use strict";s.r(a);var e=s(65),i=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"git-tag和github-releases"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-tag和github-releases"}},[t._v("#")]),t._v(" Git tag和GitHub releases")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#git-标签的作用"}},[t._v("Git 标签的作用")]),e("ul",[e("li",[e("a",{attrs:{href:"#创建标签"}},[t._v("创建标签")])]),e("li",[e("a",{attrs:{href:"#查看标签"}},[t._v("查看标签")])]),e("li",[e("a",{attrs:{href:"#删除本地标签"}},[t._v("删除本地标签")])]),e("li",[e("a",{attrs:{href:"#将本地标签推送到远程仓库"}},[t._v("将本地标签推送到远程仓库")])]),e("li",[e("a",{attrs:{href:"#删除远程仓库标签"}},[t._v("删除远程仓库标签")])]),e("li",[e("a",{attrs:{href:"#签出版本"}},[t._v("签出版本")])])])]),e("li",[e("a",{attrs:{href:"#github的releases"}},[t._v("GitHub的releases")])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"git-标签的作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-标签的作用"}},[t._v("#")]),t._v(" Git 标签的作用")]),t._v(" "),e("p",[t._v("在一个项目中，我们可能需要阶段性地发布一个版本，比如 "),e("code",[t._v("V1.0")]),t._v("、"),e("code",[t._v("V1.0.2")]),t._v("、"),e("code",[t._v("V3.2 Beta")]),t._v(" 之类的，Git 的标签可以满足这个需求。在一个长期大型项目中，可能会有数千个提交版本，我们可能需要对重要的节点性提交打个记号，这时也可以使用 Git 的标签功能。在一些项目相关的书籍中，我们会看到 “执行 xxx 命令签出这个版本以查看对应的代码” ，这也是使用 Git 的标签功能做到的。")]),t._v(" "),e("h3",{attrs:{id:"创建标签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建标签"}},[t._v("#")]),t._v(" 创建标签")]),t._v(" "),e("p",[t._v("前面的课程提到过 GitHub 的 issue 功能，issue 是仓库拥有者在 GitHub 上手动创建的，仓库被 Fork 时 issue 不会跟随。Tags 通常在本地使用 git 命令创建后推送到 GitHub 上，与 issue 相同的一点，它也只存在于项目仓库内，Fork 或提 PR 都不会带上它。在多人协作项目中，通常由组长对主仓库设置 Tags，单人项目自然就是自己说了算。")]),t._v(" "),e("p",[t._v("开始操作。首先，克隆仓库、配置信息、查看提交版本历史：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(855),alt:"image-20220531185459983"}})]),t._v(" "),e("p",[t._v("重要的一点，我们创建标签是给具体的某次提交创建的，跟分支无关。创建标签使用 "),e("code",[t._v("git tag [标签名] -m [备注信息] [提交版本号]")]),t._v(" 这个命令。其中 "),e("code",[t._v("-m [备注信息]")]),t._v(" 可以省略不写，但建议不要省略。"),e("code",[t._v("[提交版本号]")]),t._v(" 可以省略，如果是给当前分支最新的提交创建标签的话。")]),t._v(" "),e("p",[t._v("给当前分支当前版本创建一个标签：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(856),alt:"image-20220531185506213"}})]),t._v(" "),e("p",[t._v("这样一个本地标签就创建完成了。")]),t._v(" "),e("h3",{attrs:{id:"查看标签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看标签"}},[t._v("#")]),t._v(" 查看标签")]),t._v(" "),e("p",[t._v("执行 "),e("code",[t._v("git tag")]),t._v(" 命令显示仓库中的全部标签列表，执行 "),e("code",[t._v("git show [标签名]")]),t._v(" 查看标签详情：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(857),alt:"image-20220531185512683"}})]),t._v(" "),e("p",[t._v("前文已提到，标签是在提交的基础上创建的，如果仓库的多个分支中都有这个提交版本，那么这些分支上就有关于这个提交的相同的标签。")]),t._v(" "),e("h3",{attrs:{id:"删除本地标签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除本地标签"}},[t._v("#")]),t._v(" 删除本地标签")]),t._v(" "),e("p",[t._v("当我们执行 "),e("code",[t._v("git tag [标签名]")]),t._v(" 创建本地标签后，在仓库主目录的 "),e("code",[t._v(".git/refs/tags")]),t._v(" 目录下就会生成一个标签文件：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(858),alt:"image-20220531185521290"}})]),t._v(" "),e("p",[t._v("执行 "),e("code",[t._v("git tag -d [标签名]")]),t._v(" 删除本地标签，标签文件也会被删除：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(859),alt:"image-20220531185528897"}})]),t._v(" "),e("h3",{attrs:{id:"将本地标签推送到远程仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#将本地标签推送到远程仓库"}},[t._v("#")]),t._v(" 将本地标签推送到远程仓库")]),t._v(" "),e("p",[t._v("首先对两个提交版本创建对应的标签：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(860),alt:"image-20220531185535801"}})]),t._v(" "),e("p",[t._v("执行 "),e("code",[t._v("git push origin [标签名]")]),t._v(" 推送标签到远程仓库，注意前面的命令都只涉及本地操作不需要联网，此命令需要联网：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(861),alt:"image-20220531185544351"}})]),t._v(" "),e("p",[t._v("我们到浏览器上打开仓库主目录，点击下图红色框可以查看 releases 和 tags ：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(862),alt:"image-20220531185549253"}})]),t._v(" "),e("p",[t._v("点 Tags 按钮查看标签：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(863),alt:"image-20220531185554097"}})]),t._v(" "),e("p",[t._v("关于 releases 是什么，下文会介绍。")]),t._v(" "),e("p",[t._v("如果你一口气创建了 6 个标签，当然啦，这种情况很少发生，可以使用 "),e("code",[t._v("git push origin --tags")]),t._v(" 命令将全部本地标签推送至远程仓库：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(864),alt:"image-20220531185602047"}})]),t._v(" "),e("p",[t._v("查看远程仓库情况：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(865),alt:"image-20220531185608545"}})]),t._v(" "),e("h3",{attrs:{id:"删除远程仓库标签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除远程仓库标签"}},[t._v("#")]),t._v(" 删除远程仓库标签")]),t._v(" "),e("p",[t._v("如果标签废弃不用或者写错了，可以使用 "),e("code",[t._v("git push origin :refs/tags/[标签名]")]),t._v(" 删除远程仓库的标签，命令中的标签名其实也就是文件名：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(866),alt:"image-20220531185613939"}})]),t._v(" "),e("p",[t._v("再次查看远程仓库：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(867),alt:"image-20220531185619149"}})]),t._v(" "),e("p",[t._v("好，删除成功。以上就是关于 Git 标签的创建、查看、推送、删除的操作流程。")]),t._v(" "),e("p",[t._v("查看本地仓库的标签列表：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(868),alt:"image-20220531185625053"}})]),t._v(" "),e("p",[t._v("咦，001 标签还在呢？是的，本地标签需要另外手动删除，上文已演示。")]),t._v(" "),e("h3",{attrs:{id:"签出版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#签出版本"}},[t._v("#")]),t._v(" 签出版本")]),t._v(" "),e("p",[t._v("现在介绍一下关于 “签出版本” 的操作，我们会见到类似这种说明：“如果你从 GitHub 上克隆了这个程序的仓库，那么可以在仓库主目录下执行 git checkout xxx 签出程序的这个版本。” 其实签出版本就是指定某个提交版本创建一个新的分支。")]),t._v(" "),e("p",[t._v("假定当前的 work 仓库就是一个程序，我们要签出 001 版本，执行以下步骤即可。")]),t._v(" "),e("p",[t._v("首先执行 "),e("code",[t._v("git checkout [标签名]")]),t._v(" 切换到之前的某个提交版本，然后执行 "),e("code",[t._v("git checkout -b [新的分支名]")]),t._v(" 将此提交版本固定到一个新分支上并切换到此分支：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(869),alt:"image-20220531185633037"}})]),t._v(" "),e("p",[t._v("这样就利用标签完成了提交版本签出的工作。")]),t._v(" "),e("h2",{attrs:{id:"github的releases"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#github的releases"}},[t._v("#")]),t._v(" GitHub的releases")]),t._v(" "),e("p",[t._v("GitHub 的 releases 是 2013 年发布的新功能，旨在协助软件开发者分发新版本给用户，关于这个功能这里仅作简单介绍。")]),t._v(" "),e("p",[t._v("当项目组织宣布发布一个软件产品的版本，发布过程就是一个将软件交付给最终用户的工作流。版本是具有修改日志和二进制文件的一类对象，它们提供了 Git 工作流之外的完整项目历史，它们也可以从存储库的主页上被访问。发布版 release 附带发布说明和下载软件或源代码的链接。按照许多 Git 项目的约定，发布版本与 Git 的标签 tag 绑定。您可以使用现有的标签，或者让 release 在发布时创建标签。这就是上面查看 GitHub 仓库中标签信息时出现的场景。")]),t._v(" "),e("p",[t._v("标签是 Git 中的概念，而 releases 则是 Github、码云等源码托管商所提供的更高层的概念。Git 本身是没有 releases 这个概念，只有 tag。两者之间的关系则是，release 基于 tag，为 tag 添加更丰富的信息，一般是编译好的文件。")])])}),[],!1,null,null,null);a.default=i.exports},855:function(t,a,s){t.exports=s.p+"assets/img/image-20220531185459983.45dea898.png"},856:function(t,a,s){t.exports=s.p+"assets/img/image-20220531185506213.3c7d98b0.png"},857:function(t,a,s){t.exports=s.p+"assets/img/image-20220531185512683.2c655bc9.png"},858:function(t,a,s){t.exports=s.p+"assets/img/image-20220531185521290.f7f49141.png"},859:function(t,a,s){t.exports=s.p+"assets/img/image-20220531185528897.88e585a7.png"},860:function(t,a,s){t.exports=s.p+"assets/img/image-20220531185535801.ba91f10f.png"},861:function(t,a,s){t.exports=s.p+"assets/img/image-20220531185544351.16690948.png"},862:function(t,a,s){t.exports=s.p+"assets/img/image-20220531185549253.828aab22.png"},863:function(t,a,s){t.exports=s.p+"assets/img/image-20220531185554097.a69576ec.png"},864:function(t,a,s){t.exports=s.p+"assets/img/image-20220531185602047.f9ef7401.png"},865:function(t,a,s){t.exports=s.p+"assets/img/image-20220531185608545.9e5c1bf5.png"},866:function(t,a,s){t.exports=s.p+"assets/img/image-20220531185613939.4dc64287.png"},867:function(t,a,s){t.exports=s.p+"assets/img/image-20220531185619149.7f5155d1.png"},868:function(t,a,s){t.exports=s.p+"assets/img/image-20220531185625053.10a07c3a.png"},869:function(t,a,s){t.exports=s.p+"assets/img/image-20220531185633037.08ab4c50.png"}}]);