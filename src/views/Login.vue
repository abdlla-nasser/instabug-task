<template>
  <div class="page">
    <login-carousel />
    <login-form :cb="handleLogin" :error="errorObj"/>
  </div>
</template>
<script>
import LoginCarousel from '@/components/LoginCarousel.vue';
import LoginForm from '@/components/LoginForm.vue';
export default {
  name: "Login",
  props: ["user", "error", "signIn"],
  components: {
    LoginCarousel,
    LoginForm,
  },
  data() {
    return {
      errorObj: null,
      userObj: null
    }
  },
  methods: {
    handleLogin(user) {
      let res = this.signIn(user);
      if(this.error?.error){
        this.errorObj = this.error
      } else if (this.user?.email) {
        this.userObj = this.user
      }
      return res;
    }
  }
}
</script>
<style lang="scss" scoped>
</style>