//Asynchronocity of NodeJS

console.log('I come first');
setTimeout(function() {
    console.log('I come second');
}, 2000);
console.log('I come last');