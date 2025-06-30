<template>
    <div id="top_inf" class="styles_storeTitle__BvQCi target_modules">
        <div>
            <button class="styles_storeLink__GZ1M5" data-cl-params="_cl_link:str_exp;_cl_position:0;" data-cl_cl_index="1" @click="toggleExpand">
        <span class="styles_storeLinkItemLeft__MvDEp">
          <svg width="48" height="48" viewBox="0 0 48 48" aria-hidden="true" class="Symbol styles_storeIcon__Mkvbc">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 42a2 2 0 0 1-2-2V28h4v10h24V28h4v12a2 2 0 0 1-1.85 2H10Zm33.58-23L38 6H10L4.42 19A4.98 4.98 0 0 0 9 26a5 5 0 0 0 5-5 5 5 0 0 0 10 0 5 5 0 0 0 10 0 5 5 0 1 0 9.58-2Z"></path>
          </svg>
          <span class="styles_names__fBkDG">
            <span class="styles_storeName__Xxi8I LineClamp" style="-webkit-line-clamp: 1;">
              <font style="vertical-align: inherit;"> ZOZOTOWN Yahoo!店 </font>
            </span>
            <span class="styles_shopName__LVktV LineClamp" style="-webkit-line-clamp: 1;">
              <font style="vertical-align: inherit;"> Whim Gazette </font>
            </span>
          </span>
        </span>
                <span class="styles_storeLinkItemRight__PbN0F">
          <svg width="48" height="48" viewBox="0 0 48 48" aria-hidden="true" class="Symbol styles_storeTitleToggleIcon__Hmla7">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24 29.18 9.41 14.58a2 2 0 0 0-2.83 2.83l16 16A2 2 0 0 0 24 34a2 2 0 0 0 1.42-.58l16-16a2 2 0 0 0-2.83-2.83L24 29.17Z"></path>
          </svg>
        </span>
            </button>

            <div class="Expand__area" :style="expandAreaStyles" v-show="isExpanded">
                <div class="styles_note___KrsV">
                    <a href="https://shopping.yahoo.co.jp/store_rating/zozo/store/review/" data-cl-params="_cl_link:str_rvw;_cl_position:0;" data-cl_cl_index="2">
            <span class="Review Review--store styles_storeReviewStar__g0E1_">
              <span class="Review__stars" role="img" aria-label="5点中4.56点の評価">
                <span class="Review__starWrapper">
                  <span class="Review__star Review__star--colored">
                    <svg width="48" height="48" viewBox="0 0 48 48" aria-hidden="true" class="Symbol">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M34.66 42.56 24 34.86l-10.65 7.7a1.04 1.04 0 0 1-1.24 0 1.06 1.06 0 0 1-.38-1.2l4.1-12.57-10.44-8.5c-.35-.28-.48-.79-.33-1.21.15-.42.54-.75.99-.75h12.86L23 6.68c.15-.42.54-.68.99-.68.44 0 .84.25.99.67l4.1 11.66h12.86c.45 0 .84.33.99.75.15.42.02.91-.33 1.2l-10.43 8.5 4.08 12.58a1.07 1.07 0 0 1-1 1.4c-.2 0-.42-.07-.6-.2Z"></path>
                    </svg>
                  </span>
                </span>
                <span class="Review__starWrapper">
                  <span class="Review__star Review__star--colored">
                    <svg width="48" height="48" viewBox="0 0 48 48" aria-hidden="true" class="Symbol">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M34.66 42.56 24 34.86l-10.65 7.7a1.04 1.04 0 0 1-1.24 0 1.06 1.06 0 0 1-.38-1.2l4.1-12.57-10.44-8.5c-.35-.28-.48-.79-.33-1.21.15-.42.54-.75.99-.75h12.86L23 6.68c.15-.42.54-.68.99-.68.44 0 .84.25.99.67l4.1 11.66h12.86c.45 0 .84.33.99.75.15.42.02.91-.33 1.2l-10.43 8.5 4.08 12.58a1.07 1.07 0 0 1-1 1.4c-.2 0-.42-.07-.6-.2Z"></path>
                    </svg>
                  </span>
                </span>
                <span class="Review__starWrapper">
                  <span class="Review__star Review__star--colored">
                    <svg width="48" height="48" viewBox="0 0 48 48" aria-hidden="true" class="Symbol">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M34.66 42.56 24 34.86l-10.65 7.7a1.04 1.04 0 0 1-1.24 0 1.06 1.06 0 0 1-.38-1.2l4.1-12.57-10.44-8.5c-.35-.28-.48-.79-.33-1.21.15-.42.54-.75.99-.75h12.86L23 6.68c.15-.42.54-.68.99-.68.44 0 .84.25.99.67l4.1 11.66h12.86c.45 0 .84.33.99.75.15.42.02.91-.33 1.2l-10.43 8.5 4.08 12.58a1.07 1.07 0 0 1-1 1.4c-.2 0-.42-.07-.6-.2Z"></path>
                    </svg>
                  </span>
                </span>
                <span class="Review__starWrapper">
                  <span class="Review__star Review__star--colored">
                    <svg width="48" height="48" viewBox="0 0 48 48" aria-hidden="true" class="Symbol">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M34.66 42.56 24 34.86l-10.65 7.7a1.04 1.04 0 0 1-1.24 0 1.06 1.06 0 0 1-.38-1.2l4.1-12.57-10.44-8.5c-.35-.28-.48-.79-.33-1.21.15-.42.54-.75.99-.75h12.86L23 6.68c.15-.42.54-.68.99-.68.44 0 .84.25.99.67l4.1 11.66h12.86c.45 0 .84.33.99.75.15.42.02.91-.33 1.2l-10.43 8.5 4.08 12.58a1.07 1.07 0 0 1-1 1.4c-.2 0-.42-.07-.6-.2Z"></path>
                    </svg>
                  </span>
                </span>
                <span class="Review__starWrapper">
                  <span class="Review__starHalf">
                    <svg width="48" height="48" viewBox="0 0 48 48" aria-hidden="true" class="Symbol">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M24 6c-.45 0-.84.26-1 .68l-4.1 11.65H6.06c-.45 0-.84.33-.99.75-.15.42-.02.93.33 1.21l10.43 8.5-4.09 12.58a1.06 1.06 0 0 0 1 1.39c.22 0 .43-.07.61-.2L24 34.86V6Z"></path>
                    </svg>
                  </span>
                  <span class="Review__star">
                    <svg width="48" height="48" viewBox="0 0 48 48" aria-hidden="true" class="Symbol">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M34.66 42.56 24 34.86l-10.65 7.7a1.04 1.04 0 0 1-1.24 0 1.06 1.06 0 0 1-.38-1.2l4.1-12.57-10.44-8.5c-.35-.28-.48-.79-.33-1.21.15-.42.54-.75.99-.75h12.86L23 6.68c.15-.42.54-.68.99-.68.44 0 .84.25.99.67l4.1 11.66h12.86c.45 0 .84.33.99.75.15.42.02.91-.33 1.2l-10.43 8.5 4.08 12.58a1.07 1.07 0 0 1-1 1.4c-.2 0-.42-.07-.6-.2Z"></path>
                    </svg>
                  </span>
                </span>
              </span>
              <span class="Review__average styles_ratingAverage__k9ILZ" aria-hidden="true">
                <font style="vertical-align: inherit;"> 4.56 </font>
              </span>
              <span class="Review__count Review__count--hasBrackets styles_count__yUqby">
                <font style="vertical-align: inherit;"> （ </font>
                <font style="vertical-align: inherit;"> 179,635 </font>
                <font style="vertical-align: inherit;"> 件 </font>
                <font style="vertical-align: inherit;"> ） </font>
              </span>
            </span>
                    </a>
                    <div class="styles_storeTopButtonWrapper__Nqm_j">
                        <a href="https://store.shopping.yahoo.co.jp/zozo/?sc_i=shopping-smartphone-web-detail-item-top_inf-str_top" class="Button Button--blueTinted styles_storeTopButton__5Zlfz" data-cl-params="_cl_link:str_top;_cl_position:0;" data-cl_cl_index="3">
              <span>
                <font style="vertical-align: inherit;"> ストアトップを見る </font>
              </span>
                        </a>
                    </div>
                </div>
                <div class="styles_breadCrumb__MSb_W">
                    <ol itemscope="" itemtype="http://schema.org/BreadcrumbList" class="styles_breadCrumbList__ecuEn">
                        <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem" class="styles_breadCrumbListItem__pY7VV">
                            <a itemprop="item" href="https://store.shopping.yahoo.co.jp/zozo/" data-cl-params="_cl_link:str_cat;_cl_position:1;" data-cl_cl_index="4">
                <span itemprop="name" class="styles_breadCrumbItemValue__YgWYO">
                  <font style="vertical-align: inherit;"> ZOZOTOWN Yahoo!店 </font>
                </span>
                            </a>
                            <meta itemprop="position" content="1">
                        </li>
                        <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem" class="styles_breadCrumbListItem__pY7VV">
                            <svg width="20" height="48" viewBox="0 0 20 48" aria-hidden="true" class="Symbol styles_breadCrumbItemArrowIcon__Zwahc">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="m19.42 22.58-16-16a2 2 0 0 0-2.84 0 2 2 0 0 0 0 2.83L15.18 24 .58 38.59a2 2 0 0 0 0 2.83 2 2 0 0 0 2.83 0l16-16A2 2 0 0 0 20 24a2 2 0 0 0-.58-1.42Z"></path>
                            </svg>
                            <a itemprop="item" href="https://store.shopping.yahoo.co.jp/zozo/a5eca5c7a5.html" data-cl-params="_cl_link:str_cat;_cl_position:2;cat_id:a5eca5c7a5;" class="styles_breadCrumbItemValue__YgWYO" data-cl_cl_index="5">
                <span itemprop="name">
                  <span class="LineClamp" style="-webkit-line-clamp: 1;">
                    <font style="vertical-align: inherit;"> レディースから探す </font>
                  </span>
                </span>
                            </a>
                            <meta itemprop="position" content="2">
                        </li>
                        <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem" class="styles_breadCrumbListItem__pY7VV">
                            <svg width="20" height="48" viewBox="0 0 20 48" aria-hidden="true" class="Symbol styles_breadCrumbItemArrowIcon__Zwahc">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="m19.42 22.58-16-16a2 2 0 0 0-2.84 0 2 2 0 0 0 0 2.83L15.18 24 .58 38.59a2 2 0 0 0 0 2.83 2 2 0 0 0 2.83 0l16-16A2 2 0 0 0 20 24a2 2 0 0 0-.58-1.42Z"></path>
                            </svg>
                            <a itemprop="item" href="https://store.shopping.yahoo.co.jp/zozo/ac583a5a52c.html" data-cl-params="_cl_link:str_cat;_cl_position:3;cat_id:ac583a5a52c;" class="styles_breadCrumbItemValue__YgWYO" data-cl_cl_index="6">
                <span itemprop="name">
                  <span class="LineClamp" style="-webkit-line-clamp: 1;">
                    <font style="vertical-align: inherit;"> トップス </font>
                  </span>
                </span>
                            </a>
                            <meta itemprop="position" content="3">
                        </li>
                        <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem" class="styles_breadCrumbListItem__pY7VV">
                            <svg width="20" height="48" viewBox="0 0 20 48" aria-hidden="true" class="Symbol styles_breadCrumbItemArrowIcon__Zwahc">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="m19.42 22.58-16-16a2 2 0 0 0-2.84 0 2 2 0 0 0 0 2.83L15.18 24 .58 38.59a2 2 0 0 0 0 2.83 2 2 0 0 0 2.83 0l16-16A2 2 0 0 0 20 24a2 2 0 0 0-.58-1.42Z"></path>
                            </svg>
                            <a itemprop="item" href="https://store.shopping.yahoo.co.jp/zozo/a5cba5c3a58.html" data-cl-params="_cl_link:str_cat;_cl_position:4;cat_id:a5cba5c3a58;" class="styles_breadCrumbItemValue__YgWYO" data-cl_cl_index="7">
                <span itemprop="name">
                  <span class="LineClamp" style="-webkit-line-clamp: 1;">
                    <font style="vertical-align: inherit;"> ニット/セーター </font>
                  </span>
                </span>
                            </a>
                            <meta itemprop="position" content="4">
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {computed, ref} from 'vue';

