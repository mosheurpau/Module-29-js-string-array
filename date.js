const myFavDate = new Date('1971-12-16');
console.log(myFavDate);
const anotherDate = new Date(1971, 3, 26, 11, 50, 23, 43);
console.log(anotherDate);

if (myFavDate.getDate() < anotherDate.getDate()) {
    console.log('favorite is early');
}