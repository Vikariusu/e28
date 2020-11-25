<template>
  <div class="favorite-wrapper">
    <div v-if="!favorites.length">
      You haven't added anything to your favorites list yet!
    </div>
    <ul v-for="recipe of favorites" :key="recipe.id">
      <recipe-card :recipe="recipe"></recipe-card>
    </ul>
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
