<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue';
import BuyIcon from '@/assets/icons/buy-icon.svg';
import {useGlobal} from "@/composables/global";
import {CLOTHES_SRC_KEY, PRODUCT_URL_KEY, PRODUCT_PRICE_KEY, PRODUCT_TITLE_KEY} from "@/const"

const containerRef = ref<HTMLElement | null>(null);
const afterImageRef = ref<HTMLElement | null>(null);
const sliderHandleRef = ref<HTMLElement | null>(null);

const sliderPercent = ref(90); // Start in the middle
let isDragging = false;

const startDragging = (e: MouseEvent | TouchEvent) => {
  isDragging = true;
  e.preventDefault();
  onDrag(e);
};

const stopDragging = () => {
  isDragging = false;
};

const onDrag = (e: MouseEvent | TouchEvent) => {
  if (!isDragging || !containerRef.value) return;

  const containerRect = containerRef.value.getBoundingClientRect();
  let clientX: number;

  if (e instanceof MouseEvent) {
    clientX = e.clientX;
  } else {
    clientX = e.touches[0].clientX;
  }

  let x = clientX - containerRect.left;
  if (x < 0) x = 0;
  if (x > containerRect.width) x = containerRect.width;

  sliderPercent.value = (x / containerRect.width) * 100;
};

// ✅ update DOM whenever sliderPercent changes
watch(sliderPercent, (percent) => {
  if (afterImageRef.value && sliderHandleRef.value) {
    afterImageRef.value.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
    sliderHandleRef.value.style.left = `${percent}%`;
  }
});

const {resultSrc, profileSrc, clothingSrc} = useGlobal()
const handleBuyNow = () => {
  const productUrl = decodeURIComponent(localStorage.getItem(PRODUCT_URL_KEY));
  if (productUrl) {
    window.open(productUrl, '_blank');
  } else{
    alert("Product URL not found.");
  }
}

const productTitle = ref(localStorage.getItem(PRODUCT_TITLE_KEY) || '');
const productPrice = ref(localStorage.getItem(PRODUCT_PRICE_KEY) || '');

onMounted(() => {
  window.addEventListener('mouseup', stopDragging);
  window.addEventListener('touchend', stopDragging);
  window.addEventListener('mousemove', onDrag);
  window.addEventListener('touchmove', onDrag);

  // ✅ Set initial position from sliderPercent
  if (afterImageRef.value && sliderHandleRef.value) {
    const percent = sliderPercent.value;
    afterImageRef.value.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
    sliderHandleRef.value.style.left = `${percent}%`;
  }

  const params = new URLSearchParams(window.location.search);
  if (params.get('resultImg') && params.get('clothesImg') && params.get('title') && params.get('price') && params.get('url')) {
    resultSrc.value = params.get('resultImg');
    clothingSrc.value = params.get('clothesImg');
    localStorage.setItem(CLOTHES_SRC_KEY, params.get('clothesImg'));
    localStorage.setItem(PRODUCT_URL_KEY, params.get("url"));
    localStorage.setItem(PRODUCT_PRICE_KEY, params.get("price"));
    localStorage.setItem(PRODUCT_TITLE_KEY, params.get("title"));
  }else {
    console.log("Product URL not found.");
  }
});

onUnmounted(() => {
  window.removeEventListener('mouseup', stopDragging);
  window.removeEventListener('touchend', stopDragging);
  window.removeEventListener('mousemove', onDrag);
  window.removeEventListener('touchmove', onDrag);
});
</script>

<template>
  <div class="result-wrapper">
    <div class="top-stick"></div>
    <div class="result-container">
      <div class="bottom-stick"></div>
      <div class="summary-container">
        <div class="img-result image-comparison-container" ref="containerRef">
          <img :src="resultSrc" alt="After Image" class="comparison-image before-image" />
          <img :src="profileSrc" alt="Before Image" class="comparison-image after-image" ref="afterImageRef" />
          <div class="slider-handle" ref="sliderHandleRef"
               @mousedown="startDragging"
               @touchstart="startDragging"></div>
        </div>

        <div class="result-title">
          <span>Hello!</span>
          <br />
          <span style="margin-top: 5px; display: inline-block;">Gorgeous looks!</span>
        </div>

        <div class="summary">
          <div class="center">
            <div class="item">
              <div class="img">
                <img :src="clothingSrc" alt="Clothes" />
              </div>
              <div class="item-info">
                <div class="name">{{productTitle}}</div>
                <div class="price">{{productPrice}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="action-btn" @click="handleBuyNow">
        <BuyIcon />
        <div class="buy-text-btn">BUY NOW</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.result-wrapper {
  width: 100%;
  height: 100%;
  background-color: #1e1e1e;
  padding-top: 32px;
}

.result-container {
  width: 90%;
  position: absolute;
  top: 72px;
  left: 50%;
  transform: translateX(-50%);
  margin: 0 auto;
  height: calc(100% - 72px - 32px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 30px;
  padding: 24px;
  background: linear-gradient(157deg, #2d2d2d 0%, #939393 60%, #030303 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);  // 10% opacity white border
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.15); // white glow shadow with 15% opacity
}

.img-result {
  height: 360px;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  cursor: ew-resize;
  border-radius: 30px;
}

.comparison-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}

.after-image {
  clip-path: inset(0 100% 0 0);
}

.slider-handle {
  position: absolute;
  top: 0;
  left: 0%;
  width: 4px;
  height: 100%;
  background-color: white;
  cursor: ew-resize;
  transform: translateX(-50%);
  z-index: 10;
}

.result-title {
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: -0.4px;
  color: #ffffff;
  margin-top: 30px;
}

.summary {
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 5px;
  margin-top: 16px;
  margin-bottom: 24px
}

.center {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}

.item {
  display: flex;
  height: 100%;
  gap: 10px;

  .img {
    width: 64px;
    height: 64px;
    overflow: hidden;
    border-radius: 10px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .name {
    font-family: Roboto, sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 13px;
    color: #ffffff;
    margin-bottom: 5px;
  }

  .info {
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
    color: #b2b2b2;
    margin-bottom: 8px;
  }
}

.item-info {
  flex: 1;
  color: #ffffff;
}

.price {
  font-family: Roboto, sans-serif;
  font-weight: 800;
  font-size: 13px;
  line-height: 100%;
  flex: 1;
}

.action-btn {
  background-color: #171717;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  height: 48px;
  font-weight: 700;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 100%;
}

.buy-text-btn {
  color: #e9e9eb;
  font-size: 13px;
  font-weight: 600;
  line-height: 17px;
}

.bottom-stick {
  width: 1000px;
  height: 5px;
  transform: rotate(-19deg) translate(-200px, 320px);
  transform-origin: left top;
  background: white;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8),
  0 0 20px rgba(255, 255, 255, 0.6),
  0 0 30px rgba(255, 255, 255, 0.4);
  filter: blur(1px);
  border-radius: 5px;
}

.top-stick {
  width: 1000px;
  height: 2px;
  transform: rotate(15deg) translate(-100px, 272px);
  transform-origin: top left;
  background: white;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8),
  0 0 20px rgba(255, 255, 255, 0.6),
  0 0 30px rgba(255, 255, 255, 0.4);
  filter: blur(1px);
  border-radius: 5px;
}
</style>
