<script setup lang="ts">
import { ref } from 'vue'
import { useTitle } from '@/hooks/web/useTitle'

const theme = ref('')
useTitle()
</script>

<template>
  <nut-config-provider :theme="theme">
    <router-view />
  </nut-config-provider>
</template>
