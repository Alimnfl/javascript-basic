// Arrays - variable that hold multiple values

const fruits = ['apples', 'oranges', 'pears'];

fruits[3] = 'Grapes';

fruits.push('mangos');

fruits.unshift('strawberries');

console.log(fruits);
console.log(Array.isArray(fruits));

// 1. First way
// const numbers = new Array(1, 2, 3, 4, 5, 6);
// console.log(numbers);

// 2. Second way
// const fruits = ['apples', 'oranges', 'pears'];
// console.log(fruits[1]);
