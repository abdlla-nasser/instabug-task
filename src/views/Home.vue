<template>
  <div class="home">
    <div>
    <img alt="Vue logo" src="../assets/instabug-logo-icon-color.svg" />
    <h3>Welcome to {{user?.email}}</h3>
    <Button text="Sign Out" color="#00287a" :cb="signOut" />
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  components: {
    Button,
  },
  props: ["user", "signOut"],
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    img {
      margin-top: 20px;
      width: 300px
    }
  }
}
</style>
