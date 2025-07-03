<script setup lang="ts">
import {onMounted, onUnmounted, ref} from 'vue';
import beforeImage from '@/assets/main-pic.png';
import afterImage from '@/assets/base-clothe.png'; // Make sure you have this image
import BuyIcon from '@/assets/icons/buy-icon.svg'

const containerRef = ref<HTMLElement | null>(null);
const afterImageRef = ref<HTMLElement | null>(null);
const sliderHandleRef = ref<HTMLElement | null>(null);

let isDragging = false;

const startDragging = (e: MouseEvent | TouchEvent) => {
    isDragging = true;
    // Immediately call onDrag once when dragging starts to set the initial position
    // This ensures the image starts updating from the very first drag action.
    onDrag(e);
};

const stopDragging = () => {
    isDragging = false;
};

const onDrag = (e: MouseEvent | TouchEvent) => {
    // Only proceed if we are in a dragging state AND have all elements
    if (!isDragging || !containerRef.value || !afterImageRef.value || !sliderHandleRef.value) {
        return;
    }

    const containerRect = containerRef.value.getBoundingClientRect();
    let clientX: number;

    if (e instanceof MouseEvent) {
        clientX = e.clientX;
    } else if (e instanceof TouchEvent) {
        clientX = e.touches[0].clientX;
    } else {
        return;
    }

    // Calculate x relative to the container
    let x = clientX - containerRect.left;

    // Constrain the slider within the image container boundaries
    if (x < 0) x = 0;
    if (x > containerRect.width) x = containerRect.width;

    const percentage = (x / containerRect.width) * 100;

    // Update the clip-path for the "after" image in real-time
    afterImageRef.value.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;

    // Update the position of the slider handle
    sliderHandleRef.value.style.left = `${percentage}%`;
};

onMounted(() => {
    // These listeners need to be on the window for continuous drag even if cursor leaves container
    window.addEventListener('mouseup', stopDragging);
    window.addEventListener('touchend', stopDragging);
    window.addEventListener('mousemove', onDrag);
    window.addEventListener('touchmove', onDrag);

    // Initial positioning of the slider and clip-path for consistency
    // This sets the slider to the far left and after image completely hidden
    if (afterImageRef.value && sliderHandleRef.value) {
        afterImageRef.value.style.clipPath = `inset(0 100% 0 0)`;
        sliderHandleRef.value.style.left = `0%`;
    }
});

onUnmounted(() => {
    window.removeEventListener('mouseup', stopDragging);
    window.removeEventListener('touchend', stopDragging);
    window.removeEventListener('mousemove', onDrag);
    window.removeEventListener('touchmove', onDrag);
});
</script>

<template>
    <div class="result-wrapper">
        <div class="result-container">
            <div class="summary-container">
                <div class="img-result image-comparison-container" ref="containerRef">
                    <img :src="beforeImage" alt="Before Image" class="comparison-image before-image">
                    <img :src="afterImage" alt="After Image" class="comparison-image after-image" ref="afterImageRef">
                    <div class="slider-handle" ref="sliderHandleRef"
                         @mousedown="startDragging"
                         @touchstart="startDragging">
                    </div>
                </div>
                <div class="result-title">
                    <span>Hello!</span>
                    <br>
                    <span style="margin-top: 5px; display: inline-block;">
                Gorgeous looks!
            </span>
                </div>
                <div class="summary">
                    <div class="center">
                        <div class="item">
                            <div class="img">
                                <img :src="beforeImage" alt="">
                            </div>
                            <div class="item-info">
                                <div class="name">Shirt</div>
                                <div class="info">wwwwww</div>
                                <div class="price">$2000</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="action-btn">
                <BuyIcon/>
                <div class="buy-text-btn">BUY NOW</div>
            </div>

        </div>
    </div>
</template>
<style scoped lang="scss">
.img-result {
    height: 350px;
    overflow: hidden;
    margin: 0 auto;

}

.summary-container {
    width: 90%;
    margin: 0 auto;
}

