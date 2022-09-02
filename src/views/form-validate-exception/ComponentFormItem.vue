<script lang="ts" setup>
import { inject } from 'vue'
import { Toast } from '@nutui/nutui'

const formData = inject<any>('formData')

// 函数校验
const customValidator = (val: string) => /^\d+$/.test(val)
// Promise 异步校验
const asyncValidator = (val: string): Promise<boolean> => {
  return new Promise(resolve => {
    Toast.loading('模拟异步验证中...')
    setTimeout(() => {
      Toast.hide()
      resolve(/^400(-?)[0-9]{7}$|^1\d{10}$|^0[0-9]{2,3}-[0-9]{7,8}$/.test(val))
    }, 1000)
  })
}
</script>

<template>
  <nut-form-item label="姓名" prop="name" required :rules="[{ required: true, message: '请填写姓名' }]">
    <input class="nut-input-text" v-model="formData.name" placeholder="请输入姓名，blur 事件校验" type="text" />
  </nut-form-item>
  <nut-form-item
    label="年龄"
    prop="age"
    required
    :rules="[
      { required: true, message: '请填写年龄' },
      { validator: customValidator, message: '必须输入数字' },
      { regex: /^(\d{1,2}|1\d{2}|200)$/, message: '必须输入0-200区间' }
    ]"
  >
    <input class="nut-input-text" v-model="formData.age" placeholder="请输入年龄，必须数字且0-200区间" type="text" />
  </nut-form-item>
  <nut-form-item
    label="联系电话"
    prop="tel"
    required
    :rules="[
      { required: true, message: '请填写联系电话' },
      { validator: asyncValidator, message: '电话格式不正确' }
    ]"
  >
    <input class="nut-input-text" v-model="formData.tel" placeholder="请输入联系电话，异步校验电话格式" type="text" />
  </nut-form-item>
  <nut-form-item label="地址" prop="address" required :rules="[{ required: true, message: '请填写地址' }]">
    <input class="nut-input-text" v-model="formData.address" placeholder="请输入地址" type="text" />
  </nut-form-item>
</template>
