import {createRouter, createWebHistory} from 'vue-router'
import WelcomeView from "@/views/WelcomeView.vue";
import MainView from "@/views/MainView.vue";
import ItemDetail from "@/components/Items/ItemDetail.vue";
import Guide from "@/components/Guide/Guide.vue";
import Result from "@/components/result/Result.vue";
import Home from "@/views/Home.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/welcome',
            name: 'welcome',
            component: WelcomeView,
        },
        {
            path: '/main',
            name: 'main',
            component: MainView
        }, {
            path: '/detail/:imgSrc',
            name: 'detail',
            component: ItemDetail
        }, {
            path: '/guide',
            name: 'guide',
            component: Guide
        }, {
            path: '/result',
            name: 'result',
            component: Result
        }
    ],
})

export default router
