<script setup>
import {RouterView} from "vue-router";
import {useAppStore} from "./store/app.js";
import {onMounted, ref} from "vue";
import UILoading from "./components/ui/UILoading.vue";


const app = useAppStore();
const loading = ref(false);

onMounted(async () => {
  await app.init().then(() => {
    loading.value = true;
  })
})
</script>

<template>
  <UILoading v-if="!loading" />


  <div v-if="loading" class="wrapper m-auto">
    <RouterView/>
  </div>

</template>


<style scoped>
.wrapper {
  position: relative;
  max-width: 100%;
  width: 450px;
  background-image: url('assets/images/backround.jpg');
  height: 100vh !important;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
