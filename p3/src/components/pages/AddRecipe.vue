<template>
  <div class="recipe-form">
    <h2>Add a Recipe</h2>
    <div>
      <label for="title">Title</label>
      <input type="text" v-model="recipe.title" id="title" />
    </div>
    <div v-if="errors && 'title' in errors">
      <div
        v-for="(error, i) in errors.title"
        v-bind:key="i"
        class="form-warning"
      >
        {{ error }}
      </div>
    </div>
    <div>
      <label for="description">Description</label>
      <input type="textarea" v-model="recipe.description" id="description" />
    </div>
    <div v-if="errors && 'description' in errors">
      <div
        v-for="(error, i) in errors.description"
        v-bind:key="i"
        class="form-warning"
      >
        {{ error }}
      </div>
    </div>
    <div>
      <label for="imageURL">Image URL</label>
      <input type="textarea" v-model="recipe.imageURL" id="imageURL" />
    </div>
    <div v-if="errors && 'imageURL' in errors">
      <div
        v-for="(error, i) in errors.imageURL"
        v-bind:key="i"
        class="form-warning"
      >
        {{ error }}
      </div>
    </div>
    <div>
      <label for="portions">Portions</label>
      <input type="text" v-model="recipe.portions" id="portions" />
    </div>
    <div v-if="errors && 'portions' in errors">
      <div
        v-for="(error, i) in errors.portions"
        v-bind:key="i"
        class="form-warning"
      >
        {{ error }}
      </div>
    </div>
    <div>
      <label for="time">Time (in minutes)</label>
      <input type="text" v-model="recipe.time" id="time" />
    </div>
    <div v-if="errors && 'time' in errors">
      <div
        v-for="(error, i) in errors.time"
        v-bind:key="i"
        class="form-warning"
      >
        {{ error }}
      </div>
    </div>
    <div>
      <label for="ingredients">Ingredients</label>
      <input type="text" v-model="recipe.ingredients" id="ingredients" />
    </div>
    <div v-if="errors && 'ingredients' in errors">
      <div
        v-for="(error, i) in errors.ingredients"
        v-bind:key="i"
        class="form-warning"
      >
        {{ error }}
      </div>
    </div>

    <button @click="addRecipe" class="btn-submit">Add Recipe</button>
  </div>
</template>

<script>
import { axios } from "@/app.js";
import Validator from "validatorjs";

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
      errors: [],
    };
  },
  methods: {
    addRecipe() {
      if (this.validate()) {
        axios
          .post("http://e28-api.wtomaszewska.me/recipe", this.recipe)
          .then((response) => {
            if (response.data.errors) {
              console.log(response.data.errors);
            } else {
              this.$emit("update-recipes");
            }
          });
      }
    },
    validate() {
      let validator = new Validator(this.recipe, {
        title: "required|between:3,100",
        description: "required|between:8,800",
        imageURL: "url",
        portions: "required:numeric",
        time: "required:numeric",
        ingredients: "required|between:3,400",
      });

      if (validator.fails()) {
        this.errors = validator.errors.all();
      } else {
        this.errors = null;
      }

      return validator.passes();
    },
  },
};
</script>
<style scoped>
label {
  display: block;
  margin-top: 14px;
}

.form-warning {
  color: red;
  margin-top: 4px;
}

.input {
  padding: 10px;
  margin: 100px;
}
</style>
