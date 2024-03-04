<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { QIcon } from '../Icon'

const slots = useSlots()

const props = defineProps({
  href: {
    type: String
  },
  target: {
    type: String,
    validator: (prop: string) => ['_blank', '_parent', '_self', '_top', 'undefined'].includes(prop)
  },
  label: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    type: [Number, String]
  },
  color: {
    type: String
  }
})

const component = computed(() => {
  const { href } = props

  return href ? 'a' : 'button'
})

const classes = computed(() => {
  const { disabled } = props

  const array = [
    {
      'q-button-icon': true,
      'q-button-icon--disabled': disabled
    }
  ]

  return array
})
</script>

<template>
  <component :is="component" :class="classes" :href="href" :target="target" :label="label">
    <q-icon :size="size" :color="color">
      <slot />
    </q-icon>
    <div class="q-button__text" v-if="slots.text">
      <slot name="text"></slot>
    </div>
  </component>
</template>

<style src="./QButtonIcon.scss" lang="scss" scoped></style>
