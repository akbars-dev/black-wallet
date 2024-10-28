<script setup>
import {defineProps} from 'vue'


defineProps({
  page: String,
})
</script>

<template>
  <div class="indicator flex items-center gap-[6px] mt-[7px] w-[91%] m-auto">
    <svg width="1" height="34" viewBox="0 0 1 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="1" height="34" rx="0.5" fill="#FFD700" fill-opacity="0.76"/>
    </svg>

    <span class="font-main text-white text-[20px]">{{page}}</span>
  </div>

</template>

<style scoped>

</style>