'use strict'
// Первая дополнительная задача:

const numberOne = +prompt('Введите любое целое число');
const numberTwo = +prompt('Введите второе целое число');

let one = 1;
let two = 1;
let excess = 1;
let firstN = 1;
let twoN = 1;

const calcGcd = (one, two) => {

    if (two > one) {
        const firstN = two;
        const twoN = one;
    }
    else {
        const firstN = one;
        const twoN = two;
    }
    do {
        excess = (firstN % twoN);
        firstN = twoN;
        twoN = excess;
    } while (excess !== 0 || excess !== 1)

    if (excess === 0) {
        return firstN;
    }
    if (excess === 1) {
        return console.log(`Ваши числа являются простыми`);;
    }
};

if (Number.isFinite(numberOne) === false || Number.isFinite(numberTwo) === false) {
    console.log("Вы ввели не числа")
}
else {
    const absNumberOne = Math.abs(numberOne);
    const absNumberTwo = Math.abs(numberTwo);

    const greatestCommonDivisor = calcGcd(absNumberOne, absNumberTwo);

    console.log(`Наибольший общий делитель ваших чисел ${numberOne} и ${numberTwo} это ${greatestCommonDivisor}`);
}