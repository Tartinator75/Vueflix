<template>
  <div class="movie-card">
    <div class="movie-header"  :style="`background:center / cover no-repeat url(${Item.Cover});backdrop-filter: brightness(0.6);`">
    <ListController :InList="InList" :AddList="AddList" :RemoveList="RemoveList" :Id="Item._id"/><!-- button permettant l'ajout ou la suppression de series dans la liste de l'utilisateur -->
    </div>
    <div class="movie-content">
      <MovieContent :Title="Item.Title"/>
      <div class="movie-info"><!-- Composant D'affichage de titre et de logo  -->
        <InfoSection Title="Year" :Value="Item.Year"/><!-- Composant D'affichage de titre et de valeurs -->
        <InfoSection Title="Rate" :Value="Item.Rate"/>
        <InfoSection Title="Saison" :Value="Item.Saison"/>
        <InfoSection Title="Director" :Value="Item.Director"/>
      </div>
    </div>
  </div>
</template>

<script>
import MovieContent from "@/components/News/ComingCardComponents/MovieContent";
import InfoSection from "@/components/News/ComingCardComponents/InfoSection";
import ListController from "@/components/ListController";
export default {
  name: "ComingCard",
    props: {
    Item: { type: Object },
    InList:false,
    AddList: {
      type: Function,
    },
    RemoveList: {
      type: Function,
    },
  },
    components: {
    ListController,
    MovieContent,
    InfoSection
  },
};
</script>

<style>
.movie-card {
  cursor: pointer;
  background: #141414;
  box-shadow: 0px 6px 18px rgba(255, 255, 255, 0.1);
  width: 100%;
  max-width: 315px;
  color: white;
  margin: 2em;
  border-radius: 10px;
  display: inline-block;
  transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
  font-family: F001, sans-serif;
  font-weight: 400;
  text-transform: uppercase;
}

.movie-header {
  padding: 0;
  margin: 0;
  height: 220px;
  width: 100%;
  display: block;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}



.header-icon-container {
  position: relative;
}

.header-icon {
  position: absolute;
  top: -20px;
  right: 5%;
  color: #ffffff;
  font-size: 5em;

  opacity: 0.85;
  transition: all cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s;
}

.header-icon.add{
 text-shadow: 0px 0px 20px #72ea6a, 0px 5px 20px #6dea6a;
}
.header-icon.remove{
 text-shadow: 0px 0px 20px #72ea6a, 0px 5px 20px #ea6a6a;
}
.movie-card:hover .header-icon {
  font-size: 5.5em;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  opacity: 1;
}

.movie-card:hover {
  -webkit-transform: scale(1.03);
  transform: scale(1.03);
  box-shadow: 0px 10px 25px rgba(255, 255, 255, 0.08);
}

.movie-content {
  padding: 18px 18px 24px 18px;
  margin: 0;
}


.movie-title {
  font-size: 3em;
  margin: 0;
  display: table-cell;
}

.vueflix-logo {
  width: 50px;
  height: 15px;
  background: url("/logo-big.png") no-repeat;
  background-size: contain;
  display: table-cell;
  float: right;
  position: relative;
  margin-top: 15px;
}

.movie-info {
  margin-top: 1em;
}


@media screen and (max-width: 500px) {
  .movie-card {
    width: 95%;
    max-width: 95%;
    margin: 0.5em;
    display: block;
  }

  .container {
    padding: 0;
    margin: 0;
  }
}
</style>
