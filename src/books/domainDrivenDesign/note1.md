### 领域模型基本概念

#### 概念

1.领域模型用对象来表示，方法表示了准确的业务含义（对象的行为）


***

#### 战略设计和战术设计

1.战略设计帮助我们知道哪些东西是我们要做的，投入是重要的，或者可以拿来用的

2.战术设计帮助我们设计DDD中的各个部件

***

#### 贫血症和失忆

1.它描述一个缺少领域行为的对象

2.你的领域对象描述的是业务还是用户界面呢

3.在DDD中，设计就是代码，代码就是设计

4.行为一定要有业务价值，数据操作是没有业务价值的

***

#### 通用语言和界限上下文

1.界限上下文：在整个应用程序中的概念性边界，在其他上下文中可能表示不同的信息

2.领域通用语言：描述业务，共同开发

> 护士给病人注入疫苗：nurse.admFluVac(patinet, vol)

3.通用语言的一些试验性方法

     1.同时绘制物理模型图和概念模型图，并标注好名字和行为
     2.创建简单的术语表，把能想到的术语表都罗列出来
     3.一些不正式的模型图
     4.找其他团队来检查术语表

4.使用通用语言来捕捉核心领域的业务和行为的概念和术语

5.界限上下文和通用语言存在这一对一的关系

6.通用语言只能表达单一的模型，如果用于整个业务范围，那你将失败

7.DDD优点

    1.更好的领域模型
    2.业务更加准确的理解
    3.更好的用户体验（产品本身就能培训用户）
    4.清晰的模型边界
    5.更好的企业架构

***

#### 进行领域模型需要考虑的问题

    1.你的团队当中是否有领域专家
    2.DDD开发是否能够简化和其他上下文的集成
    3.事物脚本是否可以减少代码量
    4.进度的安排是否允许
    5.是否能够减少架构变化带来的影响
    6.客户是否能够受益处
    7.是否增加了开发的困难度
    8.是否具备DDD的条件，团队的技术水平

***

#### DDD测试先行

    1.编写测试代码模仿客户端的行为
    2.编写领域对象让测试通过
    3.重构测试和领域对象直到能正确模拟用户
    4.实现领域行为，测试通过
    5.向团队展示代码，确保能够反应领域模型

