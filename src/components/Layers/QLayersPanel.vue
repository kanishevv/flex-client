<script setup lang="ts">
import { reactive } from 'vue'
import { QLayout, QLayoutHeader, QLayoutContent, QButtonIcon, QSpace, QInput } from 'quicker.style'
import { QLayersList, QLayersSearch } from '.'
import * as Fluent from '@vicons/fluent'

import { usePageStore } from '@/stores'

const pageStore = usePageStore()
const search = reactive({
  panel: false,
  value: '',
  togglePanel: function () {
    this.value = ''
    this.panel = !this.panel
  }
})
</script>

<template>
  <q-layout class="q-layers-panel">
    <q-layout-header class="q-layers-panel__header">
      <q-space align="center">
        <q-button-icon :size="18" @click="search.togglePanel()">
          <Fluent.Search24Regular v-if="!search.panel" />
          <Fluent.Dismiss24Regular v-else />
        </q-button-icon>
        <q-input
          v-if="search.panel"
          v-model="search.value"
          size="small"
          placeholder="Find..."
          filled
          clearable
        />
        <strong v-else>Layers</strong>
      </q-space>
    </q-layout-header>
    <q-layout-content class="q-layers-panel__content">
      <q-layers-list v-if="!search.panel" :data="pageStore?.current?.children" />
      <q-layers-search :query="search.value" v-else-if="search.panel" />
    </q-layout-content>
  </q-layout>
</template>

<style lang="scss">
.q-layers-panel {
  --q-layout-header-height: auto;
}

.q-layers-panel__content {
  padding: var(--q-spacing-small) 0;
  background: unset !important;
  opacity: 1 !important;
}
</style>
