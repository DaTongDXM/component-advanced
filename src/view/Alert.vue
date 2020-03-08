<template>
  <div>
      <button @click="click1">click1</button>
      <button @click="click2">click2</button>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {

    }
  },
  components: {},
  mounted () {},
  created () {},
  methods: {
    click1 () {
      this.$Alert.info({content: '我是click1'})
    },
    click2 () {
      this.$Alert.info({duration: 1.5, content: '我是click2'})
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
