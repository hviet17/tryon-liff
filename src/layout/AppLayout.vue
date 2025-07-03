<script setup lang="ts">
import CloseIcon from '@/assets/icons/close-icon.svg'
import ShareIcon from '@/assets/icons/share-icon.svg'
import ShareMenu from "@/mock/ShareMenu.vue";
import {ref} from 'vue'
import {useRoute} from 'vue-router'

const route = useRoute()
const shareMenuRef = ref(null); // Create a ref to access the ShareMenu component instance
const openShareMenu = () => {
    if (shareMenuRef.value) {
        shareMenuRef.value.show(); // Call the exposed 'show' method on the ShareMenu
    }
};

</script>
<template>

    <div class="app-layout">
        <div v-if="!route.meta.noHeader" class="app-header" :class="{'white-text':route.meta.whiteTxt}">
            <div :class="{title:true }">ZoZo Town
            </div>
            <button class="button" @click="openShareMenu">
                <ShareIcon/>
            </button>
            <button class="button" @click="window.close()">
                <CloseIcon/>
            </button>
        </div>
        <div class="content" :class="{'p-32':route.name!=='result'}">
            <slot></slot>
            <ShareMenu ref="shareMenuRef"/>
        </div>

    </div>
</template>

<style scoped lang="scss">
.app-layout {
    height: 100%;
    background-color: transparent;
    position: relative;
}

.app-header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: fixed;
    padding: 10px 0;
    height: 50px;
    width: 100%;
    left: 0;
    top: 0;
    right: 0;
    background-color: transparent;
    z-index: 99999;

    .title {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        color: black;
        font-size: 17px;
        font-weight: 700;
        word-wrap: break-word;
        text-align: center;
    }

    &.white-text .title {
        color: white !important;
    }

    //
    //&.white-text .button {
    //    svg {
    //        path {
    //            fill: white;
    //            stroke: white !important;
    //        }
    //    }
    //}

    .button {
        margin-right: 16px;
        border: none;
        background-color: transparent;
    }
}

.content {
    height: 100dvh;
    overflow: auto;
}

.white-text .button:last-child {

    svg {
        :deep(path) {
            stroke: white;
        }
    }
}

.p-32 {
    padding: 50px 0 !important;
}
</style>