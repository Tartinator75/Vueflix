<template>
  <div class="card"  :style="`background:center / cover no-repeat url(${Item.Content[0][2]});backdrop-filter: brightness(0.6);`">
    <div class="date">
      {{Item.Year}}
      <span class="tv_ico"
        ><img src="http://www.cartaodental.com/nbase/image/pc.svg"
      /></span>
    </div>
    <div class="content">
      <div class="title">
        {{Item.Title}}
      </div>
      <div class="text">
   Directed By:  {{ Item.Director }}
      </div>
    </div>
    <div class="sinopse">
      <video id="myVideo" @mouseover="HoverCard" @mouseleave="LeaveCard" loop frameborder="0" allowfullscreen>
        <source id="source" :src="Item.Trailer" type="video/mp4" />
      </video>

      <div class="content-sinopse">
        <div class="title">Series Synopsis</div>
        <div class="text">
         {{Item.Description}}
        </div>
      </div>
      <div class="view "><div v-for="Categ in Item.Categorie" :key="Categ.id" >{{Categ}}</div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    Item: {},
  },
  methods: {
    HoverCard(e) {
      e.target.currentTime = 0;
      e.target.play();
    },
    LeaveCard(e) {
      e.target.pause();
    },
  },
};
</script>

<style land="scss" scoped>
.card {
  color: #e3e3e3;
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
.card:hover .sinopse .view {
  opacity: 1;
  transform: translateY(0%);
  transition: 0.6s;
  transition-delay: 1s;
}
.card:hover .sinopse .content-sinopse .text {
    pointer-events: none;
  bottom: 25%;
  transition-delay: 0.6s;
}
.card:hover .sinopse .content-sinopse .title {
  pointer-events: none;
  top: 5%;
  transition-delay: 0.2s;
}
.card:hover .date {
  transform: translateY(-100%);
  opacity: 0;
}
.card:hover .content {
  transform: translateY(100%);
  opacity: 0;
}
.card .date {
  position: absolute;
  top: 25px;
  right: 25px;
  font-weight: 300;
  font-size: 2em;
  transition: 0.8s;
}
.card .date .tv_ico img {
  width: 0.8em;
  vertical-align: baseline;
  margin-left: 6px;
}
.card .content {
  transition: 0.8s;
  display: flex;
  flex-wrap: wrap;
  align-self: flex-end;
     padding: 25px 2px 50px 10px;
}
.card .content .title {
  width: 100%;
  font-size: 5em;
  font-weight: 700;
  line-height: 50px;
  margin-bottom: 12px;
}
.card .content .text {
  width: 100%;
  font-size: 2em;
  font-weight: 300;
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
  position: absolute;
  top: 0;
  width: 100%;
  margin-left: -30px;
  height: 80%;
}
.card .sinopse .view {
  position: absolute;
  bottom: 15px;
  right: 25px;
  font-size: 14px;
  border-bottom: 1px solid #fff;
  opacity: 0;
  transform: translateY(100%);
  transition: 0.6s;
  cursor: pointer;
}
.card .sinopse .content-sinopse .title {
  font-size: 3em;
  font-weight: 700;
  position: absolute;
  top: -10%;
  left: 3%;
  transition: 0.6s;
}
.card .sinopse .content-sinopse .text {
  width: 80%;
  left: 3%;
  bottom: -10%;
  position: absolute;
  transition: 0.6s;
  font-weight: 300;
  font-size: 1em;
  letter-spacing: 1px;
}

</style>
