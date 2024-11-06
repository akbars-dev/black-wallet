<script setup>
import {ref, onMounted} from "vue";

import Navigation from "../components/Navigation.vue";
import UIStatus from "../components/ui/UIStatus.vue";
import UIPageIndicator from "../components/ui/UIPageIndicator.vue";
import Task from "../components/Task.vue";
import {useAppStore} from "../store/app.js";
import useTelegram from "../services/telegram.js";
import {useRouter} from "vue-router";

const app = useAppStore()
const router = useRouter()
const {tg} = useTelegram()


onMounted(async () => {
  await app.fetchTasks();
});

async function openTask(task) {
  await app.passTask(task._id);

  if (task.link.includes('t.me')) {
    tg.openTelegramLink(task.link);
  } else {
    tg.openLink(task.link);
  }
  router.push("/passed")
}
</script>

<template>
    <UIStatus :balance="true"/>
    <UIPageIndicator page="Tasks" />

    <div class="tasks mt-[15px] flex flex-col gap-[8px] max-h-[60%]">
      <Task :action="() => openTask(task)" v-for="task in app.tasks?.notPassedTasks" :status="false" :task-title="task.name" :task-description="task.description" :task-link="task.link" />
      <Task v-for="task in app.tasks?.passedTasks" :status="true" :task-title="task.name" :task-description="task.description" :task-link="task.link" />
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