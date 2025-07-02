import {storeToRefs} from "pinia";

import { useGlobalStore } from '@/stores/global'

export const useGlobal = () => {
    const store = useGlobalStore()
    const { profileSrc } = storeToRefs(store)

    return {
        profileSrc
    }
}