<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
   <h1>TENTATIVE DE FETCH</h1>
  </div>
</template>

<script>
// @ is an alias to /src

import ApiUsers from "@/mixins/UsersApi.js";

export default {
  name: 'Home',
  components: {
  
  },
  data() {
    return {
      userList: []
    }
  },
   created() {
            this.getFilms()
            .then(data => console.log("date: " + date))
            .catch(err => console.log(err));
            console.log(this.userList);
        },
  mixins:[ApiUsers]
}
</script>
