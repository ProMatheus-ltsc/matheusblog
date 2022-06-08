(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1622:function(t,s,a){"use strict";a.r(s);var e=a(65),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"多人协作git部分"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多人协作git部分"}},[t._v("#")]),t._v(" 多人协作Git部分")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#克隆仓库到本地"}},[t._v("克隆仓库到本地")])]),e("li",[e("a",{attrs:{href:"#完成任务并推送到自己的仓库"}},[t._v("完成任务并推送到自己的仓库")])]),e("li",[e("a",{attrs:{href:"#提pr-检查合并pr"}},[t._v("提PR&检查合并PR")])]),e("li",[e("a",{attrs:{href:"#同步主仓库"}},[t._v("同步主仓库")])]),e("li",[e("a",{attrs:{href:"#如何处理代码冲突"}},[t._v("如何处理代码冲突")])]),e("li",[e("a",{attrs:{href:"#如何进行版本回退"}},[t._v("如何进行版本回退")]),e("ul",[e("li",[e("a",{attrs:{href:"#回退到当前版本-放弃所有修改"}},[t._v("回退到当前版本(放弃所有修改)")])]),e("li",[e("a",{attrs:{href:"#放弃某一个文件的修改"}},[t._v("放弃某一个文件的修改")])]),e("li",[e("a",{attrs:{href:"#回退到某一版本但保存自该版本起的修改"}},[t._v("回退到某一版本但保存自该版本起的修改")])]),e("li",[e("a",{attrs:{href:"#回退到某一版本并且放弃所有的修改"}},[t._v("回退到某一版本并且放弃所有的修改")])]),e("li",[e("a",{attrs:{href:"#回退远程仓库的版本"}},[t._v("回退远程仓库的版本")])]),e("li",[e("a",{attrs:{href:"#如何以当前版本为基础-回退指定个commit"}},[t._v("如何以当前版本为基础，回退指定个commit")])]),e("li",[e("a",{attrs:{href:"#如何回退到和远程版本一样"}},[t._v("如何回退到和远程版本一样")])])])]),e("li",[e("a",{attrs:{href:"#如何进行分支合并"}},[t._v("如何进行分支合并")]),e("ul",[e("li",[e("a",{attrs:{href:"#本地合并分支"}},[t._v("本地合并分支:")])]),e("li",[e("a",{attrs:{href:"#远程分支合并"}},[t._v("远程分支合并")])])])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"克隆仓库到本地"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#克隆仓库到本地"}},[t._v("#")]),t._v(" 克隆仓库到本地")]),t._v(" "),e("p",[t._v("打开实验环境，以组员的身份克隆自己的 work 仓库到实验环境，由于之前已经设置了实验环境的 SSH 公钥到 GitHub，所以我们使用 git 开头的地址来克隆：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(843),alt:"image-20220531185318638"}})]),t._v(" "),e("p",[t._v("链接的结尾 .git 是不需要的：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(844),alt:"image-20220531185324865"}})]),t._v(" "),e("h2",{attrs:{id:"完成任务并推送到自己的仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#完成任务并推送到自己的仓库"}},[t._v("#")]),t._v(" 完成任务并推送到自己的仓库")]),t._v(" "),e("p",[t._v("现在我们要完成组长仓库的一个 issue，注意每个 issue 在创建后都会生成一个编号，我们首先完成 1 号 issue：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(845),alt:"image-20220531185330055"}})]),t._v(" "),e("p",[t._v("创建文件，添加到暂存区，提交，查看本地仓库分支状态：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(846),alt:"image-20220531185336069"}})]),t._v(" "),e("p",[e("img",{attrs:{src:a(847),alt:"image-20220531185341877"}})]),t._v(" "),e("p",[t._v("注意在执行 commit 命令时，备注信息里有个 “fix #1”，这是必要的，当备注信息中含有此字样的 commit 出现在组长仓库，仓库中编号为 #1 的 issue 就会自动关闭。类似的字样还有 “fixes #xxx、fixed #xxx、closes #xxx、close #xxx、closed #xxx”，这些并不重要，选择字母最少的 fix 就可以了。当然偶尔忘记写这个字样也不要紧的，issue 可以手动关闭，甚至关掉的 issue 还能再开。")]),t._v(" "),e("p",[t._v("完成以上操作，组员的 GitHub 仓库会发生变化，新增一个版本号为 b374 的提交：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(848),alt:"image-20220531185346742"}})]),t._v(" "),e("h2",{attrs:{id:"提pr-检查合并pr"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#提pr-检查合并pr"}},[t._v("#")]),t._v(" 提PR&检查合并PR")]),t._v(" "),e("p",[t._v("接下来，怎么把修改从组员的仓库添加到组长的仓库呢？这就用到了 pull request 方法，简称 PR。这个词组比较费解，两个词都有动词属性，字面意思是 “拉，请求”，可以理解为这是一个名词性词组，意为 “允许被拉取的请求”，创建一个 PR 就是从甲分支向乙分支提一个请求，该请求中有一个或多个提交，对方觉得可以、没问题，就合并（merge) 这个请求，也就是把请求中所有提交的修改增加到乙分支上，整个过程简称 “提 PR”、“检查合并 PR”。提 PR 既可以在仓库内，也可以跨用户跨仓库。")]),t._v(" "),e("p",[t._v("好，现在我们从组员的 work 仓库 master 分支给组长的 work 仓库 master 分支提一个 PR：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(849),alt:"image-20220531185353928"}})]),t._v(" "),e("p",[t._v("如下图所示，仔细检查紫色框中的内容是否正确，再看绿色椭圆形框中的绿色字样 “Able to merge.”，说明这个 PR 中的修改跟目标分支没有冲突：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(850),alt:"image-20220531185359225"}})]),t._v(" "),e("p",[t._v("从上图还可得知一些信息：该 PR 里有 1 个提交，1 个文件改动，1 个贡献者。点击上图绿色按钮跳转到确认页面，再次点击下图绿色按钮即可完成本次 “提 PR” 工作：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(851),alt:"image-20220531185404960"}})]),t._v(" "),e("p",[t._v("完成后，页面自动跳转到组长的 work 仓库 PR 的合并页面：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(852),alt:"image-20220531185412332"}})]),t._v(" "),e("p",[t._v("该页面只有参与项目协作的成员有权限进入，当前 GitHub 的登录用户是组员，所以可见，且对这个仓库有完全的管理权限，除了删除仓库。当然了，检查合并 PR 的权限也是有的。重要的一点：提了 PR 之后，一定要求参与项目的其他成员来检查合并，不要自己来，尽管自己有权限。")]),t._v(" "),e("p",[t._v("上图中绿色按钮是个下拉按钮，合并 PR 的方法有三种，分别解释一下：")]),t._v(" "),e("p",[e("code",[t._v("Create a merge commit")]),t._v(" ：这种方式会在组长仓库的 master 分支上生成一个新的提交，且保留 PR 中的所有提交信息。这是一种常规操作，用得最多。")]),t._v(" "),e("p",[e("code",[t._v("Squash and merge")]),t._v(" ：压缩合并，它会把 PR 中的全部提交压缩成一个。此方法的优点就是让提交列表特别整洁。一个 PR 里有很多提交，每个提交都是很细小的改动，保留这些提交没什么意义，这种情况就使用此方法合并 PR。")]),t._v(" "),e("p",[e("code",[t._v("Rebase and merge")]),t._v(" ：这种方法不会生成新的提交，例如 PR 中有 6 个提交，用此方法合并后，组长仓库也会新增 6 个提交。注意，这些提交的版本号与组员的提交不同，此外完全一样。")]),t._v(" "),e("p",[t._v("现在切换到另一个登录组长账号的浏览器，打开合并 PR 的页面，用第一种方法合并：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(853),alt:"image-20220531185419237"}})]),t._v(" "),e("p",[t._v("这就是第一种方式合并的结果，生成了一个新的提交，这个提交里没有修改。因为样子不太美观，这是我最不喜欢用的方式。仔细看上图的 issue，变成了 1 个，也就是说在合并 PR 后，#1 issue 被关闭了。")]),t._v(" "),e("p",[t._v("以上就是一次完整的修改、提交、推送、提 PR、合并 PR 的过程。")]),t._v(" "),e("p",[e("strong",[t._v("需要注意的一点：从 A 向 B 提 PR 后，在 PR 合并或关闭前，A 上所有新增的提交都会出现在 PR 里。")])]),t._v(" "),e("h2",{attrs:{id:"同步主仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#同步主仓库"}},[t._v("#")]),t._v(" 同步主仓库")]),t._v(" "),e("p",[t._v("因为组长的 master 分支新增了一个空提交，所以需要让组员的仓库同步组长的仓库，使它们的提交版本一致。作为组员，要时刻保持自己的 master 分支与组长的一致，以避免在下次提 PR 时出现冲突，该操作叫做 “同步主仓库”，组长的仓库就是主仓库。")]),t._v(" "),e("p",[t._v("提 PR、合并 PR 只能在 GitHub 页面上操作。同步主仓库是要用 Git 操作的。现在回到实验环境中操作。首先，使用 "),e("code",[t._v("remote")]),t._v(" 系列命令来增加一个关联主机，执行 "),e("code",[t._v("git remote add [主机名] [主仓库的地址]")]),t._v("，注意，主仓库的地址使用 https 开头的：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(854),alt:"image-20220531185426274"}})]),t._v(" "),e("p",[t._v("如上图所示，主机名是随意定义的，只要不是 origin 就可以，因为自己的仓库地址对应的主机名是 origin，主仓库的主机名通常定义为 up 或 upstream，这个主机名其实就是一个变量，它的值就是仓库地址，例如 "),e("code",[t._v("git push origin master")]),t._v(" 完全等于 "),e("code",[t._v("git push git@github.com:Manchangdx/work master")]),t._v(" 。")]),t._v(" "),e("p",[t._v("如此说来，关联主仓库后也没什么变化嘛，确实如此，即使地址写错也不会报出来。现在可以使用前面课程介绍过的 "),e("code",[t._v("fetch")]),t._v(" 命令来拉取主仓库的全部分支信息到本地仓库了，我有时使用这个命令看上一个命令是否有拼写错误：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(855),alt:"image-20220531185431706"}})]),t._v(" "),e("p",[e("img",{attrs:{src:a(856),alt:"image-20220531185436984"}})]),t._v(" "),e("p",[t._v("如何同步主仓库哩？方法有二，一是执行 "),e("code",[t._v("git pull --rebase up master")]),t._v(" ，此命令需联网，二是执行 "),e("code",[t._v("git rebase up/master")]),t._v("，此命令不联网，因为前面已经执行了 "),e("code",[t._v("git fetch up")]),t._v(" 这个需要联网的命令，本地已经有了最新的主仓库 master 分支信息，所以可以这么操作。")]),t._v(" "),e("p",[t._v("总结一下："),e("code",[t._v("git pull --rebase")]),t._v(" = "),e("code",[t._v("git fetch")]),t._v(" + "),e("code",[t._v("git rebase")]),t._v("。现在使用方法二来同步：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(857),alt:"image-20220531185444137"}})]),t._v(" "),e("p",[e("img",{attrs:{src:a(858),alt:"image-20220531185450773"}})]),t._v(" "),e("p",[t._v("同步主仓库已完成。现在可以继续修改提交自己的 master 分支了。然后一并推送到自己的远程仓库。")]),t._v(" "),e("p",[t._v("以上是在自己 Fork 的仓库里进行修改的过程。还有一种常用的方式，就是不用 Fork，直接克隆组长的仓库到本地，然后各自创建自己的分支，在自己的分支上进行修改提交，最后从自己的分支向 master 分支提 PR。方式不同，原理一样。")]),t._v(" "),e("h2",{attrs:{id:"如何处理代码冲突"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何处理代码冲突"}},[t._v("#")]),t._v(" 如何处理代码冲突")]),t._v(" "),e("p",[t._v("冲突合并一般是因为自己的本地做的提交和服务器上的提交有差异，并且这些差异中的文件改动，Git不能自动合并，那么就需要用户手动进行合并")]),t._v(" "),e("p",[t._v("如我这边执行"),e("code",[t._v("git pull origin master")])]),t._v(" "),e("h4",{attrs:{id:"如果git能够自动合并-那么过程看起来是这样的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如果git能够自动合并-那么过程看起来是这样的"}},[t._v("#")]),t._v(" 如果Git能够自动合并，那么过程看起来是这样的")]),t._v(" "),e("p",[e("img",{attrs:{src:a(859),alt:"输入图片说明"}})]),t._v(" "),e("p",[t._v("拉取的时候，Git自动合并，并产生了一次提交。")]),t._v(" "),e("h4",{attrs:{id:"如果git不能够自动合并-那么会提示"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如果git不能够自动合并-那么会提示"}},[t._v("#")]),t._v(" 如果Git不能够自动合并，那么会提示")]),t._v(" "),e("p",[e("img",{attrs:{src:a(860),alt:"输入图片说明"}})]),t._v(" "),e("p",[t._v("这个时候我们就可以知道"),e("code",[t._v("README.MD")]),t._v("有冲突，需要我们手动解决，修改"),e("code",[t._v("README.MD")]),t._v("解决冲突")]),t._v(" "),e("p",[e("img",{attrs:{src:a(861),alt:"输入图片说明"}})]),t._v(" "),e("p",[t._v("可以看出来，在1+1=几的这行代码上产生了冲突，解决冲突的目标是保留期望存在的代码，这里保留1+1=2，然后保存退出。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(862),alt:"输入图片说明"}})]),t._v(" "),e("p",[t._v("退出之后，确保所有的冲突都得以解决，然后就可以使用")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('git add .\n\ngit commit -m "fixed conflicts"\n\ngit push origin master`\n\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("p",[t._v("即可完成一次冲突的合并。")]),t._v(" "),e("p",[t._v("整个过程看起来是这样的")]),t._v(" "),e("p",[e("img",{attrs:{src:a(863),alt:"输入图片说明"}})]),t._v(" "),e("h2",{attrs:{id:"如何进行版本回退"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何进行版本回退"}},[t._v("#")]),t._v(" 如何进行版本回退")]),t._v(" "),e("h3",{attrs:{id:"回退到当前版本-放弃所有修改"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#回退到当前版本-放弃所有修改"}},[t._v("#")]),t._v(" 回退到当前版本(放弃所有修改)")]),t._v(" "),e("p",[e("img",{attrs:{src:a(864),alt:"输入图片说明"}})]),t._v(" "),e("h3",{attrs:{id:"放弃某一个文件的修改"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#放弃某一个文件的修改"}},[t._v("#")]),t._v(" 放弃某一个文件的修改")]),t._v(" "),e("p",[e("img",{attrs:{src:a(865),alt:"输入图片说明"}})]),t._v(" "),e("h3",{attrs:{id:"回退到某一版本但保存自该版本起的修改"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#回退到某一版本但保存自该版本起的修改"}},[t._v("#")]),t._v(" 回退到某一版本但保存自该版本起的修改")]),t._v(" "),e("p",[e("img",{attrs:{src:a(866),alt:"输入图片说明"}})]),t._v(" "),e("h3",{attrs:{id:"回退到某一版本并且放弃所有的修改"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#回退到某一版本并且放弃所有的修改"}},[t._v("#")]),t._v(" 回退到某一版本并且放弃所有的修改")]),t._v(" "),e("p",[e("img",{attrs:{src:a(867),alt:"输入图片说明"}})]),t._v(" "),e("h3",{attrs:{id:"回退远程仓库的版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#回退远程仓库的版本"}},[t._v("#")]),t._v(" 回退远程仓库的版本")]),t._v(" "),e("p",[t._v("先在本地切换到远程仓库要回退的分支对应的本地分支，然后本地回退至你需要的版本，然后执行：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git push <仓库名> <分支名> -f\n\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("h3",{attrs:{id:"如何以当前版本为基础-回退指定个commit"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何以当前版本为基础-回退指定个commit"}},[t._v("#")]),t._v(" 如何以当前版本为基础，回退指定个commit")]),t._v(" "),e("p",[t._v("首先，确认你当前的版本需要回退多少个版本，然后计算出你要回退的版本数量，执行如下命令")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git reset HEAD~X //X代表你要回退的版本数量，是数字！！！！\n\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("需要注意的是，如果你是合并过分支，那么背合并分支带过来的commit并不会被计入回退数量中，而是只计算一个，所以如果需要一次回退多个commit，不建议使用这种方法")]),t._v(" "),e("h3",{attrs:{id:"如何回退到和远程版本一样"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何回退到和远程版本一样"}},[t._v("#")]),t._v(" 如何回退到和远程版本一样")]),t._v(" "),e("p",[t._v("有时候，当发生错误修改需要放弃全部修改时，可以以远程分支作为回退点退回到与远程分支一样的地方，执行的命令如下")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git reset --hard origin/master // origin代表你远程仓库的名字，master代表分支名\n\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("h2",{attrs:{id:"如何进行分支合并"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何进行分支合并"}},[t._v("#")]),t._v(" 如何进行分支合并")]),t._v(" "),e("p",[e("strong",[t._v("分支合并分为两种情况,一种是本地分支合并,一种是远程分支合并到本地分支,下面,分别用GIF动画演示")])]),t._v(" "),e("h3",{attrs:{id:"本地合并分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地合并分支"}},[t._v("#")]),t._v(" 本地合并分支:")]),t._v(" "),e("p",[e("img",{attrs:{src:a(868),alt:"输入图片说明"}})]),t._v(" "),e("h3",{attrs:{id:"远程分支合并"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#远程分支合并"}},[t._v("#")]),t._v(" 远程分支合并")]),t._v(" "),e("p",[e("img",{attrs:{src:a(869),alt:"输入图片说明"}})]),t._v(" "),e("p",[t._v("关于多人协作的 Git 操作就到这里了。")])])}),[],!1,null,null,null);s.default=r.exports},843:function(t,s,a){t.exports=a.p+"assets/img/image-20220531185318638.e74980ad.png"},844:function(t,s,a){t.exports=a.p+"assets/img/image-20220531185324865.fd9ffb6f.png"},845:function(t,s,a){t.exports=a.p+"assets/img/image-20220531185330055.eb46116b.png"},846:function(t,s,a){t.exports=a.p+"assets/img/image-20220531185336069.88e25f8a.png"},847:function(t,s,a){t.exports=a.p+"assets/img/image-20220531185341877.f7031a50.png"},848:function(t,s,a){t.exports=a.p+"assets/img/image-20220531185346742.0a1a60c8.png"},849:function(t,s,a){t.exports=a.p+"assets/img/image-20220531185353928.37c88ead.png"},850:function(t,s,a){t.exports=a.p+"assets/img/image-20220531185359225.4143c5bd.png"},851:function(t,s,a){t.exports=a.p+"assets/img/image-20220531185404960.f01d7cbe.png"},852:function(t,s,a){t.exports=a.p+"assets/img/image-20220531185412332.22a24b7e.png"},853:function(t,s,a){t.exports=a.p+"assets/img/image-20220531185419237.bb445583.png"},854:function(t,s,a){t.exports=a.p+"assets/img/image-20220531185426274.fe022ac5.png"},855:function(t,s,a){t.exports=a.p+"assets/img/image-20220531185431706.d4773613.png"},856:function(t,s,a){t.exports=a.p+"assets/img/image-20220531185436984.7b465fa7.png"},857:function(t,s,a){t.exports=a.p+"assets/img/image-20220531185444137.1e23fcfb.png"},858:function(t,s,a){t.exports=a.p+"assets/img/image-20220531185450773.6dd17b23.png"},859:function(t,s,a){t.exports=a.p+"assets/img/113507_cca8cd22_62561.9fd59eaf.gif"},860:function(t,s,a){t.exports=a.p+"assets/img/113621_dbc985b5_62561.076af15d.png"},861:function(t,s,a){t.exports=a.p+"assets/img/113823_fffe18cf_62561.7b172a45.png"},862:function(t,s,a){t.exports=a.p+"assets/img/114159_426b8d65_62561.c92f7446.png"},863:function(t,s,a){t.exports=a.p+"assets/img/114058_429e8b54_62561.188f09c6.gif"},864:function(t,s,a){t.exports=a.p+"assets/img/10161457_lf5m.97850ecc.gif"},865:function(t,s,a){t.exports=a.p+"assets/img/10161707_dstz.44f248a2.gif"},866:function(t,s,a){t.exports=a.p+"assets/img/10162127_dLHO.4cd798e8.gif"},867:function(t,s,a){t.exports=a.p+"assets/img/10162634_CKmm.ca7d272c.gif"},868:function(t,s,a){t.exports=a.p+"assets/img/11110502_Puw4.60d388a2.gif"},869:function(t,s,a){t.exports=a.p+"assets/img/11105933_WdrB.c3a08c73.gif"}}]);