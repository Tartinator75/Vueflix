<template>
  <form action="" @submit.prevent="SignUp">
    <div class="form-group">
      <input v-model="Firstname" type="text"  placeholder="firstname" />
    </div>
    <div class="form-group">
      <input v-model="Lastname" type="text"  placeholder="lastname" />
    </div>
    <div class="form-group">
      <input v-model="Email" type="email" placeholder="Email" />
    </div>
    <div class="form-group">
      <input
       v-model="Password"
        type="password"
        name=""
        placeholder="Password"

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
    Firstname:"test",
    Lastname:"test",
    Email:"test@test.test",
    Password:"test",
    }
  },
  methods:{
    SignUp(){
        let user = {
            "firstname" : this.Firstname,
            "lastname" : this.Lastname,
            "email" : this.Email,
            "password" : this.Password,
            "admin" : false,
        }
         this.Create(user).then((res)=> {
        if (res._id) {
          this.$router.push("/Search");
        } else {
          console.log("non");
        }
      });
    }
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
