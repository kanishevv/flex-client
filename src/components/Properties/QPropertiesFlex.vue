<script setup lang="ts">
import { reactive } from 'vue'
import { QPropertiesGroup } from './'
import { QGrid, QGridItem, QSelect, QSpace } from 'quicker.style'
import { AlignContent, AlignItems, FlexDirection, FlexWrap, JustifyContent } from '@/interfaces/css'
import type { TypeStyle } from '@/interfaces/IBlock'

interface Props {
  flexDirection: TypeStyle<FlexDirection>
  flexWrap: TypeStyle<FlexWrap>
  justifyContent: TypeStyle<JustifyContent>
  alignItems: TypeStyle<AlignItems>
  alignContent: TypeStyle<AlignContent>
}

const props = defineProps<Props>()

const state = reactive(props)
</script>

<template>
  <q-properties-group clas="q-properties-display">
    <template #label> Flex Conteiner </template>
    <q-grid :cols="6" x-gap="10" y-gap="10">
      <q-grid-item :span="2">
        <q-space align="center">
          <div class="q-properties-position__input-prefix">Direction:</div>
        </q-space>
      </q-grid-item>
      <q-grid-item :span="4">
        <q-select
          v-model="state.flexDirection.value"
          size="small"
          filled
          :items="Object.values(FlexDirection)"
        />
      </q-grid-item>
      <q-grid-item :span="2">
        <q-space align="center">
          <div class="q-properties-position__input-prefix">Wrap:</div>
        </q-space>
      </q-grid-item>
      <q-grid-item :span="4">
        <q-select
          v-model="state.flexWrap.value"
          size="small"
          filled
          :items="Object.values(FlexWrap)"
        />
      </q-grid-item>
      <q-grid-item :span="2">
        <q-space align="center">
          <div class="q-properties-position__input-prefix">Justify Content:</div>
        </q-space>
      </q-grid-item>
      <q-grid-item :span="4">
        <q-select
          v-model="state.justifyContent.value"
          size="small"
          filled
          :items="Object.values(JustifyContent)"
        />
      </q-grid-item>
      <q-grid-item :span="2">
        <q-space align="center">
          <div class="q-properties-position__input-prefix">Align Items:</div>
        </q-space>
      </q-grid-item>
      <q-grid-item :span="4">
        <q-select
          v-model="state.alignItems.value"
          size="small"
          filled
          :items="Object.values(AlignItems)"
        />
      </q-grid-item>
      <q-grid-item :span="2">
        <q-space align="center">
          <div class="q-properties-position__input-prefix">Align content:</div>
        </q-space>
      </q-grid-item>
      <q-grid-item :span="4">
        <q-select
          v-model="state.alignContent.value"
          size="small"
          filled
          :items="Object.values(AlignContent)"
        />
      </q-grid-item>
    </q-grid>
  </q-properties-group>
</template>
