'use strict'
// Третья задача:

const userNumber = +prompt('Введите желаемое количество элементов');
const limitOne = +prompt('Введите границу диапазона для генерирации массива');
const limitTwo = +prompt('Введите вторую границу диапазона для генерирации массива');
const option = prompt('Для получения массива из чётных чисел введите even, нечётных - odd');

let minValue;
let maxValue;
const randomArr = [];

const generateRandomNum = (num, one, two, alt) => {
    if (two > one) {
        maxValue = two;
        minValue = one;
    }
    else {
        maxValue = one;
        minValue = two;
    }

    let element;
    while (randomArr.length < num) {
        element = Math.round(Math.random() * (maxValue - minValue + 1)) + minValue;

        if (alt === 'even' && !(element % 2)) {
            randomArr.push(element);
        }
        if (alt === 'odd' && (element % 2)) {
            randomArr.push(element);
        }
    }
    let defeniting = '';
    if (alt === 'even') {
        defeniting = 'чётными'
    } else { defeniting = 'нечётными' }
    console.log(`Массив с ${num}-ю ${defeniting} числами от ${minValue} до ${maxValue}: ${randomArr.join(', ')}`);
}

if (userNumber < 0 ||
    Number.isFinite(userNumber) === false ||
    Number.isFinite(limitOne) === false ||
    Number.isFinite(limitTwo) === false) {
    console.log(`Вы ввели некорректную информацию`)
} else {
    if (option === 'odd' || option === 'even') {
        generateRandomNum(userNumber, limitOne, limitTwo, option)
    }
    else {
        console.log(`Для выбора чётного / нечётного массива введите even или odd`)
    }
}