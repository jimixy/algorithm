
function * transverse(node) {
  yield node
  if(node.children) {
    const children = [...node.children]
    for (let i = 0; i < children.length; i++) {
      yield * transverse(children[i])
    }
  }
}

function get_range(x) {
    const m = x.match(/\[(.*)]\]/);
    if(m){
      return (arr) => {
        return arr.slice(...m[1].split(':').map(x => x?x:0));
      }
    }
}

function is_ancestor(node1, node2) {
  let p = node2
  while (p) {
    if (p === node1) { return true }
    p = p.parentNode
  }
  return false
}


function selector(node, path) {
  if(path.length === 0) {return [node]}
  const p = path.shift()
  let nodes = []
  if(p.className){
    nodes = [...document.getElementsByClassName(p.className)]
    .filter(v => is_ancestor(node, v))
  }
  else if(p.tagName) {
    nodes = [...transverse(node)].filter(n => n.tagName === p.tagName)
  }
  p.range && (nodes = p.range(node))
  return [].concat(...nodes.map(node => selector(node, [...path])))
}