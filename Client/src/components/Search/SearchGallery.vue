<template>
  <div class="SearchGallery">
    <SearchController placeholder="Titre Acteur Année..." />
    <div class="Element-Container">
    <div class="Categs" v-for="(Categ,index) in Categs" :key="index + Categ">
      <h1 v-if="GetSerieCateg(Categ).length > 0">{{ Categ }}</h1>
       <carousel
        :perPageCustom="[[300, 1], [800, 2],[1000, 3]]"
        :mouse-drag="true"
        :spacePadding="20"
        :paginationEnabled="false"
      >
        <slide v-for="(Serie,index) in GetSerieCateg(Categ)" :key="index + Serie.Title">
           <Card :Item="Serie" :InList="CheckList(Serie._id)" :AddList="AddList" :RemoveList="RemoveList"/> 
        </slide> 
      </carousel> 
    </div>
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
    // FUNCTION QUI TRIE LES SERIES PAR RAPPORT A çA CATéGORIE
    GetSerieCateg(categ) {
      var result = [];
      this.Series.forEach((Serie) => {
        if (Serie.Categorie.indexOf(categ) >-1) {
          result.push(Serie);
        }
      });
      return result;
    },
    CheckList(id) { // FUNCTION QUI CHECK SI LA SERIE EST DANS LA LISTE OU PAS
      if (this.MyListx.toString().indexOf(id) > -1 && this.MyListx.length > 0) {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>

<style lang="scss" >
.SearchGallery {
  overflow: auto;
  width: 100%;
  height: 100%;
  & div {
    color: #fff;
  }
  h1 {
    font-family: F001, sans-serif;
    font-weight: 400;
    text-transform: uppercase;
  }
}
@media only screen and (max-width: 906px) {
.Element-Container {
    margin-top: 20%;
  }
}
</style>
