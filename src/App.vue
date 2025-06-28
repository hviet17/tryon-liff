<script setup lang="ts">
import {RouterView} from 'vue-router'
import AppLayout from "@/layout/AppLayout.vue";
import {ref} from 'vue'
</script>

<template>
    <AppLayout>
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
