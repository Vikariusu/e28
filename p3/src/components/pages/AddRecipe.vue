<template>
  <div class="recipe-from">
    <h2>Add a Recipe</h2>

    <div>
      <label for="title">Title</label>
      <input type="text" v-model="recipe.title" id="title" />
    </div>
    <div>
      <label for="description">Description</label>
      <input type="textarea" v-model="recipe.description" id="description" />
    </div>
    <div>
      <label for="imageURL">Image URL</label>
      <input type="textarea" v-model="recipe.imageURL" id="imageURL" />
    </div>
    <div>
      <label for="portions">Portions</label>
      <input type="text" v-model="recipe.portions" id="portions" />
    </div>
    <div>
      <label for="time">Time (in minutes)</label>
      <input type="text" v-model="recipe.time" id="time" />
    </div>
    <div>
      <label for="ingredients">Ingredients</label>
      <input type="text" v-model="recipe.ingredients" id="ingredients" />
    </div>

    <button @click="addRecipe">Add Recipe</button>
  </div>
</template>

<script>
import { axios } from "@/app.js";

export default {
  data() {
    return {
      recipe: {
        title: "",
        description: "",
        imageURL: "",
        portions: null,
        time: null,
        ingredients: "",
      },
    };
  },
  methods: {
    addRecipe() {
      console.log("adding");
      axios
        .post("http://e28-api.wtomaszewska.me/recipe", this.recipe)
        .then((response) => {
          if (response.data.errors) {
            console.log(response.data.errors);
          } else {
            this.$emit("update-recipes");
          }
        });
    },
  },
};
</script>
<style scoped>
label {
  display: block;
  width: 80px;
}

.recipe-form div {
  margin: 14px;
}
</style>
