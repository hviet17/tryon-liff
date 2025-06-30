<template>
    <div class="styles_fixedArea__V4SX0" style="transform: translateY(0px)">
        <shp-incentive-sheet classname="styles_halfModal__TNbbH">
            <div>
                <div class="front-delivery-display" data-ui-library-version="2.0.196" style="display: none;">
                    <div></div>
                    <img src="" alt="" class="front-delivery-reset____20196" style="display: none; width: 1px; height: 1px;">
                </div>
            </div>
        </shp-incentive-sheet>

        <div class="styles_cartButtonWrap__Nsr19 styles_cartOnly__i93aB styles_cartButtonWrap__NXMhc target_modules" id="cartbtnf">
            <div class="styles_buttons__981HU">
                <button
                    type="button"
                    class="Button Button--orangeFilled styles_cartButton__qC6Sh"
                    data-cl-params="_cl_link:addmdl;_cl_position:0;"
                    data-cl_cl_index="1"
                    @click="addToCart"
                >
                    <span>カートに入れる</span>
                </button>
            </div>
            <a class="undefined cl-noclick-log" data-cl-params="_cl_link:addmdl;_cl_position:0;" data-cl_cl_index="2" href="#"></a>
            <form name="addCart" :action="formActionUrl" method="post">
                <input name="seller_managed_item_id" type="hidden" :value="formData.sellerManagedItemId" data-cl_cl_index="3">
                <input name="seller_id" type="hidden" :value="formData.sellerId" data-cl_cl_index="4">
                <input name="add_item_options" type="hidden" :value="formData.addItemOptions" data-cl_cl_index="5">
                <input name="quantity" type="hidden" :value="formData.quantity" data-cl_cl_index="6">
                <input name="is_social_gift" type="hidden" disabled :value="formData.isSocialGift" data-cl_cl_index="7">
                <input name="is_new_organic_user" type="hidden" :value="formData.isNewOrganicUser" data-cl_cl_index="8">
            </form>
        </div>

        <div>
            <shp-sp-footer-global-navi>
                <div>
                    <div class="front-delivery-display" data-ui-library-version="2.0.196" style="display: none;">
                        <div id="g_navi" class="TabNavigation____20196 front-delivery-reset____20196">
                            <div class="TabNavigation__gradation____20196" style="visibility: hidden;"></div>
                            <ul class="TabNavigation__items____20196">
                                <li class="TabNavigation__item____20196">
                                    <a href="https://shopping.yahoo.co.jp" aria-label="ホーム" class="TabNavigation__link____20196" data-cl-params="_cl_link:home;_cl_position:0" data-cl_cl_index="1">
                                        <svg width="48" height="48" viewBox="0 0 48 48" aria-hidden="true" class="Symbol____20196 TabNavigation__icon____20196">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M26 42V31.13a1 1 0 0 0-.88-1H23a1 1 0 0 0-1 .89V42H8a1.98 1.98 0 0 1-2-2.13V23.89a4 4 0 0 1 1.18-2.85l14-13.88a4 4 0 0 1 5.64 0l14 13.88A4 4 0 0 1 42 23.88v16.15c0 1.09-.9 1.97-2 1.97H26Zm-2.6-31.36-.11.1-12.71 12.9a2 2 0 0 0-.58 1.4v13.02h8v-7.9a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v7.9h8V25.04a2 2 0 0 0-.58-1.4l-12.7-12.9a1 1 0 0 0-1.33-.1Z"></path>
                                        </svg>
                                        <span aria-hidden="true" class="TabNavigation__text____20196">ホーム</span>
                                    </a>
                                </li>
                                <li class="TabNavigation__item____20196">
                                    <button type="button" class="TabNavigation__button____20196" data-cl-params="_cl_link:seek;_cl_position:0" data-cl_cl_index="2">
                                        <svg width="48" height="48" viewBox="0 0 48 48" aria-hidden="true" class="Symbol____20196 TabNavigation__icon____20196">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21 32a11 11 0 1 1 0-22 11 11 0 0 1 0 22Zm20.41 6.59-8.5-8.5a15 15 0 1 0-2.83 2.83l8.5 8.5a2 2 0 1 0 2.83-2.83Z"></path>
                                        </svg>
                                        <span class="TabNavigation__text____20196">探す</span>
                                    </button>
                                    <input type="text" tabindex="-1" aria-hidden="true" readonly="" class="TabNavigation__input____20196" data-cl_cl_index="3">
                                </li>
                                <li class="TabNavigation__item____20196">
                                    <a href="https://order.shopping.yahoo.co.jp/cgi-bin/cart-form" aria-label="カート" class="TabNavigation__link____20196" data-cl-params="_cl_link:cart;_cl_position:0" data-cl_cl_index="4">
                                        <svg width="48" height="48" viewBox="0 0 48 48" aria-hidden="true" class="Symbol____20196 TabNavigation__icon____20196">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 7.5C5 6.67 5.67 6 6.5 6h5c.76 0 1.4.57 1.49 1.31l.07.22L14 11H39.9a2 2 0 0 1 2.03 2.58L38.7 24.1l-.02.05A2 2 0 0 1 36.7 26H18.02l-.91 3H36.7a2 2 0 1 1 0 4h-22a2 2 0 0 1-1.77-1.06 2 2 0 0 1-.35-1.83l1.28-4.16L9.3 9H6.5A1.5 1.5 0 0 1 5 7.5ZM37.31 15l-2.14 7H16.94l-1.88-7h22.25ZM18 42a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM38 38a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
                                        </svg>
                                        <span aria-hidden="true" class="TabNavigation__text____20196">カート</span>
                                    </a>
                                </li>
                                <li class="TabNavigation__item____20196">
                                    <a href="https://shopping.yahoo.co.jp/my/watchlist/item/" rel="nofollow" aria-label="お気に入り" class="TabNavigation__link____20196" data-cl-params="_cl_link:favorite;_cl_position:0" data-cl_cl_index="5">
                                        <svg width="48" height="48" viewBox="0 0 48 48" aria-hidden="true" class="Symbol____20196 TabNavigation__icon____20196">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.89 12.99c-1.52 0-3.04.55-4.2 1.67a5.44 5.44 0 0 0 0 7.87L24 34.4l12.3-11.87a5.44 5.44 0 0 0 0-7.87 6.09 6.09 0 0 0-8.38 0L25.4 17.1a2 2 0 0 1-2.78 0l-2.53-2.44a6.02 6.02 0 0 0-4.2-1.67ZM24 39c-.61 0-1.23-.23-1.7-.69L8.92 25.41a9.4 9.4 0 0 1 0-13.63c3.84-3.7 10.1-3.7 13.93 0l1.15 1.1 1.15-1.1c3.84-3.7 10.09-3.7 13.93 0a9.4 9.4 0 0 1 0 13.63L25.7 38.31c-.47.46-1.09.69-1.7.69Z"></path>
                                        </svg>
                                        <span aria-hidden="true" class="TabNavigation__text____20196">お気に入り</span>
                                    </a>
                                </li>
                                <li class="TabNavigation__item____20196">
                                    <a href="https://shopping.yahoo.co.jp/my/" rel="nofollow" aria-label="マイページ" class="TabNavigation__link____20196" data-cl-params="_cl_link:my;_cl_position:0" data-cl_cl_index="6">
                                        <svg width="48" height="48" viewBox="0 0 48 48" aria-hidden="true" class="Symbol____20196 TabNavigation__icon____20196">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22 6c4.42 0 8 4 8 8.92S27.14 26 22 26c-5.23 0-8-6.16-8-11.08S17.58 6 22 6Zm0 4c-2.2 0-4 2.4-4 5.35C18 18.3 19.39 22 22 22c2.57 0 4-3.7 4-6.65S24.2 10 22 10Zm7.5 32a1.5 1.5 0 0 1 0-3h11a1.5 1.5 0 1 1 0 3h-11ZM22 28c1.17 0 2.56.06 4 .2v3.97c-.95-.08-1.9-.13-2.77-.15L22.4 32h-1.03l-.7.02-.71.02-.75.04c-2.52.15-5.28.53-6.61 1.35-1.23.75-1.77 2.48-2 3.59l-.06.34-.03.15c-.04.26.3.49.72.49H26v4H7c-.59 0-1.05-.53-1-1.14l.06-.52c0-.1.02-.19.03-.29l.07-.61.05-.33.1-.7c.39-2.48 1.15-5.6 2.6-7.08 2.18-2.25 7.13-3.07 11.03-3.27l.72-.04.69-.01L22 28Zm18.5 6a1.5 1.5 0 1 1 0 3h-11a1.5 1.5 0 0 1 0-3h11Zm0-5a1.5 1.5 0 1 1 0 3h-11a1.5 1.5 0 0 1 0-3h11Z"></path>
                                        </svg>
                                        <span aria-hidden="true" class="TabNavigation__text____20196">マイページ</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </shp-sp-footer-global-navi>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';

