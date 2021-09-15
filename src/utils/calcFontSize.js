export const calcFontSize = (string) => {
  const length = string.length;
  if (length <= 15) {
    return '4em';
  } else if (length <= 20) {
    return '3.5em';
  } else {
    return '2.5em';
  }
};
