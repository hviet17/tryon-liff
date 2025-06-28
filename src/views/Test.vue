<script setup>
const share = () => {
  const data = []
  data.push( {
    type: 'image',
    originalContentUrl: "",
    previewImageUrl: ""
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
</script>

<template>
  <button @click="share" class="btn btn-success fw-bold">
    <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg" alt="LINE logo" style="width:25px">
    Share
  </button>
</template>