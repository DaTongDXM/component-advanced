<template>
  <div>
      <table-render :colums="colums" :data="data"></table-render>
  </div>
</template>

<script>
import TableRender from '../components/table-render/table.vue'
export default {
  name: '',
  data () {
    return {
      colums: [
        {
          title: '姓名',
          key: 'name',
          renderRow: (h, {row, index}) => {
            let edit
            if (this.editIndex == index) {
              edit = [h('input', {
                domProps: {
                  value: row.name
                },
                style: {
                  display: 'inline-block'
                },
                on: {
                  input: (event) => {
                    this.editName = event.target.value
                  }
                }
              })]
            } else {
              edit = row.name
            }
            return h('div', [edit])
          }
        },
        {
          title: '年龄',
          key: 'age',
          renderRow: (h, { row, index }) => {
            let edit

            // 当前行为聚焦行时
            if (this.editIndex === index) {
              edit = [h('input', {
                domProps: {
                  value: row.age
                },
                on: {
                  input: (event) => {
                    this.editAge = event.target.value
                  }
                }
              })]
            } else {
              edit = row.age
            }

            return h('div', [
              edit
            ])
          }
        },
        {
          title: '出生日期',
          renderRow: (h, { row, index }) => {
            let edit

            // 当前行为聚焦行时
            if (this.editIndex === index) {
              edit = [h('input', {
                domProps: {
                  value: row.birthday
                },
                on: {
                  input: (event) => {
                    this.editBirthday = event.target.value
                  }
                }
              })]
            } else {
              const date = new Date(parseInt(row.birthday))
              const year = date.getFullYear()
              const month = date.getMonth() + 1
              const day = date.getDate()

              edit = `${year}-${month}-${day}`
            }

            return h('div', [
              edit
            ])
          }
        },
        {
          title: '地址',
          key: 'address',
          renderRow: (h, { row, index }) => {
            let edit

            // 当前行为聚焦行时
            if (this.editIndex === index) {
              edit = [h('input', {
                domProps: {
                  value: row.address
                },
                on: {
                  input: (event) => {
                    this.editAddress = event.target.value
                  }
                }
              })]
            } else {
              edit = row.address
            }

            return h('div', [
              edit
            ])
          }
        },
        {
          title: '操作',
          renderRow: (h, {row, index}) => {
            if (this.editIndex == index) {
              return [h('button', {on: {
                click: () => {
                  this.data[index].name = this.editName
                  this.data[index].age = this.age
                  this.data[index].birthday = this.birthday
                  this.data[index].address = this.address
                  this.editIndex = -1
                }
              }}, '保存'), h('button', {
                style: {marginLeft: '6px'},
                on: {
                  click: () => {
                    this.editIndex = -1
                  }
                }}, '取消')]
            } else {
              return h('button', {
                on: {
                  click: () => {
                    this.editName = row.name
                    this.editAge = row.age
                    this.editBirthday = row.birthday
                    this.editAddress = row.editAddress
                    this.editIndex = index
                  }
                }
              }, '修改')
            }
          }
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
  components: {TableRender},
  mounted () {},
  created () {},
  methods: {
    editClick () {
      console.log('editlick')
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
