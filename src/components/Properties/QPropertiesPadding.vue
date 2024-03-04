<script setup lang="ts">
import { reactive } from 'vue'
import { QPropertiesGroup } from './'
import { QGrid, QGridItem, QInput, QDropdown, QMenu, QMenuItem } from 'quicker.style'
import { Units } from '@/interfaces/units'
import type { TypeStyleWithUnits } from '@/interfaces/IBlock'
import type { PaddingTop, PaddingRight, PaddingBottom, PaddingLeft } from '@/interfaces/css'

interface Props {
  paddingTop: TypeStyleWithUnits<PaddingTop | number>
  paddingRight: TypeStyleWithUnits<PaddingRight | number>
  paddingBottom: TypeStyleWithUnits<PaddingBottom | number>
  paddingLeft: TypeStyleWithUnits<PaddingLeft | number>
}

const props = defineProps<Props>()

const state = reactive(props)
</script>

<template>
  <q-properties-group clas="q-properties-size">
    <template #label> Padding </template>
    <q-grid :cols="2" x-gap="10" y-gap="10">
      <q-grid-item :span="1">
        <q-input v-model="state.paddingTop.value" size="small" filled>
          <template #prefix>
            <span class="q-properties-position__input-prefix">Top:</span>
          </template>
          <template #suffix v-if="!isNaN(Number(state.paddingTop.value))">
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
        <q-input v-model="state.paddingRight.value" size="small" filled>
          <template #prefix>
            <span class="q-properties-position__input-prefix">Right:</span>
          </template>
          <template #suffix v-if="!isNaN(Number(state.paddingRight.value))">
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
        <q-input v-model="state.paddingBottom.value" size="small" filled>
          <template #prefix>
            <span class="q-properties-position__input-prefix">Bottom:</span>
          </template>
          <template #suffix v-if="!isNaN(Number(state.paddingBottom.value))">
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
        <q-input v-model="state.paddingLeft.value" size="small" filled>
          <template #prefix>
            <span class="q-properties-position__input-prefix">Left:</span>
          </template>
          <template #suffix v-if="!isNaN(Number(state.paddingLeft.value))">
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
