export const smallerImg = (imgList) => {
  if (imgList.length === 0) return;
  return imgList.reduce((smaller, currentImg) => {
    return currentImg.width < smaller.width ? currentImg : smaller;
  });
};
