const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';
class Promise {
    // 存储then中的回调函数
    constructor(fn) {
        this.status = PENDING
        this.callbacks = [];
        this.value = null
        fn(this._resolve.bind(this),this._reject.bind(this));//绑定reslove的this
    }
    then(onFulfilled, onRejected) {
        // onFulfilled 返回一个promise实例
        return new Promise((resolve, reject) => {
            this._handle({ onFulfilled: onFulfilled || null, resolve: resolve, onRejected: onRejected || null, reject: reject })//传递onFulfilled，onRejected,reject和resolve
        })
    }
    _handle(callback) {
        // {onFulfilled,resolve}
        if (this.status === PENDING) {
            this.callbacks.push(callback);
            return
        }
        let yn = this.status === FULFILLED ? callback.onFulfilled : callback.onRejected
        if (!yn) {
            //then不传值时候
            let cb = this.status === FULFILLED ? callback.resolve : callback.reject
            cb(this.value)
            return
        }
        //捕获错误
        let cb;
        try {
            var ret = yn(this.value);//执行当前 Promise的 onFulfilled得到返回值
            cb = this.status === FULFILLED ? callback.resolve : callback.reject
        } catch (error) {
            ret = console.error
            cb = callback.reject
        }finally{
            cb(ret);//通过调用第二个 Promise 的 resolve 方法，传递给第二个 Promise
        }
    }
    finally(onDone) {
        if (typeof onDone !== 'function') return this.then();
        let Promise = this.constructor;
        return this.then(
          value => Promise.resolve(onDone()).then(() => value),
          reason => Promise.resolve(onDone()).then(() => { throw reason })
        );
    }
    _resolve(value) {
        //添加了判断
        if (value && (typeof value === 'object' || typeof value === 'function')) {
            var then = value.then;
            if (typeof then === 'function') {
                then.call(value, this._resolve.bind(this));
                return;
            }
        }
        this.status = 'FULFILLED'
        this.value = value
        // value异步请求获得的数据
        this.callbacks.forEach(fn => {
            this._handle(fn)
        });
    }
    _reject(error) {
        this.state = 'rejected';
        this.value = error;
        this.callbacks.forEach(callback => this._handle(callback));
    }
}