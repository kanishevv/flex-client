<script setup lang="ts">
import { computed } from 'vue'
import type { IBlock } from '@/interfaces'
import { getComponentByName } from '@/components'

const props = defineProps<IBlock>()

const styles = computed(() => {
  const { styles } = props

  return styles.styles
})
</script>

<template>
  <div class="q-block" v-if="visible" :style="styles">
    <div>QBlock {{ id }}</div>
    <component
      :is="getComponentByName(item.component)"
      v-bind="item"
      v-for="item in children"
      :key="item.id"
    />
  </div>
</template>
