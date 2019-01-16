
// 全排列-简单
function perm(A) {
  if(A.length === 1) { return [A]}
  return [].concat(...A.map( (a, i) => 
    perm(A.slice(0, i)
      .concat(A.slice(i+1))).map( p => [a].concat(p))
  ))
}

console.log('all', perm([1,2,3,4]));

// 全排列-交换
function* perm(A, N) {
  if(!N){ N = A.length}
  if(N === 1){ yield A.slice(); return}
  for (let i = 0; i < N;i++) {
    swap(A, i,N -1)
    yield * perm(A, N - 1)
    swap(A, i, N -1)
  }
}


// 全排列-Heap的方法 速度最快
function* perm(A, N) {
  if (!N) { N = A.length }
  if (N === 1) { yield A.slice(); return }
  for (let i = 0; i < N; i++) {
    yield * perm(A, N - 1)
    if(N % 2 === 1)
      swap(A, i, N - 1)
    else
      swap(A, 0, N - 1)
  }
}