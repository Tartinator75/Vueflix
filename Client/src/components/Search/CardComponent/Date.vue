<template>
  <div class="date">
    {{ Year }}
    <span class="tv_ico"
      ><img src="http://www.cartaodental.com/nbase/image/pc.svg"
    /></span>
  </div>
</template>

<script>
export default {
    name:"Date",
    props:{
        Year:Number
    }
};
</script>

<style>
.card:hover .date {
  transform: translateY(-100%);
  opacity: 0;
}
.card .date {
  position: absolute;
  top: 25px;
  right: 25px;
  font-weight: 300;
  font-size: 2em;
  transition: 0.8s;
}
.card .date .tv_ico img {
  width: 0.8em;
  vertical-align: baseline;
  margin-left: 6px;
}
</style>
