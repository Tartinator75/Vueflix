<template>
  <div class="Carousel-container">
    <video id="myVideo" autoplay loop muted frameborder="0" allowfullscreen>
      <source id="source" :src="publicPath + Series[0].Trailer" type="video/mp4" />
    </video>
    <!-- <iframe
      id="myVideo"
      type="text/html"
      data-video="https://www.youtube.com/embed/ZAXA1DV4dtI?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&modestbranding=1&controls=0&showinfo=1&mute=1"
      src="https://www.youtube.com/embed/giYeaKsXnsI?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&modestbranding=1&controls=0&showinfo=1&mute=1"
    ></iframe> -->
    <div id="Carousel">
      <carousel
        :per-page="1"
        :mouse-drag="true"
        :centerMode="true"
        :paginationEnabled="false"
        :perPage="1"
        :spacePadding="20"
        @page-change="BackgroundChange"
      >
        <slide v-for="Serie in Series" :key="Serie.id">
          <SlideContent :Item="Serie" />
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import apiConfigs from "../../configs/api.config";
import SlideContent from "./SlideContent";
export default {
  name: "Gallery",
  data() {
    return {
      publicPath: "http://localhost:8080/",
    };
  },
  props: {
    Series: [],
  },
  components: {
    SlideContent,
  },
  methods: {
    BackgroundChange(e) {
      let el = document.querySelectorAll(".Carousel-Item");
      let Video = el[e].dataset.video;
      let NewLogo = el[e].dataset.logo;

      let Logo = document.querySelector(".Logo");
      var lecteur = document.getElementById("myVideo");

      lecteur.classList.add("fading");
      Logo.classList.add("fading");
      setTimeout(function() {
        var sources = lecteur.getElementsByTagName("source");
        sources[0].src = Video;
        Logo.src = NewLogo;

        lecteur.load();
        lecteur.classList.remove("fading");
        Logo.classList.remove("fading");
      }, 1500);
    },
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
      height: 90vh;
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
</style>
