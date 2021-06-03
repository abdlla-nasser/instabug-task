<template>
  <div class="login-form">
    <div>
      <img :src="instabugIcon" alt="instabug icon" />
      <h1>Login To Instabug</h1>
      <div class="button-group">
        <Button
        class="button-group" v-for="button of buttons" :key="button.alt"
        :text="button.text" 
        :color="button.color" 
        :textColor="button.textColor" 
        :image="{ source: button.source, alt: button.alt }"
        />
      </div>
      <h3><span>OR</span></h3>

    </div>
  </div>
</template>
<script>
import Button from "./Button";
import google from "../assets/pngaaa.com-25555.png"
import microsoft from "../assets/732221.png"
import github from "../assets/GitHub-Mark-Light-120px-plus.png"
import instabugIcon from "../assets/instabug-logo-icon-color.svg"
export default {
  name: "LoginForm",
  components: {
    Button,
  },
  data() {
    return {
      instabugIcon,
      buttons: [
        { source: google, alt: "google icon", text: "Google", color:"#1a9bfc", textColor:"#fff"},
        { source: github, alt: "github icon", text: "Github", color:"#21262d", textColor: "#fff"},
        { source: microsoft, alt: "microsoft icon", text:"Microsoft", color:"#fff", textColor: "#000" },
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.login-form {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-form div {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login-form div img {
  width: 100px;
}
.button-group{
  width: 100%;
  margin-bottom: 20px;
}
h3 {
  width: 80%; 
  text-align: center; 
  border-bottom: 1px solid #000; 
  line-height: 0.1em;
  margin: 10px 0 20px; 
} 

h3 span { 
  background:#fff; 
  padding:0 10px; 
}
</style>