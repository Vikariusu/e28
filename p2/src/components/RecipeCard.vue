<template>
  <div class="recipe-card-wrapper">
    <img
      :src="[
        recipe.imageURL
          ? recipe.imageURL
          : `https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80`,
      ]"
    />
    <div>
      <h4>{{ recipe.title }}</h4>
      <p>{{ recipe.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: ["recipe"],
  data: function() {
    return {};
  },
};
</script>

<style scoped>
.recipe-card-wrapper {
  overflow: hidden;
  background: white;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  position: relative;
  padding: 20px;
  width: 400px;
  margin: 20px 40px;
}

.recipe-card-wrapper img {
  height: 200px;
  width: 100%;
  object-fit: cover;
}

p {
  font-size: 12px;
  opacity: 0.7;
  margin: 0;
}

h4 {
  color: #293241;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  margin: 10px 0;
}

.favorite-icon-wrapper {
  pointer-events: none;
}
</style>
