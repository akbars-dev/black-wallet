import {createRouter, createWebHistory} from 'vue-router'

import HomeView from "./views/HomeView.vue";
import FriendsView from "./views/FriendsView.vue";
import WalletView from "./views/WalletView.vue";
import EarnView from "./views/EarnView.vue";
import PassedView from "./views/PassedView.vue";

const routes = [
    { path: '/', component: HomeView },
    { path: '/friends', component: FriendsView },
    { path: '/wallet', component: WalletView },
    { path: '/earn', component: EarnView },
    { path: '/passed', component: PassedView },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router