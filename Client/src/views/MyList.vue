<template>
  <div class="MyList Page">
    <Header Logo="/logo-big.png"></Header>
    <div class="Search-Container">
      <SearchGallery type="MyList"/>
    </div>
  </div>
</template>

<script>
import UserApi from "@/mixins/UserApi.js";
import Header from "@/components/Header";
import SearchGallery from "@/components/Search/SearchGallery";
export default {
  name: "MyList",
  components: {
    SearchGallery,
    Header,
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
</style>
