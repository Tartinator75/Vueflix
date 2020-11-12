<template>
  <div>
    <video autoplay loop muted>
      <source src="../assets/login_vid.mp4" type="video/mp4" />
    </video>
    <div class="home-menu">
      <div class="home-left">
        <img src="../assets/logo-big.png" alt="" />
      </div>
      <div class="home-center">
        <SigninForm />
      </div>
      <div class="home-right">
        <router-link to="/">
          <p class="back-link">BACK</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import SigninForm from "../components/Log/SignInForm.vue";

export default {
  components: {
    SigninForm,
  },
};
</script>

<style lang="scss" scoped>
.back-link {
  color: aliceblue !important;
  font-weight: bold;
}
body {
  margin: 0px !important;
}
.home {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
video,
source {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  z-index: -100;
  transform: translateX(-50%) translateY(-50%);
  filter: brightness(0.2);
}
.home-menu {
  position: absolute;
  color: white;
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: space-around;
}
.home-left,
.home-right,
.home-center {
  width: calc(100% / 3);
}
.home-right {
  text-align: right;
}
.home-right p {
  background: #e50914;
  float: right;
  width: 15%;
  padding: 1vh 1vw;
  margin-top: 5vh;
  font-weight: bold;
}
.home-left h2 {
  margin: 0;
  line-height: 100%;
  margin: 0 5vw;
}
.home-left {
  text-align: left;
  font-size: 4em;
}
.trial-button {
  width: 20vw;
  height: 8vh;
  font-weight: bold;
  font-size: 0.4em;
  margin: 0 5vw;
}
img {
  width: 10vw;
  height: 6vh;
  margin: 0 5vw;
}
.home-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-group {
  margin: 10vh 0;
}
.form-group > input {
  background: transparent;
  border: 0;
  border-bottom: 1px solid white;
  color: white;
  font-size: 16px;
  width: 25vw;
}
input:focus {
  outline: none;
}
button {
  display: block;
  margin: auto;
  width: 20vw;
  height: 5vh;
  color: white;
  background: #e50914;
  border: 0;
}
.form-group {
  margin: 10vh 0;
}
.form-group > input {
  background: transparent;
  border: 0;
  border-bottom: 1px solid white;
  color: white;
  font-size: 16px;
  width: 25vw;
}
input:focus {
  outline: none;
}
button {
  display: block;
  margin: auto;
  width: 20vw;
  height: 5vh;
  color: white;
  background: #e50914;
  border: 0;
}
</style>
