<template>
  <div class="Details Page">
    <Header :Logo="Item.Logo" />
    <div class="Background" :style="`background:center / cover no-repeat url(${Item.Content[0][0]});`"></div>
    <div class="Content">
      <DetailsNavigation :navigation="navigation"/><!-- Composant d'affichage de la navigation entre les sections cast trailer about' -->
      <TransiRC :AnimEnter="CastEnter" :AnimLeave="CastLeave" :Affichage="show" :AffichageType="'Cast'"><!-- Composant de transition en fonction de la valeurs d'affichage -->
        <Cast :Cast="Item.Cast" /><!-- Composant d'affichage du cast' -->
      </TransiRC>
       <TransiRC :AnimEnter="TrailerEnter" :AnimLeave="TrailerLeave" :Affichage="show" :AffichageType="'Trailer'">
        <Trailer :video="Item.Trailer" /><!-- Composant d'affichage du trailer' -->
      </TransiRC>
      <TransiRC :AnimEnter="AboutEnter" :AnimLeave="AboutLeave" :Affichage="show" :AffichageType="'About'">
        <About :Item="Item" /><!-- Composant d'affichage de la description de la serie' -->
      </TransiRC>
    </div>
  </div>
</template>

<script>
import SerieApi from "@/mixins/SerieApi.js";
import DetailsAnimation from "@/mixins/DetailsAnimation.js";
import Cast from "@/components/Details/Cast";
import DetailsNavigation from "@/components/Details/DetailsNavigation";
import Trailer from "@/components/Details/Trailer";
import About from "@/components/Details/About";
import Header from "@/components/Header";
import TransiRC from "@/components/TransiRC";
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
    Trailer,
    Header,
    TransiRC,
    DetailsNavigation
  },
  created() {
    this.GetSeriesDetail(this.$route.params.id)
      .then((data) => {
        this.Item = data;
      })
      .catch((err) => console.log(err));
    this.NavEnter();
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
  },
  mixins: [SerieApi,DetailsAnimation],
};
</script>

<style lang="scss">
.Details {
  height: 100vh !important;
  overflow: hidden;
  .Background {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 90vh;
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
  .BackBtn {
    transform: rotate(90deg);
    position: absolute;
    top: 0;
    right: 10%;
    width: 5%;
    height: 10%;
    border-bottom: 1px solid white;
    border-top: 1px solid white;
    align-items: center;
    justify-content: center;
    display: flex;
    border-top-right-radius: 40%;
    border-bottom-right-radius: 40%;
    .Circle {
      width: 50%;
      height: 50%;
      background: white;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      &:hover {
        .Shift {
          transform: rotate(180deg) translateX(4px);
        }
      }
      .Shift {
        transform: rotate(180deg);
        font-size: 2em;
        margin-top: 4px;
        transition: all 1.1s cubic-bezier(0.19, 1, 0.22, 1);
      }
    }
  }
}
@media only screen and (max-width: 906px) {
  .Content {
    .Navigation {
      div {
        font-size: 3em !important;
      }
    }
  }
}
</style>
