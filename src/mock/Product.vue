<script setup lang="ts">
import AIIcon from '@/assets/icons/ai-icon-btn.svg'
import {useRouter} from 'vue-router'
import {isLoading} from '@/stores/globalLoading'

const router = useRouter()
const handleAIFit = () => {
    isLoading.value = true
    setTimeout(() => {
        isLoading.value = false
        router.push('/mock/guide')
    }, 1000)
}
</script>

<template>
    <div class="product-img">
        <img alt="ニット セーター ホールガーメントプルオーバー レディース | Whim Gazette" fetchpriority="high" width="100%" height="516px" decoding="async" data-nimg="1" class="styles_image__9xBuL" src="https://z-shopping.c.yimg.jp/512/96369512/96369512_2_d_500.jpg" style="color: transparent; aspect-ratio: 5 / 6;">
        <div class="icon" @click="handleAIFit">
            <AIIcon/>
            <div>AI Fitting</div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.product-img {
    width: 100%;
    height: fit-content;
    position: relative;
}

.icon {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: #4C46F9;
    border-radius: 100px;
    border: 1px solid #4C46F9;
    padding: 4px 20px;
    cursor: pointer;
}

</style>