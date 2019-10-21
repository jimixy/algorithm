var maxDepth = function(root) {
    if (!root) return 0
    if (!root.left && !root.right) return 1
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}

var res = maxDepth([3, 9, 20, null, null, 15, 7])
console.log(res)
