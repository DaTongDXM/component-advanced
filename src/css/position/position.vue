<template>
  <div id="positionapp">
      <section class="a" id="a" style="background-color:red">
          <p>我是不变的fixed</p>
      </section>
      <section class="b">
          <p>我是relative</p>
          <section class="b-1"></section>
          <section class="b-2"></section>
          <section class="b-3"></section>
      </section>
      <section class="c">
          <p>我是absolute</p>
          <section class="c-1"></section>
      </section>
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
//css选择器有id选择器，类选择器，标签选择器，组合选择器，继承选择器，伪类选择器
//权重：内联style>id>class>标签
#positionapp{
 background-color: cornflowerblue;
 position: fixed;
    width: 100%;
    height: 100%;
}

.a{
    position:fixed;
    background-color:cadetblue;
    border-radius: 100px;
    width: 130px;
    height: 130px;
    top:10px;
    right: 10px;
    p{
        margin-top: 40%;
    }
}

.b{
    position: relative;
    background-color: darkkhaki;
    width: 200px;
    height: 200px;
    top: 20px;
    left: 20px;
    border-radius: 30px;

    p{
        padding:10px;
        border:1px solid black

    }
    &-1{
        position:relative;
        background-color: blue;
        width: 100px;
        height: 100px;
        left: 20px;
    }
    &-2{
        position: absolute;
        background-color: yellow;
        width: 10px;
        height: 10px;
        bottom: 10px;
        right: 50%;
    }
    &-3{
        position: absolute;
        background-color: yellow;
        width: 10px;
        height: 10px;
        bottom: 10px;
        right: 25%;
    }
}
.c{
    position: absolute;
    background-color:cyan;
    width: 200px;
    height: 200px;
    bottom: 40px;
    right: 20px;
}
</style>
