<template>
  <div class="main">
      <div></div>
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
  methods: {}
}
</script>

<style lang='scss' scoped>
// .main{
//     position: relative;
//     height: 400px;
//     width: 400px;
//     background-color: darksalmon;
//     div{
//         width: 50px;
//         height: 50px;
//         position: absolute;
//         margin: auto;
//         top: 1px;
//        left: 0;
//        right: 0;
//        bottom: 0;
//         background-color: darkviolet;
//     }
// }
.main{
    display: flex;
    height: 400px;
    width: 400px;
    background-color: darksalmon;
    justify-content: center;
    align-items: center;
    div{
        width: 50px;
        height: 50px;
        background-color: darkviolet;
    }
}
</style>
