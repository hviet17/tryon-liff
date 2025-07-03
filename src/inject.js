const style = document.createElement('style');
style.textContent = `
    .icon {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background-color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      color: #4C46F9;
      border-radius: 100px;
      border: 1px solid #4C46F9;
      padding: 10px 12px;
      cursor: pointer;
      z-index: 999;
    }
  `;
document.head.appendChild(style);
const iconDiv = document.createElement('div');
iconDiv.className = 'icon';
iconDiv.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" fill="none" class="icon-svg">
      <g filter="url(#a)">
        <mask id="b" width="14" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha;">
          <circle cx="7" cy="7.5" r="5.484" stroke="#59EDDD" stroke-width="3.032"></circle>
        </mask>
        <g mask="url(#b)">
          <g filter="url(#c)"><circle cx="3.202" cy="3.572" r="6.254" fill="#59EDDD"></circle></g>
          <g filter="url(#d)"><circle cx="1.163" cy="12.481" r="6.254" fill="#FF6F6C"></circle></g>
          <g filter="url(#e)"><circle cx="11.057" cy="3.572" r="6.254" fill="#3A93EC"></circle></g>
          <g filter="url(#f)"><circle cx="10.888" cy="11.026" r="6.254" fill="#6350DF"></circle></g>
        </g>
      </g>
      <defs>
        <filter id="a" width="14.27" height="14.27" x="0" y=".5" filterUnits="userSpaceOnUse">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feOffset dx=".27" dy=".27"/>
          <feGaussianBlur stdDeviation=".337"/>
          <feComposite in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic"/>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend in2="shape" result="effect1_innerShadow"/>
        </filter>
        <filter id="c" width="22.308" height="22.308" x="-7.953" y="-7.582" filterUnits="userSpaceOnUse">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="2.45"/>
        </filter>
        <filter id="d" width="22.308" height="22.308" x="-9.991" y="1.327" filterUnits="userSpaceOnUse">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="2.45"/>
        </filter>
        <filter id="e" width="24.759" height="24.759" x="-1.322" y="-8.807" filterUnits="userSpaceOnUse">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="3.063"/>
        </filter>
        <filter id="f" width="22.308" height="22.308" x="-.266" y="-.128" filterUnits="userSpaceOnUse">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="2.45"/>
        </filter>
      </defs>
    </svg>
    <div>Try On With AI</div>
  `;
const swiperContainer = document.querySelector('.swiper');
const liffUrl = "https://tryon-liff.pages.dev"
// const liffUrl = "https://vietho.localhost:5175"
if (swiperContainer) {
    swiperContainer?.appendChild(iconDiv);
    iconDiv.addEventListener('click', () => {
        const activeImgSrc = document.querySelector('.swiper-slide-active img')?.src;
        const encodedImgSrc = encodeURIComponent(activeImgSrc);
        // Get product name
        const productName = document.querySelector('.p-goods-information__heading')?.innerText.trim();
        // Get product price
        const productPrice = document.querySelector('.p-goods-information__price')?.childNodes[0].nodeValue.trim();

        const popupWidth = 430;
        const popupHeight = 932;
        const left = window.screenX + (window.outerWidth - popupWidth) / 2;
        const top = window.screenY + (window.outerHeight - popupHeight) / 2;
        window.open(
            `${liffUrl}/guide?clothesImg=${encodedImgSrc}&title=${productName}&price=${productPrice}&url=${encodeURIComponent(window.location.href)}`,
            'popupWindow',
            `width=${popupWidth},height=${popupHeight},left=${left},top=${top},menubar=no,toolbar=no,status=no,resizable=no,scrollbars=no`
        );
    });
}

window.addEventListener('message', (e) => {
    if (e.data === "buy") {
        const buyButton = document.querySelector('button[data-cl-params*="addmdl"]');
        if (buyButton) buyButton.click();
    }
});