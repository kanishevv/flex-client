<template>
  <div class="q-tab" :class="mainClasses">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'QTab',
  props: {
    active: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    mainClasses() {
      const classes = [
        {
          'q-tab--active': this.active,
          'q-tab--closable': this.closable,
          'q-tab--disabled': this.disabled
        }
      ]

      return classes
    }
  }
}
</script>

<style src="./Tab.scss" lang="scss"></style>