const isExpanded = ref(false);

const toggleExpand = () => {
    isExpanded.value = !isExpanded.value;
};

// Computed style for the Expand__area to control display and transition
const expandAreaStyles = computed(() => ({
    // These variables are from the original CSS and need to be set
    '--_Expand-initial-display': 'none',
    '--_Expand-transition-duration': '250ms',
    // Control the display based on isExpanded. For animation, you'd typically
    // use `max-height` or a Vue transition component.
    // For simplicity, directly toggling 'display' here as per original inline style.
    display: isExpanded.value ? 'block' : 'none',
    // When expanding, set max-height to a value larger than content to enable transition
    maxHeight: isExpanded.value ? '500px' : '0', // Adjust 500px as needed for content height
    opacity: isExpanded.value ? '1' : '0',
}));
</script>

<style scoped>
/*
  Base/Reset Styles: These styles are typically applied globally or at a very high level
  in an application to ensure consistent rendering across browsers.
*/
a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, ins, kbd, label, legend, li, main, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {
    border: 0;
    font-size: 100%;
    font: inherit;
    margin: 0;
    padding: 0;
    vertical-align: initial
}

ol, ul {
    list-style: none
}

blockquote, q {
    quotes: none
}

table {
    border-collapse: collapse;
    border-spacing: 0
}

