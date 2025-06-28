import {createRouter, createWebHistory} from 'vue-router'
import WelcomeView from "@/views/WelcomeView.vue";
import MainView from "@/views/MainView.vue";
import ItemDetail from "@/components/Items/ItemDetail.vue";
import Guide from "@/components/Guide/Guide.vue";
import Result from "@/components/result/Result.vue";
import Home from "@/views/Home.vue";
import Test from "@/views/Test.vue";

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
        }, {
            path: '/test',
            name: 'test',
            component: Test
        }
    ],
})

// Flag to avoid multiple splash delays
let firstLoad = true

router.beforeEach(async (to, from, next) => {
    if (firstLoad && to.name !== 'welcome') {
        firstLoad = false

        // Redirect to splash first
        next({ name: 'welcome', query: { redirect: to.fullPath } })
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

