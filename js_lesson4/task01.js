'use strict'
// Первая задача:

const amountEU = +prompt('Введите сумму в евро');

const rateUsdToEU = 1.2;
const rateRurToUsd = 73;

if (amountEU < 0 || Number.isFinite(amountEU) === false) {
    console.log("Вы ввели некорректную сумму")
} else {

    const calcSum = (current, rate) => {
        const sum = current * rate;
        return sum;
    };

    const amountUsd = calcSum(amountEU, rateUsdToEU);

    const amountRur = calcSum(amountUsd, rateRurToUsd);

    console.log(`По текущему курсу за ${amountEU} € вы получите ${amountRur} ₽`);
}