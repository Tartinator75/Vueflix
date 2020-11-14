<template>
   <video autoplay loop muted class="LogBackground">
      <source :src="publicPath+Src" type="video/mp4" />
    </video>
</template>

<script>

export default {
  name: "Background",
  data() {
    return {
      publicPath: process.env.VUE_APP_HOST_URL,
    };
  },
  props: {
    Src: { type: String },
  },
};
</script>

<style lang="scss">
.LogBackground{
    height: 100%;
    position: absolute;
    z-index: -1;
    filter: brightness(0.6);
        max-width: 100vw;
}
@media only screen and (max-width: 906px) {
.LogBackground{
        max-width: unset;
}
}
</style>
