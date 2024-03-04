<script setup lang="ts">
import { computed, reactive } from 'vue'
import { QDataImage, QDataText, QDataVideo } from './'
import type { IImage, IImageData } from '@/interfaces/IImage'
import type {
  TypeText,
  TypeTextString,
  TypeTextHeader,
  TypeTextParagraph,
  IText
} from '@/interfaces/IText'
import type { IVideo, IVideoData } from '@/interfaces/IVideo'
import cloneDeep from 'lodash/cloneDeep'
import type { IBlock } from '@/interfaces'

const emit = defineEmits(['update:data'])

const props = defineProps<IImage | IVideo | IText>()

const state: IBlock | IImage | IVideo | IText = reactive(cloneDeep(props))

const component = computed(() => {
  switch (state.component) {
    case 'image':
      return QDataImage
    case 'video':
      return QDataVideo
    case 'text':
      return QDataText
    default:
      return null
  }
})

const handleDataUpdate = (
  data: IImageData | IVideoData | TypeText<TypeTextString | TypeTextHeader | TypeTextParagraph>[]
) => {
  state.data = data

  emit('update:data', state)
}
</script>

<template>
  <div class="q-data">
    <component
      v-model="state.data"
      @update:data="
        (
          data:
            | IImageData
            | IVideoData
            | TypeText<TypeTextString | TypeTextHeader | TypeTextParagraph>[]
        ) => handleDataUpdate(data)
      "
      :is="component"
    />
  </div>
</template>

<style lang="scss">
.q-data {
  height: 100%;
  overflow: auto;
}
</style>
