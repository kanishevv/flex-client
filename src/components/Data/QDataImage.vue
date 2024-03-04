<script setup lang="ts">
import { ref, reactive } from 'vue'
import { ImageLoading, type IImageData } from '@/interfaces/IImage'
import { QGrid, QGridItem, QInput, QSelect } from 'quicker.style'
import { QPropertiesGroup } from '../Properties'
import cloneDeep from 'lodash/cloneDeep'

const emit = defineEmits(['update:data'])

interface Props {
  modelValue: IImageData
}

const props = defineProps<Props>()

const state: IImageData = reactive(cloneDeep(props.modelValue))

const handleImageChange = (event: Event) => {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]

  if (file) {
    state.src = URL.createObjectURL(file)
  }

  updateImageData()
}

const updateImageData = () => emit('update:data', state)

</script>

<template>
  <q-properties-group>
    <template #label>Link:</template>
    <q-grid :cols="2" :x-gap="10" y-gap="10">
      <q-grid-item :span="2">
        <input type="file" @change="(event: Event) => handleImageChange(event)" />
      </q-grid-item>
      <q-grid-item :span="2">
        <q-input v-model="state.src" size="small" filled @change="updateImageData()"></q-input>
      </q-grid-item>
    </q-grid>
  </q-properties-group>
  <q-properties-group>
    <template #label>Alt:</template>
    <q-grid :cols="2" :x-gap="10" y-gap="10">
      <q-grid-item :span="2">
        <q-input v-model="state.alt" size="small" filled @change="updateImageData()"></q-input>
      </q-grid-item>
    </q-grid>
  </q-properties-group>
  <q-properties-group>
    <template #label>Title:</template>
    <q-grid :cols="2" :x-gap="10" y-gap="10">
      <q-grid-item :span="2">
        <q-input v-model="state.title" size="small" filled @change="updateImageData()"></q-input>
      </q-grid-item>
    </q-grid>
  </q-properties-group>
  <q-properties-group>
    <template #label>Loading:</template>
    <q-grid :cols="2" :x-gap="10" y-gap="10">
      <q-grid-item :span="2">
        <q-select
          v-model="state.loading"
          size="small"
          filled
          :items="Object.values(ImageLoading)"
          @change="updateImageData()"
        />
      </q-grid-item>
    </q-grid>
  </q-properties-group>
</template>
