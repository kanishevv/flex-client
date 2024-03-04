<script setup lang="ts">
import { useSlots, computed } from 'vue'

const slots = useSlots()

const classes = computed(() => {
  return [
    {
      'q-card--has-footer': slots.footer,
      'q-card--has-image': slots.image,
      'q-card--has-header': slots.header
    }
  ]
})
</script>

<template>
  <div class="q-card" :class="classes">
    <div class="q-card__image" v-if="$slots.image">
      <slot name="image"></slot>
    </div>
    <div class="q-card__header" v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <div class="q-card__body" v-if="$slots.default">
      <slot></slot>
    </div>
    <div class="q-card__footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style src="./QCard.scss" lang="scss" scoped></style>
