import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import App from './App.vue'
import Router from './router'
import Store from './store'
import './style.css'

const PrimeOptions = {
    theme: {
        preset: Aura
    }
}

createApp(App)
.use(PrimeVue, PrimeOptions)
.use(Router)
.use(Store)
.mount('#app')
