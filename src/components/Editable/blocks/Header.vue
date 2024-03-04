<template>
  <component :is="`h${data.level}`" v-html="data.text" />
</template>

<script>
export default {
  name: "QHeader",
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss"></style>
