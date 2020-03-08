<template>
  <div class="alert">
      <div class="alert-main" v-for="item in notices" :key="item.name">
          <div class="alert-content">{{item.content}}</div>
      </div>
  </div>
</template>

<script>
let seed = 0
function getUuid () {
  return 'alert' + (seed++)
}
export default {
  name: '',
  data () {
    return {
      notices: []
    }
  },
  components: {},
  mounted () {},
  created () {},
  methods: {
    add (notice) {
      let name = getUuid()
      const _notice = Object.assign({name: name}, notice)
      this.notices.push(_notice)

      let duration = notice.duration
      setTimeout(() => {
        this.remove(name)
      }, duration * 1000)
    },
    remove (name) {
      for (let index = 0; index < this.notices.length; index++) {
        if (this.notices[index].name === name) {
          this.notices.splice(index, 1)
          break
        }
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.alert{
    position: fixed;
    width: 100%;
    top: 16px;
    left:0;
    text-align: center;
    pointer-events: none;
    &-content{
        display: inline-block;
        padding: 8px 16px;
        background: #fff;
        border-radius: 3px;
        box-shadow: 0 1px 6px rgb(0,0,0.2);
        margin-bottom: 8px;
    }
}
</style>
