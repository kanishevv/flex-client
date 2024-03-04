<template>
  <p
    v-if="data"
    v-html="data.text"
    @mouseup="handleMouseUp"
  ></p>
</template>

<script>
export default {
  name: 'QParagraph',
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    handleMouseUp({ x }) {
      const y = this.$el.clientHeight + this.$el.offsetTop;
      this.$emit('update:mouseup', { x, y });
    },
  },
};
</script>

<style lang="scss"></style>
