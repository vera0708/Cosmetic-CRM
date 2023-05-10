'use strict'
// Первая дополнительная задача:

const allCashbox = [[12, 4500], [7, 3210], [4, 650], [3, 1250], [9, 7830], [1, 990], [6, 13900], [1, 370]];

let medium = 0;
let sumArr = 0;
let amountArr = 0;

const getAveragePriceGoods = arr => {

    for (let i = 0; i < arr.length; i++) {
        amountArr += arr[i][0];
        sumArr += arr[i][1];
    }
    medium = Math.round(sumArr / amountArr);
    console.log(`Cредняя стоимость одного товара в магазине: ${medium} руб.`);
}

getAveragePriceGoods(allCashbox);

