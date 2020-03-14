<template>
  <div>
      <button @click="increase(1)">+</button>
      <span>{{value}}</span>
      <button @click="increase(-1)">-</button>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    value: {
      type: Number
    }
  },
  data () {
    return {

    }
  },
  components: {},
  mounted () {},
  created () {},
  methods: {
    increase (val) {
      this.$emit('update:value', this.value + val)
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
