import { createWebHistory, createRouter } from 'vue-router';
import LogIn from '../components/Auth/LogIn.vue';
import RegisterUser from '../components/Auth/RegisterUser.vue';

const routes = [
  {
    name: 'LogIn',
    path: '/',
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
