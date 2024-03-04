<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  position?: string
}

const props = withDefaults(defineProps<Props>(), {
  position: 'static'
})

const classes = computed(() => {
  const { position } = props

  return [
    {
      'q-layout--static-position': position === 'static',
      'q-layout--absolute-position': position === 'absolute'
    }
  ]
})
</script>

<template>
  <div class="q-layout-sidebar" :class="classes">
    <div class="q-layout-sidebar__wrap">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.q-layout-sidebar {
  display: flex;
  justify-content: flex-end;
  flex-shrink: 0;
  box-sizing: border-box;
  position: relative;
  z-index: 1;

  height: var(--q-layout-sidebar-height);
  background: var(--q-layout-sidebar-background);

  // width: var(--q-layout-sidebar-width);
  min-width: var(--q-layout-sidebar-min-width);
  border-right: var(--q-layout-sidebar-border-right);
  border-left: var(--q-layout-sidebar-border-left);
}

.q-layout-sidebar__wrap {
  flex-grow: 1;
  flex-shrink: 0;
  box-sizing: border-box;
  height: 100%;
  max-width: 100%;
  padding: var(--q-layout-padding);
}

.q-layout--absolute-position {
  position: absolute;
  top: var(--q-layout-sidebar-top);
  right: var(--q-layout-sidebar-right);
  bottom: var(--q-layout-sidebar-bottom);
  left: var(--q-layout-sidebar-left);
}
</style>
