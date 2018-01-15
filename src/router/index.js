import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import Index from '@/pages/detail/index.vue'
=======
import Order from '@/pages/order'
>>>>>>> 45a18438e00a3686b3ae930a96454ecec91c5f47

Vue.use(Router)

export default new Router({
  routes: [
    {
<<<<<<< HEAD
      path: '/',
      name: 'Index-detail',
      component: Index
=======
      path: '/order',
      name: 'Order',
      component: Order
>>>>>>> 45a18438e00a3686b3ae930a96454ecec91c5f47
    }
  ]
})
