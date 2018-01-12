import Vue from 'vue'
import Router from 'vue-router'
import City from '@/pages/city'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/city',
      name: 'City',
      component: City
    }
  ]
})
