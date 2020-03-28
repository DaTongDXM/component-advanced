let handler = {
  get (obj, key) {
    return Reflect.has(obj, key) ? Reflect.get(obj, key) : '没有该属性'
  },
  set (obj, key, val) {
    if (Reflect.has(obj, key)) {
      switch (key) {
        case 'id':

          Reflect.set(obj, key, 'ds_' + val)
          break
        default:
          break
      }
      return true
    }
    return false
  }
}
export default class Affair {
  static toAffair (obj) {
    return new Proxy(obj, handler)
  }
}
