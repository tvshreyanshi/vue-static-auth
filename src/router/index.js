import { createWebHistory, createRouter } from 'vue-router';
import authGaurd from './auth-header';
import LogIn from '../components/Auth/LogIn.vue';
import RegisterUser from '../components/Auth/RegisterUser.vue';

import MainLayout from '../components/Layout/MainLayout.vue';
import DefaultLayout from '../components/Layout/DefaultLayout.vue';
import Home from '../components/Home/HomeVue.vue';

const routes = [
  {
    path: '/home',
    name: 'landing',
    beforeEnter: authGaurd,
    redirect: '/home',
    component: MainLayout,
    children: [
      {
        name: 'Home',
        path: '/home',
        component: Home,
      },
    ],
  },
  {
    name: 'DefaultLayout',
    path: '/',
    component: DefaultLayout,
  },
  {
    name: 'LogIn',
    path: '/login',
    component: LogIn,
  },
  {
    name: 'RegisterUser',
    path: '/register',
    component: RegisterUser,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
