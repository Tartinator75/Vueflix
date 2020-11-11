<template>
  <div class="button">
    <a href="#">
      {{Text}}
      <span class="shift">›</span>
    </a>
    <div class="mask"></div>
  </div>
</template>

<script>
export default {
  props:{
    Text:{type:String}
  }
};
</script>

<style >
.button {
  border: 2px solid rgba(255, 255, 255, 0.8);
  cursor: pointer;
  letter-spacing: 0.2125rem;
  overflow: hidden;
  padding: 10px 15px;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  transition: background 5s cubic-bezier(0.19, 1, 0.22, 1),
    border 1s cubic-bezier(0.19, 1, 0.22, 1),
    color 0.6s cubic-bezier(0.19, 1, 0.22, 1);
  user-select: none;
}

.button a {
  color: white;
  text-decoration: none;
}

.button .mask {
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.8);
  height: 100px;
  position: absolute;
  transform: translate3d(-120%, -50px, 0) rotate3d(0, 0, 1, 45deg);
  transition: all 1.1s cubic-bezier(0.19, 1, 0.22, 1);
  width: 200px;
}

.button .shift {
  display: inline-block;
  transition: all 1.1s cubic-bezier(0.19, 1, 0.22, 1);
}

.button:hover {
  background-color: rgba(255, 255, 255, 0.05);
  border-color: #fff;
  box-shadow: 0 0 5px rgba(255, 245, 245, 0.8);
  transition: background 0s;
}

.button:hover a {
  color: #fff;
}

.button:hover .mask {
  background-color: #fff;
  transform: translate3d(120%, -100px, 0) rotate3d(0, 0, 1, 90deg);
}

.button:hover .shift {
  transform: translateX(5px);
}

.button:active {
  background-color: #fff;
}

.button:active a {
  color: #202020;
}
</style>
