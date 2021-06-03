<template>
  <div class="page">
    <login-carousel />
    <login-form :cb="cb"/>
  </div>
</template>
<script>
import LoginCarousel from '@/components/LoginCarousel.vue';
import LoginForm from '@/components/LoginForm.vue';
export default {
  name: "Login",
  props: ["cb"],
  components: {
    LoginCarousel,
    LoginForm,
  }
}
</script>
<style lang="scss" scoped>
</style>