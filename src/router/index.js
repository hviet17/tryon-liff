import {createRouter, createWebHistory} from 'vue-router'
import WelcomeView from "@/views/WelcomeView.vue";
import Guide from "@/components/Guide/Guide.vue";
import Result from "@/components/result/Result.vue";
import TryOn from "@/views/TryOn.vue";
import ProductPage from "@/mock/ProductPage.vue";
import CameraScan from "@/mock/CameraScan.vue";
import Home from "@/views/Home.vue";
import RealGuide from "@/views/Guide.vue";
import Scanning from "@/views/Scanning.vue";
import MainView from "@/mock/MainView.vue";
import Processing from "@/views/Processing.vue";

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
            path: '/guide',
            name: 'real-guide',
            component: RealGuide
        },
        {
            path: '/scanning',
            name: 'scanning',
            component: Scanning,
            meta: {
                fullScreen: true
            }
        },
        {
            path: '/processing',
            name: 'processing',
            component: Processing,
            meta: {
                fullScreen: true
            }
        },
        {
            path: '/try-on',
            name: 'try-on',
            component: TryOn,
        },
        {
            path: '/mock/main',
            name: 'main',
            component: MainView
        }, {
            path: '/mock/detail',
            name: 'detail',
            component: ProductPage
        }, {
            path: '/mock/guide',
            name: 'guide',
            component: Guide
        }, {
            path: '/mock/result',
            name: 'result',
            component: Result
        },
        {
            path: '/mock/camera',
            name: 'camera',
            component: CameraScan
        }
    ],
})

let firstLoad = true

router.beforeEach(async (to, from, next) => {
    if (firstLoad && to.name !== 'welcome') {
        firstLoad = false

        // Redirect to splash first
        next({name: 'welcome', query: {redirect: to.fullPath}})
    } else if (to.name === 'welcome' && to.query.redirect) {
        // After showing splash for 2 seconds, go to the intended page
        setTimeout(() => {
            router.replace(to.query.redirect)
        }, 1000)
        next()
    } else {
        next()
    }
})
export default router
