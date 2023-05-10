'use strict'
// Третья задача:

const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const prefNames = [];

const addPrefix = (arr, pref) => {
    for (let i = 0; i < arr.length; i++) {
        const element = '\'' + pref + ' ' + arr[i] + '\'';
        prefNames.push(element);
    }
    console.log(prefNames.join(', '));
}

addPrefix(names, 'Mr');
