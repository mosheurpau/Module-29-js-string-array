const number = [3, 6, 4, 8, 9, 17, 21, 35, 38, 76];
// const numberSliced = number.slice(4, 8);
// console.log(numberSliced);
// console.log(number);

const numberSpliced2 = number.splice(4, 3, 99, 101, 888, 999);
console.log(numberSpliced2);
console.log(number);