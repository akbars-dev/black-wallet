<script setup>
import { useRouter } from 'vue-router';
import UIButton from "../components/ui/UIButton.vue";

const router = useRouter();

function goToEarnPage() {
  router.push('/earn');
}
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <span class="dropdown__text text-white font-main text-[45px]">Task passed</span>
    <UIButton :btn-action="() => goToEarnPage()" btn-title="Back to tasks"/>
  </div>
</template>

<style scoped>
.show-btn {
  padding: 10px 20px;
  color: #000;
  background-color: #FFFBFB;
  font-size: 18px;
  font-weight: bold;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
}
</style>
