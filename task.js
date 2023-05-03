'use strict'

// Вторая задача:

const rain = Math.round(Math.random());
console.log(rain)

console.log(rain === 1 ? "Пошёл дождь. Возьмите зонт!" : "Дождя нет!");


//Третья задача:

// const creditMath = +prompt('Введите кол-во баллов по математике');
// const creditRusLanguage = +prompt('Введите кол-во баллов по русскому языку');
// const creditInformatic = +prompt('Введите кол-во баллов по информатике');

// const res = creditMath + creditRusLanguage + creditInformatic;
// console.log(res >= 265 ? "Поздравляю, вы поступили на бюджет!" : ":(");

//Четвёртая задача:

const moneyFromATM = +prompt('Какую сумму вы хотите снять?');

const opportunity = moneyFromATM % 100;
console.log(opportunity === 0 ? "Возьмите ваши деньги!" : "Сумма должна быть кратна 100 руб.");