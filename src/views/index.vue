<template>
  <div class="container">
    <nut-cell v-for="item in menu" v-bind="item" :key="item.to" />
  </div>
</template>

<script lang="ts" setup>
import { asyncRoutes } from '@/router/routes/index'

const menu = asyncRoutes
  .map(_ => ({
    title: _.meta?.title,
    to: _.path
  }))
  .slice(1) as any
</script>

<style lang="scss" scoped>
.container {
  padding: 0.5rem 1rem;
}
</style>
