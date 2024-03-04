<script setup lang="ts">
import { reactive, computed } from 'vue'
import type { IBlock, IText, IVideo } from '@/interfaces'
import { QLayersList } from '.'
import { QSpace, QSpacer, QButtonIcon, QIcon } from 'quicker.style'
import { usePageStore } from '@/stores'
import * as Fluent from '@vicons/fluent'
import type { IImage } from '@/interfaces/IImage'

interface Props {
  layer: IBlock | IImage | IVideo | IText
}

const props = defineProps<Props>()

const state = reactive(props.layer)

const pageStore = usePageStore()

const classes = computed(() => {
  const { id, visible } = state

  return [
    {
      'q-layer-item--unvisible': !visible,
      'q-layer-item--selected': pageStore.selected?.id && pageStore.selected.id === id
    }
  ]
})
</script>

<template>
  <li class="q-layer-item" :class="classes" v-if="state.id" @click.stop="pageStore.selectBlockState(state.id)">
    <q-space class="q-layer-item__wrap" align="center" justify="space-between">
      <q-icon class="q-layer-item__icon" :size="18">
        <Fluent.BorderNone24Regular />
      </q-icon>
      <span>{{ `${state.name} (${state.id})` }}</span>
      <q-spacer />
      <q-space class="q-layer-item__action">
        <q-button-icon @click="pageStore.toggleBlockVisible(state.id)">
          <Fluent.Eye24Regular v-if="state.visible" />
          <Fluent.Eye24Filled v-else />
        </q-button-icon>
        <q-button-icon @click="pageStore.removeBlock(state.id)">
          <Fluent.Delete24Regular />
        </q-button-icon>
      </q-space>
    </q-space>
    <q-layers-list v-if="'children' in props" :data="state.children" />
  </li>
</template>

<style lang="scss">
.q-layer-item {
  width: 100%;
  margin: 0;
  list-style: none;
}

.q-layer-item--unvisible {
  opacity: 0.5;
}

.q-layer-item__wrap {
  width: 100%;
  padding-right: var(--q-spacing-x-small);
}

.q-layer-item__icon {
  margin-right: var(--q-spacing-x-small);
}
.q-layer-item--selected {
  background-color: var(--q-color-primary-50);
}
</style>
