import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '../Homepage.vue';
import Home from '../Home.vue';
import Login from '../Login.vue';
import Sign from '../Sign.vue';
import Pricing from '../Price.vue'
import Download from '../Download.vue';
const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/sign',
    name: 'Sign',
    component: Sign
  },
  {
    path: '/download',
    name: 'Download',
    component: Download
  },

  {
    path: '/pricing',
    name: 'Pricing',
    component: Pricing
  }
]
const router = createRouter({
    history: createWebHistory(), routes
})
export default router;