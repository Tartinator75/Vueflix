import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCarousel from "vue-carousel";
Vue.config.productionTip = false
Vue.use(VueCarousel);
Vue.config.silent = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
