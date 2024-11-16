import { createMemoryHistory, createRouter } from 'vue-router'

import ScheduleView from '../views/ScheduleView.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/schedule', component: ScheduleView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
