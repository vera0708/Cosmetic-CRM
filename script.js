'use strict'
// Первая  задача:

const productName = prompt('Введите наименование товара');

const productAmount = +prompt('Введите количество товара');
if (Number.isFinite(productAmount) === false) {
    console.log("Вы ввели некорректное количество товара")
}
const productCategory = prompt('Укажите категорию товара');

const productPrice = +prompt('Укажите желаемую цену товара');
if (Number.isFinite(productPrice) === false) {
    console.log("Вы ввели некорректную цену товара")
}


const totalSum = productAmount * productPrice;

// console.log('Тип переменной "количество товара"' + typeof (productAmount));
// console.log('Тип переменной "цену товара"' + typeof (productPrice));
// console.log(`Итого выбрано ${productAmount} единиц товара "${productName}" на общую сумму ${totalSum} рублей.`);
