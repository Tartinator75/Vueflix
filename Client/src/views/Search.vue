<template>
  <div class="MyList Page">
    <Header Logo="/logo-big.png"></Header>
    <div class="Search-Container" v-if="Load">
      <SearchGallery
        :Series="Series"
        :Categs="Categs"
        :MyListx="MyList"
        :AddList="AddList"
        :RemoveList="RemoveList"
      />
    </div>
  </div>
</template>

<script>
import SerieApi from "@/mixins/SerieApi.js";
import UserApi from "@/mixins/UserApi.js";
import Header from "@/components/Header";
import SearchGallery from "@/components/Search/SearchGallery";
export default {
  name: "Search",
  components: {
    SearchGallery,
    Header,
  },
  data: function() {
    return {
      Series: [],
      Categs: [],
      MyList: [],
      Load: false,
    };
  },
  methods: {
    AddList(id) {
      // FUNCTION POUR AJOUTER DES SERIES A LA LISTE DE L'utilisateurs et changer la liste
      this.MyList.push(id);
      this.EditUser(localStorage.getItem("id"), { MyList: this.MyList });
    },
    RemoveList(id) {
      // FUNCTION POUR supprimer DES SERIES A LA LISTE DE L'utilisateurs et changer la liste
      this.MyList = this.MyList.filter((e) => e !== id);
      this.EditUser(localStorage.getItem("id"), { MyList: this.MyList });
    },
    Init() {
      // FUNCTION POUR récupérer la liste de l'utilisateurs
      this.GetUsersDetail(localStorage.getItem("id"))
        .then((data) => {
          this.MyList = data.MyList;
        })
        .catch((err) => console.log(err));
      // FUNCTION POUR récupérer la liste des series et des catgégories présent
      this.GetSeries()
        .then((data) => {
          this.Series = data;
          this.Series.forEach((Serie) => {
            Serie.Categorie.forEach((Categorie) => {
              if (!this.Categs.includes(Categorie)) {
                this.Categs.push(Categorie);
              }
            });
          });
          this.Load = true;
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.Init();
  },
  mixins: [SerieApi, UserApi],
};
</script>

<style>
.Search-Container {
  width: 80%;
  margin: auto;
}
.Search.Page {
  background: #141414;
}
@media only screen and (max-width: 906px) {
.Search-Container {
    width: 90%;
  }
}
</style>
