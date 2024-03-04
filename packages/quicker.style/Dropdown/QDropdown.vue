<script setup lang="ts">
import { ref, reactive, computed, watch } from 'vue'
import { QPopup } from '../Popup'

const emit = defineEmits(['show', 'hide'])
const panel = ref<HTMLElement | Element | null>([])
const container = ref<HTMLElement | Element | null>(null)

// Props
const props = defineProps({
  open: {
    type: Boolean,
    default: false
  },
  placement: {
    type: String,
    default: 'bottom-start',
    validator: (prop) =>
      [
        'top',
        'top-start',
        'top-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'right',
        'right-start',
        'right-end',
        'left',
        'left-start',
        'left-end'
      ].includes(prop)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  stayOpenOnSelect: {
    type: Boolean,
    default: false
  },
  distance: {
    type: Number,
    default: 0
  },
  skidding: {
    type: Number,
    default: 0
  },
  hoist: {
    type: Boolean,
    default: false
  }
})

// Data
const dropdown = reactive({
  open: props.open
})

// Computed
const classes = computed(() => {
  return [
    {
      'q-dropdown': true,
      'q-dropdown--open': dropdown.open
    }
  ]
})

// Watch
watch(props, (value) => (dropdown.open = value.open))

watch(dropdown, (value) => {
  if (value.open) {
    addOpenListeners()
    emit('show')
  } else {
    removeOpenListeners()
    emit('hide')
  }
})

// Methods
const show = async () => {
  if (dropdown.open) {
    return undefined
  }

  dropdown.open = true
}

const hide = async () => {
  if (!dropdown.open) {
    return undefined
  }

  dropdown.open = false
}

const handlePanelSelect = () => {
  // Hide the dropdown when a menu item is selected
  if (!props.stayOpenOnSelect) {
    hide()
  }
}

const addOpenListeners = () => {
  const menuItems = panel.value.querySelectorAll('.q-menu-item')

  if (menuItems.length > 0) {
    menuItems.forEach((menuItem) => {
      menuItem.addEventListener('click', handlePanelSelect)
    })
  }

  document.addEventListener('keydown', handleDocumentKeyDown)
  document.addEventListener('mousedown', handleDocumentMouseDown)
  document.addEventListener('scroll', handleDocumentMouseDown)
}

const removeOpenListeners = () => {
  const menuItems = panel.value.querySelectorAll('.q-menu-item')

  if (menuItems.length > 0) {
    menuItems.forEach((menuItem) => {
      menuItem.addEventListener('click', handlePanelSelect)
    })
  }

  document.removeEventListener('keydown', handleDocumentKeyDown)
  document.removeEventListener('mousedown', handleDocumentMouseDown)
  document.removeEventListener('scroll', handleDocumentMouseDown)
}

const handleTriggerKeyDown = (event: KeyboardEvent) => {
  // Close when escape or tab is pressed
  if (event.key === 'Escape') {
    hide()
    return
  }
  // When spacebar/enter is pressed, show the panel but don't focus on the menu. This let's the user press the same
  // key again to hide the menu in case they don't want to make a selection.
  if ([' ', 'Enter'].includes(event.key)) {
    event.preventDefault()
    handleTriggerClick()
    return
  }
}

const handleTriggerKeyUp = (event: KeyboardEvent) => {
  if (event.key === ' ') {
    event.preventDefault()
  }
}

const handleDocumentMouseDown = (event: MouseEvent) => {
  // Close when clicking outside of the containing element
  const path = event.composedPath()

  if (container.value && !path.includes(container.value)) {
    hide()
  }
}

const handleDocumentKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Tab' || event.key === 'Escape') {
    // Tabbing within an open menu should close the dropdown and refocus the trigger
    if (dropdown.open) {
      event.preventDefault()
      hide()
      return
    }
  }
}

const handleTriggerClick = () => {
  if (dropdown.open) {
    hide()
  } else {
    show()
  }
}
</script>

<template>
  <div ref="container" class="q-dropdown" :class="classes">
    <q-popup
      :placement="props.placement"
      :distance="props.distance"
      :skidding="skidding"
      :strategy="props.hoist ? 'fixed' : 'absolute'"
      :active="dropdown.open"
      flip
      shift
      auto-size="vertical"
      auto-size-padding="10"
    >
      <template #anchor>
        <div
          class="q-dropdown__trigger"
          @click="handleTriggerClick"
          @keydown="handleTriggerKeyDown"
          @keyup="handleTriggerKeyUp"
        >
          <slot name="trigger"></slot>
        </div>
      </template>
      <transition name="anim">
        <div ref="panel" class="q-dropdown__panel">
          <slot></slot>
        </div>
      </transition>
    </q-popup>
  </div>
</template>

<style src="./QDropdown.scss" lang="scss"></style>
