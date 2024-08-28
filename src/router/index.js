import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/MainView.vue')
    },
    {
      path: '/myurls',
      name: 'myurls',
      component: () => import('@/views/MyUrlsView.vue')
    },
  ]
})

export default router
