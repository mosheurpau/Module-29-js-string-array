function magaFriend(friends) {
    if (Array.isArray(friends) == false) {
        return 'Please provide an array';
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (mega.length < friend.length) {
            mega = friend;
        }
    }
    return mega;
}

const friends = ['kamrul', 'shakila', 'samiul', 'soykot'];
const myBigBody = magaFriend(friends);
console.log(myBigBody);
if (friends.indexOf('kabbo') != -1) {
    console.log('kabbo exists');
}
else {
    console.log('kabbo dose not exists');
}
if (friends.includes('soykot')) {
    console.log('Soykot exists');
}

const first = [1, 2, 3, 4, 5];
const second = [6, 7, 8, 9];
const combined = first.concat(second);
console.log(combined);