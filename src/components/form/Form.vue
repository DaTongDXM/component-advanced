<template>
  <form action="">
      <slot></slot>
  </form>
</template>

<script>
import Emiter from '../../assets/js/emiter.js'
export default {
  name: 'iForm',
  mixins: [Emiter],
  props: {
    model: {
      type: Object
    },
    rules: {
      type: Object
    }
  },
  provide () {
    return {
      form: this
    }
  },
  data () {
    return {
      fields: []
    }
  },
  components: {},
  mounted () {},
  created () {},
  methods: {
    resetFields () {
      this.fields.forEach(field => {
        field.resetField()
      })
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
