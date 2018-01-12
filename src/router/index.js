import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import City from '@/pages/city'
=======
import Index from '@/pages/detail/index.vue'
>>>>>>> 3c80ba7a107f8394998f8405ee96683e31adfee3

Vue.use(Router)

export default new Router({
  routes: [
    {
<<<<<<< HEAD
      path: '/city',
      name: 'City',
      component: City
=======
      path: '/',
      name: 'Index-detail',
      component: Index
>>>>>>> 3c80ba7a107f8394998f8405ee96683e31adfee3
    }
  ]
})
