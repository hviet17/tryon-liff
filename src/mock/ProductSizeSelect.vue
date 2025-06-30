<template>
    <div class="styles_itemStock__MI_2Q">
        <p class="styles_optionName__tGtQi">サイズ</p>
        <ul class="styles_list__pQHBZ">
            <li
                v-for="(size, index) in sizes"
                :key="index"
                :class="['styles_item__QjDNk', { 'false': !size.isSelected }]"
            >
                <a
                    v-if="!size.isButton"
                    class="styles_itemLink__dZ7Ad styles_backgroundHeightForStockLine__Fc_ap"
                    :data-testid="`has-not-image-item-list-two-${index}`"
                    :href="size.link || '#'"
                >
                    <div
                        class="styles_backgroundWidthForOther__Un_JV"
                        :data-testid="`has-not-image-item-list-background-width-two-${index}`"
                    >
                        <div class="styles_choiceName__YXWaB">
                            <p class="styles_choiceNameText__V9f2V">{{ size.name }}</p>
                            <p class="styles_choiceStockTextArea__IiBfx">
                                <span class="styles_stockText__KddQi ">{{ size.stockStatus }}</span>
                            </p>
                        </div>
                    </div>
                </a>
                <button
                    v-else
                    type="button"
                    class="Button Button--blueTinted styles_itemLink__dZ7Ad styles_moreButton__0JSWX false"
                >
                    <span>{{ size.name }}</span>
                </button>
            </li>
        </ul>
    </div>
</template>

<script setup>
import {ref} from 'vue';

const sizes = ref([
    {
        name: 'FREE（レ..）',
        stockStatus: '', // Empty as per your HTML
        isSelected: false, // Assuming it's not selected by default
        isButton: false,
        link: '#' // Example link
    },
    {
        name: '一覧を見る',
        stockStatus: null,
        isSelected: false,
        isButton: true,
        link: null
    }
]);
</script>

<style scoped>
/* All styles below are crucial for replicating the exact layout and appearance.
   You'll want to ensure these match your project's actual CSS or design system. */

.styles_itemStock__MI_2Q {
    /* Add your specific styles for the overall container here */
    padding: 16px;
    width: 398px;
    display: flex;
    flex-direction: column;
}

.styles_optionName__tGtQi {
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 1em;
    color: #868686;
}

.styles_list__pQHBZ {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex; /* Arrange items horizontally */
    flex-wrap: wrap; /* Allow items to wrap to the next line */
    gap: 10px; /* Space between items */
}

.styles_item__QjDNk {
    /* Basic styling for list items */
    width: 114px;
    height: 53px;
}

.styles_itemLink__dZ7Ad {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: inherit;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 8px 12px;
    min-height: 40px; /* Ensure a consistent height */
    box-sizing: border-box;
}

.styles_backgroundHeightForStockLine__Fc_ap {
    /* Specific styling for items with stock line if needed */
}

.styles_backgroundWidthForOther__Un_JV {
    display: flex;
    align-items: center;
    width: 100%; /* Take full width of parent link */
    text-align: center;
}

.styles_choiceName__YXWaB {
    display: flex;
    flex-direction: column;
    flex-grow: 1; /* Allow content to take available space */
    text-overflow: ellipsis;
}

.styles_choiceNameText__V9f2V {
    margin: 0;
    font-size: 0.9em;
    line-height: 1.2;
}

.styles_choiceStockTextArea__IiBfx {
    margin: 0;
    font-size: 0.8em;
    color: #888;
}

.styles_stockText__KddQi {
    /* Style for actual stock text, currently empty */
}

/* Button specific styles */
.Button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    font-size: 1em;
    padding: 8px 15px;
    border-radius: 4px;
    text-align: center;
    min-height: 40px;
}

.Button--blueTinted {
    background-color: #e0f2f7; /* Light blue tint */
    color: #007bff; /* Blue text */
}

.styles_moreButton__0JSWX {
    /* Specific styles for the "More" button if it differs */
}
</style>