<script setup lang="ts">
import type { TypeTextParagraph } from '@/interfaces/IText'

defineProps<TypeTextParagraph>()
</script>

<template>
  <p>{{ text }}</p>
</template>
