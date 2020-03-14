<template>
  <div>
      <section>
          <p>nextTick</p>
          <article class="nextTick">
              <next-tick></next-tick>
          </article>
      </section>
      <section>
          <p>v-model</p>
          <article>
              <v-model v-model="vmodel1"></v-model>
          </article>
      </section>
      <section>
          <p>model</p>
          <article>
              <v-model-copy v-model="vmodel1"></v-model-copy>
          </article>
      </section>
      <section>
          <p>sync</p>
          <article>
              <i-sync :value.sync="vmodel1"></i-sync>
          </article>
      </section>
  </div>
</template>

<script>
import NextTick from '../components/other/nextTick.vue'
import VModel from '../components/other/VModel'
import VModelCopy from '../components/other/VModelCopy'
import iSync from '../components/other/sync'
export default {
  name: '',
  data () {
    return {
      vmodel1: 10
    }
  },
  components: {NextTick, VModel, VModelCopy, iSync},
  mounted () {},
  created () {},
  methods: {}
}
</script>

<style lang='scss' scoped>
</style>
