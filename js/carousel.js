document.addEventListener('DOMContentLoaded', () => {
  // .product-carousel
  let currentCarouselImgIdx = 0;
  let lightboxCurrentIdx;

  const productLightboxList = document.querySelector('.product-lightbox');
  const headerBackground = document.getElementById('header-menu-background');
  const lightboxIconPrev = document.getElementById('lightbox-icon-previous');
  const lightboxIconNext = document.getElementById('lightbox-icon-next');
  const lightboxProductItem = document.getElementsByClassName('product-lightbox-item');
  const lightboxProductThumbnails = document.getElementsByClassName('product-lightbox-thumbnail');

  const productItemImgs = document.getElementsByClassName('product-item');

  const iconPrev = document.getElementById('icon-previous');
  const iconNext = document.getElementById('icon-next');

  iconPrev.addEventListener('click', (e) => {
    e.preventDefault();
    const currentProductImg = productItemImgs[currentCarouselImgIdx];
    currentCarouselImgIdx = currentCarouselImgIdx === 0 ? 3 : currentCarouselImgIdx - 1;

    currentProductImg.classList.add('hide');
    productItemImgs[currentCarouselImgIdx].classList.remove('hide');
  });

  iconNext.addEventListener('click', (e) => {
    e.preventDefault();
    const currentProductImg = productItemImgs[currentCarouselImgIdx];
    currentCarouselImgIdx = currentCarouselImgIdx === 3 ? 0 : currentCarouselImgIdx + 1;

    currentProductImg.classList.add('hide');
    productItemImgs[currentCarouselImgIdx].classList.remove('hide');
  });

  // Event listeners to product-thumbnail-list
  const productItemList = document.getElementsByClassName('product-item');
  const productThumbnailList = document.getElementsByClassName('product-thumbnail');
  const productThumbnailListDiv = document.querySelector('.product-thumbnail-list');
  
  for (let i = 0; i < productThumbnailList.length; i++) {
    // next thumbnail item
    const productThumbnailListItem = productThumbnailList[i];

    productThumbnailListItem.addEventListener('click', () => {
      // Hide previous carousel main img idx
      productItemList[currentCarouselImgIdx].classList.add('hide');
      // Reveal product carousel main img item
      productItemList[i].classList.remove('hide');
      // Remove highlight from previous carousel thumbnail
      productThumbnailList[currentCarouselImgIdx].parentElement.classList.remove('highlight');
      // Hide thumbnail? incorrect.
      // productThumbnailList[currentCarouselImgIdx].classList.add('hide');
      productThumbnailListItem.parentElement.classList.add('highlight');

      // set lightboxCurrentIdx to newly clicked image idx for desktop view.
      lightboxCurrentIdx = i;

      // if desktop view, show header background and lightbox div when main thumbnail item is clicked.
      if (window.innerWidth >= 922) {
        headerBackground.classList.remove('hide');
        productLightboxList.classList.remove('hide');
        lightboxProductThumbnails[currentCarouselImgIdx].parentElement.classList.remove('highlight');
        lightboxProductItem[currentCarouselImgIdx].classList.add('hide');

        lightboxProductThumbnails[lightboxCurrentIdx].parentElement.classList.add('highlight');
        lightboxProductItem[lightboxCurrentIdx].classList.remove('hide');
      }

      // set currentCarouselImgIdx to the newly clicked image idx
      currentCarouselImgIdx = i;
    });
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 576 && window.innerWidth <= 922) {
      iconPrev.classList.add('hide');
      iconNext.classList.add('hide');
      productThumbnailListDiv.classList.remove('hide');
    } else if (window.innerWidth >= 922) {
      // productItemList[currentCarouselImgIdx].classList.add('hide');
      // productThumbnailList[currentCarouselImgIdx].parentElement.classList.remove('highlight');
      // currentCarouselImgIdx = 0;
      // lightboxCurrentIdx = 0;
    } else {
      iconPrev.classList.remove('hide');
      iconNext.classList.remove('hide');
      productThumbnailListDiv.classList.add('hide');
    }
  });

  if (window.innerWidth >= 576) {
    iconPrev.classList.add('hide');
    iconNext.classList.add('hide');
    productThumbnailListDiv.classList.remove('hide');

  } else {
    iconPrev.classList.remove('hide');
    iconNext.classList.remove('hide');
    productThumbnailListDiv.classList.add('hide');
  }


  // .product-lightbox-carousel 
  // Event listeners to product-lightbox
  // on header background click, add click event listener
  const lightboxCloseIcon = document.getElementById('lightbox-icon-close');

  lightboxCloseIcon.addEventListener('click', (e) => {
    e.preventDefault();

    // hide lightbox list, if width >= 992px
    productLightboxList.classList.add('hide');
    // hide header background
    headerBackground.classList.add('hide');
    // Remove current lightbox thumbnail highlight and add hide to current lightbox main img    
    lightboxProductItem[lightboxCurrentIdx].classList.add('hide');
    lightboxProductThumbnails[lightboxCurrentIdx].classList.add('highlight');
    // Reset lightboxCurrentIdx to 0.
    lightboxCurrentIdx = 0;
    // lightboxProductItem[0].classList.remove('hide');
    // lightboxProductThumbnails[0].classList.add('highlight');
  });

  lightboxIconPrev.addEventListener('click', (e) => {
    e.preventDefault();
    const currentLightboxItemIdx = lightboxProductItem[lightboxCurrentIdx];
    const currentLightboxThumbnail = lightboxProductThumbnails[lightboxCurrentIdx];
    currentLightboxItemIdx.classList.add('hide');
    currentLightboxThumbnail.parentElement.classList.remove('highlight');

    lightboxCurrentIdx = lightboxCurrentIdx === 0 ? 3 : lightboxCurrentIdx - 1;
    lightboxProductItem[lightboxCurrentIdx].classList.remove('hide');
    lightboxProductThumbnails[lightboxCurrentIdx].parentElement.classList.add('highlight');

  });

  lightboxIconNext.addEventListener('click', (e) => {
    e.preventDefault();
    const currentLightboxItemIdx = lightboxProductItem[lightboxCurrentIdx];
    const currentLightboxThumbnail = lightboxProductThumbnails[lightboxCurrentIdx];
    currentLightboxItemIdx.classList.add('hide');
    currentLightboxThumbnail.parentElement.classList.remove('highlight');

    lightboxCurrentIdx = lightboxCurrentIdx === 3 ? 0 : lightboxCurrentIdx + 1;
    lightboxProductItem[lightboxCurrentIdx].classList.remove('hide');
    lightboxProductThumbnails[lightboxCurrentIdx].parentElement.classList.add('highlight');
  });
});