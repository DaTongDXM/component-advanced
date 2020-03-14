<template>
  <div class="VModel">
      <button @click="increase(1)">+</button>
      <p >{{currentValue}}</p>
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
      currentValue: this.value
    }
  },
  components: {},
  mounted () {},
  created () {},
  watch: {
    value (val) {
      this.currentValue = val
    }
  },
  methods: {
    increase (val) {
      this.currentValue += val
      this.$emit('input', this.currentValue)
    }
  }
}
</script>

<style lang='scss' scoped>
//p是块及元素，默认占一行
p{
    display: inline-block;
}
</style>
