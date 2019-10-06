import Vue from 'vue'
import App from './App.vue'
import router from './router'
//防止出现Uncaught (in promise) 
import VueRouter from 'vue-router';
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
