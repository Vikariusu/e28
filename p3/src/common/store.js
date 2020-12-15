import Vue from 'vue';
import Vuex from 'vuex';
import { axios } from '../app.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favorites: [],
    recipes: [],
    favoriteCount: 0
  },
  mutations: {
    setRecipes(state, payload) {
      state.recipes = payload;
    },
  },
  actions: {
    fetchRecipes(context) {
      axios.get('http://e28-api.wtomaszewska.me/recipe').then((response) => {
        context.commit('setRecipes', response.data.recipe);
      });
    }
  },
  getters: {
    getRecipeById(state) {
      return function (id) {
        return state.recipes.filter((recipe) => {
          return recipe.id == id;
        }, this.id)[0];
      }
    }
  }
});
