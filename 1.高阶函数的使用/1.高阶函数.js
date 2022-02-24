// 高阶函数的概念：以下两种满足任何一个均可，promise内部是回调函数(包含着高阶函数)

// 1. 一个函数返回一个函数
// (function () {
//   return function () {}
// })()

// 2. 一个函数的参数接收一个函数
// function fn (cb) {
//   cb()
// }

// ----------------------------------------------------------------------

// 扩展方法，会用到高阶函数
function core () { // 核心代码
  // ...
  console.log('core')
  // ...
}

// 给core函数增加一些额外的逻辑，但不能更改核心代码
Function.prototype.before = function () {
  return () => { // newCore
    cb()
    this()
  }
}

let newCore = core.before(() => {

})