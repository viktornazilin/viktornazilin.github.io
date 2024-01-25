import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/project',
    name: 'project',
    component: () => import('../views/ProjectView.vue')
  },
  {
    path: '/project-details',
    name: 'project-details',
    component: () => import('../views/ProjectDetailsView.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/BlogView.vue')
  },
  {
    path: '/blog-details',
    name: 'blog-details',
    component: () => import('../views/BlogDetailsView.vue')
  },
  {
    path: '/:CatchAll(.*)',
    name: 'error',
    component: () => import('../views/404View.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
