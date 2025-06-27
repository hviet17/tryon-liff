import {defineStore} from 'pinia'

export const useGlobalLoadingStore = defineStore({
    id: 'global-loading',
    state: () => ({
        isLoading: false
    })
})