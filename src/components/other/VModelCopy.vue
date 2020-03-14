<template>
  <div>
      <button @click="increase(1)">+</button>
      <p>{{currentValue}}</p>
      <button @click="increase(-1)">-</button>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    number: {
      type: Number
    }
  },
  model: {
    prop: 'number',
    event: 'change'
  },
  data () {
    return {
      currentValue: this.number
    }
  },
  components: {},
  mounted () {},
  created () {},
  watch: {
    number (val) {
      this.currentValue = val
    }
  },
  methods: {
    increase (val) {
      this.currentValue += val
      this.$emit('change', this.currentValue)
    }
  }
}
</script>

<style lang='scss' scoped>
p{  display: inline-block;}

</style>
