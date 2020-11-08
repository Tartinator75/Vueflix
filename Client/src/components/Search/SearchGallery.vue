<template>
  <div class="SearchGallery">
    <div class="Categs" v-for="Categ in Categs" :key="Categ.id">
      <h1>{{ Categ }}</h1>
      <carousel
        :per-page="3"
        :navigate-to="0"
        :mouse-drag="true"
        :paginationEnabled="false"
        :navigationEnabled="true"
        :spacePadding="20"
      >
        <slide v-bind:key="Serie.id" v-for="Serie in GetSerieCateg(Categ)">
          <Card :Item="Serie" />
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import Card from "@/components/Search/Card";
export default {
  name: "SearchGallery",
  components: {
    Card,
  },
  props: {
    Series: [],
    Categs: [],
  },
  methods: {
    GetSerieCateg(categ) {
      var result = [];
      console.log(this.Series);
      this.Series.forEach((Serie) => {
        if (Serie.Categorie.indexOf(categ) >= 0) {
          result.push(Serie);
        }
      });
      return result;
    },
  },
  mounted() {
    this.GetSerieCateg("Action");
  },
};
</script>

<style lang="scss">
.SearchGallery {
  overflow: auto;
  width: 100%;
  height: 100%;
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 30%));
  grid-gap: 30px; */

  h1 {
    font-family: F001, sans-serif;
    font-weight: 400;
    text-transform: uppercase;
  }
}
</style>
