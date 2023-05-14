'use strict'
// Вторая задача:

import listIPv4 from './ipv4';

const uniqIP = new Set(listIPv4);
console.log(`Количество уникальных ip-адресов : ${uniqIP.size}`);