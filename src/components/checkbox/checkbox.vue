<template>
  <label><span>
    <input v-if="group" type="checkbox"  :disabled="disabled" :value="label" v-model="model" @change="change">
      <input v-else type="checkbox" :disabled="disabled" :checked="currentValue" @change="change" ></span>
      <slot></slot>
      <!--将slot和input都放在label中可以实现点击点击slot里的文字的时候同时出发checkbox-->
      </label>
</template>

<script>
import Emitter from '../../assets/js/emiter'
import {findComponentUpward} from '../../utils/assist.js'
export default {
  name: 'iCheckBox',
  mixins: [Emitter],
  props: {
    label: {
      type: [String, Number, Boolean]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Boolean, Number],
      default: false
    },
    trueValue: {
      type: [String, Boolean, Number],
      default: true
    },
    falseValue: {
      type: [String, Boolean, Number],
      default: false
    }
  },
  data () {
    return {
      currentValue: this.value,
      model: [],
      group: false,
      parent: null
    }
  },
  watch: {
    value (val) {
      if (val === this.trueValue || val === this.falseValue) {
        this.updateModel()
      } else {
        throw 'Value shoule be trueValue or falseValue'
      }
    }
  },
  components: {},
  mounted () {
    this.parent = findComponentUpward(this, 'iCheckboxGroup')
    if (this.parent) {
      this.group = true
    }
    if (this.group) {
      this.parent.updateModel(true)
    } else {
      this.updateModel()
    }
  },
  created () {},
  methods: {
    change (event) {
      if (this.disabled) {
        return false
      }
      const checked = event.target.checked
      this.currentValue = checked

      const value = checked ? this.trueValue : this.falseValue
      this.$emit('input', value)

      if (this.group) {
        this.parent.change(this.model)
      } else {
        console.log(1)
        this.$emit('on-change', value)
        this.dispatch('iFormItem', 'on-form-change', value)
      }
    },
    updateModel () {
      this.currentValue = this.value === this.trueValue
    }}
}
</script>

<style lang='scss' scoped>
</style>
