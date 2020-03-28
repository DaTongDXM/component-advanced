<template>
  <div>
      <div v-for="item in currentCount" :key="item.id">
          <span>{{item.text}}（数量{{item.number}}）</span>
          <button :id="item.id" @click="add">增加</button><button :id="item.id" @click="remove">减少</button>
      </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    goodsCount: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentCount: this.goodsCount
    }
  },
  watch: {
    goodsCount: function () {
      this.currentCount = this.goodsCount
    }
    // currentCount: function () {
    //   console.log(this.currentCount)
    // }
  },
  components: {},
  mounted () {},
  created () {},
  methods: {
    add (event) {
      let item = this.currentCount.find(el => el.id == event.target.id)
      this.$store.commit('add', item)
    },
    remove (event) {
      let item = this.currentCount.find(el => el.id == event.target.id)
      this.$store.commit('remove', item)
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
