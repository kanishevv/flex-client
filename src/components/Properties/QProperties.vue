<script setup lang="ts">
import { reactive } from 'vue'
import { storeToRefs } from 'pinia'
import { usePageStore } from '@/stores'
import {
  QPropertiesPosition,
  QPropertiesDisplay,
  QPropertiesSize,
  QPropertiesMargin,
  QPropertiesPadding,
  QPropertiesFlex,
  QPropertiesBoxSizing
} from './'

const store = usePageStore()

const { updateBlockState } = store
const { selected } = storeToRefs(store)

const state = reactive(selected)
</script>

<template>
  <div class="q-properties" v-if="state?.styles">
    <q-properties-position
      :position="state.styles.position"
      :top="state.styles.top"
      :right="state.styles.right"
      :bottom="state.styles.bottom"
      :left="state.styles.left"
      :zIndex="state.styles.zIndex"
      @change="(updatedState) => updateBlockState({ ...state, ...updatedState })"
    />
    <q-properties-display v-model="state.styles.display" @change="updateBlockState(state)" />
    <q-properties-flex
      v-if="state.styles.display.value === 'flex'"
      :flexDirection="state.styles.flexDirection"
      :flexWrap="state.styles.flexWrap"
      :justifyContent="state.styles.justifyContent"
      :alignItems="state.styles.alignItems"
      :alignContent="state.styles.alignContent"
      @change="(updatedState) => updateBlockState({ ...state, ...updatedState })"
    />
    <q-properties-size
      :width="state.styles.width"
      :minWidth="state.styles.minWidth"
      :maxWidth="state.styles.maxWidth"
      :height="state.styles.height"
      :minHeight="state.styles.minHeight"
      :maxHeight="state.styles.maxHeight"
      @change="(updatedState) => updateBlockState({ ...state, ...updatedState })"
    />
    <q-properties-box-sizing
      :boxSizing="state.styles.boxSizing"
      @change="(updatedState) => updateBlockState({ ...state, ...updatedState })"
    />
    <q-properties-margin
      :marginTop="state.styles.marginTop"
      :marginRight="state.styles.marginRight"
      :marginBottom="state.styles.marginBottom"
      :marginLeft="state.styles.marginLeft"
      @change="(updatedState) => updateBlockState({ ...state, ...updatedState })"
    />
    <q-properties-padding
      :paddingTop="state.styles.paddingTop"
      :paddingRight="state.styles.paddingRight"
      :paddingBottom="state.styles.paddingBottom"
      :paddingLeft="state.styles.paddingLeft"
      @change="(updatedState) => updateBlockState({ ...state, ...updatedState })"
    />
    <!-- <q-properties-position v-model="styles.position" />
    <q-properties-display v-model="styles.display" />
    <q-properties-flex v-model="styles.flex" v-if="selected.value?.styles.display.value === 'flex'" />
    <q-properties-size v-model="styles.size" />
    <q-properties-margin v-model="styles.margin" />
    <q-properties-padding v-model="styles.padding" />
    <q-properties-box-sizing v-model="styles.boxSizing" /> -->
  </div>
</template>

<style lang="scss">
.q-properties {
  height: 100%;
  overflow: auto;
}
</style>
