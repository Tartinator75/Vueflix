<template>
  <div id="app">
    <TransitionPage>
      <router-view />
    </TransitionPage>
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
}
.Page{
position: relative;
  display: block;

  width: 100%;
  height: 100vh!important;
    z-index: 1;
}
body {
  background: black;

}
* {
  margin: 0;
  padding: 0;
}
a{
 color: inherit;
  text-decoration: none;
}
</style>
