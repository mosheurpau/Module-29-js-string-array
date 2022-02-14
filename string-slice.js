const anthem = 'the multiplayer game reboot which has been in the works';
const words = anthem.split(' ');
const reversWord = words.reverse();
console.log(reversWord);


const withoutA = anthem.split('a');
// console.log(withoutA);

// slice
const smallSlice = anthem.slice(5, 18);
// console.log(smallSlice);

// substr
const anotherPart = anthem.substr(15, 8);
// console.log(anotherPart);

// substring
const anotherAnotherPart = anthem.substring(11, 15);
// console.log(anotherAnotherPart);

// concat 
const first = 'Amader';
const second = 'City';
// const fullString = first + second;
const fullString = first.concat(second).concat('abc').concat('dnvdkjvnd');
console.log(fullString);

// join
const words2 = ['alim', 'bokul', 'cameron', 'david'];
// const allJoined = words2.join('');
// const allJoined = words2.join(' ');
// const allJoined = words2.join(', ');
const allJoined = words2.join(' www');
// console.log(allJoined);

