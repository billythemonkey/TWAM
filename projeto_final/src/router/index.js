import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import City from '../views/City.vue'
import CityCompare from '../views/CityCompare.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/city/:id',
    name: 'City',
    component: City,
    props: true
  },
  {
    path: '/citycompare/:id1/:id2',
    name: 'CityCompare',
    component: CityCompare,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
