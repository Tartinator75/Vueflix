<template>
  <div>
    <Background :Src="Background" />
    <div class="home-menu">
      <LogoLeft :Logo="Logo" />
      <div class="Home-Content">
        <slot />
      </div>
      <ButtonRight :Text="TextWhere" :Where="Where" />
    </div>
  </div>
</template>

<script>
import Background from "@/components/Home/HomeComponent/Background";
import LogoLeft from "@/components/Home/HomeComponent/LogoLeft";
import ButtonRight from "@/components/Home/HomeComponent/ButtonRight";
export default {
  name: "About",
  props: {
    Where: { type: String },
    TextWhere: { type: String },
    Logo: { type: String },
    Background: { type: String },
  },
  components: {
    ButtonRight,
    LogoLeft,
    Background,
  },
};
</script>

<style lang="scss"></style>
