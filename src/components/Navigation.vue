<script setup>
import { defineProps } from 'vue';
import useTelegram from "../services/telegram.js";

import EarnIcon from "./icons/EarnIcon.vue";
import FriendsIcon from "./icons/FriendsIcon.vue";
import HomeIcon from "./icons/HomeIcon.vue";
import WalletIcon from "./icons/WalletIcon.vue";

const props = defineProps({
  page: String,
});

const telegram = useTelegram().tg;

const handleClick = () => {
  telegram.HapticFeedback.selectionChanged()
}
</script>

<template>
  <div class="navigation w-full bg-transparent flex px-[55px] mt-auto absolute bottom-[12px] font-main left-0 justify-between items-center">
    <RouterLink v-on:click="handleClick" to="/" >
      <div  class="navigation-item" :class="{ active: page === '/' }">
        <HomeIcon :active="page === '/'" />
        <span>Home</span>
      </div>
    </RouterLink>

    <RouterLink  v-on:click="handleClick" to="/earn" >
      <div class="navigation-item" :class="{ active: page === '/earn' }">
        <EarnIcon :active="page === '/earn'" />
        <span>Earn</span>
      </div>
    </RouterLink>

    <RouterLink  v-on:click="handleClick" to="/friends" >
      <div class="navigation-item" :class="{ active: page === '/friends' }">
        <FriendsIcon :active="page === '/friends'" />
        <span>Friends</span>
      </div>
    </RouterLink>

    <RouterLink  v-on:click="handleClick" to="/wallet" >
      <div class="navigation-item" :class="{ active: page === '/wallet' }">
        <WalletIcon :active="page === '/wallet'" />
        <span>Wallet</span>
      </div>
    </RouterLink>

  </div>
</template>

<style scoped>
.navigation .navigation-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}

.navigation .navigation-item.active span {
  color: white; /* Color for active item */
}

.navigation .navigation-item span{
  color: rgba(255, 255, 255, 0.50);
  text-align: center;
  font-family: "Monomaniac One";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.6px;
}
</style>
