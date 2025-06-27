<script setup lang="ts">
import ItemCard from "@/components/Items/ItemCard.vue";
import clotheSrc from "@/assets/clothe.png"
import {useRouter} from 'vue-router'

const router = useRouter()

const items = [{imgSrc: clotheSrc}, {imgSrc: clotheSrc}, {imgSrc: clotheSrc}, {imgSrc: clotheSrc}, {imgSrc: clotheSrc}, {imgSrc: clotheSrc}, {imgSrc: clotheSrc}];

const handleCardClick = (item) => {
    router.push({name: 'detail', params: {imgSrc: item.imgSrc}})
}
</script>

<template>
    <div class="items-container">
        <div v-if="items.length" class="item-list">
            <ItemCard v-for="(item, index) in items" :key="index" :img-src="item.imgSrc" @click="()=> handleCardClick(item)"/>
        </div>
    </div>

</template>

<style scoped lang="scss">
.items-container {
    display: flex;
    justify-content: center;
}

.item-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: flex-start;
    max-width: 360px;
}
</style>