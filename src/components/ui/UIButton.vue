<script setup>
import {defineProps} from 'vue'

defineProps({
  btnTitle: String,
  btnAction: Function,
})
</script>

<template>
  <button v-on:click="btnAction" class="show-btn w-[91%] absolute bottom-[81px]">{{btnTitle}}</button>
</template>

<style scoped>
.show-btn {
  left: 50%;
  transform: translateX(-50%);
  padding: 7px;
  color: #000;
  text-align: center;
  font-family: "Monomaniac One",serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.44px;
  background: #FFFBFB;
  border-radius: 8px;
}
</style>