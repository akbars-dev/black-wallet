import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8080',
    timeout: 1000,
});

export const getTasks = async () => {
    const response = await api.get('/task/all');
    return response.data;
}
