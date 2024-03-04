<script setup lang="ts">
import { reactive } from 'vue'
import type {
  TypeText,
  TypeTextString,
  TypeTextHeader,
  TypeTextParagraph
} from '@/interfaces/IText'
import { QTextHeader, QTextParagraph, QTextString } from '@/components/Blocks/Text'
import cloneDeep from 'lodash/cloneDeep'

interface Props {
  source: TypeText<TypeTextString | TypeTextHeader | TypeTextParagraph>[] | []
}

const props = defineProps<Props>()

const source = reactive(cloneDeep(props.source))

const getType = () => {}

const handleBlur = (event: Event) => {
  const currentTarget: EventTarget | null = event.target

  if (currentTarget && currentTarget.children.length) {
    [...currentTarget.children].forEach((item) => {
      console.log('item', item)
    })
  }
}

const handleMouseUp = (event: Event) => {
  const selection = window.getSelection()

  console.log(selection)
}
</script>

<template>
  <div class="q-editable">
    <div
      class="q-editable__wrap"
      contenteditable="true"
      @blur="(event: Event) => handleBlur(event)"
      @mouseup="(event: Event) => handleMouseUp(event)"
    >
      <template v-for="{ data, type, id } in source" :key="id">
        <q-text-header v-if="type === 'header'" v-bind="data" />
        <q-text-paragraph v-if="type === 'paragraph'" v-bind="data" />
        <q-text-string v-if="type === 'string'" v-bind="data" />
      </template>
    </div>
    <!-- <q-editable-toolbar ref="toolbar" :x="toolbar.x" :y="toolbar.y"></q-editable-toolbar> -->
  </div>
</template>

<style src="./QEditable.scss" lang="scss"></style>
