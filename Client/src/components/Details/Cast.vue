<template>
  <div class="Cast">
    <TransiRC :AnimEnter="BtnEnter" :AnimLeave="BtnLeave" :Affichage="Affichage" :AffichageType="true"><!-- Composant de transition en fonction de la valeurs d'affichage -->
      <CircleButton :clicker="SetAffichage"/>
    </TransiRC>
    <TransiRC :AnimEnter="ListEnter" :AnimLeave="ListLeave" :Affichage="Affichage" :AffichageType="false">
      <div class="List">
        <div v-for="(element, index) in Cast" :key="index" v-on:click="SetAffichage(element)" @mouseover="CastHover" v-bind:class="[index === 1 ? 'List-element active' : 'List-element']">
          <img :src="element.image" />
        </div>
      </div>
    </TransiRC>
    <TransiRC :AnimEnter="AffichageEnter" :AnimLeave="AffichageLeave" :Affichage="Affichage" :AffichageType="true">
      <InfoCast :AffichageElement="AffichageElement" :CastBase="Cast[1]"/>
    </TransiRC>
  </div>
</template>

<script>
import gsap from "gsap";
import DetailsCastAnimation from "@/mixins/DetailsCastAnimation.js";
import InfoCast from "@/components/Details/CastComponents/InfoCast";
import CircleButton from "@/components/Details/CastComponents/CircleButton";
import TransiRC from "@/components/TransiRC";
export default {
  name: "Cast",
  data() {
    return {
      Affichage: false,
    };
  },
  props: {
    Cast: { type: Array },
    show: { type: String },
    AffichageElement: {},
  },
  components: {
    InfoCast,
    TransiRC,
    CircleButton
  },
  methods:{
    SetAffichage(e){
      this.Affichage=!this.Affichage;
      if(e)
      this.$emit('AffichageElement' , e);
    }
  },
  mixins: [DetailsCastAnimation],
};
</script>

<style lang="scss">
.Cast {
  .Affichage {
    .Image-Container {
      overflow: hidden;
      width: 15%;
      position: absolute;
      left: 9%;
      top: 15%;
    }
    .Description-Container {
      overflow: hidden;
      width: 26%;
      font-family: F001, sans-serif;
      font-weight: 400;
      font-size: 1.3em;
      color: white;
      text-transform: uppercase;
      position: absolute;
      left: 23%;
      top: 20%;
      .Description {
        font-family: F001, sans-serif;
        font-weight: 400;
        font-size: 1em;
        color: white;
        text-transform: uppercase;
      }
    }
    .Name-Container {
      overflow: hidden;
      position: absolute;
      left: 20%;
      top: 2%;
      .Name {
        cursor: pointer;
        font-size: 7em;
        color: white;
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: white;
        font-size: f;
        font-family: F001, sans-serif;
        font-weight: 400;
        text-transform: uppercase;
      }
    }
  }
  .List {
    overflow: auto;
    font-family: F001, sans-serif;
    font-weight: 400;
    font-size: 1.9em;
    color: white;
    text-transform: uppercase;
    position: absolute;
    left: 1%;
    height: 80%;
    &::-webkit-scrollbar {
      width: 2px;
      height: 2px;
    }
    &::-webkit-scrollbar-button {
      width: 0px;
      height: 0px;
    }
    &::-webkit-scrollbar-thumb {
      background: #e1e1e1;
      border: 0px none #ffffff;
      border-radius: 50px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: #ffffff;
    }
    &::-webkit-scrollbar-thumb:active {
      background: #000000;
    }
    &::-webkit-scrollbar-track {
      background: #666666;
      border: 0px none #ffffff;
      border-radius: 50px;
    }
    &::-webkit-scrollbar-track:hover {
      background: #666666;
    }
    &::-webkit-scrollbar-track:active {
      background: #333333;
    }
    &::-webkit-scrollbar-corner {
      background: transparent;
    }

    .List-element {
      display: block;
      z-index: 2;
      height: fit-content;
      position: relative;
      width: 50%;
      cursor: pointer;
      transition: all 1s ease-in-out;
      margin-bottom: 10%;
      filter: brightness(0.5);
      &.active {
        width: 90%;
        filter: brightness(1);
        img {
          &.active {
            transform: scale(1.5);
          }
        }
      }
      img {
        pointer-events: none;
        transition: all 1s ease-in-out;
        z-index: 1;
        width: 100%;
        height: 100%;
      }
    }
  }
  .OpenBtn {
    position: absolute;
    top: 30%;
    left: 0;
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
          transform: translateX(4px);
        }
      }
      .Shift {
        font-size: 2em;
        margin-bottom: 4px;
        transition: all 1.1s cubic-bezier(0.19, 1, 0.22, 1);
      }
    }
  }
}

@media only screen and (max-width: 906px) {
  .Cast .List {
    width: 40%;
    height: 90%;
  }
  .Cast .List .List-element.active {
    width: 100%;
  }
  .Cast .Affichage .Name-Container {
    overflow: hidden;
    position: absolute;
    left: 13%;
    top: 2%;
    & .Name {
      font-size: 3em;
    }
  }
  .Cast .Affichage .Image-Container {
    overflow: hidden;
    height: 30%;
    width: 40%;
    position: absolute;
    left: 13%;
    top: 13%;
    & img {
      width: 100%;
      height: 100%;
    }
  }
  .Cast .Affichage .Description-Container {
    width: 80%;
    font-size: 1.3em;
    height: 34%;
    left: 13%;
    top: 55%;
    overflow: auto;
  }

  .Cast .OpenBtn {
    top: 46%;
    left: 0;
    width: 14%;
    height: 6%;
    border-right: 1px solid white;
    .Circle {
      width: 50%;
      height: 61%;
    }
    .Shift {
      font-size: 1.5em;
      margin-left: 3px;
    }
  }
}
</style>
