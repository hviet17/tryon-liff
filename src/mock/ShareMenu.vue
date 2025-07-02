<template>
    <div class="share-menu-overlay" v-if="showMenu" @click.self="hideMenu">
        <Transition name="slide-up">
            <div v-if="showMenu" class="share-menu-container" data-mode="Light" data-type="Menu">
                <div class="menu-background"></div>

                <div class="header-section" data-bg-area="None" data-left-area="Icon Button" data-mode="Light" data-right-area="Icon Button 1" data-title-area="Title">
                    <div class="header-icon-left" @click="hideMenu">
                        <CloseIcon/>
                    </div>
                    <div class="header-title-wrapper">
                        <div class="header-title">Share with</div>
                    </div>
                    <div class="header-icon-right">
                        <SearchIcon/>
                    </div>
                </div>

                <div class="profile-grid">
                    <ProfileCard v-for="profile in profiles" :key="profile.name" :profile="profile"/>
                    <div class="more-profile-card">
                        <div class="profile-name">More</div>
                        <div class="more-icon-wrapper" data-icon-type="More" data-mode="Light">
                            <div class="more-icon-bg"></div>
                            <div class="more-dot"></div>
                            <div class="more-dot left"></div>
                            <div class="more-dot right"></div>
                        </div>
                        <div class="badge-placeholder" data-badge-type="None" data-mode="None">
                            <div class="badge-circle"></div>
                        </div>
                    </div>
                </div>

                <div class="divider"></div>

                <div class="share-other-app-section" data-mode="Light">
                    <div class="share-other-app-menu" data-menu-type="App" data-mode="Light">
                        <div class="share-other-app-text">Share in<br/>other app</div>
                        <div class="share-app-icon-wrapper"></div>
                        <div class="share-app-box top-left"></div>
                        <div class="share-app-box bottom-left"></div>
                        <div class="share-app-box top-right"></div>
                        <div class="share-app-box bottom-right"></div>
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import {defineExpose, ref} from 'vue'; // Import defineExpose
import ProfileCard from '@/mock/ProfileCard.vue'; // Import the ProfileCard component
import SearchIcon from '@/assets/icons/search-icon.svg'
import CloseIcon from '@/assets/icons/close-icon.svg'
import People1 from '@/assets/people1.png'
import People2 from '@/assets/people2.png'
import People3 from '@/assets/people3.png'
import People5 from '@/assets/people5.png'
import People6 from '@/assets/people6.png'
import People7 from '@/assets/people7.png'
import People8 from '@/assets/people8.png'

const showMenu = ref(false); // Controls the visibility of the menu

// Function to show the menu
const show = () => {
    showMenu.value = true;
};

// Function to hide the menu
const hideMenu = () => {
    showMenu.value = false;
};

// Expose show and hideMenu functions to the parent component
defineExpose({
    show,
    hideMenu
});

const profiles = ref([
    {name: 'Emma', image: People1, type: 'Single Profile'},
    {name: 'Daniel Kao', image: People2, type: 'Single Profile'},
    {name: 'Nana Tsutsumi', image: People3, type: 'Single Profile'},
    {name: 'June', image: People7, type: 'Single Profile'},
    {name: 'Joanna', image: People5, type: 'Single Profile'},
    {name: 'Billy', image: People6, type: 'Single Profile'},
    {
        name: 'Sarah, June, Ha...',
        image: People8,
        type: 'Single Profile'// Main image
    },
]);
</script>

<style scoped>
/* --- NEW STYLES FOR OVERLAY AND ANIMATION --- */
.share-menu-overlay {
    position: fixed; /* Covers the entire viewport */
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4); /* Semi-transparent black background */
    display: flex;
    justify-content: center; /* Center the menu horizontally */
    align-items: flex-end; /* Align the menu to the bottom initially */
    z-index: 1000; /* Ensure it's on top of other content */
}

/* Share Menu Container (Styles adjusted for positioning within overlay) */
.share-menu-container {
    /* Original width and height, but position relative to the flex container */
    width: 375px; /* Consistent with your header section's width */
    height: 393px;
    position: relative; /* Keep this for internal absolute positioning */
    background: white; /* Ensure menu has a background when sliding up */
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); /* Stronger shadow for pop-up */
    border-top-left-radius: 12px; /* Optional: Rounded corners for a common share sheet look */
    border-top-right-radius: 12px; /* Optional: Rounded corners for a common share sheet look */
    overflow: hidden; /* Important for border-radius to work with content */
}

