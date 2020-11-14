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
    video: {type:String},
  },
   data() {
    return {
      publicPath: "http://localhost:8080/",
    };
  },
};
</script>

<style lang="scss" >

  .Trailer {
    width: 50%;
    position: absolute;
    left: 12%;
    top: 10%;
    video{
        width: 100%;
        height: 100%;
    }
  }
@media only screen and (max-width: 906px) {
  .Trailer{
      overflow: hidden;
    width: 85%;
    position: absolute;
    left: 7%;
    top: 45%;
  }
}


</style>
