<script setup lang="ts">
import { reactive } from 'vue'
import { useAppStore, usePageStore } from '@/stores'
import { ChannelService } from '@/services'
import { useRoute, useRouter } from 'vue-router'
import {
  QLayout,
  QLayoutHeader,
  QLayoutContent,
  QLayoutSidebar,
  QGrid,
  QGridItem,
  QSpace,
  QSpacer,
  QButton,
  QButtonIcon,
  QDropdown,
  QMenu,
  QMenuItem,
  QMenuLabel,
  QDivider
} from 'quicker.style'
import * as Fluent from '@vicons/fluent'
import type { IBlock, IPage, ISite, IText, IVideo } from '@/interfaces'
import { QPage } from '@/components'
import { QLayersPanel } from '@/components/Layers'
import { QProperties } from '@/components/Properties'
import { QData } from '@/components/Data'
import type { IImage } from '@/interfaces/IImage'

const appStore = useAppStore()
const pageStore = usePageStore()
const router = useRouter()
const route = useRoute()
const site: ISite = reactive({
  id: '',
  name: '',
  active: false,
  pages: [],
  created: null,
  updated: null,
  viewed: null
})

const getChannel = () => {
  if (route.params.channelId && typeof route.params.channelId === 'string') {
    ChannelService.view(route.params.channelId).then(
      (response: ISite) => {
        site.id = response.id
        site.name = response.name
        site.active = response.active
        site.pages = response.pages
        site.created = response.created
        site.updated = response.updated
        site.viewed = response.viewed

        if (route.params.pageId && typeof route.params.pageId === 'string') {
          pageStore.setState(route.params.pageId)
        } else {
          const page: IPage | undefined = site.pages.find((page) => page.home)
          // Redirect to Main page
          router.push(`/editor/${site.id}/${page.id}`)
        }
      },
      (error) => {
        console.error(error)
      }
    )
  }
}

getChannel()
</script>

