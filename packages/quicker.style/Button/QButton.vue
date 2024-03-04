<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { QIcon } from 'quicker.style'
import * as Fluent from '@vicons/fluent'

const slots = useSlots()

const props = defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (prop: string) =>
      ['text', 'default', 'primary', 'success', 'neutral', 'warning', 'danger'].includes(prop)
  },
  size: {
    type: String,
    default: 'medium',
    validator: (prop: string) => ['small', 'medium', 'large'].includes(prop)
  },
  outline: {
    type: Boolean,
    default: false
  },
  pill: {
    type: Boolean,
    default: false
  },
  circle: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  caret: {
    type: Boolean,
    default: false
  }
})

const classes = computed(() => {
  const { outline, variant, size, pill, circle, disabled, caret } = props

  return {
    'q-button--standard': !outline,
    'q-button--text': variant === 'text',
    'q-button--default': variant === 'default',
    'q-button--primary': variant === 'primary',
    'q-button--success': variant === 'success',
    'q-button--neutral': variant === 'neutral',
    'q-button--warning': variant === 'warning',
    'q-button--danger': variant === 'danger',
    'q-button--small': size === 'small',
    'q-button--medium': size === 'medium',
    'q-button--large': size === 'large',
    'q-button--caret': caret,
    'q-button--outline': outline,
    'q-button--pill': pill,
    'q-button--circle': circle,
    'q-button--disabled': disabled,
    // 'q-button--loading': isLoading,
    // 'q-button--focused': hasFocus,
    'q-button--label': slots.default !== undefined,
    'q-button--prefix': slots.prefix !== undefined,
    'q-button--suffix': slots.suffix !== undefined || caret
  }
})
</script>

<template>
  <button class="q-button" :class="classes">
    <span class="q-button__prefix" v-if="$slots.prefix">
      <slot name="prefix"></slot>
    </span>
    <span class="q-button__label">
      <slot />
    </span>
    <span class="q-button__suffix" v-if="$slots.suffix">
      <slot name="suffix"></slot>
    </span>
    <q-icon class="q-button__caret" v-if="caret" :size="20">
      <Fluent.IosChevronRight20Filled class="q-button__caret" v-if="caret" />
    </q-icon>
  </button>
</template>

<style src="./QButton.scss" lang="scss" scoped></style>
