<template>
  <div class="OpenBtn">
    <div class="Circle" v-on:click="clicker()">
      <div class="Shift">›</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CircleButton",
  props: {
    clicker: {type:Function},
  },
};
</script>

<style></style>
