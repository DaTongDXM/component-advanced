<template>
  <div>
      <p v-if="show" ref="show">内容</p>
      <button @click="handleShow">显示</button>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      show: true
    }
  },
  components: {},
  mounted () {},
  created () {},
  methods: {
    handleShow () {
      this.show = !this.show
      console.log(this.$refs.show)
      // $nextTick在下一个DOM更新循环之后执行
      this.$nextTick(() => {
        console.log(this.$refs.show)
      })
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
