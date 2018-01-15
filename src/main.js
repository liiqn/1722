// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
<<<<<<< HEAD
=======
import VeeValidate from 'vee-validate'

>>>>>>> 45a18438e00a3686b3ae930a96454ecec91c5f47
import 'assets/css/reset.css'
import 'assets/css/iconfont/iconfont.css'

FastClick.attach(document.body)

Vue.config.productionTip = false
const bus = new Vue()
Vue.prototype.$bus = bus
Vue.use(VeeValidate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
