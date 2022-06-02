(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1571:function(t,s,a){"use strict";a.r(s);var e=a(24),_=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"git分支操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git分支操作"}},[t._v("#")]),t._v(" Git分支操作")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#为git命令设置别名"}},[t._v("为Git命令设置别名")])]),e("li",[e("a",{attrs:{href:"#git分支管理"}},[t._v("Git分支管理")]),e("ul",[e("li",[e("a",{attrs:{href:"#git-fetch-刷新本地分支信息"}},[t._v("git fetch 刷新本地分支信息")])]),e("li",[e("a",{attrs:{href:"#创建新的本地分支"}},[t._v("创建新的本地分支")])]),e("li",[e("a",{attrs:{href:"#将新分支中的提交推送至远程仓库"}},[t._v("将新分支中的提交推送至远程仓库")])]),e("li",[e("a",{attrs:{href:"#本地分支跟踪远程分支"}},[t._v("本地分支跟踪远程分支")])]),e("li",[e("a",{attrs:{href:"#删除远程分支"}},[t._v("删除远程分支")])]),e("li",[e("a",{attrs:{href:"#本地分支的更名与删除"}},[t._v("本地分支的更名与删除")])])])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"为git命令设置别名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为git命令设置别名"}},[t._v("#")]),t._v(" 为Git命令设置别名")]),t._v(" "),e("p",[t._v("Git 可以对这些命令设置别名，以便简化对它们的使用，设置别名的命令是 "),e("code",[t._v("git config --global alias.[别名] [原命令]")]),t._v("，如果原命令中有选项，需要加引号。别名是自定义的，可以随意命名，设置后，原命令和别名具有同等作用。操作如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(768),alt:"20220221112935"}})]),t._v(" "),e("p",[t._v("自己设置的别名要记住，也可以使用 "),e("code",[t._v("git config -l")]),t._v(" 命令查看配置文件。下面文档中的命令将使用这些别名。")]),t._v(" "),e("h2",{attrs:{id:"git分支管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git分支管理"}},[t._v("#")]),t._v(" Git分支管理")]),t._v(" "),e("h3",{attrs:{id:"git-fetch-刷新本地分支信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-fetch-刷新本地分支信息"}},[t._v("#")]),t._v(" git fetch 刷新本地分支信息")]),t._v(" "),e("p",[t._v("在介绍分支前，先讲解另一个命令  "),e("code",[t._v("git fetch")]),t._v("，它的作用是将远程仓库的分支信息拉取到本地仓库，注意，仅仅是更新了本地的远程分支信息，也就是执行  "),e("code",[t._v("git branch -avv")]),t._v("  命令时，查看到的  "),e("code",[t._v("remotes")]),t._v("  开头的行的分支信息。")]),t._v(" "),e("p",[t._v("举例说明一下，首先我们在 GitHub 页面上对 one.txt 文件进行修改并增加一次提交。")]),t._v(" "),e("p",[t._v("提交完成后，提交数变成 3 个，点下图紫色框中的链接可以看到提交记录：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(769),alt:"2_20220221113055"}})]),t._v(" "),e("p",[e("img",{attrs:{src:a(770),alt:"3_20220221113119"}})]),t._v(" "),e("p",[t._v("在实验环境中执行 "),e("code",[t._v("git fetch")]),t._v(" 命令，然后执行 "),e("code",[t._v("git branch -avv")]),t._v(" 查看分支信息：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(771),alt:"4_20220221113147"}})]),t._v(" "),e("p",[t._v("可以看到，本地分支 master 的版本号无变化，而远程分支已经更新。所以，"),e("code",[t._v("fetch")]),t._v(" 命令的作用是刷新保存在本地仓库的远程分支信息，此命令需要联网。此时若想使本地 master 分支的提交版本为最新，可以执行 "),e("code",[t._v("git pull")]),t._v(" 命令来拉取远程分支到本地，"),e("code",[t._v("pull")]),t._v(" 是拉取远程仓库的数据到本地，需要联网，而由于前面执行过 "),e("code",[t._v("git fetch")]),t._v(" 命令，所以也可以执行 "),e("code",[t._v("git rebase origin/master")]),t._v(" 命令来实现 “使本地 master 分支基于远程仓库的 master 分支”，"),e("code",[t._v("rebase")]),t._v(" 命令在后面还会经常用到，这里只需按部就班操作即可：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(772),alt:"5_20220221113227"}})]),t._v(" "),e("p",[t._v("可以看到，远程仓库 master 分支、本地仓库的 origin/master 分支、本地仓库的 master 分支已经一致。")]),t._v(" "),e("h3",{attrs:{id:"创建新的本地分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建新的本地分支"}},[t._v("#")]),t._v(" 创建新的本地分支")]),t._v(" "),e("p",[t._v("分支在项目开发中作用重大，多人协作时尤其不可或缺。例如一个项目上线了 1.0 版本，研发部门需要开发 1.1、1.2 两个测试版，增加不同的新功能，测试版的代码显然不能在正式版所在的分支上，此时需要新的分支来存放不同版次的代码。再例如实验楼的课程团队在维护课程仓库时，每个人都有各自的分支，在自己的分支上进行修改，然后向 master 分支提 PR（pull request），最后从 master 分支推送到线上。")]),t._v(" "),e("p",[t._v("首先，克隆远程仓库到本地，进入仓库主目录，执行  "),e("code",[t._v("git br")]),t._v("  查看分支信息：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(773),alt:"1_20220221113316"}})]),t._v(" "),e("p",[t._v("执行  "),e("code",[t._v("git branch [分支名]")]),t._v("  可以创建新的分支：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(402),alt:"输入图片描述"}})]),t._v(" "),e("p",[e("img",{attrs:{src:a(774),alt:"3_20220221113428"}})]),t._v(" "),e("p",[t._v("此命令创建新分支后并未切换到新分支，还是在 master 分支上，执行 "),e("code",[t._v("git checkout [分支名]")]),t._v(" 切换分支，"),e("code",[t._v("checkout")]),t._v(" 也是常用命令，先给它设置别名，然后切换分支：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(775),alt:"5_20220221113501"}})]),t._v(" "),e("p",[t._v("创建新分支还要手动切换太麻烦，介绍另一个常用的命令 "),e("code",[t._v("git checkout -b [分支名]")]),t._v(" 创建分支并切换到新分支：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(776),alt:"6_20220221113535"}})]),t._v(" "),e("p",[e("img",{attrs:{src:a(777),alt:"1_20220221113624"}})]),t._v(" "),e("p",[t._v("如上图所示的分支信息，前两行是新建的本地分支信息，它们的版本号与主分支 master 一致，这是因为在哪个分支上创建新分支，新分支的提交记录就与哪个分支一致。新建分支并无跟踪任何远程分支，所以没有 master 分支中的中括号和括号内的蓝色远程分支名。")]),t._v(" "),e("p",[t._v("假设我们要在当前分支 dev1 上开发一个新的功能，需要增加一个文件 new_func1，然后生成一个新的提交：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(778),alt:"2_20220221113659"}})]),t._v(" "),e("p",[e("img",{attrs:{src:a(779),alt:"3_20220221113719"}})]),t._v(" "),e("h3",{attrs:{id:"将新分支中的提交推送至远程仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#将新分支中的提交推送至远程仓库"}},[t._v("#")]),t._v(" 将新分支中的提交推送至远程仓库")]),t._v(" "),e("p",[t._v("好，新功能已经写好并提交到了版本区，现在要推送了，推送到哪里呢？正常逻辑当然要推送到远程仓库的同名分支，不过现在远程仓库里只有一个分支：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(402),alt:"2_20220221113354"}})]),t._v(" "),e("p",[t._v("上图紫色框中是一个下拉按钮，点击后显示仓库中的全部分支，按钮上显示的是当前所在分支。")]),t._v(" "),e("p",[t._v("执行 "),e("code",[t._v("git push [主机名] [本地分支名]:[远程分支名]")]),t._v(" 即可将本地分支推送到远程仓库的分支中，通常冒号前后的分支名是相同的，如果是相同的，可以省略 "),e("code",[t._v(":[远程分支名]")]),t._v("，如果远程分支不存在，会自动创建：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(780),alt:"image-20220531184951084"}})]),t._v(" "),e("p",[t._v("上图命令可以简写为 "),e("code",[t._v("git push origin dev1")]),t._v(" 。注意哦，这是我们创建 SSH 关联后第一次执行 "),e("code",[t._v("push")]),t._v(" 命令，可以看到传输速度有明显的提高，更重要的是，不再需要重复输入用户名和密码了，另外打印信息的第一行是警告信息，因为是这个分支的第一次推送嘛，下次执行推送就不会再出现了。现在执行 "),e("code",[t._v("git br")]),t._v(" 查看一下分支情况：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(781),alt:"image-20220531184958055"}})]),t._v(" "),e("p",[t._v("可以看到，远程分支 origin/dev1 的信息已经在本地存在，且与本地同名分支一致。再看下 GitHub 页面的情况：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(782),alt:"image-20220531185002993"}})]),t._v(" "),e("p",[t._v("很好，与预期毫无二致。")]),t._v(" "),e("h3",{attrs:{id:"本地分支跟踪远程分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地分支跟踪远程分支"}},[t._v("#")]),t._v(" 本地分支跟踪远程分支")]),t._v(" "),e("p",[t._v("现在有个问题，当我们再次在 dev1 分支上修改并提交，推送到远程仓库时还是要输入上面的那个长长的命令，好不方便。如果能和 master 分支一样跟踪远程同名分支，就可以直接使用 "),e("code",[t._v("git push")]),t._v(" 命令推送了。有办法的，执行这个命令 "),e("code",[t._v("git branch -u [主机名/远程分支名] [本地分支名]")]),t._v(" 将本地分支与远程分支关联，或者说使本地分支跟踪远程分支。如果是设置当前所在分支跟踪远程分支，最后一个参数本地分支名可以省略不写：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(783),alt:"image-20220531185015083"}})]),t._v(" "),e("p",[e("img",{attrs:{src:a(784),alt:"image-20220531185031055"}})]),t._v(" "),e("p",[t._v("这个命令的 "),e("code",[t._v("-u")]),t._v(" 选项是 "),e("code",[t._v("--set-upstream")]),t._v(" 的缩写。可不可以让本地分支跟踪远程非同名分支呢？可以的，尽管几乎遇不到这种自找麻烦的需求。可不可以撤销本地分支对远程分支的跟踪呢？也是可以的，执行 "),e("code",[t._v("git branch --unset-upstream [分支名]")]),t._v(" 即可撤销该分支对远程分支的跟踪，同样地，如果撤销当前所在的分支的跟踪，分支名可以省略不写：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(785),alt:"image-20220531185022454"}})]),t._v(" "),e("p",[e("img",{attrs:{src:a(786),alt:"image-20220531185039538"}})]),t._v(" "),e("p",[t._v("问题又来了，前面的操作是先将本地分支推送到远程仓库，使远程仓库创建新分支，然后再执行命令使本地分支跟踪远程分支，有没有办法在推送时就自动跟踪远程分支呢？有的，在推送的时候，加个 "),e("code",[t._v("--set-upstream")]),t._v(" 或其简写 "),e("code",[t._v("-u")]),t._v(" 选项即可，现在切换到 dev 分支试一下这个命令：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(787),alt:"image-20220531185046662"}})]),t._v(" "),e("p",[e("img",{attrs:{src:a(788),alt:"image-20220531185051796"}})]),t._v(" "),e("h3",{attrs:{id:"删除远程分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除远程分支"}},[t._v("#")]),t._v(" 删除远程分支")]),t._v(" "),e("p",[t._v("接下来，介绍一下删除分支的方法。")]),t._v(" "),e("p",[t._v("首先，删除远程分支，使用 "),e("code",[t._v("git push [主机名] :[远程分支名]")]),t._v(" ，如果一次性删除多个，可以这样："),e("code",[t._v("git push [主机名] :[远程分支名] :[远程分支名] :[远程分支名]")]),t._v(" 。此命令的原理是将空分支推送到远程分支，结果自然就是远程分支被删除。另一个删除远程分支的命令："),e("code",[t._v("git push [主机名] --delete [远程分支名]")]),t._v("。删除远程分支的命令可以在任意本地分支中执行。两个命令分别试一下：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(789),alt:"image-20220531185059319"}})]),t._v(" "),e("p",[e("img",{attrs:{src:a(790),alt:"image-20220531185104205"}})]),t._v(" "),e("p",[t._v("可以看到本地仓库已经没有远程分支 dev 和 dev1 的分支信息。查看 GitHub 仓库页面：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(791),alt:"image-20220531185112272"}})]),t._v(" "),e("p",[t._v("也只剩 master 一个分支。操作成功。")]),t._v(" "),e("h3",{attrs:{id:"本地分支的更名与删除"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地分支的更名与删除"}},[t._v("#")]),t._v(" 本地分支的更名与删除")]),t._v(" "),e("p",[t._v("回到实验环境，使用 "),e("code",[t._v("git branch -D [分支名]")]),t._v(" 删除本地分支，同样地，此命令也可以一次删除多个，将需要删除的分支名罗列在命令后面即可。在此之前，先介绍一个极少用到的命令：给本地分支改名 "),e("code",[t._v("git branch -m [原分支名] [新分支名]")]),t._v(" ，若修改当前所在分支的名字，原分支名可以省略不写：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(792),alt:"image-20220531185119354"}})]),t._v(" "),e("p",[t._v("好，现在要一次性删除本地分支 ved 和 dev1。需要注意的一点：当前所在的分支不能被删除。切换到 master 分支，然后执行 "),e("code",[t._v("git branch -D ved dev1")]),t._v(" 命令：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(793),alt:"image-20220531185126644"}})]),t._v(" "),e("p",[t._v("执行 "),e("code",[t._v("git branch -avv")]),t._v(" 查看当前仓库分支状态：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(794),alt:"image-20220531185138348"}})]),t._v(" "),e("p",[t._v("很好，一切都回到了课程开始时的样子，就像什么都没有发生。本节课程就到这里。")])])}),[],!1,null,null,null);s.default=_.exports},402:function(t,s,a){t.exports=a.p+"assets/img/2_20220221113354.e9aaadd4.png"},768:function(t,s,a){t.exports=a.p+"assets/img/20220221112935.eaaa5952.png"},769:function(t,s,a){t.exports=a.p+"assets/img/2_20220221113055.197ae5c0.png"},770:function(t,s,a){t.exports=a.p+"assets/img/3_20220221113119.f01a3f56.png"},771:function(t,s,a){t.exports=a.p+"assets/img/4_20220221113147.ef2c64ef.png"},772:function(t,s,a){t.exports=a.p+"assets/img/5_20220221113227.ad7c1eb9.png"},773:function(t,s,a){t.exports=a.p+"assets/img/1_20220221113316.ade69599.png"},774:function(t,s,a){t.exports=a.p+"assets/img/3_20220221113428.ff17a525.png"},775:function(t,s,a){t.exports=a.p+"assets/img/5_20220221113501.cecec48a.png"},776:function(t,s,a){t.exports=a.p+"assets/img/6_20220221113535.6d8e3ba7.png"},777:function(t,s,a){t.exports=a.p+"assets/img/1_20220221113624.31a89b98.png"},778:function(t,s,a){t.exports=a.p+"assets/img/2_20220221113659.48883d72.png"},779:function(t,s,a){t.exports=a.p+"assets/img/3_20220221113719.5f281ec1.png"},780:function(t,s,a){t.exports=a.p+"assets/img/image-20220531184951084.2b7f4258.png"},781:function(t,s,a){t.exports=a.p+"assets/img/image-20220531184958055.82cbd02f.png"},782:function(t,s,a){t.exports=a.p+"assets/img/image-20220531185002993.10976032.png"},783:function(t,s,a){t.exports=a.p+"assets/img/image-20220531185015083.ebd7d718.png"},784:function(t,s,a){t.exports=a.p+"assets/img/image-20220531185031055.6932f1f0.png"},785:function(t,s,a){t.exports=a.p+"assets/img/image-20220531185022454.8944b45c.png"},786:function(t,s,a){t.exports=a.p+"assets/img/image-20220531185039538.39d42d66.png"},787:function(t,s,a){t.exports=a.p+"assets/img/image-20220531185046662.f096cf42.png"},788:function(t,s,a){t.exports=a.p+"assets/img/image-20220531185051796.df419f86.png"},789:function(t,s,a){t.exports=a.p+"assets/img/image-20220531185059319.3990cbf6.png"},790:function(t,s,a){t.exports=a.p+"assets/img/image-20220531185104205.6650a42f.png"},791:function(t,s,a){t.exports=a.p+"assets/img/image-20220531185112272.fbbc60a8.png"},792:function(t,s,a){t.exports=a.p+"assets/img/image-20220531185119354.2aa66fde.png"},793:function(t,s,a){t.exports=a.p+"assets/img/image-20220531185126644.e9e2d3e5.png"},794:function(t,s,a){t.exports=a.p+"assets/img/image-20220531185138348.02361c35.png"}}]);