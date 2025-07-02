import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', () => {
    const profileSrc = ref("")
    const clothingSrc = ref("")

    return {
        profileSrc,
        clothingSrc
    }
})
