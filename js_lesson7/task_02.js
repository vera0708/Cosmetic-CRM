'use strict'
// Первая задача:

const userNumber = +prompt('Введите желаемое количество элементов');
const limitOne = +prompt('Введите границу диапазона для генерирации массива');
const limitTwo = +prompt('Введите вторую границу диапазона для генерирации массива');

let minValue;
let maxValue;
const randomArr = [];


const generateRandomNum = (num, one, two) => {
    if (two > one) {
        maxValue = two;
        minValue = one;
    }
    else {
        maxValue = one;
        minValue = two;
    }

    for (let i = 0; i < num; i++) {

        randomArr.push(Math.round(Math.random() * (maxValue - minValue + 1)) + minValue);
    }
    console.log(`Массив с ${num}-ю случайными числами от ${minValue} до ${maxValue}: ${randomArr.join(', ')}`);
}

if (userNumber < 0 ||
    Number.isFinite(userNumber) === false ||
    Number.isFinite(limitOne) === false ||
    Number.isFinite(limitTwo) === false) {
    console.log("Вы ввели некорректную информацию")
} else {
    generateRandomNum(userNumber, limitOne, limitTwo);
}