*, :after, :before {
    box-sizing: border-box
}

:root {
    font: 14px/1.2 Hiragino Kaku Gothic ProN, HiraKakuProN-W3, Meiryo, sans-serif, system-ui
}

body {
    -webkit-text-size-adjust: 100%;
    word-wrap: break-word;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    color: #434343;
    line-height: inherit;
    word-break: break-all
}

a {
    -webkit-tap-highlight-color: rgba(0, 0, 0, .15);
    color: #0260ea;
    text-decoration: none
}

@media (hover: hover) {
    a:hover {
        color: #3083fd
    }
}

canvas, iframe, img, svg, video {
    vertical-align: top
}

img {
    color: #d9d9d9;
    font-size: 11px
}

/*
  Component-Specific Styles: These are tailored for the elements within your
  `#top_inf` structure.
*/

#top_inf {
    border-top: 1px solid #d9d9d9;
    border-bottom: 1px solid #ebebeb;
}

.styles_storeTitle__BvQCi {
    /* Add specific styles for this class if they were not in the general CSS.
       Often, these are generated by CSS Modules and need to be manually extracted
       from your project's original CSS files. */
    padding: 10px;
}

.styles_storeLink__GZ1M5 {
    align-items: center;
    background-color: initial; /* Ensure no default button background */
    border: 0; /* Remove default button border */
    box-shadow: none; /* Remove default button shadow */
    color: inherit; /* Inherit text color */
    cursor: pointer;
    display: flex;
    font: inherit; /* Inherit font styles */
    justify-content: space-between;
    margin: 0; /* Remove default button margin */
    padding: 0; /* Remove default button padding */
    text-align: left; /* Align text to the left */
    width: 100%; /* Ensure it takes full width */
}

