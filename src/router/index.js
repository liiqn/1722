import Vue from 'vue'
import Router from 'vue-router'
import Order from '@/pages/order'

import City from '@/pages/city'

import Index from '@/pages/detail/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/order',
      name: 'Order',
      component: Order
    }
    {
      path: '/city',
      name: 'City',
      component: City
    }

    {
      path: '/',
      name: 'Index-detail',
      component: Index
    }
  ]
})
