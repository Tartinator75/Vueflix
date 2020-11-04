<template>
  <div class="home">
    <video autoplay loop muted>
        <source src="../assets/login_vid.mp4" type="video/mp4">
    </video>
    <div class="home-menu">
      <div class="home-left">
        <img src="../assets/netflix-logo.png" alt="">
        <h2>WATCH TV SHOWS & MOVIES ANYWHERE. ANYTIME</h2>
        <button class="trial-button">Start Your Free Month</button>
      </div>
      <div class="home-right">
         <router-link to="/signIn">
          <p class="signin-link">SIGN IN</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import UserApi from "@/mixins/UserApi.js";
import AuthApi from "@/mixins/AuthApi.js";
import SerieApi from "@/mixins/SerieApi.js";
export default {
  name: "Home",
  
 
  mixins: [AuthApi],
};
</script>
<style scoped>
.signin-link{
  color: aliceblue !important;
}
body{
  margin: 0px !important;
}
  .home{
    height: 100%;
    width: 100%;
    overflow: hidden;
   
  }
  video, source{
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    z-index: -100;
    transform: translateX(-50%) translateY(-50%);
    filter: brightness(0.2)
  }
  .home-menu{
    position: absolute;
    color: white;
    height: 100%;
    width: 100%;
    
    
    display: flex;
    justify-content: space-around;
  }
  .home-left, .home-right{
    width: 50%;
    
  }
  .home-right{
    text-align: right;
    
  }
  .home-right p{
    background: #e50914;
    float: right;
    width: 15%;
    padding: 1vh 1vw;
    margin-top: 5vh;
    font-weight: bold
    
  }
  .home-left h2{
    margin: 0;
    line-height: 100%;
     margin: 0 5vw;
  }
  .home-left{
    text-align: left;
    font-size: 4em;
   
  }
  .trial-button{
    width: 20vw;
    height: 8vh;
    font-weight: bold;
    font-size: 0.4em;
     margin: 0 5vw;
  }
  img{
    width: 10vw;
    height: 15vh;
     margin: 0 5vw;
  }
</style>
