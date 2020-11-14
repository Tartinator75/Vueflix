<template> 
   <transition v-on:enter="AnimEnter" v-on:leave="AnimLeave" :duration="{ enter: 1400, leave: 1500 }">
        <div v-if="Affichage == AffichageType">
            <slot/>
        </div>
    </transition>
</template>

<script>

export default {
  name: "InfoCast",
  props: {
    AffichageType:[String, Boolean],
    Affichage: [String, Boolean],
    AnimEnter: {type:Function},
    AnimLeave :{type:Function}
  },
};
</script>

<style></style>
