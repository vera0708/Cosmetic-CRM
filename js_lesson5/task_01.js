'use strict'
// первая задача:



console.log('--------------------------------------------------------------');
let string = '';
let result = 'a**m  |';

for (let i = 1; i <= 10; i++) {

    string = i + string.slice(1).padStart(13, ' ');
    result = result + string + '|';
}

console.log(result);
console.log('--------------------------------------------------------------');
let power = 1;

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        power = i ** j;
        console.log(power);
    }
    // string = i + string.slice(1).padStart(13, ' ');
    // result = result + string + '|';
}
