<template>
  <div class="SearchGallery">
    <SearchController placeholder="Titre Acteur Année..." :Searching="SetQuery" /><!-- permet la recherche d'élément en fonction de la liste de -->
    <div class="Element-Container">
      <div class="Categs" v-for="(Categ,index) in Categs" :key="index + Categ"><!-- pour chaque catégories -->
        <h1 v-if="GetSerieCateg(Categ,Type,ResultQuery).length > 0">{{ Categ }}</h1><!-- si il y a 1 serie ayant cette catégories j'affiche le nom de la catégorie sinon je n'affiche pas le nom de la catégorie -->
        <carousel :perPageCustom="[[300, 1], [800, 2],[1000, 3]]" :mouse-drag="true" :spacePadding="20" :paginationEnabled="false">
          <slide  v-for="(Serie,index) in GetSerieCateg(Categ,Type,ResultQuery)" :key="index + Serie.Title" ><!-- pour chaque serie dans cette catégorie je creer une carte d'infos -->
            <Card :Item="Serie" :InList="CheckList(Serie._id)" :AddList="AddList" :RemoveList="Type=='' ? RemoveList : RemoveSerieMyList"/> <!-- card permettant l'ajout d'une serie a la liste de l'utilisateurs et en fonction du Mode de supprimmer son affichage si on l'a supprimer de la liste de l'utilisateurs -->
          </slide> 
        </carousel> 
      </div>
     </div>
  </div>
</template>

<script>// Ce composant permet de gerer la page de recherche et la page de MyListe de l'utilisateurs
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
