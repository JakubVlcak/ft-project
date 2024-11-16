import { createMemoryHistory, createRouter } from 'vue-router'

import ScheduleView from '../views/ScheduleView.vue'
import HomeView from '../views/HomeView.vue'
import SubjectsView from '@/views/SubjectsView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/schedule', component: ScheduleView },
  { path: '/subjects', component: SubjectsView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
