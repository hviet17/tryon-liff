import './assets/main.css'
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

import LIFF from './liff';
import {isValidUrl} from "@/helper.js";
import {CLOTHES_SRC_KEY} from "@/const.js";

const saveClothesSrc = () => {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const encodedUrl = params.get("url");

    if (encodedUrl && isValidUrl(encodedUrl)) {
        localStorage.setItem(CLOTHES_SRC_KEY, encodedUrl);
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
