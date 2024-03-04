<script setup lang="ts">
import { QIcon } from 'quicker.style'
import { Image } from '@vicons/ionicons5'
</script>

<template>
  <div class="not-found">
    <div class="not-found__image">
      <q-icon :size="500">
        <Image />
      </q-icon>
    </div>
    <div class="not-found__container">
      <h1 class="not-found__header">Ooops</h1>
      <h2 class="not-found__subheader">Sorry, the page you're looking for cannot be found</h2>
      <div class="not-found__description">
        <p>
          Visit our <router-link to="/">homepage</router-link> or get
          <router-link to="/help">help</router-link>
        </p>
        <p>Error code: 404</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.not-found {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
}
.not-found__image {
  opacity: 0.05;
  position: absolute;
  left: 0;
}
.not-found__header,
.not-found__subheader {
  margin-bottom: 15px;
}
</style>
