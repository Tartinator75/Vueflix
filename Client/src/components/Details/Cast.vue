<template>
  <div class="Cast">
    <transition
      v-on:enter="BtnEnter"
      v-on:leave="BtnLeave"
      :duration="{ enter: 1400, leave: 1500 }"
    >
      <div v-if="Affichage == true" class="OpenBtn">
        <div class="Circle" v-on:click="Affichage = !Affichage">
          <div class="Shift">›</div>
        </div>
      </div>
    </transition>
    <transition
      v-on:enter="ListEnter"
      v-on:leave="ListLeave"
      :duration="{ enter: 1400, leave: 1500 }"
    >
      <div v-if="Affichage == false" class="List">
        <div
          v-for="(element, index) in Cast"
          :key="index"
          v-on:click="
            () => {
              Affichage = !Affichage;
              AffichageElement = element;
            }
          "
          @mouseover="CastHover"
          v-bind:class="[index === 1 ? 'List-element active' : 'List-element']"
        >
          <img :src="element.image" />
        </div>
      </div>
    </transition>
    <transition  v-on:enter="AffichageEnter"
      v-on:leave="AffichageLeave" :duration="{ enter: 1400, leave: 1500 }">
      <div v-if="Affichage == true" class="Affichage">
        <div class="Name-Container">
          <div class="Name">{{ AffichageElement ? AffichageElement.name : Cast[1].name }}</div>
        </div>
        <div class="Image-Container">
          <img class="Image" :src="AffichageElement ? AffichageElement.image : Cast[1].image" />
        </div>
        <div class="Description-Container">
          <div class="Description">{{ AffichageElement ? AffichageElement.description : Cast[1].description }}</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  name: "Cast",
  data() {
    return {
      Affichage: false,
    };
  },
  props: {
    Cast: Array,
    show: String,
    AffichageElement: {},
  },
  methods: {
    CastHover(e) {
      document.querySelector(".List-element.active").classList.remove("active");
      e.target.classList.add("active");
    },
    CastAffichageEnter() {
      gsap.to(".Cast .List", {
        x: -500,
        duration: 1.4,
        ease: [0.6, 0.01, -0.05, 0.9],
      });
    },
    ListLeave() {
      gsap.to(".Cast .List", {
        x: -500,
        duration: 1.4,
        ease: [0.6, 0.01, -0.05, 0.9],
      });
    },
    ListEnter() {
      gsap.fromTo(
        ".Cast .List",
        { x: -500 },
        {
          x: 0,
          duration: 1.4,
          ease: [0.6, 0.01, -0.05, 0.9],
        }
      );
    },
    BtnLeave() {
      gsap.to(".Cast .OpenBtn", {
        x: -500,
        duration: 1.4,
        ease: [0.6, 0.01, -0.05, 0.9],
      });
    },
    BtnEnter() {
      gsap.fromTo(
        ".Cast .OpenBtn",
        { x: -500 },
        {
          x: 0,
          duration: 1.4,
          ease: [0.6, 0.01, -0.05, 0.9],
        }
      );
    },
    AffichageLeave() {
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
          y: -500,
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
    AffichageEnter() {
      gsap.fromTo(
        ".Affichage .Name",
        { x: -500 },
        {
          x: 0,
          duration: 1.4,
          ease: [0.6, 0.01, -0.05, 0.9],
        }
      );
         gsap.fromTo(
        ".Affichage .Image",
        { x: -500 },
        {
          x: 0,
          duration: 1.4,
          ease: [0.6, 0.01, -0.05, 0.9],
        }
      );
         gsap.fromTo(
        ".Affichage .Description",
        { x: 500 },
        {
          x: 0,
          duration: 1.4,
          ease: [0.6, 0.01, -0.05, 0.9],
        }
      );
    },
    CastAffichageLeave() {},
  },
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
</style>
