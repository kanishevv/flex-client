<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  withSidebar?: boolean
  position?: string
}

const props = withDefaults(defineProps<Props>(), {
  position: 'static'
})

const classes = computed(() => {
  const { position, withSidebar } = props

  return [
    {
      'q-layout--static-position': position === 'static',
      'q-layout--absolute-position': position === 'absolute',
      'q-layout--with-sidebar': withSidebar
    }
  ]
})
</script>

<template>
  <div class="q-layout" :class="classes">
    <slot />
  </div>
</template>

<style lang="scss">
.q-layout {
  width: 100%;
  // box-sizing: border-box;
}

.q-layout--with-sidebar {
  display: flex;
  flex-flow: row;
  width: 100%;
}

.q-layout--absolute-position {
  position: absolute;
}
</style>
