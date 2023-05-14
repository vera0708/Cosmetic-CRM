'use strict';
// Первая задача:

const cart = {
  items: [],
  get totalPrice() {
    return this.realPrice;
  },

  set totalPrice(sum) {
    this.realPrice = sum;
  },
  realPrice: 0,
  count: 0,

  add(name, price, amount = 1) {
    const product = {
      name,
      price,
      amount,
    };
    this.items.push(product);
    this.count += amount;
    this.totalPrice += price;
  },
  increaseCount(amoumt) {
    this.count += amoumt;
  },
  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },
  print() {
    console.log(JSON.stringify(this.items));
    console.log(`Общая стоимость корзины: , ${this.totalPrice}`);
  },
};

cart.add('lipstic', 16, 4);
cart.add('parfumt', 125, 1);
cart.add('base', 30, 3);
cart.add('mascara', 24, 2);
cart.print();

console.log(`cart.totalPrice: , ${cart.totalPrice}`);

console.log('count: ', cart.count);

cart.increaseCount(3);
console.log('count increased: ', cart.count);

cart.clear();


