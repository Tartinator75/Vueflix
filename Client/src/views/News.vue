<template>
  <div class="Home Page">
    <Header :Logo="Logo"></Header> <!--nav bar  -->
    <NewsGallery :Series="Series"></NewsGallery><!-- Slider Principale des nouvelles series -->
    <Upcoming /><!-- gallery de card de series qui vont bientot arriver sur la plateforme -->
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
    // fonction qui permet de récuperer les dernieres series ajoutés
    this.GetSeries()
      .then((data) => {
        var stock = [];
        data.forEach((element) => {
          if (element.Disponible == true) {
            stock.push(element);
          }
        });
        this.Series = stock.slice(Math.max(stock.length - 3, 0));
        this.Logo = this.Series[0].Logo;
      })
      .catch((err) => console.log(err));
  },

  mixins: [SerieApi],
};
</script>

<style></style>
