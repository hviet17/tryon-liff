<script setup lang="ts">
import clotheSrc from "@/assets/clothe.png"

const examples = [{imgSrc: clotheSrc}, {imgSrc: clotheSrc}, {imgSrc: clotheSrc}, {imgSrc: clotheSrc}, {imgSrc: clotheSrc}, {imgSrc: clotheSrc}, {imgSrc: clotheSrc}];

</script>

<template>
    <div class="examples-container">
        <div class="examples">
            <img :src="item.imgSrc" v-for="(item, index) in examples" :key="index">
        </div>
    </div>
</template>

<style scoped lang="scss">
.examples {
    display: flex;
    gap: 5px;

    img {
        border-radius: 5px;
    }
}


</style>