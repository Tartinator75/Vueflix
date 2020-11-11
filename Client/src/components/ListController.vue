<template>
        <div class="header-icon-container">
          <i  v-if="InList" v-on:click="AddList(Id)" class="material-icons header-icon add"  >+</i>
           <i v-else v-on:click="RemoveList(Id)" class="material-icons header-icon remove"  >-</i>
      </div>
</template>

<script>
export default {
name:"ListController",
 props: {
    Id: { type: String },
    InList: { type: Boolean },
    AddList: {
      type: Function,
    },
    RemoveList: {
      type: Function,
    },
  },
}
</script>

<style>
.header-icon-container {
  position: relative;
}

.header-icon {
  position: absolute;
  top: -20px;
  right: 5%;
  color: #ffffff;
  font-size: 5em;
  opacity: 0.85;
  transition: all cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s;
}

.header-icon.add{
 text-shadow: 0px 0px 20px #72ea6a, 0px 5px 20px #6dea6a;
}
.header-icon.remove{
 text-shadow: 0px 0px 20px #72ea6a, 0px 5px 20px #ea6a6a;
}
</style>