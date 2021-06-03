<template>
  <div class="button-group">
    <Button
    class="button-group" v-for="button of buttons" :key="button.alt"
    :text="button.text" 
    :color="button.color" 
    :textColor="button.textColor" 
    :image="{ source: button.source, alt: button.alt }"
    />
  </div>
</template>
<script>
import Button from "./Button";
import google from "../assets/pngaaa.com-25555.png"
import microsoft from "../assets/732221.png"
import github from "../assets/GitHub-Mark-Light-120px-plus.png"
export default {
  name: "ButtonsGroup",
  components: {
    Button,
  },
  data() {
    return {
      buttons: [
        { source: google, alt: "google icon", text: "Google", color:"#1a9bfc", textColor:"#fff"},
        { source: github, alt: "github icon", text: "Github", color:"#21262d", textColor: "#fff"},
        { source: microsoft, alt: "microsoft icon", text:"Microsoft", color:"#fff", textColor: "#000" },
      ]
    }
  }
}
</script>
<style scoped>
.button-group{
  width: 100%;
  margin-bottom: 20px;
}
</style>