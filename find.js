const numbers = [12, 23, 34, 32, 43, 45, 56, 71, 9, 10];
const fives = numbers.find(number => number % 5 === 0);
const even = numbers.find(number => number % 2 === 0);
console.log(even);


const products = [
    { id: 1, name: 'Laptop', price: 45000 },
    { id: 2, name: 'MObile', price: 90000 },
    { id: 3, name: 'Match', price: 35000 },
    { id: 4, name: 'Tablet', price: 18000 },
    { id: 5, name: 'Money Bag', price: 400 },
];

const cheap = products.find(product => product.price < 20000);
console.log(cheap);