
function tree_transverse(tree, ord=0, callback) {
  let transversed = false
  if(!tree.children){
    callback(tree.v)
    return
  }
  tree.children.forEach( (child, i) => {
      if(i === ord) {
        transversed = true
        callback(tree.v)
      }
      tree_transverse(child, ord, callback)
  });
  !transversed && callback(tree.v)
}

// 先序遍历
tree_transverse(tree, (node) => console.log(node.v))

// 中序遍历
tree_transverse(tree, (node) => console.log(node.v), 1)
tree_transverse(tree, (node) => console.log(node.v),2)

// 后序遍历
tree_transverse(tree, (node) => console.log(node.v), 3)
tree_transverse(tree, (node) => console.log(node.v), 4)


// 树的查找
function find(tree, prediction) {
    return [...tree_transverse(tree)].find(prediction)
}

find(tree, node => node.v === 2)