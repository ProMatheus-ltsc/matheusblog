(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1392:function(a,s,t){"use strict";t.r(s);var n=t(24),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,n=a._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"linux任务计划crontab"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#linux任务计划crontab"}},[a._v("#")]),a._v(" Linux任务计划crontab")]),a._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#crontab-简介"}},[a._v("crontab 简介")])]),n("li",[n("a",{attrs:{href:"#crontab-准备"}},[a._v("crontab 准备")])]),n("li",[n("a",{attrs:{href:"#crontab-使用"}},[a._v("crontab 使用")])]),n("li",[n("a",{attrs:{href:"#crontab-的深入"}},[a._v("crontab 的深入")])])])]),n("p"),a._v(" "),n("p",[a._v("我们时常会有一些定期定时的任务，如周期性的清理一下 "),n("code",[a._v("/tmp")]),a._v("，周期性的去备份一次数据库，周期性的分析日志等等。而且有时候因为某些因素的限制，执行该任务的时间会很尴尬。本课程将带你很好的利用 Linux 系统的计划工具。")]),a._v(" "),n("p",[a._v("crontab 命令常见于 Unix 和类 Unix 的操作系统之中（Linux 就属于类 Unix 操作系统），用于设置周期性被执行的指令。")]),a._v(" "),n("h2",{attrs:{id:"crontab-简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#crontab-简介"}},[a._v("#")]),a._v(" crontab 简介")]),a._v(" "),n("p",[a._v("crontab 命令从输入设备读取指令，并将其存放于 crontab 文件中，以供之后读取和执行。通常，crontab 储存的指令被守护进程激活，crond 为其守护进程，crond 常常在后台运行，每一分钟会检查一次是否有预定的作业需要执行。")]),a._v(" "),n("p",[a._v("通过 crontab 命令，我们可以在固定的间隔时间执行指定的系统指令或 shell 脚本。时间间隔的单位可以是分钟、小时、日、月、周的任意组合。")]),a._v(" "),n("p",[a._v("这里我们看一看 crontab 的格式：")]),a._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Example of job definition:")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# .---------------- minute (0 - 59)")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# |  .------------- hour (0 - 23)")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# |  |  .---------- day of month (1 - 31)")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# |  |  |  .------- month (1 - 12) OR jan,feb,mar,apr ...")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# |  |  |  |  .---- day of week (0 - 6) (Sunday=0 or 7) OR sun,mon,tue,wed,thu,fri,sat")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# |  |  |  |  |")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# *  *  *  *  * user-name command to be executed")]),a._v("\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br")])]),n("h2",{attrs:{id:"crontab-准备"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#crontab-准备"}},[a._v("#")]),a._v(" crontab 准备")]),a._v(" "),n("p",[a._v("crontab 在本实验环境中需要做一些特殊的准备，首先我们会启动 "),n("code",[a._v("rsyslog")]),a._v("，以便我们可以通过日志中的信息来了解我们的任务是否真正的被执行了（在本实验环境中需要手动启动，而在自己本地中 Ubuntu 会默认自行启动不需要手动启动）。")]),a._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -y rsyslog\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" rsyslog start\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br")])]),n("p",[n("img",{attrs:{src:t(573),alt:"image-20220531195429756"}})]),a._v(" "),n("p",[a._v("在本实验环境中 crontab 也是不被默认启动的，同时不能在后台由 upstart 来管理，所以需要我们来启动它:")]),a._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("cron")]),a._v(" －f "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("p",[n("img",{attrs:{src:t(574),alt:"image-20220531195435370"}})]),a._v(" "),n("h2",{attrs:{id:"crontab-使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#crontab-使用"}},[a._v("#")]),a._v(" crontab 使用")]),a._v(" "),n("p",[a._v("下面将开始 crontab 的使用了，我们通过下面一个命令来添加一个计划任务：")]),a._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[a._v("crontab")]),a._v(" -e\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("p",[a._v("第一次启动会出现这样一个画面，这是让我们选择编辑的工具，选择第二个基本的 vim 就可以了。")]),a._v(" "),n("p",[n("img",{attrs:{src:t(575),alt:"image-20220531195442552"}})]),a._v(" "),n("p",[a._v("而选择后我们会进入这样一个画面，这就是添加计划的地方了，与一般的配置文档相同，以#号开头的都是注释，通过文档的最后一排我们可以猜猜 crontab 的格式是什么样的呢？")]),a._v(" "),n("p",[n("img",{attrs:{src:t(576),alt:"image-20220531195446899"}})]),a._v(" "),n("p",[a._v("详细的格式可以使用上一节中学习到的 man 命令查看：")]),a._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[a._v("man")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("crontab")]),a._v("\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("p",[a._v("在了解命令格式之后，我们通过这样的一个例子来完成一个任务的添加，在文档的最后一排加上这样一排命令，该任务是每分钟我们会在/home/shiyanlou 目录下创建一个以当前的年月日时分秒为名字的空白文件")]),a._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("*/1 * * * * "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("touch")]),a._v(" /home/shiyanlou/"),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("date")]),a._v(" +"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("%Y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("%m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("%d"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("%H"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("%M"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("%S"),n("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("p",[n("strong",[a._v("注意：")])]),a._v(" "),n("blockquote",[n("p",[a._v("“ % ” 在 crontab 文件中，有结束命令行、换行、重定向的作用，前面加 ” \\ ” 符号转义，否则，“ % ” 符号将执行其结束命令行或者换行的作用，并且其后的内容会被做为标准输入发送给前面的命令。")])]),a._v(" "),n("p",[a._v("添加成功后我们会得到最后一排 installing new crontab 的一个提示：")]),a._v(" "),n("p",[n("img",{attrs:{src:t(577),alt:"image-20220531195452256"}})]),a._v(" "),n("p",[a._v("当然我们也可以通过这样的一个指令来查看我们添加了哪些任务：")]),a._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[a._v("crontab")]),a._v(" -l\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("p",[a._v("通过图中的显示，我们也可以看出，我们正确的保存并且添加成功了该任务的：")]),a._v(" "),n("p",[n("img",{attrs:{src:t(578),alt:"image-20220531195457555"}})]),a._v(" "),n("p",[a._v("虽然我们添加了任务，但是如果 "),n("code",[a._v("cron")]),a._v(" 的守护进程并没有启动，它根本都不会监测到有任务，当然也就不会帮我们执行，我们可以通过以下 2 种方式来确定我们的 "),n("code",[a._v("cron")]),a._v(" 是否成功的在后台启动，默默的帮我们做事，若是没有就得执行上文准备中的第二步了。")]),a._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" aux "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("cron")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# or")]),a._v("\n\npgrep "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("cron")]),a._v("\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br")])]),n("p",[n("img",{attrs:{src:t(579),alt:"image-20220531195503194"}})]),a._v(" "),n("p",[a._v("通过下图可以看到任务在创建之后，执行了几次，生成了一些文件，且每分钟生成一个：")]),a._v(" "),n("p",[n("img",{attrs:{src:t(580),alt:"image-20220531195511847"}})]),a._v(" "),n("p",[a._v("我们通过这样一个命令可以查看到执行任务命令之后在日志中的信息反馈：")]),a._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" -f /var/log/syslog\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("p",[a._v("从图中我们可以看到分别在 13 点 28、29、30 分的 01 秒为我们在 shiyanlou 用户的家目录下创建了文件。")]),a._v(" "),n("p",[n("img",{attrs:{src:t(581),alt:"image-20220531195516897"}})]),a._v(" "),n("p",[a._v("当我们并不需要这个任务的时候我们可以使用这么一个命令去删除任务：")]),a._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[a._v("crontab")]),a._v(" -r\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("p",[a._v("通过图中我们可以看出我们删除之后再查看任务列表，系统已经显示该用户并没有任务哦。")]),a._v(" "),n("p",[n("img",{attrs:{src:t(582),alt:"image-20220531195523003"}})]),a._v(" "),n("h2",{attrs:{id:"crontab-的深入"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#crontab-的深入"}},[a._v("#")]),a._v(" crontab 的深入")]),a._v(" "),n("p",[a._v("每个用户使用 "),n("code",[a._v("crontab -e")]),a._v(" 添加计划任务，都会在 "),n("code",[a._v("/var/spool/cron/crontabs")]),a._v(" 中添加一个该用户自己的任务文档，这样目的是为了隔离。")]),a._v(" "),n("p",[n("img",{attrs:{src:t(583),alt:"image-20220531195527616"}})]),a._v(" "),n("p",[a._v("如果是系统级别的定时任务，需要 root 权限执行的任务应该怎么处理？")]),a._v(" "),n("p",[a._v("只需要使用 "),n("code",[a._v("sudo")]),a._v(" 编辑 "),n("code",[a._v("/etc/crontab")]),a._v(" 文件就可以。")]),a._v(" "),n("p",[n("code",[a._v("cron")]),a._v(" 服务监测时间最小单位是分钟，所以 "),n("code",[a._v("cron")]),a._v(" 会每分钟去读取一次 "),n("code",[a._v("/etc/crontab")]),a._v(" 与 "),n("code",[a._v("/var/spool/cron/crontabs")]),a._v(" 里面的內容。")]),a._v(" "),n("p",[a._v("在 "),n("code",[a._v("/etc")]),a._v(" 目录下，"),n("code",[a._v("cron")]),a._v(" 相关的目录有下面几个：")]),a._v(" "),n("p",[n("img",{attrs:{src:t(584),alt:"image-20220531195534017"}})]),a._v(" "),n("p",[a._v("每个目录的作用：")]),a._v(" "),n("ol",[n("li",[n("code",[a._v("/etc/cron.daily")]),a._v("，目录下的脚本会每天执行一次，在每天的 6 点 25 分时运行；")]),a._v(" "),n("li",[n("code",[a._v("/etc/cron.hourly")]),a._v("，目录下的脚本会每个小时执行一次，在每小时的 17 分钟时运行；")]),a._v(" "),n("li",[n("code",[a._v("/etc/cron.monthly")]),a._v("，目录下的脚本会每月执行一次，在每月 1 号的 6 点 52 分时运行；")]),a._v(" "),n("li",[n("code",[a._v("/etc/cron.weekly")]),a._v("，目录下的脚本会每周执行一次，在每周第七天的 6 点 47 分时运行；")])]),a._v(" "),n("p",[a._v("系统默认执行时间可以根据需求进行修改。")])])}),[],!1,null,null,null);s.default=e.exports},573:function(a,s,t){a.exports=t.p+"assets/img/image-20220531195429756.0341943b.png"},574:function(a,s){a.exports="data:image/png;base64,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"},575:function(a,s,t){a.exports=t.p+"assets/img/image-20220531195442552.9331ae4a.png"},576:function(a,s,t){a.exports=t.p+"assets/img/image-20220531195446899.c7cf2e76.png"},577:function(a,s,t){a.exports=t.p+"assets/img/image-20220531195452256.ff17f7a1.png"},578:function(a,s,t){a.exports=t.p+"assets/img/image-20220531195457555.56faf845.png"},579:function(a,s,t){a.exports=t.p+"assets/img/image-20220531195503194.b8186b2d.png"},580:function(a,s,t){a.exports=t.p+"assets/img/image-20220531195511847.1a0f83c2.png"},581:function(a,s,t){a.exports=t.p+"assets/img/image-20220531195516897.5b846f86.png"},582:function(a,s,t){a.exports=t.p+"assets/img/image-20220531195523003.bf3dcb1e.png"},583:function(a,s,t){a.exports=t.p+"assets/img/image-20220531195527616.5d19d4cf.png"},584:function(a,s,t){a.exports=t.p+"assets/img/image-20220531195534017.ca2bf4a0.png"}}]);