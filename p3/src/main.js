import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import HomePage from "@/components/pages/HomePage.vue";
import RecipeDetail from "@/components/pages/RecipeDetail.vue";
import AddRecipe from "@/components/pages/AddRecipe.vue";
import FavoriteList from "@/components/pages/FavoriteList.vue";
import LoginPage from "@/components/pages/LoginPage.vue";
import RegisterPage from "@/components/pages/RegisterPage.vue";
import AccessDenied from "@/components/pages/AccessDenied.vue";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import store from "@/common/store";

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

Vue.use(VueRouter);
Vue.component("font-awesome-icon", FontAwesomeIcon);

const router = new VueRouter({
  routes: [
    { path: "/", component: HomePage },
    { path: "/add", component: AddRecipe },
    { path: "/recipes/:id", component: RecipeDetail, props: true },
    {
      path: "/favorite",
      component: FavoriteList,
      meta: {
        requiresAuth: true,
      },
    },
    { path: "/login", component: LoginPage },
    { path: "/register", component: RegisterPage },
    {
      path: "/noaccess",
      component: AccessDenied,
    },
  ],
  mode: "history",
});

// Ref: https://router.vuejs.org/guide/advanced/navigation-guards.html
router.beforeEach(async (to, from, next) => {
  // Ref: https://router.vuejs.org/guide/advanced/meta.html#route-meta-fields
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !store.state.user) {
    // Protected route - display no access page
    next("/noaccess");
  } else {
    // Display the page if the user has access to it
    next();
  }
});

new Vue({
  store: store,
  router: router,
  render: (h) => h(App),
}).$mount("#app");
