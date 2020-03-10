<template>
  <div>
      <table-slot :colums="colums" :data="data">
        <template slot-scope="{row,index}" slot="name">
          <input type="text" v-if="editIndex==index" v-model="editName">
          <span v-else>{{row.name}}</span>
        </template>
        <template slot-scope="{row,index}" slot="age">
          <input type="text" v-if="editIndex==index" v-model="editAge">
          <span v-else>{{row.age}}</span>
        </template>
        <template slot-scope="{row,index}" slot="birthday">
          <input type="text" v-if="editIndex==index" v-model="editBirthday">
          <span v-else>{{getBirthday(row.birthday)}}</span>
        </template>
        <template slot-scope="{row,index}" slot="address">
          <input type="text" v-if="editIndex==index" v-model="editAddress">
          <span v-else>{{row.address}}</span>
        </template>
        <template slot-scope="{row,index}" slot="action">
          <div v-if="editIndex==index">
            <button @click="save(index)">保存</button>
            <button @click="cancle(index)">取消</button>
          </div>
          <div v-else>
            <button @click="editClick(row,index)">操作</button>
          </div>
        </template>
      </table-slot>
  </div>
</template>

<script>
import TableSlot from '../components/table-slot/table.vue'
export default {
  name: '',
  data () {
    return {
      colums: [
        {
          title: '姓名',
          slot: 'name'
        },
        {
          title: '年龄',
          slot: 'age'
        },
        {
          title: '出生日期',
          slot: 'birthday'
        },
        {
          title: '地址',
          slot: 'address'
        },
        {
          title: '操作',
          slot: 'action'
        }],
      data: [
        {
          name: '王小明',
          age: 18,
          birthday: '919566401011',
          address: '北京市朝阳区芍药居'
        },
        {
          name: '张小刚',
          age: 25,
          birthday: '696096000000',
          address: '北京市海淀区西二旗'
        },
        {
          name: '李小红',
          age: 30,
          birthday: '563472000000',
          address: '上海市浦东新区世纪大道'
        },
        {
          name: '周小伟',
          age: 26,
          birthday: '687024000000',
          address: '深圳市南山区深南大道'
        }],
      editName: '',
      editAge: '',
      editBirthday: '',
      editAddress: '',
      editIndex: -1
    }
  },
  components: {TableSlot},
  mounted () {},
  created () {},
  methods: {
    save (index) {
      this.data[index].name = this.editName
      this.data[index].age = this.editAge
      this.data[index].birthday = this.editBirthday
      this.data[index].address = this.editAddress
      this.editIndex = -1
    },
    cancle (index) {
      this.editIndex = -1
    },
    editClick (row, index) {
      this.editName = row.name
      this.editAge = row.age
      this.editBirthday = row.birthday
      this.editAddress = row.address
      this.editIndex = index
    },
    getBirthday (birthday) {
      const data = new Date(parseInt(birthday))
      const year = data.getFullYear()
      const month = data.getMonth() + 1
      const day = data.getDate()

      return `${year}-${month}-${day}`
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