/* Vue Transition Classes */
.slide-up-enter-active,
.slide-up-leave-active {
    transition: transform 0.8s ease-out; /* Adjust duration and easing as needed */
}

.slide-up-enter-from,
.slide-up-leave-to {
    transform: translateY(100%); /* Start/End off-screen at the bottom */
}

.slide-up-enter-to,
.slide-up-leave-from {
    transform: translateY(0); /* Fully visible */
}

/* --- YOUR ORIGINAL STYLES (Adjusted `menu-background` width) --- */
/* Background Div */
.menu-background {
    width: 375px; /* Changed from 100% to match the share-menu-container's fixed width */
    height: 393px;
    left: 0px;
    top: 0px;
    position: absolute;
    background: white;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.05);
}

/* Header Section */
.header-section {
    width: 375px;
    height: 44px;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 17px;
    padding-bottom: 17px;
    left: 0px;
    top: 6px;
    position: absolute;
    overflow: hidden;
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    gap: 6px;
}

.header-icon-left,
.header-icon-right {
    width: 24px;
    height: 24px;
    position: relative;
}

/* Removed redundant icon-square-outline and icon-circle-outline/small-square-outline
   as you are now using actual SVG components for CloseIcon and SearchIcon.
   If your SVG components need specific styling for their internal paths, you'd add it here
   or within those SVG components themselves.
*/

.header-title-wrapper {
    width: 283px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
}

.header-title {
    width: 283px;
    text-align: center;
    color: black;
    font-size: 17px;
    font-family: 'SF Pro Text', sans-serif;
    font-weight: 700;
    word-wrap: break-word;
}

/* Profile Grid (using CSS Grid for easier layout) */
.profile-grid {
    position: absolute;
    top: 70px;
    left: 23px;
    width: calc(375px - 23px - 23px);
    display: grid;
    grid-template-columns: repeat(4, 62px);
    gap: 29px;
    row-gap: 15px;
    justify-content: flex-start;
}

/* More Profile Card */
.more-profile-card {
    width: 62px;
    height: 96px;
    position: relative;
}

.more-icon-wrapper {
    width: 62px;
    height: 62px;
    left: 0px;
    top: 0px;
    position: absolute;
}

.more-icon-bg {
    width: 62px;
    height: 62px;
    left: 0px;
    top: 0px;
    position: absolute;
    background: #F5F5F5;
    border-radius: 9999px;
}

.more-dot {
    width: 4px;
    height: 4px;
    left: 29px;
    top: 29px;
    position: absolute;
    background: #949494;
    border-radius: 9999px;
}

.more-dot.left {
    left: 21px;
}

.more-dot.right {
    left: 37px;
}

/* Divider Line */
.divider {
    width: 375px;
    height: 0.50px;
    left: 0px;
    top: 292px;
    position: absolute;
    background: #EFEFEF;
}

/* Share Other App Section */
.share-other-app-section {
    height: 72px;
    left: 18px;
    top: 303px;
    position: absolute;
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    gap: 11px;
}

.share-other-app-menu {
    width: 59px;
    height: 72px;
    position: relative;
}

.share-other-app-text {
    width: 59px;
    left: 0px;
    top: 46px;
    position: absolute;
    text-align: center;
    color: #111111;
    font-size: 11px;
    font-family: Roboto, sans-serif;
    font-weight: 400;
    word-wrap: break-word;
}

.share-app-icon-wrapper {
    width: 46px;
    height: 46px;
    left: 6.50px;
    top: 0px;
    position: absolute;
}

.share-app-box {
    width: 10.50px;
    height: 10.50px;
    position: absolute;
    border-radius: 2px;
    border: 1.50px #111111 solid;
}

.share-app-box.top-left {
    left: 18px;
    top: 11.50px;
}

.share-app-box.bottom-left {
    left: 18px;
    top: 24px;
}

.share-app-box.top-right {
    left: 30.50px;
    top: 11.50px;
}

.share-app-box.bottom-right {
    left: 30.50px;
    top: 24px;
}

/* Common text styles that were repeated for individual profiles */
.profile-name {
    color: #111111;
    font-size: 11px;
    font-family: Roboto, sans-serif;
    font-weight: 400;
    word-wrap: break-word;
    position: absolute;
    width: 62px;
    text-align: center;
    left: 0px;
    top: 70px;
    height: 26px;
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
}
</style>