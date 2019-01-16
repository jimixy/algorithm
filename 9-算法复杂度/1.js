

/**
 *  线性时间的算法
 * @param {array} arr 
 * @param {string, number} value 
 */
function find(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value){
      return value
    }
  }
  return null
}

