
/**
 *  过滤掉重复的验证事件（用户输入停止后300ms触发验证）
 * @param {*} func 
 * @param {*} delay 
 * @param {*} I 
 */
function throttle(func, delay = 300, I = null) {
  return (...args) => {
    // clearTimeout(I)
    clearInterval(I)
    I = setTimeout(func.bind(null, ...args), delay);
  }
}