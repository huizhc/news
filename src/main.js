import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import './assets/css/base.css'
import './assets/js/jquery-1.7.2.js'
import './assets/js/font.js'
import 'swiper/dist/css/swiper.css'

import routes from './router.config.js'
import store from './store/'
import axios from 'axios'
import Loading from './components/loading'
import filters from './filters'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))
Vue.use(VueRouter);
Vue.use(Loading);
Vue.use(VueAwesomeSwiper);

Vue.prototype.$http = axios;

axios.interceptors.request.use(config => {
  store.dispatch('showLoading')
  return config;
}, error => {
  return Promise.reject(error);
})

axios.interceptors.response.use(response => {
  store.dispatch('hideLoading')
  return response;
}, error => {
  return Promise.reject(error);
})

const router = new VueRouter({
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
