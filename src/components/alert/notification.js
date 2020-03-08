import Alert from './alert.vue'
import Vue from 'vue'

Alert.newInstance = properties => {
  const props = properties || {}

  const Instance = new Vue({
    data: props,
    render (h) {
      return h(Alert, {
        props: props
      })
    }
  })

  const component = Instance.$mount()
  document.body.appendChild(component.$el)
  // 因为现在只渲染了一个Alert组件，所以可以通过$children[0]来获取
  const alert = Instance.$children[0]
  // 这里通过闭包将渲染后的组件方法暴露给外部
  return {
    add (noticeProps) {
      alert.add(noticeProps)
    },
    remove (name) {
      alert.remove(name)
    }
  }
}

export default Alert
