<template>
  <div id="app">
    <transition-page>
      <router-view />
    </transition-page>
  </div>
</template>

<script>
import TransitionPage from "./transitions/TransitionPage.vue";
export default {
  name: `App`,
  components: {
    TransitionPage,
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "F001";
  src: url("assets/font1.woff2") format("woff2"),
    url("assets/font2.woff") format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: auto;
}
html{
  overflow: hidden;
}
.Page{
  overflow: hidden;
  width: 100%;
  height: 100vh!important;
}
body {
  background: black;
  overflow: hidden;
}
* {
  margin: 0;
  padding: 0;
}
</style>
