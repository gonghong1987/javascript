# javascrip学习笔记


---
## **1.1  变量、常量**
    
- 变量的声明关键字let、var说明:

```
1、用var关键字声明变量：

    var name="张三";
    
    console.log(name);// "张三"
    
    如果声明变量未赋初始化值，输出结果是undefined(未定义)：
    
    var num;
    
    console.log(num);//undefined;
    
    ps:用var 关键字声明变量可以重复定义：
    
    var num=1;
    
    var num=2;
    
    console.log(num);//2
    
    ps:var关键字没有块级作用域：
    
        if(true){
            var i=2;
        }
        
        console.log(i);//2
    
    
2、用let关键字声明变量(es5新增);

    let name="张三";
    
    console.log(name);
    
    ps:let关键字声明变量不能声明变量名重复:
    
        var name=1;
        
        let name=2;
        
        //name  报语法错误；
```

- 常量的声明关键字const：


```
1、常量声明，常量声明意思是不可改变的变量,常量的名称一般用大写:
    
    const NAME="李四";
    
    console.log(NAME);//"李四" ;

    ps:常量的声明必须赋初始值:
    
    const NAME;
    
    console.log(NAME);// 语法报错;
    
    ps:const常量的声明和let变量声明一样，不能声明已有的变量或常量名称:
    
    var num=2;
    
    const num="3";
    
    console.log(num);//语法报错;
    
    ps:常量const赋值是对象时，也不能重新赋值给常量名称，但是可以改变常量声明对象里的属性值：
    
    const DATA={value:1,text:"中国"};
    
    DATA={value:2,text:"中国"};//报语法错误;
    
    DATA.value=3;//{value:3,text:"中国"}
    
```

## **1.2    javascript数据类型**

> javascript分为两大类数据类型：
                                
    1、五大基本数据类型：
    
        数字(Number)、字符串(String)、布尔值(Boolean )、undefined、null。
    
    2、引用类型(即对象)：对象、数组、函数.
    
- 查看类型的操作符typeof:

```
ps:typeof 操作符可以查看基本数据类型:
    
    var name="您好";
    console.log(typeof name);//"string"
    
    var num=2;
    console.log(typeof num);//"number"
    
    var obj={a:1};
    console.log(typeof obj);//"object"
    
    ps:typeof 数组的时候，数据类型是"object":
        var arr=[2];
        console.log(typeof arr);//"object" 
        
    因为typeof只能判断基本数据类型的类型,引用类型(即复杂数据类型)用typeof判断都是"object"；

ps：instanceof查看数据类型;
    
    var arr=[];
    alert(arr instanceof Array);//true
        
```

- 数字类型(number),number类型包括浮点数类型和整数类型：


```
1、number数字类型：

    var num=1；
    console.log(num);//1
    console.log(typeof num);//"number"
    
    指数表示法：xe+y,意思是x(是一个数字)后面加y(一个数字)个0;
    
    例：一个数字表示成le+1就是说在1的后面加1个0,也就是10:
    
    var num=le+1;
    console.log(num);//10
    
    同理:2e+2,就等于2的后面加2个0,也就是200:
    
    var num=2e+2;
    console.log(num);//200
    
2、转换为数字类型的方法:
    
    1、parseInt()方法:
    
        var name="2";
        console.log(parseInt(name));//2
        
    
    2、Number()强制转换:
    
        var num="2";
        console.log(Number(num));//2
        
    2、数字转字符串toString()方法:
        
        var num=2;
        console.log(num.toString());//"2"
        
    ps: 如果name不等于数字;转换出来就是一个非数字NaN;
        
        var name="您好";
        console.log(parseInt(name));//NaN
        
        var name="您好";
        console.log(Number(name));//NaN
```

- String字符串数据类型：


```
    1、字符串的定义:
        
        var name="hi";
        console.log(name);//hi
        
    2、字符串的查找:
        
        //charAt(),参数是索引,如该索引不存在则返回为空;
        var str="javascript";
        str.charAt(0);//"j"
        
        
        
    3、indexOf(),参数为字符，返回字符的索引，如有相同的字符，则返回第一个的索引并返回,indexOf是以前开始收索，lanstIndexOf()是从最后开始收索。
    
        var str="javascript";
        str.indexOf("a");//1
        
        //如果没有改字符，则返回-1，可以运用判断该字符串是否有该字符;
        if(str.indexOf(h)===-1){
            
        }
    # javascript语法篇


---
## **1.1  变量、常量**
    
- 变量的声明关键字let、var说明:

```
1、用var关键字声明变量：

    var name="张三";
    
    console.log(name);// "张三"
    
    如果声明变量未赋初始化值，输出结果是undefined(未定义)：
    
    var num;
    
    console.log(num);//undefined;
    
    ps:用var 关键字声明变量可以重复定义：
    
    var num=1;
    
    var num=2;
    
    console.log(num);//2
    
    ps:var关键字没有块级作用域：
    
        if(true){
            var i=2;
        }
        
        console.log(i);//2
    
    
