<script setup lang="ts">
import { computed } from 'vue'
import type { IBlock } from '@/interfaces'
import { getComponentByName } from '@/components'
import { usePageStore } from '@/stores'

const pageStore = usePageStore()

const props = defineProps<IBlock>()

const classes = computed(() => {
  const { type } = props

  return [
    {
      'q-block': true,
      'q-block--header': type === 'header',
      'q-block--main': type === 'main',
      'q-block--section': type === 'section',
      'q-block--footer': type === 'footer',
      'q-block--div': type === 'div'
    }
  ]
})
</script>

<template>
  <component :is="type" :class="classes">
    <drag-select-option :value="props">
      <component
        :is="getComponentByName(item.component)"
        v-bind="item"
        v-for="item in data"
        :key="item"
        @click="() => pageStore.createBlockState(item)"
      />
    </drag-select-option>
  </component>
</template>

<style lang="scss">
.q-block {
  position: relative;
  z-index: 10;
  min-height: 300px;
}

.drag-select-option--selected {
  color: #000000;
  background: #5fdddc;
}
</style>
