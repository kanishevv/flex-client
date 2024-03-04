<script setup lang="ts">
import { computed } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { QAvatar, QDropdown, QButton, QMenu, QMenuItem, QDivider } from 'quicker.style'
import * as Fluent from '@vicons/fluent'
import { useRouter } from 'vue-router'

const router = useRouter()

/* Store */
const authStore = useAuthStore()

/* Computed */
const initials = computed(() => {
  return `${authStore.user?.firstName[0]}${authStore.user?.lastName[0]}`
})

/* Methods */
const logout = () => {
  authStore.logout()

  router.push('/auth/login')
}
</script>

<template>
  <q-dropdown placement="right">
    <template #trigger>
      <q-avatar :initials="initials" style="--size: 34px"> </q-avatar>
      {{ authStore.user?.firstName }}
      {{ authStore.user?.lastName }}
    </template>
    <q-menu style="--menu-border-radius: var(--q-border-radius-large)">
      <div class="q-user-short__content">
        <q-avatar class="q-user-short__avatar" :initials="initials" style="--size: 3em" />
        <div class="q-user-short__title">
          {{ authStore.user?.firstName }}
          {{ authStore.user?.lastName }}
        </div>
        <div class="q-user-short__subtitle">{{ authStore.user.email }}</div>
        <q-button class="q-user-short__btn-view" disabled fill> View Profile </q-button>
      </div>
      <q-divider></q-divider>
      <q-menu-item @click="logout()">Logout</q-menu-item>
    </q-menu>
  </q-dropdown>

  <!-- <div class="q-user-short">
        <q-avatar></q-avatar>
        <div class="q-user-short__name">Viktor Kanishchev</div>
    </div> -->
</template>

<style lang="scss">
.q-user-short__content {
  width: 100%;
  min-width: 240px;
  padding: var(--q-spacing-large) var(--q-spacing-large) var(--q-spacing-3x-small)
    var(--q-spacing-large);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.q-user-short__btn-view {
  width: 100%;
  margin: 0.5rem 0;
}

.q-user-short__title,
.q-user-short__subtitle {
  font-family: var(--q-font-sans);
  font-weight: var(--q-font-weight-normal);
  line-height: var(--q-line-height-normal);
  letter-spacing: var(--q-letter-spacing-normal);
}

.q-user-short__title {
  margin-top: 0.5rem;
  font-size: var(--q-font-size-medium);
  font-weight: var(--q-font-weight-semibold);
  color: var(--q-color-neutral-700);
}

.q-user-short__subtitle {
  font-size: var(--q-font-size-x-small);
  color: var(--q-color-neutral-700);
  color: var(--q-color-neutral-500);
}
</style>
