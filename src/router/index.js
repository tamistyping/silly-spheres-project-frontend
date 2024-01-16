import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Explore from '../views/Explore.vue'
import Planets from '../views/Planets.vue'
import SinglePlanet from '../views/SinglePlanet.vue'
import NewPlanet from '../views/Create.vue'
import Login from '../views/Login.vue'

const routes = [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/explore',
      name: 'explore',
      component: Explore
    },
    {
      path: '/create',
      name: 'create',
      component: NewPlanet
    },
    {
      path: '/planetslist/:sun',
      name: 'planets',
      component: Planets
    },
    {
      path: '/planets/:id',
      name: 'singleplanet',
      component: SinglePlanet
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]

const router = createRouter({ history: createWebHistory(), routes })
export default router
