<script setup lang="ts">
import {RouterView, useRouter} from 'vue-router'
import AppLayout from "@/layout/AppLayout.vue";
import WelcomeView from "@/views/WelcomeView.vue";
import {onMounted, ref} from 'vue'

const showWelcome = ref(true);
const router = useRouter()

onMounted(() => {
    setTimeout(() => {
        showWelcome.value = false
        router.replace('/') // change '/main' to your actual route
    }, 500)
})
</script>

<template>
    <!--    <Loading v-if="isLoading"/>-->
    <WelcomeView v-if="showWelcome"/>
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
