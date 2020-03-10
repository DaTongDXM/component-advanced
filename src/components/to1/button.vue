<template>
  <component :is="tagName" v-bind="tagProps">
     <slot></slot>
  </component>
</template>

<script>
export default {
  name: '',
  props: {
    to: {
      type: String,
      default: ''
    },
    target: {
      type: String,
      default: '_blank'
    }
  },
  computed: {
    tagName () {
      return this.to === '' ? 'button' : 'a'
    },
    tagProps () {
      let props = {}
      if (this.to) {
        props = {
          target: this.target,
          href: this.to
        }
      }
      return props
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
