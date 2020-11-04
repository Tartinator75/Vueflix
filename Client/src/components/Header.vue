<template>
  <nav>
    <div class="Links">
      <div class="Link">
        <span>About</span>
      </div>
      <div class="Link">
        <span>Cast</span>
      </div>
      <div class="Link">
        <span>Trailer</span>
      </div>
    </div>
    <div class="Logo"><img :src="Logo" /></div>
    <div>
      <div class="Search"></div>
      <div class="Mobile-Hamburger"></div>
    </div>
  </nav>
</template>

<script>

export default {
  name: "Header",
  props: {
    Logo: String,
  },
};
</script>

<style lang="scss">
nav {
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
    transition: all 1.5s ease-in-out;
    &.fading {
      opacity: 0;
    }
    img {
      width: 100%;
    }
  }
  .Links {
    position: absolute;
    left: 10%;
    width: 15%;
    justify-content: space-between;
    display: flex;
    align-content: center;
    .Link {
      color: white;
      opacity: 0.8;
      transition: all 0.5;
      &.Active {
        opacity: 1;
      }
    }
    .Search {
    }
    .Mobile-Hamburger {
    }
  }
}
</style>
