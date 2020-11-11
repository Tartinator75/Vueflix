<template>
  <div class="MoreInfo">
    <div v-for="Cast in Casts" :key="Cast.id">{{ Cast.name }}</div>
    <div v-for="Categ in Categorie" :key="Categ.id">{{ Categ }}</div>
  </div>
</template>

<script>
export default {
  name: "MoreInfo",
  props: {
    Categorie: { type: Array },
    Casts: { type: Array },
  },
};
</script>

<style>
.MoreInfo {
  display: none;
}
</style>
