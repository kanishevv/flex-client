<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  vertical: {
    type: Boolean,
    default: false
  },
  align: {
    type: String,
    validator: (prop: string) => ['stretch', 'baseline', 'start', 'end', 'center'].includes(prop)
  },
  justify: {
    type: String,
    validator: (prop: string) =>
      ['start', 'end', 'center', 'space-around', 'space-between', 'space-evenly'].includes(prop)
  }
})

const classes = computed(() => {
  const { align, justify, vertical } = props

  let classes = [
    {
      'q-space--vertical': vertical,
      'q-space--horizontal': !vertical
    }
  ]

  if (align) classes.push(`q-space--align-${align}`)
  if (justify) classes.push(`q-space--justify-${justify}`)

  return classes
})
</script>

<template>
  <div class="q-space" :class="classes">
    <slot></slot>
  </div>
</template>

<style src="./QSpace.scss" lang="scss" scoped></style>
