<template>
  <form action="" @submit.prevent="logIn">
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
    

    <button>SIGN IN</button>
  </form>
</template>

<script>
import AuthApi from "@/mixins/AuthApi.js";
export default {
  name: "SigninForm",
   data() {
    return {
    Email:"admin@admin.admin",
    Password:"admin"
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
          console.log('non')
        }
      });  
    }
  },
  mixins: [AuthApi],
};
</script>

<style lang="scss" scoped>
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
  width: 20vw;
  height: 5vh;
  color: white;
  background: #e50914;
  border: 0;
}
</style>
