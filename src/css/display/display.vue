<template>
  <div class="div">
      <p>Display</p>
      <section class="a">
          <div>我是块及元素div</div>
          <span>我是行内元素span</span>
          <strong>我是行内元素strong</strong>
          <button @click="btnClick">position</button>
      </section>
      <section class="b">
          <div>我是块及元素div</div>
          <span>我是行内元素span</span>
          <strong>我是行内元素strong</strong>
      </section>
      <section class="c">
          <div>我是块及元素div</div>
          <span>我是行内元素span</span>
          <strong>我是行内元素strong</strong>
      </section>
       <section class="d">
          <div>我是块及元素div</div>
          <span>我是行内元素span</span>
          <strong>我是行内元素strong</strong>
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
  methods: {
    btnClick () {
      this.$router.push('/position')
    }
  }
}
</script>

<style lang='scss' scoped>
.div{
    display: block;
    section{
        height: auto;
        overflow: auto;
        margin: 10px 0px;
        border:1px solid black;

    }
}
.a{
    div{
        background-color:chocolate;
        width: 50%;
        height: 50px;
    }
    span{
        float: left;
        margin: 20px;
        text-align: left;
        background-color: coral;
        width: 50%;
    }
    strong{
        margin: 20px;
        width: 50%;
        background-color: yellow;
    }

}
.b{
        div{
        background-color:chocolate;
        width: 50%;
        height: 50px;
    }
    span{
        position: absolute;
        margin: 20px;
        background-color: coral;
        width: 50%;
    }
    strong{
        margin: 20px;
        width: 50%;
        background-color: yellow;
    }
    }
    .c{
        div{
        background-color:chocolate;
        width: 50%;
        height: 50px;
    }
    span{
        display: block;
        background-color: coral;
        width: 50%;
    }
    strong{
        margin: 20px;
        width: 50%;
        background-color: yellow;
    }
    }
    .d{
        div{
     background-color: green;
     height: 50px;
     width: 40%;;
     padding: 20px;
     margin: 20px;}
span{
     background-color:
     gray;height: 70px;
     padding: 40px;margin: 20px;}
     strong{background-color: blue;
     height: 70px;
     padding: 40px;
     margin: 20px;
     float: left;
     }
    }
</style>
