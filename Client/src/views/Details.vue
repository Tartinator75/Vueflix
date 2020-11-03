<template>
  <div class="Details Page">
    <div
      class="Background"
      :style="`background:center / cover no-repeat url(${Item.Content[0][0]});`"
    ></div>
    <div class="top">
      <div class="Logo"><img :src="Item.Logo" /></div>
      <div class="Back" @click="$router.go(-1)"></div>
    </div>
    <div class="Content">
      <div class="Navigation">
        <div class="active" v-on:click="navigation" data-nav="About">About</div>
        <div data-nav="Trailer" v-on:click="navigation">Trailer</div>
        <div data-nav="Cast" v-on:click="navigation">Cast</div>
        <div data-nav="Watch" v-on:click="navigation">Watch</div>
      </div>
      <transition
        v-on:enter="CastEnter"
        v-on:leave="CastLeave"
       :duration="{ enter: 1400, leave: 1500 }">
        <Cast v-if="show == 'Cast'" :show="show" :Cast="Item.Cast" />
      </transition>
      <transition
        v-on:enter="AboutEnter"
        v-on:leave="AboutLeave"
        :duration="{ enter: 1400, leave: 1500 }"
      >
        <About v-if="show == 'About'" :Item="Item" />
      </transition>
    </div>
  </div>
</template>

<script>
import SerieApi from "@/mixins/SerieApi.js";
import Cast from "@/components/Details/Cast";
import About from "@/components/Details/About";
import gsap from "gsap";
export default {
  name: "Details",
  data() {
    return {
      Item: {},
      show: "About",
    };
  },
  components: {
    Cast,
    About,
  },
  created() {
    localStorage.setItem(
      "token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluQGFkbWluLmFkbWluIiwiYWRtaW4iOnRydWUsImlhdCI6MTYwNDM5Njk4MCwiZXhwIjoxNjA0NDgzMzgwfQ.t-jBRt7reAYQlSm7wFEweOFLFBpIRHZ29VJM9I5lad0"
    );
    this.GetSeriesDetail(this.$route.params.id)
      .then((data) => {
        this.Item = data;
      })
      .catch((err) => console.log(err));
    NavEnter();
  },
  methods: {
    navigation(e) {
      let where = e.target.dataset.nav;
      document
        .querySelector(".Navigation div.active")
        .classList.remove("active");
      e.target.classList.add("active");
      this.show = where;
    },
    NavEnter() {
      gsap.fromTo(
        ".Navigation div",
        { x: -250 },
        { x: 0, duration: 1, ease: [0.6, 0.01, -0.05, 0.9], stagger: 0.3 }
      );
    },
    AboutEnter() {
      gsap.fromTo(
        ".About div div",
        { y: 250 },
        { y: 0, duration: 1, ease: [0.6, 0.01, -0.05, 0.9], stagger: 0.1 }
      );
    },
    AboutLeave() {
      gsap.to(".About div div", {
        y: 250,
        duration: 1,
        ease: [0.6, 0.01, -0.05, 0.9],
        stagger: 0.1,
      });
    },
    CastEnter() {
      gsap.from(
        ".Cast .OpenBtn",
        { x: -500 },
      );
      gsap.fromTo(
        ".Cast .List",
        { x: -500 },
        {
          x: 0,
          duration: 1.4,
          ease: [0.6, 0.01, -0.05, 0.9],
          onComplete: function() {},
        }
      );
    },
    CastLeave() {
     gsap.to(
        ".Cast .List",
        {
          x: -500,
          duration: 1.4,
          ease: [0.6, 0.01, -0.05, 0.9],
          onComplete: function() {},
        }
      );
       gsap.to(
        ".Cast .OpenBtn",
        {
          x: -500,
          duration: 1.4,
          ease: [0.6, 0.01, -0.05, 0.9],
          onComplete: function() {},
        }
      );
      gsap.to(
        ".Cast .Affichage .Name",
        {
          x: -500,
          duration: 1.4,
          ease: [0.6, 0.01, -0.05, 0.9],
        }
      );
         gsap.to(
        ".Cast .Affichage .Image",
        {
          x: -500,
          duration: 1.4,
          ease: [0.6, 0.01, -0.05, 0.9],
        }
      );
         gsap.to(
        ".Cast .Affichage .Description",
        {
          x: 500,
          duration: 1.4,
          ease: [0.6, 0.01, -0.05, 0.9],
        }
      );
    },
  },

  mixins: [SerieApi],
};
</script>

<style lang="scss">
.Details {
  .Background {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: -1;
    filter: brightness(0.4);
  }
  .top {
    font-family: F001, sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    margin-top: 0;
    line-height: 1;
    width: 100%;
    top: 0;
    left: 0;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .Logo {
      height: 100%;
      width: 10%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 1s ease-in-out;
      &.fading {
        opacity: 0;
      }
      img {
        width: 100%;
      }
    }
  }
  .Content {
    width: 100%;
    position: relative;
    height: 100%;
    .Navigation {
      z-index: 2;
      position: absolute;
      right: 10%;
      top: 10%;
      display: flex;
      flex-direction: column;
      div {
        cursor: pointer;
        font-size: 7em;
        text-align: end;
        color: white;
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: white;
        font-size: f;
        font-family: F001, sans-serif;
        font-weight: 400;
        text-transform: uppercase;
        &.active {
          -webkit-text-fill-color: white;
        }
      }
    }
  }
}

// TRANSITION
</style>
