<template>
  <div class="main">
      <div class="left"></div>

      <div class="content"><p>我是中间部分我是中间部分我是中间部分我是中间部分我是中间部分我是中间部分我是中间部分我是中间部分</p></div>
<div class="right"></div>
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
//采用flex布局  比较完美的解决方案
// .main{
//     display: flex;
//     flex-direction: row;
//     width: 100%;
//     height: 100px;
//     .content{
//         background-color: yellow;
//         height: 100%;
//         flex-grow: 1;
//     }
//     .left,.right{
//         background-color: red;
//         width: 10%;
//         height: 100%;
//     }
// }
//浮动布局  兼容性好，缺点需要清除浮动
// .main{
//     div{
//        min-height: 100px;
//     }
// .left{
//         float:left;
//         width:100px;
//         background: red;
//       }
//        .content{
//         margin: o auto;
//         background: yellow;
//       }
//        .right{
//         float:right;
//         width:100px;
//         background: blue;
//       }
// }
//绝对布局 快捷，布局脱离文档流，下面的元素都要脱离文档流，可使用性比较差
// .main{
//     width: 100%;
//     height: 100px;
//     position: relative;
//     div{
//         position: absolute;
//         height: 100%;
//     }
//     .left{
//         left: 0;
//         width: 20%;
//         background-color: red;
//     }
//     .content{
//         left:20%;
//         background-color: yellow;
//     }
//     .right{
//         right: 0;
//         width: 20%;
//         background-color: blue;
//     }
// }
//使用table-cell  兼容性好，兼容IE8，但是当其中一个单元格高度变了其他会跟着变
// .main{
//     width: 100%;

//     display: table;
//     div{

//         display: table-cell;
//     }
//     .left{
//         width: 100px;
//         background-color: red;
//     }
//     .content{
//         background-color: yellow;
//     }
//     .right{
//         width: 100px;
//         background-color: blue;
//     }
// }
//grid布局，CSS新推的布局 优于flex布局
.main{
  display: grid;

  grid-template-columns: 10% 70% 10%;
  grid-gap: 5% 5%;
  .left{
background-color: red;
  }
  .content{
    background-color: yellow;
  }
  .right{
    background-color: blue;
  }

}
</style>
