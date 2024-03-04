<script setup lang="ts">
import { useSlots, computed } from 'vue'

// Slots
const slots = useSlots()

// Props
const props = defineProps({
  type: {
    type: String,
    default: 'normal',
    validator: (prop) => ['normal', 'checkbox'].includes(prop)
  },
  checked: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

// Computed
const classes = computed(() => {
  return [
    {
      'q-menu-item--checked': props.checked,
      'q-menu-item--disabled': props.disabled,
      'q-menu-item--has-submenu': false
    }
  ]
})
</script>

<template>
  <div class="q-menu-item" :class="classes">
    <span class="q-menu-item__check"></span>
    <div class="q-menu-item__prefix" v-if="slots.prefix">
      <slot name="prefix"></slot>
    </div>
    <div class="q-menu-item__label">
      <slot></slot>
    </div>
    <div class="q-menu-item__suffix" v-if="slots.suffix">
      <slot name="suffix"></slot>
    </div>
    <span class="q-menu-item__chevron"></span>
  </div>
</template>

<style src="./QMenuItem.scss" lang="scss" scoped></style>
