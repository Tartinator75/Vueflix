<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <div style="display:flex;justify-content: space-around;width:100% ">
      <div>
        <h1 style="color:lightgreen">ALL USER</h1>
        <div class="product_item" v-for="User in UserList" :key="User.id" style="display:flex">
          <h3 style="margin-right:10px">{{ User._id }}</h3>
          <h3>{{ User.firstname }}</h3>
        </div>
      </div>

      <div >
        <h1 style="color:lightgreen">ALL Serie</h1>
        <div class="product_item" v-for="Serie in SerieList" :key="Serie.id" style="display:flex">
          <h3 style="margin-right:10px">{{ Serie._id }}</h3>
          <h3>{{ Serie.Title }}</h3>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import UserApi from "@/mixins/UserApi.js";
import AuthApi from "@/mixins/AuthApi.js";
import SerieApi from "@/mixins/SerieApi.js";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      UserList: [],
      SerieList: [],
    };
  },
  created() {
    this.Login("admin@admin.admin", "admin")
      .then((data) => {
        localStorage.setItem("token", data.token);
        console.log(localStorage.getItem("token"));
      })
      .catch((err) => console.log(err));

    this.GetUsers()
      .then((data) => {
        console.log(data);
        this.UserList = data;
      })
      .catch((err) => console.log(err));

    this.GetSeries()
      .then((data) => {
        console.log(data);
        this.SerieList = data;
      })
      .catch((err) => console.log(err));


        this.RemoveSerie("5f934c4670f3fe11a856b87b")
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  },
  mixins: [AuthApi, UserApi, SerieApi],
};
</script>
