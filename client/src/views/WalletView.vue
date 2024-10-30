<script setup>

import Navigation from "../components/Navigation.vue";
import UIButton from "../components/ui/UIButton.vue";
import UIStatus from "../components/ui/UIStatus.vue";
import UIPageIndicator from "../components/ui/UIPageIndicator.vue";
</script>

<template>
  <UIStatus :friends="120" />
  <UIPageIndicator page="Wallet" />

  <div class="dropdown mt-[30%] flex flex-col items-center gap-[10px]">
    <span class="dropdown__text text-white font-main text-[24px]">Time left until DROPDOWN</span>

     <div class="time__items time w-[273px] mx-auto flex items-center gap-[13px]">
       <div class="time__item flex flex-col gap-[4px]">
         <span class="text-[28px] font-ibm font-semibold h-[67px] w-[48px] text-black flex items-center justify-center rounded-[7px] bg-white px-[15px] py-[10px]">2</span>
         <span class="text-[14px] font-ibm font-semibold text-graySeventy">Months</span>
       </div>
       <div class="time__item flex flex-col gap-[4px] items-center">
         <div class="numbers flex items-center gap-[3px]">
           <span class="text-[28px] font-ibm font-semibold h-[67px] w-[48px] text-black flex items-center justify-center rounded-[7px] bg-white px-[15px] py-[10px]">2</span>
           <span class="text-[28px] font-ibm font-semibold h-[67px] w-[48px] text-black flex items-center justify-center rounded-[7px] bg-white px-[15px] py-[10px]">3</span>
         </div>
         <span class="text-[14px] font-ibm font-semibold text-graySeventy">Days</span>
       </div>
       <div class="time__item flex flex-col gap-[4px] items-center">
         <div class="numbers flex items-center gap-[3px]">
           <span class="text-[28px] font-ibm font-semibold h-[67px] w-[48px] text-black flex items-center justify-center rounded-[7px] bg-white px-[15px] py-[10px]">2</span>
           <span class="text-[28px] font-ibm font-semibold h-[67px] w-[48px] text-black flex items-center justify-center rounded-[7px] bg-white px-[15px] py-[10px]">3</span>
         </div>
         <span class="text-[14px] font-ibm font-semibold text-graySeventy">Months</span>
       </div>
     </div>
  </div>


  <UIButton btn-title="Connect wallet" :btn-action="() => console.log('WalletView')" />
  <Navigation page="/wallet" />
</template>

<style scoped>

</style>