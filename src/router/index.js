import { createRouter, createWebHashHistory } from 'vue-router'
import taskDetails from '../views/task-deails.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/task',
      component:taskDetails
    },
  ]
})

export default router
