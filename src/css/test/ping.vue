<template>
  <div id="divtest">
      <div class="top"></div>
      <div class="botom">
          <div class="div1"></div>
      <div class="div2"> </div>
      </div>

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
@media all and (max-width: 500px) {
   #divtest{
       background-color:blue;
       height: 50%;
   }
}
@media all and (min-width: 500px) {
   #divtest{
       background-color:black;
       height: 70%;
   }
}
@media all and (min-width: 700px) {
   #divtest{
       background-color:darksalmon;
       height: 100%;
   }
}
#divtest{
    position: fixed;

    width: 100%;

    overflow: scroll;
}
.top{
    height: 50%;
    width: 50%;
    margin: 0px auto;
    background-color: red;
}
.botom{
    position: relative;
    height: 50%;
    width: 100%;
//    div{
//     position: absolute;
//     width: 50%;
//     height: 100%;
//     background-color: yellow;
//     //float: left;
//    }
    .div1{
        height: 100%;
        width: 50%;
        background-color: yellowgreen;
        position: absolute;
        left: 0px;
    }
    .div2{
        height: 100%;
        width: 50%;
        background-color: yellow;
        position: absolute;
        right: 0px;
    }
}
</style>
