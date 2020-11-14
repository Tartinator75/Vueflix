import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


import MyList from '../views/MyList.vue'
import News from '../views/News.vue'
import Sign from '../views/Sign'
import Details from '../views/Details.vue'
import Search from '../views/Search.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
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
    component: Details,
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
    path: '/Sign',
    name: 'Sign',
    component: Sign,
    meta: { transitionName: `slide` }
  },
]

const router = new VueRouter({
  routes
})

export default router
