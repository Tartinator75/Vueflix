<template>
  <div class="info-section">
    <label>{{Title}}</label>
    <span>{{ Value }}</span>
  </div>
</template>

<script>
export default {
    name:"InfoSection",
      props: {
    Title: {type:String},
    Value: [Number,String]
  },
};
</script>

<style>
.info-section {
  display: table-cell;
  text-transform: uppercase;
  text-align: center;
}

.info-section:first-of-type {
  text-align: left;
}

.info-section:last-of-type {
  text-align: right;
}

.info-section label {
  display: block;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 0.5em;
  font-size: 1.2em;
}

.info-section span {
  font-weight: 100;
  font-size: 1.3em;
}
</style>
