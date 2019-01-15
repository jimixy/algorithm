
function clone(obj) {
  if(obj == null || typeof obj !== 'object') return obj
  let newObj = null
  // 时间对象有特殊属性
  if(obj.constructor === Date){
    newObj = new obj.constructor(obj)
  }else {
    newObj = new obj.constructor()
  }
  // 不拷贝原型链的
  for (const key in Object.getOwnPropertyDescriptors(obj)) {
      newObj[key] = clone( obj[key] )
  }
  return newObj
}