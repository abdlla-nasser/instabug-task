<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Button text="Log In" color="#00287a" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Button from "@/components/Button.vue";

@Options({
  components: {
    Button,
  },
})
export default class Home extends Vue {}
</script>
