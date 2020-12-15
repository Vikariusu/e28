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
        <p>Description</p>
        <p>{{ currentRecipe.description }}</p>
        <p>Ingredients</p>
        <div>{{ currentRecipe.ingredients }}</div>
      </div>
      <div class="column">
        <img :src="imageSource" />
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
      // currentRecipe: {},
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
  computed: {
    imageSource() {
      return this.currentRecipe.imageURL
        ? this.currentRecipe.imageURL
        : "https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80";
    },
    isFavorite() {
      return this.currentRecipe.isFavorite;
    },
    notFound() {
      return this.currentRecipe === null;
    },
    currentRecipe() {
      console.log(this.$store.getters.getRecipeById(this.id));
      return this.$store.getters.getRecipeById(this.id);
    },
  },
};
</script>
<style scoped>
.recipe-detail-wrapper {
  display: flex;
  margin: 34px 60px 0 60px;
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
