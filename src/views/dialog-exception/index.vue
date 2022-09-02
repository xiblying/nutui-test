<template>
  <Dialog />
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import Dialog from './dialog.vue'
import { cosRender } from './cosRender'

onMounted(() => {
  cosRender(Dialog)
})
</script>
