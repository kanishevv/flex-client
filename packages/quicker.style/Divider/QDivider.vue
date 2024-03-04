<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  vertical: {
    type: Boolean,
    default: false
  }
})

const classes = computed(() => {
  const { vertical } = props

  return {
    'q-divider--vertical': vertical,
    'q-divider--horizontal': !vertical
  }
})
</script>

<template>
  <div class="q-divider" :class="classes"></div>
</template>

<style src="./QDivider.scss" lang="scss" scoped></style>
