<script setup lang="ts">
import type { TypeTextString } from '@/interfaces/IText'

defineProps<TypeTextString>()
</script>

<template>
  {{ text }}
</template>