// State for the snackbar
const cartCount = ref(23); // Hardcoded value from your HTML
const isSnackbarExited = ref(true); // Hardcoded from 'styles_isExited__rbpFI'

// Data for the Add to Cart form
const formActionUrl = 'https://order.shopping.yahoo.co.jp/cgi-bin/cart-form?crumb=Ao77YWgASe6IYe1Wf8GeOVzduq2txK7JDaWVs-byhMpjQIG3n9K3IWts44jLOdXSIuw-sCajPSF1v2JST-2I82qUG2PAaDl4KSCr9loWu_nfBMK8-1dtyMBImvtq311yWFiIo0wB'; // Exact URL from your HTML
const formData = ref({
    sellerManagedItemId: '91631525',
    sellerId: 'zozo',
    addItemOptions: '[{"name":"カラー","value":"ブラック"},{"name":"サイズ","value":"FREE（レディース：S，Mサイズ相当）"}]',
    quantity: '1',
    isSocialGift: '1',
    isNewOrganicUser: '0',
});

// Method for the cart button (example: could submit the form or show a confirmation)
const addToCart = () => {
    console.log('Add to Cart clicked!', formData.value);
    // Here, you would typically submit the form or dispatch an action
    // For a real application, you might use an AJAX call instead of a direct form submission
};

