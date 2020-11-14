<template>
  <div class="home">
    <video v-if="isVisible" autoplay loop muted>
        <source srcVid="vidSrc" src="../../public/manda.mp4" type="video/mp4">
    </video>
    <div class="home-menu">
      <div class="home-left">
        <img src="../assets/logo-big.png" alt="">
        <h2>WATCH TV SHOWS & MOVIES ANYWHERE. ANYTIME</h2>
        <button v-on:click="navigateToSignUp" class="trial-button">Start Your Free Month</button>
      </div>
      <div class="home-right">
         <router-link to="/Log/signIn">
          <p class="signin-link">SIGN IN</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>


import UserApi from "@/mixins/UserApi.js";
import AuthApi from "@/mixins/AuthApi.js";
import SerieApi from "@/mixins/SerieApi.js";
export default {
  name: "Home",
  data() {
    return {
      isVisible: true,
    }
  },
  methods: {
    navigateToSignUp(){
      this.$router.push({ name: "SignUp" });
    },
    removeVideo(){
      if ( window.innerWidth < window.innerHeight ) {
         if(window.innerWidth < 1025){
          
          this.isVisible = false;
         }
       } 

    }
  },
  created () {
    this.removeVideo();
  },
 
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
    width: 150%;
    height: 150%;
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
    font-weight: bold;
    
  }
  .home-left h2{
    line-height: 100%;
    margin: 5vw;
    margin-top: 5vw;
    margin-right: 5vw;
    margin-bottom: 0vw;
    margin-left: 5vw;
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
    height: 6vh;
     margin: 4vh 5vw;
  }
  @media only screen and (min-width: 814px){
    h2{

      text-align: left;
      font-size: 6em ;
    }
    button{
      font-size: 1.5em !important;
    }
   
    
  }
  
@media  (orientation: portrait) {
  @media only screen and (max-width: 813px) {
    
      img {
        width: 80%;
        height: 5vh;
        margin: 5vh 5vw;
      }
      .home-right p {
        background: #e50914;
        float: right;
        width: 50%;
        padding: 1vh 1vw;
        margin-top: 5vh;
        font-weight: bold;
      }
      .home-left{
      
        font-size: 2.5em;
      
      }
      .trial-button{
        width: 40vw;
        height: 8vh;
      
      }
    .home-menu{
      overflow: hidden;
    }
  }
}
  @media (orientation: landscape) {
    @media only screen and (max-width: 813px) {
    h2{

      text-align: left;
      font-size: 3em ;
    }
    

  }
  }
</style>
