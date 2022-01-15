import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: () => import('../views/Impressum.vue')
  },
  {
    path: '/privacyPolicy',
    name: 'Datenschutzerklärung',
    component: () => import('../views/PrivacyPolicy.vue')
  },
  {
    path: '/about',
    name: 'Über AZ-Rechner',
    component: () => import('../views/About.vue')
  },
  {
    path: '/settings',
    name: 'Einstellungen',
    component: () => import('../views/Settings.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
