<script setup>

import Navigation from "../components/Navigation.vue";
import UIStatus from "../components/ui/UIStatus.vue";
import UIPageIndicator from "../components/ui/UIPageIndicator.vue";
import Task from "../components/Task.vue";
</script>

<template>
    <UIStatus :balance="20000"/>
    <UIPageIndicator page="Tasks" />

    <div class="tasks mt-[15px] flex flex-col gap-[8px] max-h-[60%]">
      <Task task-title="Tribes" task-description="Compete for rewards" />
      <Task task-title="Tribes" task-description="Compete for rewards" />
      <Task task-title="Tribes" task-description="Compete for rewards" />
      <Task task-title="Tribes" task-description="Compete for rewards" />
      <Task task-title="Tribes" task-description="Compete for rewards" />
      <Task task-title="Tribes" task-description="Compete for rewards" />
      <Task task-title="Tribes" task-description="Compete for rewards" />
      <Task task-title="Tribes" task-description="Compete for rewards" />
      <Task task-title="Tribes" task-description="Compete for rewards" />
      <Task task-title="Tribes" task-description="Compete for rewards" />
      <Task task-title="Tribes" task-description="Compete for rewards" />
      <Task task-title="Tribes" task-description="Compete for rewards" />
      <Task task-title="Tribes" task-description="Compete for rewards" />
      <Task task-title="Tribes" task-description="Compete for rewards" />
      <Task task-title="Tribes" task-description="Compete for rewards" />
    </div>


  <Navigation page="/earn" />
</template>

<style scoped>
.tasks {
  overflow-y: scroll;
}

/* WebKit Scrollbar */
.tasks::-webkit-scrollbar {
  width: 1px;
}

.tasks::-webkit-scrollbar-track {
  background: transparent;
}

.tasks::-webkit-scrollbar-thumb {
  background-color: transparent;
  border-radius: 6px;
}

.tasks::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}



</style>