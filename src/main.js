import './assets/main.css'
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'swiper/css';
import 'swiper/css/pagination';
import App from './App.vue'
import router from './router'
import LIFF from './liff';
import {isValidUrl} from "@/helper.js";
import {CLOTHES_SRC_KEY, PRODUCT_URL_KEY, PRODUCT_PRICE_KEY, PRODUCT_TITLE_KEY} from "@/const"

const app = createApp(App)
app.use(createPinia())
app.use(router)

const saveClothesSrc = () => {
    const params = new URLSearchParams(window.location.search);
    const encodedUrl = params.get("clothesImg");

    if (encodedUrl && isValidUrl(encodedUrl)) {
        localStorage.setItem(CLOTHES_SRC_KEY, encodedUrl);
        localStorage.setItem(PRODUCT_URL_KEY, params.get("url"));
        localStorage.setItem(PRODUCT_PRICE_KEY, params.get("price"));
        localStorage.setItem(PRODUCT_TITLE_KEY, params.get("title"));
    }
}
saveClothesSrc();
const runApplication = () => {
    app.mount('#app')
}

if (typeof liff !== 'undefined') {
    LIFF.initialize(runApplication);
} else {
    let initTimer = null;
    let cnt = 0;
    // 기다려본후 여전히 존재하지않으면 reload.
    initTimer = setInterval(() => {
        if (typeof liff !== 'undefined') {
            LIFF.initialize(runApplication);
            clearInterval(initTimer);
        } else {
            cnt++;
            if (cnt === 5) {
                LIFF.setLiffCheck(false);
                runApplication();
                clearInterval(initTimer);
            }
        }
    }, 1000);
}
