export const smallerImg = (imgList) => {
  if (imgList.length === 0) return;
  if(!Array.isArray(imgList)) return;
  return imgList.reduce((smaller, currentImg) => {
    return currentImg.width < smaller.width ? currentImg : smaller;
  });
};
