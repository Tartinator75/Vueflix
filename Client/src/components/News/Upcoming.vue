<template>
  <div class="Upcoming Page">
    <div class="Search-Container" v-if="Load">
      <h1>Bientôt sur VueFlix</h1>
      <div v-for="Serie in Series" :key="Serie.Title">
        <ComingCard
          :Item="Serie"
          :InList="CheckList(Serie._id)"
          :AddList="AddList"
          :RemoveList="RemoveList"
          v-if="!Serie.Disponible"
        />
      </div>
    </div>
  </div>
</template>

<script>
import GetGallery from "@/mixins/GetGallery.js";
import Header from "@/components/Header";
import ComingCard from "@/components/News/ComingCard";
export default {
  name: "Upcoming",
  components: {
    ComingCard,
    Header,
  },
  mounted() {
    this.Init("");
  },
  mixins: [GetGallery],
};
</script>

<style lang="scss">
.Upcoming {
  background: #141411;
  padding-top: 3vh;
  & .Search-Container h1 {
    color: white;
    font-family: F001, sans-serif;
    font-weight: 400;
    text-transform: uppercase;
  }
}
</style>
