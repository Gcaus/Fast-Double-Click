import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Records from '../components/Records.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/records',
      name: 'records',
      component: Records
    },
  ]
})

export default router
