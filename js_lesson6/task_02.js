'use strict'
// Вторая задача:

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

let medium = 0;
let sumArray = 0;

const getAverageValue = arr => {
    for (const element of allCashbox) {
        sumArray += element;
    }
    medium = sumArray / arr.length;
}

getAverageValue(allCashbox);

console.log(medium);