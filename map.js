const numbers = [2, 3, 5, 6, 8, 9];
const output = [];
for (const number of numbers) {
    const doubled = number * 2;
    output.push(doubled);
}
// console.log(output);

function getDoubled(numbers) {
    const output = [];
    for (const number of numbers) {
        const doubled = doubledIt(number);
        output.push(doubled);
    }
    return output;
}

function doubledItOld(num) {
    return num * 2;
}
const doubledIt = num => num * 2;

const makeDouble = numbers.map(doubledIt)
const makeDoubleDirect = numbers.map(num => num * 2)
const makeDouble2 = numbers.map(x => x * 2);
const fiveTimes = [1, 2, 3, 4, 5].map(x => x * 5);
console.log(fiveTimes);


const result = getDoubled(numbers);
console.log(result);
console.log(makeDouble);
console.log(makeDoubleDirect);