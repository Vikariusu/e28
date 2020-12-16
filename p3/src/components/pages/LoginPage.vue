<template>
  <div>
    <h2>Hello again!</h2>
    <form class="login-form-wrapper">
        <div>
            <label>Email</label>
            <input type="email" />
        </div>
        <div>
            <label>Password</label>
            <input type="password" />
        </div>
        <button @click="login" class="btn-submit">Log in</button>
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
    login() {
        axios.post("login", {email: this.email, password: this.password}).then((response) => {
            if(response.data.authenticated) {
                // log user in and navigate to home page
            } else {
                console.log("something went wrong")
            }
        })
    }
  }
};
</script>
<style>
label {
    display: block;
    margin-bottom: 4px;
}
</style>