.styles_storeLinkItemLeft__MvDEp {
    align-items: center;
    display: flex;
    gap: 8px; /* Adds space between icon and text */
}

.styles_storeIcon__Mkvbc {
    /* Specific size for this icon if needed, otherwise Symbol handles it */
}

.styles_names__fBkDG {
    display: flex;
    flex-direction: column;
}

.styles_storeName__Xxi8I {
    color: #434343; /* Adjust based on actual style */
    font-size: 12px; /* Adjust based on actual style */
    font-weight: 700; /* Adjust based on actual style */
    line-height: 1.2; /* Adjust based on actual style */
}

.styles_shopName__LVktV {
    color: #868686; /* Adjust based on actual style */
    font-size: 10px; /* Adjust based on actual style */
    line-height: 1.2; /* Adjust based on actual style */
}

.styles_storeLinkItemRight__PbN0F {
    /* Styles for the right-side toggle icon container */
}

.styles_storeTitleToggleIcon__Hmla7 {
    /* Specific size for this icon if needed, otherwise Symbol handles it */
}

.Expand__area {
    overflow: hidden; /* Important for the transition */
    transition-property: max-height, opacity; /* Specify properties for transition */
    transition-duration: var(--_Expand-transition-duration); /* Use the CSS variable */
    transition-timing-function: ease-out;
    /* `display` property is controlled via Vue's :style binding,
       but the initial `var(--_Expand-initial-display)` helps manage it.
       For smooth transitions, prefer `max-height` and `opacity` over `display`. */
}

