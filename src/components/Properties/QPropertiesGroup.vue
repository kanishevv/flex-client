<script setup lang="ts">
import { QGrid, QGridItem } from 'quicker.style'
</script>

<template>
  <div class="q-properties-group">
    <q-grid :cols="1" x-gap="10" y-gap="5">
      <q-grid-item :span="1">
        <span class="q-properties-group__label">
          <slot name="label" />
        </span>
      </q-grid-item>
      <q-grid-item :span="1">
        <div class="q-properties-group__body">
          <slot />
        </div>
      </q-grid-item>
    </q-grid>
  </div>
</template>

<style lang="scss">
.q-properties-group {
  padding: var(--q-spacing-small);
  border-bottom: 1px solid var(--q-color-neutral-200);
}

.q-properties-group__label {
  color: var(--q-color-neutral-700);
  font-size: var(--q-font-size-x-small);
  font-weight: 500;
}
</style>
