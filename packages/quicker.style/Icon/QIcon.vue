<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  size: {
    type: [Number, String]
  },
  color: {
    type: String
  }
})

const styles = computed(() => {
  const { size, color } = props

  let array: any = []

  if (size !== undefined) {
    array.push([
      {
        fontSize: typeof size === 'number' ? `${size}px` : size
      }
    ])
  }

  if (color !== undefined) {
    array.push([
      {
        color: color
      }
    ])
  }

  return array
})
</script>

<template>
  <i class="q-icon" :style="styles">
    <slot></slot>
  </i>
</template>

<style src="./QIcon.scss" lang="scss" scoped></style>
