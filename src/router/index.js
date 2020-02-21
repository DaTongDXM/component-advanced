import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FormIndex from '@/view/FormIndex'
import CheckBoxIndex from '@/view/CheckBoxIndex'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/form',
      name: 'Form',
      component: FormIndex
    }, {
      path: '/checkbox',
      name: 'CheckBox',
      component: CheckBoxIndex
    }
  ]
})
