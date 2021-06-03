<template>
  <router-view/>
</template>

<script>
import { signIn } from "./data";
export default {
  name: "App",
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
