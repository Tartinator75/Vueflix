<template>
  <div class="card" :style="`background:center / cover no-repeat url(${Item.Content[0][2]});backdrop-filter: brightness(0.6);`">
    <Date :Year="Item.Year" />
    <Content :Title="Item.Title" :Director="Item.Director" />
    <div class="sinopse">
      <router-link :to="`/Details/${Item._id}`">
        <video id="myVideo" @mouseover="HoverCard" @mouseleave="LeaveCard" loop frameborder="0" allowfullscreen>
          <source id="source" :src="Item.Trailer" type="video/mp4" />
        </video>
      </router-link>
      <ContentSinopse :InList="InList" :AddList="AddList" :RemoveList="RemoveList" :Description="Item.Description" :Id="Item._id"/>
      <MoreInfo :Categorie="Item.Categorie" :Casts="Item.Cast" />
    </div>
  </div>
</template>

<script>
import MoreInfo from "./CardComponent/MoreInfo";
import Content from "./CardComponent/Content";
import Date from "./CardComponent/Date";
import ContentSinopse from "./CardComponent/ContentSinopse";
import UserApi from "@/mixins/UserApi.js";
export default {
  name: "Card",

  props: {
    Item: { type: Object },
    InList: { type: Boolean },
    AddList: {
      type: Function,
    },
    RemoveList: {
      type: Function,
    },
  },
  components: {
    Date,
    Content,
    ContentSinopse,
    MoreInfo,
  },
  methods: {
    // FUNCTION QUI PLAY LA VIDEO QUAND ON HOVER
    HoverCard(e) {
      e.target.currentTime = 0;
      e.target.play();
    },
    // FUNCTION QUI STOP LA VIDEO QUAND ON HOVER LEAVE
    LeaveCard(e) {
      e.target.pause();
    },
  },

  mixins: [UserApi],
};
</script>

<style lang="scss">
.card {
  font-family: F001, sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  overflow: hidden;
  width: 100%;
  height: 220px;
  background: #fff;
  box-shadow: 1px 22px 44px rgba(0, 0, 0, 0.19);
  transition: 0.6s;
  border-radius: 2px;
  position: relative;
  display: flex;
}

.card:hover {
  transform: translateY(-15px);
  box-shadow: 1px 12px 34px rgba(0, 0, 0, 0.31);
}
.card:hover .sinopse {
  z-index: 2;
  opacity: 1;
  transition-delay: 0.4s;
}

.card .sinopse {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 25px 25px 50px 25px;
  background: rgba(0, 0, 0, 0.78);
  font-weight: 300;
  opacity: 0;
  transition: 0.8s;
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
}
.card .sinopse video {
  cursor: pointer;
  pointer-events: all;
  position: absolute;
  top: 0;
  width: 100%;
  margin-left: -30px;
  height: 80%;
}
</style>
