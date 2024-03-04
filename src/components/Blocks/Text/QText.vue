<script setup lang="ts">
import type { IText } from '@/interfaces'
import { getTextComponent } from '.'

defineProps<IText>()

</script>

<template>
  <component
    :is="getTextComponent(block.type)"
    :key="block.id"
    v-bind="block.data"
    v-for="block in data"
  />
</template>
