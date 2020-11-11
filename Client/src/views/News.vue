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
import Gallery from "@/components/News/Gallery";
export default {
  name: "News",

  data: function() {
    return {
      Series:[],
      Logo: "../assets/netflix-logo.png",
    };
  },
  components: {
    Header,
    Gallery,
  },
  methods: {},
  created() {
    this.GetSeries()
      .then((data) => {
        this.Series = data.slice(0, 3);
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
