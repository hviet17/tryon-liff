<script setup lang="ts">
import DetailIcon from '@/assets/icons/detail-icon.svg'

const props = defineProps<{
    imgSrc: string,
}>()
</script>

<template>
    <div class="item-card">
        <img class="img" :src='imgSrc' alt="">
        <div class="icon-btn">
            <DetailIcon/>
        </div>
    </div>
</template>

<style scoped lang="scss">
.item-card {
    position: relative;
    border-radius: 20px;
    width: 175px;
    height: 250px;
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