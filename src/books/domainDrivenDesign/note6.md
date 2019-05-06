### 值对象

#### 基本认识

    1.值对象是不可变的，不要给它任何身份标识
    2.应该尽量通过值对象，而不是实体来进行建模
    3.值对象常见的包括数字、字符串、日期、时间等
    4.全然面向实体建模不仅没有必要，而且浪费开发时间

#### 值对象的一些特征

    1.它度量或者描述了领域里面的一种东西
    2.可以作为不变量
    3.它将不同的相关属性组合成一个整体的概念
    4.当度量和描述改变的时候可以被替换
    5.它可以和其他值对象进行相等比较
    6.不会对协作对象表现出副作用
    7.值对象也要保持整体的概念
    8.可替换性、相等比较、没有副作用

#### 最小化集成

    1.当概念从上游上下文流向下游上下文的时候，应该尽量使用值对象

#### 用值对象表示标准类型

    1.比如用标准类型来管理不同的生命周期

#### 测试

    测试代码也应该有领域的含义