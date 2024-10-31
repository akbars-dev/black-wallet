<script setup>
import {ref, onMounted} from "vue";

import {getTasks} from "../services/api.js";

import Navigation from "../components/Navigation.vue";
import UIStatus from "../components/ui/UIStatus.vue";
import UIPageIndicator from "../components/ui/UIPageIndicator.vue";
import Task from "../components/Task.vue";

const data = ref(null);

const fetchData = async () => {
  try {
    const response = await getTasks();
    data.value = response.data;
  }catch (error) {
    console.log(error);
  }
}



onMounted(fetchData);
</script>

<template>
    <UIStatus :balance="20000"/>
    <UIPageIndicator page="Tasks" />

    <div class="tasks mt-[15px] flex flex-col gap-[8px] max-h-[60%]">

      <Task v-for="task in data" :task-title="task.name" :task-description="task.description" :task-link="task.link" />
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