import Vue from 'vue'
import Router from 'vue-router'
import Order from '@/pages/order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/order',
      name: 'Order',
      component: Order
    }
  ]
})
