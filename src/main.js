// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './assets/js/flexible.min.js'
import store from "./store/index.js"
import Vue from 'vue'
import vueResource from 'vue-resource'
import App from './App.vue'
import router from './router/index.js'

Vue.use(vueResource)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
