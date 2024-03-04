<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  span: {
    type: [Number, String],
    default: 1
  },
  alignment: {
    type: Array,
    default: () => []
  },
  distribution: {
    type: Array,
    default: () => []
  },
  reverse: {
    type: Boolean,
    default: false
  }
})

const classes = computed(() => {
  const { alignment, distribution, reverse } = props

  let classes: string[] = []

  if (reverse) classes.push('q-grid-item--reverse')

  alignment.forEach((item) => classes.push(`q-grid-item--${item}`))
  distribution.forEach((item) => classes.push(`q-grid-item--${item}`))

  return classes
})

const styles = computed(() => {
  const { span } = props

  let styles: string[] = []

  if (span) styles.push(`grid-column: span ${span} / span ${span}`)

  return styles
})
</script>

<template>
  <div class="q-grid-item" :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<style src="./QGridItem.scss" lang="scss" scoped></style>
