import Vue from 'vue';
import VueRouter from 'vue-router';
import blankPage from '@/layout/blank.vue';
import defaultPage from '@/layout/default.vue';
import ChangeCity from '@/page/changeCity.vue';
import goodsList from '@/page/goodsList.vue';
import Index from '@/page/index.vue';
import Login from '@/page/login.vue';
import Register from '@/page/register.vue';

Vue.use(VueRouter);

const routes = [{
  path: '/',
  name: 'default',
  component: defaultPage,
  redirect: '/index',
  children: [{
    path: 's/:name',
    name: 'goods',
    component: goodsList,
  }, {
    path: '/index',
    name: 'index',
    component: Index,
  }, {
    path: '/changeCity',
    name: 'changeCity',
    component: ChangeCity,
  }],
}, {
  path: '/blank',
  name: 'blank',
  component: blankPage,
  children: [{
    path: 'login',
    name: 'login',
    component: Login,
  }, {
    path: 'register',
    name: 'register',
    component: Register,
  }],
}];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
