<template>
    <div class="scan-container">
        <img ref="imageRef" :src="imageUrl" :alt="imageAlt" class="scan-image"/>

        <div
            v-if="imageHeight > 0 && enableGlow"
            class="scanned-area-overlay"
            :style="scannedAreaOverlayStyle"
        ></div>

        <div
            class="scan-line"
            :class="{ 'is-scanning': isScanning }"
            :style="scanLineStyle"
            @transitionend="handleScanEnd"
        ></div>
    </div>
</template>

<script setup>
import {computed, onMounted, ref, watch} from 'vue';
import imgSrc from '@/assets/clothe.png' // Assuming this path is correct for your default image

const props = defineProps({
    imageUrl: {
        type: String,
        required: false, // Changed to false if default is provided
        default: imgSrc,
    },
    imageAlt: {
        type: String,
        default: 'Image for scanning',
    },
    scanDuration: {
        type: Number,
        default: 1000, // milliseconds for one full scan
    },
    lineHeight: {
        type: Number,
        default: 3, // height of the scan line in pixels
    },
    repeatScan: {
        type: Boolean,
        default: false, // set to true to loop the scan
    },
    enableGlow: {
        type: Boolean,
        default: true, // Renamed from enableGlow for clarity on its new role
    },
    glowColor: {
        type: String,
        default: 'rgba(0, 0, 0, 0.4)', // This is now the color of the accumulating overlay
    },
    glowBlur: {
        type: String,
        default: '5px', // This is now the blur of the accumulating overlay
    }
});

const imageRef = ref(null);
const imageHeight = ref(0);

const isScanning = ref(false);
const scanProgress = ref(0); // 0 to 1, representing top to bottom
const isInitialized = ref(false); // New flag to control initial scan start

// Styles for the main white scan line
const scanLineStyle = computed(() => {
    const topOffset = scanProgress.value * 100;
    return {
        top: `${topOffset}%`,
        height: `${props.lineHeight}px`,
        // Apply transition only if initialized AND scanning
        transition: (isInitialized.value && isScanning.value) ? `top ${props.scanDuration}ms linear` : 'none',
    };
});

// NEW: Styles for the accumulating black blur overlay
const scannedAreaOverlayStyle = computed(() => {
    if (!imageHeight.value || !props.enableGlow) return {}; // Render only if image height is known and glow is enabled

    // The height of the overlay grows with scanProgress
    const heightPercent = scanProgress.value * 100;

    return {
        top: `0%`, // Always starts from the top of the container
        height: `${heightPercent}%`, // Grows downwards
        backgroundColor: props.glowColor,
        backdropFilter: `blur(${props.glowBlur})`,
        // Transition applied to 'height', using the same duration as the line
        transition: (isInitialized.value && isScanning.value) ? `height ${props.scanDuration}ms linear` : 'none',

    };
});


const startScan = () => {
    isScanning.value = true;
    scanProgress.value = 1; // Drives both line's top and overlay's height to 100%
};

const resetScan = () => {
    isScanning.value = false;
    scanProgress.value = 0; // Snap line and overlay height back to 0%

    // Wait a moment for the 'none' transition to register before potentially restarting
    setTimeout(() => {
        if (props.repeatScan) {
            startScan();
        }
    }, 50);
};

const handleScanEnd = () => {
    // When the transition ends for the scan line (top: 100%)
    if (scanProgress.value === 1) {
        resetScan();
    }
};

onMounted(() => {
    const imgElement = imageRef.value;
    if (imgElement) {
        const handleImageLoad = () => {
            imageHeight.value = imgElement.offsetHeight;

            // Ensure imageHeight is valid before starting scan
            if (imageHeight.value > 0) {
                // Set initialized flag BEFORE starting the scan
                isInitialized.value = true;
                // Small delay before starting the *first* scan to ensure rendering settles
                setTimeout(() => {
                    startScan();
                }, 100);
            } else {
                console.warn("Image height is 0 after loading. Cannot start scan:", props.imageUrl);
            }
        };

        // Check if image is already complete (e.g., from cache)
        if (imgElement.complete && imgElement.naturalHeight > 0) {
            handleImageLoad();
        } else {
            // Image needs to load
            imgElement.onload = handleImageLoad;
            imgElement.onerror = () => {
                console.error("Image failed to load:", props.imageUrl);
                imageHeight.value = 0; // Set to 0 or a fallback value
            };
        }
    }
});

watch(() => props.repeatScan, (newVal) => {
    if (newVal && !isScanning.value) {
        if (isInitialized.value) {
            startScan();
        }
    } else if (!newVal && isScanning.value && scanProgress.value < 1) {
        isScanning.value = false;
        scanProgress.value = 0;
    }
});

watch(imageHeight, (newHeight) => {
    if (newHeight > 0 && !isInitialized.value) {
        isInitialized.value = true;
        setTimeout(() => {
            startScan();
        }, 100);
    }
});
</script>

<style scoped>
.scan-container {
    position: relative;
    display: inline-block;
    overflow: hidden; /* Crucial to clip the growing overlay to the image bounds */
}

.scan-image {
    display: block;
    max-width: 100%;
    height: auto;
}

/* Styles for the main white scan line */
.scan-line {
    position: absolute;
    left: 0;
    width: 100%;
    background-color: white; /* The actual white line */
    z-index: 10; /* Ensures it's on top of the image and the accumulating overlay */
    pointer-events: none;
    top: 0%; /* Initial CSS top, will be overridden by :style */
}

/* NEW: Styles for the accumulating black blur overlay */
.scanned-area-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0%; /* Initial state: no height, so it's invisible */
    z-index: 5; /* Below the scan line, above the image */
    pointer-events: none;
    /* Add hardware acceleration hint for smoother backdrop-filter animation */
    will-change: transform, filter;
    /* Background color and backdrop-filter are set via :style */
}

/* No .is-scanning class needed for the overlay's transition itself, as it's handled by :style */
</style>