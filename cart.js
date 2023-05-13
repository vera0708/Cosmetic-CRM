const cart = {
    items: [],
    totalPrice: 0,
    count: 0,
    getTotalPrice() {
        return this.totalPrice
    },
    add(name, price, amount = 1) {
        const product = {
            name: name,
            price: price,
            amount: amount,
        }
        this.items.push(product);
        this.count += amount;
        this.totalPrice += price;
    },
    increaseCount(amoumt) {
        this.count += amoumt;
    },
    calculateItemPrice() {
        const total = this.items.reduce((accum, current) =>
            accum + current, 0);
        this.totalPrice = total;
    },
    clear() {
        items = [];
        totalPrice = 0;
        count = 0;
    },
    print() {
        console.log(JSON.stringify(this.items));
        console.log('Общая стоимость корзины: ', this.totalPrice);
    },
};

cart.add('lipstic', 16, 4);
cart.add('parfumt', 125, 1);
cart.add('base', 30, 3);
cart.add('mascara', 24, 2);
cart.print();

console.log('getTotalPrice: ', cart.getTotalPrice());
console.log('count: ', cart.count);

cart.increaseCount(3);
console.log('count increased: ', cart.count);

cart.calculateItemPrice();

cart.clear();
console.log('getTotalPrice: ', cart.getTotalPrice());




