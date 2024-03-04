<script setup lang="ts">
import { computed, reactive } from 'vue'
import { QIcon } from '../Icon'
import * as Fluent from '@vicons/fluent'

const props = defineProps({
  value: {
    type: String,
    default: ''
  },
  selected: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const slots = defineSlots()

const state = reactive({
  selected: props.selected,
  hover: false
})

const classes = computed(() => {
  return [
    {
      'q-select-option--disabled': props.disabled,
      'q-select-option--selected': props.selected,
      'q-select-option--hover': state.hover
    }
  ]
})

const handleMouseEnter = () => (state.hover = true)

const handleMouseLeave = () => (state.hover = false)
</script>

<template>
  <div
    class="q-select-option"
    :class="classes"
    @mouseenter="() => handleMouseEnter()"
    @mouseleave="() => handleMouseLeave()"
  >
    <div class="q-select-option__check">
      <q-icon>
        <Fluent.Checkmark24Regular />
      </q-icon>
    </div>
    <div class="q-select-option__prefix" v-if="slots.prefix">
      <slot name="prefix" />
    </div>
    <div class="q-select-option__label" v-if="slots.default">
      <slot />
    </div>
    <div class="q-select-option__suffix" v-if="slots.suffix">
      <slot name="suffix" />
    </div>
  </div>
</template>

<style src="./QSelectOption.scss" lang="scss"></style>
