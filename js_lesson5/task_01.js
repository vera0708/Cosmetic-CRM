'use strict'
// первая задача:

console.log('-------------------------------------------------------------------------------');
let string = '';
let result = 'a**m  |';

for (let i = 1; i <= 10; i++) {

    string = i + string.slice(1).padStart(13, ' ');
    result = result + string + '|';
}

console.log(result);
console.log('------------------------------------------------------------------------------------');
let power;
let powerRow = '';

for (let i = 1; i <= 10; i++) {
    let powerCell = '';
    for (let j = 1; j <= 10; j++) {
        power = i ** j;
        powerCell += '   ' + power + '    |';
    }
    console.log(powerCell);
    console.log('----------------------------------------------------------------------------')
}
