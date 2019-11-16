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
      this.resolveCallbacks.forEach(fn=>fn(value))
    },(reason)=>{
      this.status = 'rejected'
      this.reason = reason
      this.rejectCallbacks.forEach(fn=>fn(reason))
    })
  }
  then(onfulfilled,onrejected){
    if(this.status == 'fulfilled'){
      onfulfilled(this.value)
    }
    if(this.status == 'rejected'){
      onrejected(this.reason)
    }
    if(this.status === 'pending'){
      this.resolveCallbacks.push(onfulfilled)
      this.rejectCallbacks.push(onrejected)
    }
    
  }
}
module.exports = Promise
