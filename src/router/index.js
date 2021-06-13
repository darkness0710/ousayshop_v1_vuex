import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'
import ShopDetail from '../views/ShopDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/shop/:id',
    name: 'ShopDetail',
    component: ShopDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