// You might also want a way to control the snackbar's visibility, e.g., a method to show it
// const showSnackbar = () => {
//   isSnackbarExited.value = false;
//   // Optionally hide after a few seconds
//   setTimeout(() => {
//     isSnackbarExited.value = true;
//   }, 3000);
// };
</script>

<style scoped>
/*
   These styles are taken directly from your HTML snippet.
   For a real application, consider organizing these into CSS modules
   or a more structured stylesheet approach.
*/

/* Fixed Area Container */
.styles_fixedArea__V4SX0 {
    position: sticky;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000; /* Ensure it stays on top */
    background: white; /* Example background */
    /* transform: translateY(0px) is directly in the template style attribute */
}

/* Half Modal (shp-incentive-sheet) */
.styles_halfModal__TNbbH {
    /* Add styles for your half modal here */
}

/* Front Delivery Display */
.front-delivery-display {
    /* Add styles for this component, currently display: none; as per HTML */
}

.front-delivery-reset____20196 {
    /* Specific reset styles for this library version */
}

/* Snackbar */
.styles_snackbar__BRZwR {
    position: relative; /* Or absolute depending on desired stacking */
    width: 100%;
    box-sizing: border-box;
    padding: 8px 16px; /* Example padding */
}

.styles_snackbarBody__Uvi4C {
    background-color: rgba(0, 0, 0, 0.8); /* Dark background for snackbar */
    color: white;
    border-radius: 4px;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.3s ease, transform 0.3s ease;
    will-change: opacity, transform;
}

