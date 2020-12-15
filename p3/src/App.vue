<template>
  <div class="nav-wrapper">
    <nav>
      <router-link to="/">
        <h1>Best cooking recipes</h1>
      </router-link>
      <ul>
        <li>
          <router-link
            v-for="link in links"
            v-bind:key="link"
            v-bind:to="paths[link]"
            style="padding: 10px"
            exact
            >{{ link }}</router-link
          >
        </li>
      </ul>
    </nav>
    <router-view
      v-bind:recipes="recipes"
      v-on:update-recipes="fetchRecipes()"
    ></router-view>
  </div>
</template>

<script>
import { axios } from "@/app.js";

export default {
  name: "App",
  data() {
    return {
      page: "home",
      recipes: [],
      links: ["Add a Recipe", "Favorite Recipes"],
      paths: {
        "Add a Recipe": "/add",
        "Favorite Recipes": "/favorite",
      },
    };
  },
  methods: {
    fetchRecipes() {
      console.log(this.recipes);
      axios.get("http://e28-api.wtomaszewska.me/recipe").then((response) => {
        this.recipes = response.data.recipe;
        console.log(response.data);
      });
    },
  },
  mounted() {
    // this.fetchRecipes();
    this.$store.dispatch("fetchRecipes");
  },
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-family: "Ubuntu", sans-serif;
}

body {
  font-family: "Ubuntu", sans-serif;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a:link {
  text-decoration: inherit;
  color: inherit;
}

a:visited {
  text-decoration: inherit;
  color: inherit;
  cursor: auto;
}

.nav-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.nav-wrapper h1 {
  color: #293241;
  font-family: "Nerko One", cursive;
  font-size: 42px;
  margin: 14px 0;
  text-transform: capitalize;
}

.nav-wrapper h1,
ul {
  text-align: center;
}
</style>
