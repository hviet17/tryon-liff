<script setup lang="ts">
import CloseIcon from '@/assets/icons/close-icon.svg'
import ShareIcon from '@/assets/icons/share-icon.svg'
import ShareMenu from "@/mock/ShareMenu.vue";
import {ref} from 'vue'
import {useRoute} from 'vue-router'
import {useGlobal} from "@/composables/global";

const route = useRoute()
const shareMenuRef = ref(null); // Create a ref to access the ShareMenu component instance
const {resultSrc} = useGlobal()

const share = () => {
  // if (!resultSrc.value) return;
  const data = [{
    type: "flex",
    altText: "This is a Flex Message",
    contents: {
      "type": "bubble",
      "hero": {
        "type": "image",
        "url": "https://developers-resource.landpress.line.me/fx/img/01_1_cafe.png",
        "size": "full",
        "aspectRatio": "20:13",
        "aspectMode": "cover",
        "action": {
          "type": "uri",
          "uri": "https://line.me/"
        }
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
                "text": "Goreous looks!",
                "size": "lg",
                "weight": "bold"
              },
              {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                  {
                    "type": "image",
                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png",
                    "aspectMode": "cover",
                    "align": "start"
                  },
                  {
                    "type": "text",
                    "text": "hello, world",
                    "size": "sm"
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
              "uri": "https://line.me/"
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
            <button class="button" @click="window.close()">
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