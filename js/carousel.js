document.addEventListener('DOMContentLoaded', () => {
  let currentCarouselImgIdx = 0;

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
    let productThumbnailListItem = productThumbnailList[i];

    productThumbnailListItem.addEventListener('click', () => {
      productItemList[currentCarouselImgIdx].classList.add('hide');
      productItemList[i].classList.remove('hide');

      productThumbnailList[currentCarouselImgIdx].classList.remove('highlight');
      productThumbnailListItem.classList.add('highlight');

      currentCarouselImgIdx = i;
    });
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 576) {
      iconPrev.classList.add('hide');
      iconNext.classList.add('hide');
      productThumbnailListDiv.classList.remove('hide');
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
});