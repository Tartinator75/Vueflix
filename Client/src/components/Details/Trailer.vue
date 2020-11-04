<template>
  <div class="Trailer">
    <video
      class="trailer-video"
      autoplay
      controls="true"
      loop
      frameborder="0"
      allowfullscreen
    >
      <source id="source" :src="publicPath + video" type="video/mp4" />
    </video>
  </div>
</template>

<script>
export default {
  name: "Trailer",
  props: {
    video: String,
  },
   data() {
    return {
      publicPath: "http://localhost:8080/",
    };
  },
  methods: {},
};
</script>

<style lang="scss">

  .Trailer {
       overflow: hidden;
    width: 50%;
    font-family: F001, sans-serif;
    font-weight: 400;
    font-size: 1.9em;
    color: white;
    text-transform: uppercase;
    position: absolute;
    left: 12%;
    top: 10%;
    height: 54vh;
    video{
        width: 100%;
        height: 100%;
    }
  }

</style>
