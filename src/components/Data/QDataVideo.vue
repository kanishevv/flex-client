<script setup lang="ts">
import { reactive } from 'vue'
import {
  type IVideoData,
  VideoPreload,
  VideoControlsItem,
  VideoCrossorigin
} from '@/interfaces/IVideo'
import { QPropertiesGroup } from '../Properties'
import { QGrid, QGridItem, QInput, QSelect } from 'quicker.style'
import cloneDeep from 'lodash/cloneDeep'

const emit = defineEmits(['update:data'])

interface Props {
  modelValue: IVideoData
}

const props = defineProps<Props>()

const state: IVideoData = reactive(cloneDeep(props.modelValue))

const handleVideoChange = (event: Event) => {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]

  if (file) {
    state.src = URL.createObjectURL(file)
  }

  updateVideoData()
}

const updateVideoData = () => emit('update:data', state)

</script>

<template>
  <q-properties-group>
    <template #label>Link:</template>
    <q-grid :cols="2" :x-gap="10" y-gap="10">
      <q-grid-item :span="2">
        <input type="file" @change="(event: Event) => handleVideoChange(event)" />
      </q-grid-item>
      <q-grid-item :span="2">
        <q-input v-model="state.src" size="small" filled @change="updateVideoData()"></q-input>
      </q-grid-item>
    </q-grid>
  </q-properties-group>
  <q-properties-group>
    <q-grid :cols="2" :x-gap="10" y-gap="10">
      <q-grid-item :span="2">
        <input id="controls" type="checkbox" v-model="state.controls" @change="updateVideoData()" />
        <label for="controls">Controls</label>
      </q-grid-item>
    </q-grid>
  </q-properties-group>
  <q-properties-group>
    <template #label>Controlslist:</template>
    <q-grid :cols="2" :x-gap="10" y-gap="10">
      <q-grid-item :span="2">
        <q-select
          v-model="state.controlslist"
          size="small"
          filled
          :items="Object.values(VideoControlsItem)"
          @change="updateVideoData()"
        />
      </q-grid-item>
    </q-grid>
  </q-properties-group>
  <q-properties-group>
    <q-grid :cols="2" :x-gap="10" y-gap="10">
      <q-grid-item :span="2">
        <input id="autoplay" type="checkbox" v-model="state.autoplay" @change="updateVideoData()" />
        <label for="autoplay">Autoplay</label>
      </q-grid-item>
    </q-grid>
  </q-properties-group>
  <q-properties-group>
    <q-grid :cols="2" :x-gap="10" y-gap="10">
      <q-grid-item :span="2">
        <input id="loop" type="checkbox" v-model="state.loop" @change="updateVideoData()" />
        <label for="loop">Loop</label>
      </q-grid-item>
    </q-grid>
  </q-properties-group>
  <q-properties-group>
    <q-grid :cols="2" :x-gap="10" y-gap="10">
      <q-grid-item :span="2">
        <input id="loop" type="checkbox" v-model="state.loop" @change="updateVideoData()" />
        <label for="loop">Loop</label>
      </q-grid-item>
    </q-grid>
  </q-properties-group>
  <q-properties-group>
    <q-grid :cols="2" :x-gap="10" y-gap="10">
      <q-grid-item :span="2">
        <input id="muted" type="checkbox" v-model="state.muted" @change="updateVideoData()" />
        <label for="muted">Muted</label>
      </q-grid-item>
    </q-grid>
  </q-properties-group>
  <q-properties-group>
    <template #label>Poster:</template>
    <q-grid :cols="2" :x-gap="10" y-gap="10">
      <q-grid-item :span="2">
        <q-input v-model="state.poster" size="small" filled @change="updateVideoData()"></q-input>
      </q-grid-item>
    </q-grid>
  </q-properties-group>
  <q-properties-group>
    <template #label>Preload:</template>
    <q-grid :cols="2" :x-gap="10" y-gap="10">
      <q-grid-item :span="2">
        <q-select
          v-model="state.preload"
          size="small"
          filled
          :items="Object.values(VideoPreload)"
          @change="updateVideoData()"
        />
      </q-grid-item>
    </q-grid>
  </q-properties-group>
  <q-properties-group>
    <q-grid :cols="2" :x-gap="10" y-gap="10">
      <q-grid-item :span="2">
        <input
          id="playsinline"
          type="checkbox"
          v-model="state.playsinline"
          @change="updateVideoData()"
        />
        <label for="playsinline">Playsinline</label>
      </q-grid-item>
    </q-grid>
  </q-properties-group>
  <q-properties-group>
    <template #label>Crossorigin:</template>
    <q-grid :cols="2" :x-gap="10" y-gap="10">
      <q-grid-item :span="2">
        <q-select
          v-model="state.crossorigin"
          size="small"
          filled
          :items="Object.values(VideoCrossorigin)"
          @change="updateVideoData()"
        />
      </q-grid-item>
    </q-grid>
  </q-properties-group>
</template>
