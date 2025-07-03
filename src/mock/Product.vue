<script setup lang="ts">
import LoadingIcon from '@/assets/icons/buy-icon.svg'
import {useRouter} from 'vue-router'
import mainPic from '@/assets/src-pic.jpg'

const router = useRouter()
const handleAIFit = () => {
    router.push('/mock/guide')
}
</script>

<template>
    <div class="product-img">
        <img alt="ニット セーター ホールガーメントプルオーバー レディース | Whim Gazette" fetchpriority="high" width="100%" height="516px" decoding="async" data-nimg="1" class="styles_image__9xBuL" :src="mainPic" style="color: transparent; aspect-ratio: 5 / 6;">
        <div class="icon" @click="handleAIFit">
            <LoadingIcon class="icon-svg"/>
            <div>Try On With AI</div>
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
    padding: 10px 12px;
    cursor: pointer;
}

.icon-svg {
    transform: scale(1.4);
}
</style>