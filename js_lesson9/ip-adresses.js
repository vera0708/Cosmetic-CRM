'use strict'
// Вторая задача:

import { listIPv4 } from './ipv4.js';

const uniqIP = new Set(listIPv4);
console.log(`Количество уникальных ip-адресов : ${uniqIP.size}`);

// <script type="module" src="js_lesson9/ip-adresses.js"></script>