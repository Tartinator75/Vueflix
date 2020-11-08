<template>
         <form action="" @submit.prevent="logIn">
                <div class="form-group">
                 
                  <input type="email" name=""  id="" placeholder="Email" :v-model="email">
                </div>
                <div class="form-group">
                  <input type="password" name="" placeholder="Password" id="" :v-model="password">
                </div>
                <h1>{{email}}</h1>
                <h1>{{password}}</h1>
                
                  <button>SIGN IN</button>
          </form>
 
</template>

<script>
import AuthApi from "@/mixins/AuthApi.js";
    export default {
        name: "SigninForm",
        data() {
            return {
                email: "",
                password:"",
            }
        },
        methods: {
            
        },
        computed:{

        },
        mixins: [AuthApi]
    
    }
</script>

<style lang="scss" scoped>
    .form-group{
      margin: 10vh 0;
  }
  .form-group>input{
      background: transparent;
      border: 0;
      border-bottom: 1px solid white;
      color: white;
      font-size: 16px;
      width: 25vw;
  }
  input:focus{
       outline:  none;
  }
  button{
      display: block;
      margin: auto;
      width: 20vw;
      height: 5vh;
      color: white;
      background: #e50914;
      border: 0;
  }
</style>