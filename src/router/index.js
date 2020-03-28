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
import Test from '@/css/test/test.vue'
import Ping from '@/css/test/ping.vue'
import Margin from '@/css/test/margin-auto.vue'
import Shengbei from '@/css/test/Shengbei.vue'
import BFC from '@/css/test/BFC.vue'
import Typeof from '@/js/typeof.vue'
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
    }, {
      path: '/test',
      name: 'test',
      component: Test,
      children: [{ path: 'ping', name: 'ping', component: Ping }, { path: 'margin', name: 'margin', component: Margin },
        {
          path: 'shengbei',
          name: 'shengbei',
          component: Shengbei
        }, {
          path: 'bfc',
          name: 'bfc',
          component: BFC
        }, {
          path: 'typeof',
          name: 'typeof',
          component: Typeof
        }]
    }
  ]
})
