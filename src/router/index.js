import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'
import ShopDetail from '../views/ShopDetail.vue'
import FeedbackNew from '../views/FeedbackNew.vue'
import FeedbackList from '../views/FeedbackList.vue'
import FeedbackApprove from '../views/FeedbackApprove.vue'

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
  },
  {
    path: '/feedback/new',
    name: 'FeedbackNew',
    component: FeedbackNew
  },
  {
    path: '/feedback',
    name: 'FeedbackList',
    component: FeedbackList
  },
  {
    path: '/feedback/approve',
    name: 'FeedbackApprove',
    component: FeedbackApprove
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
