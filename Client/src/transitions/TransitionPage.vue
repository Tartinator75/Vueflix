<template>
  <transition
    :name="transitionName"
    :mode="transitionMode"
    :enter-active-class="transitionEnterActiveClass"
    @beforeLeave="beforeLeave"
    @enter="enter"
    @afterEnter="afterEnter"
  >
    <slot/>
  </transition>
</template>

<script>
export default {
  name: `TransitionPage`,
  data() {
    return {
      prevHeight: 0,
      transitionName: `slide`,
      transitionMode: `out-in`,
      transitionEnterActiveClass: ``,
    };
  },
  created() {
    this.$router.beforeEach((to, from, next) => {// avant la recdirection
      let transitionName = to.meta.transitionName || from.meta.transitionName // je prend le type de transition de la page 
      if (transitionName === `slide`) {// si c'est slide 
        const toUrl = to.path.split(`/`).length;// je regade la length de la redirection
        const fromUrl = from.path.split(`/`).length;// je regarde la lenght de la ou on est
        transitionName = toUrl < fromUrl ? `slide-right` : `slide-left`; // j'applique le css correspondant a l'animation que je dois faire 
        // si /home/sign est l'enfant de Home donc l'animation sera toujours differente entre les deux 
      }
       if (transitionName === `slideD`) {// si c'est slide D meme chose que pour slide sauf que l'animation se fait vers le bas
        const toUrl = to.path.split(`/`).length;
        const fromUrl = from.path.split(`/`).length;
        transitionName = toUrl < fromUrl ? `slideD-down` : `slideD-up`;
      }
      this.transitionEnterActiveClass = `${transitionName}-enter-active`;

      this.transitionName = transitionName;
      next();
    });
  },
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);
      element.style.height = this.prevHeight;
      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      // element.style.height = `auto`;
    },
  },
};
</script>

<style lang="scss">

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}

.slideD-down-enter-active,
.slideD-down-leave-active,
.slideD-up-enter-active,
.slideD-up-leave-active {
  transition-duration: 0.8s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slideD-down-enter,
.slideD-up-leave-active {
  opacity: 0;
  transform: translate(0, 2em);
}
.slideD-down-leave-active,
.slideD-up-enter {
  opacity: 0;
  transform: translate(0,-2em);
}

</style>