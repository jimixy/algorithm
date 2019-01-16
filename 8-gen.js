// console.log(gen(1))
function gen(w) {
  const arr = []
  for (let i = 0; i < w * 10000; i++) {
    arr[i] = i+1
  }
  return fisher_yates_shuffle(arr)
}


/**
 * 0(n)的打乱算法
 * @param {array} arr 
 */
function fisher_yates_shuffle(arr) {
  for (let i = 0; i < arr.length; i++) {
    // 从 [i, arr.length -1]中取一个整数
    const j = i + Math.floor( Math.random()*(arr.length - i) );    
    [arr[i], arr[j]] = [ arr[j], arr[i]]
  }
  return arr
}