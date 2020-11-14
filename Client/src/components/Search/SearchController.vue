<template>
  <div id="textForm">
    <form>
      <input v-model="Text" v-on:input="Searching(Text)" type="text" name="text" :placeholder="placeholder"/>
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchController",
  data: function() {
    return {
      Text: "",
    };
  },
   props: {
    placeholder: {type:String},
    Searching: {
      type: Function,
    },
  },

// j'ai utiliser la méthodes computed pour me familiariser avec certains concept de vuejs a voir dans la mixins GetGallery 
// sinon comme vous pouvez le voir une autre methodes plus simples permet de filtrer visuellement pour l'utilisateurs des éléments 

  // methods: {
    // methodes de recherche de javascript basic en utilisant le DOM 
    // Searching() {// fonction permettant la recherche d'élément en fonction de des valeurs de la card
    //   console.log("searching process...");
    //   var Slide, i, txtValue;
    //   Slide = document.querySelectorAll(".VueCarousel-slide");
    //   if (this.Textx != "") {
    //     Slide.forEach((element) => {
    //       txtValue =
    //         element.textContent.toLowerCase() ||
    //         element.innerText.toLowerCase();
    //       if (txtValue.indexOf(this.Textx.toLowerCase()) > -1) {
    //         element.style.display = "block";
    //       } else {
    //         element.style.display = "none";
    //       }
    //     });
    //   } else {
    //     Slide.forEach((element) => {
    //       element.style.display = "block";
    //     });
    //   }
    // },
  // },
 
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
