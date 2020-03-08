<template>
  <input type="text" :value="currenValue" @input="handleInput" @blur="handleBlur" />
</template>

<script>
import Emitter from '../../assets/js/emiter'
export default {
  name: 'iInput',
  mixins: [Emitter],
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      currenValue: this.value
    }
  },
  watch: {
    value (val) {
      this.currenValue = val
    }
  },
  methods: {
    handleInput (event) {
      const value = event.target.value
      this.currenValue = value
      this.$emit('input', value)

      this.dispatch('iFormItem', 'on-form-change', value)
    },
    handleBlur () {
      this.dispatch('iFormItem', 'on-form-blur', this.currentValue)
    }
  },
  created () {

  },
  mounted () {

  }
}
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>
