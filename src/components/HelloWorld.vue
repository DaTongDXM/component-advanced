<template>
  <div>
    <goods-item :goods="goods"></goods-item>
    <br>
    <h1></h1>
    <goods-count :goodsCount="count"></goods-count>
    <span>总价：{{total}}元</span>
  </div>
</template>

<script>
// import {Factory} from '../utils/factory.js'
// import {quiksort} from '../utils/sort.js'
// import Affair from '../utils/affair.js'
import GoodsItem from '../components/todolist/goodsItem'
import GoodsCount from '../components/todolist/goodsCount'
export default {
  name: 'HelloWorld',
  data () {
    return {
      goods: [{id: 1, text: '商品1', price: 10, number: 0}, {id: 2, text: '商品2', price: 20, number: 0}, {id: 3, text: '商品3', price: 30, number: 0}]

    }
  },
  components: {GoodsItem, GoodsCount},
  computed: {
    count () {
      // console.log(this.$store.getters.getCar)
      return this.$store.getters.getCar
    },
    total () {
      return this.$store.getters.getAllPrice
    }
  },
  created () {
    // Factory.create('kobe').console()
    // console.log(quiksort([1, 8, 4, 2, 3, 5, 7]))
    // let affair = {
    //   id: 202003240001
    // }
    // affair = Affair.toAffair(affair)
    // console.log(affair)
    // affair.id = 202003240002
    // console.log(affair)
    // console.log(affair.name)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
  border: 1px solid black;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
