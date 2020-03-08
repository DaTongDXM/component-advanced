<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import {findComponentsDownward} from '../../utils/assist.js'
import Emitter from '../../assets/js/emiter.js'
export default {
  name: 'iCheckboxGroup',
  mixins: [Emitter],
  props: {
    value: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentValue: this.value,
      childrens: []
    }
  },
  components: {},
  mounted () { this.updateModel(true) },
  watch: {
    value () {
      this.updateModel(true)
    }
  },
  methods: {
    updateModel (update) {
      this.childrens = findComponentsDownward(this, 'iCheckBox')

      console.log(this.childrens.length)

      if (this.childrens) {
        // es6中的解构赋值 获取当前对象的value值
        const {value} = this

        this.childrens.forEach(child => {
          child.model = value
          console.log(child.model)

          if (update) {
            child.currentValue = value.indexOf(child.label) >= 0
            child.group = true
          }
        })
      }
    },
    change (data) {
      this.currentValue = data
      this.$emit('input', data)
      this.$emit('on-change', data)
      this.dispatch('iFormItem', 'on-form-change', data)
    }}
}
</script>

<style lang='scss' scoped>
</style>
