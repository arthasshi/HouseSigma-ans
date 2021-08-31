# HouseSigma-ans
### 面试问题1~6

1. **关于申请的职位, 有什么疑问需要我们解答?**

    目前我对这个职位的了解，是通过邮件（北京时间8-26 10:50）了解到的，目前看来没有疑问。

2. **平时使用的开发，调试，协作工具，一般用哪些手机测试。**
   - pc的话是MacBook pro + 外接显示器
   - 调试web端：chrome/Safari等主流浏览器，手机端：iOS模拟器，iPhone7真机，红米真机
   - 协作工具主要有：git，trello，teams以及相关插件，slack和飞书（国外版本叫lark）有少量使用。

3. **为什么想找远程工作？做过远程工作的人应该知道，没做过远程工作的话，想像一下一周5天在github干开源。**


   其一：我觉得大环境下，企业会向着节流的方向发展，所以在18-19年，我还在公司里上班的时候，我就给周围的同事“安利过”远程工作的理念，当时公司里的项目本身也与钉钉和slack/飞书有相似的地方，我还想把远程工作的理念加入进去从这个角度让公司产品突围，只可惜公司里的同事们，等到疫情来的时候，才明白我说的是什么。。。
   其二：我在公司坐班的时候，即使和同事面对面，我也是通过im跟他们交流，因为我觉得大部分人的工作，尤其编程是一种逻辑严密且连续的工作，直接过去对话，会打断他们，那既然我沟通基本IM了，地域也就不是工作的限制了。
   其三：坐班工作中，通勤，开会等，确实会出现时间利用率不高，远程可以极大的提高时间的利用率。

4. **团队会议时间外，自己预计的主要工作时段。**

   我有两个常用的作息规律：一个就是按照以往的朝九晚五，另外一个是早上在10点前后吃完早午饭，之后一直工作到下午5-6点钟（这种方式有个好处就是中间因为不用吃午饭从而不用打断思路和工作）

5. **用vue.js，angular（或类似框架）开发的SPA，运行时发现浏览器报告内存使用过高。**

- 怎样调试判断是否有内存泄漏？
    答：通过chrome的Performance和memory面板具体分析内存异常的情况。
- 如果是内存泄漏通过哪些手段修复？
    答：我觉得预防更重要吧，其实大部分复杂的应用才有可能出现内存泄漏的问题，那既然复杂了，出现了问题本身就是不容易查找的，所以预防更重要。但是如果真的出现了内存泄漏，vue中重要的修复思路：查看全局变量，查看eventbus事件监听，v-if 的 dom等，js层面的话，多注意定timer和callback等地方
- 如果不是内存泄漏怎么办？ *结合自己曾经解决的案例说明。
    上一个项目有页面卡顿，不过那个原因很简单，因为是个图片网站，又因为aws的oss不提供直接的图片压缩服务，导致图片资源过大，内存占用过高造成卡顿，后面自己写了图片处理的服务，引用缩略图之后就好了。

6. **如何在web前端项目实现A，B测试？**


    部署的话就是通过nginx部署前端项目。nginx有相关插件（比如ngx_http_split_clients_module）进行流量的分流以达到ab版本相同流量且随机的目的
    衡量的指标我觉得应该是不同的功能场景具体分析，大体的思路最好是按照科学实验中的单一变量对照实验进行，最终观察结果的时候，主要指标包括点击率，存留时间，页面跳转层级及路径，支付功能支付成功率，支付失败位置等。

    ### 额外的面试问题B1-B3
    **B1. 我们网站使用Google Analytics。要如何调查页面上哪些功能受欢迎，哪些功能不受欢迎？**


    说实话我没有用过Google Analytics，但是用过国内早期的友盟统计，我觉得大体类似，是通过埋点之类的处理，统计用户的一些浏览及操作数据。
    判断一个功能是否受欢迎，先看它没有次级页面，如果没有那么主要考察的数据指标可以是点击率；如果有，还要考虑的指标有页面跳转路径（访客流程图），次级页面停留时间，退出率等，因为我们要排除某个功能摆在了显眼的位置，点击的用户多，但用户只是好奇点进去看看，如果不感兴趣的话很快就会退出。
    如果数据足够多，时间跨度足够长，即使分析某一功能是否受欢迎，最好也看看新增用户，用户构成，用户属性等指标。



    **B2. 以提高留存率为目的，你会怎样着手解决这个问题？**


    从题目看到您想做个社区，如果是做个社区的话，那几点“疑虑”问题就是所有社区都会面临的问题了，从目前的案例来看，社区大体会经过：起步--高质量用户/高质量内容爆发--新增用户爆发--内容质量下降，环境恶化--高质量用户流失--环境继续恶化--社区走到尽头，这几个生命周期。无论是大众的知乎，还是小众的v2ex，都不能幸免。
    但是房智汇这个项目本身又有一些不同，首先它并不靠广告以及内容付费来赚取收益，而是提供买卖房经纪服务，其次平台上的主要内容并不是用户产生的，所以是否可以直接引入第三方角色：中介！让中介提供房屋的附加信息比如房屋vr图讲解，短视频讲解，然后将用户的互动发言，放到当前中介的视频内容下，这样以来，用户和中介才是互动的主体，跟我们平台这边关系不大，让中介去管理自己视频下的用户（叫粉丝也行）的言行，我们只需要通过一些手段约束中介这个角色就好。
    至于这个功能入口在哪，我现在因为对这个项目所有端，以及整体功能把我并不很清楚，所以先大体给一个位置：房屋详情页的banner的左上角，或者右上角也行，然后查看全部图片按钮不用放那么大那么显眼的位置，在banner的其他地方放一个层叠的icon代表图片有多张，然后点击banner任意一张图片进入所有图片页就好。
    后续我会再思考这个功能的入口以及互动的方式的。

    **B3. 要怎样在不影响现有用户的情况下，把新功能推向市场，最终实现首页上都是最火的功能？**


    - 我不好把不常用的功能直接换掉，因为即使是不常用的功能也是有几千上万的人在用?


        答：这个的话，常见的（我的视野不可避免的会限制在国内的产品上）处理思路就是：首先ab测试，让数据来说话，找出最火的功能，然后现有功能不用直接消失，在更新文档以及更新后首次大概应用的时候添加引导告诉用户原有功能放到了哪里，增加了哪些新的功能。
    - 网站的首页空间很有限，我要加一些新功能没有位置? 


        答：说实话我是觉得recommend和reports按钮本身不应该跟for sale 和 rental这两个功能“平起平坐”，它们并不是一个层级的东西，而且智能推荐和定制过滤条件这两个功能也是重复的，还有既然已经得出结论：“ 用户集中在加拿大英文用户，中文版流量占不到4%”，右上角不应该用那么显眼的位置放语言切换按钮，这个按钮完全可以放到设置页面中。
    - 在一个新功能设计时，并不知道这是不是一个会火的功能。 


        答：在设计的时候就想考虑清楚的话，可以从用户反馈，竟品功能分析等方面着手，说实话这个确实是考验一个产品经理，或者说决策者对于用户的需求的敏锐洞察，还是把火不火放在一边，从切实解决用户的需求出发。以用户的视角来考虑我需不需要这个功能。