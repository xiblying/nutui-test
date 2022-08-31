<template>
  <nut-form :model-value="formData" ref="ruleForm">
    <!-- <template v-for="item in components" :key="item.id">
      <ComponentViewRender :component="item" />
    </template> -->
    <ComponentViewRender />

    <nut-cell>
      <nut-button type="primary" size="small" style="margin-right: 10px" @click="submit">提交</nut-button>
    </nut-cell>
  </nut-form>
</template>

<script lang="ts" setup>
import { provide, reactive, ref } from 'vue'
import ComponentViewRender from './ComponentViewRender.vue'

const formData = reactive({})
provide('formData', formData)

const ruleForm = ref<any>(null)

const submit = () => {
  console.log(ruleForm.value.$slots.default())
  ruleForm.value.validate().then(({ valid, errors }: any) => {
    if (valid) {
      console.log('success', formData)
    } else {
      console.log('error submit!!', errors)
    }
  })
}
</script>
