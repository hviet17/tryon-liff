<template>
    <div class="outer-container">
        <div class="loading-content-wrapper">
            <div class="blurred-content-background"></div>
            <div
                v-for="(circle, index) in backgroundCircles"
                :key="index"
                class="blurred-circle"
                :style="circle"
            />

            <div class="ripple-wrapper">
                <div class="ripple"></div>
                <div class="ripple delay-1"></div>
                <div class="ripple delay-2"></div>
                <div class="inner-circle"/>
            </div>

            <div class="text-title">Upcoming AI Fitting</div>
            <div class="text-body">
                WWWWWWWWWWWWWWWWWWWWWWWWWWW
            </div>

            <div class="eye" style="left: 158px"/>
            <div class="eye" style="left: 203px"/>
            <div class="eye small"/>
        </div>
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
/* Ensure HTML and Body take full height/width to allow .outer-container to fill the viewport */
/* You might put this in a global CSS file or your App.vue's main style block,
   NOT necessarily scoped to this component if you want it to affect the whole page. */
html, body, #app { /* Adjust #app if your root Vue element has a different ID */
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden; /* Prevents scrollbars if content slightly exceeds viewport */
}

.blurred-content-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #F8F8F8; /* The background color for your blurred block */
    border-radius: 30px; /* Your desired roundness */
    //box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Your desired shadow */
    filter: blur(10px); /* Apply the blur effect to this layer only! */
    z-index: 0; /* Place it behind all other content within loading-content-wrapper */
}

/* New outer container to take up 100% of the viewport and hold the background color */
.outer-container {
    width: 100vw; /* Take full viewport width */
    height: 100vh; /* Take full viewport height */
    background: #F8F8F8; /* This is your overall background color */
    display: flex; /* Use flexbox to center its child */
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    overflow: hidden; /* Hide any overflow from content that might extend slightly */
    font-family: 'SF Pro Text', sans-serif; /* Apply font to the entire centered design */
}

/* This new wrapper will contain all your original "loading-container" content.
   It will be centered by the .outer-container.
   Crucially, give it a fixed size based on your design's intended dimensions (e.g., mobile screen size).
   All absolute children will now position themselves relative to this wrapper. */
.loading-content-wrapper {
    /* !!! IMPORTANT: Adjust these width and height values to match your design's intended "canvas" size. */
    width: 375px; /* Example: Common mobile width (e.g., iPhone X/11) */
    height: 812px; /* Example: Common mobile height (e.g., iPhone X/11) */
    position: relative; /* All absolute children will now be relative to this wrapper */
    overflow: hidden; /* Keep overflow hidden for content inside this specific area */
    border-radius: 30px;
    /* If you want a *different* background color for the inner centered box, add it here */
    //background: transparent;
}


/* Blurred colorful background circles - positions are relative to .loading-content-wrapper */
.blurred-circle {
    position: absolute;
    width: 148px;
    height: 148px;
    border-radius: 9999px;
    filter: blur(46.53px);
}

/* Ripple circle with pulse effect - position is relative to .loading-content-wrapper */
.ripple-wrapper {
    position: absolute;
    width: 180px;
    height: 180px;
    /* Adjust these values to position the ripple relative to your loading-content-wrapper.
       If your original design assumed a 375px width, these might be close to what you need.
       For perfect horizontal centering within the 375px width:
       left: calc(50% - 90px);
    */
    left: 96px; /* Original value - adjust if needed for your fixed wrapper size */
    top: 238px; /* Original value - adjust if needed for your fixed wrapper size */
    display: flex; /* For centering the inner ripple elements */
    align-items: center;
    justify-content: center;
}

.ripple {
    position: absolute; /* Relative to ripple-wrapper */
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2); /* This is your subtle white ripple background */
    border: 1.5px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(2.95px);
    animation: pulse 2.5s infinite; /* Your pulse animation */
}

.ripple.delay-1 {
    animation-delay: 0.5s;
}

.ripple.delay-2 {
    animation-delay: 1s;
}

.inner-circle {
    position: absolute; /* Relative to ripple-wrapper */
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

/* Texts - Centered horizontally within .loading-content-wrapper */
.text-title {
    position: absolute;
    top: 509px; /* Adjust top relative to your loading-content-wrapper height */
    left: 50%; /* Center horizontally */
    transform: translateX(-50%); /* Adjust for its own width */
    width: 240px;
    text-align: center;
    font-size: 17px;
    font-weight: 700;
    color: #171616;
    line-height: 22px;
}

.text-body {
    position: absolute;
    top: 539px; /* Adjust top relative to your loading-content-wrapper height */
    left: 50%; /* Center horizontally */
    transform: translateX(-50%); /* Adjust for its own width */
    width: 240px;
    font-size: 13px;
    font-weight: 400;
    color: #949494;
    line-height: 18px;
    text-align: center;
    word-break: break-all;
}

/* Progress bar - Centered horizontally within .loading-content-wrapper */
.progress-bar {
    position: absolute;
    top: 778px; /* Adjust top relative to your loading-content-wrapper height */
    left: 50%; /* Center horizontally */
    transform: translateX(-50%); /* Adjust for its own width */
    width: 134px;
    height: 34px;
}

.progress-track {
    position: absolute;
    width: 134px;
    height: 5px;
    top: 21px; /* Relative to progress-bar */
    border-radius: 100px;
}

.progress-track.white {
    background: white;
}

.progress-track.black {
    background: transparent;
}

/* Eyes - Positions are relative to .loading-content-wrapper */
.eye {
    position: absolute;
    top: 313px; /* Adjust top relative to your loading-content-wrapper height */
    width: 10px;
    height: 30px;
    background: white;
    border-radius: 252.94px;
}

.eye.small {
    /* This 'left' value needs to be carefully considered.
       If you want the eyes to appear visually "centered" as a pair/group,
       you might need to adjust these precise pixel values based on
       the width of your `.loading-content-wrapper`.
       For example, if your design implies the eyes are roughly in the center,
       you might put them in their own flex container and center that.
    */
    left: 181px; /* Original value, adjust if needed for your fixed wrapper size */
    width: 10px;
    height: 20px;
}
</style>