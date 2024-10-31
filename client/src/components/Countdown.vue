<script setup>
import { ref, onMounted } from 'vue';
import { io } from 'socket.io-client';

// Initialize reactive properties for countdown values
const days = ref('00');
const hoursTens = ref('0');
const hoursOnes = ref('0');
const minutesTens = ref('0');
const minutesOnes = ref('0');

const countdownDate = ref(null);

// Connect to the Socket.IO server
const socket = io('http://localhost:8080');

socket.on('connect', () => {
  console.log('Connected to Socket.IO server');
});

// Listen for countdownDate from the server
socket.on('countdownDate', (date) => {
  countdownDate.value = date;
  startCountdown();
});

const startCountdown = () => {
  updateCountdown();
  setInterval(updateCountdown, 1000); // Update every minute
};

// Function to calculate and update the countdown values
const updateCountdown = () => {
  if (countdownDate.value) {
    const now = new Date().getTime();
    const distance = countdownDate.value - now;

    if (distance > 0) {
      days.value = String(Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'));
      const hoursLeft = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutesLeft = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      hoursTens.value = Math.floor(hoursLeft / 10);
      hoursOnes.value = hoursLeft % 10;

      minutesTens.value = Math.floor(minutesLeft / 10);
      minutesOnes.value = minutesLeft % 10;
    } else {
      days.value = hoursTens.value = hoursOnes.value = minutesTens.value = minutesOnes.value = '0';
    }
  }
};

onMounted(() => {
  // Socket.IO will automatically connect when the component is mounted
});
</script>

<template>
  <div class="dropdown mt-[30%] flex flex-col items-center gap-[10px]">
    <span class="dropdown__text text-white font-main text-[24px]">Time left until DROPDOWN</span>

    <div class="time__items time w-[273px] mx-auto flex items-center gap-[13px]">
      <div class="time__item flex flex-col gap-[4px]">
        <span class="text-[28px] font-ibm font-semibold h-[67px] w-[48px] text-black flex items-center justify-center rounded-[7px] bg-white px-[15px] py-[10px]">{{ days }}</span>
        <span class="text-[14px] font-ibm font-semibold text-graySeventy">Days</span>
      </div>
      <div class="time__item flex flex-col gap-[4px] items-center">
        <div class="numbers flex items-center gap-[3px]">
          <span class="text-[28px] font-ibm font-semibold h-[67px] w-[48px] text-black flex items-center justify-center rounded-[7px] bg-white px-[15px] py-[10px]">{{ hoursTens }}</span>
          <span class="text-[28px] font-ibm font-semibold h-[67px] w-[48px] text-black flex items-center justify-center rounded-[7px] bg-white px-[15px] py-[10px]">{{ hoursOnes }}</span>
        </div>
        <span class="text-[14px] font-ibm font-semibold text-graySeventy">Hours</span>
      </div>
      <div class="time__item flex flex-col gap-[4px] items-center">
        <div class="numbers flex items-center gap-[3px]">
          <span class="text-[28px] font-ibm font-semibold h-[67px] w-[48px] text-black flex items-center justify-center rounded-[7px] bg-white px-[15px] py-[10px]">{{ minutesTens }}</span>
          <span class="text-[28px] font-ibm font-semibold h-[67px] w-[48px] text-black flex items-center justify-center rounded-[7px] bg-white px-[15px] py-[10px]">{{ minutesOnes }}</span>
        </div>
        <span class="text-[14px] font-ibm font-semibold text-graySeventy">Minutes</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
