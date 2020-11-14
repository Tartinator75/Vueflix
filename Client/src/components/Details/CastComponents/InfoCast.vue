<template> 
<div class="Affichage">
       <div class="Name-Container">
          <div class="Name">
            {{ AffichageElement ? AffichageElement.name : CastBase.name }}
          </div>
        </div>
        <div class="Image-Container">
          <img class="Image" :src="AffichageElement ? AffichageElement.image : CastBase.image"/>
        </div>
        <div class="Description-Container">
          <div class="Description">
            {{AffichageElement ? AffichageElement.description : CastBase.description}}
          </div>
        </div>
</div>
</template>

<script>

export default {
  name: "InfoCast",
  props: {
    CastBase: {},
    AffichageElement: {},
  },
};
</script>

<style></style>
