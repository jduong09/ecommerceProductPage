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
});