<template>
<div> 
<Header :Logo="Logo"></Header>
<Gallery></Gallery>
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
      Serie: {},
      Logo: {},
    };
  },
  components: {
    Header,
    Gallery
  },
  methods: {},
  created() {
    localStorage.setItem("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluQGFkbWluLmFkbWluIiwiYWRtaW4iOnRydWUsImlhdCI6MTYwNDI0MjcyOSwiZXhwIjoxNjA0MzI5MTI5fQ.VjZylw8AEgL9PQPTp-Dm_-NBtJj9fZFFe8dYcon7M9k");
    this.GetSeries()
      .then((data) => {
        this.Serie = data[0];
        this.Logo =this.Serie.Logo;
        console.log(this.Serie.Logo);
      })
      .catch((err) => console.log(err));
  },

  mixins: [SerieApi],
};
</script>

<style>
body{
 background: black; 
}
  </style>
