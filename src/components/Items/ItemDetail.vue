<script setup lang="ts">
import DetailIcon from "@/assets/icons/detail-icon.svg";
import {useRoute, useRouter} from 'vue-router'

const props = defineProps<{
    imgSrc: string
}>()

const route = useRoute()
const router = useRouter()
const handleClick = () => {
    router.push('/mock/guide')
}
</script>

<template>
    <div class="item-card">
        <img class="img" :src='route.params.imgSrc' alt="">
        <div class="icon-btn" @click="handleClick">
            <DetailIcon/>
        </div>
    </div>
</template>

<style scoped lang="scss">
.item-card {
    position: relative;
    border-radius: 20px;
    width: 100%;
    height: fit-content;
    overflow: hidden;
}

.img {
    width: 100%;
    height: 100%;
}

.icon-btn {
    position: absolute;
    bottom: 10px;
    right: 10px;
    cursor: pointer;
    transform: scale(0.8);
}
</style>