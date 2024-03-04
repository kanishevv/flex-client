<script setup lang="ts">
import { reactive } from 'vue'
import { QPropertiesGroup } from './'
import { QGrid, QGridItem, QInput, QDropdown, QMenu, QMenuItem } from 'quicker.style'
import { Units } from '@/interfaces/units'
import type { TypeStyleWithUnits } from '@/interfaces/IBlock'
import type { MarginTop, MarginRight, MarginBottom, MarginLeft } from '@/interfaces/css'

interface Props {
  marginTop: TypeStyleWithUnits<MarginTop | number>
  marginRight: TypeStyleWithUnits<MarginRight | number>
  marginBottom: TypeStyleWithUnits<MarginBottom | number>
  marginLeft: TypeStyleWithUnits<MarginLeft | number>
}

const props = defineProps<Props>()

const state = reactive(props)
</script>

<template>
  <q-properties-group clas="q-properties-size">
    <template #label> Margin </template>
    <q-grid :cols="2" x-gap="10" y-gap="10">
      <q-grid-item :span="1">
        <q-input v-model="state.marginTop.value" size="small" filled>
          <template #prefix>
            <span class="q-properties-position__input-prefix">Top:</span>
          </template>
          <template #suffix v-if="!isNaN(Number(state.marginTop.value))">
            <q-dropdown placement="bottom" :distance="5" :skidding="10">
              <template #trigger>
                <span class="q-properties-position__input-suffix">px</span>
              </template>
              <q-menu>
                <q-menu-item v-for="unit in Units" :key="unit">{{ unit }}</q-menu-item>
              </q-menu>
            </q-dropdown>
          </template>
        </q-input>
      </q-grid-item>
      <q-grid-item :span="1">
        <q-input v-model="state.marginRight.value" size="small" filled>
          <template #prefix>
            <span class="q-properties-position__input-prefix">Right:</span>
          </template>
          <template #suffix v-if="!isNaN(Number(state.marginRight.value))">
            <q-dropdown placement="bottom" :distance="5" :skidding="10">
              <template #trigger>
                <span class="q-properties-position__input-suffix">px</span>
              </template>
              <q-menu>
                <q-menu-item v-for="unit in Units" :key="unit">{{ unit }}</q-menu-item>
              </q-menu>
            </q-dropdown>
          </template>
        </q-input>
      </q-grid-item>
      <q-grid-item :span="1">
        <q-input v-model="state.marginBottom.value" size="small" filled>
          <template #prefix>
            <span class="q-properties-position__input-prefix">Bottom:</span>
          </template>
          <template #suffix v-if="!isNaN(Number(state.marginBottom.value))">
            <q-dropdown placement="bottom" :distance="5" :skidding="10">
              <template #trigger>
                <span class="q-properties-position__input-suffix">px</span>
              </template>
              <q-menu>
                <q-menu-item v-for="unit in Units" :key="unit">{{ unit }}</q-menu-item>
              </q-menu>
            </q-dropdown>
          </template>
        </q-input>
      </q-grid-item>
      <q-grid-item :span="1">
        <q-input v-model="state.marginLeft.value" size="small" filled>
          <template #prefix>
            <span class="q-properties-position__input-prefix">Left:</span>
          </template>
          <template #suffix v-if="!isNaN(Number(state.marginLeft.value))">
            <q-dropdown placement="bottom" :distance="5" :skidding="10">
              <template #trigger>
                <span class="q-properties-position__input-suffix">px</span>
              </template>
              <q-menu>
                <q-menu-item v-for="unit in Units" :key="unit">{{ unit }}</q-menu-item>
              </q-menu>
            </q-dropdown>
          </template>
        </q-input>
      </q-grid-item>
    </q-grid>
  </q-properties-group>
</template>
