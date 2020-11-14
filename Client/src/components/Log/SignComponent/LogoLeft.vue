<template>
      <div class="Home-Logo">
        <img :src="Logo" alt="" />
      </div>
</template>

<script>

export default {
  name: "LogoLeft",
  props: {
    Logo: { type: String },
  },
};
</script>

<style lang="scss">
.Home-Logo {
    width: 10%;
    position: absolute;
    left: 2%;
    top: 2%;
  img{
      width: 100%;
      height: 100%;
  }
}
@media only screen and (max-width: 906px) {
  .Home-Logo {
    width: 22%;
  }
}
</style>
