<template>
  <form action="" @submit.prevent="SignUp">
    <div class="form-group">
      <input v-model="Firstname" type="text" name="" id="" placeholder="firstname" />
    </div>
    <div class="form-group">
      <input v-model="Lastname" type="text" name="" id="" placeholder="lastname" />
    </div>
    <div class="form-group">
      <input v-model="Email" type="email" name="" id="" placeholder="Email" />
    </div>
    <div class="form-group">
      <input
       v-model="Password"
        type="password"
        name=""
        placeholder="Password"
        id=""
       
      />
    </div>

    <button>SIGN UP</button>
  </form>
</template>

<script>
import UserApi from "@/mixins/UserApi.js";
export default {
  name: "SignupForm",
   data() {
    return {
    Firstname:"",
    Lastname:"",
    Email:"",
    Password:"",
    admin: false,
    MyList: []
    }
  },
  methods:{
    SignUp: function(){
        let firstname = this.Firstname;
        let lastname = this.Lastname;
        let email = this.Email;
        let password = this.Password;
        let admin = this.admin;
        let myList = this.MyList;
        const self = this;

        let user = {
            'firstname' : firstname,
            'lastname' : lastname,
            'email' : email,
            'password' : password,
            'admin' : admin,
            'MyList': myList
        }
      
         this.Create(user)
         .then(function(res){
           self.$router.push({ name: "SignIn" });
         });
      
    },
  },
  mixins: [UserApi],
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
  padding: 0;
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
