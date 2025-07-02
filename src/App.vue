<script setup lang="ts">
import {RouterView, useRoute} from 'vue-router'
import AppLayout from "@/layout/AppLayout.vue";
import Loading from '@/components/common/Loading.vue'
import {isLoading} from '@/stores/globalLoading'
import FullLayout from "@/layout/FullLayout.vue";
const route = useRoute()
</script>

<template>
  <Loading v-if="isLoading"/>
  <template v-else>
    <FullLayout v-if="route.meta && route.meta.fullScreen">
      <RouterView/>
    </FullLayout>
    <AppLayout v-else>
      <RouterView/>
    </AppLayout>
  </template>

</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');

body {
    scroll-behavior: smooth;
    height: 100dvh;
    box-sizing: border-box;
}
</style>
