<script setup>
import { defineProps } from 'vue';
import {useRouter} from "vue-router";

const router = useRouter();

const taskAction = (link) => {
  router.push(link)
}

defineProps({
  taskTitle: String,
  taskDescription: String,
  taskLink: String,
})
</script>

<template>
<div class="task w-[91%] m-auto rounded-[12px] h-[67px] p-[20px] flex items-center justify-between  bg-bgGray">
  <div class="task__info flex items-center gap-[10px]">
    <img src="../assets/images/star.svg" alt="star">
    <div class="flex flex-col  ">
      <span class="text-white font-main text-[17px]">{{ taskTitle }}</span>
      <span class="font-ibm text-mainGray text-[12px]">{{ taskDescription }}</span>
    </div>
  </div>
  <a  target="_blank" class="task__button text-white font-main px-[24px] w-[68px] flex items-center justify-center rounded-[24px] text-[16px] pb-[5px] bg-btnGray">
    Open
  </a>
</div>
</template>

<style scoped>

</style>