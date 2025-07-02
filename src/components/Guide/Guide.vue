<script setup lang="ts">
import Examples from '@/components/Examples/Examples.vue'
import GreenTickIcon from '@/assets/icons/green-tick-icon.svg'
import RedTickIcon from '@/assets/icons/red-tick-icon.svg'
import {useRouter} from 'vue-router'
import {isLoading} from '@/stores/globalLoading'

const router = useRouter()

const handleNext = () => {
    isLoading.value = true
    setTimeout(() => {
        isLoading.value = false
        router.push('/mock/camera')
    }, 1500)
}
</script>

<template>
    <div class="guide-container">
        <div>
            <div class="title">AI Fitting</div>
            <div class="examples-section">
                <div class="example-title">
                    <GreenTickIcon/>
                    <p class="title">
                        Good Examples
                    </p>
                </div>
            </div>
            <Examples class="examples"/>
            <div class="desc">wwwwwwwwwwwwwwww</div>

            <div class="examples-section">
                <div class="example-title">
                    <RedTickIcon/>
                    <div class="title">
                        Bad Examples
                    </div>
                </div>
            </div>
            <Examples class="examples"/>
            <div class="desc">wwwwwwwwwwwwwwww</div>
        </div>
        <button class="action-btn" @click="handleNext"> Next</button>
    </div>
</template>

<style scoped lang="scss">
.title {
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 26px;
    line-height: 100%;
    letter-spacing: 0px;
    color: #000000;
}

:deep(.examples) {
    height: 148px;
    overflow-x: auto;
    width: 100%;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
}

.example-title {
    margin-bottom: 5px;

    .title {
        display: inline-block;
        font-family: Roboto, serif;
        font-weight: 700;
        font-size: 15px;
        line-height: 100%;
        letter-spacing: 0px;
        color: #000000;
        margin-left: 5px;
    }
}

.examples-section {
    margin-top: 16px;
}

.desc {
    margin-top: 8px;
    color: #777777;
    font-family: Roboto, serif;
    font-weight: 400;
    font-size: 13px;
    line-height: 100%;
    letter-spacing: 0px;
}

.guide-container {
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
}

.action-btn {
    background-color: #4853F9;
    color: #FFFFFF;
    border: none;
    border-radius: 8px;
    height: 48px;
    font-weight: 700;
}
</style>