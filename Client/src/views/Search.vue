<template>
  <div class="MyList Page">
    <Header Logo="/logo-big.png"></Header>
    <div class="Search-Container">
      <SearchGallery Type="" />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Search/Card";
import Header from "@/components/Header";
import SearchGallery from "@/components/Search/SearchGallery";
export default {
  name: "Search",
  components: {
    SearchGallery,
    Header,
    Card,
  },
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
