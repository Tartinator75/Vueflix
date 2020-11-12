<template>
  <div class="content-sinopse">
    <div class="title">
      <span>Series Synopsis</span>
      <div class="controller">
        <ListController :InList="InList" :AddList="AddList" :RemoveList="RemoveList" :Id="Id"/>
      </div>
    </div>
    <div class="text">
      {{ Description }}
    </div>
  </div>
</template>

<script>
import ListController from "@/components/ListController";
export default {
  name: "ContentSinopse",
  props: {
    Id: { type: String },
    Description: { type: String },
    InList: { type: Boolean },
    AddList: {
      type: Function,
    },
    RemoveList: {
      type: Function,
    },
  },
  components: {
    ListController,
  },
};
</script>

<style lang="scss">
.card:hover .sinopse .content-sinopse .text {
  pointer-events: none;
  bottom: 25%;
  transition-delay: 0.6s;
}
.card:hover .sinopse .content-sinopse .title {
  pointer-events: none;
  top: 5%;
  transition-delay: 0.2s;
}
.card .sinopse .content-sinopse .title {
  font-size: 3em;
  font-weight: 700;
  position: absolute;
  top: -10%;
  width: 100%;
  left: 0;
  transition: 0.6s;

  & div {
    cursor: pointer;
    pointer-events: all;
    font-size: 0.6em;
    top: -10%;
    position: absolute;
    right: 16%;
    z-index: 99999;
    & .add {
      color: green;
    }
    & .remove {
      color: red;
    }
  }
}
.card .sinopse .content-sinopse .text {
  width: 80%;
  left: 3%;
  bottom: -10%;
  position: absolute;
  transition: 0.6s;
  font-weight: 300;
  font-size: 1em;
  letter-spacing: 1px;
}
@media only screen and (max-width: 906px) {
  .card .sinopse .content-sinopse .title {
    width: 85% !important;
    font-size: 2em !important;
    & div {
      top: 20%;
      position: absolute;
      right: 10%;
    }
  }
}
</style>
