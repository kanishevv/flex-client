<script setup lang="ts">
import { reactive } from 'vue'
import { QPropertiesGroup } from './'
import { QGrid, QGridItem, QSelect } from 'quicker.style'
import { BoxSizing } from '@/interfaces/css'
import type { TypeStyle } from '@/interfaces/IBlock'

interface Props {
  boxSizing: TypeStyle<BoxSizing>
}

const props = defineProps<Props>()

const state = reactive(props)
</script>

<template>
  <q-properties-group clas="q-properties-box-sizing">
    <template #label> Box Sizing </template>
    <q-grid :cols="2" x-gap="10" y-gap="10">
      <q-grid-item :span="2">
        <q-select
          v-model="state.boxSizing.value"
          size="small"
          filled
          :items="Object.values(BoxSizing)"
        />
      </q-grid-item>
    </q-grid>
  </q-properties-group>
</template>
