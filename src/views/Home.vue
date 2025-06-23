<script setup>
import {onMounted, ref} from "vue";
import {isValidUrl} from "@/helper.js";
import {CLOTHES_SRC_KEY, PROFILE_SRC_KEY} from "@/const.js";

const clothingSrc = ref("")
const profileSrc = ref("")
const resultSrc = ref("")
const processing = ref(false)
const done = ref(false)
const TIME_OUT = 3000;
const progressBar = ref(null)
const result = "https://i.imgur.com/obqzU0Q.jpeg"

const startProgress = (duration) => {
  // Reset first
  progressBar.value.style.transition = 'none';
  progressBar.value.style.width = '0%';
  processing.value = true;

  // Allow the reset to apply
  setTimeout(() => {
    progressBar.value.style.transition = `width ${duration}ms linear`;
    progressBar.value.style.width = '100%';
  }, 50);
}

const startTryOn = () => {
  processing.value = true
  done.value = false
  startProgress(TIME_OUT)
  setTimeout(() => {
    processing.value = false
    done.value = true
    resultSrc.value = result;
  }, TIME_OUT)
}
const buy = () => {

}
const share = () => {
  const data = []
  if (clothingSrc.value) data.push( {
    type: 'image',
    originalContentUrl: clothingSrc.value,
    previewImageUrl: clothingSrc.value
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
    <h1 class="mb-4 text-center">Welcome to Try-it-on</h1>
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
        <div class="progress" id="progress-bar" v-show="processing">
          <div class="progress-bar" role="progressbar" style="width: 0%" ref="progressBar"></div>
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
}
.progress-bar {
  height: 100%;
  background-color: #28a745; /* green */
  transition: width linear;
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

