import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'urlshortener',
      component: () => import('@/views/UrlShortenerView.vue')
    },
    {
      path: '/myurls',
      name: 'myurls',
      component: () => import('@/views/MyUrlsView.vue')
    },
  ]
})

export default router
