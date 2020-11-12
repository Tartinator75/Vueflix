<template>
  <div id="textForm">
    <form>
      <input v-model="Textx" v-on:input="Searching()" type="text" name="text" :placeholder="placeholder"/>
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchController",
  data: function() {
    return {
      Textx: "",
    };
  },
  methods: {
    Searching() {
      console.log("searching process...");
      var Slide, i, txtValue;
      Slide = document.querySelectorAll(".VueCarousel-slide");
      if (this.Textx != "") {
        Slide.forEach((element) => {
          txtValue =
            element.textContent.toLowerCase() ||
            element.innerText.toLowerCase();
          if (txtValue.indexOf(this.Textx.toLowerCase()) > -1) {
            element.style.display = "block";
          } else {
            element.style.display = "none";
          }
        });
      } else {
        Slide.forEach((element) => {
          element.style.display = "block";
        });
      }
    },
  },
  props: {
    placeholder: {type:String},
    callback: {
      type: Function,
    },
  },
};
</script>

<style >
input[type="text"] {
  width: 0px;
  border: none;
  color: #e5e5e5;
  font-size: 13px;
  background-color: transparent;
  background-image: url("../../assets/search.png");
  background-position: 10px 10px;
  background-repeat: no-repeat;
  cursor: pointer;
  padding: 12px 7px 12px 40px;
  outline: none;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
}

input[type="text"]:focus {
  width: 90%;
  border: none;
  border-bottom: 2px solid #e5e5e5;
}
#textForm {
    top: 2%;
    right: 76%;
  z-index: 9999;
  position: fixed;
  width: 200px;
}

@media only screen and (max-width: 906px) {
#textForm{
    top: 11%;
    left: 5%;
    right: unset;
  }
}
</style>
