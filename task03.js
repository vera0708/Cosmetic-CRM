'use strict'
// Третья задача:

const amount = 10;
const discountToAmount = 0.03;
const bigSum = 30000;
const discountToSum = 0.15;

const calculate = (sum, amountGoods) => {
    if (amountGoods > amount) {
        const result = sum - (sum * discountToAmount);
        console.log('sum - 3%: ', result);
        return result;
    }
    // else {
    //     const result = sum;
    //     console.log('result: ', result);
    //     // return result;
    // };

    if (result > bigSum) {
        const result1 = bigSum + (sum - bigSum) * (1 - discountToSum);
        console.log(result1);
        return result1;
    }
    // else {
    //     const result = sum;
    //     console.log(result);
    //     return result;
    // }
};

// const totalSum = calculate(9000, 5);
// console.log(`У вас не выполнено ни одно условие для скидок. Итоговая сумма ${totalSum}₽`);

// const totalSum1 = calculate(19000, 13);
// console.log(`У вас больше 10 товаров. Применена скидка 3%. Итоговая сумма ${totalSum1}₽`);

// const totalSum2 = calculate(39000, 7);
// console.log(`Сумма покупки более 30 000 ₽. Применена скидка 15% на превышение. Итоговая сумма ${totalSum2}₽`);

const totalSum3 = calculate(39000, 17);
console.log(`Сумма покупки более 30 000 ₽ и больше 10 товаров. Применена скидка скидка 3% на всю сумму и 15% на превышение. Итоговая сумма ${totalSum3}₽`);

// const totalSum4 = calculate(9000, 5, 'METHED');
// console.log(`У вас применён промокод "METHED", то есть скидка 10%. Итоговая сумма ${totalSum4}₽`);

// const totalSum5 = calculate(9000, 5, 'G3H2Z1');
// console.log(`У вас применён промокод "METHED", то есть скидка 500 ₽, так как сумма покупок свыше 2 000 ₽. Итоговая  сумма ${totalSum5} ₽`);
