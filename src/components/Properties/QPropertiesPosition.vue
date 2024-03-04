<script setup lang="ts">
import { reactive } from 'vue'
import { QPropertiesGroup } from './'
import {
  QGrid,
  QGridItem,
  QInput,
  QSelect,
  QDropdown,
  QMenu,
  QMenuItem,
  QButtonIcon,
  QSpace
} from 'quicker.style'
import { Units } from '@/interfaces/units'
import * as Fluent from '@vicons/fluent'
import { Bottom, Left, Position, Right, Top, ZIndex } from '@/interfaces/css'
import type { TypeStyle, TypeStyleWithUnits } from '@/interfaces/IBlock'

interface Props {
  position: TypeStyle<Position>
  top: TypeStyleWithUnits<Top | number>
  right: TypeStyleWithUnits<Right | number>
  bottom: TypeStyleWithUnits<Bottom | number>
  left: TypeStyleWithUnits<Left | number>
  zIndex: TypeStyle<ZIndex | number>
}

const props = defineProps<Props>()

const state = reactive(props)
</script>

<template>
  <q-properties-group class="q-properties-position">
    <template #label> Position </template>
    <q-grid :cols="2" x-gap="10" y-gap="10">
      <q-grid-item :span="2" v-if="state.position">
        <q-select
          v-model="state.position.value"
          size="small"
          filled
          :items="Object.values(Position)"
        />
      </q-grid-item>
      <q-grid-item :span="1" v-if="state.position.value !== 'static'">
        <q-input v-model="state.top.value" size="small" filled>
          <template #prefix>
            <span class="q-properties-position__input-prefix">Top: </span>
          </template>
          <template #suffix v-if="!isNaN(Number(state.top.value))">
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
      <q-grid-item :span="1" v-if="state.position.value !== 'static'">
        <q-input v-model="state.right.value" size="small" filled>
          <template #prefix>
            <span class="q-properties-position__input-prefix">Right:</span>
          </template>
          <template #suffix v-if="!isNaN(Number(state.right.value))">
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
      <q-grid-item :span="1" v-if="state.position.value !== 'static'">
        <q-input v-model="state.bottom.value" size="small" filled>
          <template #prefix>
            <span class="q-properties-position__input-prefix">Bottom:</span>
          </template>
          <template #suffix v-if="!isNaN(Number(state.bottom.value))">
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
      <q-grid-item :span="1" v-if="state.position.value !== 'static'">
        <q-input v-model="state.left.value" size="small" filled>
          <template #prefix>
            <span class="q-properties-position__input-prefix">Left:</span>
          </template>
          <template #suffix v-if="!isNaN(Number(state.left.value))">
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
      <q-grid-item :span="1" v-if="state.position.value !== 'static'">
        <q-input v-model="state.zIndex.value" size="small" filled>
          <template #prefix>
            <span class="q-properties-position__input-prefix">Z-Index:</span>
          </template>
        </q-input>
      </q-grid-item>
      <q-grid-item :span="1" v-if="state.position.value !== 'static'">
        <q-space align="center" justify="space-between">
          <q-button-icon>
            <Fluent.PositionToFront24Regular />
          </q-button-icon>
          <q-button-icon>
            <Fluent.PositionForward24Regular />
          </q-button-icon>
          <q-button-icon>
            <Fluent.PositionToBack24Regular />
          </q-button-icon>
          <q-button-icon>
            <Fluent.PositionBackward24Regular />
          </q-button-icon>
        </q-space>
      </q-grid-item>
    </q-grid>
  </q-properties-group>
</template>

<style>
.q-input {
  width: 100%;
  position: unset !important;
}

.q-properties-position__input-prefix,
.q-properties-position__input-suffix {
  font-size: var(--q-font-size-x-small);
  color: var(--q-color-neutral-500);
}
</style>
