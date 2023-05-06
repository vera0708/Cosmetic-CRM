'use strict'
// Вторая дополнительная задача:

const numberOne = +prompt('Введите любое целое число');
const numberTwo = +prompt('Введите второе целое число');

const calcMin = (one, two) => {
    console.log('one  ', one);
    console.log('two  ', two);

    const minNum = (one < two) && one || (two < one) && two;

    return (minNum);
};

if (Number.isFinite(numberOne) === false || Number.isFinite(numberTwo) === false) {
    console.log("Вы ввели не числа")
}
else {
    const minNumber = calcMin(numberOne, numberTwo);
    console.log(`Наименьшее число ${minNumber}`);
}


