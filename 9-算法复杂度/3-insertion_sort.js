
/**
 *  插入排序
 * @param {array} A 
 */
function insertion_sort(A) {
  for (let j = 0; j < A.length; j++) {
    const key = A[j];
    let i = j - 1
    while (i >= 0 && A[i] > key) {
      A[i + 1] = A[i]
      i--
    }
    A[i+1] = key
  }
  return A
}

console.log(insertion_sort([2,4,40,15,23]))