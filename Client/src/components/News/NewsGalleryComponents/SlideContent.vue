<template>
  <div class="Carousel-Item" :data-video="publicPath + Item.Trailer" :data-Logo="Item.Logo">
    <div class="Text-Container">
      <h1>{{ Item.Title }}</h1>
      <span>Directed By: {{ Item.Director }}</span>
      <router-link :to="`/Details/${this.Item._id}`"><!-- route vers le details de la serie  -->
        <div class="button-container"><!-- container permettant de placer le boutton  -->
          <ShrinkButton Text="More Details" /><!-- Composant boutton  -->
        </div>
      </router-link>
    </div>
  </div>
</template>

<script >
import ShrinkButton from "@/components/ShrinkButton";
export default {
  name: "SlideContent",
  data() {
    return {
      publicPath: process.env.VUE_APP_API_URL,
    };
  },
  props: {
    Item: {type:Object},
  },
  components: {
    ShrinkButton,
  },
  methods: {
    // Details() {
    //   this.router.push({ path: `/Details/${this.Item._id}` });
    // },
  },
};
</script>

<style >
.button-container {
  margin-top: 30px;
}

element.style {
}

</style>
