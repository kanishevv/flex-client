<script setup lang="ts">
import { ref, reactive, computed, useSlots } from 'vue'
import * as Fluent from '@vicons/fluent'

const root = ref<HTMLElement | null>(null)

interface Props {
  expanded?: boolean
  selected?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  expanded: false,
  selected: false,
  disabled: false
})

const state = reactive({
  expanded: props.expanded,
  selected: props.selected,
  disabled: props.disabled
})

const classes = computed(() => {
  const { expanded, selected, disabled } = state

  return [
    {
      'q-tree-item--expanded': expanded,
      'q-tree-item--selected': selected,
      'q-tree-item--disabled': disabled
    }
  ]
})

const slots = useSlots()

/* Methods */
const select = () => {
  console.log('select')

  state.selected = true
}

const toggle = (event) => {
  state.expanded = !state.expanded
}
</script>

<template>
  <div ref="root" class="q-tree-item" :class="classes" @click="(event) => select(event)">
    <div class="q-tree-item__wrap">
      <div class="q-tree-item__indentation"></div>
      <div class="q-tree-item__expand-button" @click="toggle()">
        <slot name=" expand-icon" />
        <slot name="collapse-icon" v-if="slots.children">
          <div class="q-tree-item__expand-chevron">
            <Fluent.ChevronRight24Regular />
          </div>
        </slot>
      </div>
      <div class="q-tree-item__label">
        <slot />
      </div>
    </div>
    <div class="q-tree-item__children" v-show="slots.children && state.expanded">
      <slot name="children" />
    </div>
  </div>
</template>

<style src="./QTreeItem.scss" lang="scss"></style>
