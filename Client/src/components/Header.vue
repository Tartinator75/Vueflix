<template>
  <div id="header">
    <img class="logoHeader Logo" :src="Logo" v-on:click="NavigateSearch" />
    <nav role="navigation">
      <ul>
        <li v-bind:class="$router.history.current.name == 'News' ? 'items active':'items'"  v-on:click="NavigateNews">News</li>
        <li v-bind:class="$router.history.current.name == 'Search' ? 'items active':'items'" v-on:click="NavigateSearch">Search</li>
        <li v-bind:class="$router.history.current.name == 'MyList' ? 'items active':'items'" v-on:click="NavigateMyList">My List</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      inputSearch: "",
    };
  },
  props: {
    Logo: { type: String },
  },

  methods: {
    // methodes de navigation nous pouvions aussi utiliser la balise <router-link to=""> 
    NavigateNews() {
      this.$router.push({ name: "News" });
    },
    NavigateSearch() {
      this.$router.push({ name: "Search" });
    },
    NavigateMyList() {
      this.$router.push({ name: "MyList" });
    },
  },
};
</script>

<style lang="scss">
#header {
  width: 100%;
  height: 30%;
  background: #141414;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 999;
  height: 10vh;
}

.logoHeader {
  width: 10%;
  margin-left: 30px;
}
.logoHeader:hover {
  cursor: pointer;
}
nav {
  width: 25vw;
  color: white;
  display: flex;
  align-items: center;
}
ul {
  list-style: none;
  margin: 0;
  padding-left: 0;
}
li {
  color: #fff;
  display: block;
  float: left;
  padding: 1rem;
  position: relative;
  text-decoration: none;
  transition-duration: 0.5s;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 13.5px;
}
li a {
  color: #fff;
  cursor: default;
}
li:hover {
  cursor: pointer;
}
.items:hover {
  color: #ccc;
}
.items.active{
  color: #c71925;
  pointer-events: none;
}
ul li ul {
  visibility: hidden;
  opacity: 0;
  min-width: 5rem;
  position: absolute;
  transition: all 0.5s ease;
  margin-top: 1rem;
  left: 0;
  display: none;
}
ul li ul li {
  clear: both;
  width: 100%;
}
.dropdown {
  background: #141414c7;
}
#navigate {
  opacity: 0;
  height: 0;
}
#options {
  font-size: 14px;
  color: #e5e5e5;
  cursor: pointer;
  width: 60%;
}
#eachOptions {
  list-style: none;
  display: flex;
  justify-content: space-around;
  width: 50%;
}

#icons {
  width: 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
@media only screen and (max-width: 906px) {
  .logoHeader {
    width: 22%;
    margin-left: 5%;
  }
  nav{
        width: 70vw;
  }
}
// @media only screen and (max-width: 900px) {
//   nav {
//   width: 80vw;
// }
//   ul li:hover > ul,
//   ul li:focus-within > ul,
//   ul li ul:hover {
//     visibility: visible;
//     opacity: 1;
//     display: block;
//     font-size: 15px;
//     position: absolute;
//     z-index: 9999;
//   }
//   li :hover {
//     color: #ccc;
//   }
//   #navigate {
//     color: white;
//     opacity: 10;
//     height: auto;
//     margin-left: -10px;
//   }
//   .items {
//     opacity: 0;
//     height: 0;
//     font-size: 0;
//   }

//   li a {
//     cursor: pointer;
//   }
//   nav {
//     width: 30%;
//     height: 30px;
//     padding-top: 3px;
//   }
//   #textForm {
//     width: 30%;
//   }
//   #icons {
//     width: 20%;
//   }
// }
// @media only screen and (max-width: 626px) {
//   #selections {
//     padding-top: 30px;
//   }
// }
// @media only screen and (max-width: 541px) {
//   #selections {
//     padding-top: 50px;
//   }
// }
// @media only screen and (max-width: 500px) {
//   .logoHeader {
//     width: 80px;
//   }
//   nav {
//     width: 30%;
//     padding-top: 40px;
//   }
//   #selections {
//     padding-top: 30px;
//   }
// }
// @media only screen and (max-width: 320px) {
//   .logoHeader {
//     margin-left: 0px;
//   }
//   #selections {
//     padding-top: 60px;
//   }
// }
</style>