<template>
  <q-layout class="q-site-editor">
    <q-layout-header class="q-site-editor__header">
      <q-grid :cols="12">
        <q-grid-item :span="3">
          <q-dropdown placement="bottom" :distance="5" :skidding="10">
            <template #trigger>
              <q-button-icon :size="18">
                <Fluent.Navigation24Filled />
              </q-button-icon>
            </template>
            <q-menu>
              <q-menu-item>Back to channels</q-menu-item>
              <q-divider />
              <q-menu-label>Page</q-menu-label>
              <q-menu-item>New</q-menu-item>
              <q-menu-item>Save</q-menu-item>
              <q-menu-item>Publish</q-menu-item>
              <q-divider />
              <q-menu-label>Project</q-menu-label>
              <q-menu-item>Pages</q-menu-item>
              <q-menu-item>Settings</q-menu-item>
            </q-menu>
          </q-dropdown>
        </q-grid-item>
        <q-grid-item :span="6">
          <q-space class="q-site-editor__devices" justify="center">
            <q-button-icon :size="18">
              <Fluent.Desktop24Regular />
            </q-button-icon>
            <q-button-icon :size="18">
              <Fluent.Tablet24Regular />
            </q-button-icon>
            <q-button-icon :size="18">
              <Fluent.Phone24Regular />
            </q-button-icon>
          </q-space>
        </q-grid-item>
        <q-grid-item :span="3">
          <q-space class="q-site-editor__actions" :align="'center'" :justify="'end'">
            <q-button size="small" variant="text">Preview</q-button>
            <q-button size="small" variant="primary" @click="pageStore.save()">Save</q-button>
          </q-space>
        </q-grid-item>
      </q-grid>
    </q-layout-header>
    <q-layout withSidebar>
      <q-layout-sidebar class="q-site-editor__toolbar">
        <q-space vertical>
          <q-button-icon :size="18" @click="appStore.selectTool('move')">
            <Fluent.Cursor24Filled v-if="appStore.tools.current === 'move'" />
            <Fluent.Cursor24Regular v-else />
          </q-button-icon>
          <q-button-icon :size="18" @click="appStore.selectTool('block')">
            <Fluent.DocumentHeader24Filled v-if="appStore.tools.current === 'block'" />
            <Fluent.DocumentHeader24Regular v-else />
          </q-button-icon>
          <q-button-icon :size="18" @click="appStore.selectTool('image')">
            <Fluent.Image24Filled v-if="appStore.tools.current === 'image'" />
            <Fluent.Image24Regular v-else />
          </q-button-icon>
          <q-button-icon :size="18" @click="appStore.selectTool('video')">
            <Fluent.VideoClip24Filled v-if="appStore.tools.current === 'video'" />
            <Fluent.VideoClip24Regular v-else />
          </q-button-icon>
          <q-button-icon :size="18" @click="appStore.selectTool('text')">
            <Fluent.TextT24Filled v-if="appStore.tools.current === 'text'" />
            <Fluent.TextT24Regular v-else />
          </q-button-icon>
          <q-spacer />
          <q-button-icon :size="20" @click="appStore.toggleLayersPanel()">
            <Fluent.Layer24Filled v-if="appStore.layers.panel" />
            <Fluent.Layer24Regular v-else />
          </q-button-icon>
        </q-space>
      </q-layout-sidebar>
      <q-layout withSidebar>
        <q-layout-sidebar
          class="q-site-editor__layers"
          position="absolute"
          v-if="appStore.layers.panel"
        >
          <q-layers-panel />
        </q-layout-sidebar>
        <q-layout-content>
          <q-page />
        </q-layout-content>
        <q-layout-sidebar
          class="q-site-editor__parameters"
          position="absolute"
          v-if="pageStore.selected"
        >
          <!-- <q-properties /> -->
          <q-data
            v-bind="pageStore.selected"
            @update:data="
              (updatedSelected: IBlock | IImage | IVideo | IText) =>
                pageStore.updateBlockState(updatedSelected)
            "
          />
          <!-- <q-panel-data /> -->
        </q-layout-sidebar>
      </q-layout>
    </q-layout>
  </q-layout>
</template>

<style lang="scss">
body,
#app {
  height: 100vh;
  overflow: hidden;
}

.q-site-editor {
  --q-layout-header-height: 60px;
  --q-layout-header-background: var(--q-color-neutral-50);
  --q-layout-header-padding: var(--q-spacing-small);
  --q-layout-header-border-color: var(--q-color-neutral-200);
  --q-layout-sidebar-height: calc(100% - var(--q-layout-header-height));
  --q-layout-sidebar-background: var(--q-color-neutral-50);
  --q-layout-sidebar-border-right: 1px solid var(--q-color-neutral-200);

  height: 100%;

  .q-layout {
    height: 100%;
  }
}

.q-site-editor__toolbar {
  .q-button-icon {
    margin: 0.5rem 0;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.q-site-editor__devices,
.q-site-editor__actions {
  .q-button,
  .q-button-icon {
    margin: 0 0.5rem;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.q-site-editor__layers {
  --q-layout-padding: 0;
  width: 300px;
}

.q-site-editor__parameters {
  --q-layout-padding: 0;
  --q-layout-sidebar-right: 0;
  --q-layout-sidebar-border-left: 1px solid var(--q-layout-header-border-color);
  --q-layout-sidebar-border-right: 0;
  width: 320px;
}

.q-layout-content {
  background-image: linear-gradient(45deg, var(--q-color-neutral-300) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, var(--q-color-neutral-300) 75%),
    linear-gradient(45deg, transparent 75%, var(--q-color-neutral-300) 75%),
    linear-gradient(45deg, var(--q-color-neutral-300) 25%, transparent 25%);
  background-size: 20px 20px;
  background-position:
    0px 0px,
    0px 0px,
    -10px -10px,
    10px 10px;
  opacity: 0.5;
  // z-index: -1;
}
</style>
