## js面试集锦
### JSON对象
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
