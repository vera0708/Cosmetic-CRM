'use strict'
// Третья задача:

const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const prefNames = [];

const addPrefix = (arr, pref) => {
    const prefNames = arr.join('Mr');
    console.log(pref);
    console.log(prefNames);
}

addPrefix(names, 'Mr');

console.log(prefNames);