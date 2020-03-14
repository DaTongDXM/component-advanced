<template>
  <div>
      <tree :data="treedata" :showCheckbox="flag" @on-toggle-expand="handleToggleExpand"
            @on-check-change="handleCheckChange"></tree>
  </div>
</template>

<script>
import Tree from '../components/tree/tree.vue'
export default {
  name: 'TreeIndex',
  components: {Tree},
  data () {
    return {
      treedata: [
        {
          title: 'parent 1',
          expand: true,
          children: [
            {
              title: 'parent 1-1',
              expand: true,
              children: [
                {
                  title: 'leaf 1-1-1'
                },
                {
                  title: 'leaf 1-1-2'
                }
              ]
            },
            {
              title: 'parent 1-2',
              children: [
                {
                  title: 'leaf 1-2-1'
                },
                {
                  title: 'leaf 1-2-1'
                }
              ]
            }
          ]
        }
      ],
      flag: true
    }
  },

  mounted () {},
  created () {},
  methods: {
    handleToggleExpand (data) {
      console.log(data)
    },
    handleCheckChange (data) {
      console.log(data)
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
