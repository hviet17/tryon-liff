<script setup lang="ts">
import {Swiper, SwiperSlide} from 'swiper/vue';
import GreenTickIcon from '@/assets/icons/green-tick-icon.svg'
import RedTickIcon from '@/assets/icons/red-tick-icon.svg'
import goodImage3 from '@/assets/images/good/466ee505aede5e2e2358f0f99ba181485916013c.png'
import goodImage4 from '@/assets/images/good/a4f406f98fd57ebcec6348db6e1b2acce0d84eb1.png'
import goodImage5 from '@/assets/images/good/f0497f86b4a95811ebe2cf18ef4c5ccb3372643a.png'
import badImage3 from '@/assets/images/bad/2fcb2971e82fe9f81824ec99d697b176986eb9e5.png'
import badImage4 from '@/assets/images/bad/870b3bc6dc0fc18bd8a7732f1c37faa035a944c0.png'
import badImage5 from '@/assets/images/bad/149eca8da00d4fb585a97d72f4e0e04af017be75.png'
import {useRouter} from "vue-router";
import {useGlobal} from "@/composables/global";
import {onMounted} from "vue";
import {CLOTHES_SRC_KEY, PRODUCT_URL_KEY, PRODUCT_PRICE_KEY, PRODUCT_TITLE_KEY} from "@/const"
import {isValidUrl} from "@/helper.js";
import aiGuide1 from '@/assets/ai-guide1.png'
import aiGuide2 from '@/assets/ai-guide2.png'
import aiGuide3 from '@/assets/ai-guide3.png'
import aiGuide4 from '@/assets/ai-guide4.png'


const goodImages = [
    aiGuide1,
    aiGuide2,
    goodImage3,
    goodImage4,
    goodImage5
]

const badImages = [
    aiGuide3,
    aiGuide4,
    badImage3,
    badImage4,
    badImage5
]
const router = useRouter()
const {profileSrc, clothingSrc, productUrl, productTitle, productPrice, profileSrcFull} = useGlobal()

const onProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
          profileSrcFull.value = event.target.result;
          const base64 = event.target.result.split(',')[1];
          profileSrc.value = base64;
          router.push({name: 'scanning'}); // Navigate to the next step
        }
        reader.readAsDataURL(file);
    }
}

const handleNext = () => {
    document.getElementById('fileInput').click()
}

onMounted(() => {
  const params = new URLSearchParams(window.location.search);
  const imageUrl = params.get("clothesImg") || localStorage.getItem(CLOTHES_SRC_KEY);
  productTitle.value = params.get("title") || localStorage.getItem(PRODUCT_TITLE_KEY);
  productPrice.value = params.get("price") || localStorage.getItem(PRODUCT_PRICE_KEY);
  productUrl.value = params.get("url") || localStorage.getItem(PRODUCT_URL_KEY);

    if (imageUrl && isValidUrl(imageUrl)) {
        clothingSrc.value = imageUrl;
        localStorage.setItem(CLOTHES_SRC_KEY, "");
    }
})
</script>

<template>
    <div class="guide-container">
        <div>
            <div class="title">Photo Guidelines</div>
            <div class="examples-section">
                <div class="example-title">
                    <GreenTickIcon/>
                    <div class="title-text">
                        Good Examples
                    </div>
                </div>
                <swiper
                    :slidesPerView="2.5"
                    :spaceBetween="8"
                    class="mySwiper"
                >
                    <swiper-slide v-for="(image, index) in goodImages" :key="`goodImage-${index}`" class="my-slide">
                        <img :src="image" alt="Good image"/>
                    </swiper-slide>
                </swiper>
                <p class="desc">A solo, full-body photo taken from the front, wearing a base outfit, against a clean background is recommended.</p>
            </div>
            <div class="examples-section">
                <div class="example-title">
                    <RedTickIcon/>
                    <div class="title-text">
                        Bad Examples
                    </div>
                </div>
                <swiper
                    :slidesPerView="2.5"
                    :spaceBetween="8"
                    class="mySwiper"
                >
                    <swiper-slide v-for="(image, index) in badImages" :key="`badImage-${index}`" class="my-slide">
                        <img :src="image" alt="Bad image"/>
                    </swiper-slide>
                </swiper>
                <p class="desc">Portraits, side-angle shots, seated photos, and group pictures are not recommended.</p>

            </div>
        </div>
        <button class="action-btn" @click="handleNext">Next</button>
        <div class="d-none">
            <input type="file" id="fileInput" capture="environment" class="d-none" accept="image/*" @change="onProfileChange">
        </div>
    </div>
</template>

<style scoped lang="scss">
.title {
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 26px;
    line-height: 100%;
    letter-spacing: 0px;
    color: #000000;
    margin-bottom: 30px;
}

.examples-section + .examples-section {
    margin-top: 55px;
}

.example-title {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-left: 5px;
    margin-bottom: 12px;

    .title-text {
        display: inline-block;
        font-family: Roboto, serif;
        font-weight: 700;
        font-size: 15px;
        line-height: 100%;
        letter-spacing: 0px;
        color: #000000;
    }
}

.desc {
    margin-top: 12px;
    color: #777777;
    font-family: Roboto, serif;
    font-weight: 400;
    font-size: 13px;
    line-height: 100%;
    letter-spacing: 0px;
}

.guide-container {
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
}

.action-btn {
    background: #2F2F2F;
    color: #FFFFFF;
    border: none;
    border-radius: 8px;
    height: 48px;
    font-weight: 700;
    font-size: 15px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.my-slide {
    width: 148px; /* fixed width */
    height: 148px; /* fixed height */
    display: flex;
    align-items: start;
    justify-content: center;
    background: #eee;
    border-radius: 8px;
    overflow: hidden;
}

.my-slide > div {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}
</style>