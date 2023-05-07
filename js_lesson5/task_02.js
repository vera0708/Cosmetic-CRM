'use strict'
// Вторая задача:

const userNumber = +prompt('Введите целое число больше 1');
let n = 1000;

if (userNumber < 2 || Number.isFinite(userNumber) === false) {
    console.log("Вы ввели некоректные данные. Попробуйте ещё раз.")
}
else {
    const isPrime = (integer) => {

        if (integer % 2 === 0) {
            // console.log('false');
            return false;
        };

    };
}
const primeNumber = isPrime(userNumber);

console.log(primeNumber);