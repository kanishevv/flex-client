<script setup lang="ts">
import { ref, computed } from 'vue'
import { QIcon } from '../Icon'
import { EyeOutline, EyeOffOutline } from '@vicons/ionicons5'

const slots = defineSlots()

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  name: {
    type: String
  },
  placeholder: {
    type: String
  },
  size: {
    type: String,
    validator: (prop: string) => ['small', 'medium', 'large'].includes(prop),
    default: 'medium'
  },
  filled: {
    type: Boolean,
    default: false
  },
  pill: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  invalid: {
    type: Boolean,
    default: false
  },
  togglePassword: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'text',
    validator: (prop: string) =>
      ['date', 'email', 'number', 'password', 'search', 'tel', 'text', 'time', 'url'].includes(prop)
  },
  readonly: {
    type: Boolean,
    default: false
  },
  autocomplete: {
    type: String
  },
  minlength: {
    type: Number
  },
  maxlength: {
    type: Number
  },
  min: {
    type: Number
  },
  max: {
    type: Number
  },
  required: {
    type: Boolean,
    default: false
  },
  autocapitalize: {
    type: String,
    validator: (prop: string) =>
      ['off', 'none', 'on', 'sentences', 'words', 'characters'].includes(prop)
  },
  autofocus: {
    type: Boolean
  },
  prompt: {
    type: String
  }
})

defineEmits(['update:modelValue'])

const classes = computed(() => {
  const { size, pill, filled, disabled, invalid } = props

  let classes = [
    {
      // Sizes
      'q-input--small': size === 'small',
      'q-input--medium': size === 'medium',
      'q-input--large': size === 'large',
      // States
      'q-input--pill': pill,
      'q-input--standard': !filled,
      'q-input--filled': filled,
      'q-input--disabled': disabled,
      // 'q-input--focused': this.hasFocus,
      // 'q-input--empty': !this.computedValue,
      'q-input--invalid': invalid
    }
  ]

  return classes
})

const isPasswordVisible = ref(false)

const handlePasswordToggle = () => {
  isPasswordVisible.value = !isPasswordVisible.value
}
</script>

<template>
  <div class="q-input" :class="classes">
    <div class="q-input__prefix" v-if="slots.prefix">
      <slot name="prefix"> </slot>
    </div>

    <!-- TODO: <div class="q-input__prompt" v-if="prompt">{{ prompt }}</div> -->
    <input
      class="q-input__control"
      :type="type === 'password' && isPasswordVisible ? 'text' : type"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :required="required"
      :minlength="minlength"
      :maxlength="maxlength"
      :min="min"
      :max="max"
      :autofocus="autofocus"
      :autocomplete="autocomplete"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />

    <button
      class="q-input__password-toggle"
      type="button"
      @click="handlePasswordToggle"
      v-if="togglePassword && !disabled"
    >
      <slot name="show-password-icon" v-if="isPasswordVisible">
        <q-icon>
          <eye-off-outline />
        </q-icon>
      </slot>
      <slot name="hide-password-icon" v-else>
        <q-icon>
          <eye-outline />
        </q-icon>
      </slot>
    </button>

    <div class="q-input__suffix" v-if="slots.suffix">
      <slot name="suffix" />
    </div>
  </div>
</template>

<style src="./QInput.scss" lang="scss" scoped></style>
