<template>
     <div class="content">
      <div class="title">
        {{ Title }}
      </div>
      <div class="text">Directed By: {{ Director }}</div>
    </div>
</template>

<script>
export default {
    name:"Content",
    props:{
        Title:String,
         Director:String
    }
};
</script>

<style>

.card:hover .content {
  transform: translateY(100%);
  opacity: 0;
}

.card .content {
  transition: 0.8s;
  display: flex;
  flex-wrap: wrap;
  align-self: flex-end;
  padding: 25px 2px 50px 10px;
}
.card .content .title {
  width: 100%;
  font-size: 5em;
  font-weight: 700;
  line-height: 50px;
  margin-bottom: 12px;
}

.card .content .text {
  width: 100%;
  font-size: 2em;
  font-weight: 300;
}
@media only screen and (max-width: 906px) {
.card .content .title {
    font-size: 3em;
  }
}
</style>
