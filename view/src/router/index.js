import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/signup',
    name: 'signup',
    component: function () {
      return import(/* webpackChunkName: "signup" */ '../views/Signup.vue')
    }
  },
  {
    path : '/login',
    name: 'login',
    component:function(){
      return  import('../views/Login.vue');
    }
  },
  {
    path:'/dashboard',
    name:'dashboard',
    component:function(){
      return import('../views/Dashboard.vue');
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
