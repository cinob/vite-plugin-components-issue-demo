import { createApp } from 'vue'
import routes from "virtual:generated-pages"
import { createRouter, createWebHistory } from 'vue-router'
import 'vue-global-api'
import App from './App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')
