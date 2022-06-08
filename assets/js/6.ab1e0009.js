(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1616:function(t,s,e){"use strict";e.r(s);var a=e(65),l=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"多人协作github部分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多人协作github部分"}},[t._v("#")]),t._v(" 多人协作GitHub部分")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#创建仓库"}},[t._v("创建仓库")])]),a("li",[a("a",{attrs:{href:"#增加合作者"}},[t._v("增加合作者")])]),a("li",[a("a",{attrs:{href:"#添加issue"}},[t._v("添加issue")])]),a("li",[a("a",{attrs:{href:"#fork-pullrequest-模式"}},[t._v("Fork + PullRequest 模式")]),a("ul",[a("li",[a("a",{attrs:{href:"#_1、什么是-pull-request"}},[t._v("1、什么是 Pull Request？")])]),a("li",[a("a",{attrs:{href:"#_2、如何-fork-仓库"}},[t._v("2、如何 fork 仓库")])]),a("li",[a("a",{attrs:{href:"#_3、如何提交-pull-request"}},[t._v("3、如何提交 Pull Request")])]),a("li",[a("a",{attrs:{href:"#_4、如何对已经存在的-pull-request-的进行管理"}},[t._v("4、如何对已经存在的 Pull Request 的进行管理")])]),a("li",[a("a",{attrs:{href:"#_5、如何修改一个已经存在的-pull-request"}},[t._v("5、如何修改一个已经存在的 Pull Request")])]),a("li",[a("a",{attrs:{href:"#_6、对-pull-request-的-bug-修改如何提交到该-pull-request-中"}},[t._v("6、对 Pull Request 的 bug 修改如何提交到该 Pull Request 中")])]),a("li",[a("a",{attrs:{href:"#_7、pull-request-不能自动合并该如何处理"}},[t._v("7、Pull Request 不能自动合并该如何处理")])]),a("li",[a("a",{attrs:{href:"#_8、pull-request-不小心合并了-可否回退"}},[t._v("8、Pull Request 不小心合并了，可否回退")])])])]),a("li",[a("a",{attrs:{href:"#使用pull-request功能进行代码审查"}},[t._v("使用Pull Request功能进行代码审查")]),a("ul",[a("li",[a("a",{attrs:{href:"#_1、仓库管理员-设置代码审查"}},[t._v("1、仓库管理员 设置代码审查")])]),a("li",[a("a",{attrs:{href:"#_2、开发者-提交-pull-request"}},[t._v("2、开发者 提交 Pull Request")])]),a("li",[a("a",{attrs:{href:"#_3、审查者-进行代码审核-测试"}},[t._v("3、审查者 进行代码审核/测试")])]),a("li",[a("a",{attrs:{href:"#_4、仓库管理员-合并-pull-request"}},[t._v("4、仓库管理员 合并 Pull Request")])])])]),a("li",[a("a",{attrs:{href:"#pull-request-关联-issue"}},[t._v("Pull Request 关联 Issue")])]),a("li",[a("a",{attrs:{href:"#具体通过pull-request-关联-issue操作如下"}},[t._v("具体通过Pull Request 关联 Issue操作如下：")])]),a("li",[a("a",{attrs:{href:"#在线解决代码冲突"}},[t._v("在线解决代码冲突")]),a("ul",[a("li",[a("a",{attrs:{href:"#功能介绍"}},[t._v("功能介绍")])]),a("li",[a("a",{attrs:{href:"#通过-webide-在线解决冲突"}},[t._v("通过 WebIDE 在线解决冲突")])])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"创建仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建仓库"}},[t._v("#")]),t._v(" 创建仓库")]),t._v(" "),a("p",[t._v("首先，在组长账号中创建一个仓库，名为 work，在创建仓库时，需要说明第一节中提到的两个下拉框：")]),t._v(" "),a("p",[a("img",{attrs:{src:e(854),alt:"image-20220531185154793"}})]),t._v(" "),a("p",[t._v("左边的忽略文件下拉框：我们在写代码时，总会出现一些不需要上传到仓库的垃圾文件、缓存文件、备份文件、环境文件等等，可以创建一个忽略文件将这些不需要被上传到远程仓库的文件忽略掉。忽略文件的名字是 "),a("code",[t._v(".gitignore")]),t._v("，它被放置在仓库主目录下，将不需上传的文件的名字写入其中，Git 就会自动忽略它们。比如这个仓库是用来 Windows 开发的，就在下拉框中选择 Windows，如果这是一个保存 Java 项目的仓库，就选择 Java。这样，在仓库创建成功后，忽略文件就自动出现了，这个忽略文件中有对应的语言或工具中绝大部分通用的忽略规则。当然了，你也可以自己手动增删改。")]),t._v(" "),a("p",[t._v("如果在创建仓库时忘记了选择忽略文件，几个提交后突然想起来，怎么办？GitHub 上有人把忽略文件都做好了，打开链接 "),a("a",{attrs:{href:"https://github.com/github/gitignore",target:"_blank",rel:"noopener noreferrer"}},[t._v("github / gitignore (opens new window)"),a("OutboundLink")],1),t._v("，这个仓库里有很多忽略文件，选择你需要的放到自己的仓库即可。")]),t._v(" "),a("p",[t._v("右边的开源许可下拉框：关于开源许可证，不属于本课程所述范围，如有需要大家可以自行搜索。我们的仓库不需要选择这一项。选择这个之后，仓库中会出现相对应的图标，比如上面提到的忽略文件仓库：")]),t._v(" "),a("p",[a("img",{attrs:{src:e(855),alt:"image-20220531185201660"}})]),t._v(" "),a("p",[t._v("在组长账号中创建好新仓库，如下图：")]),t._v(" "),a("p",[a("img",{attrs:{src:e(856),alt:"image-20220531185207322"}})]),t._v(" "),a("p",[t._v("对上图右上角三个按钮进行说明：")]),t._v(" "),a("p",[t._v("Watch：这是一个下拉按钮，可以选择对此仓库关注、不关注、忽略等。")]),t._v(" "),a("p",[t._v("Star：如果觉得这个仓库很好，就点击这个按钮送一颗星，在淘宝提供刷星业务之前，仓库获得的星越多表示该项目越优秀。")]),t._v(" "),a("p",[t._v("Fork：在别人的仓库中点此按钮会克隆一个完全一样的仓库到你自己的账号中，包括所有分支、提交等，但不会克隆 issue（本节后面会讲到），当此仓库发生版本变化，不会自动同步到你克隆的仓库里，反之亦然。")]),t._v(" "),a("h2",{attrs:{id:"增加合作者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#增加合作者"}},[t._v("#")]),t._v(" 增加合作者")]),t._v(" "),a("p",[t._v("现在在组长账号中增加该仓库的合作者，也就是组员：")]),t._v(" "),a("p",[a("img",{attrs:{src:e(857),alt:"image-20220531185215519"}})]),t._v(" "),a("p",[t._v("在浅蓝色输入框中写入组员 GitHub 账号的用户名，选择正确的用户，点击右侧按钮就会发送一封邀请邮件给组员：")]),t._v(" "),a("p",[a("img",{attrs:{src:e(858),alt:"image-20220531185223059"}})]),t._v(" "),a("p",[t._v("现在使用另一个浏览器登录组员的 GitHub 账号和邮箱，打开邮件：")]),t._v(" "),a("p",[a("img",{attrs:{src:e(859),alt:"image-20220531185228371"}})]),t._v(" "),a("p",[t._v("点击上图绿色按钮，跳转到下图：")]),t._v(" "),a("p",[a("img",{attrs:{src:e(860),alt:"image-20220531185233622"}})]),t._v(" "),a("p",[t._v("再次点击绿色按钮接受邀请，会跳转到组员访问组长仓库的页面：")]),t._v(" "),a("p",[a("img",{attrs:{src:e(861),alt:"image-20220531185239157"}})]),t._v(" "),a("p",[t._v("点击上图紫色框中的 Fork 按钮，克隆组长的仓库到组员的账号中，完成后自动跳转到下图页面，也就是组员的仓库页面：")]),t._v(" "),a("p",[a("img",{attrs:{src:e(862),alt:"image-20220531185244648"}})]),t._v(" "),a("h2",{attrs:{id:"添加issue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加issue"}},[t._v("#")]),t._v(" 添加issue")]),t._v(" "),a("p",[t._v("切换到组长的 GitHub 页面，在仓库中添加一些项目任务或待解决问题，这些任务就是 issue：")]),t._v(" "),a("p",[a("img",{attrs:{src:e(863),alt:"image-20220531185255290"}})]),t._v(" "),a("p",[t._v("写好任务标题后，可以在右侧指派一位或多位项目参与者来完成，同样 GitHub 也会给被指派者发邮件的（可以在自己的 GitHub 账号上设置拒收哪类邮件）：")]),t._v(" "),a("p",[a("img",{attrs:{src:e(864),alt:"image-20220531185300546"}})]),t._v(" "),a("p",[t._v("写好两个 issue，前面说过的，组长仓库里的 issue 不会出现在组员仓库中：")]),t._v(" "),a("p",[a("img",{attrs:{src:e(865),alt:"image-20220531185307199"}})]),t._v(" "),a("h1",{attrs:{id:"多人协作-gitee"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多人协作-gitee"}},[t._v("#")]),t._v(" 多人协作---Gitee")]),t._v(" "),a("h2",{attrs:{id:"fork-pullrequest-模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fork-pullrequest-模式"}},[t._v("#")]),t._v(" Fork + PullRequest 模式")]),t._v(" "),a("p",[t._v("参与 Gitee 中的仓库开发，最常用和推荐的首选方式是“Fork + Pull”模式。在“Fork + Pull”模式下，仓库参与者不必向仓库创建者申请提交权限，而是在自己的托管空间下建立仓库的派生（Fork）。至于在派生仓库中创建的提交，可以非常方便地利用 Gitee 的 Pull Request 工具向原始仓库的维护者发送 Pull Request。")]),t._v(" "),a("h3",{attrs:{id:"_1、什么是-pull-request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、什么是-pull-request"}},[t._v("#")]),t._v(" 1、什么是 Pull Request？")]),t._v(" "),a("p",[t._v("Pull Request 是两个仓库提交变更的一种方式，通常用于 fork 仓库与被 fork 仓库的差异提交，同时也是一种非常好的团队协作方式，下面，就来讲解如何在 Gitee 平台提交 Pull Request：")]),t._v(" "),a("p",[t._v("PS：Gitee 平台限制 Pull Request 源仓库与目标仓库需存在 fork 与被 fork 关系，故如果你要提交 Pull Request，必须先 fork 一个仓库，然后才能对该仓库提交 Pull Request，同时，以该仓库为父仓库的所有仓库，您也均可以提交 Pull Request。")]),t._v(" "),a("h3",{attrs:{id:"_2、如何-fork-仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、如何-fork-仓库"}},[t._v("#")]),t._v(" 2、如何 fork 仓库")]),t._v(" "),a("p",[t._v("fork 仓库时非常简单的，进到仓库页面，然后找到右上角的 fork 按钮，点击后选择 fork 到的命名空间，再点击确认，等待系统在后台完成仓库克隆操作，就完成了 fork 操作，如图：")]),t._v(" "),a("p",[a("img",{attrs:{src:e(866),alt:"输入图片说明"}})]),t._v(" "),a("h3",{attrs:{id:"_3、如何提交-pull-request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、如何提交-pull-request"}},[t._v("#")]),t._v(" 3、如何提交 Pull Request")]),t._v(" "),a("p",[t._v("首先，您的仓库与目标仓库必须存在差异，这样才能提交,比如这样：")]),t._v(" "),a("p",[a("img",{attrs:{src:e(867),alt:"输入图片说明"}})]),t._v(" "),a("p",[t._v("如果不存在差异，或者目标分支比你提Pull Request的分支还要新，则会得到这样的提示：")]),t._v(" "),a("p",[a("img",{attrs:{src:e(868),alt:"输入图片说明"}})]),t._v(" "),a("p",[t._v("然后，填入Pull Request的说明，点击提交Pull Request，就可以提交一个Pull Request了，就想下图所示的那样：")]),t._v(" "),a("p",[a("img",{attrs:{src:e(869),alt:"输入图片说明"}})]),t._v(" "),a("h3",{attrs:{id:"_4、如何对已经存在的-pull-request-的进行管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、如何对已经存在的-pull-request-的进行管理"}},[t._v("#")]),t._v(" 4、如何对已经存在的 Pull Request 的进行管理")]),t._v(" "),a("p",[t._v("首先，对于一个已经存在的 Pull Request，如果只是观察者，报告者等权限，那么访问将会受到限制，具体权限限制请参考 Gitee 平台关于角色权限的内容，下文涉及的部分，仅针对管理员权限，如果您发现不太一样的地方，请检查您的权限是不是管理员或该 Pull Request 的创建者。")]),t._v(" "),a("h3",{attrs:{id:"_5、如何修改一个已经存在的-pull-request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、如何修改一个已经存在的-pull-request"}},[t._v("#")]),t._v(" 5、如何修改一个已经存在的 Pull Request")]),t._v(" "),a("p",[t._v("点击 Pull Request 的详情界面右上角的编辑按钮，就会弹出编辑框，在编辑框中修改你需要修改的信息，然后点击保存即可修改该 Pull Request，如下图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:e(870),alt:"输入图片说明"}})]),t._v(" "),a("p",[t._v("请注意，在该界面，可以对 Pull Request 进行指派负责人，指派测试者等等操作，每一个操作均会通知对应的人员")]),t._v(" "),a("h3",{attrs:{id:"_6、对-pull-request-的-bug-修改如何提交到该-pull-request-中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、对-pull-request-的-bug-修改如何提交到该-pull-request-中"}},[t._v("#")]),t._v(" 6、对 Pull Request 的 bug 修改如何提交到该 Pull Request 中")]),t._v(" "),a("p",[t._v("对于 Pull Request 中的 bug 修复或者任何更新动作，均不必要提交新的 Pull Request，仅仅只需要推送到您提交 Pull Request 的分支上，稍后我们后台会自动更新这些提交，将其加入到这个 Pull Request 中去")]),t._v(" "),a("h3",{attrs:{id:"_7、pull-request-不能自动合并该如何处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7、pull-request-不能自动合并该如何处理"}},[t._v("#")]),t._v(" 7、Pull Request 不能自动合并该如何处理")]),t._v(" "),a("p",[t._v("在提交完 Pull Request 的后，在这个 Pull Request 处理期间，由原本的能自动合并变成不能自动合并，这是一件非常正常的事情，那么，这时，我们有两种选择，一种，继续合并到目标，然后手动处理冲突部分，另一种则是先处理冲突，使得该 Pull Request 处于可以自动合并状态，然后采用自动合并，一般来讲，我们官方推荐第二种，即先处理冲突，然后再合并。具体操作为：")]),t._v(" "),a("p",[t._v("先在本地切换到提交 Pull Request 的分支，然后拉取目标分支到本地，这时，会发生冲突，参考如何处理代码冲突这一小节将冲突处理完毕，然后提交到 Pull Request 所在的分支，等待系统后台完成Pull Request的更新后，Pull Request 就变成了可自动合并状态")]),t._v(" "),a("h3",{attrs:{id:"_8、pull-request-不小心合并了-可否回退"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8、pull-request-不小心合并了-可否回退"}},[t._v("#")]),t._v(" 8、Pull Request 不小心合并了，可否回退")]),t._v(" "),a("p",[t._v("对于错误合并的 Pull Request，我们提供了回退功能，该功能会产生一个回退 XXX 的 Pull Request，接受该 Pull Request 即可完成回退动作，注意，回退本质上是提交一个完全相反的 Pull Request，所以，你仍然需要进行测试来保证完整性，另，为了不破坏其他 Pull Request，建议只有需回退的 Pull Request 处于最后一次合并操作且往上再无提交时执行回退动作，否则请手动处理。")]),t._v(" "),a("h2",{attrs:{id:"使用pull-request功能进行代码审查"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用pull-request功能进行代码审查"}},[t._v("#")]),t._v(" 使用Pull Request功能进行代码审查")]),t._v(" "),a("p",[t._v("如果你的团队采用了 Gitee 推荐的“Fork + Pull”协作模式，我们同时推荐通过Pull Request这个功能来进行团队中的代码审查，有如下步骤：")]),t._v(" "),a("p",[a("strong",[t._v("1、仓库管理员 设置代码审查。")])]),t._v(" "),a("blockquote",[a("p",[t._v("设置指定人员为某仓库默认的代码审核/测试人员后，每当有新的Pull Request以此仓库内分支为目标分支时，系统会通知指定人员前去审查提交的Pull Request（也就是改动的代码内容），同时也可以设置合并Pull Request的门槛（例如是否需要全部指定人员同意才可以合并）。")])]),t._v(" "),a("p",[a("strong",[t._v("2、开发者 提交Pull Request。")])]),t._v(" "),a("blockquote",[a("p",[t._v("开发者通过 Fork仓库的分支向源仓库的分支 或 同仓库内的工作分支向源分支 提交Pull Request的方式来发起一个代码审查的请求，以达到更新源分支的代码的目的。")])]),t._v(" "),a("p",[a("strong",[t._v("3、审查者 进行代码审核/测试。")])]),t._v(" "),a("blockquote",[a("p",[t._v("指定人员查看开发者提交的Pull Request内容，并决定是否同意接受该开发者的改动。")])]),t._v(" "),a("p",[a("strong",[t._v("4、仓库管理员 合并 Pull Request。")])]),t._v(" "),a("blockquote",[a("p",[t._v("仓库的管理人员在审查者同意后，即可通过合并Pull Request的方式把开发者的文件改动内容同步到源分支。")])]),t._v(" "),a("p",[t._v("图示如下： "),a("img",{attrs:{src:e(871),alt:"输入图片说明"}})]),t._v(" "),a("h3",{attrs:{id:"_1、仓库管理员-设置代码审查"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、仓库管理员-设置代码审查"}},[t._v("#")]),t._v(" 1、仓库管理员 设置代码审查")]),t._v(" "),a("ol",[a("li",[t._v("代码审查以仓库为单位。仓库管理员以上的成员可以进入【仓库详情】- 【代码审查设置】页面")])]),t._v(" "),a("p",[a("img",{attrs:{src:e(872),alt:"输入图片说明"}})]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("根据需求设置相应的代码审核/测试人员。")])]),t._v(" "),a("p",[a("img",{attrs:{src:e(873),alt:"输入图片说明"}})]),t._v(" "),a("p",[t._v("设置完成后，每当有开发者向仓库内的分支提交 Pull Request，相关人员即可收到通知，开始代码审查流程。")]),t._v(" "),a("h3",{attrs:{id:"_2、开发者-提交-pull-request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、开发者-提交-pull-request"}},[t._v("#")]),t._v(" 2、开发者 提交 Pull Request")]),t._v(" "),a("ol",[a("li",[t._v("开发者Fork目标仓库，在对应分支上修改后，推送到自己Fork的仓库里，从自己仓库中点击“+ Pull Request”。")])]),t._v(" "),a("p",[a("img",{attrs:{src:e(874),alt:"输入图片说明"}})]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("系统会默认对应源分支和要修改的目标分支")])]),t._v(" "),a("p",[a("img",{attrs:{src:e(875),alt:"输入图片说明"}})]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("填入Pull Request的说明，点击“创建”，就可以提交一个Pull Request：")])]),t._v(" "),a("p",[a("img",{attrs:{src:e(876),alt:"输入图片说明"}})]),t._v(" "),a("h3",{attrs:{id:"_3、审查者-进行代码审核-测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、审查者-进行代码审核-测试"}},[t._v("#")]),t._v(" 3、审查者 进行代码审核/测试")]),t._v(" "),a("ol",[a("li",[t._v("在指定审查者的企业视图【工作台】- 【Pull Request】中，【指派给我的】那个tab即是该审查者需要进行代码审查的Pull Request。")])]),t._v(" "),a("p",[a("img",{attrs:{src:e(877),alt:"输入图片说明"}})]),t._v(" "),a("blockquote",[a("p",[t._v("注：付费企业用户默认开启代码缺陷扫描，会自动扫描任何提交过来的Pull Request中的缺陷和规范问题。")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("审查者可以查看Pull Request详情")])]),t._v(" "),a("p",[a("img",{attrs:{src:e(878),alt:"输入图片说明"}})]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("在“评论”中留下自己对这个Pull Request中改动的意见和建议")])]),t._v(" "),a("p",[a("img",{attrs:{src:e(879),alt:"输入图片说明"}})]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("同时支持“文件改动”中对代码行注释")])]),t._v(" "),a("p",[a("img",{attrs:{src:e(880),alt:"输入图片说明"}})]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[t._v("在“缺陷报告”和“规范报告”中查看报告内容")])]),t._v(" "),a("p",[a("img",{attrs:{src:e(881),alt:"输入图片说明"}})]),t._v(" "),a("p",[t._v("审查者的建议会通过站内信等方式通知提交Pull Request的开发者，开发者可以根据情况在“评论”中与审查者进行讨论。")]),t._v(" "),a("h3",{attrs:{id:"_4、仓库管理员-合并-pull-request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、仓库管理员-合并-pull-request"}},[t._v("#")]),t._v(" 4、仓库管理员 合并 Pull Request")]),t._v(" "),a("p",[t._v("Pull Request审查完成且满足仓库管理员设置的代码审查规则后，拥有合并Pull Request权限的成员（通常为仓库管理员，特殊情况请查看保护分支规则即可把这个Pull Request合并到目标分支。")]),t._v(" "),a("p",[a("img",{attrs:{src:e(882),alt:"输入图片说明"}})]),t._v(" "),a("p",[t._v("合并完成后，开发者对目标分支的改动就生效了。")]),t._v(" "),a("h2",{attrs:{id:"pull-request-关联-issue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pull-request-关联-issue"}},[t._v("#")]),t._v(" Pull Request 关联 Issue")]),t._v(" "),a("p",[t._v("通过 Pull Request 关联 Issue，用户可以在关闭 Pull Request 的时候同时关闭 issue。关联功能具有以下特点：")]),t._v(" "),a("ol",[a("li",[t._v("一个 PR 可以关联多个 issue，例如同时关联 issue1 , issue2 格式为："),a("code",[t._v("#issue1ident, #issue2dent")])]),t._v(" "),a("li",[t._v("PR关联issue后，issue的状态会自动更改为进行中，当PR被合并后，issue会更改为关闭状态。")]),t._v(" "),a("li",[t._v("个人版和企业版的区别：")])]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("个人版，PR只能关联当前仓库的任务")]),t._v(" "),a("li",[t._v("企业版，PP可以关联所有企业的任务。")])])]),t._v(" "),a("h2",{attrs:{id:"具体通过pull-request-关联-issue操作如下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#具体通过pull-request-关联-issue操作如下"}},[t._v("#")]),t._v(" 具体通过Pull Request 关联 Issue操作如下：")]),t._v(" "),a("h4",{attrs:{id:"_1-在-pr-的内容里面指定需要关闭的-issue-的-ident-例如"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-在-pr-的内容里面指定需要关闭的-issue-的-ident-例如"}},[t._v("#")]),t._v(" 1. 在 PR 的内容里面指定需要关闭的 issue 的 ident ,例如：")]),t._v(" "),a("p",[a("img",{attrs:{src:e(883),alt:"输入图片说明"}})]),t._v(" "),a("h4",{attrs:{id:"_2-在-issue-详情页可以看到关联关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-在-issue-详情页可以看到关联关系"}},[t._v("#")]),t._v(" 2. 在 issue 详情页可以看到关联关系")]),t._v(" "),a("p",[a("img",{attrs:{src:e(884),alt:"输入图片说明"}})]),t._v(" "),a("h4",{attrs:{id:"_3-当-pr-合并之后其关联的-issue-被关闭"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-当-pr-合并之后其关联的-issue-被关闭"}},[t._v("#")]),t._v(" 3. 当 PR 合并之后其关联的 issue 被关闭")]),t._v(" "),a("p",[a("img",{attrs:{src:e(885),alt:"输入图片说明"}})]),t._v(" "),a("h2",{attrs:{id:"在线解决代码冲突"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在线解决代码冲突"}},[t._v("#")]),t._v(" 在线解决代码冲突")]),t._v(" "),a("h3",{attrs:{id:"功能介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能介绍"}},[t._v("#")]),t._v(" 功能介绍")]),t._v(" "),a("p",[t._v("在使用 Pull Request 的过程中如果遇到代码冲突，往往需要将代码取回本地，通过 "),a("code",[t._v("git merge")]),t._v(" 处理代码冲突，再推送回仓库。")]),t._v(" "),a("p",[t._v("Gitee 提供 WebIDE 在线解决冲突的解决办法，无需客户端操作即可在网页上完成冲突解决。")]),t._v(" "),a("h3",{attrs:{id:"通过-webide-在线解决冲突"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过-webide-在线解决冲突"}},[t._v("#")]),t._v(" 通过 WebIDE 在线解决冲突")]),t._v(" "),a("p",[t._v("1、在产生代码冲突的 PR 页面，点击「尝试通过 WebIDE 解决冲突」，进入 WebIDE。")]),t._v(" "),a("p",[a("img",{attrs:{src:e(886),alt:"在线解决冲突-分镜-1.gif"}})]),t._v(" "),a("p",[t._v("2、选择相应冲突的代码文件，找到冲突的代码段，并选择合适的代码更改并接受。")]),t._v(" "),a("p",[a("img",{attrs:{src:e(887),alt:"在线解决冲突-分镜-2.gif"}})]),t._v(" "),a("p",[t._v("3、「暂存」修改过的文件，随后点击「提交」将处理完冲突的代码提交到 PR 源分支，回到 PullRequest 页面，代码冲突解决。")]),t._v(" "),a("p",[a("img",{attrs:{src:e(888),alt:"在这里输入图片标题"}})])])}),[],!1,null,null,null);s.default=l.exports},854:function(t,s,e){t.exports=e.p+"assets/img/image-20220531185154793.be38a942.png"},855:function(t,s,e){t.exports=e.p+"assets/img/image-20220531185201660.6bf573c0.png"},856:function(t,s,e){t.exports=e.p+"assets/img/image-20220531185207322.9eab5e52.png"},857:function(t,s,e){t.exports=e.p+"assets/img/image-20220531185215519.e394614e.png"},858:function(t,s,e){t.exports=e.p+"assets/img/image-20220531185223059.fcda38e5.png"},859:function(t,s,e){t.exports=e.p+"assets/img/image-20220531185228371.3d0e0c67.png"},860:function(t,s,e){t.exports=e.p+"assets/img/image-20220531185233622.b8269e4b.png"},861:function(t,s,e){t.exports=e.p+"assets/img/image-20220531185239157.5cdcfc12.png"},862:function(t,s,e){t.exports=e.p+"assets/img/image-20220531185244648.68a2d79a.png"},863:function(t,s,e){t.exports=e.p+"assets/img/image-20220531185255290.b556400f.png"},864:function(t,s,e){t.exports=e.p+"assets/img/image-20220531185300546.39561aa8.png"},865:function(t,s,e){t.exports=e.p+"assets/img/image-20220531185307199.2f2bb5c9.png"},866:function(t,s,e){t.exports=e.p+"assets/img/171321_ab4dc0b2_58426.5bd31089.png"},867:function(t,s,e){t.exports=e.p+"assets/img/171023_d20b2b6b_58426.a0bc71b9.png"},868:function(t,s,e){t.exports=e.p+"assets/img/143541_0ed9397d_551147.5d10ffb5.png"},869:function(t,s,e){t.exports=e.p+"assets/img/143541_db661571_551147.b58b2bfc.png"},870:function(t,s,e){t.exports=e.p+"assets/img/143541_8385228b_551147.ac23e107.png"},871:function(t,s,e){t.exports=e.p+"assets/img/095737_47c0f42b_5370906.521395f9.png"},872:function(t,s){t.exports="data:image/png;base64,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"},873:function(t,s,e){t.exports=e.p+"assets/img/153244_63bc2169_5370906.bb7ebdbf.png"},874:function(t,s,e){t.exports=e.p+"assets/img/153308_70ced920_5370906.b677a7ed.png"},875:function(t,s,e){t.exports=e.p+"assets/img/153329_0a61257e_5370906.dd361ad9.png"},876:function(t,s,e){t.exports=e.p+"assets/img/153346_c6a0226f_5370906.41a67ba6.png"},877:function(t,s,e){t.exports=e.p+"assets/img/153409_c1b2828e_5370906.88cc5268.png"},878:function(t,s,e){t.exports=e.p+"assets/img/153434_2d80ebea_5370906.3d3087df.png"},879:function(t,s,e){t.exports=e.p+"assets/img/153506_d9cfcbbb_5370906.f7138297.png"},880:function(t,s,e){t.exports=e.p+"assets/img/153529_5e7e4245_5370906.30884e67.png"},881:function(t,s,e){t.exports=e.p+"assets/img/153545_4ef33d83_5370906.a4f9ae07.png"},882:function(t,s,e){t.exports=e.p+"assets/img/153608_3f9f6b4d_5370906.4bb2d8c0.png"},883:function(t,s,e){t.exports=e.p+"assets/img/014040_20105e6c_551147.bbb77c0b.png"},884:function(t,s,e){t.exports=e.p+"assets/img/014040_08507522_551147.e9155eea.png"},885:function(t,s,e){t.exports=e.p+"assets/img/014040_5d7b8f12_551147.e0476d29.png"},886:function(t,s,e){t.exports=e.p+"assets/img/222435_b9cce5e3_551147.16c957ef.gif"},887:function(t,s,e){t.exports=e.p+"assets/img/222735_4ea1a4f9_551147.aa774616.gif"},888:function(t,s,e){t.exports=e.p+"assets/img/224042_82d4afb2_551147.63aaf27d.gif"}}]);