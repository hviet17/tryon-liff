<template>
    <div class="profile-card" data-mode="Light">
        <div class="profile-name">{{ profile.name }}</div>
        <div class="profile-photo-wrapper" :data-photo-type="profile.type">
            <img class="profile-image" :src="profile.image" alt="Profile Picture"/>
            <template v-if="profile.type === 'Multi Profile [4]' && profile.subImages">
                <img v-for="(subImage, index) in profile.subImages"
                     :key="index"
                     :src="subImage"
                     :class="getSubImageClass(index)"
                     alt="Sub Profile Picture"/>
            </template>
        </div>
        <div v-if="profile.badgeType !== 'None'" class="badge-placeholder" :data-badge-type="profile.badgeType" data-mode="None">
            <div class="badge-circle"></div>
        </div>
    </div>
</template>

<script setup>
import {defineProps} from 'vue';

const props = defineProps({
    profile: {
        type: Object,
        required: true,
        // Define a more specific shape for validation if needed
        // validator: (value) => {
        //   return typeof value.name === 'string' && typeof value.image === 'string';
        // }
    }
});

// Function to determine class for sub-images in multi-profile
const getSubImageClass = (index) => {
    // These positions are hardcoded based on your original HTML structure
    // You might want to calculate them dynamically or simplify them if the design allows
    switch (index) {
        case 0:
            return 'sub-image top-left-sub';
        case 1:
            return 'sub-image bottom-left-sub';
        case 2:
            return 'sub-image top-right-sub';
        case 3:
            return 'sub-image bottom-right-sub';
        default:
            return 'sub-image';
    }
};
</script>

<style scoped>
.profile-card {
    width: 62px;
    height: 96px;
    position: relative; /* Essential because children are absolutely positioned */
    /* This component will be placed within the grid or wherever, so its own position will be determined by its parent */
}

.profile-name {
    width: 62px;
    height: 26px;
    left: 0px;
    top: 70px;
    position: absolute;
    text-align: center;
    color: #111111;
    font-size: 11px;
    font-family: 'SF Pro Text', sans-serif;
    font-weight: 400;
    word-wrap: break-word;
    white-space: normal; /* Allow text to wrap if it's too long */
    overflow: hidden; /* Hide overflow if text still too long */
    text-overflow: ellipsis; /* Add ellipsis if text is cut off */
}

.profile-photo-wrapper {
    width: 62px;
    height: 62px;
    left: 0px;
    top: 0px;
    position: absolute;
}

.profile-image {
    width: 62px;
    height: 62px;
    left: 0px;
    top: 0px;
    position: absolute;
    border-radius: 9999px;
    /* Specific border for Multi Profile [4] first image */

    &[data-photo-type="Multi Profile [4]"] {
        border: 0.50px rgba(42, 42, 42, 0.05) solid;
    }
}

/* Multi Profile Specific Styles */
.sub-image {
    position: absolute;
    /* Common styles for all sub-images */
}

.top-left-sub {
    width: 31px;
    height: 31px;
    left: -0.50px;
    top: -0.50px;
}

.top-right-sub {
    width: 31px;
    height: 31px;
    left: 31.50px;
    top: -0.50px;
}

.bottom-left-sub {
    width: 31px;
    height: 31px;
    left: -0.50px;
    top: 31.50px;
}

.bottom-right-sub {
    width: 31px;
    height: 31px;
    left: 31.50px;
    top: 31.50px;
}


.badge-placeholder {
    width: 18px;
    height: 18px;
    left: 46px;
    top: 44px;
    position: absolute;
}

.badge-circle {
    width: 18px;
    height: 18px;
    left: 0px;
    top: 0px;
    position: absolute;
    border-radius: 9.50px;
    /* No background defined in original for 'None' badge, so it's transparent */
}
</style>