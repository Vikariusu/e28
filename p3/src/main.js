import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import HomePage from '@/components/pages/HomePage.vue';
import RecipeDetail from '@/components/pages/RecipeDetail.vue';
import AddRecipe from '@/components/pages/AddRecipe.vue';
import FavoriteList from '@/components/pages/FavoriteList.vue';
import LoginPage from '@/components/pages/LoginPage.vue';
import RegisterPage from '@/components/pages/RegisterPage.vue';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import store from '@/common/store';

import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

Vue.use(VueRouter);
Vue.component('font-awesome-icon', FontAwesomeIcon);

const router = new VueRouter({
  routes: [
    { path: '/', component: HomePage },
    { path: '/add', component: AddRecipe },
    { path: '/recipes/:id', component: RecipeDetail, props: true },
    { path: '/favorite', component: FavoriteList },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
  ],
  mode: 'history',
});

new Vue({
  store: store,
  router: router,
  render: (h) => h(App),
}).$mount("#app");
