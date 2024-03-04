<script setup lang="ts">
import { ref } from 'vue'
import { QSelect, QSelectOption, QDropdown, QMenuItem } from 'quicker.style'
// import { QTab, QTabPanel, QTabGroup } from 'quicker.style'
const model = ref('Option 1')
</script>

<template>
  <div class="stage">
    <q-select v-model="model">
      <q-select-option value="Option 1">Option 1</q-select-option>
      <q-select-option value="Option 2">Option 2</q-select-option>
      <q-select-option value="Option 3">Option 3</q-select-option>
      <q-select-option value="Option 4">Option 4</q-select-option>
    </q-select>
    <q-dropdown>
      <template #trigger> Test </template>
      <q-menu-item>Test</q-menu-item>
      <q-menu-item>Test</q-menu-item>
      <q-menu-item>Test</q-menu-item>
      <q-menu-item>Test</q-menu-item>
      <q-menu-item>Test</q-menu-item>
    </q-dropdown>
  </div>
  <!-- <div class="stage">
        <q-tab>Tab 1</q-tab>
        <q-tab active>Tab 2</q-tab>
        <q-tab closable>Tab 3</q-tab>
        <q-tab disabled>Tab 4</q-tab>

        <q-tab-panel>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, debitis odio. Suscipit, eius dolore placeat,
                ab reiciendis vitae soluta quod qui facere cum recusandae quis et voluptate natus sapiente libero!
            </p>
        </q-tab-panel>

        <q-tab-group>
            <template #action>
                <q-tab name="general">General</q-tab>
                <q-tab name="custom">Custom</q-tab>
                <q-tab name="advanced">Advanced</q-tab>
                <q-tab name="disabled" disabled>Disabled</q-tab>
            </template>

            <q-tab-panel name="general">
                <p>General</p>
            </q-tab-panel>
            <q-tab-panel name="custom">
                <p>Custom</p>
            </q-tab-panel>
            <q-tab-panel name="advanced">
                <p>Advanced</p>
            </q-tab-panel>
            <q-tab-panel name="disabled">
                <p>Disabled</p>
            </q-tab-panel>
        </q-tab-group>
    </div> -->
</template>

<style>
.stage {
  height: 100vh;
  /* display: flex;
    justify-content: center;
    align-items: center; */
  padding: 2rem;
}
</style>
