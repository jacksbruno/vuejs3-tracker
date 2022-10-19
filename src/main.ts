import { createApp } from 'vue'
import App from './App.vue'

import '@fortawesome/fontawesome-free/css/all.css'
import roteamento from './router/index'

createApp(App)
.use(roteamento)
.mount('#app')
