import { createWebHistory, createRouter } from 'vue-router'

import ScheduleView from '../views/ScheduleView.vue'
import HomeView from '../views/HomeView.vue'
import SubjectsView from '@/views/SubjectsView.vue'


const routes = [
  { path: '/',  name: 'home', component: HomeView },
  { path: '/schedule', name: 'schedule', component: ScheduleView },
  { path: '/subjects', name: 'subjects', component: SubjectsView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
