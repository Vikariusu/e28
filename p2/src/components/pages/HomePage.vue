<template>
  <div>
    <router-link
      v-for="recipe of recipes"
      :key="recipe.title"
      v-bind:to="'/recipes/' + recipe.id"
      exact
    >
      <recipe-card :recipe="recipe"></recipe-card>
    </router-link>
  </div>
</template>

<script>
import RecipeCard from "../RecipeCard.vue";

export default {
  components: { RecipeCard },
  name: "",
  props: ["recipes"],
  data() {
    return {};
  },
};
</script>
