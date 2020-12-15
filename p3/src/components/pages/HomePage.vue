<template>
  <div class="recipe-wrapper">
    <router-link
      v-for="(recipe, i) of recipes"
      :key="i"
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
  data() {
    return {};
  },
  computed: {
    recipes() {
      return this.$store.state.recipes;
    },
  },
};
</script>
<style>
.recipe-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>