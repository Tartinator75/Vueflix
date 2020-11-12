import Vue from 'vue'
import VueRouter from 'vue-router'
import Log from '../views/Log.vue'


import MyList from '../views/MyList.vue'
import News from '../views/News.vue'
import SignIn from '../views/SignIn'
import Details2 from '../views/Details.vue'
import Search from '../views/Search.vue'
import SignUp from '../views/SignUp.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Log',
    component: Log,
    meta: { transitionName: `slide` }
  },
  {
    path: '/News',
    name: 'News',
    component: News,
    meta: { transitionName: `slideD` }
  },
  {
    path: '/Details/:id',
    name: 'Details',
    component: Details2,
    meta: { transitionName: `slideD` }
  },
  {
    path: '/MyList',
    name: 'MyList',
    component: MyList,
    meta: { transitionName: `slide` }
  },
  {
    path: '/Search',
    name: 'Search',
    component: Search,
    meta: { transitionName: `slide` }
  },
  {
    path: '/Log/SignIn',
    name: 'SignIn',
    component: SignIn,
    meta: { transitionName: `slide` }
  },
  {
    path: '/Log/SignUp',
    name: 'SignUp',
    component: SignUp,
    meta: { transitionName: `slide` }
  },
]

const router = new VueRouter({
  routes
})

export default router
