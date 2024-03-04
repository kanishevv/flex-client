<script setup lang="ts">
import { ref, onMounted } from 'vue'

const root = ref<HTMLElement | Element | null>(null)

const handleUpdate = () => {
  if (root.value) {
    const slottedElements: NodeList = root.value.querySelectorAll('button')

    slottedElements.forEach((button: any, index: number): void => {
      if (button !== null) {
        button.classList.add('q-button-group__button')
        button.classList.toggle('q-button-group__button--first', index === 0)
        button.classList.toggle(
          'q-button-group__button--inner',
          index > 0 && index < slottedElements.length - 1
        )
        button.classList.toggle(
          'q-button-group__button--last',
          index === slottedElements.length - 1
        )
        button.classList.toggle(
          'q-button-group__button--radio',
          button.className.toLowerCase() === '.q-radio-button'
        )
      }
    })
  }
}

onMounted(() => handleUpdate())
</script>

<template>
  <div ref="root" class="q-button-group" @focusout="handleUpdate" @focusin="handleUpdate">
    <slot></slot>
  </div>
</template>

<style src="./QButtonGroup.scss" lang="scss"></style>
