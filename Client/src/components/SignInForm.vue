<template>
  <form action="">
    <div class="form-group">
      <input v-model="Email" type="email" placeholder="Email" />
    </div>
    <div class="form-group">
      <input
       v-model="Password"
        type="password"
        placeholder="Password"
      />
    </div>
    <p class="errorMsg" v-if="errorVisible">account not found</p>
<div class="buttons-form">
    <button @click.prevent="logIn" id="signinBtn">SIGN IN</button>
    <button @click.prevent="navigateToSignUp" id="signupBtn">SIGN UP</button>
</div>

  </form>
</template>

<script>
import AuthApi from "@/mixins/AuthApi.js";
export default {
  name: "SigninForm",
   data() {
    return {
    Email:"admin@admin.admin",
    Password:"admin",
    errorVisible: false,
    }
  },
  methods:{
    logIn: function(){
      const self = this;
      this.Login(this.Email, this.Password)
      .then(function(res){
        if(res.auth == true){
          self.$router.push("/Search");
        }
        else{
          self.errorVisible = true;
        }
      });  
    },
    navigateToSignUp(){
      this.$router.push({ name: "SignUp" });
    }
  },
  mixins: [AuthApi],
};
</script>

<style lang="scss" scoped>
.errorMsg{
  color: #e50914;
  margin: 0 0 2vh 0;
}
.form-group {
  margin: 10vh 0;
}
.form-group > input {
  background: transparent;
  border: 0;
  border-bottom: 1px solid white;
  color: white;
  font-size: 16px;
  width: 25vw;
}
input:focus {
  outline: none;
}
button {
  display: block;
  margin: auto;
  width: 10vw;
  height: 5vh;
  color: white;
  background: #e50914;
  border: 0;
}
.buttons-form{
  display: flex
}
#signupBtn{
  background: rgb(177, 176, 176);
}
  @media  (orientation: portrait) {
    
    form, .form-group, .form-group > input {
    
      width: 100%;
      font-size: 20px;
    }
    .form-group {
    margin: 8vh 0;
    }
    button {
  
    width: 20vw;
    height: 4vh;
    margin: 0 1vw;
  }
  .errorMsg{
  text-align: center;
}
}
</style>
