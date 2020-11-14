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
    this.$router.beforeEach((to, from, next) => {
      let transitionName = to.meta.transitionName || from.meta.transitionName 
      if (transitionName === `slide`) {
        const toUrl = to.path.split(`/`).length;
        const fromUrl = from.path.split(`/`).length;
        transitionName = toUrl < fromUrl ? `slide-right` : `slide-left`;
      }
       if (transitionName === `slideD`) {
        const toUrl = to.path.split(`/`).length;
        const fromUrl = from.path.split(`/`).length;
        transitionName = toUrl < fromUrl ? `slideD-right` : `slideD-left`;
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
      element.style.height = `auto`;
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

.slideD-left-enter-active,
.slideD-left-leave-active,
.slideD-right-enter-active,
.slideD-right-leave-active {
  transition-duration: 0.8s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slideD-left-enter,
.slideD-right-leave-active {
  opacity: 0;
  transform: translate(0, 2em);
}
.slideD-left-leave-active,
.slideD-right-enter {
  opacity: 0;
  transform: translate(0,-2em);
}

</style>