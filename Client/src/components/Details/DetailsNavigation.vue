<template>
   <div class="Navigation">
        <div class="active" v-on:click="navigation" data-nav="About">About</div>
        <div data-nav="Trailer" v-on:click="navigation">Trailer</div>
        <div data-nav="Cast" v-on:click="navigation">Cast</div>
        <div data-nav="Watch" v-on:click="navigation">Watch</div>
      </div>
</template>

<script>
export default {
  name: "DetailsNavigation",
  props: {
    navigation: { type: Function },
  },
};
</script>

<style lang="scss">

</style>
