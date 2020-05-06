import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/pages/home/Home.vue')
const Detail = () => import('@/pages/detail/Detail.vue')

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
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component:Detail
  }
]

export default new Router({
  routes
})
