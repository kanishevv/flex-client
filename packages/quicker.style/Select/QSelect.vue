<script setup lang="ts">
import { computed, reactive, watch } from 'vue'
import { QDropdown } from '../Dropdown'
import { QIcon } from '../Icon'
import * as Fluent from '@vicons/fluent'
import { QSelectOption } from './'

const emit = defineEmits(['update:modelValue', 'blur', 'focus'])

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  multiple: {
    type: Boolean,
    default: false
  },
  hoist: {
    type: Boolean,
    default: false
  },
  placement: {
    type: String,
    default: 'bottom',
    validator: (prop: string) => ['top', 'bottom'].includes(prop)
  },
  filled: {
    type: Boolean,
    default: true
  },
  size: {
    type: String,
    default: 'medium',
    validator: (prop: string) => ['small', 'medium', 'large'].includes(prop)
  },
  pill: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    default: ''
  },
  items: {
    type: Array,
    default: []
  }
})

const slots = defineSlots()

const state = reactive({
  open: false,
  focus: false,
  value: props.modelValue
})

const classes = computed(() => {
  const { multiple, size, filled, pill, disabled, placement, modelValue } = props
  return [
    {
      'q-select--open': state.open,
      'q-select--empty': !modelValue,
      'q-select--focused': state.focus,
      //   'q-select--clearable': this.clearable,
      'q-select--disabled': disabled,
      'q-select--multiple': multiple,
      'q-select--standard': !filled,
      'q-select--filled': filled,
      'q-select--top': placement === 'top',
      'q-select--bottom': placement === 'bottom',
      //   'q-select--has-tags': this.multiple && this.displayTags.length > 0,
      //   'q-select--placeholder-visible': this.displayLabel === '',
      'q-select--small': size === 'small',
      'q-select--medium': size === 'medium',
      'q-select--large': size === 'large',
      'q-select--pill': pill
      //   'q-select--invalid': this.invalid
    }
  ]
})

const show = () => (state.open = true)

const hide = () => (state.open = false)

const handleBlur = () => {
  state.focus = false
  emit('blur')
}

const handleFocus = () => {
  state.focus = true
  emit('focus')
}

const handleSelect = (value) => {
  console.log(value)

  emit('update:modelValue', value)
  hide()
}
</script>

<template>
  <q-dropdown
    class="q-select"
    :hoist="hoist"
    :placement="placement"
    :disabled="disabled"
    :stayOpenOnSelect="multiple"
    :distance="5"
    :class="classes"
    :open="state.open"
    @show="() => show()"
    @hide="() => hide()"
  >
    <template #trigger>
      <div class="q-select__control">
        <span class="q-select__prefix" v-if="slots.prefix">
          <slot name="prefix" />
        </span>

        <input
          class="q-select__display-input"
          type="text"
          :value="modelValue"
          :placeholder="placeholder"
          :disabled="disabled"
          autocomplete="off"
          spellcheck="false"
          autocapitalize="off"
          readonly
          @blur="() => handleBlur()"
          @focus="() => handleFocus()"
        />

        <span class="q-select__suffix" v-if="slots.suffix">
          <slot name="suffix" />
        </span>

        <q-icon class="q-select__expand-icon">
          <Fluent.ChevronDown24Regular />
        </q-icon>
      </div>
    </template>
    <div class="q-select__list">
      <q-select-option
        v-for="value in items"
        :key="value"
        @click="() => handleSelect(value)"
        :selected="modelValue === value"
      >
        {{ value }}
      </q-select-option>
    </div>
  </q-dropdown>
</template>

<style src="./QSelect.scss" lang="scss"></style>
