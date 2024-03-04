<script setup lang="ts">
import { QLayout, QLayoutSidebar } from 'quicker.style'
import { QUserShort } from '@/components/User'
</script>

<template>
  <div class="account">
    <q-layout withSidebar>
      <q-layout-sidebar>
        <q-user-short />
      </q-layout-sidebar>
      <router-view />
    </q-layout>
  </div>
</template>

<style lang="scss">
.account {
  .q-layout {
    height: 100vh;
  }

  .q-layout-sidebar {
    --q-layout-sidebar-border-right: 1px solid var(--q-color-neutral-200);
  }
}
</style>
