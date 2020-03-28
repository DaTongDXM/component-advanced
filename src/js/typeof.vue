<template>
  <section>
      <p>原始数据类型：Boolen,String,Number,Null,Undefined,Symbol</p>
    <p>对象类型：Object</p>
      <article class="Xlayout">
          <h1>显示类型转换</h1>
          <div class="Xlayout-continer">
            <input type="text" v-model="oldVal">
            <div class="btnContiner">
                <button @click="toNumber">toNumber</button>
                <button @click="toNumber">toString</button>
            </div>
            <input type="text" v-model="newVal">
          </div>

      </article>
  </section>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      oldVal: null,
      newVal: null
    }
  },
  components: {},
  mounted () {},
  created () {},
  methods: {
    toNumber () {
      if (this.oldVal) {
        if (this.oldVal === 'true' || this.oldVal === 'false') {
          this.newVal = Number(Boolean(this.oldVal))
        } else {
          this.newVal = Number(this.oldVal)
        }
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.Xlayout{
    &-continer{
        height: 80%;
        display: flex;
        justify-content: space-around;
        .btnContiner{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
    }
}
</style>
