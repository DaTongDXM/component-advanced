<template>
  <div>
      <button v-for="(item,index) in btn" :key="index" @click="tbnClick(item.route)">{{item.name}}</button>
      <router-view></router-view>
  </div>

</template>

<script>
export default {
  name: '',
  data () {
    return {
      btn: [{'route': '/ping', 'name': '品字布局'}, {'route': '/margin', 'name': '居中DIV'},
        {'route': '/shengbei', 'name': '圣杯布局'}, {'route': '/bfc', 'name': 'BFC'}, {'route': '/typeof', 'name': '类型转换'}]
    }
  },
  components: {},
  mounted () {},
  created () {},
  methods: {
    tbnClick (url) {
      this.$router.push('/test' + url)
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
