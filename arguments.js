function addNumbers(num1, num2) {
    let result = 0;
    // console.log(arguments);
    // console.log(arguments[1]);
    for (const num of arguments) {
        result += num;
    }
    // const result = num1 + num2;
    return result;
}

const sum = addNumbers(32, 13, 34, 56, 23, 56);
// console.log(sum);

function getfullName(fristName, lastName) {
    let fullName = '';
    for (const part of arguments) {
        fullName = fullName + part + ' ';
    }
    return fullName;
}

const name = getfullName('MD', 'Mosheur', 'Rahman', 'Mehedi');
console.log(name);