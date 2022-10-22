import { createApp } from 'vue'
import App from './App.vue'

import '@fortawesome/fontawesome-free/css/all.css'
import roteamento from './router/index'
import { key, store } from './store'

createApp(App)
.use(roteamento)
.use(store, key)
.mount('#app')
