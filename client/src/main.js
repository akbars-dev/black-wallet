import {createApp} from 'vue'
import App from './App.vue'
import './styles/style.css'

// router
import router from "./router.js";


createApp(App).use(router).mount('#app')
