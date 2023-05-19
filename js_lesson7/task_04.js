'use strict'
// Четвёртая дополнительная задача:

const limitOne = +prompt('Введите цифрами год для находжения високосных годов');
const limitTwo = +prompt('Введите ещё один год как границу для поиска');

let minValue;
let maxValue;
const leapYearArr = [];


const getLeapYears = (one, two) => {
    if (two > one) {
        maxValue = two;
        minValue = one;
    }
    else {
        maxValue = one;
        minValue = two;
    }

    for (let year = minValue; year <= maxValue; year++) {
        if (!(year % 4)) {
            leapYearArr.push(year);
        }
    }
    console.log(`Массив с високосными годами в диапазоне от ${minValue} до ${maxValue}: ${leapYearArr.join(', ')}`);
}

if (Number.isFinite(limitOne) === false ||
    Number.isFinite(limitTwo) === false) {
    console.log(`Вы ввели некорректную информацию`)
} else {
    getLeapYears(limitOne, limitTwo);
}