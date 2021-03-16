## javaScript设计模式
### 什么是设计模式？
- 关键词：<font color='red'> 解决问题的方案 </font>
- 针对某一个共性问题，有一套成熟的解决方案
### 设计模式分类
- 创建型模式 🐣：可以决定生成哪些对象，提高了程序的灵活性
- 结构型模式 📠：向现有对象添加功能的不同方式
- 行为型模式 👍：描述对象之间如何相互作用
### 有什么用呢？
- 看源码，有时侯看框架源码的时候，会发现其中运用了设计模式，比如发布订阅模式，路由的策略模式，工厂模式，原型模式等等
- 待补充 。。。
### 设计模式之旅
#### singleton（单例模式）
- ✅ 单、 创建对象的最佳方式
- 特点：提供了一种访问其唯一的对象的方式，可以直接访问，不需要实例化该类的对象。
- 👀：该类只有一个实例 、要自己创建自己的唯一的实例、同时要给所有其他对象提供这一实例
- 所用的地方：
- jQuery 的$ 可以查看一下源码
- 登录框、购物车
- Vuex和Redux中的store
````javaScript
class Single {
    log() {
        console.log('Single...')
    };
    static getInstance() {
        let instance; //闭包
        return function() {
            if (!instance) {
                instance = new Singlet();
            }
            return instance;//自己创建自己的实例
        }
    };
}
Single.getInstance()() //不需要实例化该类的对象
````