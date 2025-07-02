// 1. Create the outer button div
const iconDiv = document.createElement('div');
iconDiv.className = 'icon';
Object.assign(iconDiv.style, {
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translate(-50%)',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    color: '#4c46f9',
    borderRadius: '100px',
    border: '1px solid #4C46F9',
    padding: '4px 20px',
    cursor: 'pointer',
    zIndex: '10'
});

// 2. Create the SVG (with overflow: visible and animated bars)
const svgHTML = `
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" fill="none" style="overflow: visible;">
  <rect class="bar1" width="2.944" height="8.831" fill="url(#a)" rx="1.472" ry="1.472"></rect>
  <rect class="bar2" width="3.238" height="8.831" x="10.762" fill="url(#b)" rx="1.619" ry="1.619"></rect>
  <rect class="bar3" width="2.944" height="5.887" x="5.286" y="1.472" fill="url(#c)" rx="1.472" ry="1.472"></rect>
  <defs>
    <linearGradient id="a" x1="1.262" x2="11.653" y1="-5.5" y2="1.391" gradientUnits="userSpaceOnUse">
      <stop stop-color="#7000FF"></stop>
      <stop offset=".465" stop-color="#494FF9"></stop>
      <stop offset=".5" stop-color="#4F34F9"></stop>
      <stop offset="1" stop-color="#2EBEFC"></stop>
    </linearGradient>
    <linearGradient id="b" x1="12.15" x2="22.891" y1="-5.5" y2="2.336" gradientUnits="userSpaceOnUse">
      <stop stop-color="#7000FF"></stop>
      <stop offset=".465" stop-color="#494FF9"></stop>
      <stop offset=".5" stop-color="#4F34F9"></stop>
      <stop offset="1" stop-color="#2EBEFC"></stop>
    </linearGradient>
    <linearGradient id="c" x1="6.547" x2="14.068" y1="-2.195" y2="5.286" gradientUnits="userSpaceOnUse">
      <stop stop-color="#7000FF"></stop>
      <stop offset=".465" stop-color="#494FF9"></stop>
      <stop offset=".5" stop-color="#4F34F9"></stop>
      <stop offset="1" stop-color="#2EBEFC"></stop>
    </linearGradient>
  </defs>
</svg>`;

// 3. Insert the SVG
iconDiv.innerHTML = svgHTML;

// 4. Add the text
const textDiv = document.createElement('div');
textDiv.textContent = 'AI Fitting';
iconDiv.appendChild(textDiv);

// 5. Inject global animation styles
const style = document.createElement('style');
style.textContent = `
@keyframes bounceAround {
  0%   { transform: translateY(0); }
  30%  { transform: translateY(-2px); }
  50%  { transform: translateY(1px); }
  70%  { transform: translateY(-1px); }
  100% { transform: translateY(0); }
}

rect.bar1 {
  animation: bounceAround 1.2s ease-in-out infinite;
}
rect.bar2 {
  animation: bounceAround 1.2s ease-in-out infinite;
  animation-delay: 0.15s;
}
rect.bar3 {
  animation: bounceAround 1.2s ease-in-out infinite;
  animation-delay: 0.3s;
}
`;
document.head.appendChild(style);
const swiperContainer = document.querySelector('.swiper');
const liffUrl = "https://tryon-liff.pages.dev"
// const liffUrl = "https://vietho.localhost:5175"
if (swiperContainer) {
    swiperContainer?.appendChild(iconDiv);
    iconDiv.addEventListener('click', () => {
        const activeImgSrc = document.querySelector('.swiper-slide-active img')?.src;
        const encodedImgSrc = encodeURIComponent(activeImgSrc);
        const popupWidth = 600;
        const popupHeight = 500;
        const left = window.screenX + (window.outerWidth - popupWidth) / 2;
        const top = window.screenY + (window.outerHeight - popupHeight) / 2;
        window.open(
            `${liffUrl}/#url=${encodedImgSrc}`,
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