<template>
  <div class="SearchGallery">
    <SearchController placeholder="Titre Acteur Année..." />
    <div class="Categs" v-for="(Categ,index) in Categs" :key="index + Categ">
      <h1 v-if="GetSerieCateg(Categ).length > 0">{{ Categ }}</h1>
       <carousel
        :per-page="3"
        :mouse-drag="true"
        :spacePadding="20"
      >
        <slide v-for="(Serie,index) in GetSerieCateg(Categ)" :key="index + Serie.Title">
           <Card :Item="Serie" :InList="CheckList(Serie._id)" :AddList="AddList" :RemoveList="RemoveList"/> 
        </slide> 
      </carousel> 
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import Card from "@/components/Search/Card";
import SearchController from "@/components/Search/SearchController";
export default {
  name: "SearchGallery",
  components: {
    Card,
    SearchController,
  },
  props: {
    Series: {type:Array},
    Categs: {type:Array},
    MyListx: {type:Array},
      AddList:{
      type:Function
    },
     RemoveList:{
      type:Function
    }
  },
  methods: {
    GetSerieCateg(categ) {
      var result = [];
      this.Series.forEach((Serie) => {
        if (Serie.Categorie.indexOf(categ) >-1) {
          result.push(Serie);
        }
      });
      return result;
    },
    CheckList(id) {
      if (this.MyListx.toString().indexOf(id) > -1 && this.MyListx.length > 0) {
        return false;
      } else {
        return true;
      }
    },
  },
  mounted(){

    console.log(this.Series);
    console.log(this.Categs);
  }

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
  & div {
    color: #fff;
  }
  h1 {
    font-family: F001, sans-serif;
    font-weight: 400;
    text-transform: uppercase;
  }
}
</style>
