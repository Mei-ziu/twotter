import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserProfile from '../views/UserProfile'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/user/:userId',
    name: 'UserProfile',
    component: UserProfile,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
