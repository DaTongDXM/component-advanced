<template>
<div>
    <ul class="tree-ul">
        <li class="tree-li">
            <span class="tree-extend" @click="handleExpand">
                <span v-if="data.children&&data.children.length&&!data.expend">+</span>
                <span v-if="data.children&&data.children.length&&data.expend">-</span>
            </span>
            <i-checkbox v-if="showCheckbox" :value="data.checked" @input="handleCheck"></i-checkbox>
            <span>{{data.title}}</span>
            <tree-node  v-if="data.expend" v-for="(item,index) in data.children"
                        :data="item"
                        :key="index"
                        :show-checkbox="showCheckbox"></tree-node>
        </li>
    </ul>
</div>
</template>

<script>
import iCheckbox from '../checkbox/checkbox.vue'
import {findComponentUpward } from '../../utils/assist.js'
export default {
  name: 'TreeNode',
  components: {iCheckbox},
  props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    },
    showCheckbox: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      tree: findComponentUpward(this, 'Tree')
    }
  },

  created () {

  },
  mounted () {

  },
  methods: {
    handleExpand () {
      this.$set(this.data, 'expend', !this.data.expend)
      if (this.tree) {
        this.tree.emitEvent('on-toggle-expand', this.data)
      }
    },
    handleCheck (checked) {
      this.updateTreeDown(this.data, checked)
      if (this.tree) {
        this.tree.emitEvent('on-check-change', this.data)
      }
    },
    updateTreeDown (data, checked) {
      this.$set(data, 'checked', checked)

      if (data.children && data.children.length) {
        data.children.forEach(child => {
          this.updateTreeDown(child, checked)
        })
      }
    }
  },
  watch: {
    'data.children': {
      handler (data) {
        if (data) {
          const checkAll = !data.some(item => !item.checked)
          this.$set(this.data, 'checked', checkAll)
        }
      },
      deep: true
    }
  }
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.tree-ul, .tree-li{
    list-style: none;
    padding-left: 10px;
  }
  .tree-expand{
    cursor: pointer;
  }
</style>
