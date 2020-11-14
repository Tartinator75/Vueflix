<template>
  <div class="Home">
    <HomeContainer Where="/Sign" TextWhere="Sign In" Background="manda.mp4" Logo="/logo-big.png">
      <h1>WATCH YOUR SERIES ANYWHERE. ANYTIME</h1>
    </HomeContainer>
  </div>
</template>

<script>
import SigninForm from "../components/Log/SignInForm.vue";
import HomeContainer from "../components/Home/HomeContainer.vue";
export default {
  components: {
    SigninForm,
    HomeContainer,
  },
};
</script>
<style scoped>
.Home {
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
}
.Home h1 {
    left: 10%;
    color: white;
    font-family: F001, sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    line-height: 1;
    width: 50%;
    position: absolute;
    height: 70%;
    right: 0;
    font-size: 11em;
    padding: 7px;
    top: 15%;
}
@media only screen and (max-width: 906px) {
.Home h1 {
    font-size: 5em;
  }
}
  
</style>
