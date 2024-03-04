<script setup lang="ts">
import type { TypeTextHeader } from '@/interfaces/IText'

defineProps<TypeTextHeader>()
</script>

<template>
  <component :is="`h${level}`"> {{ text }} </component>
</template>