.styles_note___KrsV {
    padding: 16px; /* Example padding, adjust as needed */
    border-bottom: 1px solid #ebebeb; /* Example border, adjust as needed */
}

.Review {
    display: flex;
    align-items: center;
    gap: 4px; /* Space between elements in the review */
}

.Review--store {
    /* Specific styles for store review */
}

.styles_storeReviewStar__g0E1_ {
    /* Adjust layout if needed */
}

.Review__stars {
    display: inline-flex; /* To align stars horizontally */
    gap: 2px; /* Space between individual stars */
}

.Review__starWrapper {
    display: inline-block; /* Ensure stars are side-by-side */
}

.Review__star, .Review__starHalf {
    display: inline-block;
    vertical-align: middle; /* Align with text */
}

.Review__star--colored svg path,
.Review__starHalf svg path {
    fill: #868686; /* Example color for colored/half stars, adjust as needed */
}

.Review__average {
    color: #434343; /* Example color */
    font-size: 14px; /* Example size */
    font-weight: 700; /* Example weight */
}

.styles_ratingAverage__k9ILZ {
    /* More specific styles for average */
}

.Review__count {
    color: #868686; /* Example color */
    font-size: 12px; /* Example size */
}

.Review__count--hasBrackets {
    /* Specific styles for count with brackets */
}

.styles_count__yUqby {
    /* More specific styles for count */
}

.styles_storeTopButtonWrapper__Nqm_j {
    padding: 16px; /* Example padding */
    text-align: center; /* Center the button */
}

.Button {
    --Button-padding: 8px 12px;
    --Button-width: auto;
    --Button-min-height: auto;
    --Button-border-radius: 6px;
    --Button-cursor: inherit;
    --Button-background-color: inherit;
    --Button-color: inherit;
    --Button-border-color: inherit;
    align-items: center;
    border-radius: var(--Button-border-radius);
    cursor: default;
    display: inline-flex;
    justify-content: center;
    min-height: var(--Button-min-height);
    padding: var(--Button-padding);
    text-align: center;
    width: var(--Button-width)
}

.Button.Button--blueTinted {
    background: var(--Button-background-color, #0000000a);
    border: 1px solid var(--Button-border-color, #0000);
    color: var(--Button-color, #0260ea)
}

@media (hover: hover) {
    .Button.Button--blueTinted:hover {
        background: rgba(0, 0, 0, .105);
        cursor: var(--Button-cursor, pointer);
        filter: brightness(93%)
    }

    .Button.Button--blueTinted:hover:not(a,button) {
        background: var(--Button-background-color, #0000000a);
        cursor: var(--Button-cursor, default);
        filter: none
    }
}

.styles_storeTopButton__5Zlfz {
    width: 100%; /* Make the button full width */
    font-weight: 700; /* Example bold text */
    font-size: 16px; /* Example font size */
}

.styles_breadCrumb__MSb_W {
    padding: 12px 16px; /* Example padding */
}

.styles_breadCrumbList__ecuEn {
    display: flex;
    flex-wrap: wrap; /* Allow wrapping if items are too long */
    align-items: center;
}

.styles_breadCrumbListItem__pY7VV {
    display: flex;
    align-items: center;
    white-space: nowrap; /* Prevent individual items from breaking */
}

.styles_breadCrumbItemValue__YgWYO {
    color: #0260ea; /* Link color */
    font-size: 12px; /* Example font size */
    text-decoration: none;
}

.styles_breadCrumbItemArrowIcon__Zwahc {
    --Symbol-size: 16px; /* Adjust arrow size */
    color: #868686; /* Arrow color */
    margin: 0 4px; /* Space around arrow */
}

.Symbol {
    fill: #868686; /* Ensures SVG paths inherit color */
    height: 16px; /* Default size, can be overridden by specific elements */
    width: 16px; /* Default size */
    display: inline-block; /* Aligns with text if needed */
    vertical-align: middle; /* Aligns with text if needed */
}

.LineClamp {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    /* -webkit-line-clamp: 1 is set directly in the HTML as an inline style.
       This CSS rule provides the necessary display properties for it to work. */
}
</style>