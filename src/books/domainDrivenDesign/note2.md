### 领域、子域和界限上下文

#### 一：领域

    1.一个领域会被拆分成若干个子域，我们在界限上下文中完成领域的开发
    2.对领域的拆分会帮助我们成功
    3.业务范围和其中进行的活动就是领域

#### 二：现实世界中的领域和子域

    1.领域还同时存在问题空间和解决方案空间
    2.问题空间关注各自的业务问题
    3.解决方案空间包含一个和多个界限上下文，即一组特定的软件模型

#### 三：理解界限上下文

    1.界限上下文是一个显式的边界，领域模型便存在这个边界之内
    2.领域模型把通用语言转换成软件模型
    3.模型的属性和操作在上下文里面都有特殊的含义
    4.界限上下文是一个语义上的边界
    5.界限上下文主要用来封装领域模型和通用语言，并提供交互功能和辅助内容

#### 四：界限上下文的大小

    1.一个界限上下文应该足够大，大到刚好容纳整个通用语言
    2.技术框架会影响界限上下文的划分
    3.为了分配任务，架构组件和开发资源来确定上下文会使得通用语言变得四分五裂
    4.组件嵌入到离散的系统中会会造成统舱效应