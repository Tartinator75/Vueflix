import Vue from 'vue'
import VueRouter from 'vue-router'
import Log from '../views/Log.vue'
import Home from '../views/Home.vue'
import SignIn from '../views/SignIn'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Log',
    component: Log
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/SignIn',
    name: 'SignIn',
    component: SignIn
  },
]

const router = new VueRouter({
  routes
})

export default router
