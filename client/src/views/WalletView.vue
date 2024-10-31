<script setup>



import Navigation from "../components/Navigation.vue";
import UIButton from "../components/ui/UIButton.vue";
import UIStatus from "../components/ui/UIStatus.vue";
import UIPageIndicator from "../components/ui/UIPageIndicator.vue";
import Countdown from "../components/Countdown.vue";


</script>

<template>
  <UIStatus :friends="120" />
  <UIPageIndicator page="Wallet" />

  <Countdown />


  <UIButton btn-title="Connect wallet" :btn-action="() => console.log('WalletView')" />
  <Navigation page="/wallet" />
</template>

<style scoped>

</style>