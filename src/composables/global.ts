import {storeToRefs} from "pinia";
import { useGlobalStore } from '@/stores/global'

export const useGlobal = () => {
    const store = useGlobalStore()
    const { profileSrc, clothingSrc, resultSrc, productUrl, productTitle, productPrice } = storeToRefs(store)

    return {
        profileSrc,
        clothingSrc,
        resultSrc,
        productUrl,
        productTitle,
        productPrice
    }
}