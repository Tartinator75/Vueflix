<template>
  <div class="Sign">
    <HomeContainer Where="/" TextWhere="Back" Background="manda.mp4" Logo="/logo-big.png">
      <SigninForm />
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
.Sign {
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
}
</style>
