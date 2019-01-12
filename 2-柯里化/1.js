

const curry = func => {
  const g = (...allArgs) => allArgs.length >= func.length ? func(...allArgs) 
  : (...args) => g(...allArgs, ...args)
  return g
}