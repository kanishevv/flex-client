<script setup lang="ts">
import type { IVideo } from '@/interfaces'

defineProps<IVideo>()
</script>

<template>
  <video
    class="q-video"
    :src="data.src"
    :controls="data.controls"
    :width="data.width"
    :height="data.height"
    :autoplay="data.autoplay"
    :loop="data.loop"
    :muted="data.muted"
    :poster="data.poster"
    :preload="data.preload"
    :controlslist="data.controlslist"
    :playsinline="data.playsinline"
    :crossorigin="data.crossorigin"
  ></video>
</template>
