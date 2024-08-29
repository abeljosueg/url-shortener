import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'urlshortener',
      component: () => import('@/views/URLShortenerView.vue')
    },
    {
      path: '/myurls',
      name: 'myurls',
      component: () => import('@/views/URLClickCounter.vue')
    },
  ]
})

export default router
