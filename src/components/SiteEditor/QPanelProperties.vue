<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAppStore, usePageStore } from '@/stores'
import { QGrid, QGridItem, QInput, QDivider } from 'quicker.style'
import { Display, Position } from '@/interfaces/css'

const appStore = useAppStore()
const pageStore = usePageStore()

const { getBlocksById } = storeToRefs(pageStore)
console.log(appStore.layers.selected[0])

const block = getBlocksById.value(appStore.layers.selected[0])

// const position = (Object.keys(Position) as (keyof typeof Position)[]).filter((key) => {
//     if (key.indexOf('Moz') && key.indexOf('Webkit')) return Position[key]
// })

// enum Position {
//   absolute = 'absolute',
//   relative = 'relative',
//   static = 'static'
// }

// enum Display {
//   block = 'block',
//   inline = 'inline',
//   flex = 'flex'
// }
</script>

<template>
  <div class="q-panel-properties">
    <div class="q-panel-properties__group">
      <select name="position" v-model="block[0].styles.position" v-if="block">
        <option :value="item" v-for="item in Position" :key="item">
          {{ item }}
        </option>
      </select>
    </div>
    <q-divider />
    <div class="q-panel-properties__group" v-if="block[0].styles.position === 'absolute'">
      <q-grid :cols="2" :x-gap="10" :y-gap="10">
        <q-grid-item :span="1">
          <q-input size="small" v-model="block[0].styles.top" filled>
            <template #prefix> Top </template>
            <template #suffix> PX </template>
          </q-input>
        </q-grid-item>
        <q-grid-item :span="1">
          <q-input size="small" v-model="block[0].styles.right" filled>
            <template #prefix> Right </template>
            <template #suffix> PX </template>
          </q-input>
        </q-grid-item>
        <q-grid-item :span="1">
          <q-input v-model="block[0].styles.bottom" size="small" filled>
            <template #prefix> Bottom </template>
            <template #suffix> PX </template>
          </q-input>
        </q-grid-item>
        <q-grid-item :span="1">
          <q-input v-model="block[0].styles.left" size="small" filled>
            <template #prefix> Left </template>
            <template #suffix> PX </template>
          </q-input>
        </q-grid-item>
      </q-grid>
      <q-divider />
    </div>
    <div class="q-panel-properties__group">
      <select name="display" v-model="block[0].styles.display" v-if="block">
        <option :value="item" v-for="item in Display" :key="item">
          {{ item }}
        </option>
      </select>
    </div>
    <q-divider />
    <div class="q-panel-properties__group">
      <q-grid :cols="2" :x-gap="10" :y-gap="10">
        <q-grid-item :span="1">
          <q-input size="small" v-model="block[0].styles.width" filled>
            <template #prefix> Width </template>
            <template #suffix> PX </template>
          </q-input>
        </q-grid-item>
        <q-grid-item :span="1">
          <q-input size="small" v-model="block[0].styles.height" filled>
            <template #prefix> Height </template>
            <template #suffix> PX </template>
          </q-input>
        </q-grid-item>
        <q-grid-item :span="1">
          <q-input size="small" filled>
            <template #prefix> Rotate </template>
          </q-input>
        </q-grid-item>
        <q-grid-item :span="1">
          <q-input size="small" filled>
            <template #prefix> Radius </template>
          </q-input>
        </q-grid-item>
      </q-grid>
    </div>
    <q-divider />
    <div class="q-panel-properties__group">
      <q-grid :cols="2" :x-gap="10" :y-gap="10">
        <q-grid-item :span="2">Margin</q-grid-item>
        <q-grid-item :span="1">
          <q-input size="small" v-model="block[0].styles.marginTop" filled>
            <template #prefix> Top </template>
            <template #suffix> PX </template>
          </q-input>
        </q-grid-item>
        <q-grid-item>
          <q-input size="small" v-model="block[0].styles.marginRight" filled>
            <template #prefix> Right </template>
            <template #suffix> PX </template>
          </q-input>
        </q-grid-item>
        <q-grid-item>
          <q-input size="small" v-model="block[0].styles.marginBottom" filled>
            <template #prefix> Bottom </template>
            <template #suffix> PX </template>
          </q-input>
        </q-grid-item>
        <q-grid-item>
          <q-input size="small" v-model="block[0].styles.marginLeft" filled>
            <template #prefix> Left </template>
            <template #suffix> PX </template>
          </q-input>
        </q-grid-item>
      </q-grid>
    </div>
    <q-divider />
    <div class="q-panel-properties__group">
      <q-grid :cols="2" :x-gap="10" :y-gap="10">
        <q-grid-item :span="2">Padding</q-grid-item>
        <q-grid-item :span="1">
          <q-input size="small" v-model="block[0].styles.paddingTop" filled>
            <template #prefix> Top </template>
            <template #suffix> PX </template>
          </q-input>
        </q-grid-item>
        <q-grid-item>
          <q-input size="small" v-model="block[0].styles.paddingRight" filled>
            <template #prefix> Right </template>
            <template #suffix> PX </template>
          </q-input>
        </q-grid-item>
        <q-grid-item>
          <q-input size="small" v-model="block[0].styles.paddingBottom" filled>
            <template #prefix> Bottom </template>
            <template #suffix> PX </template>
          </q-input>
        </q-grid-item>
        <q-grid-item>
          <q-input size="small" v-model="block[0].styles.paddingLeft" filled>
            <template #prefix> Left </template>
            <template #suffix> PX </template>
          </q-input>
        </q-grid-item>
      </q-grid>
    </div>
    <q-divider />
    <div class="q-panel-properties__group">
      <q-grid :cols="2" :x-gap="10" :y-gap="10">
        <q-grid-item :span="2">Border</q-grid-item>
        <q-grid-item :span="1">
          <q-input size="small" v-model="block[0].styles.borderTop" filled>
            <template #prefix> Top </template>
            <template #suffix> PX </template>
          </q-input>
        </q-grid-item>
        <q-grid-item>
          <q-input size="small" v-model="block[0].styles.borderRight" filled>
            <template #prefix> Right </template>
            <template #suffix> PX </template>
          </q-input>
        </q-grid-item>
        <q-grid-item>
          <q-input size="small" v-model="block[0].styles.borderBottom" filled>
            <template #prefix> Bottom </template>
            <template #suffix> PX </template>
          </q-input>
        </q-grid-item>
        <q-grid-item>
          <q-input size="small" v-model="block[0].styles.BorderLeft" filled>
            <template #prefix> Left </template>
            <template #suffix> PX </template>
          </q-input>
        </q-grid-item>
      </q-grid>
    </div>
    <q-divider />
  </div>
</template>

<style>
.q-panel-properties {
  --q-layout-padding: 0;
}

.q-panel-properties__group {
  padding: 0 var(--q-layout-header-padding);

  .q-input {
    width: 100%;
  }
}
</style>
