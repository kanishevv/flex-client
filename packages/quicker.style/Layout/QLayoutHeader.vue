<template>
  <div class="q-layout-header">
    <slot />
  </div>
</template>

<style lang="scss">
.q-layout-header {
  // --q-layout-header-background: var(--q-layout-header-background);
  // --q-padding: var(--q-layout-header-padding);
  // --q-border: var(--q-layout-header-border);

  width: 100%;
  height: var(--q-layout-header-height);
  border: var(--q-layout-header-border);
  background: var(--q-layout-header-background);
  padding: var(--q-layout-header-padding);
  border-bottom: 1px solid var(--q-layout-header-border-color);
}
</style>
