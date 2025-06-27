<script setup>
import CloseIcon from '@/assets/icons/close-icon.svg'
</script>
<template>
    <div class="app-header">
        <div class="title">ZoZo Town</div>
        <button class="button">
            <CloseIcon/>
        </button>
    </div>
    <div class="content">
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">

.app-header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    margin-top: 50px;

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

    .button {
        margin-right: 16px;
        border: none;
        background-color: transparent;
    }
}

.content {
    padding: 17px;
    height: 90%;
    overflow: auto;
}
</style>