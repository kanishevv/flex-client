<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  rows: {
    type: [Number, String],
    default: 24
  },
  cols: {
    type: [Number, String],
    default: 24
  },
  xGap: {
    type: [Number, String],
    default: 0
  },
  yGap: {
    type: [Number, String],
    default: 0
  }
})

const styles = computed(() => {
  const { cols, xGap, yGap } = props

  let styles: string[] = []

  if (cols) styles.push(`grid-template-columns: repeat(${cols}, minmax(0, 1fr))`)

  // if (rows) styles.push(`grid-template-rows: repeat(${rows}, minmax(0, 1fr))`)

  if (xGap || yGap) styles.push(`gap: ${yGap}px ${xGap}px`)

  return styles
})
</script>

<template>
  <div class="q-grid" :style="styles">
    <slot></slot>
  </div>
</template>

<style src="./QGrid.scss" lang="scss" scoped></style>
