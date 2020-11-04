import Vue from 'vue'
import VueRouter from 'vue-router'
import Log from '../views/Log.vue'
import Home from '../views/Home.vue'
import Details from '../views/Details.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Log',
    component: Log,
    meta: { transitionName: `slide` }
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    meta: { transitionName: `slideD` }
  },
  {
    path: '/Details/:id',
    name: 'Details',
    component: Details,
    meta: { transitionName: `slideD` }
  },
]

const router = new VueRouter({
  routes
})

export default router
