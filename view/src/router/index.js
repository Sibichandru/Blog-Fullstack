import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/' ,
    alias: '/home',
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
  },
  {
    path:'/AddPost',
    name:'post',
    component:function(){
      return import('../views/AddPost.vue');
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
