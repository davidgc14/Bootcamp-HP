import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About1View from '../views/About1View.vue'
import About2View from '../views/About2View.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about1',
    name: 'about1',
    component: About1View
  },
  {
    path: '/about2',
    name: 'about2',
    component: About2View
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
