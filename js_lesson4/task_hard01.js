'use strict'
// Первая дополнительная задача:

const numberOne = +prompt('Введите любое целое число');
const numberTwo = +prompt('Введите второе целое число');

let excess;
let firstN = 1;
let twoN = 1;

const calcGcd = (one, two) => {

    if (two > one) {
        firstN = two;
        twoN = one;
    }
    else {
        firstN = one;
        twoN = two;
    }

    while (excess !== 0 || excess !== 1) {
        excess = (firstN % twoN);
        firstN = twoN;
        twoN = excess;

        if (excess === 0) {
            return `Наибольший общий делитель ваших чисел ${numberOne} и ${numberTwo} это ${firstN}`;
        }
        if (excess === 1) {
            return `Ваши числа являются простыми`;
        }
    }
};

if (Number.isFinite(numberOne) === false || Number.isFinite(numberTwo) === false) {
    console.log("Вы ввели не числа")
}
else {
    console.log(calcGcd(Math.abs(numberOne), Math.abs(numberTwo)));
}