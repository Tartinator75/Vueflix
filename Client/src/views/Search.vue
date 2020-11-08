<template>
  <div class="Search Page">
     <Header :Logo="Logo"></Header>
    <div class="Search-Container">
      <SearchGallery :Series="Series" :Categs="Categs"/>
    </div>
  </div>
</template>

<script>
import SerieApi from "@/mixins/SerieApi.js";
import Header from "@/components/Header";
import SearchGallery from "@/components/Search/SearchGallery";
export default {
  name: "Search",
  components: {
    SearchGallery,
        Header
  },
    data: function() {
    return {
      Series: [],
      Categs:[]
    };
  },
   created() {
    localStorage.setItem(
      "token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluQGFkbWluLmFkbWluIiwiYWRtaW4iOnRydWUsImlhdCI6MTYwNDgzNTEyNCwiZXhwIjoxNjA0OTIxNTI0fQ.qJzjxf_lFIeguBqG0fE5C0HursPE8ISDVxeqKQSMPYI"
    );
    this.GetSeries()
      .then((data) => {
        this.Series = data;
         this.Series.forEach((Serie) => {
          console.log(Serie);
        Serie.Categorie.forEach((Categorie) => {
          if (!this.Categs.includes(Categorie)) this.Categs.push(Categorie);
        });
      });
      })
      .catch((err) => console.log(err));
  },
   mixins: [SerieApi],
};
</script>

<style>
.Search{
  
}
.Search-Container{
  width: 80%;
  margin: auto;
}
.Search.Page {
  background: #141414;
}
</style>
