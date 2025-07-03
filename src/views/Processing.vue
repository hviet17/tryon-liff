<script setup lang="ts">
import loading from '@/assets/icons/loading-icon.png'
import {watch} from "vue";
import {useGlobal} from "@/composables/global";
import {useRouter} from "vue-router";

const {resultSrc} = useGlobal()
const router = useRouter()

watch(resultSrc, val => {
  if (val){
    router.push({name: 'real-result'})
  }
}, {immediate: true})
</script>
<template>
  <div class="loading-container">
    <div class="loading-flex">
      <div class="loading-icon">
        <img :src="loading" alt="loading"/>
      </div>
      <div class="loading-text">
        <div class="loading-title"> AI Fitting in Progress</div>
        <div class="loading-desc">Please stay on this screen and wait a moment</div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.loading-container {
  width: 100%;
  height: 100dvh;
  background-color: #1E1E1E;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.loading-title {
  // AI Fitting in Progress
  color: white;
  font-size: 20px;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  line-height: 22px;
  word-wrap: break-word
}

.loading-icon {
  border-radius: 50%;

  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}


.loading-desc {
  color: #949494;
}

.loading-text {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>