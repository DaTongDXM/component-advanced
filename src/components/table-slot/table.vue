<template>
<table>
    <thead>
        <tr>
            <th v-for="col in colums">{{col.title}}</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(row,rowIndex) in data">
            <td v-for="col in colums">
                <template v-if="'renderRow' in col">
                    <Render :row="row" :column="col" :index="rowIndex" :render="col.renderRow"></Render>
                </template>
                <template v-else-if="'slot' in col">
                   <slot :row="row" :column="col" :index="rowIndex" :name="col.slot"></slot>
                </template>
                <template v-else>{{row[col.key]}}</template>
            </td>
        </tr>
    </tbody>
</table>
</template>

<script>
import Render from './render.js'
export default {
  name: '',
  props: {
    colums: {
      type: Array,
      default () { return [] }
    },
    data: {
      type: Array,
      default () { return [] }
    }
  },
  data () {
    return {

    }
  },
  components: {Render},
  mounted () {},
  created () {},
  methods: {}
}
</script>

<style lang='scss' scoped>
table{
    width: 100&;
    border-collapse: collapse;
    empty-cells: show;
    border:1px solid #e9e9e9;

    th{
        background: #f7f7f7;
        color: #5c6b77;
        font-weight: 600;
        white-space: nowrap;
        padding: 8px 16px;
        border:1px solid #e9e9e9;
        text-align: left;
    }
    td{
        padding: 8px 16px;
        border:1px solid #e9e9e9;
        text-align: left;
    }
}
</style>
