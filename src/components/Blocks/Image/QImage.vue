<script setup lang="ts">
import type { IImage } from '@/interfaces/IImage'

defineProps<IImage>()

</script>

<template>
  <img
    :id="data.id"
    :src="data.src"
    :alt="data.alt"
    :title="data.title"
    :lazy="data.loading"
  />
</template>