2、用let关键字声明变量(es5新增);

    let name="张三";
    
    console.log(name);
    
    ps:let关键字声明变量不能声明变量名重复:
    
        var name=1;
        
        let name=2;
        
        //name  报语法错误；
```

- 常量的声明关键字const：


```
1、常量声明，常量声明意思是不可改变的变量,常量的名称一般用大写:
    
    const NAME="李四";
    
    console.log(NAME);//"李四" ;

    ps:常量的声明必须赋初始值:
    
    const NAME;
    
    console.log(NAME);// 语法报错;
    
    ps:const常量的声明和let变量声明一样，不能声明已有的变量或常量名称:
    
    var num=2;
    
    const num="3";
    
    console.log(num);//语法报错;
    
    ps:常量const赋值是对象时，也不能重新赋值给常量名称，但是可以改变常量声明对象里的属性值：
    
    const DATA={value:1,text:"中国"};
    
    DATA={value:2,text:"中国"};//报语法错误;
    
    DATA.value=3;//{value:3,text:"中国"}
    
```

## **1.2    javascript数据类型**

> javascript分为两大类数据类型：
                                
    1、五大基本数据类型：
    
        数字(Number)、字符串(String)、布尔值(Boolean )、undefined、null。
    
    2、引用类型(即对象)：对象、数组、函数.
    
- 查看类型的操作符typeof:

```
ps:typeof 操作符可以查看基本数据类型:
    
    var name="您好";
    console.log(typeof name);//"string"
    
    var num=2;
    console.log(typeof num);//"number"
    
    var obj={a:1};
    console.log(typeof obj);//"object"
    
    ps:typeof 数组的时候，数据类型是"object":
        var arr=[2];
        console.log(typeof arr);//"object" 
        
    因为typeof只能判断基本数据类型的类型,引用类型(即复杂数据类型)用typeof判断都是"object"；

ps：instanceof查看数据类型;
    
    var arr=[];
    alert(arr instanceof Array);//true
        
```

- 数字类型(number),number类型包括浮点数类型和整数类型：


```
1、number数字类型：

    var num=1；
    console.log(num);//1
    console.log(typeof num);//"number"
    
    指数表示法：xe+y,意思是x(是一个数字)后面加y(一个数字)个0;
    
    例：一个数字表示成le+1就是说在1的后面加1个0,也就是10:
    
    var num=le+1;
    console.log(num);//10
    
    同理:2e+2,就等于2的后面加2个0,也就是200:
    
    var num=2e+2;
    console.log(num);//200
    
2、转换为数字类型的方法:
    
    1、parseInt()方法:
    
        var name="2";
        console.log(parseInt(name));//2
        
    
    2、Number()强制转换:
    
        var num="2";
        console.log(Number(num));//2
        
    2、数字转字符串toString()方法:
        
        var num=2;
        console.log(num.toString());//"2"
        
    ps: 如果name不等于数字;转换出来就是一个非数字NaN;
        
        var name="您好";
        console.log(parseInt(name));//NaN
        
        var name="您好";
        console.log(Number(name));//NaN
```

- String字符串数据类型：


```
    1、字符串的定义:
        
        var name="hi";
        console.log(name);//hi
        
    2、字符串的查找:
        
        //charAt(),参数是索引,如该索引不存在则返回为空;
        var str="javascript";
        str.charAt(0);//"j"
        
        
        
    3、indexOf(),参数为字符，返回字符的索引，如有相同的字符，则返回第一个的索引并返回,indexOf是以前开始收索，lanstIndexOf()是从最后开始收索。
    
        var str="javascript";
        str.indexOf("a");//1
        
        //如果没有改字符，则返回-1，可以运用判断该字符串是否有该字符;
        if(str.indexOf(h)===-1){
            
        }
```