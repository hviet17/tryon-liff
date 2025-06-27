<script setup lang="ts">
import cloth from '@/assets/clothe.png'
import AIIcon from '@/assets/icons/ai-icon.svg'
</script>

<template>
    <div class="result-container">
        <div class="img-result">
            <img :src="cloth" alt="">
        </div>
        <div class="summary">
            <div class="center">
                <div class="header">
                    <AIIcon/>
                    <div class="title">Summary</div>
                </div>
            </div>
            <div class="center">
                <div class="item">
                    <div class="img">
                        <img :src="cloth" alt="">
                    </div>
                    <div class="item-info">
                        <div class="name">Shirt</div>
                        <div class="info">wwwwww</div>
                    </div>
                    <div class="price">$2000</div>
                </div>
            </div>
        </div>
        <button class="action-btn">Buy</button>
    </div>
</template>

<style scoped lang="scss">
.img-result {
    width: 100%;
    height: 350px;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        border-radius: 20px;

    }
}

.summary {
    display: flex;
    flex-direction: column;
    height: 184px;
    width: 100%;
    //padding: 20px;
    border-radius: 5px;
    border: 2px solid #ffff;
}

.item {
    display: flex;
    height: 100%;
    gap: 10px;

    .img {
        width: 60px;
        height: 60px;
        overflow: hidden;

        img {
            border-radius: 5px;
            width: 100%;
            height: 100%;
        }
    }

    .name {
        font-family: SF Pro Text;
        font-weight: 600;
        font-size: 12px;
        line-height: 13px;
        letter-spacing: 0px;
        color: #111111;
    }

    .info {
        font-family: Hiragino Sans;
        font-weight: 400;
        font-size: 13px;
        line-height: 20px;
        letter-spacing: 0px;

    }
}

.item-info {
    flex: 1;
}

.price {
    font-family: SF Pro Text;
    font-weight: 800;
    font-size: 15px;
    line-height: 100%;
    letter-spacing: 0px;
    color: #000000;
    flex: 1;
}

.title {
    display: inline-block;
    font-family: Apple SD Gothic Neo;
    font-weight: 500;
    font-size: 13px;
    line-height: 100%;
    letter-spacing: 0px;
    text-align: center;
    color: #000000;
}

.header {
    border-bottom: 2px solid #ffff;
    width: 100%;
}

.center {
    padding: 16px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
}

.action-btn {
    background-color: #3B3B3B;
    color: #FFFFFF;
    border: none;
    border-radius: 8px;
    height: 48px;
    font-weight: 700;
}

.result-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>