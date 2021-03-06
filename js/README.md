<!--
 * @Author: your name
 * @Date: 2021-03-12 14:28:32
 * @LastEditTime: 2021-03-22 11:28:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsSkill\js\README.md
-->
## js面试集锦
### 1、JSON对象
#### JSON历史
JSON是Douglas Crockford在2001年开始推广使用的数据格式，在2005年-2006年正式成为主流的数据格式，雅虎和谷歌就在那时候开始广泛地使用JSON格式。
#### JSON对象与JS对象的关系
JSON 是 JS 对象的字符串表示法，它使用文本表示一个 JS 对象的信息，本质是一个字符串。
#### JSON对象与JS对象的转换
- JSON的序列化
```` javaScript
let obj = {name:1}
JSON.stringify(obj)
//"{"name":1}"
````
- JSON的反序列化
```` javaScript
let obj = '{"name":1}'
JSON.parse(obj)
// {name:1}
//扩展
JSON.parse(obj,(k,v)=>{
    if(k === '') return v;
    return v * 2;
})
````
#### JSON的序列化与反序列化的应用
- css-loader 
- 前后台交互
- 待添加。。。
#### 浏览器的兼容性
- Full support
### 2、前端的三座大山之作用域与闭包
- 推荐读一下《你不知道的javaScript》这本书
#### 简单说以下几点：
#### 作用域
- 作用域是一套规则，用来帮助编译器找到变量存储的位置。📍如果要查找变量对其进行赋值，则用LHS查询，如果只是查找变量，就用RHS查询。如果不知道LHS和RHS,请自己查询一下。（mark一下）
- 函数作用域，一个函数就包含一个作用域，全局作用域可以看作是最外面的函数（自己理解），内部的作用域可以访问外部的作用域，外部的作用域访问不到内部的作用域。
#### 闭包
- 闭包（closure）呢就是能够在外部作用域访问到内部作用域的变量。
- 我对闭包的几个认识阶段：
- 1.定义在一个函数内部的函数
- 2.能够读取其他函数内部变量的函数，搭建了不同作用域之间的桥梁（后来看到《你不知道的javaScript》这本书,发现了静态词法作用域）
- 什么是静态词法作用域呢？
- 就是作用域定义在代码的书写阶段而不是运行阶段，我们可以这样理解，如果函数A内嵌套函数B，函数B可以访问函数A的变量。无论运行后是如何复杂执行的，作用域都是在书写的时候就确定了，动态改变的可能是this,因为this是“最后谁调用的就指向谁”。
- 闭包呢我理解有两个功能：不受作用域限制，可提取函数内部的变量的一种手法，另一个就是让这些变量的值始终保持在内存中。
- 由于闭包可能会常驻内存，所以要注意合理使用闭包。还有一些问题，在以后的章节会提到。今天就这样吧。👋
### 3、实现一下防抖节流函数
#### 防抖函数
- 防抖：场景理解:在一段时间内，你一直在做重复的事情100次，防抖就是只让你在这段时间内最后一次生效，换言之，这段时间，你只做成功了一次。
- 比如你女朋友用微信给你发消息，你会看到"对方正在输入。。。"，仔细分析一下它是如何设计的，我们可以看到防抖的身影。
- 简单代码如下
````html
   <input type="text" id="it">
   <p class="inText">你好</p>
````
- 每当输入时触发，清除之前的计时事件（改变状态），重新计时
````javaScript
let s;
function debounce(fn, w) {
    return function () {
        document.querySelector('.inText').innerText = "对方正在输出。。。"
        if(s){ clearTimeout(s);}
        s = setTimeout(()=>{
            fn()
        },w)
     }
}
function input() {
    document.querySelector('.inText').innerText = "请输入"
 }
 var x=document.querySelector("#it")
x.addEventListener('input',function () {
     debounce(input,2000)()
 })
````
#### 节流函数
- 节流是让多次执行变成每隔一段时间执行。（开源节流）
````javaScript
var canRun = true
function throttle(){
    if(!canRun){
      return
    }
    canRun = false
    setTimeout( function () {
        console.log("函数节流")
        canRun = true
      }, 500)
    }
//测试
setInterval(() => {
    console.log(1);
    throttle()
}, 100 );
````
### 5、new操作符做了什么事情，如何手写实现一个new的操作？
#### 思路
- 获取传入的构造函数
- 创建一个新的对象，将构造函数的原型继承到新的对象上
- 执行构造函数，改变this到新的对象上，(这是新对象在继承构造函数的作用域链)
- 判断构造函数的执行结果，返回合适的结果
````javaScript
function Person(n) {
    this.age = 23
    this.name = n

}
Person.prototype.sayName = function () {
    console.log(this.name);
}
Person.prototype.sayAge = function () {
    console.log(this.age);
}
function _new(){
let constr = Array.prototype.shift.call(arguments)
let obj = Object.create(constr.prototype);
let result = constr.apply(obj,arguments)
return result instanceof Object?result:obj
}
// let per = new Person('小明')
let per = _new(Person,'小明')

per.sayName()
per.sayAge()
````
