<template>
  <p class="errorMsg" v-if="errorVisible">{{Text}}</p>
</template>

<script>
export default {
  name: "ErrorText",
    props: {
    Text: { type: String },
    errorVisible: { type: Boolean },
  },
}
</script>

<style>
  .errorMsg {
 color: white;
    font-family: F001, sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    line-height: 1;
    position: absolute;
    right: 0;
    font-size: 2em;
    width: 200px;
    background: red;
    padding: 7px;
    bottom: 10%;
}
@media only screen and (max-width: 906px) {
  
  .errorMsg {
     font-size: 1.5em;
    width: 85px;
  }
}
</style>
