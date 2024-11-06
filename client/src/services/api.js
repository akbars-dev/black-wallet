import axios from 'axios';
import useTelegram from "./telegram.js";

const api = axios.create({
    baseURL: 'http://127.0.0.1:8080',
    timeout: 1000,
});

export const fetchTasks = async (id) => {
    const response = await api.get(`/task/all/${id}`);
    return response.data.data;
}

export const compleateTask = async (taskId, telegramId) => {
    const response = await api.put(`/task/pass/${taskId}`, {telegramId}, {})
    return response.data.data;
}


export const getOrCreateUser = async () => {
    const {user} = useTelegram()

    const exists = await (await api.get(`/user/check/${user.id}`)).data.data;
    if (exists) {
        return exists;
    } else {
        return await (await api.post('/user/register', {
            firstName: user.first_name,
            telegramId: user.id,
            profileImage: user.photo_url
        })).data.data;
    }
}