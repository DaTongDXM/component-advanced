<template>
  <div>
      <input type="checkbox" id="jack" value="jack" v-model="checkedNames">
      <label for="jack">jack</label>
      <input type="checkbox" id="tom" value="tom" v-model="checkedNames">
      <label for="tom">tom</label>
      <input type="checkbox" id="kobe" value="kobe" v-model="checkedNames">
      <label for="kobe">kobe</label>
      <br>
      <span>checkedNames{{checkedNames}}</span>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      checkedNames: []
    }
  },
  components: {},
  mounted () {},
  created () {},
  methods: {}
}
</script>

<style lang='scss' scoped>
</style>
