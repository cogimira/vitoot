### 数据库索引

**建立索引是为了提高查询效率，提高查询效率的数据结构（数组、hash、树、跳表等）**

#### 索引的常见模型

    1.hash表适合用于等值查询，不适合用于区间查询（必须全部扫描一遍）
    2.有序数组适合保存静态信息，比如人口
    3.二叉树的查询效率很高，但数据库索引一般不用，因为索引不止在内存总，也可能储存在磁盘中（N叉树）
    4.树的高度等于一次查询要访问磁盘的次数，查询要尽可能少的访问磁盘，innodb 的 N 是1200

#### InnoDB的索引模型

**明白回表的概念、主键索引和非主键索引分别保存了什么内容、非主键索引的查询过程**

    1.主键索引和非主键索引（也称为二级索引）
    2.主键索引查询直接搜索主键索引这颗B+树
    3.非主键索引保存的值为主键，所以通过非主键索引查询会查询两次（非主键索引，主键索引），这个过程称为回表

#### 索引维护

**页分裂概念、自增主键为什么不触发页分裂过程**

***

> 什么是数据库的数据页？

as:数据页是数据库储存数据的最小单位，innodb的默认大小是16kb

***

    1.主键的长度越小，非主键索引保存的内容就越小
    2.数据页写满了之后，就要申请新的数据页，然后挪动部分数据过去，影响性能
    3.页分裂也会造成数据页的利用率不高

#### 覆盖索引（减少回表）

**覆盖索引是如何减少回表的**

    1.覆盖索引本质上就是索引冗余
    2.如果普通索引上保存的内容正好是我们要查询的内容，这个时候我们不用回表（联合索引）

#### 最左前缀原则、索引下推

**联合索引的查询方式**

    1.