<template>
  <div class="login-form">
    <div class="center">
      <img :src="instabugIcon" alt="instabug icon" />
      <h1>Login To Instabug</h1>
      <buttons-group />
      <h3><span>OR</span></h3>
      <form @submit="handleLogin">
        <label for="workemail">Work Email</label>
        <input required type="email" id="workemail" name="email" placeholder="Work Email" v-model="email" />
        <div class="label-div">
        <label for="password">Password</label>
        <a>Forgot Password?</a>
        </div>
        <input required type="password" id="password" name="password" placeholder="Password" v-model="password" />
        <Button type="submit" text="Log In" color="#00287a" textColor="white" :disabled="disabled"/>
        <div class="label-div">
          <p>don't have an account? <a>Sign Up</a></p>
          <a>Log In via SSO</a>
        </div>
        <div v-if="error && error.message">{{error.message}}</div>
      </form>
    </div>
  </div>
</template>
<script>
import instabugIcon from "../assets/instabug-logo-icon-color.svg"
import Button from './Button.vue';
import ButtonsGroup from './ButtonsGroup.vue';
export default {
  name: "LoginForm",
  components: {
    ButtonsGroup,
    Button,
  },
  props: ["cb", "error"],
  data() {
    return {
      instabugIcon,
      email: "",
      password: "",
      disabled: true,
    }
  },
  updated () {
    if(!this.email || !this.password){
      this.disabled = true
    } else this.disabled = false
  },
  methods: {
    handleLogin(e){
      e.preventDefault();
      this.cb({ email: this.email, password: this.password })
    }
  }
}
</script>
<style lang="scss" scoped>
a {
  color: #1a9bfc;
  cursor: pointer;
}
button:disabled {
  cursor:not-allowed;
}
form {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start!important;
  input {
    width: 100%;
    padding: 5px;
    margin: 10px 0; 
    box-sizing: border-box;
  }
  .label-div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    p {
      margin: 0;
    }
  }
}
.login-form {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .center {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 100px;
    }
  }
}
h3 {
  width: 80%; 
  text-align: center; 
  border-bottom: 1px solid #000; 
  line-height: 0.1em;
  margin: 10px 0 20px; 
  span { 
    background:#fff; 
    padding:0 10px; 
  }
} 
</style>