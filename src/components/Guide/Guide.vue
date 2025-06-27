<script setup lang="ts">
import Examples from '@/components/Examples/Examples.vue'
import GreenTickIcon from '@/assets/icons/green-tick-icon.svg'
import RedTickIcon from '@/assets/icons/red-tick-icon.svg'
import {useRouter} from 'vue-router'

const router = useRouter()
const handleNext = () => {
    router.push('/result')
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
    font-family: Roboto;
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
}

.example-title {
    margin-bottom: 5px;

    .title {
        display: inline-block;
        font-family: Roboto;
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
    font-family: Roboto;
    font-weight: 400;
    font-size: 13px;
    line-height: 100%;
    letter-spacing: 0px;
}

.guide-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.action-btn {
    background-color: #3B3B3B;
    color: #FFFFFF;
    border: none;
    border-radius: 8px;
    height: 48px;
    font-weight: 700;
}
</style>