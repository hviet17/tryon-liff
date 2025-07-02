<script setup lang="ts">
import {RouterView} from 'vue-router'
import AppLayout from "@/layout/AppLayout.vue";
import Loading from '@/components/common/Loading.vue'
import {isLoading} from '@/stores/globalLoading'
</script>

<template>
    <Loading v-if="isLoading"/>
    <AppLayout v-else>
        <RouterView/>
    </AppLayout>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');

body {
    scroll-behavior: smooth;
    width: 100vh;
    height: 100vh;
    box-sizing: border-box;
}
</style>
