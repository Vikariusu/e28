<template>
  <div>
    <div v-if="currentRecipe" class="recipe-detail-wrapper">
      <div class="column">
        <h2>
          <div @click="toggleFavorite" class="favorite-icon-wrapper">
            <i class="fas favorite-icon fa-heart"></i>
          </div>
          {{ currentRecipe.title }}
        </h2>
        <p>{{ currentRecipe.description }}</p>
        <div>{{ currentRecipe.ingredients }}</div>
      </div>
      <div class="column">
        <img :src="[currentRecipe.imageURL]" />
        <p>Portion for: {{ currentRecipe.portions }}</p>
        <p>Time: {{ currentRecipe.time }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { axios } from "@/app.js";

export default {
  props: ["id", "recipes"],
  data() {
    return {
      currentRecipe: {},
      ingredients: [],
    };
  },
  methods: {
    toggleFavorite(event) {
      console.log(this.currentRecipe);
      event.preventDefault();
      axios
        .put(`http://e28-api.wtomaszewska.me/recipe/${this.currentRecipe.id}`, {
          ...this.currentRecipe,
          isFavorite: this.currentRecipe.isFavorite === "true",
        })
        .then((response) => {
          this.currentRecipe = response.data.recipe;
          console.log(this.currentRecipe);
        });

      console.log("toggled!");
    },
  },
  mounted() {
    axios
      .get(`http://e28-api.wtomaszewska.me/recipe/${this.$route.params.id}`)
      .then((response) => {
        this.currentRecipe = response.data.recipe;
        this.ingredients = response.data.recipe.ingredients.split(",");
      });
  },
  computed: {
    isFavorite() {
      return this.currentRecipe.isFavorite;
    },
    notFound() {
      return this.currentRecipe === null;
    },
  },
};
</script>
<style scoped>
.recipe-detail-wrapper {
  display: flex;
}

.column {
  flex: 1 1;
}

img {
  max-width: 400px;
}

.favorite-icon {
  margin-bottom: 10px;
  cursor: pointer;
  color: red;
  top: 12px;
  right: 12px;
  opacity: 0.75;
  font-size: 20px;
}
</style>
