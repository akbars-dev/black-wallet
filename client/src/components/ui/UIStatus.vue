<script setup>
import {defineProps} from  'vue'

defineProps({
  img: String,
  username: String,
  balance: Number,
  friends: Number,
})


</script>

<template>
  <div class="status w-[91%] justify-between mx-auto pt-[20px] flex items-center">
    <div class="profile flex items-center gap-[7px]">
      <img class="w-[32px] " src="../../assets/images/profile.svg" alt="profile">
      <span class="font-main text-[20px] text-white">kncoder</span>
    </div>

    <div v-if="balance || friends" class="counter">
      <span v-if="balance" class="font-main text-white text-[24px] flex items-center gap-[9px]">
        {{ balance }}
        <b class="font-nico text-mainYellow mt-[5px] text-[20px] font-normal">BW</b>
      </span>


      <span v-if="friends" class="text-[20px] font-normal font-main text-white">{{ friends }} Friends</span>
    </div>
  </div>
</template>

<style scoped>

</style>