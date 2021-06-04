<template>
  <router-view
    :user="user"
    :error="error"
    :signIn="handleSignIn"
    :signOut="handleSignOut"
  />
</template>

<script>
import { signIn, signOut } from "./data";
export default {
  name: "App",
  data() {
    return {
      user: null,
      error: null,
    };
  },
  mounted() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      this.user = user;
    } else this.$router.push({ name: "Login" });
  },
  methods: {
    handleSignIn(user) {
      let res = signIn(user);
      if (res.user) {
        this.user = res.user;
        this.$router.push("/")
      } else if (res.error) {
        this.error = res;
      }
      return res;
    },
    handleSignOut() {
      this.user = signOut();
      this.$router.push("/login")
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  padding: 0;
  margin: 0;
}
.page {
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
}
</style>
