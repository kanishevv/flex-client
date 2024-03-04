<script setup lang="ts">
import { ref } from 'vue'
import { QPropertiesGroup } from './'
import { QGrid, QGridItem, QInput, QDropdown, QMenu, QMenuItem } from 'quicker.style'
import { Units } from '@/interfaces/units'
import type { TypeStyleWithUnits } from '@/interfaces/IBlock'
import type { Height, MaxHeight, MaxWidth, MinHeight, MinWidth, Width } from '@/interfaces/css'

interface Props {
  width: TypeStyleWithUnits<Width | number>
  minWidth: TypeStyleWithUnits<MinWidth | number>
  maxWidth: TypeStyleWithUnits<MaxWidth | number>
  height: TypeStyleWithUnits<Height | number>
  minHeight: TypeStyleWithUnits<MinHeight | number>
  maxHeight: TypeStyleWithUnits<MaxHeight | number>
}

const props = defineProps<Props>()

const state = ref(props)
</script>

<template>
  <q-properties-group clas="q-properties-size">
    <template #label> Size </template>
    <q-grid :cols="2" x-gap="10" y-gap="10">
      <q-grid-item :span="2">
        <q-input v-model="state.width.value" size="small" filled>
          <template #prefix>
            <span class="q-properties-position__input-prefix">Width:</span>
          </template>
          <template #suffix v-if="!isNaN(Number(state.width.value))">
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
        <q-input v-model="state.minWidth.value" size="small" filled>
          <template #prefix>
            <span class="q-properties-position__input-prefix">Min:</span>
          </template>
          <template #suffix v-if="!isNaN(Number(state.minWidth.value))">
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
        <q-input v-model="state.maxWidth.value" size="small" filled>
          <template #prefix>
            <span class="q-properties-position__input-prefix">Max:</span>
          </template>
          <template #suffix v-if="!isNaN(Number(state.maxWidth.value))">
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
      <q-grid-item :span="2">
        <q-input v-model="state.height.value" size="small" filled>
          <template #prefix>
            <span class="q-properties-position__input-prefix">Height:</span>
          </template>
          <template #suffix v-if="!isNaN(Number(state.height.value))">
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
        <q-input v-model="state.minHeight.value" size="small" filled>
          <template #prefix>
            <span class="q-properties-position__input-prefix">Min:</span>
          </template>
          <template #suffix v-if="!isNaN(Number(state.minHeight.value))">
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
        <q-input v-model="state.maxHeight.value" size="small" filled>
          <template #prefix>
            <span class="q-properties-position__input-prefix">Max:</span>
          </template>
          <template #suffix v-if="!isNaN(Number(state.maxHeight.value))">
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
