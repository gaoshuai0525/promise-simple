let Promise = require('./mypromise')
var promise = new Promise(function (resolve,reject) {
  setTimeout(() => {
    resolve('成功')
  }, 1000)
})
promise.then((value)=>{
  console.log('success',value)
  return 1
},function (reason){
  console.log('fail',reason)
}).then((data)=>{
  console.log('success',data)
})