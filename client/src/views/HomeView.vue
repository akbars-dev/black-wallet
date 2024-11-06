<script setup>
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import {useAppStore} from "../store/app.js";

import Navigation from "../components/Navigation.vue";
import Task from "../components/Task.vue";
import UIButton from "../components/ui/UIButton.vue";

const router = useRouter();
const {user, profileImage} = useAppStore();


const handleButtonClick = () => {
  return router.push('/earn');
}

</script>

<template>

  <div class="home-section pt-[32px]">
    <Task :action="handleButtonClick" task-title="Tasks" task-description="Compete tasks for rewards"/>

    <div class="profile  m-auto mt-[30px] flex flex-col items-center w-[270px]">
      <img class="w-[113px] mb-[6px] rounded-[50%]" :src="profileImage" alt="profile"/>
      <span class="nickname font-main text-[24px] text-white mb-[20px]">{{ user.firstName }}</span>
      <span
          class="balance-counter gap-[9px] flex items-center  font-main text-[42px] text-white font-normal">{{ user.balance || 0 }}<b
          class="text-[31px] h-[33px] font-normal font-nico text-mainYellow">BW</b></span>
    </div>

    <UIButton btn-title="Show Tasks" :btn-action="handleButtonClick"/>
  </div>

  <Navigation page="/"/>
</template>

<style scoped>

</style>