<template>
  <component :is="component.component" ref="component">
    <!-- <template v-if="component.children">
      <component-render
        v-for="child in component.children"
        :key="child.id"
        v-bind="{ component: child, slot: child.position }"
      />
    </template> -->
  </component>
</template>

<script lang="ts" setup>
import { shallowReactive } from 'vue'
import ComponentFormItem from './ComponentFormItem.vue'

const component = shallowReactive({
  component: ComponentFormItem
})
</script>
