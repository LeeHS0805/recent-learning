const PENDING = "PENDING",
  FUFILLED = "FUFILLED",
  REJECTED = "REJECTED";

function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    return reject(new TypeError('Chaining cycle detected for promise #<MyPromise>'))
  }

  let called = false;

  if ((typeof x === 'object' && x !== null) || typeof x === 'function') {
    try {
      let then = x.then; // throw error

      if (typeof then === 'function') { // Promise
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
  constructor(excutor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.this.onResolveCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (value instanceof MyPromise) {
        value.then(resolve, reject);
        return;
      }
      if ((this.status = PENDING)) {
        this.status = FUFILLED;
        this.value = value;
        this.onResolveCallbacks.forEach((fn) => fn());
      }
    };

    const reject = (reason) => {
      if ((this.status = PENDING)) {
        this.status = REJECTED;
        this.reason = reason;
        this.onFufilledCallbacks.forEach((fn) => fn());
      }
    };

    try {
      excutor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }
  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled == "function" ? onFulfilled : (v) => r;
    onRejected = typeof onRejected == "function" ? onRejected : (r) => r;

    if ((this.status = Pending)) {
      let promise2 = new MyPromise((resolve, reject) => {
        this.onFufilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
            } catch (error) {
              reject(error);
            }
          });
        });
        this.onRejectedCallbacks.push(()=>{
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
            } catch (error) {
              reject(error);
            }
          });
        })
      });
    }
  }
}
module.exports = MyPromise;
