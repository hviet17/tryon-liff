import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', () => {
    const profileSrc = ref("")
    const clothingSrc = ref("")
    const resultSrc = ref("")
    const productUrl = ref("")
    const productTitle = ref("")
    const productPrice = ref("")
    const beforeImageSrc = ref("")

    return {
        profileSrc,
        clothingSrc,
        resultSrc,
        productUrl,
        productTitle,
        productPrice,
        beforeImageSrc
    }
})
