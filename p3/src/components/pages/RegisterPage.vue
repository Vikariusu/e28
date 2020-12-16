<template>
  <div>
    <h2>Join our cooking-obsessed community</h2>
    <form>
        <div>
            <label>Email</label>
            <input type="email" />
        </div>
        <div>
            <label>Password</label>
            <input type="password" />
        </div>
        <button @click="register" class="btn-submit">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
        email: '',
        password: ''
    };
  },
  methods: {
    register() {

    }
  }
};
</script>
<style>
</style>