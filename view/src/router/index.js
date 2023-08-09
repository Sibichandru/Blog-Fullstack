import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/signup',
    name: 'signup',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Signup.vue')
    }
  },
  {
    path : '/login',
    nmae: 'login',
    component:function(){
      return  import('../views/Login.vue');
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
