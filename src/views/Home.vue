<script setup>
import {onMounted, ref} from "vue";
import {dataURLToBlob, isValidUrl, urlToBlob} from "@/helper.js";
import {CLOTHES_SRC_KEY, PROFILE_SRC_KEY, FUN_TEXT_DB} from "@/const.js";
import {generateImage} from "@/services/generate.js";

const clothingSrc = ref("")
const profileSrc = ref("")
const profileBlob = ref("")
const resultSrc = ref("")

const processing = ref(false)
const done = ref(false)
const progressBar = ref(null)
const funText = ref("");

function createProgressBar(avgDurationMs) {
  const progressEl = progressBar.value;
  let progress = 0;
  let isComplete = false;

  const totalSteps = 100; // update every 1% approx
  const intervalTime = avgDurationMs / totalSteps;

  const interval = setInterval(() => {
    if (isComplete) return;

    // Simulate acceleration → deceleration
    let step;
    if (progress < 70) step = 0.5 + Math.random() * 1.5;
    else if (progress < 90) step = 0.2 + Math.random() * 0.5;
    else step = 0.05 + Math.random() * 0.1;

    progress = Math.min(progress + step, 95);
    progressEl.style.width = progress.toFixed(1) + "%";
  }, intervalTime);

  return {
    complete() {
      if (isComplete) return;
      isComplete = true;
      clearInterval(interval);

      // Finish to 100% smoothly
      const finishInterval = setInterval(() => {
        progress += 1;
        progressEl.style.width = progress + "%";

        if (progress >= 100) {
          clearInterval(finishInterval);
        }
      }, 20);
    }
  };
}


const uploadImages = async () => {
  const progressBar = createProgressBar(30000);
  const clothingBlob = await urlToBlob(clothingSrc.value);
  let result = null;
  if (profileBlob.value || profileSrc.value) {
    result = await generateImage(profileBlob.value || dataURLToBlob(profileSrc.value), clothingBlob)
  }
  progressBar.complete();
  return result;
}

const randomFunText = () => {
  const randomIndex = Math.floor(Math.random() * FUN_TEXT_DB.length);
  funText.value = FUN_TEXT_DB[randomIndex];
}

const startTryOn = async() => {
  processing.value = true
  done.value = false
  randomFunText();
  const updateFunText = setInterval(randomFunText, 3000);
  resultSrc.value = await uploadImages()
  processing.value = false
  funText.value = ""
  clearInterval(updateFunText);
  if (resultSrc.value) {
    done.value = true
  }
}
const buy = () => {
  if (window.opener) {
    window.opener.postMessage('buy', '*');
    window.close();
  } else {
    console.log('No opener');
  }
}
const share = () => {
  if (!resultSrc.value) return;
  const data = []
  data.push( {
    type: 'image',
    originalContentUrl: resultSrc.value,
    previewImageUrl: resultSrc.value
  })
  if (liff) {
    liff.shareTargetPicker(data).then((res) => {
      if (res) {
        console.log('Shared successfully');
      } else {
        console.log('Share target picker was closed without sharing');
      }
    }).catch((err) => {
      console.error('Error sharing: ', err);
    });
  }
}
const download = async () => {
  const imageUrl = resultSrc.value;
  const urlParts = imageUrl.split('/');
  const fileName = urlParts[urlParts.length - 1]

  const response = await fetch(imageUrl);
  const blob = await response.blob();

  // Create a blob URL
  const blobUrl = URL.createObjectURL(blob);

  // Create and click the download link
  const link = document.createElement('a');
  link.href = blobUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Clean up blob URL
  URL.revokeObjectURL(blobUrl);
}

const onProfileChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    profileBlob.value = file;
    const reader = new FileReader();
    reader.onload = function(event) {
      const dataUrl = event.target.result;  // base64 encoded image
      profileSrc.value = dataUrl;
      localStorage.setItem(PROFILE_SRC_KEY, dataUrl);
    }
    reader.readAsDataURL(file);
  }
}

const onProfileReset = () => {
  profileSrc.value = null;
  localStorage.setItem(PROFILE_SRC_KEY, "");
}

onMounted(() => {
  const hash = window.location.hash.substring(1);
  const params = new URLSearchParams(hash);
  const encodedUrl = params.get("url") || localStorage.getItem(CLOTHES_SRC_KEY);

  if (encodedUrl && isValidUrl(encodedUrl)) {
    clothingSrc.value = encodedUrl;
    localStorage.setItem(CLOTHES_SRC_KEY, "");
  }

  if (localStorage.getItem(PROFILE_SRC_KEY)) {
    profileSrc.value = localStorage.getItem(PROFILE_SRC_KEY);
  }
})
</script>


<template>
  <div class="container d-flex flex-column h-100">
    <h1 class="mb-4 text-center">
      <template v-if="!done">Welcome to Try-it-on</template>
      <template v-else>Success!</template>
    </h1>
    <div class="row flex-fill text-center">
      <template v-if="done">
        <div class="col-sm-12 pt-0 p-2">
          <img v-if="resultSrc" :src="resultSrc" alt="">
        </div>
      </template>
      <template v-else>
        <div class="col-sm-6 border-end pt-0 p-2">
          <img v-if="clothingSrc" :src="clothingSrc" alt="">
        </div>
        <div class="col-sm-6 pt-0 p-2">
          <div id="file-input-container" v-if="!profileSrc">
            <button class="btn btn-primary" onclick="document.getElementById('fileInput').click()">Select File</button>
            <span id="selectedFileName" class="ms-1">Choose your profile</span>
            <input type="file" id="fileInput" class="d-none" accept="image/*" @change="onProfileChange">
          </div>

          <div id="preview-container" v-else>
            <img id="preview" :src="profileSrc" alt="Image preview" />
            <button id="reset-btn" type="button" class="btn btn-danger btn-sm rounded-circle" @click="onProfileReset">×</button>
          </div>
        </div>
      </template>
    </div>
    <div class="row footer mt-auto py-5">
      <div class="col-sm-12 text-center">
        <button class="btn btn-primary fw-bold" @click="startTryOn" v-if="!processing && !done" :disabled="!clothingSrc || !profileSrc">Try-it-on</button>
        <div v-show="processing">
          <div class="progress" id="progress-bar">
            <div class="progress-bar" role="progressbar" ref="progressBar" style="width: 0%;"></div>
          </div>
          <p class="fw-bold mt-2">{{funText}}</p>
        </div>
        <div class="d-flex gap-2 justify-content-center align-items-center" v-if="done">
          <button class="btn btn-danger fw-bold" @click="buy">Buy</button>
          <button @click="share" class="btn btn-success fw-bold">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg" alt="LINE logo" style="width:25px">
            Share
          </button>
          <button class="btn btn-primary fw-bold" @click="download">Download</button>
         </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.progress {
  height: 30px;
  width: 100%;
  background-color: #e9ecef;
  border-radius: 10px;
  overflow: hidden;

  span {
    font-size: 20px;
    color: #fff;
  }
}
.progress-bar {
  height: 100%;
  background-color: #28a745; /* green */
  transition: width 0.3s ease;
}
#preview-container {
  position: relative;
  display: inline-block;
}
#reset-btn {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 30px;
  height: 30px;
  font-size: 20px;
  line-height: 16px;
  text-align: center;
}
#preview {
  max-width: 100%;
}
</style>

