'use strict'
// Первая дополнительная задача:

const numberOne = +prompt('Введите любое целое число');
const numberTwo = +prompt('Введите второе целое число');

const calcGcd = (one, two) => {
    console.log('two  ', two);
    if (two > one) {
        const firstNum = two;
        const two = one;
        console.log('first1  ', firstNum);
        console.log('two  ', two);
    } else {
        const firstNum = one;
        console.log('first  ', firstNum);
        console.log('two  ', two);
    }

    const excess = (first % two);
    console.log('excess  ', excess);

    // while (excess !== 0) {
    //     const one = two;
    //     const two = excess;
    //     console.log('excess  ', excess);
    // }
    return two;
};

// if (Number.isFinite(numberOne) === false || Number.isFinite(numberTwo) === false) {
//     console.log("Вы ввели не числа")
// }
// else {
const absNumberOne = Math.abs(numberOne);
const absNumberTwo = Math.abs(numberTwo);
// console.log('numberOne', numberOne);
// console.log('numberTwo', numberTwo);

const greatestCommonDivisor = calcGcd(absNumberOne, absNumberTwo);
// if (Math.abs(numberTwo) > Math.abs(numberOne)) {
//     const greatestCommonDivisor = calcGcd(Math.abs(numberTwo), Math.abs(numberOne));
// } else {
//     const greatestCommonDivisor = calcGcd(Math.abs(numberOne), Math.abs(numberTwo));
// }
// }
console.log(`Наибольший общий делитель${greatestCommonDivisor}`);

// console.log(`Наибольший общий делитель ваших чисел ${numberOne} и ${numberTwo} это ${greatestCommonDivisor}`);