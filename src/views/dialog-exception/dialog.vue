<!--
 * @Author: LiuTao
 * @Date: 2022-09-02 17:33:57
 * @LastEditors: LiuTao
 * @LastEditTime: 2022-09-02 17:41:42
 * @Description: ...
-->
<template>
  <nut-dialog
    title="组件调用"
    content="如果需要在弹窗内嵌入组件或其他自定义内容，可以使用组件调用的方式。"
    v-model:visible="visible"
  >
    <!-- <nut-form :model-value="dynamicForm.state" ref="dynamicRefForm">
      <nut-form-item label="姓名" prop="name" required :rules="[{ required: true, message: '请填写姓名' }]">
        <input class="nut-input-text" v-model="dynamicForm.state.name" placeholder="请输入姓名" type="text" />
      </nut-form-item>
    </nut-form> -->
  </nut-dialog>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { Dialog as NutDialog } from '@nutui/nutui'

export default defineComponent({
  components: {
    NutDialog
  },
  setup() {
    const visible = ref(true)
    return {
      visible
    }
  }
})
</script>
