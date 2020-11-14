<template>
  <div class="Carousel-container">
    <video id="myVideo" autoplay loop muted frameborder="0" allowfullscreen><!-- Video de background du slider  -->
      <source id="source" :src="publicPath + Series[0].Trailer" type="video/mp4"/>
    </video>
    <NewsCarousel :Series="Series" /><!-- Carousel avec Nom de la serie et boutton vers ses details -->
  </div>
</template>

<script>
import apiConfigs from "../../configs/api.config";
import NewsCarousel from "./NewsGalleryComponents/NewsCarousel";
export default {
  name: "NewsGallery",
  data() {
    return {
      publicPath: process.env.VUE_APP_HOST_URL,
    };
  },
  props: {
    Series: { type: Array },
  },
  components: {
    NewsCarousel,
  },
};
</script>

<style lang="scss">
.VueCarousel-inner {
  padding: 0 !important;
}
.Carousel-container {
  cursor: grab;
  #myVideo {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    transition: all 1.5s ease-in-out;

    &.fading {
      opacity: 0;
    }
  }
  #Carousel {
    z-index: 2;
    font-family: F001, sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    margin-top: 0;
    line-height: 1;
    .Carousel-Item {
      position: relative;
      height: 60vh;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      &:before {
        width: 30vh;
        border: 1px solid white;
        right: 0;
        position: absolute;
        content: "";
      }
      &::after {
        width: 30vh;
        border: 1px solid white;
        left: 0;
        position: absolute;
        content: "";
      }
      .Text-Container {
        margin-right: 3%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        position: relative;
        &:before {
          width: 50vh;
          height: 50vh;
          border: 1px solid white;
          opacity: 0.8;
          border-radius: 100%;
          position: absolute;
          content: "";
        }
        h1 {
          color: white;

          font-weight: 100;
          font-size: 8em;
          transition: all 1.5s ease-in-out;
          transition-delay: 1s;
        }
        span {
          font-size: 1.5em;
          color: white;
          opacity: 0.6;
        }
      }
    }
  }
}
@media only screen and (max-width: 906px) {
  .Carousel-container {
    .Carousel-Item {
      &:before {
        width: 3vh !important;
      }
      &::after {
        width: 3vh !important;
      }
      .Text-Container {
        margin-right: unset !important;
        &:before {
          width: 40vh !important;
          height: 40vh !important;
        }
        h1 {
          font-weight: 100;
          font-size: 3em !important;
        }
        span {
          font-size: 1.5em;
          color: white;
          opacity: 0.6;
        }
      }
    }
  }
}
</style>
