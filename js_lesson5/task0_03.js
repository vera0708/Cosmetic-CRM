'use strict'
// Вторая задача:

const initString = prompt('Введите короткий текст, используя маленькие и заглавние буквы');

const modifyString = (text) => {
    let string = text.split('').reverse().join('');
    return string;
}

const modifiedString = modifyString(initString)

console.log(`Ваша строка задом наперёд: "${modifiedString}"`);