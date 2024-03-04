<script setup lang="ts">
import { computed, reactive } from 'vue'
// import { QIcon } from '../Icon'

const slots = defineSlots()

enum Size {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

interface Props {
  title?: string
  name?: string
  modelValue?: boolean
  size?: Size
  checked?: boolean
  disabled?: boolean
  required?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  name: '',
  title: '',
  size: Size.Medium,
  modelValue: false,
  disabled: false,
  required: false
})

const state = reactive(props)

const classes = computed(() => {
  const { size, disabled } = state

  return [
    {
      'q-checkbox--small': size === 'small',
      'q-checkbox--medium': size === 'medium',
      'q-checkbox--large': size === 'large',
      'q-checkbox--disabled': disabled
    }
  ]
})
</script>

<template>
  <label class="q-checkbox" :class="classes">
    {{ state.modelValue }}
    <input
      class="q-checkbox__input"
      type="checkbox"
      :title="state.title"
      :name="state.name"
      :disabled="state.disabled"
      :required="state.required"
      v-model="state.modelValue"
    />

    <span class="q-checkbox__control">
      <!-- <q-icon v-if="state.checked"></q-icon>
        <q-icon></q-icon> -->
    </span>

    <div class="q-checkbox__label" v-if="slots.default">
      <slot />
    </div>
  </label>
</template>

<style src="./Checkbox.scss" lang="scss"></style>
