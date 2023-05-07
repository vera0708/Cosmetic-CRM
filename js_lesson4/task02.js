'use strict'
// Вторая задача:

const initString = prompt('Введите короткий текст, используя маленькие и заглавние буквы');

const modifyString = (text) => {
    let string = text.trimStart().toLowerCase();
    return string[0].toUpperCase() + string.slice(1);
}

const modifiedString = modifyString(initString)

console.log(`Ваша строка с большой буквы, остальные буквы маленькие: "${modifiedString}"`);