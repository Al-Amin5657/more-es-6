const numbers = [12, 23, 34, 32, 43, 45, 56, 71, 9, 10];
const bigNums = numbers.filter(n => n > 20);
const tiny = numbers.filter(n => n < 10);
const even = numbers.filter(n => n % 2 === 0);

// console.log(tiny)
// console.log(even)
// console.log(bigNums)

const products = [
    { id: 1, name: 'Laptop', price: 45000 },
    { id: 2, name: 'MObile', price: 90000 },
    { id: 3, name: 'Match', price: 35000 },
    { id: 4, name: 'Tablet', price: 18000 },
    { id: 5, name: 'Money Bag', price: 400 },
];

const expensive = products.filter(product => product.price > 30000);
const moreExpensive = products.filter(product => product.price === 90000);
console.log(expensive);
console.log(moreExpensive);