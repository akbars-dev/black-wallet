<script setup>

import Navigation from "../components/Navigation.vue";
import UIStatus from "../components/ui/UIStatus.vue";
import UIPageIndicator from "../components/ui/UIPageIndicator.vue";
import Friend from "../components/Friend.vue";
</script>

<template>
  <UIStatus :friends="130" />
  <UIPageIndicator page="Friends" />


  <div class="friends mt-[15px] flex flex-col gap-[8px] max-h-[60%]">
    <Friend />
    <Friend />
    <Friend />
    <Friend />
    <Friend />
    <Friend />
    <Friend />
    <Friend />
    <Friend />
    <Friend />
    <Friend />
    <Friend />
    <Friend />
    <Friend />
    <Friend />
    <Friend />
    <Friend />
  </div>

  <Navigation page="/friends" />
</template>

<style scoped>
.friends {
  overflow-y: scroll;
}

/* WebKit Scrollbar */
.friends::-webkit-scrollbar {
  width: 1px;
}

.friends::-webkit-scrollbar-track {
  background: transparent;
}

.friends::-webkit-scrollbar-thumb {
  background-color: transparent;
  border-radius: 6px;
}

.friends::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}

</style>