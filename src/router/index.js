import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Roulette from '../views/Roulette.vue'
import Rules from '../views/Rules.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/roulette',
    name: 'Roulette',
    component: Roulette
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/rules',
    name: 'Rules',
    component: Rules
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
