import Vue from 'vue'
import App from './App'
import router from './router'
import Alert from './components/alert/alert.js'

Vue.config.productionTip = false
Vue.prototype.$Alert = Alert
/* eslint-disable no-new */
new Vue({
  // el是组件需要挂载到的dom结点
  // el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
