<script setup lang="ts">
import { reactive } from 'vue'
import {
  type TypeText,
  type TypeTextHeader,
  type TypeTextParagraph,
  type TypeTextString
} from '@/interfaces/IText'
import { QEditable } from '@/components/Editable'
import { QPropertiesGroup } from '@/components/Properties'
import { QGrid, QGridItem, QInput } from 'quicker.style'
import cloneDeep from 'lodash/cloneDeep'

interface Props {
  modelValue: TypeText<TypeTextString | TypeTextHeader | TypeTextParagraph>
}

const props = defineProps<Props>()

const state = reactive(cloneDeep(props.modelValue))
</script>

<template>
  <div class="q-data-text">
    <q-properties-group>
      <template #label>Text:</template>
      <q-editable :source="state" />
    </q-properties-group>
  </div>
</template>
