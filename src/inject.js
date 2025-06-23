// Insert try-on icon
const tryonIcon = document.createElement('div');
tryonIcon.style.position = 'absolute';
tryonIcon.style.bottom = '16px';
tryonIcon.style.right = '75px';
tryonIcon.innerHTML = `
      <div id="itmbasic" class="target_modules">
        <button type="button" aria-label="Try this on" class="styles_itemFavoriteButton__FWgi4 styles_border__WvHjt cl-noclick-log" data-cl-params="_cl_module:itmbasic;_cl_link:fav;_cl_position:0:regi:0" data-cl_cl_index="28">
          <svg width="28px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
            <path stroke="#868686" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10V5a1 1 0 0 1 1-1h4c0 1 .8 3 4 3s4-2 4-3h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-1a1 1 0 0 0-1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 0-1-1H4a1 1 0 0 1-1-1z"></path>
          </svg>
        </button>
      </div>
    `;
const splide = document.querySelector('.splide');
if (splide) {
    splide.parentNode.insertBefore(tryonIcon, splide.nextSibling);
    tryonIcon.querySelector('button').addEventListener('click', () => {
        const li = document.querySelector('.splide__slide.is-active.is-visible');
        const imgs = li.querySelectorAll('img');
        const img = Array.from(imgs).find(img => !img.src.startsWith('data:image/svg+xml'));
        const encodedImgSrc = encodeURIComponent(img.src);

        const popupWidth = 600;
        const popupHeight = 500;
        const left = window.screenX + (window.outerWidth - popupWidth) / 2;
        const top = window.screenY + (window.outerHeight - popupHeight) / 2;
        window.open(
            `https://vietho.localhost:5175/#url=${encodedImgSrc}`,
            'popupWindow',
            `width=${popupWidth},height=${popupHeight},left=${left},top=${top},menubar=no,toolbar=no,status=no,resizable=yes,scrollbars=yes`
        );
    });
}