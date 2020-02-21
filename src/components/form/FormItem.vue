<template>
  <div><label for=""></label></div>
</template>

<script>
import Emiter from '../../assets/js/emiter.js'
export default {
  name: '',
  mixins: [Emiter],
  inject: ['form'],
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String
    }
  },
  data () {
    return {
    }
  },
  components: {},
  mounted () {},
  created () {},
  methods: {}
}
</script>

<style lang='scss' scoped>
</style>
