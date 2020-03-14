import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FormIndex from '@/view/FormIndex'
import CheckBoxIndex from '@/view/CheckBoxIndex'
import Display from '@/view/Display'
import Alert from '@/view/Alert'
import TableRender from '@/view/table-render.vue'
import TableSlot from '@/view/table-slot.vue'
import TreeIndex from '@/view/TreeIndex.vue'
import OtherComponent from '@/view/OtherCompnent.vue'
import CSSDisplay from '@/css/display/display.vue'
import Position from '@/css/position/position.vue'

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
    }, {
      path: '/tree-index',
      name: 'TreeIndex',
      component: TreeIndex
    }, {
      path: '/other',
      name: 'Other',
      component: OtherComponent
    }, {
      path: '/cssdisplay',
      name: 'cssdisplay',
      component: CSSDisplay
    }, {
      path: '/position',
      name: 'position',
      component: Position
    }
  ]
})
