import { createRouter, createWebHashHistory } from 'vue-router'
import taskDetails from '../views/task-details.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/task/:taskId',
      component:taskDetails
    },
  ]
})

export default router
