'use strict'
// Вторая задача:

const userNumber = +prompt('Введите целое число больше 1');

if (userNumber < 2 || Number.isFinite(userNumber) === false) {
    console.log("Вы ввели некоректные данные. Попробуйте ещё раз.");
}
else {
    const isPrime = (integer) => {
        if (integer === 2 || integer === 3) {
            console.log('Ваше число ЯВЛЯЕТСЯ простым');
            return true
        } else

            if (integer % 2 === 0) {
                console.log('Ваше число не является простым');
                return false;
            } else

                for (let i = 5; i < integer; i += 2) {
                    if (integer % i === 0) {
                        console.log('Ваше число не является простым');
                        return false;
                    } else {
                        console.log('Ваше число ЯВЛЯЕТСЯ простым');
                        return true
                    }
                };
    };
}
const primeNumber = isPrime(userNumber);
