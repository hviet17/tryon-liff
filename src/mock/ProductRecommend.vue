<template>
    <ul class="styles_list__pQHBZ">
        <li
            v-for="(item, index) in variations"
            :key="index"
            :class="['styles_itemHasImage__yQkrp', { 'false': !item.isSelected }]"
        >
            <a class="styles_itemLinkHasImage__cimqy" :href="item.link">
                <p
                    :class="['styles_variationImageWrap__ZDZwC', { 'styles_selectedItem__jmBYs': item.isSelected }]"
                    :data-testid="`has-image-item-list-${index}`"
                >
          <span>
            <span class="image-wrapper">
              <span class="placeholder-box"></span>
              <img
                  :alt="item.altText"
                  :src="item.imageUrl"
                  decoding="async"
                  data-nimg="responsive"
                  style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover;"
              >
            </span>

          </span>
                </p>
                <span
                    :class="['styles_variationImageChoiceName__SSXt5', { 'styles_selectedItemText__GdSNS': item.isSelected }, 'LineClamp']"
                    style="-webkit-line-clamp: 2;"
                >
          {{ item.name }}
        </span>
            </a>
        </li>
    </ul>
</template>

<script setup>
import {ref} from 'vue';

const variations = ref([
    {
        imageUrl: 'https://z-shopping.c.yimg.jp/525/92631525/92631525b_8_d_215.jpg',
        altText: 'ブラック',
        name: 'ブラック',
        isHot: true,
        isSelected: false,
        link: '#' // Example link, adjust as needed
    },
    {
        imageUrl: 'https://z-shopping.c.yimg.jp/525/92631525/92631525b_14_d_215.jpg',
        altText: 'ベージュ',
        name: 'ベージュ',
        isHot: false,
        isSelected: false,
        link: '#'
    },
    {
        imageUrl: 'https://z-shopping.c.yimg.jp/525/92631525/92631525b_292_d_215.jpg',
        altText: 'グレイッシュベージュ',
        name: 'グレイッシュベージュ',
        isHot: false,
        isSelected: false,
        link: '#'
    },
    {
        imageUrl: 'https://z-shopping.c.yimg.jp/525/92631525/92631525b_171_d_215.jpg',
        altText: 'キャメル',
        name: 'キャメル',
        isHot: false,
        isSelected: false,
        link: '#'
    },
]);
</script>

<style scoped>
/* Base styles from your HTML, crucial for the layout and appearance */

.styles_list__pQHBZ {
    list-style: none; /* Remove default list bullets */
    padding: 0; /* Remove default padding */
    display: flex; /* Arrange items horizontally */
    flex-wrap: wrap; /* Allow items to wrap to the next line */
    gap: 15px; /* Space between list items */
    margin: 16px 16px 0 16px;
    width: 100%;
}

.styles_itemHasImage__yQkrp {
    /* You might want to define a width or min-width here */
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.styles_itemLinkHasImage__cimqy {
    display: block;
    text-decoration: none; /* Remove underline from links */
    color: inherit; /* Inherit color from parent */
}

.styles_variationImageWrap__ZDZwC {
    position: relative;
    width: 50px; /* Example fixed width for the image container */
    height: 50px; /* Example fixed height for the image container */
    border: 1px solid #ccc; /* Example border */
    border-radius: 50%; /* Example rounded corners */
    overflow: hidden; /* Ensure image doesn't overflow */
    margin-bottom: 5px; /* Space between image and text */
}

/* Specific styles for the selected item (black) */
.styles_selectedItem__jmBYs {
    border-color: blue; /* Example: highlight selected item with a blue border */
    box-shadow: 0 0 0 2px blue; /* Example: add a subtle glow */
}

.image-wrapper {
    box-sizing: border-box;
    display: block;
    overflow: hidden;
    width: initial;
    height: initial;
    background: none;
    opacity: 1;
    border: 0px;
    margin: 0px;
    padding: 0px;
    position: relative;
}

.placeholder-box {
    box-sizing: border-box;
    display: block;
    width: initial;
    height: initial;
    background: none;
    opacity: 1;
    border: 0px;
    margin: 0px;
    padding: 100% 0px 0px; /* This creates a 1:1 aspect ratio container */
}

.styles_isHotLabelHasImage__7vCch {
    position: absolute;
    top: 5px; /* Adjust positioning as needed */
    right: 5px; /* Adjust positioning as needed */
    background-color: #ff4500; /* Orange-red for "Popular" */
    color: white;
    padding: 2px 6px;
    font-size: 0.75em;
    border-radius: 3px;
    font-weight: bold;
}

.styles_variationImageChoiceName__SSXt5 {
    font-size: 0.85em;
    line-height: 1.2;
    color: #333;
    word-break: break-all;
    width: 60px;
}

.styles_selectedItemText__GdSNS {
    font-weight: bold;
    color: blue; /* Example: selected text color */
}

.LineClamp {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    /* -webkit-line-clamp: 2; is applied directly via style binding in template */
}

:deep(img) {
    //border-radius: 50%;
}
</style>