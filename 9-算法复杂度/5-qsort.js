
function swap(A, i , j) {
  [A[i],A[j]] = [A[j],A[i]]
}

function divide(A, p ,r) {
  const rnd = p+Math.floor(Math.random()*(r-p))
  swap(A,rnd,r-1)
  const x=A[r-1]
  let i = p -1
  for (let j = p; j < r-1; j++) {
    if(A[j]<x){
      i++
      swap(A,i,j)
    }
  }
  swap(A,i+1,r-1)
  return i+1
}

function qsort(A, p = 0, r) {
  r = typeof r !== 'undefined' ? r : A.length
  if(p < r-1){
    const q = divide(A,p,r)
    qsort(A,p,q)
    qsort(A,q+1,r)
  }
  return A
}

console.log(qsort([2,7,3,44,25,11,30]));
