import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import Order from '@/pages/order'
=======
<<<<<<< HEAD
import City from '@/pages/city'
=======
import Index from '@/pages/detail/index.vue'
>>>>>>> 3c80ba7a107f8394998f8405ee96683e31adfee3
>>>>>>> 569af2f3903eae637930f4cccc868bc555513cce

Vue.use(Router)

export default new Router({
  routes: [
    {
<<<<<<< HEAD
      path: '/order',
      name: 'Order',
      component: Order
=======
<<<<<<< HEAD
      path: '/city',
      name: 'City',
      component: City
=======
      path: '/',
      name: 'Index-detail',
      component: Index
>>>>>>> 3c80ba7a107f8394998f8405ee96683e31adfee3
>>>>>>> 569af2f3903eae637930f4cccc868bc555513cce
    }
  ]
})
