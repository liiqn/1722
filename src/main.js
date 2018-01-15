// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
<<<<<<< HEAD
import VueAwesomeSwiper from 'vue-awesome-swiper'
=======
<<<<<<< HEAD

=======
>>>>>>> 569af2f3903eae637930f4cccc868bc555513cce
>>>>>>> origin/master
import 'assets/css/reset.css'
import 'assets/css/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'

FastClick.attach(document.body)

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
const bus = new Vue()
Vue.prototype.$bus = bus

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
