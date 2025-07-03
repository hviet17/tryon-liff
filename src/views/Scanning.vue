<template>
  <div class="scan-container" :style="{ backgroundImage: `url(${profileSrc})` }">
    <div class="scanner" @animationiteration="handleScan"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {useRouter} from "vue-router";
import {useGlobal} from "@/composables/global";
import {urlToBlob, dataURLToBlob} from "@/helper.js";
import {onMounted} from "vue";
import {generateImage} from "@/services/generate.js";

// How many scans to perform
const {clothingSrc, profileSrc, resultSrc} = useGlobal()
const totalScans = ref(2)
const currentScan = ref(0)
const router = useRouter()

const handleScan = () => {
  currentScan.value++

  if (currentScan.value >= totalScans.value) {
     router.push({name: 'processing'})
  }
}

onMounted(async () => {
  if (!clothingSrc.value || !profileSrc.value) return;

  const clothingBlob = await urlToBlob(clothingSrc.value);
  const profileBlob = await dataURLToBlob(profileSrc.value);
  if (profileSrc.value) {
    try {
      resultSrc.value = await generateImage(profileBlob, clothingBlob)
    } catch (e) {
      alert("Failed to generate image. Please try again.")
    }
  }
})
</script>

<style scoped lang="scss">
.scan-container {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
}

.scanner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0%;
  background-color: rgba(0, 0, 0, 0.4);
  animation: scanGrow 3s linear infinite;
  overflow: visible;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 100%;
    background: white;
    box-shadow: 0 0 10px 2px white;
  }
}

@keyframes scanGrow {
  0% {
    height: 0%;
  }
  100% {
    height: 100%;
  }
}
</style>
