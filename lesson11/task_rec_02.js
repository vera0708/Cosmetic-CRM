'use strict'
// Вторая задача на рекурсию:

const randomArr = [];
const maxValue = 10;
const limit = 50;
let sum = 0;
let randomNumber;

const sumRandom = (arr) => {
    if (sum >= limit) {
        return arr;
    } else {
        randomNumber = (Math.round(Math.random() * maxValue) + 1);
        // console.log(`randomNumber: ${randomNumber}`);
        arr.push(randomNumber);
        sum = sum + randomNumber;
        // console.log(`Сумма элементов массива: ${sum}`);
        sumRandom(arr)
    }
}
sumRandom(randomArr);
