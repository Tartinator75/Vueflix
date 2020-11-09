<template>
  <div class="MyList Page">
    <Header Logo="../assets/netflix-logo.png"></Header>
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
  name: "MyList",
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
      this.MyList.push(id);
      this.EditUser(localStorage.getItem("id"), { MyList: this.MyList });
    },
    RemoveList(id) {
      this.MyList = this.MyList.filter((e) => e !== id);
      this.EditUser(localStorage.getItem("id"), { MyList: this.MyList });
      this.Series = this.Series.filter((e) => e._id !== id);
      
    },
    Init() {
      this.GetUsersDetail(localStorage.getItem("id"))
        .then((data) => {
          this.MyList = data.MyList;
        })
        .catch((err) => console.log(err));

      this.GetSeries()
        .then((data) => {
          data.forEach((Serie) => {
            if (this.MyList.includes(Serie._id)) {
              this.Series.push(Serie);
              Serie.Categorie.forEach((Categorie) => {
                if (!this.Categs.includes(Categorie)) {
                  this.Categs.push(Categorie);
                }
              });
            }
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
.Search {
}
.Search-Container {
  width: 80%;
  margin: auto;
}
.Search.Page {
  background: #141414;
}
</style>
