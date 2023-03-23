const numbers = [12, 34, 45, 67, 78];
const half = numbers.map(n => n / 2);
const third = numbers.map(x => (x / 3).toFixed(2));
// console.log(third);
// console.log(half);

const friends = ['Tom Hanks', 'Tom Brady', 'Tom Cruise', 'Tom Solaiman'];
const firstLetters = friends.map(friend => friend[0]);
const nameLength = friends.map(f => f.length);
console.log(firstLetters);
console.log(nameLength);

const products = [
    { id: 1, name: 'Laptop', price: 45000 },
    { id: 2, name: 'MObile', price: 90000 },
    { id: 3, name: 'Match', price: 35000 },
    { id: 4, name: 'Tablet', price: 18000 },
    { id: 5, name: 'Money Bag', price: 400 },
];
const productName = products.map(n => n.name);
const prices = products.map(p => p.price)
console.log(productName);
console.log(prices);
