<script setup lang="ts">
import { computed, useSlots } from 'vue'

const props = defineProps({
  size: {
    type: String,
    validator: (prop: string) => ['small', 'medium', 'large'].includes(prop),
    default: 'medium'
  }
})

const slots = useSlots()

const hasLabel = computed(() => {
  return !!slots.label
})

const hasHelpText = computed(() => {
  return !!slots.helpText
})

const classes = computed(() => {
  const { size } = props

  let classes = [
    {
      'q-form-control--small': size === 'small',
      'q-form-control--medium': size === 'medium',
      'q-form-control--large': size === 'large',
      'q-form-control--has-label': hasLabel,
      'q-form-control--has-help-text': hasHelpText
    }
  ]

  return classes
})
</script>

<template>
  <div class="q-form-control" :class="classes">
    <label for="input" class="q-form-control__label" v-if="$slots.label">
      <slot name="label"></slot>
    </label>
    <div class="q-form-control__input">
      <slot></slot>
    </div>
    <div class="q-form-control__help-text" v-if="$slots.helpText">
      <slot name="helpText"></slot>
    </div>
  </div>
</template>

<style src="./QFormControl.scss" lang="scss" scoped></style>
