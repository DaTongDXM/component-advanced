function findComponentUpward (context, componentName) {
  let parent = context.$parent
  let name = parent.$options.name
  while (parent && (!name || componentName.indexOf(name) < 0)) {
    parent = parent.$parent
    if (parent)name = parent.$options.name
  }
  return parent
}
function findComponentsUpward (context, componentName) {
  let parents = []
  let parent = context.$parent
  if (parent) {
    if (parent.$options.name === componentName) parents.push(parent)
    return parents.concat(findComponentsUpward(parent, componentName))
  } else {
    return []
  }
}
function findComponentDownward (context, componentName) {
  let childrens = context.$children
  let children = null

  if (childrens.length) {
    for (child of childrens) {
      const name = child.$options.name
      if (name === componentName) {
        children = child
        break
      } else {
        children = findComponentDownward(child, componentName)
        if (children) break
      }
    }
  }
  return children
}
function findComponentsDownward (context, componentName) {
  let childrens = context.$children
  // let childs = []
  // es6的reduce方法，array.reduce(function(pre,cur,index),arr)
  // pre是上次执行的结果，
  // cur是当前遍历的值
  // index是当前遍历的索引
  // arr是初始值
  return childrens.reduce((childs, children) => {
    if (children.$options.name === componentName)childs.push(children)
    const findChilds = findComponentsDownward(children, componentName)
    return childs.concat(findChilds)
  }, [])
}
// 四三个参数是es6中设置默认值得写法，当函数调用的时候没有传入该参数，默认取签名中设置的值
function findBrothersComponents (context, componentName, exceptMe = true) {
  let res = context.$parent.$children.filter(item => {
    item.$options.name === componentName
  })
  // vue在渲染组件的时候会为每一个组件加一个内置属性_uid,这个属性值是不会重复的
  let index = res.findIndex(item => item._uid === context._uid)
  if (exceptMe)res.splice(index, 1)
  return res
}

function typeOf (obj) {
  const toString = Object.prototype.toString
  const map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  }
  return map[toString.call(obj)]
}

function deepCopy (data) {
  const t = typeOf(data)
  let o

  if (t === 'array') {
    o = []
  } else if (t === 'object') {
    o = {}
  } else {
    return data
  }

  if (t === 'array') {
    data.forEach(e => {
      o.push(deepCopy(e))
    })
  } else if (t === 'object') {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const element = data[key]
        o[key] = deepCopy(element)
      }
    }
  }
  return o
}
export { findComponentUpward, findComponentsUpward, findComponentDownward, findComponentsDownward, findBrothersComponents, deepCopy}
