export const smallerImg = (imgList) => {
  if (imgList.length === 0) return;
  return imgList.reduce((smaller, currentImg) => {
    if (currentImg.width < smaller.width) return currentImg;
  });
};
