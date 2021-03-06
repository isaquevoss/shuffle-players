import Vue from 'vue'
import VueRouter from 'vue-router'
import Teams from '../views/Teams.vue'
import Players from '../views/Players.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Players',
    component: Players
  },
  {
    path: '/teams',
    name: 'Teams',
    component: Teams
  },
  {
    path: '/players',
    name: 'Players',
    component: Players
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
