<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  image: {
    type: String
  },
  label: {
    type: String
  },
  initials: {
    type: String
  },
  shape: {
    type: String,
    default: 'circle',
    validator: (prop: string) => ['circle', 'square', 'rounded'].includes(prop)
  },
  translucent: {
    type: Boolean,
    default: false
  }
})

const classes = computed(() => {
  const { shape, translucent } = props

  return {
    'q-avatar--circle': shape === 'circle',
    'q-avatar--rounded': shape === 'rounded',
    'q-avatar--square': shape === 'square',
    'q-avatar--translucent': translucent
  }
})

const hasError = false
</script>

<template>
  <div class="q-avatar" :class="classes">
    <div class="q-avatar__initials" v-if="initials">
      {{ initials }}
    </div>
    <div class="q-avatar__icon" v-else>
      <slot name="icon">
        <!-- <q-icon name="person-fill" /> -->
      </slot>
    </div>
    <img
      class="q-avatar__image"
      :src="image"
      v-if="image && !hasError"
      alt=""
      @error="() => (hasError = true)"
    />
  </div>
</template>

<style src="./QAvatar.scss" type="scss" scoped></style>
