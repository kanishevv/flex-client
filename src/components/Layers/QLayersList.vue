<script setup lang="ts">
import type { IBlock, IText, IVideo } from '@/interfaces'
import draggable from 'vuedraggable'
import { QLayersItem } from '.'
import type { IImage } from '@/interfaces/IImage'

interface Props {
  data: Array<IBlock | IImage | IVideo | IText>
}

defineProps<Props>()
</script>

<template>
  <draggable class="q-layers-list" tag="ul" :list="data" :group="{ name: 'g1' }" item-key="id">
    <template #item="{ element }">
      <q-layers-item :layer="element" />
    </template>
  </draggable>
</template>

<style lang="scss">
.q-layers-list {
  padding-left: 25px;
}
</style>
