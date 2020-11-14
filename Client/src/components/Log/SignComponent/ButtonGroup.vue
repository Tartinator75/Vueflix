<template>
  <div class="Button-group">
   <div class="Button-Sign" v-on:click="Action2()">
      <ShrinkButton :Text="Text2Action" />
    </div>
    <div class="Button-Sign" v-on:click="Action()">
      <ShrinkButton :Text="TextAction" />
    </div>
  </div>
</template>

<script>
import ShrinkButton from "@/components/ShrinkButton";
export default {
  name: "ButtonRight",
  props: {
    Text2Action: { type: String },
    TextAction: { type: String },
    Action2: { type: Function },
    Action: { type: Function },
  },
  components: {
    ShrinkButton,
  },
};
</script>

<style lang="scss">
.Button-Sign {
  width: 25%;
}
.Button-group {
  display: flex;
  width: 35%;
  justify-content: space-around;
}
@media only screen and (max-width: 906px) {
  .Button-group {
    width: 100%;
  }

  .Button-Sign {
    width: 35%;
  }
}
</style>
