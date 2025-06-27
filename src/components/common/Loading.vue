<template>
    <div class="loading-container">
        <!-- Background content -->
        <div
            v-for="(circle, index) in backgroundCircles"
            :key="index"
            class="blurred-circle"
            :style="circle"
        />

        <!-- Pulse Ripple Circle -->
        <div class="ripple-wrapper">
            <div class="ripple"></div>
            <div class="ripple delay-1"></div>
            <div class="ripple delay-2"></div>
            <div class="inner-circle"/>
        </div>

        <!-- Text and other fixed elements -->
        <div class="text-title">Upcoming AI Fitting</div>
        <div class="text-body">
            WWWWWWWWWWWWWWWWWWWWWWWWWWW
        </div>
        <div class="progress-bar">
            <div class="progress-track white"/>
            <div class="progress-track black"/>
        </div>

        <!-- Eyes -->
        <div class="eye" style="left: 158px"/>
        <div class="eye" style="left: 203px"/>
        <div class="eye small"/>
    </div>
</template>

<script setup>
const backgroundCircles = [
    {
        left: '57px',
        top: '206px',
        background: '#A9ACF6',
    },
    {
        left: '63px',
        top: '294.19px',
        background: '#82F2C2',
    },
    {
        left: '165px',
        top: '206px',
        background: '#EEA2EC',
    },
    {
        left: '163px',
        top: '294.19px',
        background: '#73C6FF',
    },
]
</script>

<style scoped>
.loading-container {
    width: 100%;
    height: 100%;
    position: relative;
    background: #F8F8F8;
    overflow: hidden;
    font-family: 'SF Pro Text', sans-serif;
}

/* Blurred colorful background circles */
.blurred-circle {
    position: absolute;
    width: 148px;
    height: 148px;
    border-radius: 9999px;
    filter: blur(46.53px);
}

/* Ripple circle with pulse effect */
.ripple-wrapper {
    position: absolute;
    width: 180px;
    height: 180px;
    left: 96px;
    top: 238px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.ripple {
    position: absolute;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    border: 1.5px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(2.95px);
    animation: pulse 2.5s infinite;
}

.ripple.delay-1 {
    animation-delay: 0.5s;
}

.ripple.delay-2 {
    animation-delay: 1s;
}

.inner-circle {
    position: absolute;
    width: 180px;
    height: 180px;
    border-radius: 9999px;
    border: 2.95px solid white;
}

/* Pulse animation */
@keyframes pulse {
    0% {
        transform: scale(0.8);
        opacity: 1;
    }
    70% {
        transform: scale(1.5);
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
}

/* Texts */
.text-title {
    position: absolute;
    top: 509px;
    left: 69px;
    width: 240px;
    text-align: center;
    font-size: 17px;
    font-weight: 700;
    color: #171616;
    line-height: 22px;
}

.text-body {
    position: absolute;
    top: 539px;
    left: 69px;
    width: 240px;
    font-size: 13px;
    font-weight: 400;
    color: #949494;
    line-height: 18px;
    text-align: center;
    word-break: break-all;
}

/* Progress bar */
.progress-bar {
    position: absolute;
    top: 778px;
    left: 120.95px;
    width: 134px;
    height: 34px;
}

.progress-track {
    position: absolute;
    width: 134px;
    height: 5px;
    top: 21px;
    border-radius: 100px;
}

.progress-track.white {
    background: white;
}

.progress-track.black {
    background: transparent;
}

/* Eyes */
.eye {
    position: absolute;
    top: 313px;
    width: 10px;
    height: 30px;
    background: white;
    border-radius: 252.94px;
}

.eye.small {
    left: 181px;
    width: 10px;
    height: 20px;
}
</style>
