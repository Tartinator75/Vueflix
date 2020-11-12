<template>
  <div class="Home Page">
    <Header :Logo="Logo"></Header>
    <NewsGallery :Series="Series"></NewsGallery>
    <Upcoming />
  </div>
</template>

<script>
// @ is an alias to /src


import SerieApi from "@/mixins/SerieApi.js";
import Header from "@/components/Header";
import NewsGallery from "@/components/News/NewsGallery";
import Upcoming from "@/components/News/Upcoming";
export default {
  name: "News",

  data: function() {
    return {
      Series: [],
      Logo: "../assets/netflix-logo.png",
    };
  },
  components: {
    Header,
    NewsGallery,
    Upcoming,
  },
  methods: {},
  created() {
    this.GetSeries()
      .then((data) => {
        var stock = [];
        data.forEach((element) => {
          if (element.Disponible == true) {
            stock.push(element);
          }
        });
        this.Series = stock.slice(Math.max(stock.length - 3, 0));
        this.Logo = data[0].Logo;
      })
      .catch((err) => console.log(err));
  },

  mixins: [SerieApi],
};
</script>

<style></style>
