<template>
  <router-view :cb="signIn"/>
</template>

<script>
import { signIn } from "./data";
export default {
  name: "App",
  data() {
    return {
      user: null,
      error: null,
      signIn,
    }
  },
  methods: {
    handleLogin(user) {
      let res = signIn(user)
      if(res.error){
        this.error = res
      } else if (res.user) this.user = res.user
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  padding: 0;
  margin: 0;
}
.page{
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
}
</style>
