import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/Home')
  },
  {
    path: '/giphy-search',
    name: 'GiphySearch',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/GiphySearch')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
