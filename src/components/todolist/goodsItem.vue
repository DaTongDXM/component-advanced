<template>
  <div>
    <div v-for="item in currentGoods" :key="item.id">
        <span>{{item.text}}-{{item.price}}元</span>
        <button :id="item.id" @click="add">加入购物车</button>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    goods: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentGoods: this.goods
    }
  },
  components: {},
  mounted () {},
  created () {},
  methods: {
    add (event) {
      let good = this.currentGoods.find(item => item.id == event.target.id)

      this.$store.commit('add', good)
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
