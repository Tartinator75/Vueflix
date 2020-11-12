<template>
  <div class="SearchGallery">
    <SearchController placeholder="Titre Acteur Année..." />
    <div class="Element-Container">
      <div class="Categs" v-for="(Categ,index) in Categs" :key="index + Categ">
        <h1 v-if="GetSerieCateg(Categ).length > 0">{{ Categ }}</h1>
        <carousel :perPageCustom="[[300, 1], [800, 2],[1000, 3]]" :mouse-drag="true" :spacePadding="20" :paginationEnabled="false">
          <slide v-for="(Serie,index) in GetSerieCateg(Categ)" :key="index + Serie.Title">
            <Card :Item="Serie" :InList="CheckList(Serie._id)" :AddList="AddList" :RemoveList="Type=='' ? RemoveList : RemoveSerieMyList" v-if="Type=='' ? Serie.Disponible : true"/> 
          </slide> 
        </carousel> 
      </div>
     </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import Card from "@/components/Search/Card";
import GetGallery from "@/mixins/GetGallery.js";
import SearchController from "@/components/Search/SearchController";
export default {
  name: "SearchGallery",
  components: {
    Card,
    SearchController,
  },
  props: {
    Type: "",
  },
  mounted(){
    this.Init(this.Type);
  },
  mixins: [GetGallery],
};
</script>

<style lang="scss" >
.SearchGallery {
  width: 100%;
  height: 100%;
  & div {
    color: #fff;
  }
  h1 {
    position: relative;
    font-family: F001, sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    &:before {
    content: "";
    position: absolute;
    left: 15%;
    top: 50%;
    background: white;
    height: 2px;
    width: 50%;
}
  }
}
@media only screen and (max-width: 906px) {
.Element-Container {
    margin-top: 22%;
  }

.SearchGallery h1:before {

    left: 50%;
    top: 50%;
    background: white;
    height: 2px;
    width: 40%;
}
}
</style>
