---
title: Promise实现
date: 2021-5-15 22:43:00
tags: 
	- JS
Comment: true
categories: 前端
---

# Promise

```js
//三种状态
const PENDING = 'PENDING',
  FULFILLED = 'FULFILLED',
  REJECTED = 'REJECTED';

//处理then回调中的返回值x
//resolvePromise函数即为根据x的值来决定promise2的状态的函数
function resolvePromise(promise2, x, resolve, reject) {
  //对应标准2.3.1节 
  if (promise2 === x) {
    return reject(new TypeError('Chaining cycle detected for promise #<MyPromise>'))
  }
  //防止既resolve又reject的情况
  let called = false;
	//这里合并了2.3.2和2.3.3 因为promise也符合2.3.2是函数的要求
  //这里注意 null的类型检查也是'object'
  if ((typeof x === 'object' && x !== null) || typeof x === 'function') {
    try {
      //avoids multiple accesses to the x.then property.
      let then = x.then; // throw error

      if (typeof then === 'function') { // 判断是否为Promise 
        then.call(x, (y) => {
          if (called) return;
          called = true;
          resolvePromise(promise2, y, resolve, reject);
        }, (r) => {
          if (called) return;
          called = true;
          reject(r);
        })
      } else {
        resolve(x);
      }
    } catch (e) {
      if (called) return;
      called = true;
      reject(e);
    }
  } else {
    resolve(x);
  }
}

class MyPromise {
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;

    this.onResolveCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      //考虑到resolve一个promise的情况
      if (value instanceof MyPromise) {
        //让这个promise不断递归，onFullFilled函数用resolve代替。当resolve的this依旧和生命处相同
        //从而实现最后resolve的值为当前value赋值
        value.then(resolve, reject);
        return;
      }

      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = value;
        this.onResolveCallbacks.forEach((fn) => fn()); //发布订阅模式
      }
    }

    const reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.forEach((fn) => fn());
      }
    }

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  // x 普通值  promise
  then(onFulfilled, onRejected) {
    //promise 值穿透
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };

    let promise2 = new MyPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      }

      if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      }

      if (this.status === PENDING) {
        // 订阅
        this.onResolveCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        });
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        });
      }
    });

    return promise2;
  }

  catch (errorCallback) {
    return this.then(null, errorCallback);
  }
}

module.exports = MyPromise;

```

