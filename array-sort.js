const numbers = [4, 7, 1, 6, 9, 2, 5, 3];
const sortedNumber = numbers.sort();
// console.log(sortedNumber);
const friends = ['kamrul', 'shakila', 'gamiul', 'woykot', 'josim', 'parvez'];
const sortedFriends = friends.sort();
// console.log(sortedFriends);
const reverseFriends = friends.sort().reverse();
// console.log(reverseFriends);

// number sorting fun
const bigNumber = [65, 67, 34, 8, 7, 34, 87, 90, 76, 43, 97];
const sortedBigNumber = bigNumber.sort(function (a, b) {
    return a - b;
});
console.log(sortedBigNumber);