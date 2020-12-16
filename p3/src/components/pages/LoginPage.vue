<template>
  <div>
    <h2>Hello again!</h2>
    <form class="login-form-wrapper">
      <div>
        <label>Email</label>
        <input type="email" v-model="email" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" v-model="password" />
      </div>
      <button @click="login" class="btn-submit">Log in</button>
    </form>
  </div>
</template>

<script>
import { axios } from "@/app.js";

export default {
  name: "",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      axios
        .post("login", { email: this.email, password: this.password })
        .then((response) => {
          if (response.data.authenticated) {
            // log user in and navigate to home page
            this.$store
              .commit("setUser", response.data.user)
              .then(() => this.$router.push("/"));
          } else {
            console.log("Something went wrong.");
          }
        });
    },
  },
};
</script>
<style>
label {
  display: block;
  margin-bottom: 4px;
}
</style>
