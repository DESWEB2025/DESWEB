import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Layout from '@/layouts/Layout.vue'

const routes = [
  {
      path: '/',
      name: 'main',
      redirect: {name: 'home'},
      component: Layout,
      children: [
        {
          path: 'home',
          name: 'home', 
          component: HomeView
        },
        {
          path: 'nosotros',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: 'Contacto',
          name: 'contact',
          component: () => import('../views/ContactView.vue')
        },
         {
          path: 'planes',
          name: 'plans',
          component: () => import('../views/PlansView.vue')
        },
         {
          path: 'proyectos',
          name: 'projects',
          component: () => import('../views/ProjectsView.vue')
        },
      ]
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
