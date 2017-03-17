import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);


import './assets/style.css'
//配置路由

import routes from './router-config.js'
const router=new VueRouter({
	routes,
	mode:'history'
})
//动画
import 'animate.css'

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
