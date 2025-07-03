<script setup lang="ts">
import CloseIcon from '@/assets/icons/close-icon.svg'
import ShareIcon from '@/assets/icons/share-icon.svg'
import ShareMenu from "@/mock/ShareMenu.vue";
import {ref} from 'vue'
import {useRoute} from 'vue-router'
import {useGlobal} from "@/composables/global";
import {CLOTHES_SRC_KEY, PRODUCT_URL_KEY, PRODUCT_PRICE_KEY, PRODUCT_TITLE_KEY} from "@/const"

const route = useRoute()
const shareMenuRef = ref(null); // Create a ref to access the ShareMenu component instance
const {resultSrc, beforeImageSrc} = useGlobal()

const share = () => {
  if (!resultSrc.value) {
    alert("No image to share.");
    return;
  }

  const clothesSrc = decodeURIComponent(localStorage.getItem(CLOTHES_SRC_KEY)) || '';
  const productUrl = decodeURIComponent(localStorage.getItem(PRODUCT_URL_KEY)) || '';
  const productTitle = localStorage.getItem(PRODUCT_TITLE_KEY) || '';
  const productPrice = decodeURIComponent(localStorage.getItem(PRODUCT_PRICE_KEY)) || '';

  const contents = {
    "type": "bubble",
    "hero": {
      "type": "image",
      "url": resultSrc.value,
      "size": "full",
      "aspectRatio": "220:300",
      "aspectMode": "cover",
      "action": {
        "type": "uri",
        "uri": resultSrc.value
      },
      "align": "start"
    },
    "body": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "box",
              "layout": "vertical",
              "contents": []
            },
            {
              "type": "text",
              "text": "Hello LINE AI Fit!",
              "size": "lg",
              "weight": "bold"
            },
            {
              "type": "text",
              "text": "Gorgeous looks!",
              "size": "lg",
              "weight": "bold"
            },
            {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "image",
                  "url": clothesSrc,
                  "aspectMode": "cover",
                  "align": "start"
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "text",
                      "text": productTitle
                    },
                    {
                      "type": "text",
                      "text": productPrice,
                      "weight": "bold"
                    }
                  ],
                  "action": {
                    "type": "uri",
                    "label": "action",
                    "uri": productUrl
                  }
                }
              ],
              "paddingTop": "10px",
              "paddingBottom": "16px"
            }
          ]
        }
      ]
    },
    "footer": {
      "type": "box",
      "layout": "vertical",
      "spacing": "sm",
      "contents": [
        {
          "type": "button",
          "style": "link",
          "height": "sm",
          "action": {
            "type": "uri",
            "label": "Go to Ai Fit",
            "uri": `https://tryon-liff.pages.dev/result?beforeImg=${encodeURIComponent(beforeImageSrc.value)}&afterImg=${encodeURIComponent(resultSrc.value)}&clothesImg=${encodeURIComponent(clothesSrc)}&title=${productTitle}&price=${productPrice}&url=${encodeURIComponent(productUrl)}`,
          },
          "color": "#ffffff"
        },
        {
          "type": "box",
          "layout": "vertical",
          "contents": [],
          "margin": "sm"
        }
      ],
      "flex": 0,
      "backgroundColor": "#000000"
    }
  }
  console.log(contents);
  // return;
  const data = [{
    type: "flex",
    altText: "This is a Flex Message",
    contents
  }]
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

const openShareMenu = () => {
    if (shareMenuRef.value) {
        if (route.name === "result") {
          shareMenuRef.value.show();
        }else {
          share()
        }
    }
};

</script>
<template>
    <div class="app-layout">
        <div v-if="!route.meta.noHeader" class="app-header" :class="{'white-text':route.meta.whiteTxt}">
          <div :class="{title:true }">ZoZo Town
            </div>
            <button class="button" @click="openShareMenu">
                <ShareIcon/>
            </button>
            <button class="button" @click="window.close()" v-if="route.path.includes('mock')">
                <CloseIcon/>
            </button>
        </div>
        <div :class="['content', {'has-padding': !['result', 'real-result'].includes(route.name)}]">
            <slot></slot>
            <ShareMenu ref="shareMenuRef"/>
        </div>
    </div>
</template>

<style scoped lang="scss">
.app-layout {
    height: 100%;
    background-color: transparent;
    position: relative;
}

.app-header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: fixed;
    padding: 10px 0;
    height: 50px;
    width: 100%;
    left: 0;
    top: 0;
    right: 0;
    background-color: transparent;
    z-index: 99999;

    .title {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        color: black;
        font-size: 17px;
        font-weight: 700;
        word-wrap: break-word;
        text-align: center;
    }

    &.white-text .title {
        color: white !important;
    }

    //
    //&.white-text .button {
    //    svg {
    //        path {
    //            fill: white;
    //            stroke: white !important;
    //        }
    //    }
    //}

    .button {
        margin-right: 16px;
        border: none;
        background-color: transparent;
    }
}

.content {
    height: 100dvh;
    overflow: auto;

   &.has-padding {
    padding-top: 62px;
    padding-bottom: 34px;
  }
}

.white-text .button:last-child {
    svg {
        :deep(path) {
            stroke: white;
        }
    }
}
</style>