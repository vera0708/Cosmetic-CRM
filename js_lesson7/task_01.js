'use strict'
// Первая задача:

const userNumber = +prompt('Введите желаемое количество элементов');

const maxValue = 100;
const randomArr = [];

const generateRandomNum = (num) => {
    for (let i = 0; i < num; i++) {

        randomArr.push(Math.round(Math.random() * maxValue) + 1);
    }
    console.log(`Массив с ${num}-ю случайными числами от 1 до ${maxValue}: ${randomArr.join(', ')}`);
}

if (userNumber < 0 || Number.isFinite(userNumber) === false) {
    console.log(`Вы ввели некорректную информацию`)
} else {
    generateRandomNum(userNumber);

}