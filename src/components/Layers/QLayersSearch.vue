<script setup lang="ts">
import { computed } from 'vue'
import { usePageStore } from '@/stores'
import type { IBlock } from '@/interfaces'
import * as Fluent from '@vicons/fluent'
import { QSpace, QButtonIcon } from 'quicker.style'

const pageStore = usePageStore()

interface Props {
  query: string
}

const props = defineProps<Props>()

/* Computed */
const findedLayers = computed(() => {
  const { query } = props

  return pageStore.current.data.filter((block: IBlock) => {
    if (query && block.name.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
      return block
    }
  })
})

const classes = computed(() => {
  const { visible } = props

  return [
    {
      'q-layers-search__item--unvisible': !visible
    }
  ]
})
</script>

<template>
  <div class="q-layers-search">
    <div class="q-layers-search__result" v-if="findedLayers.length">
      <div
        class="q-layers-search__item"
        :class="classes"
        v-for="layer in findedLayers"
        :key="layer.id"
      >
        <q-space class="q-layers-search__item-wrap" align="center">
          <q-button-icon class="q-layers-search__item-icon" :size="18">
            <Fluent.BorderNone24Regular />
          </q-button-icon>
          <span>{{ layer.name }}</span>
        </q-space>
      </div>
    </div>
    <div class="q-layers-search__empty" v-else-if="!findedLayers.length && query">No result</div>
  </div>
</template>

<style lang="scss">
.q-layers-search__item {
  width: 100%;
  padding: var(--q-spacing-small);
}

.q-layers-search__item--unvisible {
  opacity: 0.5;
}

.q-layers-search__item-wrap {
  width: 100%;
  padding-right: var(--q-spacing-x-small);
}

.q-layers-search__item-icon {
  margin-right: var(--q-spacing-x-small);
}
</style>
