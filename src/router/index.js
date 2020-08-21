import Vue from 'vue'
import VueRouter from 'vue-router'
import Paste from '../views/paste.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'table',
    component: Paste
  },
  {
    path: '/form',
    name: 'form',
    component: () => import('../views/Form.vue')
  },
  {
    path: '/cavans',
    name: 'cavans',
    component: () => import('../views/cavans.vue')
  },
  {
    path: '/voucher',
    name: 'voucher',
    component: () => import('../views/voucher.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
