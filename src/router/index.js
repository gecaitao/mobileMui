import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/pages/home/Home.vue')

Vue.use(Router)

let routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component:Home
  }
]

export default new Router({
  routes
})