.summary {
    display: flex;
    flex-direction: column;
    height: 184px;
    width: 100%;
    //padding: 20px;
    border-radius: 5px;
    margin-top: 20px;
}

.item {
    display: flex;
    height: 100%;
    gap: 10px;

    .img {
        width: 64px;
        height: 64px;
        overflow: hidden;

        img {
            border-radius: 5px;
            width: 100%;
            height: 100%;
        }
    }

    .name {
        font-family: Roboto, sans-serif;
        font-weight: 600;
        font-size: 12px;
        line-height: 13px;
        letter-spacing: 0px;
        color: #FFFFFF;
    }

    .info {
        font-family: Roboto, sans-serif;
        font-weight: 400;
        font-size: 13px;
        line-height: 20px;
        letter-spacing: 0px;
        color: #B2B2B2;
    }
}

.item-info {
    flex: 1;
    color: #FFFFFF;
}

.price {
    font-family: Roboto, sans-serif;
    font-weight: 800;
    font-size: 15px;
    line-height: 100%;
    letter-spacing: 0px;
    flex: 1;
}

.title {
    display: inline-block;
    font-family: Roboto, sans-serif;
    font-weight: 500;
    font-size: 13px;
    line-height: 100%;
    letter-spacing: 0px;
    text-align: center;
    color: #000000;
}

.header {
    border-bottom: 2px solid #ffff;
    width: 100%;
}

.center {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
}

.action-btn {
    background-color: #171717;
    color: #FFFFFF;
    border: none;
    border-radius: 8px;
    height: 48px;
    font-weight: 700;
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
}


.buy-text-btn {
    // BUY NOW
    color: #E9E9EB;
    font-size: 13px;
    font-weight: 600;
    line-height: 17px;
    word-wrap: break-word
}

.result-container {
    width: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0 auto;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 30px;
    padding: 25px 0px;
    background: linear-gradient(157deg,
        #2D2D2D 0%,
        #939393 60%,
        #030303 100%);
}

.result-wrapper {
    width: 100%;
    height: 100%;
    background-color: #1E1E1E;
}

.result-title {
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 32px;
    line-height: 100%;
    letter-spacing: -0.4px;
    color: #FFFFFF;
    margin-top: 30px;
}

/* Add these styles to your existing <style scoped lang="scss"> block */

.img-result.image-comparison-container {
    position: relative;
    overflow: hidden; /* Important for clipping the after image */
    cursor: ew-resize; /* Indicate horizontal resizing */
    border-radius: 30px;
    /* Maintain your existing height, width, margin-bottom etc. */
}

.comparison-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px; /* Apply the border-radius from img-result img */
}

.after-image {
    /* Initially, half of the after image is hidden. */
    /* JavaScript will update this clip-path value. */
    clip-path: inset(0 0 0 5%);
}

.slider-handle {
    position: absolute;
    top: 0;
    left: 5%; /* Start in the middle */
    width: 4px; /* The width of your "white line" */
    height: 100%;
    background-color: white; /* Your "white line" color */
    cursor: ew-resize;
    transform: translateX(-50%); /* Center the handle on its left edge */
    z-index: 10; /* Ensure it's above the images */
}

/* Optional: Add a circle/dot to the handle for better visibility and a grab target */
//.slider-handle::before {
//    content: '';
//    position: absolute;
//    top: 50%;
//    left: 50%;
//    width: 30px; /* Size of the circle/dot */
//    height: 30px;
//    background-color: white;
//    border-radius: 50%;
//    transform: translate(-50%, -50%);
//    border: 2px solid #333; /* A border for the circle */
//}

/* Your existing styles... */
.img-result {
    height: 350px;
    overflow: hidden;
    margin: 0 auto;

    // Remove the img rule from here as comparison-image will handle it
    // img {
    //     width: 100%;
    //     height: 100%;
    //     border-radius: 20px;
    // }
}

/* ... rest of your styles ... */
</style>