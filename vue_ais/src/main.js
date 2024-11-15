import './assets/main.css'
import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'

import ScheduleView from './views/ScheduleView.vue'
import TheHeader from './components/TheHeader.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: App },
    { path: '/Schedule', component: ScheduleView },
    { path: '/test', component: TheHeader },
  ],
})

const app = createApp(App) // Create the app instance

app.use(router) // Use the router on the app instance

app.mount('#app')
