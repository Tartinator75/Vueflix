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
import GetMyList from "@/mixins/GetMyList.js";
import UserApi from "@/mixins/UserApi.js";
import Header from "@/components/Header";
import SearchGallery from "@/components/Search/SearchGallery";
export default {
  name: "MyList",
  components: {
    SearchGallery,
    Header,
  },

  mixins: [GetMyList],
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
