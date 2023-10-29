import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    alias: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/signup',
    name: 'signup',
    component() {
      return import(/* webpackChunkName: "signup" */ '../views/Signup.vue');
    },
  },
  {
    path: '/login',
    name: 'login',
    component() {
      return import('../views/Login.vue');
    },
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component() {
      return import('../views/Dashboard.vue');
    },
  },
  {
    path: '/AddPost',
    name: 'post',
    component() {
      return import('../views/AddPost.vue');
    },
  },
  {
    path: '/password',
    name: 'password',
    component() {
      return import('../views/Password.vue');
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
