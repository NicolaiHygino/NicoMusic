export const calcFontSize = (string) => {
  const length = string.length;
  if (length <= 15) {
    return '6em';
  } else if (length <= 20) {
    return '4.5em';
  } else {
    return '3em';
  }
};
