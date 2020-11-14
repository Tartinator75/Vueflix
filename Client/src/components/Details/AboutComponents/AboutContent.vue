<template> 
  <div v-bind:class="Class">
      <div>{{ Value }}</div>
    </div>
</template>

<script>

export default {
  name: "AboutContent",
  props: {
    Class: {type:String},
    Value: [String,Number],
  },
};
</script>

<style></style>
