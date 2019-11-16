class Promise {
  constructor(callback){
    this.status = 'pending'
    this.resolveCallbacks = []
    this.rejectCallbacks = []
    this.value = null
    this.reason = null
    callback((value)=>{
      this.status = 'fulfilled'
      this.value = value
      this.resolveCallbacks.forEach(fn=>fn())
    },(reason)=>{
      this.status = 'rejected'
      this.reason = reason
      this.rejectCallbacks.forEach(fn=>fn())
    })
  }
  then(onfulfilled,onrejected){
    return new Promise((resolve,reject)=>{
      if(this.status == 'fulfilled'){
        onfulfilled(this.value)
      }
      if(this.status == 'rejected'){
        onrejected(this.reason)
      }
      if(this.status === 'pending'){
        this.resolveCallbacks.push(()=>{
          let flag = onfulfilled(this.value)
          resolve(flag)
        })
        this.rejectCallbacks.push(()=>{
          let flag = onrejected(this.reason)
          reject(flag)
        })
      }
    })
  }
}
module.exports = Promise