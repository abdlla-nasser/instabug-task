<template>
  <div class="login-form">
    <div class="center">
      <img :src="instabugIcon" alt="instabug icon" />
      <h1>Login To Instabug</h1>
      <buttons-group />
      <h3><span>OR</span></h3>
      <form @submit="handleLogin">
        <div id="error-box" v-if="errorObj?.message">
          {{ errorObj?.message }}
        </div>
        <label for="workemail">Work Email</label>
        <input
          ref="emailInput"
          :class="{ error: emailError?.error }"
          required
          type="email"
          id="email"
          name="email"
          placeholder="Work Email"
          :value="email"
          @change="handleInputChange"
        />
        <p class="error-text" v-if="emailError?.error">
          {{ emailError.message }}
        </p>
        <div class="label-div">
          <label for="password">Password</label>
          <a>Forgot Password?</a>
        </div>
        <!-- this pattern isn't going to work with the provided list of passwords -->
        <!-- pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"  -->
        <!-- pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" -->
        <input
          :class="{ error: formError?.error === 'password' }"
          required
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          :value="password"
          @change="handleInputChange"
        />
        <p class="error-text" v-if="passwordError?.error">
          {{ passwordError.message }}
        </p>
        <Button
          id="submit"
          type="submit"
          text="Log In"
          color="#00287a"
          textColor="white"
          :disabled="disabled"
        />
        <div class="label-div">
          <p>don't have an account? <a>Sign Up</a></p>
          <a>Log In via SSO</a>
        </div>
        <div class="companies">
          <img :src="lyft" />
          <img :src="buzzfeed" />
          <img :src="asana" />
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import instabugIcon from "../assets/instabug-logo-icon-color.svg";
import Button from "./Button.vue";
import ButtonsGroup from "./ButtonsGroup.vue";
import lyft from "../assets/lyft-logo.svg";
import buzzfeed from "../assets/BuzzFeed.svg";
import asana from "../assets/asana-1.svg";
import oneplus from "../assets/oneplus.svg";
import { validateEmail } from "../data";
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
      lyft,
      buzzfeed,
      asana,
      oneplus,
      errorObj: this.error,
      formError: null,
      email: "",
      password: "",
      passwordError: null,
      emailError: null,
      disabled: true,
    };
  },
  updated() {
    console.log(this.disabled)
    // if (this.email && this.password && this.password.length > 6) {
    //   this.disabled = false;
    //   this.passwordError = null;
    //   this.emailError = null;
    // }
  },
  methods: {
    handleInputChange({ target }) {
      const { name, value } = target;
      this[name] = value;
      this.disabled = false;
      if (name === "password") {
        if (value.length < 6) {
          this.passwordError = {
            message: "Password Must Be 6 characters or more",
            error: "password",
          };
          // if (this.email) 
          if (this.password.length >= 8) {
            this.passwordError = null;
          }
        }
      }
      if (name === "email") {
        if (!validateEmail(value)) {
          this.emailError = { message: "Email isn't Valid", error: "email" };
        } else this.emailError = null;
      }
    },
    handleLogin(e) {
      e.preventDefault();
      console.log("clicked");
      let res = this.cb({ email: this.email, password: this.password });
      if (res.error) this.errorObj = res;
    },
  },
};
</script>
<style lang="scss" scoped>
#error-box {
  background-color: rgb(250, 157, 177);
  color: rgb(87, 85, 85);
  padding: 10px;
  border: 1px solid #aaa;
  border-radius: 5px;
}
.error-text {
  color: rgb(214, 38, 70);
}
.companies {
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  img {
    height: 20px;
    width: auto !important;
    margin-right: 10px;
  }
}
a {
  color: #1a9bfc;
  cursor: pointer;
}
button:disabled {
  cursor: not-allowed;
}
form {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start !important;
  input {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    height: 40px;
    border-radius: 5px;
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
.error {
  border-color: rgb(248, 2, 76);
  box-shadow: inset 0 0 4px 0 rgb(255, 0, 68);
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
    background: #fff;
    padding: 0 10px;
  }
}
</style>
