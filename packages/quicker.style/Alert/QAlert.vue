<script setup lang="ts">
import { ref, computed, useSlots, onMounted } from 'vue'
import { QIcon, QButtonIcon } from '../index'
import * as Icon from '@vicons/fluent'

const slots = useSlots()
const emit = defineEmits(['show', 'hide'])

const props = defineProps({
  open: {
    type: Boolean,
    default: true
  },
  closable: {
    type: Boolean,
    default: false
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (prop: string) =>
      ['primary', 'success', 'neutral', 'warning', 'danger'].includes(prop)
  },
  duration: {
    type: Number,
    default: Infinity
  },
  message: {
    type: String
  }
})

const open = ref(props.open)

const classes = computed(() => {
  const { open, variant, closable } = props

  const array: any = [
    {
      'q-alert--open': open,
      'q-alert--closable': closable,
      'q-alert--has-icon': slots.icon
    }
  ]

  const a: string = `q-alert--${variant}`

  array.push(a)

  return array
})

const show = () => {
  open.value = true

  emit('show')
}

const hide = () => {
  open.value = false

  emit('hide')
}

defineExpose({
  show,
  hide
})

onMounted(() => {
  if (props.duration !== Infinity) {
    setTimeout(() => {
      hide()
    }, props.duration)
  }
})
</script>

<template>
  <transition>
    <div class="q-alert" :class="classes" v-if="open">
      <span class="q-alert__icon" v-if="slots.icon">
        <slot name="icon"></slot>
      </span>
      <span class="q-alert__message">
        <slot>
          {{ message }}
        </slot>
      </span>
      <q-button-icon class="q-alert__close-button" v-if="closable" @click="hide">
        <q-icon :size="18">
          <Icon.Dismiss28Filled />
        </q-icon>
      </q-button-icon>
    </div>
  </transition>
</template>

<style src="./QAlert.scss" lang="scss"></style>
