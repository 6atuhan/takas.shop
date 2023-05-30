import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import router from '/src/router'
import store from '/src/store'

createApp(App).use(router).use(store).mount('#app')
