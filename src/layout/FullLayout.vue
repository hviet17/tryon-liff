<script setup>
import CloseIcon from '@/assets/icons/close-icon.svg'
</script>
<template>
  <div class="full-screen">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.full-screen {
  min-height: 100dvh;
  width: 100%;

  :deep(> div) {
    position: relative;
    height: 100dvh;
    width: 100%;
  }
}
</style>