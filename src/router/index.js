import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FormIndex from '@/view/FormIndex'
import CheckBoxIndex from '@/view/CheckBoxIndex'
import Display from '@/view/Display'
import Alert from '@/view/Alert'
import TableRender from '@/view/table-render.vue'
import TableSlot from '@/view/table-slot.vue'
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
    }, {
      path: '/display',
      name: 'Display',
      component: Display
    }, {
      path: '/alert',
      name: 'Alert',
      component: Alert
    },
    {
      path: '/table-render',
      name: 'TableRender',
      component: TableRender
    }, {
      path: '/table-slot',
      name: 'TableSlot',
      component: TableSlot
    }
  ]
})
