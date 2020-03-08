<template>
  <div>
    <h3>具有数据校验功能的表单组件——Form</h3>
    <i-form ref="form"
            :model="formValidate"
            :rules="ruleValidate">
      <i-form-item label="用户名"
                   prop="name">
        <i-input v-model="formValidate.name"></i-input>
      </i-form-item>
      <i-form-item label="邮箱"
                   prop="mail">
        <i-input v-model="formValidate.mail"></i-input>
      </i-form-item>
      <i-form-item label="同意"
                   prop="agree">
        <i-checkbox v-model="formValidate.agree" :disabled='false' :trueValue=1 :falseValue=0>单独选项</i-checkbox>
      </i-form-item>
      <i-form-item label="选择" prop="multiple">
        <i-checkbox-group v-model="formValidate.multiple">
          <i-checkbox label="option1">option1</i-checkbox>
          <i-checkbox label="option2">option2</i-checkbox>
          <i-checkbox label="option3">option3</i-checkbox>
        </i-checkbox-group>
      </i-form-item>
      <br>
      <span>{{formValidate.multiple}}</span>
    </i-form>
    <button @click="handleSubmit">提交</button>
    <button @click="handleReset">重置</button>
  </div>
</template>

<script>
import iForm from '../components/form/Form'
import iFormItem from '../components/form/FormItem'
import iInput from '../components/input/input.vue'
import iCheckbox from '../components/checkbox/checkbox.vue'
import iCheckboxGroup from '../components/checkbox/checkbox-group.vue'
export default {
  name: '',
  data () {
    return {
      formValidate: {
        name: '',
        mail: '',
        agree: 1,
        multiple: ['option1', 'option2']
      },
      ruleValidate: {
        name: [{ required: true, message: '用户名不能为空', trigger: 'blur' },
          { validator (rule, value, callback) {
            return value === 'test'
          },
          message: 'Value is not equal to "test".'}],
        mail: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ],
        agree: [{
          validator (rule, value) {
            return value === 1
          },
          message: '请选择同意'
        }],
        multiple: [{
          validator (rule, value) {
            if (value.length > 1) {
              return true
            }
            return false
          },
          message: '请至少选择两项'
        }]
      }

    }
  },
  components: { iForm, iFormItem, iInput, iCheckbox, iCheckboxGroup },
  mounted () {

  },
  created () {},
  methods: {
    handleSubmit () {
      this.$refs.form.validate(valid => {
        if (valid) {
          window.alert('提交成功')
        } else {
          window.alert('表单校验失败')
        }
      })
    },
    handleReset () {
      this.$refs.form.resetFields()
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
