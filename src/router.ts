import { createWebHashHistory, createRouter } from 'vue-router'

import HomeView from '@/views/index.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: HomeView },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})