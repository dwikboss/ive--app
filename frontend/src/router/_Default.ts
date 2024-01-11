import { PageName } from '@/utils/_Constants';
import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';
import Quiz from '../views/Quiz.vue';

const routes = [
  {
    path: '/',
    name: PageName.LOGIN,
    component: Login,
  },
  {
    path: '/home',
    name: PageName.HOME,
    component: Home,
  },
  {
    path: '/quiz/:id',
    name: PageName.QUIZ,
    component: Quiz,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
