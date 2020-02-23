function broadcast (componentName, eventName, params) {
  this.$children.forEach(child => {
    if (child.$options.name === componentName) {
      child.$emit(eventName, params)
    } else {
      broadcast.call(child, componentName, eventName, params)
      // broadcast.apply(child, [componentName, eventName].concat([params]))
    }
  })
}
export default{
  methods: {
    dispatch (componentName, eventName, params) {
      let parent = this.$parent || this.$root
      let name = parent.$options.name// $options 用来获取data外自定义的属性或方法
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent
        if (parent) {
          name = parent.$options.name
        }
      }
      if (parent) {
        parent.$emit(eventName, params)
      }
    },
    broadcast (componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params)
    }
  }
}
