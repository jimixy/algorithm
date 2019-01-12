
/**
 *  过滤掉重复的滚动事件
 * @param {*} func 
 * @param {*} delay 
 */
function throttle(func, delay = 60) {
    let lock = false
    return (...args) => {
      if(lock){return}
      func(...args)
      lock = true
      setTimeout(() => {
        lock = false
      }, delay);
    } 
}

