<template>
     <div id="Carousel">
      <carousel :mouse-drag="true" :centerMode="false" :paginationEnabled="false" :perPage="1" @page-change="BackgroundChange"><!-- Carousel des que la pages change la video et le logo change -->
        <slide v-for="Serie in Series" :key="Serie.id">
          <SlideContent :Item="Serie" v-if="Serie.Disponible"/><!--  nom et boutton de la serie  -->
        </slide>
      </carousel>
    </div>
</template>

<script>
import SlideContent from "@/components/News/NewsGalleryComponents/SlideContent";
export default {
    name:"NewsCarousel",
     props: {
    Series: { type: Array },
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
      }, 1100);
    },
  },
}
</script>

<style>

</style>