<template>
  <div class="page">
    <login-carousel />
    <login-form :cb="handleLogin" :error="error"/>
  </div>
</template>
<script>
import LoginCarousel from '@/components/LoginCarousel.vue';
import LoginForm from '@/components/LoginForm.vue';
import { signIn } from "../data";
export default {
  name: "Login",
  props: ["cb"],
  components: {
    LoginCarousel,
    LoginForm,
  },
  data() {
    return {
      user: null,
      error: null,
    }
  },
  methods: {
    handleLogin(user) {
      let res = signIn(user)
      if(res.error){
        this.error = res
      } else if (res.user) {
        this.user = res.user
        this.$router.push("/")
      }
    }
  }
}
</script>
<style lang="scss" scoped>
</style>