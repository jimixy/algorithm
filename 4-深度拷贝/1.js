
function clone(obj) {
  if(obj == null || typeof obj !== 'object') return obj
  const newObj = new obj.constructor();
  // 不拷贝原型链的
  for (const key in Object.getOwnPropertyDescriptors(obj)) {
      newObj[key] = clone( obj[key] )
  }
  return newObj
}