<template>
  <div
    class="Carousel-Item"
    :data-video="publicPath + Item.Trailer"
    :data-Logo="Item.Logo"
  >
    <div class="Text-Container">
      <h1>{{ Item.Title }}</h1>
      <span>Directed By: {{ Item.Director }}</span>
      <router-link :to="`/Details/${this.Item._id}`">
        <div class="button-container">
          <ShrinkButton Text="More Details" />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import ShrinkButton from "../ShrinkButton";
export default {
  name: "SlideContent",
  data() {
    return {
      publicPath: "http://localhost:8080/",
    };
  },
  props: {
    Item: {},
  },
  components: {
    ShrinkButton,
  },
  methods: {
    Details() {
      this.router.push({ path: `/Details/${this.Item._id}` });
    },
  },
};
</script>

<style>
.button-container {
  margin-top: 30px;
}
</style>
