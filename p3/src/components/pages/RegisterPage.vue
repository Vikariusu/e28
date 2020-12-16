<template>
  <div>
    <h2>Join our cooking-obsessed community</h2>
    <form>
      <div>
        <label>Name</label>
        <input type="text" v-model="name" />
      </div>
      <div>
        <label>Email</label>
        <input type="email" v-model="email" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" v-model="password" />
      </div>
      <button @click="register" class="btn-submit">Register</button>
    </form>
  </div>
</template>

<script>
import { axios } from "@/app.js";

export default {
  name: "",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      axios
        .post("register", {
          email: this.email,
          password: this.password,
          name: this.name,
        })
        .then((response) => {
          if (response.data.success) {
            this.$store.commit("setUser", response.data.user);
            this.$router.push("/");
          }
        });
    },
  },
};
</script>
<style></style>
