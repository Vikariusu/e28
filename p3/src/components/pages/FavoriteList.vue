<template>
  <div class="favorite-wrapper">
    <div v-if="!favorites.length">
      You haven't added anything to your favorites list yet!
    </div>
    <div v-if="favorites.length > 0">
      <p>
        You added {{ favorites.length }}
        {{ favorites.length > 1 ? "recipes" : "recipe" }} to your list.
      </p>
      <ul v-for="recipe of favorites" :key="recipe.id">
        <recipe-card :recipe="recipe"></recipe-card>
      </ul>
    </div>
  </div>
</template>

<script>
import RecipeCard from "../RecipeCard.vue";

export default {
  components: { RecipeCard },
  name: "favorite",
  props: ["recipes"],
  recipes: [],
  data() {
    return {};
  },
  computed: {
    favorites() {
      return this.recipes.filter((recipe) => {
        return recipe.isFavorite === "true";
      });
    },
    // favorites() {
    //   return this.$store.state.favorites;
    // },
  },
};
</script>
<style scoped>
.favorite-wrapper {
  display: flex;
  justify-content: center;
  text-align: center;
}
</style>
