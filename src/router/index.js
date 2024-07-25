import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Portefolio from '../views/Portefolio.vue'
import CV from '../views/CV.vue'
import PageErreur from '../views/PageErreur.vue'
import DEC from '../views/DEC.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Portefolio',
      component: Portefolio
    },
    {
      path: '/cv',
      name: 'CV',
      component: CV 
    },
    {
      path: '/DEC',
      name: 'DEC',
      component: DEC 
    },
    {
      path: '/PageErreur',
      name: 'PageErreur',
      component: PageErreur 
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
   {
      path: '/:pathMatch(.*)*',
      component: PageErreur,
    },
  ]
})

export default router
