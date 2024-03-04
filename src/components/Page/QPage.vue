<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { useAppStore, usePageStore } from '@/stores'
import { getComponentByName } from '@/components'
// import { useDragRect } from '@coleqiu/vue-drag-select"'

const selection = ref([])
const appStore = useAppStore()
const pageStore = usePageStore()
const state = reactive({
  dragged: false,
  start: {
    x: 0,
    y: 0
  },
  end: {
    x: 0,
    y: 0
  },
  figure: {
    w: 100,
    h: 100,
    x: 0,
    y: 0
  }
})

/* Methods */
const start = (event: MouseEvent) => {
  state.dragged = true
  state.start = {
    x: event.clientX,
    y: event.clientY
  }
  state.end = {
    x: event.clientX,
    y: event.clientY
  }

  // addEventListener('mouseup', () => stop())
}

const move = (event: MouseEvent) => {
  if (state.dragged) {
    state.end = {
      x: event.clientX,
      y: event.clientY
    }
  }
}
const stop = () => {
  state.dragged = false

  // removeEventListener('mouseup', () => stop)

  pageStore.createBlock(state.figure)
}

/* Computed */
const maskStyles = computed(() => {
  const { start, end, figure } = state

  figure.w = Math.abs(start.x - end.x)
  figure.h = Math.abs(start.y - end.y)
  figure.x = start.x < end.x ? start.x : start.x - figure.w
  figure.y = start.y < end.y ? start.y : start.y - figure.h

  return [
    {
      position: 'absolute',
      top: '0',
      left: '0',
      boxSizing: 'border-box',
      touchAction: 'none',
      width: `${figure.w}px`,
      height: `${figure.h}px`,
      transform: `translate(${figure.x}px, ${figure.y}px)`
    }
  ]
})

console.log(pageStore.current)
</script>

<template>
  <div class="q-page">
    <div
      class="q-page__blocks"
      @mousedown="(event: MouseEvent) => start(event)"
      @mouseup="stop()"
      @mousemove="(event: MouseEvent) => move(event)"
      @click="() => pageStore.createBlock()"
    >
      <component
        :is="getComponentByName(item.component)"
        v-bind="item"
        v-for="item in pageStore.current?.children"
        :key="item.id"
      />
    </div>
  </div>
</template>

<style lang="scss">
.q-page {
  min-height: 100vh;

  .drag-select {
    min-height: 100vh;
  }
}

.q-page__blocks {
  min-height: 100vh;

  .select {
    background: green;
    opacity: 0.5;
  }
}

.drag-select-option--selected {
  border: 1px solid #27bafd;
}

// position: absolute, box-sizing: border-box; touch-action: none; top: 0; left: 0; transform: translate(x, y); width: 0; height: 0;
</style>
