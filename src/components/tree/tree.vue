<template>
  <div>
    <tree-node v-for="(item,index) in copyData"
                :index="index" 
                :data="item"
                :show-checkbox="showCheckbox"></tree-node>
  </div>
</template>

<script>
import TreeNode from "../tree/node.vue";
import deepCopy from "../../utils/assist.js";
export default {
    name:"Tree",
    props:{
        data:{
            type:Array,
            default(){
                return []
            }
        },
        showCheckBox:{
            type:Boolean,
            default:false
        }
    },
  data() {
    return {
      copyData: []
    };
  },
  component: { TreeNode },
  created() {this.rebuildData()},
  mounted() {
      rebuildData(){
          this.copyData=deepCopy(this.data)
      }
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>