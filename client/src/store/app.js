import {defineStore} from "pinia";
import {compleateTask, fetchTasks, getOrCreateUser} from "../services/api.js";
import getFileLink from "../services/file.js";
import useTelegram from "../services/telegram.js";

const {tg} = useTelegram()

export const useAppStore = defineStore('app', {
    state: () => ({
        user: {},
        tasks: [],
        profileImage: ""
    }),

    actions: {
        async init() {
            this.user = await getOrCreateUser()
            this.profileImage = await getFileLink(this.user["profileImage"])
        },

        async fetchTasks () {
            this.tasks = await fetchTasks(this.user.telegramId)
        },


        async passTask(taskId) {
            await compleateTask(taskId, this.user.telegramId)
        }
    }
})