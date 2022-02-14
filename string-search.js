const products = [
    'Dell hardcor i29 200gb laptop',
    'iphone 1TB camera flashlight Phone',
    'yellow laptop with blac camera',
    'Dell hardcor i79 500gb laptop',
    'iphone 44B camera phone',
    'dell laptop with blac camera',
    'htc low price phone',
    'PH hardcor i79 100gb Laptop',

]
const output = [];
const searching = 'phone';
// indexOf
for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        // output.push(product);
    }
}
// console.log(output);

// includes
for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        // output.push(product);
    }
}
// console.log(output);

// startsWith
for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        // output.push(product);
    }
}
// console.log(output);

for (const product of products) {
    if (product.toLowerCase().endsWith(searching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output);