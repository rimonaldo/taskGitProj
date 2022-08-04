import { createRouter, createWebHashHistory } from 'vue-router'
import appHeader from '../cmps/app-header.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component:appHeader
    },
  ]
})

export default router
