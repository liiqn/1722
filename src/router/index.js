import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/detail/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index-detail',
      component: Index
    }
    // {
    //   path: '/city',
    //   name: 'Index-city',
    //   component: City
    // },
    // {
    //   path: '/',
    //   name: 'Index-daytrip',
    //   component: Daytrip
    // }
  ]
})
