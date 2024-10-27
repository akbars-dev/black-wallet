<script setup>

import Navigation from "../components/Navigation.vue";
import Task from "../components/Task.vue";
import UIButton from "../components/ui/UIButton.vue";


const handleButtonClick = () => {
  console.log('clicked');
}
</script>

<template>

  <div class="home-section pt-[32px]">
    <Task task-title="Tribes" task-description="Compete for rewards" />

    <div class="profile  m-auto mt-[30px] flex flex-col items-center w-[270px]">
      <img class="w-[113px] mb-[6px]" src="../assets/images/profile.svg" alt="profile" />
      <span class="nickname font-main text-[24px] text-white mb-[20px]">kncoder</span>
      <span class="balance-counter gap-[9px] flex items-center  font-main text-[42px] text-white font-normal">28 000 000 <b class="text-[31px] h-[33px] font-normal font-nico text-mainYellow">BW</b></span>
    </div>

    <UIButton btn-title="Show Tasks" :btn-action="handleButtonClick"/>
  </div>

  <Navigation page="/" />
</template>

<style scoped>

</style>