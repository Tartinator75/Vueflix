<template>
  <div class="Home Page">
    <Header :Logo="Logo"></Header>
    <Gallery :Series="Series"></Gallery>
  </div>
</template>

<script>
// @ is an alias to /src

import UserApi from "@/mixins/UserApi.js";
import AuthApi from "@/mixins/AuthApi.js";
import SerieApi from "@/mixins/SerieApi.js";
import Header from "@/components/Header";
import Gallery from "@/components/Gallery";
export default {
  name: "Home",

  data: function() {
    return {
      Series:[],
      Logo: String,
    };
  },
  components: {
    Header,
    Gallery,
  },
  methods: {},
  created() {
    localStorage.setItem(
      "token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluQGFkbWluLmFkbWluIiwiYWRtaW4iOnRydWUsImlhdCI6MTYwNDUwMDQ5MywiZXhwIjoxNjA0NTg2ODkzfQ.1sgtpVEkkLk7ab8UmPO_xTCtS-9wXo_RY5qF0KkarZc"
    );
    this.GetSeries()
      .then((data) => {
        this.Series = data;
        console.log(this.Series);
        this.Logo = data[0].Logo;
      })
      .catch((err) => console.log(err));
  },

  mixins: [SerieApi],
};
</script>

<style>

</style>
