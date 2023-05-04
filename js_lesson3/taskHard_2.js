'use strict'
// Вторая дополнительная задача:
let taxSum = 0;

const monthlyIncome = +prompt('Какой у вас доход в месяц?');

const tax = 0.13;
const highTax = 0.2;
const extraTax = 0.3;

if (monthlyIncome < 0 || Number.isFinite(monthlyIncome) === false) {
    console.log("Вы ввели некорректный доход")
} else
    switch (true) {
        case (monthlyIncome < 15000):
            taxSum = monthlyIncome * tax;
            break;
        case (monthlyIncome > 15000 && monthlyIncome < 50000):
            taxSum = 15000 * tax + (monthlyIncome - 15000) * highTax;
            break;
        case (monthlyIncome > 50000):
            taxSum = 15000 * tax + (35000) * highTax + (monthlyIncome - 50000) * extraTax;
            break;
    }
console.log(`Ваша сумма налога: ${taxSum}`);