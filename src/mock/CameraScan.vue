<template>
    <div class="scan-container" :style="{ backgroundImage: `url(${imgSrc})` }">
        <div class="scanner" @animationiteration="handleScan"></div>
    </div>
</template>

<script setup>
import imgSrc from '@/assets/clothe.png';
import {ref} from 'vue';
import {useRouter} from "vue-router";
import {isLoading} from "@/stores/globalLoading.js";
// How many scans to perform
const totalScans = ref(2)
const currentScan = ref(0)
const router = useRouter()
const handleScan = () => {
    currentScan.value++

    if (currentScan.value >= totalScans.value) {
        isLoading.value = true
        setTimeout(() => {
            isLoading.value = false
            router.push('/mock/result')
        }, 1500)
    }
}
</script>

<style scoped lang="scss">
.scan-container {
    position: relative;
    height: 100dvh;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
}

.scanner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0%;
    background-color: rgba(0, 0, 0, 0.4);
    animation: scanGrow 3s linear infinite;
    overflow: visible;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 2px;
        width: 100%;
        background: white;
        box-shadow: 0 0 10px 2px white;
    }
}

@keyframes scanGrow {
    0% {
        height: 0%;
    }
    100% {
        height: 100%;
    }
}
</style>