.styles_snackbarBody__Uvi4C.styles_isExited__rbpFI {
    opacity: 0;
    transform: translateY(100%); /* Example: slide out from bottom */
    pointer-events: none; /* Make it unclickable when exited */
}

.styles_cartCount__GXI2e {
    /* Specific cart count snackbar styles */
}

.MarkText {
    display: inline-flex;
    align-items: center;
}

.MarkText__mark {
    margin-right: 8px; /* Space between icon and text */
    display: flex; /* Ensure SVG aligns correctly */
    align-items: center;
}

.Symbol {
    /* Base SVG symbol styles */
    fill: currentColor; /* Use text color for SVG fill */
}

.styles_CartCountIcon__7LO6k {
    /* Specific cart count icon styles */
    width: 24px; /* Adjust size if 48px is too large visually */
    height: 24px;
}

.MarkText__text {
    font-size: 0.9em;
    white-space: nowrap; /* Prevent text from wrapping */
}

.styles_CartCountMessage__vqLiY {
    /* Specific message styles */
}

.styles_CartCountText__HUZVs {
    /* Text around the number */
}

.styles_CartCountNumber__YDBOi {
    font-style: normal; /* Remove italic from <em> */
    font-weight: bold;
    color: yellow; /* Highlight the number */
    margin: 0 4px; /* Space around the number */
}

/* Cart Button Wrap */
.styles_cartButtonWrap__Nsr19 {
    padding: 10px 16px; /* Padding around the buttons */
    background: white; /* Ensure background is solid */
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow above buttons */
}

.styles_cartOnly__i93aB {
    /* Specific styles for cart only state */
}

.styles_cartButtonWrap__NXMhc {
    /* Another class for cart button wrap */
}

.target_modules {
    /* Target modules class */
}

.styles_buttons__981HU {
    display: flex;
    justify-content: center;
    width: 100%;
}

/* Button */
.Button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    font-size: 1.1em;
    padding: 12px 20px;
    border-radius: 6px;
    text-align: center;
    width: 100%; /* Make button fill available width */
    box-sizing: border-box;
}

.Button--orangeFilled {
    background-color: #ff7f00; /* Orange color */
    color: white;
    font-weight: bold;
}

.styles_cartButton__qC6Sh {
    /* Specific cart button styles */
}

/* Hidden Form Link (cl-noclick-log) */
.cl-noclick-log {
    display: none; /* Keep this hidden as in original HTML */
}

/* Global Navigation (shp-sp-footer-global-navi) */
/* Assuming this is a Web Component. Styles inside would typically be shadow DOM scoped or external.
   If you need to style elements *within* it, you'd need ::v-deep or :deep() if it's a Vue component,
   or specific global CSS rules if it's a native Web Component without shadow DOM. */

.TabNavigation____20196 {
    display: flex;
    justify-content: space-around;
    padding: 10px 0;
    background-color: #f8f8f8; /* Light background for nav */
    border-top: 1px solid #eee;
}

.TabNavigation__gradation____20196 {
    /* Style for gradation, currently hidden */
}

.TabNavigation__items____20196 {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    width: 100%; /* Ensure items spread out */
    justify-content: space-around;
}

.TabNavigation__item____20196 {
    flex: 1; /* Distribute space evenly */
    text-align: center;
}

.TabNavigation__link____20196,
.TabNavigation__button____20196 {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: #666;
    font-size: 0.7em;
    padding: 5px 0;
    width: 100%;
    background: none;
    border: none;
    cursor: pointer;
}

.TabNavigation__icon____20196 {
    width: 24px; /* Size for nav icons */
    height: 24px;
    margin-bottom: 3px;
    fill: #666; /* Default icon color */
}

.TabNavigation__text____20196 {
    white-space: nowrap; /* Prevent text wrapping */
}

.TabNavigation__input____20196 {
    /* Hidden input for search button, keep it hidden */
    display: none;
}
</style>