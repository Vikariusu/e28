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
      class="page-wrapper"
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
      links: ["Add a Recipe", "Login", "Register"],
      paths: {
        "Add a Recipe": "/add",
        Login: "/login",
        Register: "/register",
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

.page-wrapper {
  margin: 20px 40px;
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

.btn-submit {
  background: #33673b;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

input {
  display: block;
  padding: 6px;
  border: 1px solid #aaaaaa;
  border-radius: 4px;
  margin-bottom: 20px;
}
</style>
