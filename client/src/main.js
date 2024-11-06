import {createApp} from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import './styles/style.css'

// router
import router from "./router.js";

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
