<template>
      <div class="Button-Back">
        <router-link :to="Where">
          <p class="link">{{Text}}</p>
        </router-link>
      </div>
</template>

<script>

export default {
  name: "ButtonRight",
  props: {
    Text: { type: String },
     Where: { type: String },
  },
};
</script>

<style lang="scss">
.Button-Back{
    color: white;
    font-family: F001, sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    line-height: 1;
    position: absolute;
    right: 0;
    font-size: 2em;
    width: 150px;
    background: red;
    padding: 7px;
    top: 10%;
}
@media only screen and (max-width: 906px) {
  .Button-Back {
     font-size: 1.5em;
    width: 85px;
  }
}
</style>
