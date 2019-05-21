### 语义分析

**自顶向下（大多数的分析器）、自底向上**

**Yacc软件可以直接将语法翻译方案生成一个翻译器**

#### 2.4: 自顶向下

    1.一个非终结符号选择产生式是一个“尝试犯错误”的过程，不成功就进行回溯哦，选择下一个产生式

##### 2.4.2:  预测分析法

###### 考虑文法

    stmt > expr ; | 
           if ( expr ) tmt |
           for ( optexprt ; expr ; optexpr) stmt | 
           other 
    optexprt > e | 
               expr


###### 预测分析器包含两个过程stmt()和optexpr()

    1.FIRST(a)

##### 2.4.5 左递归（无限循环）

    1.expr > expr + term 会产生无限循环

#### 简单的表达式翻译器

    1.一个左递归文法
        expr > expr + term {print("+")} | 
               expr - temr {print("-")} | 
               term 
        term > 0 | 1 | 2 | ... | 9 print(term)
    2.消除左递归之后
        expr > term rest
        rest > + term {print("+")} rest
        rest > - term {print("+")} rest
        rest > e
        term > 0 | 1 | 2 | 3 | ... | 9   

        2.4.5.js 翻译器
    
#### 2.6 词法分析

    1.从字符流当中读取字符，并将其组装成词法单元对象
    2.词法单元可能还包含一些附加的信息
    3.词法分析器需要消除空白和注释，添加行号等信息来定位错误
    4.字符的预读取，比如遇到 > 符号需要再读入一个字符，看能不能组成 >=
    5.此法分析器需要识别关键字和标识符

#### 2.7 符号表

    1.符号表是编译器用来保存程序构造各种信息的数据结构
    2.每一个带有声明的块都对应一个符号表，用来实现作用域
    3.每一个类拥有自己的符号表，每个方法拥有自己的符号表
    4.符号表是由词法分析器、语法分析器、语义分析器来创建的
    5.语法分析器通常更适合用来创建条目
    6.每一个作用域都应该有一个符号表
    7.符号表的嵌套可以用栈来实现，使用最近嵌套原则
    8.有些编译器用散列来实现那些没有被块包含的条目

#### 2.8 中间代码生成

    1.存在树型结构(语法树和抽象语法分析树)和线性结构(三地址代码)两种形式
    2.编译器可以在创建语法分析树的时候同时创建三地址代码
    3.编译器不会创造整颗语法树，但是能保证创建三地址代码的那部分语法树是可用的，不用的时候就会被释放

    