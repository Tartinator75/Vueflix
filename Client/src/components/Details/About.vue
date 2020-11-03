<template>
  <div  class="About">
    <div class="Description">
      <div>{{ Item.Description }}</div>
    </div>
    <div class="Year">
      <div>{{ Item.Year }}</div>
    </div>
    <!-- <div class="Saison">
      <div>{{ Item.Saison }}</div>
    </div> -->
    <div class="Rate">
      <div>{{ Item.Rate }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  props: {
    Item: Object,
  },
  methods: {

  },
};
</script>

<style lang="scss">
.About {
  z-index: 1;
  .Description {
    overflow: hidden;
    width: 26%;
    font-family: F001, sans-serif;
    font-weight: 400;
    font-size: 1.9em;
    color: white;
    text-transform: uppercase;
    position: absolute;
    left: 10%;
    top: 50%;
  }
  .Saison {
    font-size: 2em;
    font-family: F001, sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    position: absolute;
    left: 10%;
    top: 45%;
    overflow: hidden;
  }
  .Year {
    overflow: hidden;
    font-size: 14em;
    font-family: F001, sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    position: absolute;
    left: 10%;
    color: white;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
    top: 20%;
  }
  .Rate {
    overflow: hidden;
    font-size: 4em;
    font-family: F001, sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    position: absolute;
    left: 24%;
    /* color: black; */
    -webkit-text-fill-color: #0c0902;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: goldenrod;
    top: 20%;
  }
}
</style>
