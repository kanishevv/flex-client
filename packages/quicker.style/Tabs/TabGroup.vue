<template>
  <div class="q-tab-group" :class="mainClasses">
    <div class="q-tab-group__nav-container">
      <div class="q-tab-group__nav">
        <div class="q-tab-group__tabs" ref="list" role="tablist">
          <div class="q-tab-group__indicator" :style="indicator.style"></div>
          <q-tab
            v-for="(tab, i) in tabs"
            :key="i"
            role="tab"
            :aria-controls="tab.hash"
            :aria-selected="tab.isActive"
            :active="tab.isActive"
            :disabled="tab.isDisabled"
            @click="selectTab(tab.hash, $event)"
            v-html="tab.header"
          ></q-tab>
        </div>
        <div class="q-tab-group__action" v-if="$slots.action">
          <slot name="action"></slot>
        </div>
      </div>
    </div>
    <div class="q-tab-group__body">
      <slot />
    </div>
  </div>
</template>

<script>
import QTab from './Tab.vue'
import expiringStorage from './expiringStorage'
import { ref, reactive, provide, onMounted, onUpdated, toRefs } from 'vue'

export default {
  name: 'QTabGroup',
  components: {
    QTab
  },
  props: {
    cacheLifetime: {
      type: Number,
      default: 5
    },
    options: {
      type: Object,
      required: false,
      default: () => ({
        useUrlFragment: true,
        defaultTabHash: null
      })
    },
    type: {
      type: String,
      default: 'default',
      validator: (prop) => ['default', 'segment'].includes(prop)
    },
    placement: {
      type: String,
      default: 'top',
      validator: (prop) => ['top', 'bottom', 'start', 'end'].includes(prop)
    }
  },
  emits: ['changed', 'clicked'],
  computed: {
    mainClasses() {
      let classes = [
        {
          'q-tab-group--top': this.placement === 'top',
          'q-tab-group--bottom': this.placement === 'bottom',
          'q-tab-group--start': this.placement === 'start',
          'q-tab-group--end': this.placement === 'end',
          'q-tab-group--default': this.type === 'default',
          'q-tab-group--segment': this.type === 'segment'
        }
      ]

      return classes
    }
  },
  setup(props, context) {
    const list = ref([])
    const indicator = reactive({
      style: {}
    })

    const state = reactive({
      activeTabHash: '',
      lastActiveTabHash: '',
      tabs: []
    })

    provide('tabsProvider', state)

    provide('addTab', (tab) => {
      state.tabs.push(tab)
    })

    provide('updateTab', (computedId, data) => {
      let tabIndex = state.tabs.findIndex((tab) => tab.computedId === computedId)
      data.isActive = state.tabs[tabIndex].isActive
      state.tabs[tabIndex] = data
    })

    provide('deleteTab', (computedId) => {
      let tabIndex = state.tabs.findIndex((tab) => tab.computedId === computedId)
      state.tabs.splice(tabIndex, 1)
    })

    const selectTab = (selectedTabHash, event) => {
      if (event && !props.options.useUrlFragment) {
        event.preventDefault()
      }

      const selectedTab = findTab(selectedTabHash)

      if (!selectedTab) {
        return
      }

      if (event && selectedTab.isDisabled) {
        event.preventDefault()
        return
      }

      if (state.lastActiveTabHash === selectedTab.hash) {
        context.emit('clicked', { tab: selectedTab })
        return
      }

      state.tabs.forEach((tab) => {
        tab.isActive = tab.hash === selectedTab.hash
      })

      context.emit('changed', { tab: selectedTab })
      state.lastActiveTabHash = state.activeTabHash = selectedTab.hash

      const storageKey = `vue-tabs-component.cache.${window.location.host}${window.location.pathname}`

      expiringStorage.set(storageKey, selectedTab.hash, props.cacheLifetime)
    }

    const findTab = (hash) => {
      return state.tabs.find((tab) => tab.hash === hash)
    }

    const getAllTabs = () => {
      return list.value.getElementsByClassName('q-tab')
    }

    const getCurrentTab = () => {
      return list.value.getElementsByClassName('q-tab--active')[0]
    }

    const updateIndicatorStyles = (currentTab) => {
      if (!currentTab) {
        return
      }

      const allTabs = getAllTabs()
      const width = currentTab.clientWidth
      const height = currentTab.clientHeight
      const precedingTabs = [...allTabs].slice(0, [...allTabs].indexOf(currentTab))
      const offset = precedingTabs.reduce(
        (previous, current) => ({
          left: previous.left + current.clientWidth,
          top: previous.top + current.clientHeight
        }),
        { left: 0, top: 0 }
      )

      switch (props.placement) {
        case 'top':
        case 'bottom':
          indicator.style.width = `${width}px`
          indicator.style.height = props.type === 'segment' ? `${height}px` : 'auto'
          indicator.style.translate = `${offset.left}px`
          break

        case 'start':
        case 'end':
          indicator.style.width = 'auto'
          indicator.style.height = `${height}px`
          indicator.style.translate = `0 ${offset.top}px`
          break
      }
    }

    onUpdated(() => {
      const currentTab = getCurrentTab()

      updateIndicatorStyles(currentTab)
    })

    onMounted(() => {
      if (!state.tabs.length) {
        return
      }

      window.addEventListener('hashchange', () => selectTab(window.location.hash))

      if (findTab(window.location.hash)) {
        selectTab(window.location.hash)
        return
      }

      const storageKey = `vue-tabs-component.cache.${window.location.host}${window.location.pathname}`

      const previousSelectedTabHash = expiringStorage.get(storageKey)

      if (findTab(previousSelectedTabHash)) {
        selectTab(previousSelectedTabHash)
        return
      }

      if (props.options.defaultTabHash && findTab('#' + props.options.defaultTabHash)) {
        selectTab('#' + props.options.defaultTabHash)
        return
      }

      selectTab(state.tabs[0].hash)
    })

    return {
      list,
      indicator,
      ...toRefs(state),
      selectTab,
      findTab
    }
  }
}
</script>

<style src="./TabGroup.scss" lang="scss"></style>
