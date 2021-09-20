export const getRandomItems = (array, length) => {
  let randItems = [];
  while (randItems.length < length) {
    let randNum = Math.floor(Math.random() * array.length);
    if (randItems.every((item) => item.name !== array[randNum].name)) {
      randItems.push(array[randNum]);
    }
  }
  return randItems;
};
