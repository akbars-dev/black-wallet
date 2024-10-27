<script setup>
import { RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
</script>

<template>
  <div class="wrapper m-auto">
    <RouterView/>
  </div>
</template>



<style scoped>
.wrapper {
  position: relative;
  max-width: 100%;
  width: 422px;
  background-image: url('./assets/backround.jpg');
  height: 100vh !important;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
