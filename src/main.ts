import './styles/app.scss'
import './themes/light.scss'
import './themes/dark.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import VueDragSelect from '@coleqiu/vue-drag-select'

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

app.use(VueDragSelect)
app.use(pinia)
app.use(router)

app.mount('#app')
