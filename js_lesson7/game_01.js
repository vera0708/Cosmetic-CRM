'use strict'
// Первая дополнительная задача:

const userNumber = +prompt('Введите вариант загаданного мной числа от 1 до 100');

const maxValue = 100;
const myNumber = Math.round(Math.random() * maxValue) + 1;

const guessNumber = (num) => {

    while (num !== null) {
        if (num === myNumber) {
            console.log(`Правильно!`);
            return
        } else
            if (num < myNumber) {
                console.log(`Больше! Было загаданно число: ${myNumber}`);
                return
            }
            else {
                console.log(`Меньше! Было загаданно число: ${myNumber}`)
                return
            }
    }
}

if (Number.isFinite(userNumber) === false) {
    console.log(`Введи число!`)
} else {
    guessNumber(userNumber);

}