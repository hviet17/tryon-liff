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
body {
    width: 100vh;
    height: 100vh;
    box-sizing: border-box;
}
</style>
