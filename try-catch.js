const name = 'ami';
// name = 'tumi';
try {
    name = 'tumi';
}
catch (error) {
    console.log('getting error', error);
}
finally {
    console.log(name);
}
console.log(100);