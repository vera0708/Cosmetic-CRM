'use strict'
// Третья задача:

const amount = 10;
const discountToAmount = 0.03;
const bigSum = 30000;
const discountToSum = 0.15;
const discountToMethed = 0.1;
const minSum = 2000;
const discountToPromo = 500;

const getDiscountToAmount = (sum, parameter) => {
    if (parameter > amount) {
        const result = sum - (sum * discountToAmount);
        return result;
    }
    else {
        const result = sum;
        return result;
    };
}

const getDiscountToSum = (lastsum) => {
    if (lastsum > bigSum) {
        const result = bigSum + (lastsum - bigSum) * (1 - discountToSum);
        return result;
    }
    else {
        const result = lastsum;
        return result;
    }
}

const getDiscountToMETHED = (lastsum, promo) => {
    if (promo === 'METHED') {
        const result = Math.round(lastsum * (1 - discountToMethed));
        return result;
    }
    else {
        const result = lastsum;
        return result;
    }
}

const getAddDiscount = (lastsum, promo) => {
    if (promo === 'G3H2Z1' && lastsum > minSum) {
        const result = (lastsum - discountToPromo);
        return result;
    }
    else {
        const result = lastsum;
        return result;
    }
}

const calculate = (sum, amountGoods, promo) => {

    const sumAfterAmountDiscount = getDiscountToAmount(sum, amountGoods);
    // console.log('sumAfterAmountDiscount: ', sumAfterAmountDiscount);

    const sumAfterSumDiscount = getDiscountToSum(sumAfterAmountDiscount);
    // console.log('sumAfterSumDiscount: ', sumAfterSumDiscount);

    const sumAfterMETHED = getDiscountToMETHED(sumAfterSumDiscount, promo);
    // console.log('sumAfterMETHED: ', sumAfterMETHED);

    const sumAfterAddDiscount = getAddDiscount(sumAfterMETHED, promo);
    // console.log('sumAfterAddDiscount: ', sumAfterAddDiscount);

    return sumAfterAddDiscount;
};

const totalSum = calculate(9000, 5);
console.log(`У вас не выполнено ни одно условие для скидок. Итоговая сумма ${totalSum}₽`);

// const totalSum1 = calculate(19000, 13);
// console.log(`У вас больше 10 товаров. Применена скидка 3%. Итоговая сумма ${totalSum1}₽`);

// const totalSum2 = calculate(39000, 7);
// console.log(`Сумма покупки более 30 000 ₽. Применена скидка 15% на превышение. Итоговая сумма ${totalSum2}₽`);

// const totalSum3 = calculate(39000, 17);
// console.log(`Сумма покупки более 30 000 ₽ и больше 10 товаров. Применена скидка скидка 3% на всю сумму и 15% на превышение. Итоговая сумма ${totalSum3}₽`);

// const totalSum4 = calculate(9000, 5, 'METHED');
// console.log(`У вас учтён промокод "METHED", то есть скидка 10%. Итоговая сумма ${totalSum4}₽`);

// const totalSum5 = calculate(39000, 15, 'METHED');
// console.log(`У вас применены скидки на покупку более 10 товаров на более 30 000 ₽ и учтён промокод "METHED". Итоговая сумма ${totalSum5}₽`);

// const totalSum6 = calculate(9000, 5, 'G3H2Z1');
// console.log(`У вас применён промокод "G3H2Z1", то есть скидка 500 ₽, так как сумма покупок свыше 2 000 ₽. Итоговая  сумма ${totalSum6} ₽`);

// const totalSum7 = calculate(2050, 11, 'G3H2Z1');
// console.log(`У вас больше 10 товаров. Применена скидка 3%. Итоговая  сумма ${totalSum7} ₽`);
