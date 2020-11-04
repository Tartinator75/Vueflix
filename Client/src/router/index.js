import Vue from 'vue'
import VueRouter from 'vue-router'
import Log from '../views/Log.vue'
import Home from '../views/Home.vue'
<<<<<<< HEAD
import SignIn from '../views/SignIn'
=======
import Details from '../views/Details.vue'
>>>>>>> d6ff9a186cb864c0d7490ff7715a09d613eace4c
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
