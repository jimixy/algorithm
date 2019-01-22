/**
* 二叉树的遍历
*/
var nodes = {
  node: 6,
  left: {
    node: 5, 
    left: { 
      node: 4 
    }, 
    right: { 
      node: 3 
    }
  },
  right: { 
    node: 2, 
    right: { 
      node: 1 
    } 
  }
}

/**
* D：访问根结点，L：遍历根结点的左子树，R：遍历根结点的右子树。
* 先序遍历：DLR
* 中序遍历：LDR
* 后序遍历：LRD
*/

// 1 深度优先-先序遍历-递归
var result = []
var dfs = function(nodes) {
  if(nodes.node) {
    result.push(nodes.node)
    nodes.left && dfs(nodes.left)
    nodes.right && dfs(nodes.right)
  }
}
dfs(nodes)
// console.log(result)

// 2 深度优先-先序遍历-非递归
var dfs2 = function(nodes) {
  var result = []
  var stack = []
  stack.push(nodes)
  while (stack.length) {
    console.log('stack', stack);
    var item = stack.pop()
    result.push(item.node)
    item.right && stack.push(item.right)
    item.left && stack.push(item.left)
  }
  return result
}
console.log(dfs2(nodes))

/**
* 广度优先遍历
* 优点：不会打乱数据结构
**/

// 3 广度优先-递归
var result = []
var queue = [nodes]
var bfs3 = function(count) {
  count = count || 0
  if(queue[count]) {
    result.push(queue[count].node)
    var left = queue[count].left
    var right = queue[count].right
    if(left) {
      queue.push(left)
    }
    if(right) {
      queue.push(right)
    }
    bfs3(++count)
  }
}
dfs3()
// console.log(result)

// 4 广度优先-非递归
var bfs4 = function(nodes) {
  var result = []
  var queue = []
  var pointer = 0
  queue.push(nodes)
  while(pointer < queue.length) {
    var item = queue[pointer++] // 这里不使用 shift 方法（复杂度高），用一个指针代替
    result.push(item.node)
    //console.log(item.node)
    item.left && queue.push(item.left)
    item.right && queue.push(item.right)
  }
  return result
}
console.log(bfs4(nodes))



