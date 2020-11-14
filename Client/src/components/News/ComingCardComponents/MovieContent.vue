<template>
  <div class="movie-content-header">
    <a href="#">
      <h3 class="movie-title">{{ Title }}</h3>
    </a>
    <div class="vueflix-logo"></div>
  </div>
</template>

<script>
export default {
  name: "MovieContent",
  props: {
    Title: {type:String},
  },
};
</script>

<style>

.movie-content-header,
.movie-info {
  display: table;
  width: 100%;
}
</style>
